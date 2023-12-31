const { Client, Message, MessageEmbed } = require('discord.js');
const block = "⬛";
const heart = "❤";


module.exports = {
    name: 'ship',
    aliases: ['love'],
    description: 'Check your relation with someone',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const user = message.mentions.users.first();
        if (!user) return message.channel.send(`Please specify a user to ship with!`)
        if (user && user.id === message.author.id) {
            return message.reply("Bruh you want to ship yourself xd")
        }
        if (message.mentions.users.size < 2) {
            let loveEmbed = new MessageEmbed()
                .setColor('dd2e44')
                .setTitle('Shipping...')
                .setDescription(`Relationship between ${message.author} and ${user}!`)
                .setImage(`https://api.popcatdev.repl.co/ship?user1=${message.author.displayAvatarURL({ dynamic: false, format: "png" })}&user2=${user.displayAvatarURL({ dynamic: false, format: "png" })}`)
                .addField(`** Relationship Meter**`, ship())

            return message.channel.send({embeds: [loveEmbed]})
        } else if (message.mentions.users.size > 1) {
            let luv = new MessageEmbed()
                .setColor('dd2e44')
                .setTitle('Shipping...')
                .setDescription(`Relationship between ${message.mentions.users.first()} and ${message.mentions.users.last()}!`)
                .setImage(`https://api.popcatdev.repl.co/ship?user1=${message.mentions.users.first().displayAvatarURL({ dynamic: false, format: "png" })}&user2=${message.mentions.users.last().displayAvatarURL({ dynamic: false, format: "png" })}`)
                .addField(`** Relationship Meter**`, ship())
            message.channel.send({embeds: [luv]})
        }
    }
}

function ship() {
    const hearts = Math.floor(Math.random() * 110) + 0;
    const hearte = (hearts / 10)

    const str = `${heart.repeat(hearte)}${block.repeat(11 - hearte)} ${hearts}%`;
    return str;
}
