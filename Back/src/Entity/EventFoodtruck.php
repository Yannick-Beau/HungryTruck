<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use App\Repository\EventFoodtruckRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=EventFoodtruckRepository::class)
 */
class EventFoodtruck
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Assert\Length(max=255)
     * @Groups({"foodtruck_get","pro_get_by_id"})
     */
    private $day;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Assert\Length(max=255)
     * @Groups({"foodtruck_get","pro_get_by_id"})
     */
    private $hours;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Assert\Length(max=255)
     * @Groups({"foodtruck_get","pro_get_by_id"})
     */
    private $place;

    /**
     * @ORM\ManyToMany(targetEntity=Foodtruck::class, mappedBy="event_truck")
     */
    private $foodtrucks;

    public function __construct()
    {
        $this->foodtrucks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDay(): ?string
    {
        return $this->day;
    }

    public function setDay(string $day): self
    {
        $this->day = $day;

        return $this;
    }

    public function getHours(): ?string
    {
        return $this->hours;
    }

    public function setHours(string $hours): self
    {
        $this->hours = $hours;

        return $this;
    }

    public function getPlace(): ?string
    {
        return $this->place;
    }

    public function setPlace(string $place): self
    {
        $this->place = $place;

        return $this;
    }

    /**
     * @return Collection|Foodtruck[]
     */
    public function getFoodtrucks(): Collection
    {
        return $this->foodtrucks;
    }

    public function addFoodtruck(Foodtruck $foodtruck): self
    {
        if (!$this->foodtrucks->contains($foodtruck)) {
            $this->foodtrucks[] = $foodtruck;
            $foodtruck->addEventTruck($this);
        }

        return $this;
    }

    public function removeFoodtruck(Foodtruck $foodtruck): self
    {
        if ($this->foodtrucks->removeElement($foodtruck)) {
            $foodtruck->removeEventTruck($this);
        }

        return $this;
    }
}
