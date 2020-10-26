// Получение пакета в node через глобальную функцию require()
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({extended: true}));

app.use('/public', express.static('public'));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/link.routes'));
app.use('/t', require('./routes/redirect.routes'));
app.use('/api/post', require('./routes/post.routes'));

const PORT = config.get('port') || 5000;

// eslint-disable-next-line require-jsdoc
async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(
        PORT, () => console.log(`App has been started on port ${PORT}...`),
    );
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start();
