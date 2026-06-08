import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import books from './data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// ── HOME ROUTE ──
app.get('/', (req, res) => {
  const cardsHTML = books.map(book => `
    <a href="/books/${book.id}" class="book-card">
      <img src="${book.image}" alt="${book.title}" />
      <div class="book-card-body">
        <h2>${book.title}</h2>
        <p class="author">by ${book.author}</p>
        <span class="tag">${book.genre}</span>
        <p class="rating">⭐ ${book.rating}</p>
      </div>
    </a>
  `).join('');

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>📚 BookShelf</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <main class="container">
        <h1 class="site-title">📚 BookShelf</h1>
        <p class="site-subtitle">A curated list of must-read books</p>
        <div class="books-grid">
          ${cardsHTML}
        </div>
      </main>
    </body>
    </html>
  `);
});

// ── DETAIL ROUTE ──
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);

  if (!book) {
    return res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${book.title} — BookShelf</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <a href="/" class="back-link">← Back to BookShelf</a>
      <div class="detail-container">
        <img src="${book.image}" alt="${book.title}" />
        <div class="detail-body">
          <h1>${book.title}</h1>
          <div class="detail-meta">
            <span class="tag">${book.genre}</span>
            <span class="tag">📅 ${book.year}</span>
            <span class="rating">⭐ ${book.rating}</span>
          </div>
          <p><strong>Author:</strong> ${book.author}</p>
          <p class="desc">${book.description}</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

// ── 404 CATCH-ALL (must be last) ──
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});