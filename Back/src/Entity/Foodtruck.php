<?php

namespace App\Entity;

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\FoodtruckRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=FoodtruckRepository::class)
 */
class Foodtruck
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("foodtruck_get")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Assert\Length(max=255)
     * @Groups("foodtruck_get")
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank
     * @Groups("foodtruck_get")
     */
    private $num_tel;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups("foodtruck_get")
     */
    private $overview;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(max=255)
     * @Groups("foodtruck_get")
     */
    private $instagram;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(max=255)
     * @Groups("foodtruck_get")
     */
    private $twitter;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(max=255)
     * @Groups("foodtruck_get")
     */
    private $facebook;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="truck_id")
     * @Groups("foodtruck_get")
     */
    private $user;

    /**
     * @ORM\ManyToMany(targetEntity=CategoryFood::class, inversedBy="foodtrucks")
     * @Groups("foodtruck_get")
     * 
     */
    private $sell_type_food;

    /**
     * @ORM\ManyToMany(targetEntity=EventFoodtruck::class, inversedBy="foodtrucks")
     * @Groups("foodtruck_get")
     */
    private $event_truck;

    public function __construct() 
    { 
        $this->usser = new ArrayCollection();
        $this->sell_type_food = new ArrayCollection();
        $this->event_truck = new ArrayCollection(); 
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getNumTel(): ?int
    {
        return $this->num_tel;
    }

    public function setNumTel(int $num_tel): self
    {
        $this->num_tel = $num_tel;

        return $this;
    }

    public function getOverview(): ?string
    {
        return $this->overview;
    }

    public function setOverview(?string $overview): self
    {
        $this->overview = $overview;

        return $this;
    }

    public function getInstagram(): ?string
    {
        return $this->instagram;
    }

    public function setInstagram(?string $instagram): self
    {
        $this->instagram = $instagram;

        return $this;
    }

    public function getTwitter(): ?string
    {
        return $this->twitter;
    }

    public function setTwitter(?string $twitter): self
    {
        $this->twitter = $twitter;

        return $this;
    }

    public function getFacebook(): ?string
    {
        return $this->facebook;
    }

    public function setFacebook(?string $facebook): self
    {
        $this->facebook = $facebook;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|CategoryFood[]
     */
    public function getSellTypeFood(): Collection
    {
        return $this->sell_type_food;
    }

    public function addSellTypeFood(CategoryFood $sellTypeFood): self
    {
        if (!$this->sell_type_food->contains($sellTypeFood)) {
            $this->sell_type_food[] = $sellTypeFood;
        }

        return $this;
    }

    public function removeSellTypeFood(CategoryFood $sellTypeFood): self
    {
        $this->sell_type_food->removeElement($sellTypeFood);

        return $this;
    }

    /**
     * @return Collection|EventFoodtruck[]
     */
    public function getEventTruck(): Collection
    {
        return $this->event_truck;
    }

    public function addEventTruck(EventFoodtruck $eventTruck): self
    {
        if (!$this->event_truck->contains($eventTruck)) {
            $this->event_truck[] = $eventTruck;
        }

        return $this;
    }

    public function removeEventTruck(EventFoodtruck $eventTruck): self
    {
        $this->event_truck->removeElement($eventTruck);

        return $this;
    }
}
