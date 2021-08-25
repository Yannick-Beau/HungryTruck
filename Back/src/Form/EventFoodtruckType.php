<?php

namespace App\Form;

use App\Entity\EventFoodtruck;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EventFoodtruckType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('day')
            ->add('hours')
            ->add('place')
            ->add('createdAt')
            ->add('updatedAt')
            ->add('foodtrucks')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => EventFoodtruck::class,
        ]);
    }
}
