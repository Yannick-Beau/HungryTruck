<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210819101827 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_category_food (user_id INT NOT NULL, category_food_id INT NOT NULL, INDEX IDX_B12DFEE0A76ED395 (user_id), INDEX IDX_B12DFEE07D56C7BA (category_food_id), PRIMARY KEY(user_id, category_food_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_category_food ADD CONSTRAINT FK_B12DFEE0A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_category_food ADD CONSTRAINT FK_B12DFEE07D56C7BA FOREIGN KEY (category_food_id) REFERENCES category_food (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE user_category_food');
    }
}
