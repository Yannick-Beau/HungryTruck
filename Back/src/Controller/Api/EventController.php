<?php

namespace App\Controller\Api;

use App\Entity\Event;
use App\Entity\Foodtruck;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class EventController extends AbstractController
{
/**
     * @Route("/api/foodtruck/{id}/event/create", name="api_event_create", methods="POST")
     * @IsGranted("ROLE_PRO")
     */
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator, Foodtruck $foodtruck): Response
    {
        // On récupère le contenu de la requête (du JSON)
        $jsonContent = $request->getContent();

        // On désérialise le JSON vers une entité Event
        $event = $serializer->deserialize($jsonContent, Event::class, 'json');
        $event->setFoodtruck($foodtruck);


        // On valide l'entité avec le service Validator
        $errors = $validator->validate($event);



        // Affichage des erreurs
        if (count($errors) > 0) {

            $newErrors = [];

            foreach ($errors as $error) {

                $newErrors[$error->getPropertyPath()][] = $error->getMessage();
            }

            return new JsonResponse(["errors" => $newErrors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On persist, on flush
        $entityManager->persist($event);
        $entityManager->flush();

        return $this->json($event, Response::HTTP_CREATED, [], ['groups' => 'event_post']);
    }

    /**
     * Delete a event
     * 
     * @Route("/api/event/delete/{id<\d+>}", name="api_event_delete", methods="DELETE")
     * @IsGranted("ROLE_PRO")
     */
    public function delete(Event $event = null, EntityManagerInterface $em)
    {
        if (null === $event) {

            $error = 'Cette Event n\'existe pas';

            return $this->json(['error' => $error], Response::HTTP_NOT_FOUND);
        }
        $em->remove($event);
        $em->flush();

        return $this->json(['message' => 'L\'event a bien été supprimé.'], Response::HTTP_OK);
    }
}
