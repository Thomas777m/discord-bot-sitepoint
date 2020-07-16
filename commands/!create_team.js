const { Guild, DiscordAPIError, Channel, Message, User, Role } = require('discord.js');

module.exports = {
  name: '!create_team',
  description: 'creates a team',
  execute(msg, args, msgUser, mentionedUser, msgAuthor, msgGuild) {
    
    message = msg.content;
    var roleData = message.split(' ');
    
    if(msgGuild.roles.find('name', roleData[1]))
    {
      msg.channel.send('Role with that name already exists');
      return;
    }

    msgGuild.createRole({
      name: roleData[1],
      color: Math.floor(Math.random() * 16777214) + 1,
      hoist: true,
      
    }).then(function(){
        var role = msgGuild.roles.find(role => role.name === roleData[1])
        msgUser.addRole(role);
        msg.channel.send('Successfully created role');
        
      })
  },
};