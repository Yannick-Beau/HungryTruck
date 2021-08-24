<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\CategoryFood;
use Symfony\Component\Form\AbstractType;
use App\Repository\CategoryFoodRepository;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email')
            ->add('roles', ChoiceType::class, [
                // Libellé => valeur
                'choices' => [
                    'Membre' => 'ROLE_USER',
                    'Pro' => 'ROLE_PRO',
                    'Administrateur' => 'ROLE_ADMIN'
                ],
                // $roles = array = multiple
                'multiple' => true,
                // checkboxes
                'expanded' => true,
            ])
            ->add('password')
            ->add('pseudo')
            ->add('avatar')
            ->add('cp')
            ->add('city')
            ->add('adresse')
            ->add('siret')
            ->add('food_like',EntityType::class,['class' => CategoryFood::class,'multiple' => true,'choice_label' => 'name','expanded' => true,'query_builder' => function (CategoryFoodRepository $gr) {
                return $gr->createQueryBuilder('g')
                    ->orderBy('g.name', 'ASC');},])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
