# Инструкция по запуску

## Сборка и запуск проекта с помощью Docker

Склонируйте репозиторий.

Соберите конейнер.

`docker build -t <container-name> .`

`docker run -d -p 3000:3000 <container-name>`


## Сборка и запуск проекта вручную

Склонируйте репозиторий.

Убедитесь, что у вас установлен pnpm и включен corepack:

`corepack enable`

Установите зависимости:

`pnpm i`

#### Запуск в dev режиме

`pnpm dev`

#### Сборка и запуск в prod режиме

`pnpm build`

`npx serve dist`
