<?php

namespace App\Controller\Api;

use App\Entity\User;
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
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class ProController extends AbstractController
{
    /**
     * @Route("/api/pro", name="api_pro_show")
     * @IsGranted("ROLE_PRO")
     */
    public function show(User $user = null): Response
    {

        $user = $this->getUser();

        if ($user === null) {
            return new JsonResponse(
                ["message" => "User non trouvée !"],
                Response::HTTP_NOT_FOUND
            );
        }

        if ($user->getRoles() == ["ROLE_PRO", "ROLE_USER"]) {
            // /!\ JSON Hijacking
            // @see https://symfony.com/doc/current/components/http_foundation.html#creating-a-json-response
            return $this->json($user, Response::HTTP_OK, [], ['groups' => 'pro_get_by_id']);
        }


        return new JsonResponse(["message" => "Pro non trouvée !"], Response::HTTP_NOT_FOUND);
    }

    /**
     * @Route("/api/pro/edit", name="api_pro_edit", methods={"PUT", "PATCH"})
     * @IsGranted("ROLE_PRO")
     */
    public function itemEdit(User $user = null, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $entityManager, Request $request): Response
    {
        $user = $this->getUser();
        // Pro non trouvé
        if ($user === null) {
            return new JsonResponse(
                ["message" => "User non trouvé"],
                Response::HTTP_NOT_FOUND
            );
        }


        $data = $request->getContent();

        $user = $serializer->deserialize($data, User::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $user]);

        // On valide l'entité
        $errors = $validator->validate($user);

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

        return new JsonResponse(["message" => "User modifié"], Response::HTTP_OK);
    }
    /**
     * Delete a Pro
     * 
     * @Route("/api/pro/delete", name="api_pro_delete", methods="DELETE")
     * @IsGranted("ROLE_PRO")
     */
    public function delete(User $user = null, EntityManagerInterface $em)
    {

        $user = $this->getUser();
        if (null === $user) {

            $error = 'Cette Utilisateur n\'existe pas';

            return $this->json(['error' => $error], Response::HTTP_NOT_FOUND);
        }

        $em->remove($user);
        $em->flush();

        return $this->json(['message' => 'L\'Utilisateur a bien été supprimé.'], Response::HTTP_OK);
    }
}
