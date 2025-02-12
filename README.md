# 🚀 Rick and Morty Search

![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?logo=github)
![Vite](https://img.shields.io/badge/Vite-React-blueviolet?logo=vite)
![API](https://img.shields.io/badge/API-Rick%20%26%20Morty-green?logo=graphql)

## 🎬 **Описание проекта**
Rick and Morty Search — это веб-приложение, позволяющее искать персонажей из вселенной **"Rick and Morty"**. Приложение использует **Rick and Morty API** для загрузки данных и отображения списка персонажей.

🔍 **Функции проекта**:
- Поиск персонажей по имени с задержкой (`debounce`).
- Отображение **количества найденных персонажей**.
- Две больших карточки (`788x262`), затем **6 маленьких** (`518x150`).
- При клике на карточку **открывается детальная страница персонажа**.
- Оптимизированная работа API с (отмена старых запросов).
- Размещено на **GitHub Pages**:  
  👉 [Демо проекта](https://romanov-km.github.io/rick-morty-search/)

---

## 🛠 **Стек технологий**
- ⚡ **Vite + React**
- 🌍 **React Router (HashRouter)**
- 🎨 **CSS (Flex + Grid Layout)**
- 🔗 **Axios (работа с API)**
- 🏎 **Debounce (lodash.debounce)**
- 🚀 **GitHub Pages (деплой)**

---

## 📥 **Установка и запуск**
### 🔹 1. Клонирование репозитория
```sh
git clone https://github.com/romanov-km/rick-morty-search.git
cd rick-morty-search
```

### 🔹 2. Установка зависимостей
```ssh
npm install
```
### 🔹 3. Запуск в режиме разработки
```ssh
npm run dev
```
Сайт откроется по адресу:
➡ http://localhost:5173

## 🌎 Деплой на GitHub Pages
### 🔹 1. Добавление gh-pages
```ssh
npm install gh-pages --save-dev
```

### 🔹 2. Настройка package.json
Добавить:
```json
"homepage": "https://romanov-km.github.io/rick-morty-search",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

🔹 3. Деплой проекта
```ssh
npm run deploy
```
✅ После этого сайт будет доступен по ссылке:
➡ https://romanov-km.github.io/rick-morty-search/

## 📡 API: [Rick and Morty API](https://rickandmortyapi.com/)

Приложение использует Rick and Morty API.
Пример запроса:
```ssh
GET https://rickandmortyapi.com/api/character/?name=Rick
```

```json
{
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    }
  ]
}
```

## 📌 Контакты
👤 Автор: https://github.com/romanov-km
📧 Email: km@frontend-romanov.ru
🌐 LinkedIn: 

## 🎯 To-Do (улучшения)
✅ Улучшить стили карточек
🔄 Добавить пагинацию
🌙 Темная тема

📢 Оцените проект, поставьте ⭐ на GitHub!