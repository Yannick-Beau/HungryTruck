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
        'Chibus Truck',
        'O Paddock',
        'Ô Castor',
        'Le Duke',
        'La Bonne Dôze',
        'Lisbon Food',
        'Au Gré des Saisons',
        'Tarte Truck',
        'Miams Truck',
        'Pipa Truck',

    ];

    private $foodtruckname2 = [
        'La Note Gourmande',
        'BisTruck',
        'Big Papa',
        'Lan-ka',
        'Sakados Truck',
        'Bruschetta Truck',
        'LEndémique',
        'La Barak',
        'Lardoise Gourmande',
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
        '0622319335',
        '0622411259',
        '0623376899',
        '0623451633',
        '0623452187',
        '0624496690',
        '0624643428',
        '0625496469',
        '0626262105',
        '0626309290',
        '0626310777',
        '0627658908',
        '0628466055',
        '0628793252',
        '0629370075',
        '0629440499',
        '0600000019',
        '0600003399',
        '0600005285',
        '0600006589',
        '0600030001',
        '0600080000',
        '0600112233',
        '0600118219',
        '0600200222',
        '0600210210',
        '0600258468',
        '0600278272',
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
     * Retourne un film au hasard
     */
    public function foodtruckName2()
    {
        return $this->foodtruckname2[array_rand($this->foodtruckname2)];
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