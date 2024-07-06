const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Winspertech.100@gmail.com"
global.location="Kisumu,Kenya."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Willis254:d5_!LpGM#i_w.U!@cluster0.hhbfqup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/WillisKE/Suhail";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ɢɛռɛʀǟȶɛɖ ᏰᎩ ᏇᎥᏝᏝᎥᏕ" 


global.devs = "254786273945" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254786273945,254702365210,254708336448,254762508828";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254786273945,254702365210,254708336448,254762508828,254101827915";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" //"text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254786273945,254702365210,254708336448,254762508828,254101827915";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://sessionpair.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUQrYVBVZ1M1bnRiNDdIanNZeUtTdkJKbjJRcHg3dHRqN05CWDBQaGptND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFRCVnVxRGVuQk84ZExIK3ZvVnZncnBqZm0rZXg1dklacnBrcDJ5djVCQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpR0wvanV4SjM4TEZsUEZUanZuT3gxMGhOREpqc3ZnSmRrNlBCRkZqV0dVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwMTdGQkpKZEJ5ZFNtdzFGczhMS3dtbG5nTVBiQ3g4OHExRFR3RFJEUlN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9OWFhiU1VaV09jeUdaeU9tREdqOXRCTitwZi9jK0lvalQ0MEl1c1JDVVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img2dW9TR2duUDZsaU4wN3VpTkJaK0ROanBVekY0L1pzUGIrT2dVWG5VaU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZjaDlhTnVvZTJIcy9xTnpTU2NPZ0ZsUFBtWlROK1U3OTF5WFVXSmdHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjBRQUtLUGVtdHNRS0tMeHUrMHVTTUI2cWhySDQ2OVZ3SHZWOE13YXAxQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRudUc0UTdKck81WGhUZzhlUkhQZ0d3R3hDaXZZVUlESW5pdytQbEI2bWxrSXFNU3ZVVytkZVpYUjZJUVo0blNzc3pEUUd0cit2N09ycVFoL052a0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6ImpndC8ySW1oalZBalFvRnYxM2ZraTFTbE1DNUZZTnFDWWZudEJoUUhuMnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzYyNTA4ODI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQwMjEyQTg4NjRCMTRBMEExM0VFQjA1OTRBQkM4NkZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAxODQ4MzR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc2MjUwODgyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEMDVDMjc1Q0MwN0U5MzNGNjI0Q0VFN0M3QzFBRTI3RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMTg0ODM0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyRUNicWxzWlFtR29BQXg4NWRkckFBIiwicGhvbmVJZCI6IjFkMGVhNThiLTM4NjgtNGJkYy1hODJiLTVlODRlZDMzMjhlYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSbVpOL3BEbTJ0V2ZmUVl4ajJiS0xyaTYrVk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3MyWmdZekhNcTFGQlJCY0JXL1p6VWhnV2dRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilk4NExUSjZNIiwibWUiOnsiaWQiOiIyNTQ3NjI1MDg4Mjg6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBZG1pbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTG5ackdzUTd0K2Z0QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ01COU5rU0R3Nm9hUnJqT3RoR0hnZ3NsS0hlVS8vYUpNd29RWHVlM2Myaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMlNtZVd6ZGtJeXVDbVFmaFJKTWU0d2FnU3BqOUphNm5EQjNrZTV6enZ0SXZBSlRvWi9Vd1VrbWRDZUtWSU9aakhzMm44ZFR1VjYweFJoZTRhVzE1Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6Ijc1ZGZ5ODdFWGdyR2FtdEpFRURacG9WUUo4ZWphRG5wWXQ4L25jajNVWDVLK2Y0K0ZKUG9ORG8wcjVtaUg0NERPdTA4MU1tWEZuZlI5YSsyWUtZNUF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzYyNTA4ODI4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUWpBZlRaRWc4T3FHa2E0enJZUmg0SUxKU2gzbFAvMmlUTUtFRjdudDNOcCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDE4NDgzMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBYnQifQ==,eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUgwNXd3a3B5VXA5LzhmQndBSTg0Si9uV3JPTTYxckZjOHRPZzhNblBIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2p0N2lENndPUjJyY3hoSFYzNDJTc1FIY0ZoZEs1WHRZOVYzRVdSRlhuWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQWt4VTlUV0VQSlNMRWxDdDlJRVpkWmI0L0xpTjUzQ2d1TzhMeFU5YlhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4bGxkMmxjVVE5SG5GWnRlSVA1OFFvNzlCUnZTY2YvWXl2SkIyVzdkN3hRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZOQXFvdHVqUStBLytNc2V6bitHWk1NOVE3Z1pQdVdST0l4WVpZZ1hxRW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldFZWJVL3MzanVMRy9Fb0prK09mQzByZ1hGM2oyQXdpeFhNOGhhMFlsd3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUliSytncGFENUtpRjk3RXRSL0ZwRGtaL1g4NGVKS1YwZExRVnU2YkVYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGJBZStKUXEzTTZ2UjNxYk9PdUxOUW1ocGFEOXBDRW5WSUFoY2hjdHlGRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRmR2pXQWh4M2hIV3ZZS2VaQnRrZDZRUUg2SnlrMHl6ZThEYjF5K2tNdUpQanljRytqSGFkTFlTYlR0YThCbHI1d29tMHNrMGVFWi9aV0JqSDF3SEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6ImYrMDQ1SkxXd0l5N1BOVTBONG05NTh2WVh2RkdCdGppa21CYkRmV3NPdVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdpSW5tOXIzUmotVDM5MEN2TnlMeFEiLCJwaG9uZUlkIjoiNzYxZDVlMzQtOWYzMS00OWVkLTg1OTktZjcwMGQzMDNhYmJiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc3bUZOOGhLYXFHczgveGUvbzk1OERtUllpYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwM3pQT0tBTEpMWVFUT1R2ZHZObGROeE1vQm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN0xDQUsyRkYiLCJtZSI6eyJpZCI6IjI1NDcwMjM2NTIxMDo0MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4ap4omb8JOGqiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0RxKzVnREVQV085cklHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieFgwWGhDeWlLcnJpTVV1UzNpWWE1VGozK1hUeXFuOGVPOVZiNzlOWWptaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWlRYanFzbHRjOVFacG9nRThJNjVPalZTNXVtOUJJRjZQZ29wQ3R3NTdlRW9zSE5xQjVuVTFzeHpONSs2Z2tRWU85U2RHelo3QzVRYm8xdTI0QXBMQmc9PSIsImRldmljZVNpZ25hdHVyZSI6InlHYlhhbitrK3FmcFIxY3BqMDFvT2ZtWFVjcDlndzQ5ckJxVTZFM0xxRzRxcE9xV1lvbDgyMDE4NC9LQnJEL1czN1hkTlZYM09SMk94d1JmOVYyRENBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzAyMzY1MjEwOjQwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNWOUY0UXNvaXE2NGpGTGt0NG1HdVU0OS9sMDhxcC9IanZWVysvVFdJNXAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTc0MDU1NzB9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style : process.env.STYLE || "3",  // put '1' & "2" here to check bot styles
  thumbimage: process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg",

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "ɢɛռɛʀǟȶɛɖ ᏰᎩ ᏇᎥᏝᏝᎥᏕ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "〃Willis",
  packname: process.env.PACK_NAME || "〃",
  botname : process.env.BOT_NAME  || "ᴡɪʟʟɪꜱ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "≛ Willis",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ADAM"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "bb60b12577e6c25424883cc9f72ffe88";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
