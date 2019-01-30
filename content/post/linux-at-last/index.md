---
title: "Linux at Last"
date: 2018-10-29T19:25:55+01:00
draft: false
---

After a number of years working out of virtual machines, where the host can get in the way of a native experience, I have finally got my hands on a machine dedicated to running Linux.

## It has been a long time coming

As a family, we have always been Apple users. We used an SE30 growing up, a power PC for my pre teen years before graduating to a clamshell iBook as the last of our family shared computers. When I got my first real job I saved enough money to buy my first laptop of my very own. A 13" white macbook (pre unibody) which was a very special machine to me. The last decent mac I owned was a 2013 macbook, one of the first models I discovered that could be sold without a disk drive. I bought it because my white macbook got stolen and I had just started out in a freelance web development career and so needed a machine to work on. Since buying that Mac I have totally fallen out of love with Apple, who used to make beautiful things that I felt I needed and now make the same old hardware which is remaining expensive but is no longer offering anything new.

Enter Linux. As is probably true with a lot of Linux users today, I got my start with the Raspberry Pi. It was a gift from my brother for my birthday which I had to search the internet to find out suggestions for what to do with. The projects were fairly tame and tutorial based. I turned it into a Playstation emulator, a storage device and finally it ran my website and all my emails. I ended up bricking it and it hasn't made it far out of the drawer since doing that. What it really gave me was a learning experience in computing which has influenced much of my working environment. It first taught me that I could access my device (the pi) via ssh from my laptop without needing to get dedicated screens, mice and keyboards. This meant that I could tinker essentially risk free from the comfort of my arm chair while the pi was humming away in a cupboard.

I then learnt that it was possible to run the operating system in a virtual machine on the same laptop for a similar effect. This gave me the opportunity to test out desktop Linux, trying it on for size to see if it could perform as well as the macOS I was used to.

After many years of tinkering, learning, fixing and swearing I have now managed to get my hands on a dedicated Linux machine to do whatever I want to on.

## "What did you get?"

Good question. I got a Lenovo E580 15" Thinkpad. Glad you asked? This model lets you upgrade the components which was on my wish list. If in a few years I find out that 8GB RAM doesn't cover my work load then I can add some more. If I fill up all 256GBs of hard disk space? Get a bigger one. It is this sort of thing that makes me feel better about spending the money. I chose Lenovo because I trust the brand more than the others. It has a good reputation for being able to run Linux and this particular model didn't seem to report any issues with running the OS. So far (I am well over half way to an environment I am happy with) it works great. Installing Linux was alright.

## "Just alright? Not easy?"

I chose Arch Linux a long time ago as my Linux Distribution of choice because I wanted to learn how it all fit together. I have been somewhat preoccupied with only having applications that I actually use installed on my machine. If I don't view media files why do I need an app to read them? I know which terminal I want to use, why do I need a 'default' one etc. I had been practicing the install on virtual machines for a while and had it sorted in those environments. When it came to installing on the new laptop I found there were a few gaps. How to handle a UEFI install is something I had never managed to practice with before (Virtual box has a setting but the ISO never boot with it on so I gave up trying). I accidentally installed the boot loader on the install media USB which meant that the laptop didn't boot without the USB present. I am choosing to consider this to be a security feature that I ultimately didn't want to use so 'fixed' it. The rest worked out fine.

Once the initial install was complete I entered phase two (which is, I suppose, the stage I am coming to an end to now). This is configuring the working environment to my liking. There are a few features I felt I needed and a few experiences I could have done without.

## "What do you need?"

There are a few features that I have gotten used to using on my macOS setup. These are not necessarily features of macOS but more things that I set up on Apple software that I would need to replicate on Linux.

### Dual function modifiers

This includes making the caps lock key act as escape when pressed and control when held. The hardest is making tab act like tab when tapped and [Hyper](http://stevelosh.com/blog/2012/10/a-modern-space-cadet/#hyper) when held.

### Runs a development environment

This is things like node, php, gulp, webpack, ruby, vim, zsh, Firefox etc.

### Silly things like window decorations

When quitting applications I always use `⌘+q`. When closing it is `⌘+w`. I almost never use the red dot on a window's title bar. The title bar has become dead space for me. iTerm and Firefox don't have it if you don't want it and I like this enough to want that option everywhere. This is not possible with Apple but could be with Linux.

## "What do you think?"

Somethings are harder than they should be. There were some issues that I ended up solving that I didn't think I should have had to solve. Screen tearing is something I had to find out [how to fix](https://www.pcsuggest.com/fix-linux-screen-tearing/) which really should have been turned on by default (?!).

It takes a lot of time for the path I have chosen. This is definitely very specific to my circumstances. I mentioned at the top of this that I chose Arch for the learning experience but in practice I don't always have a lot of spare time to not be productive. There may only be twenty minutes before the kids wake up and I want to test out flashing a new OS to a spare phone. On a more familiar machine this might be doable but I don't always know how to do simple things in Linux like mounting a USB drive quickly. The main problem is that I can get really distracted in the tweaking stage. Trying to get X to render fonts in a way that I was happy with has taken a looooong time and I am still not sure I have done it right (Fonts are a bit small maybe? Bit thin in places. I dunno, maybe it is OK etc.) which can eat away at time better spent elsewhere.

## It continues

The list goes on and on. I am very excited by what I have now though and I am more often than not really eager to get on and use this software with the hope of contributing back to the community in true open source style.
