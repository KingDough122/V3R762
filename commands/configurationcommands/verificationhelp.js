module.exports = ({
    name: "verification",
    aliases: ['verifcationhelp', 'helpverification'],
    code: `
$title[**__Verification Setup Module__**]
$description[
 **$getServerVar[vsetup1] | Verify Channel
  -  $getServerVar[Prefix] Vchannel #channel**
* ~ This sets the verification channel so that " $getServerVar[Prefix] Verify " cannot be ran in everychannel.*
 **$getServerVar[vsetup2] | Verified Role
  - $getServerVar[Prefix] Vrole @Role**
* ~ Gives the verified user this role when verification is complete.*
 **$getServerVar[vsetup4] | UnverifiedRole 
  - $getServerVar[Prefix] Urole @Role**
* ~ Sets this to the unverified role.* 
Setup Stats: $getServerVar[config]

]
$color[$getServerVar[Hex]]

    `
})