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
        '33622319335',
        '33622411259',
        '33623376899',
        '33623451633',
        '33623452187',
        '33624496690',
        '33624643428',
        '33625496469',
        '33626262105',
        '33626309290',
        '33626310777',
        '33627658908',
        '33628466055',
        '33628793252',
        '33629370075',
        '33629440499',
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