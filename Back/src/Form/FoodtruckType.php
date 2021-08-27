<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\Foodtruck;
use App\Entity\CategoryFood;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use App\Repository\CategoryFoodRepository;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

class FoodtruckType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',TextType::class)
            ->add('num_tel',TextType::class)
            ->add('overview',TextareaType::class)
            ->add('picture', UrlType::class)
            ->add('instagram', UrlType::class)
            ->add('twitter', UrlType::class)
            ->add('facebook', UrlType::class)
            ->add('user',EntityType::class,['class' => User::class,'choice_label' => 'Pseudo','multiple' => false])
            ->add('sell_type_food',EntityType::class,['class' => CategoryFood::class,'multiple' => true,'choice_label' => 'name','expanded' => true,'query_builder' => function (CategoryFoodRepository $fr) {
                return $fr->createQueryBuilder('f')
                    ->orderBy('f.name', 'ASC');},])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Foodtruck::class,
        ]);
    }
}
