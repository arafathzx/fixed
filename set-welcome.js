const { Message, Client, MessageEmbed } = require('discord.js')
const Schema = require('../../../models/welcomeChannel')

module.exports = {
    name: 'setwelcome',
    aliases: ['setchannel', 'setch'],
    description: 'Sets the Welcome channel',
    category: '⚙️ Settings',
    usage: 'setwelcomechannel <#channel>',
    memberpermissions: 'ADMINISTRATOR',

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    run: async (client, message, args) => {
        const channel = message.mentions.channels.first()
        if (!channel) return message.reply('Please specify a channel!')

        Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
            if (data) {
                data.Channel = channel.id
                data.save()
            } else {
                new Schema({
                    Guild: message.guild.id,
                    Channel: channel.id
                }).save()
            }
            message.reply(`<#${channel.id}> Has been set as your Welcome Channel`)
        })
    }
}