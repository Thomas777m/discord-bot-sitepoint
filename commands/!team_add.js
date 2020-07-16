const { Message } = require("discord.js");

module.exports = {

  name: '!team_add',
  description: 'add members to your team!',
  execute(msg, args, msgUser, mentionedUser, msgAuthor, msgGuild) {
    var roles = [];
    msgUser.roles.forEach(role => roles.push(role.name));
    msg.mentions.members.forEach(member => member.addRole(msgGuild.roles.find('name', roles[1])));
  },
};
