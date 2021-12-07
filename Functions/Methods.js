const config = require('../Config.json');
const axios = require('axios');

function SendMessage(channelid, message) {
    return axios({
        url: `https://discord.com/api/v9/channels/${channelid}/messages`,
        method: 'POST',
        headers: {
            'origin': 'https://discord.com',
            'authorization': config.token,
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9003 Chrome/91.0.4472.164 Electron/13.4.0 Safari/537.36'
        },
        data: {
            content: message,
            nonce: '',
            tts: false
        }
    }).then(response => {
        console.log("Message has been sent");
    }).catch(err => {
        return err;
    });
}

function DeleteMessage(channelid, messageid){
    return axios({
        url: `https://discord.com/api/v9/channels/${channelid}/messages/${messageid}`,
        method: 'DELETE',
        headers: {
            'origin': 'https://discord.com',
            'authorization': config.token,
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9003 Chrome/91.0.4472.164 Electron/13.4.0 Safari/537.36'
        }
    }).then(response => {
        console.log("Message has been deleted");
    }).catch(err => {
        return err;
    });
}

function GetMessages(channelid) {
    return axios.get(`https://discord.com/api/v9/channels/${channelid}/messages?limit=100`, {
        headers: {
            'authorization': config.token,
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9003 Chrome/91.0.4472.164 Electron/13.4.0 Safari/537.36"
        }
    }).then(response => {
        return response.data;
    }).catch((error) => {
        return error;
    });
}

module.exports = {
    GetMessages,
    SendMessage,
    DeleteMessage
}