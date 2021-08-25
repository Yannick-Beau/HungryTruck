<?php

namespace App\Controller\BackOffice;

use App\Entity\Faq;
use App\Form\FaqType;
use App\Repository\FaqRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/back/office/faq")
 * @IsGranted("ROLE_ADMIN")
 */
class FaqController extends AbstractController
{
    /**
     * @Route("/", name="back_office_faq_index", methods={"GET"})
     */
    public function index(FaqRepository $faqRepository): Response
    {
        return $this->render('back_office/faq/index.html.twig', [
            'faqs' => $faqRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="back_office_faq_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $faq = new Faq();
        $form = $this->createForm(FaqType::class, $faq);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($faq);
            $entityManager->flush();

            return $this->redirectToRoute('back_office_faq_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back_office/faq/new.html.twig', [
            'faq' => $faq,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="back_office_faq_show", methods={"GET"})
     */
    public function show(Faq $faq): Response
    {
        return $this->render('back_office/faq/show.html.twig', [
            'faq' => $faq,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="back_office_faq_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Faq $faq): Response
    {
        $form = $this->createForm(FaqType::class, $faq);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('back_office_faq_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back_office/faq/edit.html.twig', [
            'faq' => $faq,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="back_office_faq_delete", methods={"POST"})
     */
    public function delete(Request $request, Faq $faq): Response
    {
        if ($this->isCsrfTokenValid('delete'.$faq->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($faq);
            $entityManager->flush();
        }

        return $this->redirectToRoute('back_office_faq_index', [], Response::HTTP_SEE_OTHER);
    }
}
