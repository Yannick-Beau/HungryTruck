<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @UniqueEntity(fields={"email"}, message="It looks like your already have an account!")
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"foodtruck_get","user_get_by_id","pro_get_by_id","foodtruck_post"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Groups({"foodtruck_get","user_get_by_id","pro_get_by_id","foodtruck_post"})
     * @Assert\NotBlank
     * @Assert\Email
     * 
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     * @Assert\Count(min=1, max=1)
     * @Groups({"user_get_by_id","pro_get_by_id","foodtruck_post"})
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @Assert\NotBlank
     * 
     * 
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\Length(max=100, min=4)
     * @Assert\NotBlank
     * @Assert\NotCompromisedPassword
     * @Assert\Regex("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&-\/])[A-Za-z\d@$!%*#?&-\/]{8,}$/")
     * @Groups({"foodtruck_get","user_get_by_id","pro_get_by_id","foodtruck_post"})
     */
    private $pseudo;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(max=255)
     * @Assert\Url(message = "The url '{{ value }}' is not a valid url")
     * @Groups({"user_get_by_id","pro_get_by_id"})
     */
    private $avatar;

    /**
     * @ORM\Column(type="integer")
     * @Assert\Type("int") 
     * @Assert\NotBlank
     * @Groups({"user_get_by_id","pro_get_by_id"})
     */
    private $cp;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(max=255)
     * @Assert\NotBlank
     * @Groups({"user_get_by_id","pro_get_by_id"})
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(max=255)
     * @Assert\NotBlank
     * @Groups({"user_get_by_id","pro_get_by_id"})
     */
    private $adresse;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Type("int")
     * @Groups({"foodtruck_get","pro_get_by_id"})
     */
    private $siret;

    /**
     * @ORM\OneToMany(targetEntity=Foodtruck::class, mappedBy="user", cascade={"persist", "remove" })
     * @Groups({"pro_get_by_id"})
     */
    private $truck_id;

    /**
     * @ORM\ManyToMany(targetEntity=CategoryFood::class, inversedBy="users")
     * @Groups("user_get_by_id")
     */
    private $food_like;

    public function __construct()
    {
        $this->truck_id = new ArrayCollection();
        $this->food_like = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @deprecated since Symfony 5.3, use getUserIdentifier instead
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getCp(): ?int
    {
        return $this->cp;
    }

    public function setCp(int $cp): self
    {
        $this->cp = $cp;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

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

    public function getSiret(): ?int
    {
        return $this->siret;
    }

    public function setSiret(?int $siret): self
    {
        $this->siret = $siret;

        return $this;
    }

    /**
     * @return Collection|Foodtruck[]
     */
    public function getTruckId(): Collection
    {
        return $this->truck_id;
    }

    public function addTruckId(Foodtruck $truckId): self
    {
        if (!$this->truck_id->contains($truckId)) {
            $this->truck_id[] = $truckId;
            $truckId->setUser($this);
        }

        return $this;
    }

    public function removeTruckId(Foodtruck $truckId): self
    {
        if ($this->truck_id->removeElement($truckId)) {
            // set the owning side to null (unless already changed)
            if ($truckId->getUser() === $this) {
                $truckId->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|CategoryFood[]
     */
    public function getFoodLike(): Collection
    {
        return $this->food_like;
    }

    public function addFoodLike(CategoryFood $foodLike): self
    {
        if (!$this->food_like->contains($foodLike)) {
            $this->food_like[] = $foodLike;
        }

        return $this;
    }

    public function removeFoodLike(CategoryFood $foodLike): self
    {
        $this->food_like->removeElement($foodLike);

        return $this;
    }
}
