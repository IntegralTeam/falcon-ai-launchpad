FROM node:20-alpine

WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект, включая .env
COPY . .

# Устанавливаем переменные окружения для сборки
ENV NODE_ENV=production
ENV DISABLE_PRERENDER=true
ENV NITRO_PRESET=node-server

# Сборка проекта
RUN npm run build

# Открываем порт, на котором работает сервер
EXPOSE 3000

# Запуск сервера через node (Nitro output)
CMD ["node", ".output/server/index.mjs"]
