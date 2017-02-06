var TelegramBot = require('node-telegram-bot-api');
var token = '...';
var emoji = require("node-emoji").emoji;
 
// Create a bot that uses 'polling' to fetch new updates 
var bot = new TelegramBot(token, { polling: true });

bot.getUpdates()
 
bot.onText(/\/nybajs/, function(msg, match) {
    const photo = "./poop_emoji.png";
    var chatId = msg.chat.id;
    var option = {
            parse_mode: "Markdown",
            reply_markup: {  
                resize_keyboard: true,
                keyboard: [["Svart"],["Brun"],["Grön"]],
                one_time_keyboard: true
            }
            
        };

    var nybajs = ["Ah det va fan på tiden...", "Har du inte förstört toaletten tillräckligt?", "Ouf, stackars toalett"];
    var chosenBajs = nybajs[Math.floor(Math.random() * nybajs.length)];
    bot.sendMessage(chatId, emoji.poop + chosenBajs + emoji.poop)
    bot.sendMessage(chatId, "Färg?", option);
    
});

bot.onText(/\/help/, function(msg, match) {
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, "Jag har bara ett kommando.\n/nybajs - Lägg till en ny bajsupplevelse")
});

console.log("PooBot is running");
