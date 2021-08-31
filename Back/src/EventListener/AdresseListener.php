<?php

namespace App\EventListener;

use App\Entity\User;
use App\Service\Adresse;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class AdresseListener
{
    private $longitude;
    private $latitude;

    public function __construct(Adresse $adresse)
    {
        $this->adresse = $adresse;
    }
    

    public function userAdresse(User $user, LifecycleEventArgs $event): void
    {
        $user->setLatitude($this->longitude->fetchLongitude());
        $user->setLatitude($this->latitude->fetchLatitude());
    }
}
