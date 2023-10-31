const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'timeout',
  description: "Timeout a user with a reason",
  userpermissions: ["MANAGE_MESSAGES"],
  toggleOff: false,
  run: async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_MEMBERS")) {
      let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("**Only members with Manage Members permission can use this command**");
      return message.channel.send({ embeds: [embed] });
    }

    const channelId = '1112791283111559178'; // ID of the channel to send the timeout log
    const channel = message.guild.channels.cache.get(channelId);

    if (!channel) {
      let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("**Invalid channel ID. Please provide a valid channel ID for the timeout log**");
      return message.channel.send({ embeds: [embed] });
    }

    const target = message.mentions.members.first();
    if (!target) {
      let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("**Please mention a user you want to timeout**");
      return message.channel.send({ embeds: [embed] });
    }

    if (target.id === message.member.id) {
      let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("**You cannot timeout yourself**");
      return message.channel.send({ embeds: [embed] });
    }

    if (target.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) {
      let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("**You cannot timeout this user because they have a higher or equal role position**");
      return message.channel.send({ embeds: [embed] });
    }

    const reason = args.slice(1).join(" ");
    if (!reason) {
      let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("**You must specify a reason for the timeout**");
      return message.channel.send({ embeds: [embed] });
    }

    let timeoutLog = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("**Timeout Log**")
      .setDescription(`User was timed out due to the following reason:\n\n${reason}`)
      .setFooter("Timeout by: " + message.author.tag)
      .setTimestamp();

    try {
      await target.send({ embeds: [timeoutLog] });
    } catch (error) {
      console.log("Failed to send timeout log to the user");
    }

    channel.send({ embeds: [timeoutLog] });
  }
}
