<?php

namespace App\Controller\Api;

use App\Entity\Foodtruck;
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
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class EventFoodTruckController extends AbstractController
{
    /**
     * @Route("/api/foodtruck/{id}/eventfoodtruck/create", name="api_eventfoodtruck_create", methods="POST")
     * @IsGranted("ROLE_PRO")
     */
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator, Foodtruck $foodtruck): Response
    {
        // On récupère le contenu de la requête (du JSON)
        $jsonContent = $request->getContent();

        // On désérialise le JSON vers une entité EventFoodtruck
        $eventfoodtruck = $serializer->deserialize($jsonContent, EventFoodtruck::class, 'json');
        $eventfoodtruck->addFoodtruck($foodtruck);


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

        return $this->json($eventfoodtruck, Response::HTTP_CREATED, [], ['groups' => 'foodtruckevent_post']);
    }

    /**
     * Delete a EventFoodtruck
     * 
     * @Route("/api/eventfoodtruck/delete/{id<\d+>}", name="api_eventfoodtruck_delete", methods="DELETE")
     * @IsGranted("ROLE_PRO")
     */
    public function delete(EventFoodtruck $eventfoodtruck = null, EntityManagerInterface $em)
    {
        if (null === $eventfoodtruck) {

            $error = 'Cette EventFoodtruck n\'existe pas';

            return $this->json(['error' => $error], Response::HTTP_NOT_FOUND);
        }
        $em->remove($eventfoodtruck);
        $em->flush();

        return $this->json(['message' => 'L\'EventFoodtruck a bien été supprimé.'], Response::HTTP_OK);
    }
}
