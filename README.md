# Organisation de l'équipe

- **Branche master**.
- **Branche dev**: branche principale avant le merge sur la branche master.
- **Branche dev-front**: branche principale pour le front-end.
- **Branche dev-back**: branche principale pour le back-end.
- **Branche front-NomDeLaFonctionnalité**: branche pour réaliser une grosse fonctionnalité sur le projet, côté front-end.
- **Branche back-NomDeLaFonctionnalité**: branche pour réaliser une grosse fonctionnalité sur le projet, côté back-end.
- Notre branche Master ne sera mergé qu’avec la branche dev principale, à la fin de chaque sprint et après minutieuses vérifications de celle-ci.
- Notre branche dev sera mergé avec les branches dev-front et dev-back, qu’à chaque fois que les branches auront bien été testés et vérifiées par notre Git Master.

- **Pour nos commits :**
  - Ceux-ci seront en anglais.
  - On note le type de modification en premier lieu `[ADD]` / `[UPDATE]` / `[DELETE]`
  - On note une courte description de la modification, avec des mots clefs précis
  - On note une flèche `->` puis un détail sur la modification explicatif
  - Exemple: `[ADD] homepage functions about users → users auth + logout`
