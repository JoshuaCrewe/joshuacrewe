---
title: "Magic SysRq Key"
date: 2021-05-14T18:37:51+01:00
draft: false
---

I can count on one hand the number of times I have borked up my system so badly I didn't know what to do. Each time the stakes have been pretty low so I blew the whole thing away and started again. The real shame is that I didn't know why everything went belly up.

I was chatting to a stanger on the internet the other day and they made me aware of a nice little bit of Linux knowledge. It is called [Magic SysRq key](https://en.wikipedia.org/wiki/Magic_SysRq_key) and it is wonderful.

With a key combination you can drop in to another tty, because it is at the kernel level it will work even when other things aren't. A week after learning about this I was able to actually use it for realz. It gives you the opportunity to `htop` or `kill` whatever you need to and have a little dig around to see what went wrong in tty1.

So, future me, `ctrl+alt+F2`. You are welcome.



