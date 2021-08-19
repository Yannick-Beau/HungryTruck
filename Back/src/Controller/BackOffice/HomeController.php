<?php

namespace App\Controller\BackOffice;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/back/office/home", name="back_office_home")
     */
    public function index(): Response
    {
        return $this->render('back_office/index.html.twig');
    }
}
