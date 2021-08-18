<?php

namespace App\Repository;

use App\Entity\EventFoodtruck;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EventFoodtruck|null find($id, $lockMode = null, $lockVersion = null)
 * @method EventFoodtruck|null findOneBy(array $criteria, array $orderBy = null)
 * @method EventFoodtruck[]    findAll()
 * @method EventFoodtruck[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventFoodtruckRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EventFoodtruck::class);
    }

    // /**
    //  * @return EventFoodtruck[] Returns an array of EventFoodtruck objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EventFoodtruck
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
