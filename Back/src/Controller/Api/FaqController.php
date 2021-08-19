<?php

namespace App\Controller\Api;

use App\Entity\Faq;
use App\Repository\FaqRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FaqController extends AbstractController
{
    /**
     * @Route("/api/faq", name="api_foodtruck_faq", methods="GET")
     */
    public function list(FaqRepository $faqRepository): Response
    {

        $faq = $faqRepository->findAll();

        return $this->json($faq, Response::HTTP_OK, []);
    }
    
    /**
     * Get a faq question by id
     * 
     * @Route("/api/faq/{id<\d+>}", name="api_foodtruck_faq_get_item", methods="GET")
     */
    public function show(Faq $Faq): Response
    {
        // /!\ JSON Hijacking
        // @see https://symfony.com/doc/current/components/http_foundation.html#creating-a-json-response
        return $this->json($Faq, Response::HTTP_OK, []);
    }
}
