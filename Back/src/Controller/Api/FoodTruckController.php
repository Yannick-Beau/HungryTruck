<?php

namespace App\Controller\Api;

use App\Entity\Foodtruck;
use App\Repository\FoodtruckRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FoodTruckController extends AbstractController
{
    /**
     * Get all foodtruck for listing
     * 
     * @Route("/api/foodtruck", name="api_foodtruck_truck", methods="GET")
     */
    public function list(FoodtruckRepository $foodtruckRepository): Response
    {
        $foodtruck = $foodtruckRepository->findAll();

        return $this->json($foodtruck, Response::HTTP_OK, [], ['groups' => 'foodtruck_get']);
    }

    /**
     * Get all foodtruck for search (TODO: Requêtes custom pour recherche)
     * 
     * @Route("/api/foodtruck/search", name="api_foodtruck_truck", methods="GET")
     */
    public function search(FoodtruckRepository $foodtruckRepository): Response
    {
        $foodtruck = $foodtruckRepository->findAll();

        return $this->json($foodtruck, Response::HTTP_OK, [], ['groups' => 'foodtruck_get']);
    }

    /**
     * Get a foodtruck by id
     * 
     * @Route("/api/foodtruck/{id<\d+>}", name="api_foodtruck_get_item", methods="GET")
     */
    public function show(Foodtruck $Foodtruck = null): Response
    {
        if ($Foodtruck === null) {
            return new JsonResponse(
                ["message" => "FoodTruck non trouvée !"],
                Response::HTTP_NOT_FOUND
            );
        }
        // /!\ JSON Hijacking
        // @see https://symfony.com/doc/current/components/http_foundation.html#creating-a-json-response
        return $this->json($Foodtruck, Response::HTTP_OK, [], ['groups' => 'foodtruck_get']);
    }


}
