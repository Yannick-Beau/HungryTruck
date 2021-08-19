<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210819102900 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE foodtruck_event_foodtruck (foodtruck_id INT NOT NULL, event_foodtruck_id INT NOT NULL, INDEX IDX_5D32C40AFD42418B (foodtruck_id), INDEX IDX_5D32C40A10514B78 (event_foodtruck_id), PRIMARY KEY(foodtruck_id, event_foodtruck_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE foodtruck_event_foodtruck ADD CONSTRAINT FK_5D32C40AFD42418B FOREIGN KEY (foodtruck_id) REFERENCES foodtruck (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE foodtruck_event_foodtruck ADD CONSTRAINT FK_5D32C40A10514B78 FOREIGN KEY (event_foodtruck_id) REFERENCES event_foodtruck (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE foodtruck_event_foodtruck');
    }
}
