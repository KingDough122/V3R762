const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "ODE3NjMxMzA4NjkxMDEzNjQy.YEMUfg.FPlFV4ekZcetAsDjvKcdiPVYty8", 
prefix: "$getServerVar[Prefix]"
})
 
bot.onMessage("V3R762 is now online.")
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: command.aliases,
code: command.code
})
}
}

bot.status({
  text: "$commandsCount Commands | $serverCount Servers | $allMembersCount members",
  type: "WATCHING",
  status: "dnd",
  time: 10
})

bot.joinCommand({ 
  channel: "818253810261819433", 
  code: `
  $title[**__New Member__**]
  $description[$username has joined $serverName, They have been given the roles, We are now at $membersCount
  $giveRole[$authorID;818245988464459796]
  $giveRole[$authorID;818201905585979464]
  $giveRole[$authorID;818247793230741554]
  $giveRole[$authorID;818246067971162172]
  $giveRole[$authorID;818246177434107936]
  $onlyForServers[818201484822708226;]
  $giveRole[$authorID;818247953068064771]]
  $color[$getServerVar[Hex]]
  ` 
})


bot.onJoined()

bot.leaveCommand({ 
  channel: "818253810261819433", 
  code: `
  $title[**__Member Drowned__**]
  $description[$username has left $serverName, We are now at $membersCount]
  $onlyForServers[818201484822708226;]
  $color[$getServerVar[Hex]]
  ` 
})

bot.onLeave()


  bot.variables({
    Premium: "🔴",
    Hex: "000000",
    Setup: "🔴",
    config: "0",
    module1: "🔴",
    Prefix: "/",
    lstats: "🔴",
    vstats: "🔴",
    fstats: "🔴",
    ping: "🟢",
    vsetup1: "🔴",
    vsetup2: "🔴",
    vsetup3: "🔴",
    vsetup4: "🔴",
    logs: "No Channel",
    logging: "off",
    vchannel: "Not Set",
    vrole: "Not Set",
    vlogs: "Not Set",
    urole: "Not Set",
    vcode: "0",
    fenable: "Off",
    fdisable: "On",
    faq: "**Template**",
    faq1: "None",
    faq2: "None",
    faq3: "None",
    faq4: "None",
    faq5: "None",
    faq6: "None",
    faq7: "None",
    faq8: "None",
    faq9: "None",
    faq10: "None",
    faq11: "None",
    faq12: "None",
    faq13: "None",
    faq14: "None",
    faq15: "None",
    faq16: "None",
    faq17: "None",
    faq18: "None",
    faq19: "None",
    faq20: "None",
    downtime: "None Scheduled!",
    mnode: "🔴",
    cnode: "🔴",
    pnode: "🔴",
    snode: "🔴",
    rnode: "🔴",
    dnode: "🔴",
    snipe: "RICK ROLLED!",
    user: "RICK ROLLED",
    schan: "RICK ROLLED",
    Estats: "🔴",
    Wallet: "0",
    Bank: "1500",
    Chat: "15",
    Messages: "5",
    mcounter: "0",
    sstats: "🔴", 
    schannel: "None",
    suggestion: "None",
    suggestionID: "31GF2",
    version: "0.0.1",
    changelog: "Nothing new added.",
    pupdate: "No Update Pending.",
    pbalance: "0",
    ahours: "0",
    spoints: "0"

  })

  bot.loopCommand({
    code: `
  $editMessage[818988551567966209;{title:**__V3R762 Performance__**}
{description:
  • **MAIN NODE**
  - $getVar[mnode]
  • **COMMAND NODE**
  - $getVar[cnode]
  • **PROCESSOR NODE**
  - $getVar[pnode]
  • **RESPONCE NODE**
  - $getVar[rnode]
  • **SERVER NODE**
  - $getServerVar[snode]
  • **DATASTORE NODE**
  - $getVar[dnode]} 
{color:$getServerVar[Hex]}]
  

$if[$ping<=85]
$setVar[mnode;🟢]
$setVar[cnode;🟢]
$setVar[pnode;🟢]
$setVar[rnode;🟢]
$setServerVar[snode;🟢]
$setVar[dnode;🟢]
$endIf


$if[$ping>=97]
$setVar[mnode;🟡]
$setVar[cnode;🟡]
$setVar[pnode;🟡]
$setVar[rnode;🟡]
$setServerVar[snode;🟡]
$setVar[dnode;🟡]

$endIf

$if[$ping>=135]
$setVar[mnode;🔴]
$setVar[cnode;🔴]
$setVar[pnode;🔴]
$setVar[rnode;🔴]
$setServerVar[snode;🔴]
$setVar[dnode;🔴]
  
$endIf



    `,
    channel: "818250145548075059",
    executeOnStartup: true,
    every: 159000
    })

  bot.awaitedCommand({
    name: "vcode",
    code: `
    $dm
    $title[**__Verification Code__**]
    $description[Your verification code is " $getUserVar[vcode] ", Please copy this code and head to " <#$getServerVar[vchannel]> and type " $getServerVar[Prefix] vcode " Code Here ", EX: $getServerVar[Prefix]vcode 2h3y720a ".]
    $color[$getServerVar[Hex]]

    `
    }) 

   
  
