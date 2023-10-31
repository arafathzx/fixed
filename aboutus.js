const {MessageEmbed} = require("discord.js")
module.exports = {
    name: 'how',
    aliases: ['suii', 'sub'],
    description: 'FREE BOT DEVELOPING',
    category: 'staticembed',
run: async (client, message, args) => {
  const about = new MessageEmbed()
  .setTitle("<:pink_arrow:1110566891589746738> FREE BOT DEVOLOPING")
  .setDescription(`<:pink_arrow:1110566891589746738>**MUSIC BOT - 5 INV **
<:pink_arrow:1110566891589746738>**ALL IN ONE - 10 INV**
<:pink_arrow:1110566891589746738>**MODERATION BOT - 4 INV**
<:pink_arrow:1110566891589746738>**SECURITY BOT - 4 INV**
<:pink_arrow:1110566891589746738>**CHAT  BOT - 3 INV**
**<:dot_pink:1119169077726953502>IF YOU WANT ANY OTHER BOT CREATE TICKET <#1116742594530123836>
AND AFTER COMPLETING CREATE TICKET !**`)
  .setThumbnail(message.guild.iconURL({ dynamic: true})) 
.setImage("https://media.discordapp.net/attachments/976018072144085056/1117349575842353162/standard.gif")
  .setColor('#00000')
  .setFooter("DEXCORD DEVELOPMENT", message.guild.iconURL({ dynamic: true}))
  .setTimestamp()
  message.channel.send({embeds:[about], content: "__**DEXCORD ON TOP!**__"})
  message.delete()

  }
}