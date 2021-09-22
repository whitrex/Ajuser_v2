const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.ibb.co/cK5fFMN/logo.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.png, caption: `*Ajuser_v2*
 

        *Github link        _https://github.com/whitrex/Ajuser_v2*
 

       *my whatsapp number     _wa.me/94781307901*
 
 
       *my whatsapp group     _https://chat.whatsapp.com/FpJEPYVPtHv463uy66c5Bi*
  
  
       *my youtube channel link     _https://youtu.be/Mpf6UtJYrL4*
`}) 

})); 
