<?php

namespace App\Controller\BackOffice;

use App\Entity\CategoryFood;
use App\Form\CategoryFoodType;
use App\Repository\CategoryFoodRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/backoffice/category/food")
 */
class CategoryFoodController extends AbstractController
{
    /**
     * @Route("/", name="back_office_category_food_index", methods={"GET"})
     */
    public function index(CategoryFoodRepository $categoryFoodRepository): Response
    {
        return $this->render('back_office/category_food/index.html.twig', [
            'category_foods' => $categoryFoodRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="back_office_category_food_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $categoryFood = new CategoryFood();
        $form = $this->createForm(CategoryFoodType::class, $categoryFood);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($categoryFood);
            $entityManager->flush();

            return $this->redirectToRoute('back_office_category_food_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back_office/category_food/new.html.twig', [
            'category_food' => $categoryFood,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="back_office_category_food_show", methods={"GET"})
     */
    public function show(CategoryFood $categoryFood): Response
    {
        return $this->render('back_office/category_food/show.html.twig', [
            'category_food' => $categoryFood,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="back_office_category_food_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, CategoryFood $categoryFood): Response
    {
        $form = $this->createForm(CategoryFoodType::class, $categoryFood);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('back_office_category_food_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back_office/category_food/edit.html.twig', [
            'category_food' => $categoryFood,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="back_office_category_food_delete", methods={"POST"})
     */
    public function delete(Request $request, CategoryFood $categoryFood): Response
    {
        if ($this->isCsrfTokenValid('delete'.$categoryFood->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($categoryFood);
            $entityManager->flush();
        }

        return $this->redirectToRoute('back_office_category_food_index', [], Response::HTTP_SEE_OTHER);
    }
}
