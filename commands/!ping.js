const { Message } = require("discord.js");

module.exports = {

  name: '!ping',
  description: 'Ping!',
  execute(msg, args, msgUser, mentionedUser, msgAuthor, msgGuild) {
    msg.reply('pong');
    msg.channel.send('pong');
    msgAuthor.sendMessage('pong')
    
    
  },
};
