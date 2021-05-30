module.exports = ({
    name: "nodes",
    aliases: ['shard','nodes','shards'],
    code:`
    $title[**__Bot's Performance__**]
$description[
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
- $getVar[dnode]]
$color[$getServerVar[Hex]]
$deletecommand
    
    `
})