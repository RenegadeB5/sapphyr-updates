//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = ".";
var test = 0;
var lastTime;
var key = 1;
var int1;
var NOTIFY_CHANNEL;

function msToTime(timeMS) {
      var timeString;
      var seconds = parseInt((timeMS/1000)%60)
          ,minutes = parseInt((timeMS/(1000*60))%60)
          ,hours = parseInt((timeMS/(1000*60*60))%24);
      if(hours > 0){
        timeString = hours + " hours"
      }else if (minutes > 0) {
        timeString = minutes + " minutes"
      }else if (seconds > 0) {
        timeString = seconds + " seconds"
      }
      return timeString;
}
//ON LOGIN----------------------------------------------------------------------
client.on('ready', () => {
    client.user.setGame("tntdetectors.com | " + client.guilds.array().length + " Servers");
    console.log('successfully Logged In As Wall Check Bot!');
    NOTIFY_CHANNEL = client.channels.find("name", "checkwall"); // Channel to send notification

//SET INTERVAL------------------------------------------------------------------
    int1 = setInterval(function cannuner(){
    if(test == 1 && (key != 0)){

        NOTIFY_CHANNEL.sendMessage('@everyone walls have not been checked for 15 minutes', {tts: true});
        NOTIFY_CHANNEL.sendMessage('@everyone walls have not been checked for 15 minutes', {tts: true});

    }
    else{
        key = 1
        test = 1}
    }, 1500000);
//1200000 = 20 mins 900000 = 15 mins  1500000 = 25 mins 1800000 = 30 mins https://www.timecalculator.net/seconds-to-milliseconds
} //1 second = 1000 ms
);
//CHECKED-----------------------------------------------------------------------
client.on('message', message => {
  if (message.content == prefix + 'clear') {
    lastSender = message.guild.lastSender = message.author
    lastTime = new Date()

    NOTIFY_CHANNEL.sendMessage('Walls have been checked! , thanks!')
    key = 0 }
});
//WEEWOO------------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "raid") {
    NOTIFY_CHANNEL.sendMessage('specify direction .raid south/west');
  }
});
//WEEWOO NORTH------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "raid north") {
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM NORTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM NORTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM NORTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM NORTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM NORTH SIDE**', {tts: true});
  }
});
//WEEWOO EAST-------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "raid east") {
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM EAST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM EAST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM EAST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM EAST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM EAST SIDE**', {tts: true});
  }
});
//WEEWOO SOUTH------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "raid south") {
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM SOUTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM SOUTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM SOUTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM SOUTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM SOUTH SIDE**', {tts: true});
  }
});
//WEEWOO WEST-------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "raid west") {
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM WEST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM WEST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM WEST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM WEST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM WEST SIDE**', {tts: true});
  }
});
//WALLS-------------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "walls") {
    if (message.guild.lastSender) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setTitle('Wall Stats')
    .addField('Wall Status Factions', 'Last `.checked was by @' + message.guild.lastSender.username)
    .addField('Time Since Last ```.Checked```', msToTime(Math.abs(new Date() - lastTime)) + " ago.")
    .addField('Time Until Reminder', msToTime(15*60*1000 - Math.abs(new Date() - lastTime)))
    .setThumbnail("https://cdn3.iconfinder.com/data/icons/minecraft-icons/512/tnt.png")
    .setURL("http://thearchon.net")
      NOTIFY_CHANNEL.sendEmbed(embed)
    }
    else {
      NOTIFY_CHANNEL.sendMessage("```do .clear and then i'll tell u ;)```")
    }
  }
});

client.on ('message', message => {
  if (message.content === prefix + "help") {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTitle('CLICK FOR HELP')
    .addField('help')
    .setURL("https://thearchon.net")
      NOTIFY_CHANNEL.sendEmbed(embed)
  }
})
//LOGIN TOKEN-------------------------------------------------------------------
client.login('MzczMTQwOTY2NjUzMDM0NTA2.DNThiA.sPij_F95Xr2hTnAp1JkTPbSOqTc');
