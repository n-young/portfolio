---
title: "Why I avoid Slack"
date: 2021 May 23
---

# Why I avoid Slack

Every time I join a new club, team, organization, or workplace, and especially when I'm met with the (dis)pleasure of choosing the main method of communication, I'm forced to relive all of the stages of grief associated with considering Slack. My great tragedy is that I've yet to find a suitable alternative to Slack that I'm willing to double down on, so it always reemerges as a sane default, even though it itself has very few. Slack has a lot going for it; most people already have a Slack environment installed (on a mobile or desktop app), are used to checking it for notifications, and understand the environment. It's a pretty app with a recognizable name and tons of integrations, so I have no trouble understanding why people like it and use it. It's also quite likely that a platform that fulfills all of my requirements for a good communication platform either doesn't or can't exist. But many of Slack's features (or lack thereof) don't work for me, so I'm writing a post about it to immortalize my distaste.

_I'm aware that a lot of gripes with Slack center on privacy and productivity. I think there are other usability issues beyond these that make it a bad choice. While there's definitely a conversation to be had about how Slack can nudge a workplace to be more toxic and chaotic, I'll stay away from that._


## Sharding and Threading

In the free version of Slack, there is no way to reorder or categorize channels. They are automatically organized in alphabetical order with private channels at the bottom. In the paid version, you can make top-level channel categories, but these categories are not shared between all members of the organization. So it's possible to sort channels in some meaningful way, but only for yourself, and only if you actively maintain it. As new channels are added and old channels are retired, managing your channels becomes a hassle that each individual member has to deal with, if they care about reducing clutter. And that's only in the case where you even can sort them. Most small groups and clubs don't bother paying for Slack, so channels are organized in a massive, alphabetical list, making it a nightmare to parse what's important.

Sharding on the channel-level isn't nearly as bad as on the message-level; Slack allows threading to occur on every single message, making it unnecessarily difficult to find messages from the past or that are important to you. By splitting up messages into channels and threads, you'd hope that individual conversations become easier to find. Instead, unless great care is taken in how channels and threads are used (which is near impossible to achieve and enforce), conversations become fractured across multiple threads and buried in a sea of channels.

The alternative here isn't super clear, but I think that three-tiered organization makes the most sense. Broad, top-level categories to figure out which department or team you're looking for, more narrow topics to discover the nature of the conversation, then bottom-level conversations which might not last particularly long. And no threading on individual messages; instead, just reasonable quote blocks in replies. [Zulip](https://zulip.com/) does this pretty well.


## Sign-in

Each Slack workspace has its own sign-in. Recreating the sign-up process for each new workspace a user joins is infinitely more hassle than having a unified "Slack account" to which workspaces are added. It's understandable why Slack might make this design choice; for a work-oriented tool, it'd be nice for the workplace to have all employees use their work email for privacy or security reasons. But there's no reason why companies couldn't just ask their employees to make a new Slack account to join their one workspace, if they cared, rather than Slack enforcing this design decision themselves.

Slack somewhat mitigates this by allowing you to sign into several workspaces after you've logged into one, so long as they share an email. Not only is this a really weak way of associating accounts (email string matching?) but it carries with it a whole host of odd consequences. Users can't easily remove themselves from old workspaces (one-off events, old companies), users with multiple emails still feel the burn of multiple sign-in, each one of the separate workspaces still has a distinct password, but are joined regardless.

The alternative here is clear; have a single Slack account and let users join workspaces (one-to-many) rather than having multiple Slack accounts, one per workspace (many-to-many), and then loosely binding them together by email association to slightly decrease sign-in times. I think that Discord implements this alternative best, except for the overwhelming gamer-esque feel and the odd usernaming situation (tag + hash).


## Permissions

It's nice to be able to control, as an administrator or a team lead, who can see what without much hassle. For the most part, Slack's user permissioning system works on two tiers: admin or not admin. Admins can control everything, and non-admins can't. Things get slightly more complicated with guests and whatnot, but the model is simple in concept. Then, Slack's channel permissions system is equally simple; there are public channels which anybody can join, and there are private channels which you must be added to. Nothing too complicated here.

The trouble comes with onboarding, offboarding, and maintenance. It's a pain to add the seasonal intern to every single channel that they'll need, and it's even more of a hassle to be totally sure that nobody is seeing messages they shouldn't be seeing across all private channels. Both processes look like manually adding each person to each channel. Moreover, public channel bloat can make it really messy for incoming members to parse out what is or isn't necessary to look at. Being able to browse public channels and opt into random conversations can lead to clutter and noise, mostly out of FOMO.

The alternative is role-based permissioning. Instead of figuring out which specific channels each person needs to be in, figure out which groups of channels some team or role requires. Then, figure out which roles each person fulfills, and they'll automatically have the channels they need. This creates an issue wherein it's more difficult to handle edge cases (someone needs to join a conversation for a little while, or happens to work across teams often); unfortunately, allowing individual user overrides recreates the original problem. In cases like this, it might make sense to create more roles, or switch to DM'ing. Unfortunately, I don't see a clear solution. I think Discord implements this system the best out of the platforms I've used.


## Noise

This issue falls somewhat cleanly out of the previous problems: users have a number of workspaces that have accumulated over the years (multiple sign-in), and within each workspace, they aren't sure which channels they need to be in (no role management), so they just join everything that seems relevant to them (public access). All of this coupled by the "if everything is urgent then nothing is" mantra leads to an especially noisy and distracting platform. Every conversation becomes a little red notification, even if it doesn't concern you, and a growing reliance on using the @channel tag to grab attention intensifies the problem. Then, when you decide to go and read your hundreds of Slack messages, you find that you have to sift through an awful maze of conversations splintered across channels and threads (sharding and threading), most of which isn't relevant to you.

Fixing the previous problems helps a lot with this problem, but there should also be a better method of prioritizing important messages. My honest suggestion for this: use email if it's that important. Emails are much less likely to get flooded away by other conversations, and individual users have much more control over their inbox than a Slack workspace with the floodgates open.


## Miscellaneous gripes

I couldn't find the right words to make each of these their own paragraphs, so here's a list of other things that are annoying to me:



*   Group chats and direct messages - why are they so hard to use and keep track of?
*   The sidebar - eliminate the "...more" button by having a nice landing page.
*   "All unreads", "All DMs", and "Threads" - please don't relegate your message management to a set of giant lists.
*   Slackbot - do I have to turn off each notification for each workspace every single time?
*   The right panel - why does it show threads for channels I'm not tabbed into, and why is the back button the same as the close button?


## So, what should we use?

Honestly, I have no idea. I've struggled for so long trying to find a platform that implements role-based permissioning, single sign-in, reasonable sharding and threading, and isn't obnoxiously gamer-esque. Perhaps my requirements are too narrow, but to me they all seem like sane defaults that almost every communication platform ought to follow.

For now, I've settled with Slack and use Discord when I can afford to give up threading and the team members are all in tune with the platform already. I hope that in the future I'll find a platform that I can fall in love with, or endeavour to make one myself.
