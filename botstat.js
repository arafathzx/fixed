let { MessageEmbed} = require("discord.js")
const Discord = require('discord.js')
const moment = require("moment");
require("moment-duration-format");

module.exports = {
	name: 'stat',
	description: "uptimer of the bot",
  toggleOff: false,
	run: async (client, message, args) => {
    const totalGuilds = client.guilds.cache.size
    const totalMembers = client.users.cache.size
    const duration = moment.duration(client.uptime).format("\`D\` [days], \`H\` [hrs], \`m\` [mins], \`s\` [secs]");
    const upvalue = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);
    const embed = new MessageEmbed()
    .setTitle("BOT INFORMATION")
    .setDescription(`**❯Client:** ${client.user.username} (${client.user.id})\n**❯Uptime:** ${duration}\n**❯Up Since:** <t:${upvalue}>\n**❯Commands:** ${client.commands.size}\n**❯Servers:** ${totalGuilds}\n**❯Users:** ${totalMembers}\n**❯Created:** <t:${Math.round(client.user.createdTimestamp / 1000)}>\n**❯API Speed:** \`${client.ws.ping}\`\n**❯Bot Version:** \`${require(`${process.cwd()}/package.json`).version}\`\n**❯Node.js Version:** \`${process.version}\`\n**❯Discord.js Version:** \`${Discord.version}\`\n**❯Bot Memory:** \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\` MB`)
    .setColor("RED")
    .setFooter("ROYAL MANAGER| BOT INFO")
    .setTimestamp()
    .setThumbnail(`${client.user.displayAvatarURL()}`)
    message.channel.send({embeds: [embed]})
  }

}
