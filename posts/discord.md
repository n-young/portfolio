---
title: "Discord as a Zoom replacement for the classroom"
date: 2021-05-23T18:38:41-07:00
bin: "chaotics"
binTitle: "Chaotics"
---

# Discord as a Zoom replacement for the classroom

I've TA'd a few courses at Brown during the pandemic, meaning there was a lot of work done to virtualize the classroom and replicate the numerous kinds of meetings we have with students. While Zoom became the _de facto_ platform for most oanline classrooms, there are very clear and jarring drawbacks to using it. Chats are hard to moderate and manage, and don't persist. Managing breakout rooms is a nightmare, and switching between them is slow. There are limited capabilities for presenters (particularly with regard to video). Link-based invites are tedious and potentially insecure.

Several other platforms have been explored as alternatives to Zoom. A [course at Waterloo](https://student.cs.uwaterloo.ca/~cs246e/F20/index.shtml) used [Twitch](https://twitch.tv/) to do lecture streams, a [compilers course at Brown](http://cs.brown.edu/courses/csci1260/spring-2021/) used [Prismia](https://prismia.chat/) to monitor chat, and several others including a [deep learning course](https://brown-deep-learning.github.io/dl-website-2020/index.html) used [gather.town](https://gather.town/) to manage lab sections. All of these alternatives are great in their own way, and if you're looking for a classroom alternative to Zoom, I encourage you to check those out.

In the courses I've TA'd, I've helped set up [Discord](http://discord.com/) as a classroom alternative. I'm writing this post to document that process. Unfortunately, I am writing this at the tail end of the pandemic, meaning that there will unlikely be another case where a virtual classroom alternative will be necessary, but either way, I think this serves as an interesting use case for Discord worth immortalizing.


## The Problem

First, I should explain what we used Discord for: weekly labs. While we did also use Discord for lecture breakout rooms (to avoid using Zoom breakout rooms), in hindsight, I'm not sure that this was a particularly good idea, so I won't document that process (if anyone would like to hear about it, let me know via email and I can add it to this post). 

The format of the weekly labs in both courses was rather straightforward. Students are put into groups and given a handout to work through during the lab session. At several points in the lab, TAs will "check off" the students, providing feedback and ensuring correctness, until they complete the handout. TAs are also available to answer questions and provide assistance in the lab.

Immediately it may become clear why Zoom is not an ideal choice. Breakout rooms are janky, and TAs are jumping around between rooms often, meaning the time to switch should ideally be low. Broadcasting messages works extremely poorly; they're both ephemeral and discreet. It's difficult to see at a glance what group sizes or demographics are like. Non-persistent chat creates issues for sharing content (in cases). The "Leave Meeting" button is right next to the "End Meeting" button; a repeated cause of chaos.


## Why Discord?

So, what makes Discord a choice candidate? It might be worth first describing what makes Discord an unideal choice: users need to make a new account, and the app isn't accessible from China and some other countries without a VPN. Users who already have accounts might have gamertags or profile pictures that they'd rather not share with their peers. Discord's "currently playing" feature makes student's gaming or hobby habits readily visible to the rest of the class.

But most of the prior issues can be mitigated, and Discord also has many promising features that solve many of Zoom's issues. Room switches happen almost immediately in Discord, and the UI is much more tenable to moderating and managing large swaths of rooms. Persistent chats make life a lot easier for sharing lab checkoff answers. Plus, Discord still has video and screen sharing; it just doesn't have whiteboarding, which may or may not be a boon anyways. Lastly, bots let you do a wide array of customization, which we took advantage of.


## The Process

Here's how we used Discord. Two primary text channels for announcements and technical questions and one primary voice channel where all students convene before the beginning of the lab. After students trickle into the main voice channel, TAs give a short briefing on the lab, then release the handout and assign students to rooms, either manually using a Google Sheet script or randomly using a bot called [Moveer](https://top.gg/bot/400724460203802624). Future implementations could leverage roles to ensure that students can _only_ join the room they're assigned to.

During the lab, students will work in their assigned rooms, each of which comes with an associated text channel, and then call TAs over using a [SignMeUp](https://signmeup.cs.brown.edu/) queue for help or checkoffs until they finish. Future implementations might use a ticket bot in Discord to manage signups, rather than an external queue.

After the lab ends, the [MEE6](https://mee6.xyz/) "!clear" command is used to flush text from all of the channels so that the next lab group doesn't have any answers.

_If anyone would like the Discord server template with a full guide, please email me._


## Closing

I don't claim this to be the best classroom alternative. Some aspects (mentioned earlier) make it an awful pick for some classes, and I'm not particularly sure how well this approach scales (I know Moveer breaks after having to move 50 or so students, and you have to run the command multiple times). But the system worked astoundingly well for the two classes I ran it in, enough for students in classes I'd TA'd afterwards to ask why they didn't choose Discord. I might never use this setup again, but it serves as a reminder to me to be creative with how you use software, and as an extension, to be creative with anticipating how others might use your software.
