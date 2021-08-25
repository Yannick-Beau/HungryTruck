<?php

namespace App\DataFixtures\Provider;

class FoodTruckDbProvider
{
    
    private $foodtruckname = [
        'Le Nine',
        'Mylo Food',
        'Le Paradise',
        'Gourmet Truck',
        'Les Gones',
        'Servilla Turck',
        'Sous-Marin Jaune',
        'Chibu\'s Truck',
        'O\'Paddock',
        'Ô Castor',
        'Le Duke',
        'La Bonne Dôze',
        'Lisbon Food',
        'Au Gré des Saisons',
        'Tarte Truck',
        'Miam\'s Truck',
        'Pipa Truck',
        'La Note Gourmande',
        'Bis\'Truck',
        'Big Papa',
        'L\'an-ka',
        'Sakados Truck',
        'Bruschetta Truck',
        'L\'Endémique',
        'La Barak',
        'L\'ardoise Gourmande',
        'Big Royal',
        'Smash Truck',
        'Chick sud',
        'La Fantasia',
        'Salsita',
        'Le Mezze',
        'Chez DADA',
        'Chez Yohann',
        'Chez John',
        'Chez Yannick',
    ];

    private $num = [
        '3622319335',
        '3622411259',
        '3623376899',
        '3623451633',
        '3623452187',
        '3624496690',
        '3624643428',
        '3625496469',
        '3626262105',
        '3626309290',
        '3626310777',
        '3627658908',
        '3628466055',
        '3628793252',
        '3629370075',
        '3629440499',
        '33600000019',
        '33600003399',
        '33600005285',
        '33600006589',
        '33600030001',
        '33600080000',
        '33600112233',
        '33600118219',
        '33600200222',
        '33600210210',
        '33600258468',
        '33600278272',
    ];

    private $overview = [
        'Vous êtes GÉNIAUX !',
        'Nous recherchons des gourmands du monde',

    ];


    private $foodtype = [
        'Pizza',
        'Tacos',
        'Kebabs',
        'Burgers',
        'Salades',
        'Sandwiches',
        'Bagels',
        'Halal',
        'Vietnamien',
        'Thaïlandais',
        'Africain',
        'Sushi',
        'Japonais',
        'Desserts',
        'Glaces',
        'Marocain',
        'Poke Bowl',
        'Woke',
        'Chinois',
        'Pâtes',
        'Tapas',
        'Bourrito',
        'Indien',
        'Italien',
        'Turc',
        'Français',
        'Libanais',
        'Végétarien',
        'Nouilles',
        'Russe',
        'Américain',
        'Fruits de mer',
        'Curry',
        'Gâteau',
        'Poisson',
        'Poulet',
        'Cocktails',
        'Espagnol',
        'Mexicain',
        'Tandoori',
        'Snacks',
        'Frites',
        'Gastronomique',

    ];

    /**
     * Retourne un genre au hasard
     */
    public function food()
    {
        return $this->foodtype[array_rand($this->foodtype)];
    }

    /**
     * Retourne un film au hasard
     */
    public function foodtruckName()
    {
        return $this->foodtruckname[array_rand($this->foodtruckname)];
    }

    /**
     * Retourne un métier au hasard
     */
    public function numtel()
    {
        return $this->num[array_rand($this->num)];
    }

    /**
     * Retourne un secteur d'activité au hasard
     */
    public function overview()
    {
        return $this->overview[array_rand($this->overview)];
    }
}