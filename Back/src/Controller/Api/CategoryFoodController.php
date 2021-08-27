<?php

namespace App\Controller\Api;

use App\Repository\CategoryFoodRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategoryFoodController extends AbstractController
{
    /**
     * Get all CategoryFood for listing
     * 
     * @Route("/api/categoryfood", name="api_category_food", methods="GET")
     */
    public function list(CategoryFoodRepository $CategoryFoodRepository): Response
    {
        $Categoryfood = $CategoryFoodRepository->findAll();

        return $this->json($Categoryfood, Response::HTTP_OK, [], ['groups' => 'foodcategory_get']);
    }
}
