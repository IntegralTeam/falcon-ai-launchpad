FROM node:20-alpine

WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь остальной проект
COPY . .

ENV NODE_ENV=production

# Сборка проекта
RUN npm run build

# Открываем порт, на котором работает vite preview
EXPOSE 4173

# Запуск preview-сервера
CMD ["npm", "run", "preview"]
