<?php

namespace App\Controller\Api;

use App\Entity\EventFoodtruck;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class EventFoodTruckController extends AbstractController
{
    /**
     * @Route("/api/eventfoodtruck/create", name="api_eventfoodtruck_create", methods="POST")
     * @IsGranted("ROLE_PRO")
     */
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator): Response
    {


        // On récupère le contenu de la requête (du JSON)
        $jsonContent = $request->getContent();

        // On désérialise le JSON vers une entité foodtruck
        $eventfoodtruck = $serializer->deserialize($jsonContent, EventFoodtruck::class, 'json');
        dd($eventfoodtruck);
        // on vient ajouter automatiquement user_id donc -> l'user qui add un foodtruck
        // $foodtruck = new Foodtruck();
        // $eventfoodtruck->addFoodtruck($foodtruck->getId());
        // On valide l'entité avec le service Validator
        $errors = $validator->validate($eventfoodtruck);



        // Affichage des erreurs
        if (count($errors) > 0) {

            $newErrors = [];

            foreach ($errors as $error) {

                $newErrors[$error->getPropertyPath()][] = $error->getMessage();
            }

            return new JsonResponse(["errors" => $newErrors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On persist, on flush
        $entityManager->persist($eventfoodtruck);
        $entityManager->flush();

        return $this->json($eventfoodtruck, Response::HTTP_CREATED, []);
    }

    /**
     * @Route("/api/eventfoodtruck/edit/{id<\d+>}", name="api_eventfoodtruck_edit", methods={"PUT"})
     * @IsGranted("ROLE_PRO")
     */
    public function itemEdit(EventFoodtruck $eventfoodtruck = null, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $entityManager, Request $request): Response
    {

        // foodtruck non trouvé
        if ($eventfoodtruck === null) {
            return new JsonResponse(
                ["message" => "Foodtruck non trouvé"],
                Response::HTTP_NOT_FOUND
            );
        }

        $data = $request->getContent();

        $eventfoodtruck = $serializer->deserialize($data, Foodtruck::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $eventfoodtruck]);

        // On valide l'entité
        $errors = $validator->validate($eventfoodtruck);

        // Affichage des erreurs
        if (count($errors) > 0) {
            $newErrors = [];

            foreach ($errors as $error) {
                $newErrors[$error->getPropertyPath()][] = $error->getMessage();
            }

            return new JsonResponse(["errors" => $newErrors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // Enregistrement en BDD
        $entityManager->flush();

        return new JsonResponse(["message" => "eventfoodtruck modifié"], Response::HTTP_OK);
    }
    /**
     * Delete a Foodtruck
     * 
     * @Route("/api/eventfoodtruck/delete/{id<\d+>}", name="api_eventfoodtruck_delete", methods="DELETE")
     * @IsGranted("ROLE_PRO")
     */
    public function delete(EventFoodtruck $eventfoodtruck = null, EntityManagerInterface $em)
    {
        if (null === $eventfoodtruck) {

            $error = 'Cette eventfoodtruck n\'existe pas';

            return $this->json(['error' => $error], Response::HTTP_NOT_FOUND);
        }
        $em->remove($eventfoodtruck);
        $em->flush();

        return $this->json(['message' => 'L\'eventfoodtruck a bien été supprimé.'], Response::HTTP_OK);
    }
}
