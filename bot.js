client.on ('message', message => { 
  if ((message.channel === message.guild.channels.find("name", "art"))&&(message.attachments.size >= 1)) {
      message.react('🔺');
      console.log(message.attachments.size);
  }
});
