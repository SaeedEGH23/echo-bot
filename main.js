const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
// Replace 'TOKEN' with your bot's token
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message.
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // Send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Received your message");

  // Echo the user's message
  bot.sendMessage(chatId, `Echo: ${msg.text}`);
});
