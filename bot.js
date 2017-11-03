//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
const config = require("./config.json");
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
    client.user.setGame("Exiled R Shit! " + client.guilds.array().length + " Servers");
    console.log('successfully Logged In As Wall Check Bot!');
    NOTIFY_CHANNEL = client.channels.find("name", "faction-chat"); // Channel to send notification
 
//SET INTERVAL------------------------------------------------------------------
    int1 = setInterval(function cannuner(){
    if(test == 1 && (key != 0)){
 
        NOTIFY_CHANNEL.sendMessage('@here Oi lazy cunts, Check the walls.', {tts: false});
        NOTIFY_CHANNEL.sendMessage('@here Oi lazy cunts, Check the walls.', {tts: false});
 
    }
    else{
        key = 1
        test = 1}
    }, 692307);
//1200000 = 20 mins 900000 = 15 mins  1500000 = 25 mins 1800000 = 30 mins https://www.timecalculator.net/seconds-to-milliseconds
} //1 second = 1000 ms
);
//CHECKED-----------------------------------------------------------------------
client.on('message', message => {
  if (message.content == prefix + 'clear') {
    lastSender = message.guild.lastSender = message.author
    lastTime = new Date()
 
    NOTIFY_CHANNEL.sendMessage ('Fuck me. Someones actually checked, thank you!')
    key = 0 }
});
//RAID------------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "raid") {
    NOTIFY_CHANNEL.sendMessage('specify direction .raid north/east/south/west');
  }
});
//RAID NORTH------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "raid north") {
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US NORTH SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US NORTH SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US NORTH SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US NORTH SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US NORTH SIDE!', {tts: false});
  }
});
//RAID EAST-------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "raid east") {
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US EAST SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US EAST SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US EAST SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US EAST SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US EAST SIDE!', {tts: false});
  }
});
//kys bot-------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === "kys bot") {
    NOTIFY_CHANNEL.sendMessage('Neck yourself', {tts: false});
  }
});
//spam-------------------------------------------------------------------
client.on ('message', message => {
  if ((message.author.id === config.ownerID) || (message.content === prefix + "spam")) {

    NOTIFY_CHANNEL.sendMessage('@everyone ', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@here ', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone ', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@here ', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone ', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@here ', {tts: false});
  } 
      else { 
                NOTIFY_CHANNEL.sendMessage('Only Rene can use this command, suck a cock. ', {tts: false});
  }
});
//CASTLE-------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "castle") {
    NOTIFY_CHANNEL.sendMessage('@here SOME NIGGERS TAKING MY CASTLE', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@here SOME NIGGERS TAKING MY CASTLE', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@here SOME NIGGERS TAKING MY CASTLE', {tts: false});
  }
});
//RAID SOUTH------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "raid south") {
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US SOUTH SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US SOUTH SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US SOUTH SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US SOUTH SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US SOUTH SIDE!', {tts: false});  
  }
});
//KOTH------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "koth") {
    NOTIFY_CHANNEL.sendMessage('@here OI JEWS, Theres a koth.', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@here OI JEWS, Theres a koth.', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@here OI JEWS, Theres a koth.', {tts: false});
  }
});
//RAID WEST-------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "raid west") {
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US EAST SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US EAST SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US EAST SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US EAST SIDE!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US EAST SIDE!', {tts: false});
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
    .addField('Wall Status Factions', 'Last `.cleared was by @' + message.guild.lastSender.username)
    .addField('Time Since Last ```.clear```', msToTime(Math.abs(new Date() - lastTime)) + " ago.")
    .addField('Time Until Reminder', msToTime(15*60*1000 - Math.abs(new Date() - lastTime)))
    .setThumbnail("https://cdn3.iconfinder.com/data/icons/minecraft-icons/512/tnt.png")
    .setURL("https://raw.githubusercontent.com/RenegadeB5/ExiledMasterRace/master/help.md")
      NOTIFY_CHANNEL.sendEmbed(embed)
    }
    else {
      NOTIFY_CHANNEL.sendMessage("do .clear and then i'll tell u ;)")
    }
  }
});
 
client.on ('message', message => {
  if (message.content === prefix + "help") {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTitle('CLICK FOR HELP')
    .addField('help')
    .setURL("https://raw.githubusercontent.com/RenegadeB5/ExiledMasterRace/master/help.md")
      NOTIFY_CHANNEL.sendEmbed(embed)
  }
})
//LOGIN TOKEN-------------------------------------------------------------------
client.login('MzczMTQwOTY2NjUzMDM0NTA2.DNsyfg.JlQTHYPaA7sXJ_sW4Eb7db7VWBk');
