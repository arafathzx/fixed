const client = require("../../../index.js");
const logCh = "1118187948257595474";
const guildId = "979979944790745099";
const Discord = require(`discord.js`);
let logChannel;
let guild;

client.on("ready", async () => {
     guild = client.guilds.cache.get(guildId)
  if(!guild) return;

 logChannel = guild.channels.cache.get(logCh);
})

client.on("messageDelete", async function (message) {
if(message.author.bot) return;

   let files = null;
        //add images if added (no videos possible)
        if (message.attachments.size > 0){
            if (message.attachments.every(attachIsImage)) {
                files = url
            }
        }

   function attachIsImage(msgAttach) {
            url = msgAttach.url || null;
            imagename = msgAttach.name || `Unknown`;
            return url.indexOf(`png`, url.length - 3 ) !== -1 ||
                url.indexOf(`jpeg`, url.length - 4 ) !== -1 ||
                url.indexOf(`gif`, url.length - 3) !== -1 ||
                url.indexOf(`jpg`, url.length - 3) !== -1;
        }
  
  const embed = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setAuthor(`${message.author.tag} - Message Deleted`, message.author.displayAvatarURL())
  .addField(`Message Creation (DATE):`, `*\`${message.createdAt}\`*`)
  .addField(`Channel Deleted From:`, `${message.channel} | \`${message.channel.id}\` / *\`${message.channel.name}\`*`)
  .addField(`Message Deleted:`, `\`\`\`\n${message.content.replace(/`/g, "'") || "Possible Embed"}\n\`\`\``)
  .setImage(files)
  .setFooter(`${client.user.username} | `, )

  logChannel.send({ embeds: [embed] })
})
client.on("messageUpdate", async function (oldMessage, newMessage) {
if(newMessage.author.bot) return;

  let files = null;
        //add images if added (no videos possible)
        if (oldMessage.attachments.size > 0){
            if (oldMessage.attachments.every(attachIsImage)) {
                files = url
            }
        }

   function attachIsImage(msgAttach) {
            url = msgAttach.url || null;
            imagename = msgAttach.name || `Unknown`;
            return url.indexOf(`png`, url.length - 3 ) !== -1 ||
                url.indexOf(`jpeg`, url.length - 4 ) !== -1 ||
                url.indexOf(`gif`, url.length - 3) !== -1 ||
                url.indexOf(`jpg`, url.length - 3) !== -1;
        }
  
 const embed = new Discord.MessageEmbed()
  .setColor(`YELLOW`)
  .setAuthor(`${newMessage.author.tag} - Message Updated`, newMessage.author.displayAvatarURL())
  .addField(`Message Creation (DATE):`, `*\`${newMessage.createdAt}\`*`)
  .addField(`Channel Updated From:`, `${newMessage.channel} | \`${newMessage.channel.id}\` / *\`${newMessage.channel.name}\`*`)
   .addField(`Old Message-Update:`, `\`\`\`\n${oldMessage.content.replace(/`/g, "'") || "Possible Embed"}\n\`\`\``)
  .addField(`New Message-Update:`, `\`\`\`\n${newMessage.content.replace(/`/g, "'") || "Possible Embed"}\n\`\`\``)
  .setImage(files)
  .setFooter(`${client.user.username} | SERVER MANAGER`)

  logChannel.send({ embeds: [embed] })
})
client.on("channelCreate", async function (channel) {

  const embed = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setAuthor(`Channel Created`, guild.iconURL())
  .addField(`Channel:`, `${channel} | \`${channel.id}\` / *\`${channel.name}\`*`)
  .addField(`Channel Type:`, `*\`${channel.type}\`*`)
  .setFooter(`${client.user.username} | SERVER MANAGER`)
  
  logChannel.send({ embeds: [embed] })
})
client.on("channelDelete", async function (channel) {

  const embed = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setAuthor(`Channel Deleted`, guild.iconURL())
  .addField(`Channel Deleted:`, `\`${channel.id}\` / *\`${channel.name}\`*`)
  .addField(`Channel Type:`, `*\`${channel.type}\`*`)
  .setFooter(`${client.user.username} | SERVER MANAGER`)
  
  logChannel.send({ embeds: [embed] })
})
client.on("channelPinsUpdate", async function (channel, time) {

  const embed = new Discord.MessageEmbed()
  .setColor(`BLUE`)
  .setAuthor(`Channel Pins Updated`, guild.iconURL())
  .addField(`Channel:`, `${channel} | \`${channel.id}\` / *\`${channel.name}\`*`)
  .addField(`Channel Type:`, `*\`${channel.type}\`*`)
  .addField(`Pinned at (DATE):`, `*\`${time}\`*`)
  .setFooter(`${client.user.username} | SERVER MANAGER`)
  
  logChannel.send({ embeds: [embed] })
})
client.on("channelUpdate", async function (oldChannel, newChannel) {
  let action;
 if (oldChannel.name != newChannel.name) {
   action = "Name"
 } else if (oldChannel.type != newChannel.type) {
   action = "Type"
 } else if (oldChannel.topic != newChannel.topic) {
   action = "Topic"
 } else {
   return; // To prevent Spam of Logs
 }
  const embed = new Discord.MessageEmbed()
  .setColor(`YELLOW`)
  .setAuthor(`Channel Updated - ${action}`, guild.iconURL())
  .addField(`Old Channel-Name:`, `${oldChannel} | \`${oldChannel.id}\` / *\`${oldChannel.name}\`*`)
  .addField(`New Channel-Name:`, `${newChannel} | \`${newChannel.id}\` / *\`${newChannel.name}\`*`)
  .addField(`Old Channel-Type:`, `*\`${oldChannel.type}\`*`)
  .addField(`New Channel-Type:`, `*\`${newChannel.type}\`*`)
  .setFooter(`${client.user.username} | SERVER MANAGER`)

  if (oldChannel.topic != newChannel.topic) {
    embed.addField(`Old Channel-Topic:`, `\`${oldChannel.topic || "None"}\``)
    embed.addField(`New Channel-Topic:`, `\`${newChannel.topic || "None"}\``)
  }
  
  logChannel.send({ embeds: [embed] })
})
client.on("emojiCreate", async function (emoji) {

  const embed = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setAuthor(`Emoji Created`, emoji.url)
  .addField(`Emoji Created:`, `${emoji} | \`${emoji.id}\` / *\`${emoji.name}\`*`)
  .setFooter(`${client.user.username} | SERVER MANAGER`)
    
  logChannel.send({ embeds: [embed] })
})
client.on("emojiDelete", async function (emoji) {

  const embed = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setAuthor(`Emoji Deleted`, emoji.url)
  .addField(`Emoji Deleted:`, `\`${emoji.id}\` / *\`${emoji.name}\`*`)
  .setFooter(`${client.user.username} | SERVER MANAGER`)
    
  logChannel.send({ embeds: [embed] })
})
client.on("emojiUpdate", async function (oldEmoji, newEmoji) {

  const embed = new Discord.MessageEmbed()
  .setColor(`YELLOW`)
  .setAuthor(`Emoji Updated`, newEmoji.url)
  .addField(`Emoji Updated:`, `${newEmoji} | \`${newEmoji.id}\` / *\`${newEmoji.name}\`*`)
  .addField(`Old Emoji-Name:`, `*\`${oldEmoji.name}\`*`)
  .addField(`New Emoji-Name:`, `*\`${newEmoji.name}\`*`)
  .setFooter(`${client.user.username} | SERVER MANAGER`)
    
  logChannel.send({ embeds: [embed] })
})
client.on("guildMemberUpdate", async function (oldMember, newMember) {

  let options = {}
      if (options[newMember.guild.id]) {
        options = options[newMember.guild.id]
      }
      // Add default empty list
      if (typeof options.excludedroles === "undefined") options.excludedroles = new Array([])
      if (typeof options.trackroles === "undefined") options.trackroles = true
      const oldMemberRoles = [...oldMember.roles.cache.keys()];
      const newMemberRoles = [...newMember.roles.cache.keys()];
      const oldRoles = oldMemberRoles.filter(x => !options.excludedroles.includes(x)).filter(x => !newMemberRoles.includes(x))
      const newRoles = newMemberRoles.filter(x => !options.excludedroles.includes(x)).filter(x => !oldMemberRoles.includes(x))
      const rolechanged = (newRoles.length || oldRoles.length)
      if (rolechanged) {
        let roleadded = ""
        if (newRoles.length > 0) {
          for (let i = 0; i < newRoles.length; i++) {
            if (i > 0) roleadded += ", "
            roleadded += `<@&${newRoles[i]}>`
          }
        }
        let roleremoved = ""
        if (oldRoles.length > 0) {
          for (let i = 0; i < oldRoles.length; i++) {
            if (i > 0) roleremoved += ", "
            roleremoved += `<@&${oldRoles[i]}>`
          }
        }
        let text = `${roleremoved ? `**Role Changed (REMOVED)**\n${roleremoved}` : ""}${roleadded ? `**Role Changed (ADDED)**\n${roleadded}` : ""}`
        
        const embed = new Discord.MessageEmbed()
  .setColor(`YELLOW`)
  .setAuthor(`${newMember.user.tag} - User Updated`, newMember.displayAvatarURL())
  .setDescription(`${text}`)
  .setFooter(`${client.user.username} | SERVER MANAGER`)
            
  logChannel.send({ embeds: [embed] })
      }
})
client.on("roleCreate", async function (role) {

  const embed = new Discord.MessageEmbed()
  .setColor(`${role.hexColor}`)
  .setAuthor(`Role Created`, guild.iconURL())
  .addField(`Role Created:`, `${role} | \`${role.id}\` / *\`${role.id}\`*`)
  .addField(`Role Hex-Code:`, `*\`${role.hexColor}\`*`)
  .addField(`Role Position:`, `\`${role.position}\``)
  .setFooter(`${client.user.username} | SERVER MANAGER`)
            
  logChannel.send({ embeds: [embed] })
})
client.on("roleDelete", async function (role) {

  const embed = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setAuthor(`Role Deleted`, guild.iconURL())
  .addField(`Role Deleted:`, `\`${role.id}\` / *\`${role.id}\`*`)
  .addField(`Role Hex-Code:`, `*\`${role.hexColor}\`*`)
  .addField(`Role Position:`, `\`${role.position}\``)
  .setFooter(`${client.user.username} | SERVER MANAGER`)
            
  logChannel.send({ embeds: [embed] })
})
client.on("roleUpdate", async function (oldRole, newRole) {
  let action;

  if (oldRole.name !== newRole.name) {
    action = "Name"
  } else if (oldRole.color !== newRole.color) {
    action = "Color"
  } else {
    return; // To prevent Logs Spams
  }

  const embed = new Discord.MessageEmbed()
  .setColor(`${newRole.hexColor}`)
  .setAuthor(`Role Updated - ${action}`, guild.iconURL())
  .addField(`Old Role-Name:`, `${oldRole} | \`${oldRole.id}\` / *\`${oldRole.id}\`*`)
  .addField(`New Role-Name:`, `${newRole} | \`${newRole.id}\` / *\`${newRole.id}\`*`)
  .addField(`Old Role Hex-Code:`, `*\`${oldRole.hexColor}\`*`)
  .addField(`New Role Hex-Code:`, `*\`${newRole.hexColor}\`*`)
  .addField(`Old Role-Position:`, `\`${oldRole.position}\``)
  .addField(`New Role-Position:`, `\`${newRole.position}\``)
  .setFooter(`${client.user.username} | SERVER MANAGER`)
            
  logChannel.send({ embeds: [embed] })
})
client.on("guildBanAdd", async function (ban) {

  const embed = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setAuthor(`${ban.user.tag} - Banned`, ban.user.displayAvatarURL())
  .addField(`User Banned:`, `${ban.user} | \`${ban.user.id}\` / *\`${ban.user.username}\`*`)
  .addField(`Ban Reason:`, `${ban.reason ? ban.reason : "None Reason"}`)
  .setFooter(`${client.user.username} | SERVER MANAGER`)
            
  logChannel.send({ embeds: [embed] })
})
client.on("guildBanRemove", async function (ban) {

  const embed = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setAuthor(`${ban.user.tag} - Un-Banned`, ban.user.displayAvatarURL())
  .addField(`User Un-Banned:`, `${ban.user} | \`${ban.user.id}\` / *\`${ban.user.username}\`*`)
  .addField(`Ban Reason:`, `${ban.reason ? ban.reason : "None Reason"}`)
  .setFooter(`${client.user.username} | SERVER MANAGER`)
            
  logChannel.send({ embeds: [embed] })
})