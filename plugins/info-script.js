import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://actsho.blogspot.com/2022/09/actshop.html*

List Jualan
Tiktok View
Sewa Bot
Render Mc
Logo
Baner
Jasa Edit
*INFO SELANJUTNYA*
https://actsho.blogspot.com/2022/09/actshop.html

JIKA MAU BELI CHAT OWNER
wa.me/6289675850011`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Maksih Yg share','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/fafago1kk",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'CastwlMawon MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(shopact)$/i

export default handler
