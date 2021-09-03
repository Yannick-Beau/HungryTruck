<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210830132613 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category_food (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE event (id INT AUTO_INCREMENT NOT NULL, foodtruck_id INT DEFAULT NULL, day VARCHAR(255) NOT NULL, hours VARCHAR(255) NOT NULL, hours_end VARCHAR(255) NOT NULL, cp VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, adresse VARCHAR(255) NOT NULL, longitude VARCHAR(255) DEFAULT NULL, latitude VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_3BAE0AA7FD42418B (foodtruck_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE faq (id INT AUTO_INCREMENT NOT NULL, question LONGTEXT NOT NULL, reponse LONGTEXT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE foodtruck (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, num_tel VARCHAR(20) NOT NULL, overview LONGTEXT DEFAULT NULL, instagram VARCHAR(255) DEFAULT NULL, twitter VARCHAR(255) DEFAULT NULL, facebook VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, picture VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_25CE2BC05E237E06 (name), INDEX IDX_25CE2BC0A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE foodtruck_category_food (foodtruck_id INT NOT NULL, category_food_id INT NOT NULL, INDEX IDX_28D0D740FD42418B (foodtruck_id), INDEX IDX_28D0D7407D56C7BA (category_food_id), PRIMARY KEY(foodtruck_id, category_food_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, pseudo VARCHAR(100) NOT NULL, avatar VARCHAR(255) DEFAULT NULL, cp INT NOT NULL, city VARCHAR(255) NOT NULL, adresse VARCHAR(255) NOT NULL, siret INT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, longitude VARCHAR(255) DEFAULT NULL, latitude VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_category_food (user_id INT NOT NULL, category_food_id INT NOT NULL, INDEX IDX_B12DFEE0A76ED395 (user_id), INDEX IDX_B12DFEE07D56C7BA (category_food_id), PRIMARY KEY(user_id, category_food_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE event ADD CONSTRAINT FK_3BAE0AA7FD42418B FOREIGN KEY (foodtruck_id) REFERENCES foodtruck (id)');
        $this->addSql('ALTER TABLE foodtruck ADD CONSTRAINT FK_25CE2BC0A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE foodtruck_category_food ADD CONSTRAINT FK_28D0D740FD42418B FOREIGN KEY (foodtruck_id) REFERENCES foodtruck (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE foodtruck_category_food ADD CONSTRAINT FK_28D0D7407D56C7BA FOREIGN KEY (category_food_id) REFERENCES category_food (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_category_food ADD CONSTRAINT FK_B12DFEE0A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_category_food ADD CONSTRAINT FK_B12DFEE07D56C7BA FOREIGN KEY (category_food_id) REFERENCES category_food (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE foodtruck_category_food DROP FOREIGN KEY FK_28D0D7407D56C7BA');
        $this->addSql('ALTER TABLE user_category_food DROP FOREIGN KEY FK_B12DFEE07D56C7BA');
        $this->addSql('ALTER TABLE event DROP FOREIGN KEY FK_3BAE0AA7FD42418B');
        $this->addSql('ALTER TABLE foodtruck_category_food DROP FOREIGN KEY FK_28D0D740FD42418B');
        $this->addSql('ALTER TABLE foodtruck DROP FOREIGN KEY FK_25CE2BC0A76ED395');
        $this->addSql('ALTER TABLE user_category_food DROP FOREIGN KEY FK_B12DFEE0A76ED395');
        $this->addSql('DROP TABLE category_food');
        $this->addSql('DROP TABLE event');
        $this->addSql('DROP TABLE faq');
        $this->addSql('DROP TABLE foodtruck');
        $this->addSql('DROP TABLE foodtruck_category_food');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_category_food');
    }
}
