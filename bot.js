require('dotenv').config();
const express = require('express');
const app = express();
const Telegram = require('telegraf/telegram');
const telegram = new Telegram(process.env.BOT_TOKEN, {
  agent: null,
  webhookReply: true,});
const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(ctx => {
  telegram.sendMessage(ctx.from.id,
  `Your Telegram id: ${ctx.from.id}`);
});


const fetch = require('node-fetch');
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
app.use(express.json());
app.post('/', (req, res) => {
  telegram.sendMessage(
    process.env.ID,
    `Name: ${req.body.name}
    Phone: ${req.body.phone}`,
  );
});

//handleSubmit of your contactPage.js
const url = 'localhost:3000';
fetch(url, {
  method: 'POST',
  mode: 'cors',
  body: JSON.stringify({ …this.state.form}),
  headers: {
  'Content-Type': 'application/json',
  },
});

bot.startPolling();
app.listen(3000, () => console.log('Example app listening on port 3000!'));