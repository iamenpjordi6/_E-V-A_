let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let fetch = require('node-fetch')

let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw `uhm.. what are you looking for?\n\nexample:\n${usedPrefix + command} Earth`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '404 Not Found'
  conn.sendFile(m.chat, url, 'img', '', m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['img <search>']
handler.tags = ['internet']
handler.command = /^(?img?)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random(5) * arr.length)]
}
