# Nos routes

|Endpoint|Méthode HTTP|Description|Retour|
|-|-|-|-|
|`/api/foodtruck`|`GET`|Récupération de tous les FoodTrucks|200|
|`/api/foodtruck/{id}`|`GET`|Récupération du FoodTruck dont l'id est fourni|200 ou 404|
|`/api/faq`|`GET`|Récupération de tous les Question|200|
|`/api/faq/{id}`|`GET`|Récupération du la question et de réponse dont l'id est fourni|200 ou 404|
|`/api/user`|`POST`|Ajout d'un utilisateur _+ la donnée JSON qui représente le nouveau user_|201|
|`/api/login_check`|`POST`|Connection _+ la donnée JSON qui représente le nouveau user_|200 ou 401|
