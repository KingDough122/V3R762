module.exports = ({
    name: "Economy",
    aliases: ['configureeconomy', 'eco'],
    code: `
    $title[**__Economy Configuration__**]
    $description[
> **• Economy Starting Balance**
    *- $getServerVar[Prefix] ecostarter 
 **- | Choices:      " Wallet | Bank "**
    *~ This sets ethier a players wallets and or banks starter balance to whatever you say.*
> **• Economy Payouts**
    *- $getServerVar[Prefix] ecopayouts Max | Min 
 **- | Choices:  " Work | Crime | Rob | Beg "**
    ~ Sets the Maximum | Minimum amount of money that can be earned from ethier 
 **- | Choices:   " Work | Crime | Rob ".***
> **• Economy Fee's**
    *- $getServerVar[Prefix] ecofines Max | Min 
 **- | Choices:      " Beg | Crime | Rob "**
    *~ This sets the Minimumm | Maximum amount of money that will be charged if failed to " Rob | crime | Beg "*


    ]

    `
})