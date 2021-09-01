<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\EventRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=EventRepository::class)
 */
class Event
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"event_post","foodtruck_get","pro_get_by_id","delete_user","delete_foodtruck"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min=2,max=70)
     * @Assert\NotBlank
     * @Groups({"event_post","foodtruck_get","pro_get_by_id","delete_user","delete_foodtruck"})
     */
    private $day;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min=1,max=10)
     * @Assert\NotBlank
     * @Groups({"event_post","foodtruck_get","pro_get_by_id","delete_user","delete_foodtruck"})
     */
    private $hours;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min=1,max=10)
     * @Assert\NotBlank
     * @Groups({"event_post","foodtruck_get","pro_get_by_id","delete_user","delete_foodtruck"})
     */
    private $hours_end;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min=1,max=255)
     * @Assert\NotBlank
     * @Groups({"event_post","foodtruck_get","pro_get_by_id","delete_user","delete_foodtruck"})
     */
    private $adresse;


    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"event_post","foodtruck_get","pro_get_by_id","delete_user","delete_foodtruck"})
     */
    private $longitude;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"event_post","foodtruck_get","pro_get_by_id","delete_user","delete_foodtruck"})
     */
    private $latitude;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Foodtruck::class, inversedBy="events")
     * @Groups({"event_post"})
     */
    private $foodtruck;

    public function __construct()
    {

        $this->createdAt = new DateTime();
        $this->updatedAt = new DateTime();

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

    public function getFoodtruck(): ?Foodtruck
    {
        return $this->foodtruck;
    }

    public function setFoodtruck(?Foodtruck $foodtruck): self
    {
        $this->foodtruck = $foodtruck;

        return $this;
    }

    public function getHoursEnd(): ?string
    {
        return $this->hours_end;
    }

    public function setHoursEnd(string $hours_end): self
    {
        $this->hours_end = $hours_end;

        return $this;
    }

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function setLongitude(?string $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getLatitude(): ?string
    {
        return $this->latitude;
    }

    public function setLatitude(?string $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }
}
