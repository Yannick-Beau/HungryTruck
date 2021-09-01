<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\CategoryFoodRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=CategoryFoodRepository::class)
 */
class CategoryFood
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"user_get_by_id","pro_get_by_id","foodcategory_get","created_user","delete_user","delete_foodtruck"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min=2,max=255)
     * @Assert\NotBlank
     * @Groups({"foodtruck_get","user_get_by_id","foodtruck_post","event_post","foodcategory_get","pro_get_by_id","created_user"})
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="food_like")
     */
    private $users;

    /**
     * @ORM\ManyToMany(targetEntity=Foodtruck::class, mappedBy="sell_type_food")
     */
    private $foodtrucks;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->foodtrucks = new ArrayCollection();
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

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->addFoodLike($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            $user->removeFoodLike($this);
        }

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
            $foodtruck->addSellTypeFood($this);
        }

        return $this;
    }

    public function removeFoodtruck(Foodtruck $foodtruck): self
    {
        if ($this->foodtrucks->removeElement($foodtruck)) {
            $foodtruck->removeSellTypeFood($this);
        }

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
