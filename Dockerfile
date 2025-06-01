# Базовий імідж Node.js
FROM node:18-alpine

# Робоча директорія в контейнері
WORKDIR /app

# Копіюємо package файли
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо решту коду
COPY . .

# Збираємо TypeScript (опційно, якщо ви компілюєте)
RUN npm run build

# Вказуємо порт
EXPOSE 3000

# Команда для запуску
CMD ["npm", "run", "start:dev"]