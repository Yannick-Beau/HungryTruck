<?php

namespace App\DataFixtures;

use App\Entity\Faq;
use App\Entity\User;
use App\Entity\Foodtruck;
use App\Entity\CategoryFood;
use Doctrine\DBAL\Connection;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use App\DataFixtures\Provider\FoodTruckDbProvider;

class AppFixtures extends Fixture
{
    private $connection;

    public function __construct(Connection $connection)
    {
       
        $this->connection = $connection;
    }

    private function truncate()
    {
        // On passe en mode SQL ! On cause avec MySQL
        // Désactivation des contraintes FK
        $this->connection->executeQuery('SET foreign_key_checks = 0');
        // On tronque pour reset les auto-increment (id)
        $this->connection->executeQuery('TRUNCATE TABLE foodtruck');
        $this->connection->executeQuery('TRUNCATE TABLE category_food');
        $this->connection->executeQuery('TRUNCATE TABLE faq');
        $this->connection->executeQuery('TRUNCATE TABLE user');
 
    }



    public function load(ObjectManager $manager)
    {

        print('Truncate Tables ...' . PHP_EOL);
        $data = new FoodTruckDbProvider();
        $this->truncate();
        print('END | Truncate Tables| ' . PHP_EOL);

        print('Create fake User ...' . PHP_EOL);

        print('ROLE_USER' . PHP_EOL);
        $user = new User();
        $user->setEmail('user@user.com');
        $user->setPassword('$2y$13$h.eZWrS5PJya7zNMNsKcXe8LUSVBtN2PBy8WHxmdHgAFjHG/rW.dG');
        $user->setPseudo("UserDiduche");
        $user->setCp(38290);
        $user->setCity("Artas");
        $user->setAdresse("8 rue ouaiouai");
        $user->setRoles(['ROLE_USER']);
    
        $manager->persist($user);

        print('ROLE_PRO' . PHP_EOL);
        $userPro = new User();
        $userPro->setEmail('pro@pro.com');
        $userPro->setPassword('$2y$13$Ww7ZU3RC1xfiSJeljDoxM.uUWaPCeSc7ljXdthMDwbCGXwoNM/od6');
        $userPro->setPseudo("ProDiduche");
        $userPro->setCp(38290);
        $userPro->setCity("Artas");
        $userPro->setAdresse("8 rue ouaiouai");
        $userPro->setSiret(45345344);
        $userPro->setRoles(['ROLE_PRO']);

        $manager->persist($userPro);

        print('ROLE_PRO' . PHP_EOL);
        $userPro2 = new User();
        $userPro2->setEmail('pro2@pro.com');
        $userPro2->setPassword('$2y$13$Ww7ZU3RC1xfiSJeljDoxM.uUWaPCeSc7ljXdthMDwbCGXwoNM/od6');
        $userPro2->setPseudo("ProDiduche2");
        $userPro2->setCp(38290);
        $userPro2->setCity("Artas");
        $userPro2->setAdresse("8 rue ouaiouai");
        $userPro2->setSiret(511111);
        $userPro2->setRoles(['ROLE_PRO']);

        $manager->persist($userPro2);

        print('ROLE_ADMIN' . PHP_EOL);
        $admin = new User();
        $admin->setEmail('admin@admin.com');
        $admin->setPassword('$2y$13$L81zK/fTjQikyz3PtBmbL.WdDILXR.Ppn.whBAvLJsbaFu4Fu0zVe');
        $admin->setPseudo("AdminDiduche");
        $admin->setCp(38290);
        $admin->setCity("Artas");
        $admin->setAdresse("8 rue ouaiouai");
        $admin->setRoles(['ROLE_ADMIN']);

        $manager->persist($admin);

        print('END | User Created | ' . PHP_EOL);


        print('Create fake data ...' . PHP_EOL);

        $FoodTruckList = [];

        for ($i = 1; $i <= 5; $i++) {

            $FoodTruck = new Foodtruck();
            $FoodTruck->setName($data->foodtruckName());
            $FoodTruck->setNumTel($data->numtel());
            $FoodTruck->setOverview($data->overview());
            $FoodTruck->setInstagram("Lien instagram" . $i);
            $FoodTruck->setTwitter("Lien Twitter" . $i);
            $FoodTruck->setFacebook("Lien Facebook" . $i);
            $FoodTruck->setUser($userPro);


            $FoodTruckList[] = $FoodTruck;

            $manager->persist($FoodTruck);
        }

        $FoodTruckList1 = [];

        for ($i = 1; $i <= 5; $i++) {

            $FoodTruck = new Foodtruck();
            $FoodTruck->setName($data->foodtruckName2());
            $FoodTruck->setNumTel($data->numtel());
            $FoodTruck->setOverview($data->overview());
            $FoodTruck->setInstagram("Lien instagram" . $i);
            $FoodTruck->setTwitter("Lien Twitter" . $i);
            $FoodTruck->setFacebook("Lien Facebook" . $i);
            $FoodTruck->setUser($userPro2);


            $FoodTruckList1[] = $FoodTruck;

            $manager->persist($FoodTruck);
        }

        $CategoriesFoodList = [];

        for ($i = 1; $i <= 20; $i++) {

            $CategoriesFood = new CategoryFood();
            $CategoriesFood->setName($data->food());

            $CategoriesFoodList[] = $CategoriesFood;

            $manager->persist($CategoriesFood);
        }

        $FaqList = [];

        for ($i = 1; $i <= 20; $i++) {

            $Faq = new Faq();
            $Faq->setQuestion('Questions blabla n°' . $i);
            $Faq->setReponse('Réponse blabla n°' . $i);

            $FaqList[] = $Faq;

            $manager->persist($Faq);
        }
        print('END | Data Created | ' . PHP_EOL);


        $manager->flush();
        print('END | Data & User Added in Database | ' . PHP_EOL);
    }
}
