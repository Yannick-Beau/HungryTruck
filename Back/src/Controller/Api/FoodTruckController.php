<?php

namespace App\Controller\Api;

use App\Entity\Foodtruck;
use App\Repository\FoodtruckRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FoodTruckController extends AbstractController
{
    /**
     * Get all foodtruck
     * 
     * @Route("/api/foodtruck", name="api_foodtruck_truck", methods="GET")
     */
    public function index(FoodtruckRepository $foodtruckRepository): Response
    {
        $foodtruck = $foodtruckRepository->findAll();

        return $this->json($foodtruck, Response::HTTP_OK, [], ['groups' => 'foodtruck_get']);
    }

    /**
     * Get a foodtruck by id
     * 
     * @Route("/api/foodtruck/{id<\d+>}", name="api_foodtruck_get_item", methods="GET")
     */
    public function show(Foodtruck $Foodtruck): Response
    {
        // /!\ JSON Hijacking
        // @see https://symfony.com/doc/current/components/http_foundation.html#creating-a-json-response
        return $this->json($Foodtruck, Response::HTTP_OK, [], ['groups' => 'foodtruck_get']);
    }


}
