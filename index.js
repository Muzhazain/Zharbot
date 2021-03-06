//CASE AUTHOR
//YOGI
//IFIN
//Owner

//wa connection
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const request = require('request')
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { infown } = require('./lib/infown')
const { snk } = require('./lib/snk')
const { developer } = require('./lib/developer')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const { axis } = require('./menu/axis')
const { amalan1 } = require('./ramadhan/amalan1')
const { amalan2 } = require('./ramadhan/amalan2')
const { amalan3 } = require('./ramadhan/amalan3')
const { amalan4 } = require('./ramadhan/amalan4')
const { amalan5 } = require('./ramadhan/amalan5')
const { amalan6 } = require('./ramadhan/amalan6')
const { amalan7 } = require('./ramadhan/amalan7')
const { amalan8 } = require('./ramadhan/amalan8')
const { amalan9 } = require('./ramadhan/amalan9')
const { amalan10 } = require('./ramadhan/amalan10')
const { amalan11 } = require('./ramadhan/amalan11')
const { amalan12 } = require('./ramadhan/amalan12')
const { amalan13 } = require('./ramadhan/amalan13')
const { amalantambahan } = require('./ramadhan/amalantambahan')
const { tri } = require('./menu/tri')
const { xl } = require('./menu/xl')
const { formulirsewa } = require('./menu/formulirsewa')
const { botwa } = require('./menu/botwa')
const { sewabot } = require('./menu/sewabot')
const { rules } = require('./menu/rules')
const { indosat } = require('./menu/indosat')
const { smartfren } = require('./menu/smartfren')
const { telkomsel } = require('./menu/telkomsel')
const { tokenlistrik } = require('./menu/tokenlistrik')
const { dmff } = require('./menu/dmff')
const { ldgrup } = require('./menu/ldgrup')
const { dmml } = require('./menu/dmml')
const { ucpubg } = require('./menu/ucpubg')
const { carabeli } = require('./menu/carabeli')
const { belidm } = require('./menu/belidm')
const { belipulsa } = require('./menu/belipulsa')
const { bayar } = require('./menu/bayar')
const { syarat } = require('./menu/syarat')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const imgbb = require('imgbb-uploader')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./muzhain')

//apikey
const LeysApi = 'masukin disini ngab apikeynya'

//kontak
const vcard1 = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN:IFIN\n' //ganti nama lu! 
              + 'ORG: SR.BOT;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=6285713902205:+62 85713902205\n'  //ganti nomor lu! 
              + 'END:VCARD'
             
//settings            
prefix = '#'
blocked = []   
limitawal = '99999'
memberlimit = 1
cr = '*SR.BOT*'

fake = 'SR.BOT'
numbernye = '0'
NamaOwner = 'SR.BOT'
NamaBot = 'SR.BOT'

//owner number
const ownerNumber = ["6285713902205@s.whatsapp.net","6285713902205@s.whatsapp.net"]   //ganti nomor lu! 
       
//file json
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const antifirtex = JSON.parse(fs.readFileSync('./lib/antifirtex.json'))
//function
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }


        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
		
//function
const muzhamz = new WAConnection()
muzhamz.logger.level = 'warn'
console.log(banner.string)
   muzhamz.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('(+)','white'), color('ZAIN','red'), color('(+)','white'), color(' SQAN CODENYA','aqua'), color('MUZHA','yellow'))
})

	muzhamz.on('credentials-updated', () => {
		fs.writeFileSync('./moezha.json', JSON.stringify(muzhamz.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'info!')
	})
	fs.existsSync('./moezha.json') && muzhamz.loadAuthInfo('./moezha.json')
	muzhamz.on('connecting', () => {
		start('2', color('[ ! ]Scan Codenya Ngab','aqua'))
	})
	muzhamz.on('open', () => {
		success('2', color('[ ! ]Tersambung','red'))
	})
	muzhamz.connect({timeoutMs: 30*1000})
    
          muzhamz.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await muzhamz.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await muzhamz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			teks = `*Hallo* @${num.split('@')[0]}\n*
????????????????????????????????????????????????
?????? *_????????????_* ???
???${mdata.subject}\n*
????????????????????????????????????????????????
????????? *???????????* :
????????? *???????????* :
????????? *???????????* :
????????? *???????????????* :
????????? *??????????? ????????????* :
????????????????????????????????????????????????
*_HAPPY RAMADHAN 1442H_*
Mau sewa BOT Chat owner 
kami IFIN http:/wa.me/6285713902205
 @${num.split('@')[0]} ????`
 
				let buff = await getBuffer(ppimg)
				muzhamz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await muzhamz.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `????????????????????????????????????????????????
????????? *ASEK ADA YANG OUT BISSMILLAH BACAYASIN*
????????????????????????????????????????????????
* @${num.split('@')[0]}\n????????? ??? *SELAMAT JALAN AKU DAPAT BERKAT NASI* ??? ?????????`
				let buff = await getBuffer(ppimg)
				muzhamz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}

	})
	muzhamz.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	muzhamz.on('message-new', async (mek) => {
		try {
		
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const testing = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = muzhamz.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = muzhamz.contacts[sender] != undefined ? muzhamz.contacts[sender].vname || muzhamz.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await muzhamz.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
		    const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
			const isBanned = ban.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				muzhamz.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				muzhamz.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? muzhamz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : muzhamz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    muzhamz.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			muzhamz.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    muzhamz.sendMessage(from, audio, mp3, {quoted:mek})
		    }
	        /*****************END SCURITY FEATURE ********/

			
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return muzhamz.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            muzhamz.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        muzhamz.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    muzhamz.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	
        
      
            //function balance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
          
// ANTI LINK GRUP
               	       if (messagesLink.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        muzhamz.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(",izinkak")) return reply("LIHAT ATURAN GRUP KAGA ")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick`)
		        setTimeout( () => {
			        muzhamz.groupRemove(from, [kic]).catch((e)=>{reply(`*SRBOT~ HARUS JADI ADMIN???????*`)})
		        }, 2000)
		        setTimeout( () => {
			        muzhamz.updatePresence(from, Presence.composing)
			        reply("Bismillah")
		        }, 1000)
		        setTimeout( () => {
			        muzhamz.updatePresence(from, Presence.composing)
			        reply("Nice Shot")
			        }, 0)
		  }
		  
           if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`hmmm...`)
						setTimeout( () => {
 	                           muzhamz.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								muzhamz.updatePresence(from, Presence.composing)
								reply("byee")
							}, 4000)
								setTimeout( () => {
								muzhamz.updatePresence(from, Presence.composing)
								reply("awokaowkaowk")
							}, 3000)
								setTimeout( () => {
								muzhamz.updatePresence(from, Presence.composing)
								reply("sehat sehat semua ya")
							}, 2000)
								setTimeout( () => {
								muzhamz.updatePresence(from, Presence.composing)
								reply("gw keluar ye")
							}, 1000)
								setTimeout( () => {
								muzhamz.updatePresence(from, Presence.composing)
								reply(`sorry ngab member minimal ${memberlimit}`)
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 
        	if (bad.includes(messagesLink)) {
		if (!isGroup) return
		if (isGroupAdmins) return reply(`*${pushname}* ???????????????? ????????????? ????????????? ???????????? ?????????????? ??????????? ????? ???????????`)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*s?????????????????? ???????????? ??????????*`)
		}, 100)
		setTimeout( () => {
		muzhamz.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
		}, 10)
		setTimeout( () => {
		reply(`*_??? ??????????????????? ???????????????????????? ???_*\n??????????? *${pushname}* ??????????? ?????????????????????? ??????????????!, ??????????? ???????????????? ???????????????? ?????????? ?????????? *${groupMetadata.subject}*`)
		}, 0)
		}

           		  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//chat message
		if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && !isCmd) console.log(color([time], "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
            if (!isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
			
			switch(command) {
//============================CASE DASAR============================\\
                case 'limitcheck':
				// Fix Case By IFIN/Hans???
                 if (!isRegistered) return reply( ind.noregis())
				checkLimit(sender)
				break
                  case 'admin':
                  case 'owner':
                  case 'creator':
                  case 'developer':
                  muzhamz.sendMessage(from, {displayname: "IFIN", vcard: vcard1}, MessageType.contact, { quoted: mek})
                  muzhamz.sendMessage(from, 'Tuh nomer owner ku ???? jangan spam goblog atau gw block lu',MessageType.text, { quoted: mek} )
					break 
	case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                			if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                					try {
								ppimg = await muzhamz.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await muzhamz.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await muzhamz.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
					break
				       case 'test':
					   muzhamz.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					   break
		               case 'ping':
					   muzhamz.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					   break
					   case 'donasi':
		               case 'donate':
                       if (!isRegistered) return reply(ind.noregis())
				       if (isLimit(sender)) return reply(ind.limitend(pusname))
					   muzhamz.sendMessage(from, donasi(), text)
					   break
				case 'toimg':
				if (isLimit(sender)) return reply(limitend(pushname))
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await muzhamz.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
      //Amalan Ramadhan
                 break
                 case 'amalan1':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalan1(), text)
					break
					 case 'amalan2':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalan2(), text)
					break
					 case 'amalan3':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalan3(), text)
					break
					 case 'amalan4':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalan4(), text)
					break
					 case 'amalan5':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalan5(), text)
					break
					 case 'amalan6':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalan6(), text)
					break
					 case 'amalan7':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalan7(), text)
					break
					 case 'amalan8':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalan8(), text)
					break
					 case 'amalan9':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalan9(), text)
					break
					 case 'amalan10':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalan10(), text)
					break
					 case 'amalan11':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalan11(), text)
					break
					 case 'amalan12':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalan12(), text)
					break
					case 'amalan13':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalan13(), text)
					break
					case 'amalantambahan':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, amalantambahan(), text)
		//MenuJualAn
			
					break                                        
		case 'carabeli':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, carabeli(), text)
					break
		case 'bayar':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, bayar(), text)
					break
		case 'belidm':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, belidm(), text)
					break
		case 'belipulsa':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, belipulsa(), text)
					break
		case 'tokenlistrik':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, tokenlistrik(), text)
					break
		case 'syarat':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, syarat(), text)
					break
		case 'indosat':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, indosat(), text)
					break
		case 'telkomsel':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, telkomsel(), text)
					breakllll
		case 'xl':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, xl(), text)
					break
							case 'formulirsewa':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, formulirsewa(), text)
					break
		case 'botwa':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, botwa(), text)
					break					
		case 'sewabot':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, sewabot(), text)
					break
		case 'rules':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, rules(), text)
					break
		case 'axis':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, axis(), text)
					break
		case 'tri':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, tri(), text)
					break
		case 'smartfren':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, smartfren(), text)
					break
		case 'dmml':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, dmml(), text)
					break
		case 'dmff':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, dmff(), text)
					break
		case 'ldgrup':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, ldgrup(), text)
					break
		case 'ucpubg':
					// Fix Case By Zcx???
					muzhamz.sendMessage(from, ucpubg(), text)
					break
					   case 'infoowner':
		               case 'infodeveloper':
		               case 'infopengembang':
                       if (!isRegistered) return reply(ind.noregis())
				       if (isLimit(sender)) return reply(ind.limitend(pusname))
					   muzhamz.sendMessage(from, infown(), text)
					   break
					   case 'bahasa':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.sendMessage(from, bahasa(), text)
					await limitAdd(sender)
			
				break
		            case 'kodenegara':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.sendMessage(from, negara(), text)
					await limitAdd(sender)
					break
		            case 'del':
		            case 'd':
		            case 'delete':
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
					case 'info':
					me = muzhamz.user
					uptime = process.uptime()
					teks = `*INFO OWNER*\n*Owner bot* : IFIN&Rekan\n*No Owner* : wa.me/6285713902205 & wa.me/6285713902205\n*????????????????????????????????????????????????????????????\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Ketik* : ${prefix}lpr _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.`
					buffer = await getBuffer(me.imgUrl)
					muzhamz.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					case 'snk':
		            case 'peraturan':
			        if (isLimit(sender)) return reply(ind.limitend(pusname))
		            muzhamz.sendMessage(from, snk(), text)
		            break
// MENU COMMAND1
        case 'animesaran':
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    wew = fs.readFileSync(`./lib/animesaran.jpg`)
                    mzzain = `
  |ANIME NAMA + GENRE 
  
  DRAMA+KESEDIHAN
- P?????s???????? ???????????????????s
- S????????????s??? ?????? K??????? ????? Us???
- K?????? ????? K????????????????
- K?????????????? C????????????????
- C?????????????????????? D????????? K????? ????? S????????????
- S??????????????s?????? ????? P?????? ????? K??????????????
- N??????? ????? As?????????????? (R??????????????????????????)
- J???s??? B????????????s???
- I??????????s?????????
- C???????????????
- A????????? B?????????s
- Y???????????? O????? ????? S?????s?????????? L????????? C?????????????? M???????????????????????????????
- R??? : LIFE
- A????? H????????
- K????? ?????? Us???
- K????????s????????? H????????????????????s??????????
- H?????????????????? ????? M??????? E
- S??????????? R??????
- K???????????????? ????? K??????????????
- G???????????? C?????????? 

GENRE HAREM:

- T??? L????????? - ?????
- H??????s????????????? DxD 
- H????????????? O???????? W????????????????????? N?????????
- Is??????????? ?????? S???????????????????????? T????????? ???? 
- G?????????s????? T???s???? As??????????s???
- M???s?????????????? - K????? R????????????????
- L???????????s Vs B?????????????
- O????? ????? I??????????????? ????? K?????????????? K??????????? W????????? ????? N?????
- M???s?????? G?????????????? HxH 
- M?????s???????? M???s????????? 
- S???????????? Ts??????????? ????? B??????????? D???????????
- S????????????? Ts??????????? ????? W?????????? B???????????
- S????????????????? M?????????? ????? B?????????????????
- M???s???????????? ????? P???????????????? W??????????
- T????????????? S???????????
- H????????????????
- D?????????????? B????????? ?????? H, D???????????????? 
- K???????? ?????? Z????????????? D???s??? K????
- S?????????????? S??????????????
- S?????????????? M????????? ????? T???s????????????????? 
- D????????? A L????????
- K???????? N????????? ???? H????????????, I??????????????? ????? I?????
- O?????? - C??????? D??????????????? A?? S????????????? K????????????? N???????????????
- O????? ????? N????????????? S?????????????????s???? ?????, G?????????????? L????????? C?????????????? Z?????????????????? ?????? J????????? S??????????????? 
- O????? ????? K?????????????? ?????? Os??????????????????????? ????? S??????????????? S????????????
- K????????????????
- R????????????????????? ????? S???????????????????s?????
- N??s???????????
- S????????????? H??????????????? S???????????????????????????
- B????????? ?????? T?????????????????????? ????? S????????????????
- K???????? N???????? ?????? S????????? S???????????
- R?????????? B??????????????
- I???????????????? S??????????????s
- Y???s???????? ????? S????????

GENRE COMEDY

- G???????????????? 
- T?????????????? - ???????? ?????? I???s????????? K???????????????????
- W??????????????!!!
- B??????????????????????
- B?????????? S
- H????????????????? U??????????? - C???????
- N?????? G?????????
- A?????????????????????????s
- G?????????????? S?????????????? N?????????????? - ????????
- G?????????????? D????????O??????
- K?????????????s???? - ?????????? C???? ????? M???????? D????????????
- D?????s???? K????????????s????? ????? N?????????????????? 

GENRE ROMANCE

- I??????????????? S?????? I?????????? I??
- E?????????????????? S?????s?????
- O????? ????? I??????????????? K?????????????? K????????????? W????????? ????? N?????
- Y???????????? O????? ????? S?????s?????????? ?????? L????????? C?????????????? M???????????????????????????????
- B????????? ?????? T?????????????????????? ????? S????????????????
- K????????s????????? H????????????????????s??????????

GENRE ACTION

- F?????????/S???????? N????????? 
- UQ H?????????????! M??????????? N????????????? S?????s????? 2
- A??s?????????????? D??????
- R????????????????????s???? M????????????s??? K??????s?? ????? A??????s??????? R??????????????
- O??????????????????
- K?????????????? S?????s?????
- S??????????? A????? O???????????
- G???????????? C??????????
- S????????????????? M?????????? ????? B?????????????????
- I???????????????? S??????????????s
- S?????????? G?????????
- T??????????? K?????????????? ????? R??????????????
- B??????????? B?????????????
- I??????????s?????????
- O????? P?????????? M?????
- M????? Ps?????????? 100
- G?????????s????? T???s???? As??????????s???
- S?????????????? M????????? ????? T???s?????????????????
- B????????????? S?????????? D?????s

GENRE PHSYCOLOGICAL
- I??????????s?????????
- M??????????????? M?????????????
- M????????? N??????????
- K?????????????????????
- K-P?????????????????
- G????s???????? ????? R?????????????? & K???????????s???
- D??????????? N?????????
- D??????????? P??????????????
- D????????????????? W???????????????????????
- R??? : Z???????? K???????? H??????????????????? Is??????????? S??????????????s???
- D?????????????????????????
- BTOOOM!
- Ps?????????? P???ss
- K??s?????????????? : S????? ????? K????????????????s???
- T??????????? G??????????
- NHK ???? Y????????????s??? 

GENRE GAME & ISEKAI

- M?????????????????? - ????????????? ????? Is??????????? K???????? K???????? S??? D???s??? Y????
- N??? G????????? N??? L???????
- A??????????? W??????????
- K???????? S?????????????s???? Is??????????? S???????? S?????????????????????? ???
- 3 G??????s??? ????? L???????
- S??????????? A????? O???????????
- M??????????? O??? V?????????????s

GENRE MYSTERI

- S???????????????????? R???s??????
- H??????????????
- M??????????????????????? ???????????????? ???????????????????????
1. K?????????????????????????????????? 
2. N??????????????????????????????????? : K????????
3. B???????????????????????????????????
4. N??s?????????????????????????????
5. M??????????????????????? S??????????s S?????????????? S??????s?????
6. Ts??????????????????????????????????
7. K??????????????????????????????????????? (D????????s?? 12 ???????)
8. O???????????????????????????????????? S1
9. O???????????????????????????????????? S2
10. H??????????????????????????????????
- D?????????????????????????
- M????????? N??????????
- D??????????? N?????????
- B??????????? B?????????????
- A???????????????

SPORT :

- Y???????????????s???? ??????????????
- M???????????
- E?????s???????????? 21
- D???????????????? ????? ?????????
- S???????? ???????????
- H?????????????? ????? ???????????
- F????????
- P?????? ?????????? ???????? ???????????????????????
- B??????? s?????????
- A???????? ????? ?????s????
- C???????????????? ???s??????????????
- A???? ??????????
- C???????????????????
- C?????ss ???????????
- I????????????????? ????????????????

 ROMANCE SAD

- K????????????ss ??????????? ????????????????
- K?????????????ss
- T???????????????????
- L????????????? ?????????????????x
- S??????????????s??????
- W?????????? ?????????????
- T???????????? ????? ????????????????s???-????????
- 11????????s
- A????????? ???????????s
- P?????s???????? ???????????????????
- A???????????? ????? ?????????
- A?????????s???????? ????? ??????????
- B?????s????????
- S??????
- B????????? ?????? ????????????????????????? ?????? s????????????????
- B?????????????? ?????? ???????????? ??????????????s??????
- B???????????????
- B???????????????? s??????????????
- C ???????? ????????????? ????? s???????? ???????? ??????ss??????????????? ??????????????????
- C?????????????????????
- C????????????????????????
- C??????????????????????
- C???????????????
- D??????????? ???? ???????? ??????????????????? ??????????
- D?????s????? ??????????? ????? ????????????? ???????????
- D????????????? ?????????? ?????????????
- D??????????s ?????????
- D????????? ??? ??????????
- D??? ??????????? s??????????s
- T??????????? ???????????s
- ??????????????????????? ??????????????????????????
- ????????????? ????????
- ????????s??????s??? ????? ?????s??? ????? ????????s??????s???
- ??????????????????? ????? ?????????????????
- F?????????/s???????? 
- M???????
- G?????????????? s??????????????
- G????????????? ???????????
- G???????????? ?????????????
- G???s????????
- H????????????? ??????????? ?????? ???????????????????????? ???????????
- K??s??????????????
- K?????????????? ???????????????????
- M????????????????????
- M????????? ?????????
- N??????? ????? ???s??????????????
- O?????????????
- P?????????? ?????????
- R???????????? ????? ????????s?????
- S??????????????? ?????? ?????????? ????? ???s???
- K??????????????????? ????? ???????????
- K??????? ????? ???????????
- K???????????????? ?????? ??????????? s?????????
- O?????????????????
- O?????????????? ????? ?????????s????????????????
- Z???????? ????? ???s?????????????????
- As?????????????
- K???????? ?????? ???????????????? ??????s??? ??????
- K?????? ????? ???????????????????
- K??????? ????? ??????????????????
- R????????????
- Ts????????????? ????????????
- T??????????????? ?????????????????
- S????????????????? ???? ?????????????
- O????? ??????????????????????????
- M???????????????????????
- A???????????????? ????? s???????????????????
- S???????????????????
- A???????????????? ss
- Iss??????????? ??????????????
- A??? ?????????? ??????????
- N???????????? ????????s
- F????????????
- A????? ??????????
- Y???s???????? ????? s????????
MYSTERI:
- D??????????? ???????????
- G???s????????
- B????????? ???????????? ????? ????????? ?????????????
- B?????????????????
- D??????????????????
- S??????s??????????? ?????????
- B???????????????????????????????????
- D??????????? ?????????????????
- D????????????? ?????????? ?????????????
- Z??????s???????? ????? ???????????????s???
- E??: A ??????????? ???????????????????s
- H????????????s???? ????? ??????????? ??????????? ????
- P????????????????
- T????????? ???????? ???????????
- T???s????????????? ??????????????? x ???????????s?????
- M????????? ?????????
- T?????????????? ????????????
- E??????? ????????x?? 
- A???????????????
- Y??????????????? ???????? ?????? 7 ?????? ????? ????????????
- G??????????????? ??????????s????
- K????????s????????? ????? ???????????????????????
- H????????????????????
- B??????????? ???????????????
- K????????s????????? ????? ????????? ????????????????????
- D???????????????????? ????? s???????????
- K????????????? ????? ??????????? ?????? s???????????? ????  ?????????
- S?????????????? ????? ?? ???? ??????????
- G????????????????????? ????? ???????????????????
- S???????????????????s??? ????????????????? ???????????????
- K??????? ??????????? ???? ?????????????? ????????????????? ????? ??????? 
- M???????????????
- K??????????? ???????????????????????? s?????????????? ????? ?????????????s
- 18????
- ??????s????????? ??????????? ???????? ???????????????????????
- ???????????? ???? ???????ss

COMEDY SCHOOL :
- P?????s????? s?????????????
- G?????????????? s?????????????? ???????????????? ????????
- B?????????????????????
- S?????????????????????
- A????? ????????
- T?????????????? ????????
- D ?????????
- H??????????? ????????
- T????????????? ????? s???????? ????????
- A??s??????s??? ???????????s??????????
- S?????????? ??????s??????
- T???????????????????
- B????????? ?????? ??????s???
- S????????????????????? ??????s??? ?????
- G??????????? ??????????????s?? ???????????????????
- N??????????????????
- S????????? ??????????????
- D?????s???? ??????????????????s????? ????? ?????????????????

A?????????? ???????????s?? ?????????????????:
A????? ????????
Ts?????????????????????? ???????????????????
U??????????? s????????????? ???????????????s???
M???????????????? s????? ?????? ???ss??s??????????? s?????
T???????????? ????? s???????? ????????
D?????????? ????? ?????????????????? ?????? ???????????????????????? ????????
F????????????????? ?????????????
O???????? ?????????? ????? ???????????
Os????????? ?????????? ??????????????????
A????????????? S????????????????????????????? :
- S?????????? ??????s??????
- O??????????????????
- H???????????????????? ????????? s?????????
- M????????????????? ???????????????
- B??????????? ????????
- S??????
- N???????????s??? ????? ????????????????
- A??s????????s??? ??????????????????s???
- C????????? ????????ss
- N??? ??????????? ????? ?????????
- M????? ???s???????? 100
- M??????????????????-????????????? ????? ??s??????????? ??????????? ??????????? ????????? ??????s??? ?????

R????????????????? S??????????????
- S???????????????????
- S???????????????? A
- C?????????????? ???????????????????
- K????????s??????????? ??????????????????????s??????????
- L????????????? ?????????????????x
- G????????????? ???????????
- T???????????? ????? ????????????????s???-????????
- S???????????????? ???? ????? ?????
- B????????? ?????? ??????s???
- C??????????????????????
- A????? ????????s??? ?????? ????????????????????
- A??? ?????????? ??????????
- N???????????? ????????s
- R??? ??????????? ???????????
- D?????s??????s??? ????? ????????s????? ????? ????????s??????s???
- D??????????????????
- S?????????s?????????
- R????????????????? ?????s???? ????? ??????????????????
- C?????????:R????????????????
- C????????? ??????????????????
- ??????????? ????? ???s?????????????????

C?????????? GENIUS :
-??????s?????????????? ???????? ????? ??????????????????
-????????????? ???????????????????? ???????????
-????????????????
-????????????????????
-????????????????? ????????
-?????s??????????? ????????????????? ??????????????????
-??????????????s??? ?????????s???????????????? s????????????? s????????? ????? ???????????s???????s??? ???
-??????????????????? SS
HOROR:
- G?????s??? ?????? s?????????????
- B?????????????????????? ???????????????????
- P?????? s????????s ????? ??????????????
- C?????? s?????????
- H????????????s???? ????? ??????????? ??????????? ????

- I????????? ?????????????
- A???????????????
- K????????????????
- B??????????? ???
- B??????????? +
- K?????????????????????
- J????????????? s??????????????
- G?????s??? ??????????
- K??????????????????
- Y???????? s?????????????
- H????????????s???? ????? ??????????? ??????????? ????
- C????????s??? ?????????????
- S???????????? ???x????????????????????? ?????????
- E????????? ??????????
- S?????????
- G???????????
- G????? : T??????????? ????s?? ??????????????????
- T??????????? ????????????
- K??s???????????
- M???????????????????
- A???????
- G?????????????????????????s????
- D????????????????? ??????????????????????????
- H???????s??????
C??????? ???? ????? s?????????
R???????????????????????s?? A??????????

A?????????????
1. O????? P???????????
2. N??????????????
3. D???????????? B???????
4. S???????????????? ????? K????????????
5. O????? P?????????? M?????
6. H????????????? x H?????????????
7. B?????????????
8. C?????????: B????????????????
9. F????????????????????? A???????????????s??? : B??????????????????????????
10. F????????? T???????
11. G????????????????
12. S??????????? A????? O???????????
13. 91 D?????s
14. A??????????? W??????????
15. A???? G????????
16. A???????????? ????? K??????!
17. A???????????????.Z????????
18. A??s??????s??? K????????s???????s???
19. A??? ????? Ex??????????s???
20. A??s??????? S??????????
21. B?????????????????!
22. B?????????????????????
23. B?????s????????
24. B??????????? B?????????????
25. B??????????? L??????
26. B???????????+
27. B????????? ????? H???????? A????????????????????
28. B??????????????
29. B???????????????!
30. C??????????????????
31. C????????? G??????ss
32. C????????????? B???????????
33. D.G???????-????????
34. D????????????????????????? S??????????s
35. D????????????? ?????????? B??????????? S??????????s
36. D????????????????? W???????????????????????
37. F????????? S??????????s
38. F??????????? ????? R????????????
39. F??????? M??????????? P??????????!
40. G???????s??????
41. G???????????
42. G???-R?????: Z????????
43. G?????? E???????????
44. G???????????? C??????????
45. H???????s??????
46. H???????s???? ????? E????????
47. H??????s????????????? ????? ???????? D?????????
48. I?????Y???s?????
49. K (P????????????????? K)
50. K?????????????????????????????
51. K????????????????? H????????????? R????????????!
52. K?????? ????? K??????
53. K??s??????????????: S????? ????? K????????????????s???
54. K???????????????s???????????? ????? K?????????????????
55. K????????s???????s???????? (B??????????? B?????????????)
56. M??????? S??????????s
57. M????????? N??????????
58. M????? Ps?????????? 100
59. N???????????s??? ????? T?????????????
60. N???????? G????????s??s E??????????????????????
61. N??????????????????
62. N????????????????????? ????? M????????
63. O??????????????????
64. O?????????? ????? S?????????????
65. Ps??????????-P???ss
66. R??????????????? K?????s??????
67. S???????????????? C???????????????????
68. S?????????????????? ????? S??????????
69. S????????????? S???????????????? ????? D???s???? K??????????????
70. S???????????????? ????? B????????????????? S??????????s
71. S???????? E???????????
72. S????????????? ???????? B???????????
73. T????????s ????? Z???s???????????? ???????? X
74. T??????????? S??????????s
75. T??????????? G??????????
76. Us??????? ?????? T????????
77. Z??????s???????? ????? T????????????s???

A??????????????????????
1. O????? P???????????
2. M???s????s????
3. Z???????? ????? Ts?????????????????
4. M????????? I?? A????ss
5. C??????????????????
6. BTOOOM
7. S???????????????? ????? B????????????????? S??????????s
8. R???????????? N??? Y??????s?????
9. F????????????????????? A???????????????s???: B??????????????????????????
10. M??????? S??????????s
11. H????????????? x H????????????? 
12. A?????????s???????? ????? Y???????? 
13. N?????????????? S??????????s
14. O?????????????? ?????? K??????s???????????????? 
15. F????????? T???????
16. H???????? ????? U??????????? S?????????
17. K????????????????????????????? 
18. C????????? G??????ss
19. K??????? ????? T???????: T????? B????????????????????? W??????????
20. S???????? E???????????
21. T???????????? T???????????? G???????????? L????????????
22. A???????????? ????? K??????!
23. S??????????? A????? O???????????
24. D???????????? B???????
25. N???????????s??? ????? T????????????? 
26. L????????????? W?????????? A????????????????????
27. R???????????? ????? A????? S????????
28. S???????? ????????? ?????? T???????? B???s?????
29. C????????????? B???????????
30. S????? ?????? C????????????? ????? K????????????????????s????
31. N????????????????????? N??? M????????
32. L????? H???????????????
33. T?????????????
34. G???????????????????? ????? ???????? V???????????????????s P?????????????
35. J????????????s B??????????????? A??????????????????????
36. E?????????????? S???????????
37. B??????????? L?????????????
38. D.G???????-????????
39. A??????????????? ????? T??????????
40. I?????Y???s?????
41. S???????????????? C???????????????????
42. N??????????????????
43. N??? G????????? N??? L???????
44. R????????????????

M???????????
1. T???????????? T???????????? G???????????? L????????????
2. F??????? M??????????? P??????????!
3. C?????ss A???????: T?????s???? ?????? R???????? ????? R???????????
4. N???????? G????????s??s E??????????????????????
5. E?????????????? S???????????
6. K?????????????????????? V??????????????????? (V??????????????????? ???????? L????????????????????)
7. M???????????? S???????? G?????????????? 00
8. B??????????? C??????????????x
9. A???????????????.Z????????
10. C????????? G??????ss
11. D????????? A L????????
12. G????????s??s ????? A????????????????? (S??????s????? ????? A?????????????????)
13. V??s??????? ????? Es????????????????????? 
14. M???????????ss S??????????s
15. G?????s??? ???? ???????? S?????????: S??????????? A?????????? C??????????????x
16. R?????X?????????????
17. Y??????s?????-O??? G??????G?????G?????
18. FLCL
19. IS: I???????????????? S??????????????s
20. D????????????? ???? ???????? F???????XX
21. S?????s????? ????? G????????????????????
22. U????????????????????????? B????????????????? C???????????????????
23. H????????????????
24. S??????????????? ????? K??s????
25. R????????????????s;N?????????s
26. H???s???? ????? K??????
27. G?????????????? W??????
28. B???????????????????
29. M????????????S????????G??????????????:I???????-B????????????????? O????????????s
30. K??????????????s & M??????????
31. H??????????? O??????????????
32. S???????????????? S???????????
33. C???????????? L???????????????
34. S???????? D????????????: K?????????????????? ????? T???????????????
35. As???????? C????????'
36. H????????????? A?????
37. A????????????????? E????????
38. K?????????????????????????
39. N?????????????????? ???????? F????????
40. S???????????????????s????????????????
41. T?????? ?????? N???????????! G??????????s????????
42. S???????????????????? P????????????ss
43. B??????????? B???????????
44. M??????-L?????? A??????????????????????????: T??????????? E??????????s???
45. R?????????????? Ts????????????? 
46. V???????????????????
47. B????????????? B???????????????
48. A???????????s????????? (2004)
49. D?????????????????????: T????? R???s????????????????
50. G????? X S???????????

C?????s
1. T??????????????'s AE86 / I?????????????? D
2. A????????'s F??????? L???????? Z / W???????????? M????????????????
3. JP's T???????s?????? / R???????????????
4. N????????'s M?????????????????s A-????????ss / N???x??? A-????????ss
5. K??????????????'s R???????????????? / C????????s????????? H????????????? G????????????????????????
6. S????????????'s L?????????s S??????????? 7 / ???X-D????????????: T????? ??????????????
7. S?????????'s ????????????????????? F-1 / T????????????????????s
8. V???????? P??????????????????? U????????????????????????'s T?????????????? C?????s?????? / GTO
9. C???????????????'s F???????????????? O????? / C???????????????
10. R??????????? ???????? O?????????'s s?????????? ???????? / C???????????? L???????????????

D???????????
1. R???LIFE
2. Ts???????? ????? K?????????
3. A?????H????????
4. S????????????s??? ?????? K??????? ????? Us???
5. M????????? I?? A????ss
6. K??????? ????? N?????????
7. R???: Z???????? ??????????? H??????????????????? Is??????????? S??????????????s???
8. F????????????????????? A???????????????s???: B??????????????????????????
9. A????????? B?????????s
10. C?????????????????????? ???????????? K????? ????? S????????????!
11. C?????????????????????
12. S??????????????s?????? ????? P?????? ????? K??????????????
13. K????????? ????? H?????????????
14. E??????????????????-s?????s?????
15. A??? H???????? R????????
16. K?????? ????? K????????????????
17. S???????????????? ????? K???????????????
18. C???????????????
19. W?????????? A??????????

F???????????s??
1. O????? P???????????
2. M????????? ???? A????ss
3. R???:Z???????? ??????????? H??????????????????? Is??????????? S??????????????s???
4. D?????M??????????
5. O????????L????????
6. S?????????????????? ????? As??? ???? Y?????????s?????????h????? H???????? ?????? 
7. T????????s ????? Z???s???????????? ???????? X
8. O?????????????? ?????? K??????s????????????????
9. A?????????s???????? ????? Y????????
10. F????????????????????? A???????????????s???: B??????????????????????????
11. L????? H???????????????
12. B?????s????????
13. N??? G????????? N??? L???????
14. N???????????s??? ????? T?????????????
15. M??????? S??????????s
16. F????????? T???????
17. H????????????? x H?????????????
18. N??????s????????? Y????????????????????????
19. S???????? E???????????
20. F?????????/s???????? ???????????: U???????????????????? B??????????? W????????s
21. Z??????s???????? ????? T????????????s???
22. K?????????????? S?????s?????
23. K??????????????.
24. D??????????????s
25. H??????????????? R?????????????
26. M?????????????????? G??????????????????
27. G?????????: J??????????????? K??????????????? N????????, K????????? T??????????????????????
28. S???????????????? ????? B????????????????? S??????????s
29. K????????s????????
30. S??????????? A????? O???????????
31. V????????????? E???????????????????????
32. M???s????s????
33. H???????? ????? U??????????? S?????????
34. A??????? T????? O???????????????????????
35. K????????s????????? H????????????????????s??????????
36. H??????s???????? ????? K???????
37. P????????????ss M???????????????????
38. K?????????????? ????? S???????????? E??????
39. Y???????????????? M??????????????
40. J?????????? K??????????????
41. C????????????????????????? S??????????????: C?????????? C????????-???????
42. K?????????????s????-s????? C???? ????? M???????? D????????????
43. U??????????????????? K???????????????
44. N??????? ????? As??????????????
45. M??????????????s??????????? ????? Y?????????
46. L????????????? W?????????? A????????????????????

S????????????? L???????
1. A??? H???????? R????????
2. H??????????????
3. C?????????????????????
4. K?????????????? C????????????????
5. K???????????????? J???????????? ????? T?????????????-s?????
6. B????????? D????????? ????? I??????? M??????????
7. T???????????????????!
8. Ts???????? ????? K?????????
9. K???????????????? ????? K??????????????
10. R???LIFE
11. S??????????? A????? O???????????
12. A?????H????????
13. Iss????????????? F????????????s
14. S????????????s??? ?????? K??????? ????? Us???
15. K????????? ????? H?????????????
16. K??????? ????? N?????????
17. S????????????????? I?? ????? ?????
18. S??????????????s?????? ????? P?????? ????? K??????????????
19. T??????????? R???????????s
20. H????????????????? U???????????-??????????
21. M???s??????????????-???????? ????? R????????????????
22. T????????????? S???????????
23. A????????? B?????????s
24. B?????????????
25. B???????????-C
26. H?????? S????????????? DxD
27. B????????? ????? H???????? A????????????????????
28. S????????????????????? ????? S????????????
29. A??s??????s??? K????????s???????s???
30. T???????????? ????? K?????????????s???-????????
31. O????????????
32. K??????? ???? T???????????????
33. S????????????????????? ??????s??? ??????
34. C?????????????????????? ???????????? K????? ????? S????????????!
35. K?????????????? ????? B???s?????????
36. N??s???????????
37. S????????????? H??????????????? ????? S???????????????????????????
38. H????????????! E?????????????????????
39. N????? N????? B???????????
40. G?????????????? D????????O??????
41. A????? G??????
42. I???s?????????????????? B?????????????? ????? K????? ?????? 10-C????????????????????????s D????????????
43. J???s??? B????????????s???!
44. K?????? ????? K????????????????
45. K?????????????? ????? S??????????????????????????????????????????????

S?????????? ????? L???????
1. G?????s????????????
2. S???????????????????! I?????? M???s?????????
3. U??????????????????? K???????????????
4. K??????????????????? ????? N????????
5. M???s????s????
6. P????????? ????? I??????????????? ?????? K????????????s?????!
7. A????
8. A????? H?? M???????? H???????? ????? N???????????? ?????? B?????????????????????? ?????? M????????? S????????????????.
9. N??????s????????? Y????????????????????????
10. B?????????????????????? ???????? H???????????-????????
11. D????????s???? K???s????
12. A??????????????? ?????? I?????????????????
13. C???????????????
14. K?????????????s????-s????? C???? ????? M???????? D????????????
15. H?????????????????! U???????????-??????????
16. S?????????????? Q??????s???
17. M??????????????s??????????? ????? Y?????????
18. K???????????????? J???????????? ????? T?????????????-s?????
19. S???????? ????????? ?????? T???????? B???s?????
20. S???????????????? x S????????????????
21. T??????????????? L????????? S??????????
22. N????? N????? B???????????
23. Us??????? D????????
24. N?????? G?????????!
25. W??????????????!! (W?????????????????!!) S??????????s
26. G?????????????????????? ?????? Us??????? ??????s??? ????????
27. A??????? T????? O???????????????????????
28. U??????????? K????????????????
28. N??????????????????
30. N????????
31. K?????????????? ????? S???????????? E??????
32. N??????????????? C????????????????????
33. D?????s???? K???????????????s????? ????? N??????????????????
34. K-O??!
35. Y???????? C?????????
36. G???? ????? S????????
37. H??????????????????s??? ?????? C?????????????
38. S??????????????s?????? ????? P?????? ????? K??????????????
39. R???LIFE
40. K???????????????????????
41. S?????????????? S?????????????????s??? R??????????????
42. E?????? ????? J??????????
43. H??????????????
44. I??? N???????? K??? R????????
45. T??????????????-???????? ?????? I???s????????? K???????????????????
46. S????????????????????
47. G??????????? T???????????????? O????????????????
48. S?????????? K???s?????? ????? ?? N?????
49. V????????????? E???????????????????????
50. 3-????????s??? ????? L???????
51. G?????????????? B???????s?????????????s
52. M?????s????????s???? C??????????s
53. H????????????????s???????
54. T?????????-???????? ?????? K????? ?????? S???????????
55. C??????????? G??????s
56. B????????s????????? 5 C????????????????????????
57. H????????s????????? I??????????
58. D??????????? O??????? ?????? S?????s??????? O????????????

S????????????????
1. S???????????????? 7
2. R??????????????? K?????s??????
3. S???????????????? C???????????????????
4. A??????? S????????????????
5. S???????????????? B???s????????: S???????????????? K??????s
6. G????????????????
7. H????????????????????
8. S??????????? ????? ???????? S?????????????????
9. B??????????? ????? ???????? I???????????????????
10. R????????? W??????????????s
11.S???????????????? X

M????????????????
1. F????????????????????? A???????????????s???: B??????????????????????????
2. S???????????????? ????? K????????????
3. C????????? G??????ss: H?????????????????? ????? L????????????????
4. O?????????? ????? S?????????????
5. G?????????: J??????????????? K??????????????? ??????????, K????????? T??????????????????????
6. A??????????????? .Z????????
7. G?????? E???????????
8. Y???????????? S?????????? 
9. SAO A??????????????????????????: G????? G???????? O???????????
10. N??????????????????? S???????????? S??????????: T???????????????? ????? A????????????????????
11. G??????s ???????? P?????????????
12. K????????????? C???????????????????????
13. M??????-L?????? A??????????????????????????: T??????????? E??????????s???
14. 07-G?????s???
15. M???????????? S???????? G?????????????? 00
16. K???????????????
17. K?????????????????????? V???????????????????
18. S????????????? W?????????????s
19. M???????????ss F?????????????????
20. S??? R??? N??? W??? T???
21. H??????????? O??????????????
22. S?????????????? ????? V?????????????????
23. O???????????? Y?????????????? Z??????????????
24. A?????????????????s: G?????????????? K???ss??????????
25. B??????????? B???????????
26. H?????? S????????????? F???????????
27. T???s????????????? S?????s??????
28. S??????????????????!
29. T???????????????????? G?????????????? 35 S???????????? S????????????????
30. J??????????? G?????????

H??s??????????????????
1. G????????????????
2. M???s????s????
3. D?????????????
4. S???????????????? C???????????????????
5. B?????????????????!
6. K?????????????????????????????
7. R??????????????? K?????s??????: M?????????? K????????????????? R???????????????????
8. G???s????????
9. K???????????????
10. K????????s???????s????????
11. A????? B???????????????? S??????????s
12. H???????????????? Ax??s P???????????s
13. H????????????????????
14. S???????????????? B???s????????
15. J??????????? G?????????
16. K????????????? H???????? ????? M???????????????????????
17. E?????????????? K????? M??????????????????????? 

P?????????????
1. T?????????? S??????????????? ??????
2. G?????s??? ???? ???????? S?????????
3. K??????????????? K??????s???s???????????????? K???????????????? K???????????????????? 
4. H???s????????s?????????
5. Ps??????????-P???ss
6. M???????????? P????????????? P??????????????????
7. M????????? K?????s??????s??? U?????s????????????
8. W??????? 7
9. Y??????s????? K?????s??????s??? J-D??????????????
10. H??????????s???: T????? R????????????????????????
11. S???????????????? F???????????????????
12. B: T????? B?????????????????
13. J????-R?????: T????? W??????? B???????????????
14. O???????????
15. K??????????? K?????s??????s??? P??????????????????: O?? ????????????????s???????
16. M??????s?????? D???????????????
17. P???????????? M??????????? K??????????????????
18. H?????????? P?????????????

S?????-????
1. S??????????s;G?????????
2. I??????????s?????????
3. M????????? ???? A????ss
4. C????????????? B???????????
5. P?????s???????? M????????????????s
6. E?????????????? S???????????
7. M????????????????? K??????????????? ????? R???????????????s?????
8. D??????????s??????? W
9. D????????????? ???? ???????? F???????XX
10. D????????????? C???????
11. S???????????????D??????????
12. K????????????????????
13. N???????? G????????s??s E??????????????????????
14. R????????????????s;N?????????s
15. P????????????????
16. M????????????? B???x
17. G?????s??? ???? ???????? S?????????
18. G?????????????????????? C???????????s
19. G?????????s????? T???s???? As??????????s???
20. G????????????????
21. S?????????s????????? ????? P???????????????
22. E?????? ????? J??????????
23. Ps??????????-P???ss
24. D??????????? O??????? ?????? S?????s??????? O????????????
25. M????????????????????????? A???????????s
26. P????????????????s
27. B??????????? C??????????????x
28. P?????s???????? S??????????s
29. S???????? ????? O??????s???????????????

S???????????
1. C???????????????? Ts????????s???
2. G?????????? K????????????
3. T????? K??????????? ???? T????? A???????? (A???????? ????? K??s???? )
4. A???????? D?????s??????s??? S???????????! (B???????? L????????????? S???????????!)
5. D?????s
6. W????s????????!
7. O????s????????
8. D???????????? L??????????????
9. F???????????s??s?????? S?????????????
10. I????????????????? E?????????????
11. G????????? ??? K???????????????!!
12. H??????????? H??????????? W??????? S???????????????
13. G??????????????? K?????????????s
14. K?????????????? N??? B???s?????????
15. S???????? D????????
16. D???????? B?????s
17. I???????/CKBC
18. B?????????????? B??????????????
19. B???s????????s??!
20. R???-K?????-B???!
21. D???s?? K??????????????
22. D???????????????? ????? A?????? (A?????? ????? D????????????????)
23. P????????????ss N???????: K??s???????????? J???s????????????? Y???????????????????
24. M???????????
25. T???????????
26. H2
27. C?????ss G?????????
28. T?????s???????? Y?????????????? M???s?????????
29. M???s??????????????? (W???????? I?? ??? F?????????????? M??????????????? ????? ??? H?????? S????????????? B???s???????????? T????????? R????????? D???????????????????s)
30. O????? O??????s
31. O?????????????? F??????????????????????????? (B???? W?????????????!)
32. H????????????????
33. A??????????????? ????? T???????????????????
34. A??????????????? N???.1
35. A???????????????????? Y??????
36. Y???????????????s???? P???????????
37. I?????????????? J?????????
38. O???????? D??????????
39. N???s???: S?????????????? ???? A?????????????s?????
40. N???s??? : A M??????????????????? B??????? ?????????? S??????????????s???
41. H?????????????? ????? I?????????
42. As?????????? ????? J??????
43. G??????????????? G??????????
44. N?????????????? W?????????????s
45. O????? P??????????? G???s????????
46. A????? ??????? ???????? A??????!
47. T????? P???????????? ????? T?????????s
48. B??????? S?????????s
49. E?????s???????????? 21
50. S??????s??
51. S???????????????????s??? ????? ???????????????????? ??????s?????????
52. A???? ??????????
53. P???????????? O?? S????????????? A??????????????????????????
54. F????????!
55. K?????????????? Z?????????????????? S??????????????? U?????s????????

M??????????????? A?????
1. B??????????????: N?????????????? N???x??? G???????????????????????s
2. S???????????????????? H????????: A??????
3. K?????????????????????????????
4. S????????????? S???????????????? ????? D???s???? K?????????????? (K?????I???????: T????? M??????????????s??? D??s?????????????)
5. M???????? ?????? W?????????s???? ???? K????? S?????????s?????!
6. T??????????? T???????????????
7. S???????????????? B???s????????
8. B?????-??????
9. M??????????????? B???x
10. M???s???????????????????
11. M???????????-?????!
12. B??????????? & S????????
13. F?????????????????
14. I?????????????????s????? (I???????? T??????s?????)
15. As??? ????? Y????????????!
16. K??????????????????? T????? A????????????????????
17. T??????????? M?????????? G?????????????? K???????????????????: T??????
18. T?????????????? T??????????
19. B???????? (2018)
20. K??????????????? ???M???s??????
21. D???????????? B???????

M???s?????
1. S????????????s??? ?????? K??????? ????? Us???
2. H????????????! E?????????????????????
3. Z??????????????????????? S????????
4. K-O??!
5. N??????????????? C????????????????????
6. S??? R??? N??? W??? T???
7. B?????????
8. B?????G D???????????!
9. T????? ??DOLM@STER
10. L????????? L????????! S????????????? I???????? P?????????????????
11. D???????????????? M??????????? C???????
12. N????????
13. IDOL??SH7
14. S????????????????????? ????? A???????????????
15. K??????????? ????? C???????????
16. M??????????-K???????! R??????????ss???????????
17. P?????????? ????? M???????
18. F??????? M???????? ?????? S????????s??????????
19. W?????????? A??????????
20. W????????? U???, G??????s!
21. T??????? T???????
22. G??????????????????????????
23. M???????????ss S??????????s
24. ?????: A T???????? ????? M????????????????s.
25. K?????????????? O????????
26. L????? ?????? A????? T???????
27. Y???????????? Ts????????????? L??? ????? U??????
28. A???????????s???!
29. S????????????????
30. F????????????
31. S???????????????
32. AKB0048
33. S???????? B?? R?????????!!
34. S??????????????????????? 

H???????????
1. D????????? ??? L????????
2.M???????? C?????????!
3. M?????s???????? M???s????????? N??? I????? N??????????????????
4. T???????????????????? G?????????????? 35 S????????????????
5. T????? W?????????? G?????? O?????? K????????s
6. D??????????? K????????s????
7. K???????? W??? Z????????????? D???s?????????
8. M??????????????????????? S??????????s
9. O?????I??????
10. Z???????? ????? Ts?????????????????
11. M??????????? S?????s????? N?????????????!
12. Is??????????? ????? S??????????s???? M???????????????????????
13. M????????????????-s????? ?????? Ass??s???????????-s????? ?????? T????? A????????????????????
14. I???????????? 100%
15. H???????????????! N????????????????-s?????
16. S??????????? A????? O???????????
17. C???????????????????!
18. G????s???????? S??????????s
19. F?????????????????
20. MM!
21. N??????C?????????
22. A??, M?? G????????????ss
23. L????????? H???????
24. H?????? S????????????? ????? ???????? D?????????
25. K??ss x s??s
26. H????????????? O???????? ?????? W????????????????????? N?????????.
27. S?????????????? M????????? ????? T???s?????????????????
28. S???????????????
29. G?????????s????? T???s???? As??????????s???
30. S????????????? H??????????????? ????? S???????????????????????????
31. M???s??????????????-???????? ????? R????????????????
32. O????? ????? K?????????????? ?????? Os??????????????????????? ????? S??????????????? S????????????
33. S??????????????!
34. N??????? K?????!
35. O??????????????????? C????????????????
36. M??????????? ????? O??? ?????? V?????????????s
37. M???????? ?????? W?????????s???? ???? K????? S?????????s?????!
38. P????????????ss L???????????!
29. S????????????? Ts??????????? ????? W?????????? B???????????
40. R???????????????????????? ????? S???????????????????s?????!?
41. H?????? S????????????? DxD
42. N??s???????????
43. B????????? ?????? T?????????????????????? ????? S????????????????
44. R???s?????????? ?????? V????????????????
45. IS: I???????????????? S??????????????s
46. T??? LOVE-R??? S??????????s
47. S???????? ????? O??????s???????????????
48. T????????????? S???????????
49. Y???????????????-???????? ?????? 7-?????? ????? M?????????
50. I?????????????? Us????????? ????? D?????????????????

R???????????s??? H???????????
1. H????????s?????????????? S?????s???????????????
2. U?????? ????????P????????????-s????????????
3. H????????????????????
4. Y??????????????? N?????????s?????????? S??????????? H??????????
5. A?????????s???????? ????? Y????????
6. F???s???????? Y?????????? (M??s????????????????s P???????)
7. D????????????????? L???????????s
8. A????????????? F?????????????????
9. B???????????????s C?????????????????
10. D??????????? ?????????? D??????????s
11. O?????????? H?????? S????????????? H???s??? C???????
12. K????????s????????? H????????????????????s??????????
13. A????????s?????
14. B???????????????? S???????????? L????????? P????????ss??????????
15. K?????????????????? ????? As???????
16. H????????? ????? K??????????????

R?????????????????
1 C??????? & M??????????
2. W?????????? A?????????? 
3. C??????????????? A?????????? S??????????
4. A????????? B?????????s
5. Is???????????????? F????????????s.
6. S????????????s??? ?????? K??????? ????? Us???
7. N??s???????????
8. G????????????? T????????
9. N??????? ????? As??????????????
10. A??? H???????? R????????
11. O????? M???????????????????????
12. S????????????? H??????????????? N??? S?????????????????????
13. G?????????????? S?????????????? N??????????????-K?????
14. S???????????????????
15. K?????????????? C????????????????
16. A???????????????? SS
17. K?????????????????-s????? (M???s?????????? D????????????? C?????????????????? A????????)
18. H????????????? O???????? ?????? W????????????????????? N?????????
19. T???????????? ????? K?????????????s???-????????
20. K???????????????? ?????? M????????-s?????????!
21. P?????s???????? M????????????????s
22. T???????????????????!
23. A????? H?? M???????? H????????
24. Z???????? ????? Ts?????????????????
25. B?????????????? ?????? M????????? K???????????s??????
26. I????????????????? ????? K??ss
27. Y???????????????-???????? ?????? 7 ?????? ????? M?????????
28. A?????????s???????? N??? Y????????
29. O????? ????? K?????????????? ?????? Os??????????????????????? ????? S??????????????? S????????????
30. Y???s???????? ????? S????????
31. S??????????? A????? O???????????
32. A????? N??????s??? ?????? M?????????????????
33. N?????????????? S????????????????????? : T????? L???s???
34. K??????? ???? T???????????????
35. G???s????????
36. N?????????????? Y????????-C??????? ????? S??????s???????s??? (G????????????? ?????????? S???????????????? H???????????? ????? S??????s???????s???)
37. K????????s????????? H????????????????????s??????????
38. O?????????????????
39. S???????????????????? S??????????? ?????? U???s?????????s??????
42. S???????????????? x S????????????????
43. W??????????????
44. A???????????????? ????? S??????????????????? H????????
45. D??????????? O??????? ?????? S?????s??????? O????????????
46. T???s????????????? O???????????? x A????????s?????
47. NHK N?? Y????????????s???
48. B????????? D????????? ????? I??????? M??????????
49. I????? x B????????? S?????????????? S????????????????
50. N????????? ????? K?????????????? X
51. S???????????????? A
52. L????????????? C??????????????x
53. S????????????????? I?? ????? ?????
54. E?????????????? K????? M??????????????????????? E?????????
55. N????????
56. R???????????? x J?????????????
57. H??????????????????s??? ?????? C?????????????
58. B????????s????????? 5 C????????????????????????
59. B?????????????? ????? I??????
60. K????? K?????????
61. O?????????????? ?????? K??????s????????????????
62. N??????????????? C???????????????????? 
63. H?????????????????? ????? M??????? ???
64. K??????? ????? N??? W????
65. H???????-s????? ?????? M??????????????????-????????
66. R??????
67. C????????????????????????
68. M???s?????????-??????? S?????????????????
70. C?????ss G?????????
71. T???????? T????????s
72. M???s??????????????-???????? ????? R???????????????? 
73. S???????????? 
74. R???LIFE
75. H???s??????????????? ??? K?????????????? H???s????
76. E??????????????????-S?????s?????
77. K?????? ????? K????????????????
78. N??????????????????? H?????????????? ????? H??????????s???
79. K????????????????????
80. G???????????? C??????????
81. O????????????
82. Ts???????? ????? K?????????
83. G???????????s
84. S??????????????s?????? ????? ????????? ????? ????????????????????
85. O????? ????? I??????????????? ????? K?????????????? K????????????? W????????? ????? N?????
`
                    
                    
                    
                      muzhamz.sendMessage(from, wew, image, { quoted: mek, caption: mzzain })
                      break
                      //menu ramadhan
        //MENU COMMAND2
case 'ramadhanamalan':
			   	if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    wew = fs.readFileSync(`./lib/amalan.jpg`)
                    mzzain = `
?????????????????????????????????                 
??? *AMALAN RAMADHAN*
???
????????????????${prefix}amalan1
????????????????${prefix}amalan2
????????????????${prefix}amalan3
????????????????${prefix}amalan4
????????????????${prefix}amalan5
????????????????${prefix}amalan6
????????????????${prefix}amalan7
????????????????${prefix}amalan8
????????????????${prefix}amalan9
????????????????${prefix}amalan10
????????????????${prefix}amalan11
????????????????${prefix}amalan12
????????????????${prefix}amalan13
????????????????${prefix}amalantambahan
???????????????????????????????????????????????????`

                    muzhamz.sendMessage(from, wew, image, { quoted: mek, caption: mzzain })
					break
//MENU COMMAND2
case 'zainoperator':
			   	if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    wew = fs.readFileSync(`./lib/operator.jpg`)
                    mzzain = `
?????????????????????????????????                 
??? *PULSA*
???
????????????????${prefix}TELKOMSEL
????????????????${prefix}INDOSAT
????????????????${prefix}XL
????????????????${prefix}AXIS
????????????????${prefix}SMARTFREN
????????????????${prefix}TRI
?????????
???TOP UP GAME????*
?????????
????????????????${prefix}DMML
????????????????${prefix}DMFF
????????????????${prefix}UCPUBG
?????????
???TOKEN LISTRIK* 
?????????
????????????????${prefix}TOKENLISTRIK
?????????
???PEMBAYARAN* 
?????????
????????????????${prefix}CARABELI
????????????????${prefix}BAYAR
????????????????${prefix}BELIPULSA
????????????????${prefix}BELIDM
????????????????${prefix}SYARAT
???????????????????????????????????????????????????

LinkGrubOperator:https://chat.whatsapp.com/Fe48dzVNKB62mvT8cYlKmz `

                    muzhamz.sendMessage(from, wew, image, { quoted: mek, caption: mzzain })
					break
// MENU COMMAND
case 'carabot':
			   	if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    wew = fs.readFileSync(`./lib/odc.jpg`)
                    mzzain = `
*CARA PENGGUNA AN BOT *

???KETIK SESUAI ATURAN BOT =SEPERTI INI
????????????????${prefix}daftar nama|umur [ seperti ini ${prefix}daftar ifin|17
???SETELAH ITU KETIK MENU BILA INGIN MENGETAHUI FITUR BOT
????????????????${prefix}menu [seperti itu] 
???BILA ADA FITUR YANG GA JADI JADI TADANYA FITUR ITU GA BISA
???IKUTI ATURAN BOT
`
                    muzhamz.sendMessage(from, wew, image, { quoted: mek, caption: mzzain })
					break
// MENU COMMAND
				case 'simplemenu':
                if (!isRegistered) return reply(ind.noregis())
			   	if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    wew = fs.readFileSync(`./lib/logo.jpg`)
                    mzzain = `
?????????????????????????????????????????????
???  *SIMPLE MENU*
???
????????????????${prefix}stiker
????????????????${prefix}ttp
????????????????${prefix}attp
????????????????${prefix}tts
????????????????${prefix}soundlist
????????????????${prefix}toimg
???????????????????????????????????????????????????
` 
                    muzhamz.sendMessage(from, wew, image, { quoted: mek, caption: mzzain })
					break
				 case 'soundlist':
			   	if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    wew = fs.readFileSync(`./lib/logo.jpg`)
                    mzzain= `
???????????????????????????????????????????????????
??? ??? *SOUND MENU* ??? 
???
????????????????${prefix}iri
????????????????${prefix}pale
????????????????${prefix}sound
????????????????${prefix}sound1
????????????????${prefix}sound2
????????????????${prefix}sound3
????????????????${prefix}sound4
????????????????${prefix}sound5
????????????????${prefix}sound6
????????????????${prefix}sound7
????????????????${prefix}sound 8-71
????????????????${prefix}tapi
????????????????${prefix}boong
????????????????${prefix}magic
????????????????${prefix}menyukaiku
???
??? *Musik????* 
???
????????????????${prefix}sad
????????????????${prefix}sad2
????????????????${prefix}sad3
????????????????${prefix}sad4
????????????????${prefix}aeshtetic
????????????????${prefix}aeshtetic2
????????????????${prefix}aeshtetic3
????????????????${prefix}aeshtetic4
????????????????${prefix}home
????????????????${prefix}gettingold
????????????????${prefix}allnight
????????????????${prefix}lucas
????????????????${prefix}wanna
????????????????${prefix}yourskin
????????????????${prefix}up
????????????????${prefix}cutmeoff
????????????????${prefix}beautiful
????????????????${prefix}loosinggame
????????????????${prefix}loosinginterest
????????????????${prefix}playdate
???
??? *islam??????*
???
????????????????${prefix}AnNas
????????????????${prefix}AlFalaq
????????????????${prefix}AlIkhlas
????????????????${prefix}AlLahab
????????????????${prefix}AlKautsar
????????????????${prefix}AnNashr
????????????????${prefix}AlMaun
????????????????${prefix}AlLail
????????????????${prefix}AlBayyinah
????????????????${prefix}AlInsyiqaq
????????????????${prefix}AlFil
????????????????${prefix}AlHumazah
????????????????${prefix}AlAshr
????????????????${prefix}AlQadr
????????????????${prefix}AlQariah
????????????????${prefix}AlAdiyat
????????????????${prefix}AlInsyirah
????????????????${prefix}AtTin
????????????????${prefix}AtTakasur
????????????????${prefix}AdDhuha
????????????????${prefix}AlBalad
????????????????${prefix}AlBuruj
????????????????${prefix}AlFajr
????????????????${prefix}AlMulk
????????????????${prefix}AzZalzalah
????????????????${prefix}AsSyamsy
????????????????${prefix}AlFatihah
????????????????${prefix}Alkahfi {38,9mb} 
????????????????${prefix}Arrahman {8,5mb} 
????????????????${prefix}Yasin {23,8mb} 
????????????????${prefix}ayatkursi2
????????????????${prefix}tilawah
????????????????${prefix}sholawatnabi
????????????????${prefix}ngaji
????????????????${prefix}ngaji2
????????????????????????????????????????????????
` 
                    muzhamz.sendMessage(from, wew, image, { quoted: mek, caption: mzzain })
					break
	            	case 'help': 
		            case 'menu':
                    //Gak Usah Di Hapus TQTO Gblk anak babi
                    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    wew = fs.readFileSync(`./lib/logo.jpg`)
                    mzzain = `
??????????????????????????????????????????
           *SR.BOT*
??????????????????????????????????????????
*INFO BOT*
SARAN DILARANG SPAM KICK SPERTI INI ${prefix}kick @(81828) @(172727) Sebab BOT AKAN AUTO OFF 7-10JAM MOHON DI MENGERTI PENGGUNA BOT BUKAN 1 SAJA

??? NAMA : SR.BOT 

??? BACA ATURAN BOT

??? GUNAKAN BOT DENGAN BIJAK DAN BAIK
??? MENGGUNAKAN JASA BOT /1 grup Pulsa 15k
??? Ke http://wa.me/6285713902205

???link Grub SAHABAT RAMADHAN : https://chat.whatsapp.com/J0q8vDu8EIt8ttvODWvbUX

???link WEB SAHABAT RAMADHAN :https://sahabatramadha.zyrosite.com
???link Grub SR.BOT [JASA SEWA]  https://chat.whatsapp.com/JIWeariw3GLCoEkrfV3NMt


   ??????????????????????????????????????????
   ???  *SR.BOT*
   ??????????????????? NAMA :${NamaBot}
   ??????????????????? PREFIX :${prefix}
   ??????????????????? KECEPATAN :${process.uptime()}
   ????????????????*${prefix}snk*
   ????????????????*${prefix}info*
   ????????????????*${prefix}ping*
   ????????????????*${prefix}carabot*
   ????????????????*${prefix}botwa*
   ???
   ???*NEW FITUR EDIT SERTI*
   ???
   ????????????????${prefix}fuckboyserti
   ????????????????${prefix}fuckgirlserti
   ????????????????${prefix}bucinserti
   ???
   ???*NEW FITUR EDIT FILTER IMAGE*
   ???
   ????????????????${prefix}1977
   ????????????????${prefix}aden
   ????????????????${prefix}brannan
   ????????????????${prefix}brooklyn
   ????????????????${prefix}clarendon
   ????????????????${prefix}gingham
   ????????????????${prefix}husdon
   ????????????????${prefix}inkawell
   ????????????????${prefix}earlybird
   ????????????????${prefix}kelvin
   ????????????????${prefix}lark
   ????????????????${prefix}lofi
   ????????????????${prefix}maven
   ????????????????${prefix}myfair
   ????????????????${prefix}moon
   ????????????????${prefix}nashville
   ????????????????${prefix}perpetua
   ????????????????${prefix}reyes
   ????????????????${prefix}slumber
   ????????????????${prefix}rise
   ????????????????${prefix}toaster
   ????????????????${prefix}valencia
   ????????????????${prefix}walden
   ????????????????${prefix}willow
   ????????????????${prefix}xpro2
   ???
   ???*NEW FITUR EDIT TEXT*
   ???
   ????????????????${prefix}cartoongv 
   ????????????????${prefix}anonymtext
   ????????????????${prefix}rlvintage
   ????????????????${prefix}cdwar
   ????????????????${prefix}vtbanner
   ????????????????${prefix}jvtsthirt
   ????????????????${prefix}ctgravity
   ???
   ???*VID/GIF EDIT SMENU*
   ????????????????*${prefix}ubahstk*
   ???
   ???*RAMADHAN AMALAN MENU*
   ???
   ????????????????${prefix}ramadhanamalan
   ????????????????#Spam sahur
   ???
   ???*JOMBLO MENU*
   ???
   ????????????????lagi apa sayang
   ????????????????kita putus
   ????????????????iloveyou / I LOVE YOU
   ????????????????sayangku
   ????????????????sayang kangen
   ????????????????masasih sayang
   ????????????????${prefix}cogan
   ????????????????${prefix}cecan
   ???
   ???*GROUP MENU*
   ???
   ????????????????${prefix}antilink 1/0
   ????????????????${prefix}nobadword 1/0
   ????????????????${prefix}nsfw 1/0
   ????????????????${prefix}welcome 1/0
   ????????????????${prefix}leveling 1/0
   ????????????????${prefix}event 1/0
   ????????????????${prefix}grup buka/tutup
   ????????????????${prefix}level
   ????????????????${prefix}hidetag
   ????????????????${prefix}linkgc
   ????????????????${prefix}tagall
   ????????????????${prefix}mentionall  
   ????????????????${prefix}leave
   ????????????????${prefix}kick
   ????????????????${prefix}promote
   ????????????????${prefix}demote
   ????????????????${prefix}setdesc
   ????????????????${prefix}setname
   ???
   ???*DOWNLOADER MENU*
   ???
   ????????????????${prefix}ytplay
   ????????????????${prefix}ytplay2
   ????????????????${prefix}ytcari
   ????????????????${prefix}ytmp3
   ????????????????${prefix}ytmp32
   ????????????????${prefix}ytmp4
   ????????????????${prefix}ytmp42
   ????????????????${prefix}telesticker
   ????????????????${prefix}tiktoknowm
   ????????????????${prefix}tiktokmusic
   ????????????????${prefix}spotify
   ????????????????${prefix}spotifysearch
   ????????????????${prefix}jooxplay
   ????????????????${prefix}igdl
   ????????????????${prefix}fbdl
   ????????????????${prefix}pinterestdl
   ????????????????${prefix}pixiv
   ????????????????${prefix}pixivdl
   ???
   ???*STICKER MENU*
   ???
   ????????????????${prefix}cry 
   ????????????????${prefix}cium 
   ????????????????${prefix}hug 
   ????????????????${prefix}blush 
   ????????????????${prefix}feed 
   ????????????????${prefix}wink 
   ????????????????${prefix}lick 
   ????????????????${prefix}dance 
   ????????????????${prefix}cringe 
   ????????????????${prefix}poke 
   ????????????????${prefix}cudle 
   ????????????????${prefix}tickle 
   ????????????????${prefix}baka 
   ???
   ???*STICKER FOTO MENU*
   ???
   ????????????????${prefix}triggered 
   ????????????????${prefix}pencil
   ????????????????${prefix}wasted
   ????????????????${prefix}fisheye
   ????????????????${prefix}skullmask
   ????????????????${prefix}alien
   ????????????????${prefix}tosmile
   ????????????????${prefix}invert 
   ????????????????${prefix}pixelate 
   ????????????????${prefix}deepfry 
   ???
   ???*OWNER MENU*
   ???
   ???  
   ????????????????${prefix}antidelete aktif/off
   ????????????????${prefix}banlist
   ????????????????${prefix}blocklist
   ????????????????${prefix}addlimit
   ????????????????${prefix}setlimit
   ????????????????${prefix}setmemlimit
   ????????????????${prefix}addbadword
   ????????????????${prefix}dellbadword
   ????????????????${prefix}clearall
   ????????????????${prefix}setprefix
   ????????????????${prefix}bc
   ????????????????${prefix}event 1/0
   ????????????????${prefix}block
   ????????????????${prefix}unblock
   ????????????????${prefix}ban
   ????????????????${prefix}unban
   ????????????????${prefix}premium
   ???
   ???*ISLAM MENU*
   ???
   ???????????????? ${prefix}tahlil
   ????????????????${prefix}jadwalsholat
   ????????????????${prefix}kisahnabi
   ????????????????${prefix}ayatkursi
   ????????????????${prefix}doaharian
   ????????????????${prefix}niatsholat
   ????????????????${prefix}bacaansholat
   ????????????????${prefix}listsurah
   ????????????????${prefix}alquran
   ????????????????${prefix}alquranaudio
   ????????????????${prefix}asmaulhusna
   ????????????????${prefix}niatsholat
   ????????????????${prefix}bacaansholat
   ???
   ???*MATEMATIKA MENU*
   ???
   ????????????????${prefix}perkalian angka1xangka2
   ????????????????${prefix}rumuspersegipanjang panjang/lebar
   ????????????????${prefix}rumuspersegi 
   ????????????????${prefix}kuadrat
   ???
   ???*MAKER MENU*
   ???
   ????????????????${prefix}hartatahta 
   ????????????????${prefix}harta2 
   ????????????????${prefix}customharta 
   ????????????????${prefix}darkneon
   ????????????????${prefix}candlemug
   ????????????????${prefix}lovemsg
   ????????????????${prefix}mugflower
   ????????????????${prefix}narutobanner
   ????????????????${prefix}paperonglass
   ????????????????${prefix}romancetext
   ????????????????${prefix}shadowtext
   ????????????????${prefix}coffeecup
   ????????????????${prefix}coffeecup2
   ????????????????${prefix}glowingneon
   ????????????????${prefix}underwater
   ????????????????${prefix}hpotter
   ????????????????${prefix}woodblock
   ????????????????${prefix}logogaming
   ????????????????${prefix}gplaybutton
   ????????????????${prefix}splaybutton
   ????????????????${prefix}qrencode
   ????????????????${prefix}barcode
   ????????????????${prefix}googlesearch teks/teks/teks
   ????????????????${prefix}pubglogo teks/teks
   ????????????????${prefix}glitchtext teks/teks
   ????????????????${prefix}battlefield teks/teks
   ????????????????${prefix}quotemaker teks
   ????????????????${prefix}quotemaker2 teks/teks
   ????????????????${prefix}sticker
   ????????????????${prefix}blackpink
   ????????????????${prefix}neon
   ????????????????${prefix}greenneon
   ????????????????${prefix}advanceglow
   ????????????????${prefix}futureneon
   ????????????????${prefix}sandwriting
   ????????????????${prefix}sandsummer
   ????????????????${prefix}sandengraved
   ????????????????${prefix}metaldark
   ????????????????${prefix}neonlight
   ????????????????${prefix}holographic
   ????????????????${prefix}text1917
   ????????????????${prefix}minion
   ????????????????${prefix}deluxesilver
   ????????????????${prefix}newyearcard
   ????????????????${prefix}bloodfrosted
   ????????????????${prefix}halloween
   ????????????????${prefix}jokerlogo
   ????????????????${prefix}fireworksparkle
   ????????????????${prefix}natureleaves
   ????????????????${prefix}bokeh
   ????????????????${prefix}toxic
   ????????????????${prefix}strawberry
   ????????????????${prefix}box3d
   ????????????????${prefix}roadwarning
   ????????????????${prefix}breakwall
   ????????????????${prefix}icecold
   ????????????????${prefix}luxury
   ????????????????${prefix}cloud
   ????????????????${prefix}summersand
   ????????????????${prefix}horrorblood
   ????????????????${prefix}thunder
   ????????????????${prefix}pornhub
   ????????????????${prefix}glitch
   ????????????????${prefix}avenger
   ????????????????${prefix}space
   ????????????????${prefix}ninjalogo
   ????????????????${prefix}marvelstudio
   ????????????????${prefix}lionlogo
   ????????????????${prefix}wolflogo
   ????????????????${prefix}steel3d
   ????????????????${prefix}wallgravity
   ????????????????${prefix}wetglass
   ????????????????${prefix}multicolor3d
   ????????????????${prefix}watercolor
   ????????????????${prefix}luxurygold
   ????????????????${prefix}galaxywallpaper
   ????????????????${prefix}lighttext
   ????????????????${prefix}beautifulflower
   ????????????????${prefix}puppycute
   ????????????????${prefix}royaltext
   ????????????????${prefix}heartshaped
   ????????????????${prefix}birthdaycake
   ????????????????${prefix}galaxystyle
   ????????????????${prefix}hologram3d
   ????????????????${prefix}greenneon
   ????????????????${prefix}glossychrome
   ????????????????${prefix}greenbush
   ????????????????${prefix}metallogo
   ????????????????${prefix}noeltext
   ????????????????${prefix}glittergold
   ????????????????${prefix}textcake
   ????????????????${prefix}starsnight
   ????????????????${prefix}wooden3d
   ????????????????${prefix}textbyname
   ????????????????${prefix}writegalacy
   ????????????????${prefix}galaxybat
   ????????????????${prefix}snow3d
   ????????????????${prefix}birthdayday
   ????????????????${prefix}goldplaybutton
   ????????????????${prefix}silverplaybutton
   ????????????????${prefix}freefire
   ???
   ???*IMAGE EDIT MENU*
   ???
   ????????????????${prefix}wanted
   ????????????????${prefix}removebg
   ????????????????${prefix}gtav
   ????????????????${prefix}facebookpage
   ????????????????${prefix}costumwp
   ????????????????${prefix}pantaimalam
   ????????????????${prefix}pensil
   ????????????????${prefix}bakar
   ????????????????${prefix}crossgun
   ????????????????${prefix}hitler
   ????????????????${prefix}trash
   ????????????????${prefix}picture
   ????????????????${prefix}blur
   ????????????????${prefix}invert
   ????????????????${prefix}meme atas/bawah
   ????????????????${prefix}deteksiwajah
   ????????????????${prefix}deteksiumur
   ????????????????${prefix}deteksigender
   ???
   ???*SERTIFIKAT MENU*
   ???
   ????????????????${prefix}fftourserti [ON] 
   ????????????????${prefix}fftourserti2 [ON]
   ????????????????${prefix}fftourserti3 [ON]
   ????????????????${prefix}fftourserti4 [ON]
   ????????????????${prefix}fftourserti5 [ON]
   ????????????????${prefix}pubgtourserti [ON]
   ????????????????${prefix}pubgtourserti2 [ON]
   ????????????????${prefix}pubgtourserti3 [ON]
   ????????????????${prefix}pubgtourserti4 [ON]
   ????????????????${prefix}pubgtourserti5 [ON]
   ????????????????${prefix}tololserti
   ????????????????${prefix}mltourserti [ON]
   ????????????????${prefix}mltourserti2 [ON]
   ????????????????${prefix}mltourserti3 [ON]
   ????????????????${prefix}mltourserti4 [ON]
   ????????????????${prefix}mltourserti5 [ON]
   ????????????????${prefix}bocilepepserti [Off] 
   ????????????????${prefix}gayserti [Off] 
   ????????????????${prefix}sadboyserti [Off] 
   ????????????????${prefix}surgaserti [Off] 
   ????????????????${prefix}pintarserti [Off] 
   ????????????????${prefix}badboyserti [Off] 
   ????????????????${prefix}badgirlserti [Off] 
   ????????????????${prefix}goodboyserti [Off] 
   ????????????????${prefix}goodgirlserti [Off] 
   ????????????????${prefix}cium
   ???
   ???*MEDIA MENU*
   ???
   ????????????????${prefix}dare
   ????????????????${prefix}bacotandilan
   ????????????????${prefix}hemkel
   ????????????????${prefix}katadoi
   ????????????????${prefix}turth
   ????????????????${prefix}heroml
   ????????????????${prefix}trendtwit
   ????????????????${prefix}tts
   ????????????????${prefix}darkjokes
   ????????????????${prefix}darkjokes1
   ????????????????${prefix}memeindo
   ????????????????${prefix}nickff
   ????????????????${prefix}jadwaltv
   ????????????????${prefix}pinterest
   ????????????????${prefix}translate
   ????????????????${prefix}brainly
   ????????????????${prefix}jadwaltv
   ????????????????${prefix}jadwaltvnow
   ????????????????${prefix}newsinfo
   ????????????????${prefix}cnnindonesia
   ????????????????${prefix}cnnnasional
   ????????????????${prefix}cnninternasional
   ????????????????${prefix}infogempa
   ????????????????${prefix}lirik
   ????????????????${prefix}cuaca
   ????????????????${prefix}covidindo
   ????????????????${prefix}covidglobal
   ????????????????${prefix}kodepos
   ????????????????${prefix}jadwalbola
   ????????????????${prefix}indbeasiswa
   ????????????????${prefix}hoax
   ????????????????${prefix}nsfwcheck
   ????????????????${prefix}cerpen
   ????????????????${prefix}ceritahoror
   ????????????????${prefix}wancak
   ????????????????${prefix}asupan
   ????????????????${prefix}semoji
   ????????????????${prefix}ktpmaker
   ???
   ???*SEARCH MENU*
   ???
   ????????????????${prefix}gimage
   ????????????????${prefix}gimage2
   ????????????????${prefix}konachan
   ????????????????${prefix}wallpapersearch
   ????????????????${prefix}wallpapersearch2
   ????????????????${prefix}playstore
   ????????????????${prefix}shopee
   ????????????????${prefix}google
   ????????????????${prefix}stickerwa
   ???
   ???*FILM MENU*
   ???
   ????????????????${prefix}film
   ????????????????${prefix}film2
   ????????????????${prefix}searchfilm
   ????????????????${prefix}filmapikterbaru
   ????????????????${prefix}filmapikdrama
   ????????????????${prefix}lk21
   ????????????????${prefix}drakorongoing
   ????????????????${prefix}wattpad
   ????????????????${prefix}wattpadsearch
   ???
   ???*KOREA KPOP MENU*
   ???
   ????????????????${prefix}bts
   ????????????????${prefix}exo
   ???
   ???*FUN MENU*
   ???
   ????????????????${prefix}caklontong
   ????????????????${prefix}tebakgambar
   ????????????????${prefix}tebakgambar2
   ????????????????${prefix}family100
   ????????????????${prefix}terganteng
   ????????????????${prefix}tercantik
   ????????????????${prefix}putus
   ????????????????${prefix}beban
   ????????????????${prefix}gantengcek
   ????????????????${prefix}cantikcek
   ????????????????${prefix}jadian
   ????????????????${prefix}bagaimanakah
   ????????????????${prefix}apakah
   ????????????????${prefix}bisakah
   ????????????????${prefix}rate
   ????????????????${prefix}kapankah
   ????????????????${prefix}watak
   ????????????????${prefix}hobby
   ????????????????${prefix}artinama
   ????????????????${prefix}artimimpi
   ???
   ???*SOVIET MENU*
   ???
   ????????????????${prefix}kalashnikov
   ????????????????${prefix}lenin
   ????????????????${prefix}nikitakhrushchev
   ????????????????${prefix}unisoviet
   ????????????????${prefix}yurigagarin
   ????????????????${prefix}andreigromyko
   ????????????????${prefix}YAK-3
   ????????????????${prefix}T-34
   ????????????????${prefix}YAK-9
   ????????????????${prefix}ak47
   ????????????????${prefix}LA-7
   ????????????????${prefix}katyusha
   ????????????????${prefix}rpg-7
   ????????????????${prefix}mig-15
   ???
   ???  *RANDOM TEXT*
   ???
   ????????????????${prefix}quotes
   ????????????????${prefix}quotesanime
   ????????????????${prefix}dilan
   ????????????????${prefix}quotesimage
   ????????????????${prefix}faktaunik
   ????????????????${prefix}katabijak
   ????????????????${prefix}katabucin
   ????????????????${prefix}bucin
   ????????????????${prefix}islami
   ????????????????${prefix}pantun
   ????????????????${prefix}animesaran
   ???
   ???   *TTP MENU*
   ???
   ????????????????${prefix}ttp
   ????????????????${prefix}ttp2
   ????????????????${prefix}ttp3
   ????????????????${prefix}ttp4
   ????????????????${prefix}attp
   ???
   ???*BERITA MENU*
   ???
   ????????????????${prefix}tribunews
   ????????????????${prefix}liputan6
   ????????????????${prefix}foxnews
   ????????????????${prefix}newsinfo
   ???
   ???*NSFW MENU*
   ???
   ????????????????${prefix}waifu
   ???
   ???*ANIME MENU*
   ??? 
   ????????????????${prefix}dewabatch
   ????????????????${prefix}neonime
   ????????????????${prefix}samehadaku
   ????????????????${prefix}loli
   ????????????????${prefix}animeboy
   ????????????????${prefix}animegirl
   ????????????????${prefix}waifu
   ???
   ???*RANDOM IMAGE MENU*
   ????????????????${prefix}ww2
   ????????????????${prefix}anjing
   ????????????????${prefix}antifirtex
   ????????????????${prefix}afk
   ????????????????${prefix}unafk
   ????????????????${prefix}kucing
   ????????????????${prefix}doraemon
   ????????????????${prefix}hamster
   ????????????????${prefix}kelinci
   ???
   ???*OTHER MENU*
   ???
   ??????${prefix}simplemenu
   ??????${prefix}soundlist
   ??????${prefix}zainoperator
   ?????????????????????????????????????????????
` 

                    muzhamz.sendMessage(from, wew, image, { quoted: mek, caption: mzzain })
					break
//============================Batas Aman============================\\
//Matematika
                case 'perkalian':
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
			    var gh = body.slice(11)
			    var angka1 = gh.split("x")[0];
			    var angka2 = gh.split("x")[1];
			    kali = await fetchJson(`https://leyscoders-api.herokuapp.com/api/perkalian?angka1=${angka1}&angka2=${angka2}&apikey=${LeysApi}`) 
			    hasil = `*??? PERKALIAN ???*\n\nHasil dari perkalian ${angka1}x${angka2} :\n${kali.result}`
                muzhamz.sendMessage(from, hasil, text, {quoted: mek}) 
                break
          case 'bukatime':
		case 'opentime': 
					if (!isRegistered) return reply(ind.noregis())
                if (!isGroupAdmins) return reply(ind.admin())
              muzhamz.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `*??????????????? ???????????????* ?????????? ???????????????? ?????????? ????????????? @${nomor.split("@s.whatsapp.net")[0]}\n????????????????????? *????????????????* ??????????????? ??????????????????? ??????????????`,
					contextInfo: { mentionedJid: [nomor] }
					}
					muzhamz.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
				case 'tutuptime': //by ??????R????????~F???????????????
              muzhamz.updatePresence(from, Presence.composing) 
		if (!isRegistered) return reply(ind.noregis())
		if (!isGroupAdmins) return reply(ind.admin())
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					muzhamz.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
			    case 'rumuspersegipanjang':
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
			    var gh = body.slice(21)
			    var panjang = gh.split("/")[0];
			    var lebar = gh.split("/")[1];
			    mtk = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppanjang?pjg=${panjang}&lebar=${lebar}&apikey=${LeysApi}`) 
			    yogi = `*??? RUMUS PERSEGI PANJANG ???*\n\nRumus keliling :\n${mtk.rumus_keliling}\n\nHasil keliling : ${mtk.hasil_keliling}\n??????????????????\nRumus luas :\n${mtk.rumus_luas}\n\nHasil luas : ${mtk.hasil_luas}`
                muzhamz.sendMessage(from, yogi, text, {quoted: mek}) 
                break
                case 'rumuspersegi':
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
			    mtk = await fetchJson(`https://leyscoders-api.herokuapp.com/api/persegi?sisi=${body.slice(14)}&apikey=${LeysApi}`) 
			    yogi = `*??? RUMUS PERSEGI ???*\n\nRumus keliling :\n${mtk.rumus_keliling}\n\nHasil keliling : ${mtk.hasil_keliling}\n??????????????????\nRumus luas :\n${mtk.rumus_luas}\n\nHasil luas : ${mtk.hasil_luas}`
                muzhamz.sendMessage(from, yogi, text, {quoted: mek}) 
                break
                case 'kuadrat':
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
			    mtk = await fetchJson(`https://leyscoders-api.herokuapp.com/api/bdr/kuadrat?q=${body.slice(9)}&apikey=${LeysApi}`) 
			    yogi = `*??? KUADRAT ???*\n\nKuadrat dari ${body.slice(9)} adalah : ${mtk.result}`
                muzhamz.sendMessage(from, yogi, text, {quoted: mek}) 
                break
 //============================Batas Aman============================\\
 //============================Batas Aman============================\\
//mediamenu
            
			case 'stiker': 
			case 'sticker':
			case 's':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await muzhamz.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								muzhamz.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await muzhamz.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								muzhamz.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
			    break
		
			case 'ubahstk':
			
			  if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await muzhamz.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								muzhamz.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await muzhamz.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								muzhamz.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
				
			
			
			break
		
			case 'heroml':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
				cuk = await fetchJson(`http://docs-jojo.herokuapp.com/api/heroml?hero=alucard`) 
				buffer = await getBuffer(cuk.result.hero.img) 
				ml = `*??? HERO ML ???*\n\nNama : ${cuk.result.hero.name}\nQuotes : ${cuk.result.hero.quotes}\nRole : ${cuk.result.hero.role}\nRelease : ${cuk.result.hero.release_date}\nSpeciality : ${cuk.result.hero.release_date}`
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: ml}) 
				break

case 'trendtwit':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
muzhamz.updatePresence(from, Presence.composing) 
data = await fetchJson(`http://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
teks = '=====================\n'
for (let i of data.result) {
teks += `*Hastag* : ${i.hastag}\n*Peringkat* : ${i.rank}\n*Tweet* : ${i.tweet}\n*Link* : ${i.link}\n=====================\n`
					}
					reply(teks.trim())
					break

case 'cersex':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
reply(ind.wait()) 
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=ORFVUMC`) 
buffer = await getBuffer(anu.gambar) 
s3x = `*[ CERITA S3X ]*\n\n\nCerita : ${anu.result}`
muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: s3x})
break
                case 'gtts':
		        case 'tts':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return muzhamz.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return muzhamz.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! ????')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							muzhamz.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
			    break
			    case 'darkjokes1': 
				 // Fix Bug By RzkyO				
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=muzharzain`, {method: 'get'})
				muzhamz.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
                case 'darkjokes':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				 data = fs.readFileSync('./lib/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 muzhamz.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`DARK JOKES\`\`\`'})
				break
				

				case 'memeindo': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`http://api.lolhuman.xyz/api/meme/memeindo?apikey=muzharzain`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'tribunews':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			    case 'liputan6': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'foxnews': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'nickff': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'newsinfo': 
					// Fix Case By Yogi/Hans???
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/newsinfo?apikey=muzharzain`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Source:* : ${i.source.name}\n*Author* : ${i.author}\n*Title* : ${i.title}\n*Description* : ${i.description}\n*Url* : ${i.url}\n*Published At* : ${i.publishedAt}\n*Content* : ${i.content}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					
					case 'pinterest':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*`})
					await limitAdd(sender)
					break 
					case 'jadwaltv':
					 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(10)					
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${gatauda}&apikey=apivinz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'igstalk':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hmm = await fetchJson(`http://zekais-api.herokuapp.com/igs?username=${body.slice(9)}`)
					buffer = await getBuffer(hmm.data.profilehd)
					hasil = `Fullname : ${hmm.data.fullname}\nPengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.is_verified}\nbio : ${hmm.data.bio}`
					muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break
//=====================================BATES NGAB=====================================\\
//leveling
                  case 'mining':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
//=====================================BATES NGAB=====================================\\
//film menu
                 case 'film': 	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film2': 	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'searchfilm':
               
                pshh = `${body.slice(12)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=apivinz`, {method: 'get'})
                  puree = '======================\n'
                  for (let plyll of anu.result){
                  puree += `??? *Judul:* ${plyll.title}\n??? *Link:* ${plyll.url}\n=====================\n`
                  }
                  reply(puree.trim())
                  break
                  case 'filmapikterbaru':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'filmapikdrama':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
//=====================================BATES NGAB=====================================\\
// Mbih
case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await muzhamz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							muzhamz.sendMessage(_.jid, buff, image, {caption: `*??? BC GROUP ???*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*??? BC GROUP ???*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break
//islammenu
                case 'tahlil': 
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/tahlil?apikey=${muzharzain}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\n*Arab* : ${i.arabic}\n*Terjemah* : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
               case 'jadwalsholat':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
		        case 'ayatkursi': 
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/ayatkursi?apikey=muzharzain`)
				teks = `??? *Arab* : ${anu.result.data.arabic}\n*??? Latin :* ${anu.result.data.latin}\n*??? Arti :* ${anu.result.data.translation}\n*??? Tafsir :* ${anu.result.data.tafsir}`
				muzhamz.sendMessage(from, teks, text, {quoted: mek})
				break
				 	case 'doaharian': 
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				muzhamz.updatePresence(from, Presence.composing) 
				reply(ind.wait())
				zein = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/doaharian?apikey=${muzharzain}`, {method: 'get'})
				teks = '=================\n'
				for (let i of zein.result.data) {
					teks += `*Nama Doa:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		        case 'niatsholat':  
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/niatshalat?apikey=muzharzain`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		        case 'bacaansholat': 
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/bacaanshalat?apikey=muzharzain`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
//=====================================BATES NGAB=====================================\\
//groupmenu
                case 'nobadword':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                badword.push(from)
                fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Enable!`)
              	} else if (args[0] === '0') {
                badword.splice(from, 1)
                fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Disable`)
                } else {
                reply(ind.satukos())
                }
                break
		
                case 'mutual':
                // SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: ????\n*${prefix}next* ??? find a new partner`)
				await limitAdd(sender)
				break
		        case 'next':
                // SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: ????\n*${prefix}next* ??? find a new partner`)
				await limitAdd(sender)
				break
				case 'setname':
		        if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				muzhamz.groupUpdateSubject(from, `${body.slice(9)}`)
				muzhamz.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
				break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                muzhamz.groupUpdateDescription(from, `${body.slice(9)}`)
                muzhamz.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
                break
                case 'demote':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                muzhamz.groupDemoteAdmin(from, mentioned)
                } else {
                mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
                muzhamz.groupDemoteAdmin(from, mentioned)
                }
                break
			    case 'promote':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Selamat* ???? *Anda naik menjadi admin group* ???? :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                muzhamz.groupMakeAdmin(from, mentioned)
                } else {
                mentions(`*Selamat* ???? @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* ????`, mentioned, true)
                muzhamz.groupMakeAdmin(from, mentioned)
                }
                break
		        case 'kick':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('???????????? ???????????????????????? ?????????????? ???????????????????? ???????? ????????????????????????????!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Asek jatah kick, otw kick* ???? :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                muzhamz.groupRemove(from, mentioned)
                } else {
                mentions(`*Asek jatah kick, otw kick* @${mentioned[0].split('@')[0]} ????`, mentioned, true)
                muzhamz.groupRemove(from, mentioned)
                }
                break
		        case 'listadmin':
                if (!isGroup) return reply(ind.groupo())
                teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                no = 0
                for (let admon of groupAdmins) {
                no += 1
                teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                }
                mentions(teks, groupAdmins, true)
                break			
                case 'blockk':
				muzhamz.updatePresence(from, Presence.composing) 
				muzhamz.chatRead (from)
                if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
                muzhamz.blockUser (`${body.slice(8)}@c.us`, "add")
                muzhamz.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
                break
	        	
		        case 'unblock':
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
			    muzhamz.blockUser (`${body.slice(9)}@c.us`, "remove")
                muzhamz.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
                break
		        case 'leave':
                // SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
                setTimeout( () => {
                muzhamz.groupLeave (from) 
                }, 2000)
                setTimeout( () => {
                muzhamz.updatePresence(from, Presence.composing) 
                muzhamz.sendMessage(from, 'Bye cuk????', text) // ur cods
                }, 0)
                break
                case 'linkgc':
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await muzhamz.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				muzhamz.sendMessage(from, yeh, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'hidetag':
                // SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                var value = body.slice(9)
                var group = await muzhamz.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                muzhamz.sendMessage(from, options, text)
                await limitAdd(sender)
                break
                case 'level':
                // SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `??? *LEVEL*\n  ?????? ??? *Name* : ${pushname}\n  ?????? ??? *Nomor* : ${sender.split("@")[0]}\n  ?????? ??? *User XP* : ${userXp}/${requiredXp}\n  ?????? ??? *User Level* : ${userLevel}\n`
                muzhamz.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                console.error(err)
                await reply(`Error!\n${err}`)
                })
                break
		        case 'grup':
		        case 'group':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args[0] === 'buka') {
				reply(`*BERHASIL MEMBUKA GROUP*`)
                muzhamz.groupSettingChange(from, GroupSettingChange.messageSend, false)
                } else if (args[0] === 'tutup') {
                reply(`*BERHASIL MENUTUP GROUP*`)
				muzhamz.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
                case 'simih':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
				samih.push(from)
				fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
				reply('Sukses mengaktifkan mode simi di group ini ??????')
				} else if (Number(args[0]) === 0) {
				samih.splice(from, 1)
				fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
				reply('Sukes menonaktifkan mode simi di group ini ??????')
				} else {
				reply(ind.satukos())
				}
				break
		        case 'nsfw':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
				nsfw.push(from)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes mengaktifkan mode nsfw di group ini ??????')
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes menonaktifkan mode nsfw di group ini ??????')
				} else {
				reply(ind.satukos())
				}
				break
				case 'leveling':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (args[0] === '1') {
				if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
				_leveling.push(from)
				fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
				reply('Sukes mengaktifkan mode leveling di group ini ???')
				} else if (args[0] === '0') {
				_leveling.splice(from, 1)
				fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
				reply('Sukes menonaktifkan mode leveling di group ini ???')
				} else {
				reply(ind.satukos())
				}
				break
				case 'welcome':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
				welkom.push(from)
				fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
				reply('??? SUCCSESS ??? mengaktifkan fitur welcome di group ini')
				} else if (Number(args[0]) === 0) {
				welkom.splice(from, 1)
				fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
				reply('??? SUCCSESS ??? menonaktifkan fitur welcome di group ini')
				} else {
				reply(ind.satukos())
				}
				break
                case 'antilink':
		        if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())					
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isAntiLink) return reply('UDAH NYALA KAK')
				antilink.push(from)
				fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
				reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP')
				muzhamz.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
				} else if (Number(args[0]) === 0) {
				if (!isAntiLink) return reply('EMANG AKTIF?')
				var ini = anti.botLangsexOf(from)
				antilink.splice(ini, 1)
				fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
				reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
				} else {
				reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
				}
				break
                case 'event':
			    if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isEventon) return reply('*SUDAH AKTIF* !!!')
				event.push(from)
				fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
				reply('Sukes mengaktifkan mode event di group ini ???')
				} else if (Number(args[0]) === 0) {
				event.splice(from, 1)
				fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
				reply('Sukes menonaktifkan mode event di group ini ???')
				} else {
				reply(ind.satukos())
				}
				break
				case 'clone':
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerg()) 
				if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('??? SUCCSESS ???')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
				pp = await muzhamz.getProfilePicture(id)
				buffer = await getBuffer(pp)
				muzhamz.updateProfilePicture(botNumber, buffer)
				mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
				} catch (e) {
				reply(ind.stikga())
				}
				await limitAdd(sender)
				break
				
//=====================================BATES NGAB=====================================\\
//sertifikatmenu
                case 'anakharamserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}anakharamserti SR.BOT???*`)
				reply(ind.wait())
				ct = body.slice(15)
				zhain = await getBuffer(`https://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'hekelserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}hekel SR.BOT???*`)
				reply(ind.wait())
				ct = body.slice(11)
				zhain = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'babuserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}babu SR.BOT???*`)
				reply(ind.wait())
				ct = body.slice(10)
				zhain = await getBuffer(`https://onlydevcity.xyz/BabuSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break

				case 'ffserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti SR.BOT???`)
				reply(ind.wait())
				ct = body.slice(8)
				zhain = await getBuffer(`https://onlydevcity.xyz/EpepSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'bucinserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti SR.BOT???`)
				reply(ind.wait())
				ct = body.slice(11)
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=muzharzain&name=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'bocilepepserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti SR.BOT???`)
				reply(ind.wait())
				ct = body.slice(15)
				zhain = await getBuffer(`https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'gayserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti SR.BOT???`)
				reply(ind.wait())
				ct = body.slice(9)
				zhain = await getBuffer(`https://onlydevcity.xyz/GaySerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'pacarserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti SR.BOT???`)
				reply(ind.wait())
				ct = body.slice(11)
				zhain = await getBuffer(`https://onlydevcity.xyz/PacarSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'sadboyserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti SR.BOT???`)
				reply(ind.wait())
				ct = body.slice(12)
				zhain = await getBuffer(`https://onlydevcity.xyz/SadBoySerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
			case 'infogc':
			case 'grouplist':
			  if (!isRegistered) return reply( ind.noregis())
					muzhamz.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group SR BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					muzhamz.sendMessage(from, teks.trim(), extendedText, {quoted: iky})
				break
				case 'surgaserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti SR.BOT???`)
				reply(ind.wait())
				ct = body.slice(11)
				zhain = await getBuffer(`https://onlydevcity.xyz/SurgaSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'pinterserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti SR.BOT???`)
				reply(ind.wait())
				ct = body.slice(12)
				zhain = await getBuffer(`https://onlydevcity.xyz/PintarSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'badgirlserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/BadGirlSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'badboyserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badboyserti SR.BOT???`)
				reply(ind.wait())
				ct = body.slice(12)
				zhain = await getBuffer(`https://onlydevcity.xyz/BadBoySerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'goodgirlserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(14)
				zhain = await getBuffer(`https://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'goodboyserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodboyserti SR.BOT???`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/GoodBoySerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'editodberkelasserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}editodberkelasserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(20)
				zhain = await getBuffer(`https://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'goodlookingserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodlookingserti SR.BOT???`)
				reply(ind.wait())
				ct = body.slice(17)
				zhain = await getBuffer(`https://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'fucekboyserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti SR.BOT???`)
				reply(ind.wait())
				ct = body.slice(14)
				zhain = await getBuffer(`https://onlydevcity.xyz/FucekBoySerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'jametserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(11)
				zhain = await getBuffer(`https://onlydevcity.xyz/JametSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'youtuberserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}youtuberserti SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(14)
				zhain = await getBuffer(`https://onlydevcity.xyz/YoutuberSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				
			break
                  case 'wait':
			
				break
					case 'quotemaker': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(12)
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/quotemaker?apikey=muzharzain&text=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'quotemaker2': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti SR.BOT/NGAB`)
				reply(ind.wait())
				ct = body.slice(12)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/quotemaker2?apikey=muzharzain&text=${zha1}&author=${zha2}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'fftourserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(12)
				zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'fftourserti2': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti2 SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'fftourserti3': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti3 SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'fftourserti4': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti4 SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'fftourserti5': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti5 SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
					case 'tololserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(12)
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=muzharzain&name=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'fuckboyserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(12)
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/fuckboy?apikey=muzharzain&name=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'fuckgirlserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(12)
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/fuckgirl?apikey=muzharzain&name=${ct}`)
					muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'mltourserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(12)
				zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'mltourserti2': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti2 SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'mltourserti3': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti3 SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'mltourserti4': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti4 SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'mltourserti5': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti5 SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(13)
				zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'pubgtourserti': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(14)
				zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'pubgtourserti2': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti2 SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(15)
				zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'pubgtourserti3': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti3 SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(15)
				zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'pubgtourserti4': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti4 SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(15)
				zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
				case 'pubgtourserti5': 				
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti5 SR.BOT???NGAB`)
				reply(ind.wait())
				ct = body.slice(15)
				zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
				break
//=====================================BATES NGAB=====================================\\
//animemenu
                     case 'waifu':
                     if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    anu = await fetchJson(`https://arugaz.herokuapp.com/api/waifu`)
				  	buf = await getBuffer(anu.image)
				 	texs = ` *anime name* : ${anu.name} \n*deskripsi* : ${anu.desc} \n*source* : ${anu.source}`
				   	muzhamz.sendMessage(from, buf, image, { quoted: mek, caption: `${texs}`})
				    break
					case 'animeboy':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20boy`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'samehadaku':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
reply(ind.wait()) 
anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/samehadaku?q=${body.slice(12)}`) 
buffer = await getBuffer(anu.thumb) 
yogigans = `*[ SAMEHADAKU ]*\n\n\nJudul : ${anu.title}\nDesc : ${anu.desc}\nLink : ${anu.link}`
muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: yogigans})
break
case 'neonime':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
muzhamz.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
teks = '=====================\n'
for (let i of data.result) {
teks += `*Title* : ${i.judul}\n*Link* : ${i.link}\n*Release* : ${i.rilis}\n=====================\n`
					}
					reply(teks.trim())
					break
					case 'dewabatch':
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
				anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/dewabatch?q=${body.slice(11)}`) 
				buffer = await getBuffer(anu.thumb) 
			    yogi = `*??? DEWABATCH ???*\n\n${anu.result}\n\nSinopsis : ${anu.sinopsis}`
			    muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: yogi})
			    break
					case 'animegirl':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20girl`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
				    case 'animeimg':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
				    case 'loli':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=loli`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
                	case 'dewabatch':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    teks = body.slice(11)
                    anu = await fetchJson(`https://arugaz.herokuapp.com/api/dewabatch?q=${teks}` , {method: 'get'})
                    thum = await getBuffer(anu.thumb)
                    muzhamz.sendMessage(from, thum, image, {quoted: mek, caption: `${anu.result}`})
                 	break
//=====================================BATES NGAB=====================================\\
//soundmenu
	case 'home':
const home = fs.readFileSync('mp3/home.mp3')
muzhamz.sendMessage(from, home, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('mp3/gettingold.mp3')
muzhamz.sendMessage(from, getting, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tapi':
const tapi = fs.readFileSync('mp3/tapi.mp3')
muzhamz.sendMessage(from, tapi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'boong':
const boong = fs.readFileSync('mp3/boong.mp3')
muzhamz.sendMessage(from, boong, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'iri':
const iri = fs.readFileSync('mp3/iri.mp3')
muzhamz.sendMessage(from, iri, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'magic':
const magic = fs.readFileSync('mp3/magic.mp3')
muzhamz.sendMessage(from, magic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'menyukaiku':
const menyukaiku = fs.readFileSync('mp3/menyukaiku.mp3')
muzhamz.sendMessage(from, menyukaiku, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sad':
const sad1 = fs.readFileSync('mp3/sad.mp3')
muzhamz.sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('mp3/sad2.mp3')
muzhamz.sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('mp3/sad3.mp3')
muzhamz.sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('mp3/sad4.mp3')
muzhamz.sendMessage(from, sad4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('mp3/aeshtetic.mp3')
muzhamz.sendMessage(from, tetik, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('mp3/aeshtetic2.mp3')
muzhamz.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('mp3/aeshtetic3.mp3')
muzhamz.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('mp3/aeshtetic4.mp3')
muzhamz.sendMessage(from, tetik4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('mp3/allnight.mp3')
muzhamz.sendMessage(from, allnight, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'lucas':
const lucas = fs.readFileSync('mp3/lucas.mp3')
muzhamz.sendMessage(from, lucas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sowell':
const well = fs.readFileSync('mp3/sowell.mp3')
muzhamz.sendMessage(from, well, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('mp3/wanna.mp3')
muzhamz.sendMessage(from, wanna, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('mp3/up.mp3')
muzhamz.sendMessage(from, ups, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('mp3/yourskin.mp3')
muzhamz.sendMessage(from, skin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('mp3/cutmeoff.mp3')
muzhamz.sendMessage(from, moff, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('mp3/beautiful.mp3')
muzhamz.sendMessage(from, ful, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('mp3/loosinggame.mp3')
muzhamz.sendMessage(from, gam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('mp3/loosinginterest.mp3')
muzhamz.sendMessage(from, rest, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('mp3/playdate.mp3')
muzhamz.sendMessage(from, date, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('mp3/ayatkursi2.mp3')
muzhamz.sendMessage(from, kursi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alkahfi':
alkahfi = fs.readFileSync('mp3/alkahfi.mp3')
muzhamz.sendMessage(from, alkahfi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yasin':
yasin = fs.readFileSync('mp3/yasin.mp3')
muzhamz.sendMessage(from, yasin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'arrahman':
arrahman = fs.readFileSync('mp3/arrahman.mp3')
muzhamz.sendMessage(from, arrahman, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('mp3/tilawah.mp3')
muzhamz.sendMessage(from, tilawah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'annas':
annas = fs.readFileSync('mp3/annas.mp3')
muzhamz.sendMessage(from, annas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alfalaq':
alfalaq = fs.readFileSync('mp3/alfalaq.mp3')
muzhamz.sendMessage(from, alfalaq, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alIkhlas':
alIkhlas = fs.readFileSync('mp3/alIkhlas.mp3')
muzhamz.sendMessage(from, alIkhlas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'annasr':
annasr = fs.readFileSync('mp3/annasr.mp3')
muzhamz.sendMessage(from, annasr, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alkafirun':
alkafirun = fs.readFileSync('mp3/alkafirun.mp3')
muzhamz.sendMessage(from, alkafirun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'allahab':
allahab = fs.readFileSync('mp3/allahab.mp3')
muzhamz.sendMessage(from, allahab, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alkautsar':
alkautsar = fs.readFileSync('mp3/alkautsar.mp3')
muzhamz.sendMessage(from, alkautsar, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'allail':
allail = fs.readFileSync('mp3/allail.mp3')
muzhamz.sendMessage(from, allail, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'albayyinah':
albayyinah = fs.readFileSync('mp3/albayyinah.mp3')
muzhamz.sendMessage(from, albayyinah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alInsyiqaq':
alInsyiqaq = fs.readFileSync('mp3/alInsyiqaq.mp3')
muzhamz.sendMessage(from, alInsyiqaq, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'alfil':
alfil = fs.readFileSync('mp3/alfil.mp3')
muzhamz.sendMessage(from, alfil, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'almaun':
almaun = fs.readFileSync('mp3/almaun.mp3')
muzhamz.sendMessage(from, almaun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alhumazah':
alhumazah = fs.readFileSync('mp3/alhumazah.mp3')
muzhamz.sendMessage(from, alhumazah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alashr':
alashr = fs.readFileSync('mp3/alashr.mp3')
muzhamz.sendMessage(from, alashr, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alqadr':
alqadr = fs.readFileSync('mp3/alqadr.mp3')
muzhamz.sendMessage(from, alqadr, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alqariah':
alqariah = fs.readFileSync('mp3/alqariah.mp3')
muzhamz.sendMessage(from, alqariah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aladiyat':
aladiyat = fs.readFileSync('mp3/aladiyat.mp3')
muzhamz.sendMessage(from, aladiyat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alInsyirah':
alInsyirah = fs.readFileSync('mp3/alInsyirah.mp3')
muzhamz.sendMessage(from, alInsyirah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'attakatsur':
attakatsur = fs.readFileSync('mp3/attakatsur.mp3')
muzhamz.sendMessage(from, alTakatsur, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'attin':
attin = fs.readFileSync('mp3/attin.mp3')
muzhamz.sendMessage(from, attin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'adhdhuha':
adhdhuha = fs.readFileSync('mp3/adhdhuha.mp3')
muzhamz.sendMessage(from, adhdhuha, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'albalad':
albalad = fs.readFileSync('mp3/albalad.mp3')
muzhamz.sendMessage(from, albalad, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alburuj':
alburuj = fs.readFileSync('mp3/alburuj.mp3')
muzhamz.sendMessage(from, alburuj, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alfajr':
alfajr = fs.readFileSync('mp3/alfajr.mp3')
muzhamz.sendMessage(from, alfajr, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'azzalzalah':
azzalzalah = fs.readFileSync('mp3/azzalzalah.mp3')
muzhamz.sendMessage(from, azzalzalah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'assyamsy':
assyamsy = fs.readFileSync('mp3/assyamsy.mp3')
muzhamz.sendMessage(from, assyamsy, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'alfatihah':
alfatihah = fs.readFileSync('mp3/alfatihah.mp3')
muzhamz.sendMessage(from, alfatihah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'almulk':
almulk = fs.readFileSync('mp3/almulk.mp3')
muzhamz.sendMessage(from, almulk, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawatnabi':
const nabi = fs.readFileSync('mp3/sholawatnabi.mp3')
muzhamz.sendMessage(from, nabi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('mp3/ngaji.mp3')
muzhamz.sendMessage(from, ngaji1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('mp3/ngaji2.mp3')
muzhamz.sendMessage(from, ngaji2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
muzhamz.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pale = fs.readFileSync('mp3/pale.mp3')
muzhamz.sendMessage(from, pale, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('mp3/sound.mp3')
muzhamz.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'hallo':
const hallo = fs.readFileSync('./mp3/hallo.mp3')
muzhamz.sendMessage(from, hallo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
muzhamz.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
muzhamz.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
muzhamz.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
muzhamz.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
muzhamz.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
muzhamz.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
muzhamz.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
delapan = fs.readFileSync('mp3/sound8.mp3');
muzhamz.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('mp3/sound9.mp3');
muzhamz.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('mp3/sound10.mp3');
muzhamz.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('mp3/sound11.mp3');
muzhamz.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('mp3/sound12.mp3');
muzhamz.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('mp3/sound13.mp3');
muzhamz.sendMessage(from, tigabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('mp3/sound14.mp3');
muzhamz.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('mp3/sound15.mp3');
muzhamz.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('mp3/sound16.mp3');
muzhamz.sendMessage(from, enambelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('mp3/sound17.mp3');
muzhamz.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
delapanbelas = fs.readFileSync('mp3/sound18.mp3');
muzhamz.sendMessage(from, delapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('mp3/sound19.mp3');
muzhamz.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('mp3/sound20.mp3');
muzhamz.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('mp3/sound21.mp3');
muzhamz.sendMessage(from, duasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('mp3/sound22.mp3');
muzhamz.sendMessage(from, duadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('mp3/sound23.mp3');
muzhamz.sendMessage(from, duatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('mp3/sound24.mp3');
muzhamz.sendMessage(from, duaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('mp3/sound25.mp3');
muzhamz.sendMessage(from, dualima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('mp3/sound26.mp3');
muzhamz.sendMessage(from, duaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('mp3/sound27.mp3');
muzhamz.sendMessage(from, duatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('mp3/sound28.mp3');
muzhamz.sendMessage(from, duadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('mp3/sound29.mp3');
muzhamz.sendMessage(from, duasembilansembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('mp3/sound30.mp3');
muzhamz.sendMessage(from, tigapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('mp3/sound31.mp3');
muzhamz.sendMessage(from, tigasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('mp3/sound32.mp3');
muzhamz.sendMessage(from, tigadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('mp3/sound33.mp3');
muzhamz.sendMessage(from, tigatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('mp3/sound34.mp3');
muzhamz.sendMessage(from, tigaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('mp3/sound35.mp3');
muzhamz.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('mp3/sound36.mp3');
muzhamz.sendMessage(from, tigaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('mp3/sound37.mp3');
muzhamz.sendMessage(from, tigatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('mp3/sound38.mp3');
muzhamz.sendMessage(from, tigadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('mp3/sound39.mp3');
muzhamz.sendMessage(from, tigasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('mp3/sound40.mp3');
muzhamz.sendMessage(from, empatpuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('mp3/sound41.mp3');
muzhamz.sendMessage(from, empatsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('mp3/sound42.mp3');
muzhamz.sendMessage(from, empatdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('mp3/sound43.mp3');
muzhamz.sendMessage(from, empattiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('mp3/sound44.mp3');
muzhamz.sendMessage(from, empatempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('mp3/sound45.mp3');
muzhamz.sendMessage(from, empatlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('mp3/sound46.mp3');
muzhamz.sendMessage(from, empatenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('mp3/sound47.mp3');
muzhamz.sendMessage(from, empattujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('mp3/sound48.mp3');
muzhamz.sendMessage(from, empatdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('mp3/sound49.mp3');
muzhamz.sendMessage(from, empatsembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('mp3/sound50.mp3');
muzhamz.sendMessage(from, limapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound51':
limasatu = fs.readFileSync('mp3/sound51.mp3');
muzhamz.sendMessage(from, limasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound52':
limadua = fs.readFileSync('mp3/sound52.mp3');
muzhamz.sendMessage(from, limadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound53':
limatiga = fs.readFileSync('mp3/sound53.mp3');
muzhamz.sendMessage(from, limatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound54':
limaempat = fs.readFileSync('mp3/sound54.mp3');
muzhamz.sendMessage(from, limaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound55':
limalima = fs.readFileSync('mp3/sound55.mp3');
muzhamz.sendMessage(from, limalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound56':
limaenam = fs.readFileSync('mp3/sound56.mp3');
muzhamz.sendMessage(from, limaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound57':
limatujuh = fs.readFileSync('mp3/sound57.mp3');
muzhamz.sendMessage(from, limatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound58':
limadelapan = fs.readFileSync('mp3/sound58.mp3');
muzhamz.sendMessage(from, limadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound59':
limasembilan = fs.readFileSync('mp3/sound59.mp3');
muzhamz.sendMessage(from, limasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound60':
enampuluh = fs.readFileSync('mp3/sound60.mp3');
muzhamz.sendMessage(from, enampuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound61':
enamsatu = fs.readFileSync('mp3/sound61.mp3');
muzhamz.sendMessage(from, enamsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound62':
enamdua = fs.readFileSync('mp3/sound62.mp3');
muzhamz.sendMessage(from, enamdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound63':
enamtiga = fs.readFileSync('mp3/sound63.mp3');
muzhamz.sendMessage(from, enamtiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound64':
enamempat = fs.readFileSync('mp3/sound64.mp3');
muzhamz.sendMessage(from, enamempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
enamlima = fs.readFileSync('mp3/sound65.mp3');
muzhamz.sendMessage(from, enamlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
enamenam = fs.readFileSync('mp3/sound66.mp3');
muzhamz.sendMessage(from, enamenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound67':
enamtujuh = fs.readFileSync('mp3/sound67.mp3');
muzhamz.sendMessage(from, enamtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound68':
enamdelapan = fs.readFileSync('mp3/sound68.mp3');
muzhamz.sendMessage(from, enamdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound69':
enamsembilan = fs.readFileSync('mp3/sound69.mp3');
muzhamz.sendMessage(from, enamsembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound70':
tujuhpuluh = fs.readFileSync('mp3/sound10.mp3');
muzhamz.sendMessage(from, tujuhpuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound71':
tujuhsatu = fs.readFileSync('mp3/sound10.mp3');
muzhamz.sendMessage(from, tujuhsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'slowmo':
				
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await muzhamz. downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				muzhamz. sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await muzhamz. downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						muzhamz. sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemok':
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await muzhamz. downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						muzhamz. sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await muzhamz. downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						muzhamz. sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
//=====================================BATES NGAB=====================================\\
//funmenu
                case 'bisakah':
					// SR.BOT [JASA SEWA]

                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					muzhamz.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'kapankah':
					// SR.BOT [JASA SEWA]

                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					muzhamz.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'apakah':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					muzhamz.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'bagaimanakah':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					muzhamz.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'rate':
					// SR.BOT [JASA SEWA]

                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					muzhamz.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'sangecek':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					muzhamz.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'gaycek':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					muzhamz.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'lesbicek':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					muzhamz.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'gantengcek':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					muzhamz.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'cantikcek':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					muzhamz.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'watak':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					muzhamz.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
		         case 'hobby':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					muzhamz.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'jadian':
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ?????? @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
					case 'beban':
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdoo = groupMembers
					const kposs = groupMembers
					const akii = jdoo[Math.floor(Math.random() * jdoo.length)]
					teks = `Nih beban Grup@${akii.jid.split('@')[0]}`
					jds.push(akii.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
					               case 'putus':
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdip = groupMembers
					const kosp = groupMembers
					const akup = jdip[Math.floor(Math.random() * jdip.length)]
					const diap = kosp[Math.floor(Math.random() * kosp.length)]
					teks = `Cie Yang jadi kenangan ups mantan canda mantan @${akup.jid.split('@')[0]} ??????? @${diap.jid.split('@')[0]} `
					jds.push(akup.jid)
					jds.push(diap.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
					
          case 'ngewe':
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan??? @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case 'terganteng':
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case 'tercantik':
				// SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
				case 'caklontong':
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kuis/caklontong?apikey=muzharzain`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					muzhamz.sendMessage(from, '*??? Jawaban :* '+anu.result.jawaban+ '\n\n??? Penjelasan: *'+ anu.result.desk+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					muzhamz.sendMessage(from, '_10 Detik lagi???_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					muzhamz.sendMessage(from, '_20 Detik lagi_???', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					muzhamz.sendMessage(from, '_30 Detik lagi_???', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					muzhamz.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
			        case 'family100':
                    if (!isRegistered) return reply(ind.noregis())
		            if (isLimit(sender)) return reply(ind.limitend(pusname))
	      	        
					anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/family100?apikey=muzharzain`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					muzhamz.sendMessage(from, '*??? Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					muzhamz.sendMessage(from, '_10 Detik lagi???_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					muzhamz.sendMessage(from, '_20 Detik lagi_???', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					muzhamz.sendMessage(from, '_30 Detik lagi_???', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					muzhamz.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 

					break 
					
				    case 'tebakgambar':
				    if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kuis/tebakgambar?apikey=muzharzain`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.images)
					tebak = `??? Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					muzhamz.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					muzhamz.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					muzhamz.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					muzhamz.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					muzhamz.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
			
					case 'truth':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					muzhamz.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
		            case 'dare':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "????????" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					muzhamz.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break
//=====================================BATES NGAB=====================================\\
//DOWNLOAD MENU
                case 'ytmp4':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					muzhamz.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					muzhamz.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
				break 
				case 'ytmp3':
                    if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					muzhamz.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					muzhamz.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break
//=====================================BATES NGAB=====================================\\
//RANDOM IMAGE
                 case 'freefireimg':
                  if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=freefire`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					case 'ww2':
					
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ww2`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
					
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break

                case 'kucing':
					
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'doraemon':
					
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'hamster':
					
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kelinci':
					
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
//=====================================BATES NGAB=====================================\\
//image edit menu
case 'wanted':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksiwajah':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=muzharzain&img=${anu.display_url}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
		case 'removebg':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://api.lolhuman.xyz/api/removebg?apikey=muzharzain&img=${anu.display_url}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksigender':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJso(`https://api.lolhuman.xyz/api/genderdetect?apikey=muzharzain&img=${anu.display_url}`)
	  gender = `[ DETEKSI GENDER ] \nMenurut bot.. seseorang di gambar bergender = *${hehe.result}*\n\nFEMALE = PEREMPUAN\nMALE = LAKI-LAKI`
	 muzhamz.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksiumur':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=muzharzain&img=${anu.display_url}`)
	  gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	 muzhamz.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
case 'triggered':
case 'pencil':
case 'wasted':
case 'fisheye':
case 'skullmask':
case 'alien':
case 'tosmile':
case 'invert':
case 'pixelate':
case 'deepfry':
		if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://api.lolhuman.xyz/api/editor/${command}?apikey=muzharzain&img=${anu.display_url}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case '1977':
	case 'aden':
	case 'brannan':
	case 'brooklyn':
	case 'clarendon':
	case 'gingham':
	case 'husdon':
	case 'inkawell':
	case 'earlybird':
	case 'kelvin':
	case 'lark':
	case 'lofi':
	case 'maven':
	case 'myfair':
	case 'moon':
	case 'nashville':
	case 'perpetua':
	case 'reyes':
	case 'slumber':
	case 'rise':
	case 'toaster':
	case 'valencia':
	case 'walden':
	case 'willow':
	case 'xpro2':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await muzhamz.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.jpg')
                        request({
                            url: `https://api.lolhuman.xyz/api/filter/${command}?apikey=muzharzain`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(ran, body, "binary")
                            ini_buff = fs.readFileSync(ran)
                            muzhamz.sendMessage(from, ini_buff, image, { quoted: mek }).then(() => {
                                fs.unlinkSync(ran)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break

	case 'gtav':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'facebookpage':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pensil':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break 
	case 'bakar':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'hitler':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/hitler?url=${anu.display_url}&apikey=${LeysApi}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'trash':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${anu.display_url}&apikey=${LeysApi}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'picture':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${anu.display_url}&apikey=${LeysApi}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'blur':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${anu.display_url}&apikey=${LeysApi}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'invert':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${anu.display_url}&apikey=${LeysApi}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'meme':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  ct = body.slice(6)
	  atas = ct.split("/")[0];
      bawah = ct.split("/")[1];
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://docs-jojo.herokuapp.com/api/meme-gen?top=${atas}&bottom=${bawah}&img=${anu.display_url}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break

                    // sovietmenu //
               // CASE SOVIET MENU IMAGE
					case 'lenin':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=lenin`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'kalashnikov':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kalashnikov`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'unisoviet':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kalashnikov`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'nikitakhrushchev':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=nikita khrushchev`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'andreigromyko':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=andrei gromyko`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'andreigromyko':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=andrei gromyko`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'yurigagarin':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=yuri gagarin`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'T-34':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=T-34`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'YAK-3':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=YAK-3`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'YAK-9':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=YAK-9`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'LA-7':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=LA-7`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'ak47':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ak47`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'katyusha':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Katyusha`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'mig-15':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=mig-15`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'rpg-7':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rpg-7`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					muzhamz.sendMessage(from, pok, image, { quoted: mek })
					break
                    // Downloader //
                    case 'ytcari':
					
					query = args.join(" ")
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=muzharzain&query=${query}`, {method: 'get'})
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : https://youtu.be/${i.videoId}\n*Published* : ${i.published}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
                case 'ytplay':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video[0].link)
                    muzhamz.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek })
                    break
                case 'ytplay2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video)
                    muzhamz.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                    
                case 'ytmp3':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=muzharzain&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp32':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=muzharzain&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp4':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=muzharzain&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    muzhamz.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'ytmp42':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=muzharzain&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    muzhamz.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'telesticker':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=muzharzain&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        muzhamz.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                case 'tiktoknowm':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=muzharzain&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    muzhamz.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                case 'tiktokmusic':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=muzharzain&url=${ini_link}`)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
                    break
                case 'spotify':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=muzharzain&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'spotifysearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jooxplay':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
                case 'igdl':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=muzharzain&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    muzhamz.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                    break
                case 'fbdl':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=muzharzain&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    muzhamz.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                case 'zippyshare':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/zippyshare?apikey=muzharzain&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
                case 'pinterest':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=muzharzain&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pinterestdl':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterestdl?apikey=muzharzain&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pixiv':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=muzharzain&query=${query}`)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pixivdl':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=muzharzain`)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'xhamstersearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=muzharzain&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'xnxxsearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=muzharzain&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
//=====================================BATES NGAB=====================================\\
//makermenu
                case 'darkneon':
                case 'candlemug':
                case 'lovemsg':
                case 'mugflower':
                case 'narutobanner':
                case 'paperonglass':
                case 'romancetext':
                case 'shadowtext':
                case 'coffeecup':
                case 'coffeecup2':
                case 'glowingneon':
                case 'underwater':
                case 'hpotter':
                case 'woodblock':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} SR.Bot`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${txt}`)
                    muzhamz.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*_*', quoted: mek})
                break
                case 'bakarnama': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}anakharamserti SR.BOT*`)
				reply(ind.wait())
				ct = body.slice(11)
				zhain = await getBuffer(`http://zekais-api.herokuapp.com/sbburn?text=${ct}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: 'Sudah Jadi Kak' })
				break
				case 'nulis':
                //???case bye ??????ifin?????????
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis SR.BOT`)
                zhain = body.slice(6)
                reply(ind.wait())
                zein = await getBuffer(`http://zekais-api.herokuapp.com/bukukanan?text=${zhain}`)
                muzhamz.sendMessage(from, zein, image, {caption: 'Sudah Jadi Kak', quoted: mek})
                break
				case 'nulis2':
                //???case bye ??????ifin?????????
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis SR.BOT`)
                zhain = body.slice(7)
                reply(ind.wait())
                zein = await getBuffer(`http://zekais-api.herokuapp.com/bukukiri?text=${zhain}`)
                muzhamz.sendMessage(from, zein, image, {caption: 'Sudah Jadi Kak', quoted: mek})
                break
                case 'nulis3':
                //???case bye ??????ifin?????????
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis SR.BOT`)
                zhain = body.slice(7)
                reply(ind.wait())
                zein = await getBuffer(`http://zekais-api.herokuapp.com/foliokanan?text=${zhain}`)
                muzhamz.sendMessage(from, zein, image, {caption: 'Sudah Jadi Kak', quoted: mek})
                break
                case 'nulis4':
                //???case bye ??????ifin?????????
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis SR.BOT`)
                zhain = body.slice(7)
                reply(ind.wait())
                zein = await getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${zhain}`)
                muzhamz.sendMessage(from, zein, image, {caption: 'Sudah Jadi Kak', quoted: mek})
                break
                case 'attp':
                //???case bye ??????ifin?????????
			    if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}attp SR.BOT`)
                zhain = body.slice(5)
				mzha = await getBuffer(`https://api.xteam.xyz/attp?file&text=${zhain}`)
				muzhamz.sendMessage(from, mzha, sticker, {quoted: mek})
				break
                case 'logogaming':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}logogaming Srbot*`)
game = await getBuffer(`http://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(12)}`)
muzhamz.sendMessage(from, game, image, {quoted: mek})
break
                case 'gplaybutton':
                case 'splaybutton':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} SR.Bot`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    muzhamz.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*_*', quoted: mek})
                    break
         
               case 'qrencode':
                case 'barcode':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} SR.Bot`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=apivinz&text=${txt}`)
                    muzhamz.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*_*', quoted: mek})
                break
                case 'googlesearch':
			    
	        	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
		        if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlesearch Ifin|Bot|Ajg`)
				reply(ind.wait())
				ct = body.slice(14)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				zha3 = ct.split("/")[2];
				anu = await fetchJson(`https://dappuhy-apikey.herokuapp.com/api/textmaker?text=${zha1}&text2=${zha2}&text3=${zha3}&theme=google-suggestion&apikey=dappabotwa`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Sudah Jadi Kak' })
				break
				case 'pubglogo':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname)) 
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubglogo SR.BOT`)
				reply(ind.wait())
				ct = body.slice(9)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${zha1}&text2=${zha2}&theme=pubg&apikey=muzharzain`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Sudah Jadi Kak' })
				break
				case 'glitchtext':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}glitchtext SR.BOT`)
				reply(ind.wait())
				ct = body.slice(11)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker?text=${zha1}&text2=${zha2}&theme=glitch&apikey=${muzharzain}`)
				zhain = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: 'Sudah Jadi Kak' })
				break
				case 'cup':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}cup SR.BOT*`)
				reply(ind.wait())
				ct = body.slice(4)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup&apikey=muzharzain`)
				zhain = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: 'Sudah Jadi Kak' })
				break
				case 'cup2':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}cup2 SR.BOT*`)
				reply(ind.wait())
				ct = body.slice(5)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text={ct}&theme=coffee-cup2&apikey=muzharzain`)
				zhain = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: 'Sudah Jadi Kak' })
				break
				
				case 'battlefield':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}battlefield SR.BOT`)
				reply(ind.wait())
				ct = body.slice(12)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${zha1}&text2=${zha2}&theme=battlefield&apikey=${muzharzain}`)
				buffer = await getBuffer(anu.result.url)
				zhain = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: 'Sudah Jadi Kak' })
				break
				case 'hartatahta':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}hartatahta *SR.BOT*`)
				zhain = body.slice(11)
				reply(ind.wait())
				zein = await getBuffer(`http://zekais-api.herokuapp.com/hartatahta?text=${zhain}`)
				muzhamz.sendMessage(from, zein, image, {quoted: mek})
				await limitAdd(sender)
				break
					case 'customharta':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}hartatahta *SR.BOT*`)
				zhain = body.slice(12)
				reply(ind.wait())
				zein = await getBuffer(`https://api.lolhuman.xyz/api/hartacustom?apikey=muzharzain&text=${zhain}`)
				muzhamz.sendMessage(from, zein, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'harta2':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}hartatahta *SR.BOT*`)
				zhain = body.slice(11)
				reply(ind.wait())
				zein = await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=muzharzain&text=${zhain}`)
				muzhamz.sendMessage(from, zein, image, {quoted: mek})
				await limitAdd(sender)
				break
				
//=====================================BATES NGAB=====================================\\
//ownermenu
                    case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('??? SUCCSESS ??? mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('??? SUCCSESS ??? menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break

					case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await muzhamz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await muzhamz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							muzhamz.sendMessage(_.jid, buff, image, {caption: `*??? PESAN BROADCAST ???*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*??? BROADCAST SRX.BOT ???*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
					case 'block':
				 muzhamz.updatePresence(from, Presence.composing) 
				 muzhamz.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					muzhamz.blockUser (`${body.slice(7)}@c.us`, "add")
					muzhamz.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		            case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    muzhamz.blockUser (`${body.slice(9)}@c.us`, "remove")
					muzhamz.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
					case 'leave':
                 // SR.BOT [JASA SEWA]
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					muzhamz.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					muzhamz.updatePresence(from, Presence.composing) 
					muzhamz.sendMessage(from, 'BYE NGAB HATI HATI????', text) // ur cods
					}, 0)
					break
					case 'tagall':
			    if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			     if (!isRegistered) return reply(ind.noregis())
	   					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `?????? @${mem.jid.split('@')[0]} wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`??????????????? Tag By *${pushname}* ?????????`+ teks +'??????????????? SR.BOT*????????????', members_id, true)
					break
			    case 'mentionall':
			  	    if (isBanned) return reply('Maaf kamu sudah terbenned!') 
			  	     if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `?????? @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`???????????? Tag By *${pushname}* ????????????`+teks+'????????? SR.BOT* ???', members_id, true)
					break
		            case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await muzhamz.chats.all()
					muzhamz.setMaxListeners(25)
					for (let _ of anu) {
						muzhamz.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
					case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		            case 'setlimit':
		            case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		            case 'setlimitt':
		            case 'addlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		            case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		            case 'setmemlimitt':
					if (args.length < 1) return
				    if (!isAdmin) return reply('*Only Admin bot*')
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
					case 'addbadword':  // Fix Bug By SR.BOT* & IFIN*
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                    case 'delbadword':  
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                    case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					muzhamz.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await muzhamz.downloadAndSaveMediaMessage(enmedia)
					await muzhamz.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya????')
					break 
					case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		        case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
					case 'unblockk':
                if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
				muzhamz.blockUser (`${body.slice(10)}@c.us`, "remove")
                muzhamz.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
                break
		        case 'block':
				muzhamz.updatePresence(from, Presence.composing) 
				muzhamz.chatRead (from)
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
                muzhamz.blockUser (`${body.slice(7)}@c.us`, "add")
                muzhamz.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
                break
//=====================================BATES NGAB=====================================\\
//InformationMenu
                case 'infogempa': 
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=muzharzain`)
				hasil = `??? *Waktu* : ${anu.result.Waktu}\n*??? Lintang :* ${anu.result.Lintang}\n*??? Bujur :* ${anu.result.Bujur}\n*??? Magnitudo :* ${anu.result.Magnitudo}\n*??? Kedalaman :* ${anu.result.Kedalaman}\n*??? Wilayah :* ${anu.result.Wilayah}`
				muzhamz.sendMessage(from, hasil, text, {quoted: mek})
				break
				case 'kbbi':	
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))		
				if (args.length < 1) return reply('Apa yang mau dicari di kbbi kak?')
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kbbi?kata=${body.slice(6)}&apikey=muzharzain`, {method: 'get'})
				reply('Menurut Kbbi:\n\n'+anu.result.arti)
				break
				case 'kodepos': 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				muzhamz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`kotanya mana bang?`)
				reply(ind.wait())
				zein = await fetchJson(`https://zhain-apikey.herokuapp.com/api/kodepos?kota=${body.slice(8)}&apikey=syahri2k21`)
				teks = '=================\n'
				for (let i of zein.result.data) {
					teks += `*Provinsi:* : ${i.province}\n*City* : ${i.city}\n*Kecamatan* : ${i.subdistrict}\n*Kota* : ${i.urban}\n*Kode Pos* : ${i.postalcode}\n=================\n`
				}
				reply(teks)
				break
				case 'covidindo': 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				muzhamz.updatePresence(from, Presence.composing) 
				reply(ind.wait())
				zein = await fetchJson(`https://yogipw-api.herokuapp.com/api/covidindo?apikey=yogipw`, {method: 'get'})
				teks = '=================\n'
				for (let i of zein.result) {
					teks += `*Kode Provinsi:* : ${i.attributes.Kode_Provi}\n*Provinsi* : ${i.attributes.Provinsi}\n*Total Positif* : ${i.attributes.Kasus_Posi}\n*Total Sembuh* : ${i.attributes.Kasus_Semb}\n*Total Meninggal* : ${i.attributes.Kasus_Meni}\n=================\n`
				}
				reply(teks)
				break
				case 'covidglobal': 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/covidworld?apikey=syahri2k21`)
				teks = `??? *Total Cases* : ${anu.result.totalCases}\n*??? Recovered :* ${anu.result.recovered}\n*??? Deaths :* ${anu.result.deaths}\n*??? Active Cases :* ${anu.result.activeCases}\n*??? Closed Cases :* ${anu.result.closedCases}\n*??? Last Update :* ${anu.result.lastUpdate}`
				muzhamz.sendMessage(from, teks, text, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
				break
				case 'fakeaddress':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://yogipw-api.herokuapp.com/api/fakedata?country=en&apikey=yogipw`)
				teks = `??? *Nama* : ${anu.result.name}\n*??? Birthday :* ${anu.result.birthday}\n*??? Address :* ${anu.result.address}\n*??? City :* ${anu.result.city}\n*??? Region :* ${anu.result.region}\n*??? Country :* ${anu.result.country}\n*??? Zip Code :* ${anu.result.zip}\n*??? Phone Number :* ${anu.result.phone_number}\n*??? Username :* ${anu.result.username}\n*??? Password :* ${anu.result.password}\n*??? Email :* ${anu.result.email}`
				muzhamz.sendMessage(from, teks, text, {quoted: mek})
				break
				case 'kalkulator':
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`[???] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n??? Untuk Perkalian Menggunakan *\n??? Untuk Pertambahan Menggunakan +\n??? Untuk Pengurangan Menggunakan -\n??? Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[???] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n??? Untuk Perkalian Menggunakan *\n??? Untuk Pertambahan Menggunakan +\n??? Untuk Pengurangan Menggunakan -\n??? Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*??? MATH ???*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
				case 'infonomor':
					
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
					if (data.error) return reply(data.error)
					if (data.result) return reply(data.result)
					hasil = `?????? internasional : ${data.international}\n?????? nomor : ${data.nomor}\n?????? operator : ${data.op}`
					reply(hasil)
					await limitAdd(sender)
					break 
					case 'film': 	
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film2': 	
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'searchfilm':
               
                pshh = `${body.slice(12)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=apivinz`, {method: 'get'})
                  puree = '======================\n'
                  for (let plyll of anu.result){
                  puree += `??? *Judul:* ${plyll.title}\n??? *Link:* ${plyll.url}\n=====================\n`
                  }
                  reply(puree.trim())
                  break
                case 'beritahoax':
					// SR.BOT [JASA SEWA]
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					muzhamz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 

//=====================================BATES NGAB=====================================\\
//nsfwmenu
                //=====================================BATES NGAB=====================================\\
//nsfwmenu
                case 'randombokep':
                if (!isNsfw) return reply(ind.nsfwoff())
			     muzhamz.updatePresence(from, Presence.composing) 
				 mzz = fs.readFileSync('./lib/18.js');
                 jsonData = JSON.parse(mzz);
                 babilu = Math.floor(Math.random() * jsonData.length);
                 anjglu = jsonData[babilu];
                 zhabokepp = await getBuffer(anjglu.image)
                 reply(ind.wait())
                 asww = anjglu.teks
                 muzhamz.sendMessage(from, zhabokepp, image, {quoted: mek, caption: asww})
                 break
		        case 'nekonime': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/nekonime?apikey=muzharzain`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'baka': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=syahri2k21`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
				case 'feet': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/feet?apikey=muzharzain`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'blowjob': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=muzharzain`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'lewd': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/lewd?apikey=syahri2k21`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'milk': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/milk?apikey=muzharzain`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'waifu': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/waifu?apikey=syahri2k21`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'eroyuri': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/eroyuri?apikey=muzharzain`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'nekonime': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/nekonime?apikey=syahri2k21`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
				break
				case 'cium':
                  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/kiss?apikey=muzharzain`)
                  muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                    break
             
		        case 'baka': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=syahri2k21`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
				break
			case 'nangis':
                   if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/cry?apikey=muzharzain`)
                    muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
		case 'resepmasakan':  
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                   anu = await fetchJson(`http://zekais-api.herokuapp.com/resep?menu=${body.slice(12)}`, {method: 'get'})
                   buff = await getBuffer(anu.result.image)
                   resep = `*${anu.result.title}*\n${anu.result.desc}\n\n*BAHAN?? YG DIPERLUKAN*\n${anu.result.bahan}\n\n*CARA MASAKNYA*\n${anu.result.cara}`
                   muzhamz.sendMessage(from, buff, image, {quoted: mek, caption: resep})
                   await limitAdd(sender) 
                   break 
		        case 'blowjob': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=muzharzain`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
				break
		        case 'lewd': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/lewd?apikey=syahri2k21`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
				break
		        case 'hentai': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hentaigif?apikey=muzharzain`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
				break
		        case 'eroyuri': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/eroyuri?apikey=syahri2k21`)
				buffer = await getBuffer(anu.result.url)
				muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
				break
				case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./lib/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return muzhamz.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return muzhamz.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						muzhamz.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						muzhamz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return muzhamz.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						muzhamz.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						muzhamz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return muzhamz.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return muzhamz.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./lib/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					muzhamz.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						muzhamz.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						muzhamz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						muzhamz.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						muzhamz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
                    // AniManga //
                case 'character':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'manga':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'anime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wait':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await muzhamz.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=muzharzain`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        muzhamz.sendMessage(from, ini_video, video, { quoted: mek, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'kusonime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
               
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=muzharzain&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'kusonimesearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'otakudesu':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=muzharzain&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'nhentai':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    muzhamz.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=muzharzain&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'nekopoisearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoisearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break

                    // Information //
                case 'heroml':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    muzhamz.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wikipedia':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
                case 'translate':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=muzharzain&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                case 'brainly':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/brainly?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltv':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltvnow':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/now?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'newsinfo':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'infogempa':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    muzhamz.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
                    break

                case 'lirik':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=muzharzain&query=${query}`)
                    reply(get_result.result)
                    break
              
           	 case 'chord':
				
					// Fix Case By Zcx???
                 if (!isRegistered) return reply( ind.noregis())
                	if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
					if (args.length < 1) return reply('Judul lagunya mana kak')
					tels = body.slice(7)					
					anu =await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=muzharzain&query=${tels}`, {method: 'get'})
					reply(anu.result)
										break
           case 'cuaca':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    muzhamz.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                    reply(ini_txt)
                    break
                case 'covidindo':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/global?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'kodepos':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kodepos?apikey=muzharzain&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case 'jadwalbola':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwalbola?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'indbeasiswa':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'hoax':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/turnbackhoax?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nsfwcheck':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await muzhamz.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=muzharzain`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        reply(`Is NSFW? ${is_nsfw}\nNSFW Score : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break

                    // Movie & Story
                case 'lk21':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'drakorongoing':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=muzharzain&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wattpadsearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikeymuzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break

                    // Random Text //
                case 'quotes':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=muzharzain`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*??? ${author}*`)
                    break
                case 'quotesanime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=muzharzain`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*??? ${char}*\n*??? ${anime} ${episode}*`)
                    break
                case 'dilan':
                case 'islami':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/${command}?apikey=muzharzain`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                 case 'katabucin':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=muzharzain`)
                    reply(get_result.result)
                    break
                case 'randomnama':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=muzharzain`)
                    reply(anu.result)
                    break

                    // Searching
                case 'gimage':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=muzharzain&query=${query}`)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'gimage2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        muzhamz.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'konachan':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=muzharzain&query=${query}`)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'wallpapersearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=muzharzain&query=${query}`)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'wallpapersearch2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=muzharzain&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'playstore':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'shopee':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'google':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `??? Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'stickerwa':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=muzharzain&img=${x}`)
                        muzhamz.sendMessage(from, ini_buffer, sticker)
                    }
                    break

                    // Primbon
                case 'artinama':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                reply(ind.wait())
                anu = await fetchJson(`http://zekais-api.herokuapp.com/artinama?nama=${body.slice(9)}`)
                zhain = `Nama : ${anu.name}\nArti : ${anu.result}`
                muzhamz.sendMessage(from, zhain, text, {quoted: mek })
                await limitAdd(sender)
                break
                case 'artimimpi':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                reply(ind.wait())
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/primbon/artimimpi?q=${body.slice(10)}&apikey=${muzharzain}`)
                zhain = `${anu.hasil.result}`
                muzhamz.sendMessage(from, zhain, text, {quoted: mek })
                await limitAdd(sender)
                break
                case 'jodoh':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu & Bacem`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(txt)
                    break
                case 'weton':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
                case 'jadian':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'tebakumur':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} SR.BOT`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} SR.BOT`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=SoftApikey&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break

                    // Entertainment
                case 'asupan':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=muzharzain`)
                    ini_buffer = await getBuffer(get_result.result)
                    muzhamz.sendMessage(from, ini_buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                case 'wancak':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=muzharzain`)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break

                    // Creator
                
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} SR.BOT`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=muzharzain&text=${ini_txt}`)
                    muzhamz.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
              
                case 'semoji':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} ????`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=muzharzain`)
                    muzhamz.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
                case 'fakedonald':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} SR.BOT`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=muzharzain&text=${ini_txt}`)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'faketoko':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "SR.BOT", code = "IDR", price = 1000000)
                    break
                case 'ktpmaker':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|SR.BOT|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=muzharzain&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
       case 'togif2':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await muzhamz.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/togif?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            muzhamz.sendMessage(from, ini_buff, video, { quoted: mek, mimetype: "video/gif", filename: file_name }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    // Converter
                case 'togif':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await muzhamz.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        ran = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/togif?apikey=muzharzain`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(ran, body, "binary")
                            ini_buff = fs.readFileSync(ran)
                            muzhamz.sendMessage(from, ini_buff, video, { quoted: mek, mimetype: "video/gif", filename: ran })
                            fs.unlinkSync(ran)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
                    // Random Image //

                    // Other
                case 'spamsms':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=muzharzain&nomor=${nomor}`)
                    reply("Success")
                    break
  case 'listsurah':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=muzharzain`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=muzharzain`)
                    muzhamz.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break

                    // Downloader //
                case 'ytplay':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video[0].link)
                    muzhamz.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek })
                    break
                case 'ytplay2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video)
                    muzhamz.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'ytmp3':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=muzharzain&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp32':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=muzharzain&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp4':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=muzharzain&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    muzhamz.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'ytmp42':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=muzharzain&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    muzhamz.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'telesticker':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=muzharzain&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        muzhamz.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                case 'tiktoknowm':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=muzharzain&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    muzhamz.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                case 'tiktokmusic':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=muzharzain&url=${ini_link}`)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
                    break
                case 'spotify':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=muzharzain&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'spotifysearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                    case 'antifirtex':
		        if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())					
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isAntiFirtex) return reply('UDAH NYALA KAK')
				antifirtex.push(from)
				fs.writeFileSync('./lib/antifirtex.json', JSON.stringify(antifirtex))
		reply('SUKSES MENGAKTIFKAN ANTI FIRTEX DI GROUP')
				muzhamz.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
				} else if (Number(args[0]) === 0) {
				if (!isAntiFirtex) return reply('EMANG AKTIF?')
				var ini = anti.botLangsexOf(from)
				antifirtex.splice(ini, 1)
				fs.writeFileSync('./lib/antifirtex.json', JSON.stringify(antifirtex))
			reply('SUKSES MEMATIKAN ANTI FIRTEX DI GROUP')
				} else {
				reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
				}
				break
					//kata
					case 'bacotandilan':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatadilan.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'katadoi':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katadoi.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'hemkel':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatahacker.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break

                    // AFK
                    case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        var num = mek.participant
                                        const fku = {
                                                text: `@${num.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        muzhamz.sendMessage(from, fku, text, {quoted: mek})
				const afk = fs.readFileSync('./sound/afk');
                muzhamz.sendMessage(from, afk, MessageType.image, {quoted: mek, caption: '*KAKA INI  SEDANG AFK  JANGAN DI GANGGU YA!!*'})
                 break 
                                       break
				case 'unafk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('sukess!!?')
                                        var num = mek.participant
                                        const kl7 = {
                                                text: `@${numm.split("@s.whatsapp.net")[0]} *TELAH KEMBALI DARI AFK ${tels}*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        muzhamz.sendMessage(from, kl7, text, {quoted: mek})
                                        break
                    
                case 'jooxplay':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    muzhamz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
                case 'igdl':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=muzharzain&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    muzhamz.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                    break
                case 'fbdl':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=muzharzain&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    muzhamz.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                case 'zippyshare':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/zippyshare?apikey=muzharzain&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
                case 'pinterest':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=muzharzain&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'pinterestdl':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterestdl?apikey=muzharzain&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'pixiv':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=muzharzain&query=${query}`)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'pixivdl':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=muzharzain`)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'xhamstersearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=muzharzain&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'xnxxsearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=muzharzain&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break

                    // AniManga //
                case 'character':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'manga':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'anime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wait':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await muzhamz.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=muzharzain`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        muzhamz.sendMessage(from, ini_video, video, { quoted: mek, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'kusonime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
               
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=muzharzain&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'kusonimesearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'otakudesu':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=muzharzain&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'nhentai':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    muzhamz.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=muzharzain&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'nekopoisearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoisearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break

                    // Information //
                case 'heroml':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    muzhamz.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    break
                  
                case 'wikipedia':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
                case 'translate':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=muzharzain&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                case 'brainly':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/brainly?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltv':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltvnow':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/now?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'newsinfo':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
             
                case 'lirik':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=muzharzain&query=${query}`)
                    reply(get_result.result)
                    break
                case 'cuaca':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    muzhamz.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                    reply(ini_txt)
                    break
                case 'covidindo':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/global?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'kodepos':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kodepos?apikey=muzharzain&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case 'jadwalbola':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwalbola?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'indbeasiswa':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'hoax':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/turnbackhoax?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nsfwcheck':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await muzhamz.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=muzharzain`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        reply(`Is NSFW? ${is_nsfw}\nNSFW Score : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break

                    // Movie & Story
                case 'lk21':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'drakorongoing':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=muzharzain&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wattpadsearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=mu&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    muzhamz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break

                    // Random Text //
                case 'quotes':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=muzharzain`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*??? ${author}*`)
                    break
                case 'quotesanime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=muzharzain`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*??? ${char}*\n*??? ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=muzharzain`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=muzharzain`)
                    reply(get_result.result)
                    break
                case 'randomnama':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=muzharzain`)
                    reply(anu.result)
                    break

                    // Searching
                case 'gimage':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=muzharzain&query=${query}`)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'gimage2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        muzhamz.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'konachan':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=muzharzain&query=${query}`)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'wallpapersearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=muzharzain&query=${query}`)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'wallpapersearch2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=muzharzain&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'playstore':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'shopee':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'google':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `??? Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'stickerwa':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=muzharzain&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=muzharzain&img=${x}`)
                        muzhamz.sendMessage(from, ini_buffer, sticker)
                    }
                    break

                    // Primbon
                case 'artinama':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} SR.BOT`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/artinama?apikey=muzharzain&nama=${ini_nama}`)
                    reply(get_result.result)
                    break
                case 'jodoh':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu & Bacem`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(txt)
                    break
                case 'weton':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
                case 'jadian':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=muzharzain`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'tebakumur':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} SR.BOT`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} SR.BOT`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=SoftApikey&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break

                    // Entertainment
                case 'asupan':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=muzharzain`)
                    ini_buffer = await getBuffer(get_result.result)
                    muzhamz.sendMessage(from, ini_buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                case 'wancak':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=muzharzain`)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break

                    // Creator
                
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} SR.BOT`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=muzharzain&text=${ini_txt}`)
                    muzhamz.sendMessage(from, ini_buffer, sticker, { quoted: mek })

				break
                case 'semoji':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} ????`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=muzharzain`)
                    muzhamz.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
                case 'fakedonald':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} SR.BOT`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=muzharzain&text=${ini_txt}`)
                    muzhamz.sendMessage(from, buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'faketoko':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "SR.BOT", code = "IDR", price = 1000000)
                    break
                case 'ktpmaker':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|SR.BOT|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=muzharzain&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${anu.display_url}`)
                    muzhamz.sendMessage(from, ini_buffer, image, {quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break

                    // Converter
                case 'togif':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await muzhamz.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        ran = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/togif?apikey=muzharzain`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(ran, body, "binary")
                            ini_buff = fs.readFileSync(ran)
                            muzhamz.sendMessage(from, ini_buff, video, { quoted: mek, mimetype: "video/gif", filename: ran })
                            fs.unlinkSync(ran)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break

                    // Other
                case 'spamsms':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=muzharzain&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=muzharzain&nomor=${nomor}`)
                    reply("Success")
                    break

                    // Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'cogan':
                case 'cecan':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=muzharzain`)
                     muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=muzharzain`)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                    case 'hug':
                    case 'peluk':
                    if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/hug?apikey=muzharzain`)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                    case 'blocklist':
					teks = 'List Block :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					muzhamz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'banlist':
				ben = '```List Banned``` :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total : ${ban.length}`
					muzhamz.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
                    case 'banlist':
				ben = '```List Banned``` :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total : ${ban.length}`
					muzhamz.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
                     
                case 'ero':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'holo':
                case 'tits':
               case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'erofeet':
                case 'holoero':
                  case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=muzharzain`)
                  muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                   
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=muzharzain`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        muzhamz.sendMessage(from, buff, sticker, { quoted: mek })
                        fs.unlinkSync(rano)
                    })
                    break
                    case 'bj':
                    case 'cum':
                    case 'les':
                    case 'anal':
                     case 'kuni':
                     case 'solog':
                      case 'feetg':
                     case 'classic':
                     if (!isNsfw) return reply(ind.nsfwoff())
                     if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=muzharzain`)
                     muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                   case 'feed':
                    case 'poke':
                    case 'baka':
                    case 'tickle':
                    case 'cudle':
                    case 'wink':
                    case 'dance':
                    case 'lick':
                    case 'blush':
                    case 'cry':
                    case 'cringe':
                   if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=muzharzain`)
                   muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*'})
                    break
                       case 'ngif':
 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/${command}?apikey=muzharzain`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        muzhamz.sendMessage(from, buff, sticker, { quoted: mek })
                        fs.unlinkSync(rano)
                    })
                    break
                    // Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} SR.BOT`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=muzharzain&text=${ini_txt}`)
                  muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} SR.BOT`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=muzharzain&text1=${txt1}&text2=${txt2}`)
                    muzhamz.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break

                    // Photo Oxy //

                  case 'wetglass':
                     if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} SR.Bot`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=muzharzain&text=${txt}`)
                    muzhamz.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*_*', quoted: mek})
                    break
                case 'multicolor3d':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} SR.Bot`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/multicolor3d?apikey=muzharzain&text=${txt}`)
                    muzhamz.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*_*', quoted: mek})
                    break
                case 'watercolor':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} SR.Bot`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/watercolor?apikey=muzharzain&text=${txt}`)
                    muzhamz.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*_*', quoted: mek})
                    break
                
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
            if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} SR.Bot`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=muzharzain&text=${txt}`)
                  muzhamz.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*_*', quoted: mek})
                    break
                    case 'freefire':
                       if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} SR.Bot`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=muzharzain&text=${txt}`)
                    muzhamz.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*_*', quoted: mek})
                    break
                    case 'cartoongv': 
                        if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} SR.Bot`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/cartoongravity?apikey=muzharzain&text=${txt}`)
                  muzhamz.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*_*', quoted: mek})
                    break
                    case 'anonymtext':
                        if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} SR.Bot`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=muzharzain&text=${txt}`)
                  muzhamz.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*_*', quoted: mek})
                    break
                     case 'logolol':
                        if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} SR.Bot`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy3/bannerlol?apikey=muzharzain&text=${txt}`)
                  muzhamz.sendMessage(from, buffer, image, {caption: '*_*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*_*', quoted: mek})
                    break
                    case 'jvtsthirt':
                   	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti SR.BOT/NGAB`)
				reply(ind.wait())
				ct = body.slice(10)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/juventusshirt?apikey=muzharzain&text1=${zha1}&text2=${zha2}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
                    break
                    case 'ctgravity':
                     	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti SR.BOT/NGAB`)
				reply(ind.wait())
				ct = body.slice(10)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/cutegravity?apikey=muzharzain&text1=${zha1}&text2=${zha2}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
                    break
                        case 'rlvintage':
                     	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti SR.BOT/NGAB`)
				reply(ind.wait())
				ct = body.slice(11)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/realvintage?apikey=muzharzain&text1=${zha1}&text2=${zha2}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
                    break
                    case 'quotemaker3':
                    		if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	     if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} SR.Bot`)
      txt = args.join(" ")
	  owgi = await muzhamz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://api.lolhuman.xyz/api/quotemaker3?apikey=muzharzain&text=${txt}&img=${anu.display_url}`)
	 muzhamz.sendMessage(from, hehe, image, {quoted:mek})
	 }
                           case 'cdwar':
                     	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti SR.BOT/NGAB`)
				reply(ind.wait())
				ct = body.slice(7)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=muzharzain&text1=${zha1}&text2=${zha2}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
                    break
                   case 'vtbanner':
                     	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti SR.BOT/NGAB`)
				reply(ind.wait())
				ct = body.slice(9)
				zha1 = ct.split("/")[0];
                zha2 = ct.split("/")[1];
                zha3 = ct.split("/")[2];
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=muzharzain&text1=${zha1}&text2=${zha2}&text3=${zha3}`)
				muzhamz.sendMessage(from, zhain, image, { quoted: mek, caption: '*_NIHKAK UDAH JAN LUPA JOIN GRUP SR.BOT [JASA SEWA]_*' })
                    break
                    
                  case 'wait':
					
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							muzhamz.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
            if (budy.includes(`assalamualaikum`)) {

                  reply(`Waalaikumsalam ${pushname}`)

                  }

          if (budy.includes(`Lagi Apa Sayang`)) {

                  reply(`Lagi mikirin ${pushname} sayang????`)

                  }
                  if (budy.includes(`Lagi apa sayang`)) {

                  reply(`Lagi mikirin ${pushname} sayang????`)

                  }
  
  
        if (budy.includes(`lagi apa sayang`)) {

                  reply(`Lagi mikirin ${pushname} sayang????`)

                  }
 
 if (budy.includes(`Kita Putus`)) {

                  reply(`Kamu jahat banget ke aku sih sayang. ????????`)

                  }
                   
                   if (budy.includes(`Kita putus`)) {

                  reply(`Kamu jahat banget ke aku sih sayang. ????????`)

                  }
                   
 if (budy.includes(`kita putus`)) {

                  reply(`Kamu jahat banget ke aku sih sayang. ????????`)

                  }

		if (budy.includes(`Sayangku`)) {

                  reply(`Iya ${pushname} sayang ????`)

                  }
                  
                  if (budy.includes(`SAYANGKU`)) {

                  reply(`Iya ${pushname} sayang ????`)

                  }
                  
                  if (budy.includes(`sayangku`)) {

                  reply(`Iya ${pushname} sayang ????`)

                  }


		if (budy.includes(`I LOVE YOU`)) {

                  reply(`Ilove you too ${pushname} sayang????`)

                  }
                  
                  if (budy.includes(`iloveyou`)) {

                  reply(`Ilove you too ${pushname} sayang????`)

                  }
                  
                   if (budy.includes(`Iloveyou`)) {

                  reply(`Ilove you too ${pushname} sayang????`)

                  }



		if (budy.includes(`sayang kangen`)) {

                  reply(`Aku Juga Sayang kangen kamunya ????`)

                  }
                  
                  
		if (budy.includes(`Sayang kangen`)) {

                  reply(`Aku Juga Sayang kangen kamunya ????`)

                  }

if (budy.includes(`Sayang Kangen `)) {

                  reply(`Aku Juga Sayang kangen kamunya ????`)

                  }
                  
                  if (budy.includes(`SAYANG KANGEN`)) {

                  reply(`Aku Juga Sayang kangen kamunya ????`)

                  }
                  
  if (budy.includes(`masasih sayang`)) {

                  reply(`Iya sayang apasih yang engga buat ${pushname} sayang????`)

                  }
if (budy.includes(`Masasih sayang`)) {

                  reply(`Iya sayang apasih yang engga buat ${pushname} sayang????`)

                  }
if (budy.includes(`Masasih Sayang`)) {

                  reply(`Iya sayang apasih yang engga buat ${pushname} sayang????`)

                  }
if (budy.includes(`MASASIH SAYANG`)) {

                  reply(`Iya sayang apasih yang engga buat ${pushname} sayang????`)

                  }


		if (budy.includes(`Assalamualaikum`)) {

                  reply(`Waalaikumsalam ${pushname}`)

                  }


		if (budy.includes(`ASSALAMUALAIKUM`)) {

                  reply(`Waalaikumsalam ${pushname}`)

                  }



		if (budy.includes(`assalamualaikum`)) {

                  reply(`Waalaikumsalam ${pushname}`)

                  }



		if (budy.includes(`Hai`)) {

                  reply(`Hai Juga,\nUntuk Menggunakan Bot Ketik ${prefix}daftar ${pushname}|17 Kemudian #menu `)

                  }





		if (budy.includes(`Hallo`)) {

                  reply(`Hallo Juga,\nUntuk Menggunakan Bot Ketik ${prefix}daftar ${pushname}|17 Kemudian #menu`)

                  }



		if (budy.includes(`Thanks`)) {

                  reply(`Sama-sama ${pushname}`)

                  }

	if (budy.includes(`##Spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#Spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#Spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#Spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#Spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#Spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#Spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#Spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#Spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#Spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }

if (budy.includes(`#spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#spam sahur`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  
                  if (budy.includes(`#SPAM SAHUR`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#SPAM SAHUR`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#SPAM SAHUR`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#SPAM SAHUR`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#SPAM SAHUR`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#SPAM SAHUR`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#SPAM SAHUR`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#SPAM SAHUR`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#SPAM SAHUR`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }
                  if (budy.includes(`#SPAM SAHUR`)) {

                  reply(`Bangun Sahurrrrrr Sahuurrrrrr????????`)

                  }



		if (budy.includes(`Makasih`)) {

                  reply(`Sama-sama ${pushname}`)

                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
