<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;


class Adresse
{

    private $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    public function fetchLongitude(string $address,string $cp, string $city): array
    {
        $response = $this->client->request(
            'GET',
            'https://nominatim.openstreetmap.org/search.php?street='.$address.'&city='.$city.'&postalcode='.$cp.'&format=jsonv2'
        );

        $content = $response->toArray();

        



        dd($content);
    }


}