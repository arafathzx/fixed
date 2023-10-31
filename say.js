module.exports = {
  name: 'say',
  description: 'Repeats what you say',
  userpermissions: ['MANAGE_MESSAGES'],
  run: async (client, message, args) => {
    const ownerIds = ['1002231307801219132', '1139891515527802963', '1015957213669511178',                   ];

        if (!ownerIds.includes(message.author.id)) {

            return message.channel.send(`${message.author} Sorry, this command can only be used by the admins.`);

        }
      
      
      const sayM = args.join(' ');
    if(message.author.bot)return;
    message.channel.send({ content: sayM})
    message.delete().catch(err => console.log(err))
  }
}