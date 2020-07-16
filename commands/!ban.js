const { Guild } = require("discord.js");

module.exports = {
  name: '!ban',
  description: 'Ban',
  execute(msg, args, msgUser, mentionedUser, msgAuthor, msgGuild) {
    if(msgUser.hasPermission("BAN_MEMBERS")){
      msg.reply("Permission Granted")
      mentionedUser.ban();


    }

    else{
      msg.reply("Permission Denied")
    }
  },
};