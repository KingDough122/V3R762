module.exports = ({
    name: "points",
    aliases: ['sbalance'],
    code:`
    $title[**__$username[$mentioned[1;yes]]'s Support Balance__**]
    $description[
• **Support Points:**
 - $getUserVar[spoints;$mentioned[1;yes]] 
• **V3R762 Advancement Hours**
- $getUserVar[ahours;$mentioned[1;yes]] Hours
• **Premium Balance**
- $getUserVar[pbalance;$mentioned[1;yes]] 
> • Private Command. ]
$onlyForServers[818201484822708226;]
$suppressErrors[This command does not Exist.]

    
    `
})