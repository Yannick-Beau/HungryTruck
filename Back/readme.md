# Nos routes

|VISITEUR|Endpoint|Méthode HTTP|Description|Retour|
|-|-|-|-|-|
|VISITEUR|`/api/foodtruck`|`GET`|Récupération de tous les FoodTrucks|200|
|VISITEUR|`/api/foodtruck/search`|`GET`|Récupération de tous les FoodTrucks pour effectuer un recherche|200|
|VISITEUR|`/api/foodtruck/{id}`|`GET`|Récupération du FoodTruck dont l'id est fourni|200 ou 404|
|VISITEUR|`/api/faq`|`GET`|Récupération de tous les Question|200|
|VISITEUR|`/api/faq/{id}`|`GET`|Récupération du la question et de réponse dont l'id est fourni|200 ou 404|
|VISITEUR|`/api/user/create`|`POST`|Ajout d'un utilisateur _+ la donnée JSON qui représente le nouveau user_|201|
|VISITEUR|`/api/login_check`|`POST`|Connection _+ la donnée JSON qui représente le nouveau user_|200 ou 401|

|USER|Endpoint|Méthode HTTP|Description|Retour|
|-|-|-|-|-|
|USER|`/api/user/{id}`|`GET`|Récuperation d'info d'un USER|200 ou 404|
|USER|`/api/user/edit/{id}`|`PUT` ou `PATCH`|Editer un User|200 ou 422|
|USER|`/api/user/delete/{id}`|`DELETE`|Suppression de Compte|200 ou 404|

|PRO|Endpoint|Méthode HTTP|Description|Retour|
|-|-|-|-|-|
|PRO|`/api/pro/{id}`|`GET`|Récuperation d'info d'un USER|200 ou 404|
|PRO|`/api/pro/edit/{id}`|`PUT` ou `PATCH`|Editer un User|200 ou 422|
|PRO|`/api/pro/delete/{id}`|`DELETE`|Suppression de Compte|200 ou 404|
|PRO|`/api/foodtruck/{id}/eventfoodtruck/create`|`POST`|Création d'un evenement foodtruck|201|
|PRO|`/api/foodtruck/create`|`POST`|Création d'un evenement foodtruck|201|
|PRO|`/api/foodtruck/edit/{id}`|`DELETE`|Création d'un evenement foodtruck|200 ou 422|
|PRO|`/api/foodtruck/delete/{id}`|`DELETE`|Création d'un evenement foodtruck|200 ou 404|
