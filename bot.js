//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
const config = require("./config.json");
const prefix = "!";
var client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame("Exiled Hack! " + client.guilds.array().length + " Servers");
    console.log('successfully Logged In As spam bot!');

client.on ('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "spam") {
        if (message.author.id === config.ownerID) {
          let [ammount, text] = args;
           
              var number = 1;
              while (number <= ammount) {
                  number++;
                  message.channel.send(text);
            }     
     } 
       else { 
                message.channel.send('Only Rene can use this command. ');
  }
  }})
});
    
//LOGIN TOKEN-------------------------------------------------------------------
client.login(process.env.BOT_TOKEN);
