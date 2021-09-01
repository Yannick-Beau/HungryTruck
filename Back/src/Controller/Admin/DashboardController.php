<?php

namespace App\Controller\Admin;

use App\Entity\Faq;
use App\Entity\User;
use App\Entity\Event;
use App\Entity\Foodtruck;
use App\Entity\CategoryFood;
use App\Controller\Admin\UserCrudController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/backoffice", name="admin")
     * @IsGranted("ROLE_ADMIN")
     */
    public function index(): Response
    {
        $routeBuilder = $this->get(AdminUrlGenerator::class);

        return $this->redirect($routeBuilder->setController(UserCrudController::class)->generateUrl());
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Back');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('User', 'fas fa-list', User::class);
        yield MenuItem::linkToCrud('FoodTruck', 'fas fa-list', Foodtruck::class);
        yield MenuItem::linkToCrud('Event', 'fas fa-list', Event::class);
        yield MenuItem::linkToCrud('Categories Food', 'fas fa-list', CategoryFood::class);
        yield MenuItem::linkToCrud('Faq', 'fas fa-list', Faq::class);
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }
}
