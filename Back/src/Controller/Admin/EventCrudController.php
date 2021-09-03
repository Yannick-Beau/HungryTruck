<?php

namespace App\Controller\Admin;

use App\Entity\Event;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class EventCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Event::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('day'),
            ChoiceField::new('hours')->setChoices([
                '00h00' => '00h00', 
                '00h30' => '00h30', 
                '01h00' => '01h00',
                '01h30' => '01h30', 
                '02h00' => '02h00', 
                '02h30' => '02h30',
                '03h00' => '03h00', 
                '03h30' => '03h30', 
                '04h00' => '04h00',
                '04h30' => '04h30', 
                '05h00' => '05h00',
                '05h30' => '05h30', 
                '06h00' => '06h00',
                '06h30' => '06h30', 
                '07h00' => '07h00',
                '07h30' => '07h30', 
                '08h00' => '08h00',
                '09h30' => '09h30', 
                '10h00' => '10h00',
                '10h30' => '10h30', 
                '11h00' => '11h00',
                '11h30' => '11h30', 
                '12h00' => '12h00',
                '12h30' => '12h30', 
                '13h00' => '13h00',
                '13h30' => '13h30', 
                '14h00' => '14h00',
                '14h30' => '14h30', 
                '15h00' => '15h00',
                '16h30' => '16h30', 
                '17h00' => '17h00',
                '18h30' => '18h30', 
                '19h00' => '19h00',
                '19h30' => '19h30', 
                '20h00' => '20h00',
                '20h30' => '20h30', 
                '21h00' => '21h00',
                '21h30' => '21h30', 
                '22h00' => '22h00',
                '22h30' => '22h30', 
                '23h00' => '23h00',
                '23h30' => '23h30']),
            ChoiceField::new('hours_end')->setChoices([
                '00h00' => '00h00', 
                '00h30' => '00h30', 
                '01h00' => '01h00',
                '01h30' => '01h30', 
                '02h00' => '02h00', 
                '02h30' => '02h30',
                '03h00' => '03h00', 
                '03h30' => '03h30', 
                '04h00' => '04h00',
                '04h30' => '04h30', 
                '05h00' => '05h00',
                '05h30' => '05h30', 
                '06h00' => '06h00',
                '06h30' => '06h30', 
                '07h00' => '07h00',
                '07h30' => '07h30', 
                '08h00' => '08h00',
                '09h30' => '09h30', 
                '10h00' => '10h00',
                '10h30' => '10h30', 
                '11h00' => '11h00',
                '11h30' => '11h30', 
                '12h00' => '12h00',
                '12h30' => '12h30', 
                '13h00' => '13h00',
                '13h30' => '13h30', 
                '14h00' => '14h00',
                '14h30' => '14h30', 
                '15h00' => '15h00',
                '16h30' => '16h30', 
                '17h00' => '17h00',
                '18h30' => '18h30', 
                '19h00' => '19h00',
                '19h30' => '19h30', 
                '20h00' => '20h00',
                '20h30' => '20h30', 
                '21h00' => '21h00',
                '21h30' => '21h30', 
                '22h00' => '22h00',
                '22h30' => '22h30', 
                '23h00' => '23h00',
                '23h30' => '23h30']),
            TextField::new('adresse'),
            NumberField::new('longitude'),
            NumberField::new('latitude'),
            AssociationField::new('foodtruck'),
            DateTimeField::new('created_at')->hideOnForm(),
            DateTimeField::new('updated_at')->hideOnForm()
        ];
    }
    
}
