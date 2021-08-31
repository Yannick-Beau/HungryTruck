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

    public function fetchLongitude(string $address): array
    {
        $response = $this->client->request(
            'GET',
            'http://maps.google.com/maps/api/geocode/json?address='.$address.'&sensor=false'
        );

        $content = $response->toArray();



        dd($content);
    }


    public function fetchLatitude(string $address): array
    {
        $response = $this->client->request(
            'GET',
            'http://maps.google.com/maps/api/geocode/json?address='.$address.'&sensor=false'
        );

        $content = $response->toArray();



        dd($content);
    }

}