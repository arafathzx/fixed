


const client = require("../index");
  
  client.on('ready', () => {
    console.log(`${client.user.tag} is up and ready to go!`);
    
      
      let statuses = [`${client.users.cache.size} Members `];

    setInterval(function() {

  	let status = statuses[Math.floor(Math.random()*statuses.length)];		

        client.user.setPresence({

            activities: [

                {

                    name: status,

                    type: "WATCHING"

                }

            ],

           

        });
        

    }, 10000);
      
  
 
  
  });