<?php

namespace App\Entity;

use DateTime;

use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\FoodtruckRepository;
use Doctrine\Common\Collections\Collection;
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
     * @Groups({"foodtruck_get","pro_get_by_id"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Assert\NotBlank
     * @Assert\Length(max=255,min=2)
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","foodtruckevent_post"})
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","foodtruckevent_post"})
     */
    private $num_tel;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","foodtruckevent_post"})
     */
    private $overview;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(max=255)
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","foodtruckevent_post"})
     */
    private $instagram;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(max=255)
     * @Assert\Url(message = "The url '{{ value }}' is not a valid url")
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","foodtruckevent_post"})
     */
    private $twitter;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(max=255)
     * @Assert\Url(message = "The url '{{ value }}' is not a valid url")
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","foodtruckevent_post"})
     */
    private $facebook;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="truck_id", cascade={"persist"})
     * @Groups({"foodtruck_get","foodtruck_post","foodtruckevent_post"})
     */
    private $user;

    /**
     * @ORM\ManyToMany(targetEntity=CategoryFood::class, inversedBy="foodtrucks", cascade={"persist", "remove" })
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","foodtruckevent_post"})
     * 
     */
    private $sell_type_food;

    /**
     * @ORM\ManyToMany(targetEntity=EventFoodtruck::class, inversedBy="foodtrucks")
     * @Groups({"foodtruck_get","pro_get_by_id"})
     */
    private $event_truck;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("foodtruck_get")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;


    public function __construct()
    {
        $this->user = new ArrayCollection();
        $this->sell_type_food = new ArrayCollection();
        $this->event_truck = new ArrayCollection();
        $this->createdAt = new DateTime();
        $this->updatedAt = new DateTime();
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

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}
