const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// Declare Colors
var rolesColors = [
    "dRed",
    "dBlue",
    "dGreen",
    "dGray",
    "dOrange",
    "dPink",
    "dYellow",
    "dBrown",
    "dBlack",
    "dPurple",
    "dTurquoise"
];

function resetColor(message, member){

  var arrayLength = rolesColors.length;
  for (var i = 0; i < arrayLength; i++) {
      //Do something
      let roleArray = message.guild.roles.find("name", rolesColors[i]);
      member.removeRole(roleArray).catch(console.error);
    }
}
/* WORKING ONE
function resetColor(message, member){

    // has one of the roles
    let roleRed = message.guild.roles.find("name", rolesColors[0]);
    let roleBlue = message.guild.roles.find("name", rolesColors[1]);

    member.removeRole(roleRed).catch(console.error);
    member.removeRole(roleBlue).catch(console.error);
}
*/

client.on("ready", () => {
  console.log('\x1b[32m%s\x1b[0m',`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`+dColors | Serving ${client.guilds.size} servers`);

});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`+dColors | Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`+dColors | Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {
  // Ignore bots, DMs and group messages.
  if (message.author.bot || !message.guild) return;


    // Ignore any message that does not start with our prefix,
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();



  if (command === "dcolors") {
    let color = args[0];
    let member = message.member;

    // IF ARG ARE NOT THERE
    if(!color || color === "help") {

      message.channel.send({
    "embed": {
    "title": "Thanks for using dColors. You can use the following commands",
    "description": "\n __**Change your Discord color**__\n*Use color name instead of <color> (Check below for available colors)* \n`+dcolors <color>`\n__**Reset Color to the default**__\n`+dcolors reset`\n__**Other available commands**__\n`+dcolors ping`\n`+dcolors config (WIP)`\n",
    "color": 1472601,
    "timestamp": new Date(),
    "footer": {
      "text": "Version 0.1 - MIT License - 2018"
    },
    "thumbnail": {
      "url": "http://superdizor.com/img/dcolors.png"
    },
    "author": {
      "name": "dColors - Discord Colors Bot",
      "icon_url": "http://superdizor.com/img/dcolors.png"
    },
    "fields": [
      {
        "name": "Colors",
        "value": "```\nred\nblue\ngreen\ngray\norange\npink\nyellow\nbrown\nblack\npurple\nturquoise```"
      },
      {
        "name": "You like this bot ?",
        "value": "[Invite **dColors** to your server](https://discordapp.com/oauth2/authorize?&client_id=456585537621327882&scope=bot&permissions=0)"
      },
      {
        "name": "GitHub",
        "value": "[Open Source on GitHub](https://github.com/SuperDizor/dColors) \n *This is one of my first JavaScript Project.* \n*Give me constructive feedback* ",
        "inline": true
      },
      {
        "name": "Social",
        "value": "[Twitter](https://twitter.com/SuperDizor)\n",
        "inline": true
      }
    ]
  }
});




};


    // CONFIG | ADD ROLES TO SERVER
    if(color === "config") {
      message.reply(`config is currently WIP`);
    }

    // RESET COLOR TO DEFAULT
    if(color === "reset") {
      // Check if they have one of many roles
      if(message.member.roles.some(r=>rolesColors.includes(r.name)) ) {
        resetColor(message, member);
        message.reply(`color changed to default.`);
      } else {
        // has none of the roles
        message.reply(`you have currently the default color.`);
      }
    }

    // RED
    if(color === "red") {
      let role = message.guild.roles.find("name", rolesColors[0]);
      resetColor(message, member);
      // Add the role & tell the user his color changed.
      member.addRole(role).catch(console.error);
      message.reply(`color changed for ${color}.`);
    }

    // BLUE
    if(color === "blue") {
      let role = message.guild.roles.find("name", rolesColors[1]);
      resetColor(message, member);
      // Add the role & tell the user his color changed.
      member.addRole(role).catch(console.error);
      message.reply(`color changed for ${color}.`);
    }

    // GREEN
    if(color === "green") {
      let role = message.guild.roles.find("name", rolesColors[2]);
      resetColor(message, member);
      // Add the role & tell the user his color changed.
      member.addRole(role).catch(console.error);
      message.reply(`color changed for ${color}.`);
    }

    // GRAY
    if(color === "gray") {
      let role = message.guild.roles.find("name", rolesColors[3]);
      resetColor(message, member);
      // Add the role & tell the user his color changed.
      member.addRole(role).catch(console.error);
      message.reply(`color changed for ${color}.`);
    }

    // ORANGE
    if(color === "orange") {
      let role = message.guild.roles.find("name", rolesColors[4]);
      resetColor(message, member);
      // Add the role & tell the user his color changed.
      member.addRole(role).catch(console.error);
      message.reply(`color changed for ${color}.`);
    }

    // PINK
    if(color === "pink") {
      let role = message.guild.roles.find("name", rolesColors[5]);
      resetColor(message, member);
      // Add the role & tell the user his color changed.
      member.addRole(role).catch(console.error);
      message.reply(`color changed for ${color}.`);
    }

    // YELLOW
    if(color === "yellow") {
      let role = message.guild.roles.find("name", rolesColors[6]);
      resetColor(message, member);
      // Add the role & tell the user his color changed.
      member.addRole(role).catch(console.error);
      message.reply(`color changed for ${color}.`);
    }

    // BROWN
    if(color === "brown") {
      let role = message.guild.roles.find("name", rolesColors[7]);
      resetColor(message, member);
      // Add the role & tell the user his color changed.
      member.addRole(role).catch(console.error);
      message.reply(`color changed for ${color}.`);
    }

    // BLACK
    if(color === "black") {
      let role = message.guild.roles.find("name", rolesColors[8]);
      resetColor(message, member);
      // Add the role & tell the user his color changed.
      member.addRole(role).catch(console.error);
      message.reply(`color changed for ${color}.`);
    }

    // PURPLE
    if(color === "purple") {
      let role = message.guild.roles.find("name", rolesColors[9]);
      resetColor(message, member);
      // Add the role & tell the user his color changed.
      member.addRole(role).catch(console.error);
      message.reply(`color changed for ${color}.`);
    }

    // TURQUOISE
    if(color === "turquoise") {
      let role = message.guild.roles.find("name", rolesColors[10]);
      resetColor(message, member);
      // Add the role & tell the user his color changed.
      member.addRole(role).catch(console.error);
      message.reply(`color changed for ${color}.`);
    }

    // PING
    if(color === "ping") {
      const m = await message.channel.send("Ping?");
      m.edit(`Ping isn't a color but Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
  }


});

client.login(config.token);
