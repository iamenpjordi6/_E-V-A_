let fs = require('fs')
global.owner = ['919539102851'] // Letakan nomor kamu disini
global.mods = ['919539102851'] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  hardianto: 'hardianto',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'neoxr',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'APIKEY',
  xteam: '65654c74a7169de8',
  zahir: 'zahirgans',
  zekais: 'If7IyniS',
  zeks: 'SUcKEWdDpYjtj2q045KNQCoDyCe',
  vhtear: 'AW62938KK46292gJ73639h',
  lolhum: 'ab7df38f1d53e257d50a575b',
  fxc7: 'pnj8NAJb',
  aqul: 'xinzbot'

}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'APIKEY',
  'https://api.xteam.xyz': 'apikey lu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apikey lu',
  'https://api.lolhuman.xyz': 'apikey lu',
  'https://api.vhtear.com': 'apikey lu',
  'https://fxc7-api.herokuapp.com': 'apikey lu',
  'https://api.justaqul.xyz': 'apikey lu'
}

// Sticker WM
global.packname = 'Eva'
global.author = 'Anirudh'

global.wait = '「 ⏱️ 」Please wait...'
global.eror = '*Server Error*'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.watermark = '© EVA'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

// masukin apikey lu yang ada tulisan 'apikey lu' nya
