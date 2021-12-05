const BulletBotDiscord = require('./Functions/Helpers');

BulletBotDiscord.GetUsers().then(resp => {
    resp.forEach(element => {
        console.log(`ID: ${element.author.id}\nUsernae: ${element.author.username}\nMessage: ${element.content}\n\n`);
    });
});

BulletBotDiscord.SendPrivateMessage("hello world!");