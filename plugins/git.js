let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://raw.githubusercontent.com/DEVILSER/DEVILSER/main/Media/Ammu/reduced_IMG-20211219-WA0031_2.jpg")).buffer(), devil, 'ʜᴀᴄᴋᴛɪᴠɪsᴛ ʙᴏᴛ  ʙʏ ᴍʀ.ʜᴀᴄᴋᴛɪᴠɪsᴛ\n\╔╗╔╗╔══╗╔══╗\n\║╚╝║║╔╗║╚║║╝\n\║╔╗║║╠╣║╔║║╗\n\╚╝╚╝╚╝╚╝╚══╝ \n\n\ https://github.com/hacktivist01/Wizard-Ser \n\n\ © ī.am ꪶᴍʀ.ʜᴀᴄᴋᴛɪᴠɪsᴛ⁴⁰⁴⁩' , '❤️', '.❤️', '🙂', ',🙂')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
