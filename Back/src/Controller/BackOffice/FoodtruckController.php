<?php

namespace App\Controller\BackOffice;

use App\Entity\Foodtruck;
use App\Form\FoodtruckType;
use App\Repository\FoodtruckRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/back/office/foodtruck")
 * @IsGranted("ROLE_ADMIN")
 */
class FoodtruckController extends AbstractController
{
    /**
     * @Route("/", name="back_office_foodtruck_index", methods={"GET"})
     */
    public function index(FoodtruckRepository $foodtruckRepository): Response
    {
        return $this->render('back_office/foodtruck/index.html.twig', [
            'foodtrucks' => $foodtruckRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="back_office_foodtruck_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $foodtruck = new Foodtruck();
        $form = $this->createForm(FoodtruckType::class, $foodtruck);
        $form->handleRequest($request);
     
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($foodtruck);
            $entityManager->flush();

            return $this->redirectToRoute('back_office_foodtruck_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back_office/foodtruck/new.html.twig', [
            'foodtruck' => $foodtruck,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="back_office_foodtruck_show", methods={"GET"})
     */
    public function show(Foodtruck $foodtruck): Response
    {
        return $this->render('back_office/foodtruck/show.html.twig', [
            'foodtruck' => $foodtruck,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="back_office_foodtruck_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Foodtruck $foodtruck): Response
    {
        $form = $this->createForm(FoodtruckType::class, $foodtruck);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('back_office_foodtruck_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back_office/foodtruck/edit.html.twig', [
            'foodtruck' => $foodtruck,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="back_office_foodtruck_delete", methods={"POST"})
     */
    public function delete(Request $request, Foodtruck $foodtruck): Response
    {
        if ($this->isCsrfTokenValid('delete'.$foodtruck->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($foodtruck);
            $entityManager->flush();
        }

        return $this->redirectToRoute('back_office_foodtruck_index', [], Response::HTTP_SEE_OTHER);
    }
}
