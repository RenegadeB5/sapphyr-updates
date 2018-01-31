//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
const config = require("./config.json");
var client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
    client.user.setGame("Exiled Hack! " + client.guilds.array().length + " Servers");
    console.log('successfully Logged In As schem Bot!');

client.on ('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "spam") {
        if (message.author.id === config.ownerID) {
          let ammount = args.slice(0).join(" ");
          let text = args.slice(1).join(" ");
          
              
                  function repeat(func, times) {
            func();
            --times && repeat(func, times);
        }

        repeat(function () { message.channel.send(text); }, ammount);    
        
         
        } 
        else { 
               message.channel.send('Only Rene can use this command. ');
  }
  }})
});
    
//LOGIN TOKEN-------------------------------------------------------------------
client.login(process.env.BOT_TOKEN);
