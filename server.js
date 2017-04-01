var TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
var token = '351195034:AAHPGVC4RJUV2zPzJV6Yw2gEMxuByPq1H-g';

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, {polling: true});





// Matches "/echo [whatever]"
bot.onText(/\/repeat (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  var chatId = msg.chat.id;
  var resp = match[1]; // the captured "whatever"
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});


var lista = "lo que pongo en la lista: "

var handleMessage = function(message){
  var text = message.text||"";
  var chatId = message.chat.id;

  if(message.from){
    var userName = message.from.username || message.from.first_name;
    switch(true){

      case text.search(/\/lista/i)==0:
        bot.sendMessage(chatId , lista);
      break;

      case text.search(/\/add/i)==0:
        var addp = text.replace("/add" , "");
        lista += '\n' + addp;
      break;
    }
  }
};
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', handleMessage);

  // send a message to the chat acknowledging receipt of their message






//console.log('Prueba de amadeo el guapo');