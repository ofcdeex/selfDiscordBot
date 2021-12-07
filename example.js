const BulletBotDiscord = require('./Functions/Methods');

//Get last 100 messages send on channel
BulletBotDiscord.GetMessages("CHANNEL ID").then(resp => {
    resp.forEach(element => {
        console.log(`ID: ${element.author.id}\nUsername: ${element.author.username}\nMessage: ${element.content}\n\n`);
    });
});

//Send message to Channel or DM
BulletBotDiscord.SendMessage("CHANNEL ID", "hello world!");

//Delete message of channel or DM
BulletBotDiscord.DeleteMessage("CHANNEL ID", "MESSAGE ID").then(resp =>{

});