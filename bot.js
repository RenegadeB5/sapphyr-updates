//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
const config = require("./config.json");
var client = new Discord.Client();
const prefix = ".";
const args = message.content.slice(prefix.length).trim().split(/ +/g);
var NOTIFY_CHANNEL;

client.on ('message', message => {
  if (message.content === prefix + "spam") {
        if (message.author.id === config.ownerID) {
          let text = args.slice(1).join(" ");
          let ammount = args.slice(2);
          for(var i=0; i < ammount; i++){
              NOTIFY_CHANNEL.sendMessage(text, {tts: false});
              
        
         
        } 
        else { 
                NOTIFY_CHANNEL.sendMessage('Only Rene can use this command, suck a cock. ', {tts: false});
  }
  }});
 
//LOGIN TOKEN-------------------------------------------------------------------
client.login('MzczMTQwOTY2NjUzMDM0NTA2.DNsyfg.JlQTHYPaA7sXJ_sW4Eb7db7VWBk');
