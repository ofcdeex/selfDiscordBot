# BulletBotDiscord

BulletBotDiscord is a Self API for development of selfbots.

<h2>📥 Install dependencies</h2>
<pre>
npm install
</pre>

<h2>⚙️ Initial Settings</h2>

```js
{
 "token": "Your account token here",
 "channelid": "Your channel ID here"
}
```

<h2>🚀 API Functions</h2>

```js
const BulletBotDiscord = require('./Functions/Helpers');


// Get a last 100 messages send on channel
BulletBotDiscord.GetUsers().then(resp => {
    resp.forEach(element => {
        console.log(`ID: ${element.author.id}\nUsername: ${element.author.username}\nMessage: ${element.content}\n\n`);
    });
});

// Send message to channel or on DM
BulletBotDiscord.SendPrivateMessage("hello world!");
```

<h2>📖 Attention!</h2>
I am not responsible for the improper use of this project. Remember that mass messages is against Discord's terms of use, using for such actions is putting your account at risk.
