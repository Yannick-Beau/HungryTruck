<?php

namespace App\Controller\BackOffice;

use App\Entity\EventFoodtruck;
use App\Form\EventFoodtruckType;
use App\Repository\EventFoodtruckRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/backoffice/event/foodtruck")
 */
class EventFoodtruckController extends AbstractController
{
    /**
     * @Route("/", name="back_office_event_foodtruck_index", methods={"GET"})
     */
    public function index(EventFoodtruckRepository $eventFoodtruckRepository): Response
    {
        return $this->render('back_office/event_foodtruck/index.html.twig', [
            'event_foodtrucks' => $eventFoodtruckRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="back_office_event_foodtruck_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $eventFoodtruck = new EventFoodtruck();
        $form = $this->createForm(EventFoodtruckType::class, $eventFoodtruck);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($eventFoodtruck);
            $entityManager->flush();

            return $this->redirectToRoute('back_office_event_foodtruck_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back_office/event_foodtruck/new.html.twig', [
            'event_foodtruck' => $eventFoodtruck,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="back_office_event_foodtruck_show", methods={"GET"})
     */
    public function show(EventFoodtruck $eventFoodtruck): Response
    {
        return $this->render('back_office/event_foodtruck/show.html.twig', [
            'event_foodtruck' => $eventFoodtruck,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="back_office_event_foodtruck_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, EventFoodtruck $eventFoodtruck): Response
    {
        $form = $this->createForm(EventFoodtruckType::class, $eventFoodtruck);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('back_office_event_foodtruck_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back_office/event_foodtruck/edit.html.twig', [
            'event_foodtruck' => $eventFoodtruck,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="back_office_event_foodtruck_delete", methods={"POST"})
     */
    public function delete(Request $request, EventFoodtruck $eventFoodtruck): Response
    {
        if ($this->isCsrfTokenValid('delete'.$eventFoodtruck->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($eventFoodtruck);
            $entityManager->flush();
        }

        return $this->redirectToRoute('back_office_event_foodtruck_index', [], Response::HTTP_SEE_OTHER);
    }
}
