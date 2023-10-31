const { Message, Client } = require("discord.js");

module.exports = {
    name: "join",
    aliases: ['j'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
    

    if (message.member.voice.channel) {

      const connection = await message.member.voice.channel.join();

      console.log(`Bot joined voice channel: ${connection.channel.name}`);

    } else {

      message.reply('You need to be in a voice channel for me to join!');

    

  }
    },
};
