<?php

namespace App\Form;

use App\Entity\Foodtruck;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FoodtruckType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('num_tel')
            ->add('overview')
            ->add('instagram')
            ->add('twitter')
            ->add('facebook')
            ->add('createdAt')
            ->add('updatedAt')
            ->add('user')
            ->add('sell_type_food')
            ->add('event_truck')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Foodtruck::class,
        ]);
    }
}
