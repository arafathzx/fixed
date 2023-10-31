const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

// Define an object to store the role IDs
const roleIDs = {
  code_ping: '1116742503421456484',
  ann_ping: '1116742505648631989',
  chat_ping: '1116742507519295618',
  video_ping: '1116742508534312960',
  g_ping: '1116742508534312960'
};

module.exports = {
  name: 'role',
  aliases: ['role', 'dex'],
  description: 'About reaction role',
  category: 'staticembed',
  run: async (client, message, args) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId('code_ping')
        .setLabel('🥀')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('ann_ping')
        .setLabel('📢')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('chat_ping')
        .setLabel('💖')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('g_ping')
        .setLabel('🎁')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('video_ping')
        .setLabel('🌌')
        .setStyle('SECONDARY')
    );

    const roleEmbed = new MessageEmbed()
      .setAuthor("Dexcord Reaction Roles!")
      .setDescription(">>> **React to get roles!**\n\n 🥀 Codes -> <@&1116742503421456484>\n📢 Announcement Ping -> <@&1116742505648631989>\n 💖 Chat Ping -> <@&1116742507519295618>\n 🎁 Giveway Ping -> <@&1116742508534312960>\n 🌌 Video Ping -> <@&1116742502385471498>")
      .setFooter("___DEXCORD ON TOP!___")
      .setTimestamp();

    const sentEmbed = await message.channel.send({ embeds: [roleEmbed], components: [row] });

    const filter = i => Object.keys(roleIDs).includes(i.customId) && i.message.guild.roles.cache.get(roleIDs[i.customId]) !== null;
    const collector = sentEmbed.createMessageComponentCollector({ filter, time: 0 });

    collector.on('collect', async i => {
      const member = message.guild.members.cache.get(i.user.id);
      const roleID = roleIDs[i.customId];

      if (!roleID) return;

      const role = message.guild.roles.cache.get(roleID);

      if (!role) {
        console.error(`Role with ID ${roleID} does not exist.`);
        return;
      }

      if (member.roles.cache.has(roleID)) {
        try {
          await member.roles.remove(role);
          i.reply({ content: `You have been removed from the ${role.name} role.`, ephemeral: true });
        } catch (err) {
          console.error(err);
          i.reply({ content: 'There was an error removing the role.', ephemeral: true });
        }
      } else {
        try {
          await member.roles.add(role);
          i.reply({ content: `You have been given the ${role.name} role!`, ephemeral: true });
        } catch (err) {
          console.error(err);
          i.reply({ content: 'There was an error giving you the role.', ephemeral: true });
        }
      }
    });

    collector.on('end', collected => {
      if (collected.size === 0) {
        sentEmbed.edit({ components: [] });
      }
    });
  }
};
