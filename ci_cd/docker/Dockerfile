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

# Сборка проекта
RUN npm run build

# Открываем порт, на котором работает vite preview
EXPOSE 4173

# Запуск preview-сервера
CMD ["npm", "run", "preview"]
