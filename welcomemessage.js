const Discord = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
const Schema = require('../../../models/welcomeChannel');
const client = require('../../../index');
const { MessageEmbed } = require("discord.js");

client.on('guildMemberAdd', async (member) => {
  Schema.findOne({ Guild: member.guild.id }, async (e, data) => {
    if (!data) return;
    let user = member.user;

    const welcomeembed = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTimestamp()
  .setImage('https://media.discordapp.net/attachments/976018072144085056/1117349575842353162/standard.gif')    .setThumbnail(`${member.displayAvatarURL()}`)
      .setFooter("ROYAL ROLEPLAY", member.guild.iconURL({ dynamic: true }))
      .setTitle(`WELCOME TO DEXCORD DEVELOPMENTS`)
      .setDescription(`
     **HEY** ${member} 
     **WELCOME TO DEXCORD DEVELOPMENTS**
**READ RULES/GUIDLINES**
🥰**THANKS FOR JOINING**
     

`);

    // Define the welcome channel
    const channel = member.guild.channels.cache.get(data.Channel);
    // Send the welcome embed to the channel
    channel.send({
      content: `${member}`,
      embeds: [welcomeembed]
    });
const tanda = new MessageActionRow().addComponents(

      new MessageButton().setLabel('INVITE Thomman Bot').setStyle('LINK').setEmoji('<:tanda_music:1115618216279036096>').setURL('https://dsc.gg/thommanbot'),

   );
    const usersend = new MessageEmbed()
      .setTitle(`Welcome To Dexcord Developments`)
      .setDescription(`
    <a:arrow_arrow:1105851962680946688> **HEY ${member} !
    THANKS FOR JOINING OUR SERVER 
    READ RULES / ENJOY!**`)
      .setFooter("Hope you enjoy the stay");
      
    // Send a direct message to the user
    user.send({
      content: `${member}`,
      embeds: [usersend],
      components:[tanda]
    });

    // Add auto role to the member
    const autoRoleID = "1116742495896879137"; // Replace ROLE_ID_HERE with the actual role ID
    const role = member.guild.roles.cache.get(autoRoleID);
      member.roles.add(role)
      
    });
    });

  

