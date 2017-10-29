# Тестовое задание соискателя на должность web программиста #

## Структура проекта ##

### Серверная часть ###

Серверная часть пректа базируется на framework Silex https://silex.symfony.com/
Основная часть приложения описана в файле app/app.php Отображаемые шаблоны в папке templates. В шаблонизатор на базе Twig 

### Front ###

Отображаемая часть базируется на framework Vue https://vuejs.org/ c применением Vuex для связи нескольких частей приложения.
Стили описаны с помощью языка less.

## Instalation ##

### Для установки серверной части необходимо ###
1. Развернуть файлы проекта.
2. Запустить composer
```bash
$ composer install
```
3. Итредактировать настройки в файле config/config.yml
4. Создать таблицу в БД запустив инсталяционный запрос
 ```sql
$ mysql -u<USER> -p<PASSWORD> <DATABASE> <install.sql
```

### Для установки окружения разработки front приложения необходимо: ###
Запустить менеджер зависимостей
```bash
$ npm install --dev
```

Тестовый сервер разработки запускается командой
```bash
$ npm run start
```

Слежение за изменениями файлов и "горячая" компиляция
```bash
$ npm run dev
```

Сборка релиза
```bash
$ npm run build
```

Contact: Маковейчук Тарас <taras.m0@yandex.ru>