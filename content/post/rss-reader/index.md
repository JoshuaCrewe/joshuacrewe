---
title: "I have the best RSS reader"
date: 2021-06-16T19:38:40+01:00
draft: false
---

... almost. If Pocket was open source it would be perfect. They did say they were going to open source it but haven't yet. I doubt they will. Which is a shame.

The best thing about pocket is the typography. They did a good job to make text look good. It is a really nice reading experience in my opinion. It has a bunch of other things which are really undesirable. You can pay for it to remove adverts which is fine. There is a whole social side of it which is not fine but pretty easy to ignore. It doesn't have RSS built in however.

So the other part to this is a nice script written in Rust (take a drink!) that takes in RSS urls and spits out new articles to the pocket API.

=> [Feeds To Pocket on Github](https://github.com/FraGag/feeds-to-pocket)

It has been really good. I set it up years ago and it has continued to do the thing it said it would do. Even setting it up was led by a couple of commands. You know, proper software. Good Job. The list of posts that it is monitoring is stored in a config file and I have up until recently just moved this from machine to machine using nexcloud.

Recently I bought myself a birthday present in the form of a raspberry pi. So now instead of the script syncing RSS feeds to my pocket list automatically when I started a tmux session, it runs on a systemd timer on the pi.

The only issue I have now is that all the people I follow on RSS have stopped writing on their blogs.

I am also never really sure if the systemd timer is running. It is the best RSS reader / setup ever. OK?
