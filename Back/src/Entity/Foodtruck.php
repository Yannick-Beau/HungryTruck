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
     * @Assert\Length(min=2,max=70)
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","event_post"})
     */
    private $name;


    /**
     * @ORM\Column(type="text", nullable=true)
     * @Assert\Length(max=800)
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","event_post"})
     */
    private $overview;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(max=255)
     * @Assert\Url
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","event_post"})
     */
    private $instagram;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(max=255)
     * @Assert\Url
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","event_post"})
     */
    private $twitter;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(max=255)
     * @Assert\Url
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","event_post"})
     */
    private $facebook;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Url
     * @Assert\Length(max=255)
     * @Groups({"foodtruck_get","pro_get_by_id"})
     */
    private $picture;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="truck_id", cascade={"persist"})
     * @Groups({"foodtruck_get","foodtruck_post","event_post"})
     */
    private $user;

    /**
     * @ORM\ManyToMany(targetEntity=CategoryFood::class, inversedBy="foodtrucks", cascade={"persist", "remove" })
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","event_post"})
     * 
     */
    private $sell_type_food;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("foodtruck_get")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=Event::class, mappedBy="foodtruck")
     * @Groups({"foodtruck_get","pro_get_by_id"})
     */
    private $events;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Assert\Length(min=2,max=14)
     * @Groups({"foodtruck_get","pro_get_by_id","foodtruck_post","event_post"})
     */
    private $num_tel;


    public function __construct()
    {
        $this->sell_type_food = new ArrayCollection();
        $this->createdAt = new DateTime();
        $this->updatedAt = new DateTime();
        $this->events = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->name;
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

    /**
     * @return Collection|Event[]
     */
    public function getEvents(): Collection
    {
        return $this->events;
    }

    public function addEvent(Event $event): self
    {
        if (!$this->events->contains($event)) {
            $this->events[] = $event;
            $event->setFoodtruck($this);
        }

        return $this;
    }

    public function removeEvent(Event $event): self
    {
        if ($this->events->removeElement($event)) {
            // set the owning side to null (unless already changed)
            if ($event->getFoodtruck() === $this) {
                $event->setFoodtruck(null);
            }
        }

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

}
