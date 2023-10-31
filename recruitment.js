const {MessageEmbed} = require("discord.js")
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
    name: 'rec',
    aliases: ['dexrrr', 'dexoo'],
    description: 'About Dexcord',
    category: 'staticembed',
run: async (client, message, args) => {
  
 const apply = new MessageActionRow().addComponents(

      new MessageButton().setLabel(`Apply For Dexcord`).setEmoji('<:dexcord:1123263699449290804>').setStyle('LINK').setURL('https://surveyheart.com/form/62b75bf1d2ae5a146346821f'),

   );   
    const about = new MessageEmbed()
  
  .addFields({name:`DEXCORD RECRUITMENT`, value: `**WE ARE HIRING A STAFF, ADMIN, DEVELOPER, DROPPER, TICKET SUPPORTER.\n ANY ONE INTERESTED TO JOIN OUR STAFF FAMILY.\nCLICK BELOW BUTTON TO APPLY...**`})


                  
  .setThumbnail(message.guild.iconURL({ dynamic: true})) 
.setImage("https://media.discordapp.net/attachments/976018072144085056/1117349575842353162/standard.gif")
  .setColor("#2f3136")
  .setFooter("Dexcord™")
  
  message.channel.send({embeds:[about], components:[apply], content: "<@&1116742495896879137>"})
  message.delete()
  }
}