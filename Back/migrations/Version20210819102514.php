<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210819102514 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE foodtruck_category_food (foodtruck_id INT NOT NULL, category_food_id INT NOT NULL, INDEX IDX_28D0D740FD42418B (foodtruck_id), INDEX IDX_28D0D7407D56C7BA (category_food_id), PRIMARY KEY(foodtruck_id, category_food_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE foodtruck_category_food ADD CONSTRAINT FK_28D0D740FD42418B FOREIGN KEY (foodtruck_id) REFERENCES foodtruck (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE foodtruck_category_food ADD CONSTRAINT FK_28D0D7407D56C7BA FOREIGN KEY (category_food_id) REFERENCES category_food (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE foodtruck_category_food');
    }
}
