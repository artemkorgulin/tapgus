### Описание проекта

Шаблон проекта node/nestjs tapGus!!

### Общие требования

1. node >=22.9
2. nginx + image-filter
4. Docker 20
4. PostgreSql 12
5. Nest JS 11
6. Jest
7. Nodemon
8. TypeOrm
8. Npm
8. Pug

### Описание развертывания проекта


1. Установить [Docker](https://docs.docker.com/install/) и [Docker Compose](https://docs.docker.com/compose/install/).
1. Добавить доменное имя `localhost` и все поддомены из в `docker-compose.override.yml` ```/etc/hosts```
    ```
    127.0.0.1 localhost
    ```
1. Предотвратить возможные конфликты:
    - если работает локально установленный nginx или иной web-сервер, который может занимать порт 80 на локальном 
        сервере, остановить его или перенастроить;
    - если включены, остановить все другие docker-контейнеры от других проектов.