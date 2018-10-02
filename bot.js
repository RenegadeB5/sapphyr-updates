client.on ('message', message => { 
  if (message.channel === message.guild.channels.find("name", "art")) {
      message.react('🔺');    
  }
});
