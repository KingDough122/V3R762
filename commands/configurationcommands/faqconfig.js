module.exports = ({
    name: "faqconfig",
    aliases: ['faq','frequentlyaskedquestions'],
    code:`
    $title[**__Faqs Configuration Modue__**]
$description[**What is Faq's?**
*- This keeps track of your " Faq's " that you set.
 ~ Frequently Asked Questions. This uses a datestore.*

 **__How to Enable Editing__**?
 *• Please note that if you do "$getServerVar[Prefix] faq1 Test and do not receive a message.*
  *~ This means that " EDITING " is disabled, You should do* ** "$getServerVar[Prefix] faq edit enable "**
*- To Disable simply do* **" $getServerVar[Prefix] faq edit disable "**.

 **__How to set them?__**
 **• $getServerVar[Prefix] Faq " Number ".**
  *~ This will return to the faq if it is set.*
 **• $getServerVar[Prefix] FaqNumber " Message. "**
  *~ This will set the " Faq Number " to the message you sent.*

**__Example:__** 
-]
$color[$getServerVar[Hex]]
$onlyForIDs[761934943458295888;❌ Coming soon.]



    `
})