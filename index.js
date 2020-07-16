require('dotenv').config();
const Discord = require('discord.js');
const TOKEN = process.env.TOKEN;
const bot = new Discord.Client();
bot.commands = new Discord.Collection;
const botCommands = require('./commands')


Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.login(TOKEN);


bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  
  
});

;

bot.on('message', msg => {

  if(msg.content.startsWith("!")){

  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  const msgUser = msg.member;
  const msgAuthor = msg.author; 
  const mentionedUser = msg.mentions.members.first();
  const msgGuild = msg.guild;
  
  
  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args, msgUser, mentionedUser, msgAuthor, msgGuild);
    
  
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
}



});
