# BulletBotDiscord

BulletBotDiscord is a Self API for development of selfbots.

<h2>📥 Install dependencies</h2>
<pre>
npm install
</pre>

<h2>⚙️ Initial Settings</h2>

```js
{
 "token": "Your account token here"
}
```

<h2>🚀 API Functions</h2>

```js
const BulletBotDiscord = require('./Functions/Methods');

// Get last 100 messages send on channel
BulletBotDiscord.GetMessages("CHANNEL ID").then(resp => {
    resp.forEach(element => {
        console.log(`ID: ${element.author.id}\nUsername: ${element.author.username}\nMessage: ${element.content}\n\n`);
    });
});

// Send message to Channel or DM
BulletBotDiscord.SendMessage("CHANNEL ID OR DM ID", "hello world!");

// Delete message of channel or DM
BulletBotDiscord.DeleteMessage("CHANNEL ID OR DM ID", "MESSAGE ID").then(resp => {

});

// Get user ID Direct message to send private message
BulletBotDiscord.GetDmId("USER ID").then(resp => {
    console.log(resp);
});

```

<h2>📖 Attention!</h2>
I am not responsible for the improper use of this project. Remember that mass messages is against Discord's terms of use, using for such actions is putting your account at risk.
