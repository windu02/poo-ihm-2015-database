# POO-IHM Database

## Installation

### Prérequis

Avoir installé nodejs, git et [PostgresSql](http://www.postgresqlfr.org/)

### Récupération du code et Installation des dépendances
```sh
$ git clone https://github.com/windu02/poo-ihm-2015-database
$ cd poo-ihm-2015-database
$ npm install
```

### Configuration de la base de données

Vous devez créer une base de données postgresql. Nommez là par exemple "pooihm2015".

Dans le répertoire "database", il faut recopier le fichier "connection_infos-sample.json" et nommer la copie "connection_infos.json".

Dans ce fichier "connection_infos.json", vous devez décrire les paramètres de connexion à la base de données : le "host" et le "port" ne devrait pas beaucoup changer, par contre, vous devez modifier les valeurs pour le nom de la base de données "dbname" (par exemple dans notre cas: dbname="pooihm2015"), le nom de l'utilisateur "user" et son mot de passe "password".

## Fonctionnement
Pour lancer la base de données et surtout l'accès en mode REST :
```sh
node app.js drop=false
```

### Paramètre "drop"
* Si **"drop=true"**, la base de données sera vidée et sa structure sera remise à jour. Vous devez utiliser cette valeur lorsque vous changez la structure de votre base de données ou que vous voulez la réinitialiser.
* Si **"drop=false"**, le contenu et la structure de la base de données restent intacts.

***ATTENTION :** Ce paramètre a pour valeur par défaut "true" !!!*


Vous devriez avoir accès à l'api à travers l'URL suivante :
[http://localhost:3000/api/](http://localhost:3000/api/)

*Pour changer le numéro du port, modifier le dans le fichier app.js ou définissez la variable d'environnement **PORT**.*

### Requêter l'API
Pour tester l'API REST, je vous conseille d'installer une extension à votre navigateur pour pouvoir faire des appels à l'API en utilisant les verbes HTTP.
* Sur Chrome, je vous conseille l'extension ["Postman Rest Client"](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm)
* Sur Firefox, je vous conseille l'extension [RestClient](https://addons.mozilla.org/fr/firefox/addon/restclient/)


## Documentation
Pour modifier la structure de la base de données, vous devez modifier la description des tables (voir les fichiers présents dans le répertoire "tables") et les relations entre les modèles (voir le fichier "database/relations.js").

Pour effectuer ces modifications, vous pouvez consulter la document de Sequelize => [http://docs.sequelizejs.com/en/latest/](http://docs.sequelizejs.com/en/latest/)
