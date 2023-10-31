const { MessageEmbed } = require("discord.js"); 
module.exports = {
   name: "dm",
   description: "Dm cmd for Royal",
    type: "CHAT_INPUT",
      options:[
       {
     name:"user",
     description:"mention the user",
  type: "USER", 
     required:true,
},
{
     name:"message",
     description:"The message to be announced",
     type:3,
     required:true, 
},
      /*  {
     name:"attach",
     description:"mention the user",
  type: "IMAGE", 
     required:false,
},*/
        
],
   run: async (client, interaction, args) => {
     const user = interaction.options.getUser("user")
     const message = interaction.options.getString("message")
     
    if (interaction.member.roles.cache.some(role => role.name === 'BALA')) {
                                            
                                            
                                          
    let embed = new MessageEmbed()
      .setTitle(`__BALA DEV__`)
      .setDescription(`**${interaction.options.getString("message")}**`)
      //.setThumbnail(client.user.displayAvatarURL())
      .setColor("#2f3136")
      //.setImage(`${interaction.options.getImage("gif")}`)
        .setFooter("ROYAL™")    
      //.setThumbnail(interaction.guild.iconURL({ dynamic: true})) 
      .setTimestamp()
      //anchannel.send(`${interaction.options.getMentionable("roles")}`)
    user.send({ embeds: [embed], content: `${interaction.options.getUser("user")}`});
    interaction.followUp("dm Successfully!")
  } else {
    const embed = new MessageEmbed()
    .setDescription("You Are Not Royal Staff")
    interaction.followUp({embeds:[embed]})
  }

   }
};

