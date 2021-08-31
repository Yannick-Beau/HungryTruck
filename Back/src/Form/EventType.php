<?php

namespace App\Form;

use App\Entity\Event;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class EventType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('day', TextType::class, [
                'required'   => true
            ])
            ->add('hours', TextType::class, [
                'required'   => true
            ])
            ->add('hours_end', TextType::class, [
                'required'   => true
            ])
            ->add('adresse', TextType::class, [
                'required'   => true
            ])
            ->add('foodtruck');
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Event::class,
        ]);
    }
}
