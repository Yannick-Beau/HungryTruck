<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210818192956 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE foodtruck ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE foodtruck ADD CONSTRAINT FK_25CE2BC0A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_25CE2BC0A76ED395 ON foodtruck (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE foodtruck DROP FOREIGN KEY FK_25CE2BC0A76ED395');
        $this->addSql('DROP INDEX IDX_25CE2BC0A76ED395 ON foodtruck');
        $this->addSql('ALTER TABLE foodtruck DROP user_id');
    }
}
