---
title: "A Note on Bash vs Zsh and Frameworks"
date: 2018-07-04T20:41:57+01:00
draft: false
---

I never gave bash a real go. When I was learning the command line [I was told to install zsh and install oh-my-zsh](https://commandlinepoweruser.com/). I am not sure if this is good advice or not. Zsh auto completion is great when you have it. If you have never had it I dont know if it would be worth the inconvenience of loading zsh wherever you go. Bash is default on most systems which is great. For example using the new Windows Subsystem for Linux would be so much easier if bash was your go to shell. Loading zsh is just an added layer of complexity.

As for Oh-My-Zsh, I dont use it personally. I couldn't work out what was OMZ and what was regular ZSH. There are some 'features' of OMZ which are not all that complicated to implement everywhere. for example changing directories without `cd` is an option in ZSH and moving multiple directories are just a list of aliases. 

```
setopt AUTO_CD

alias -- -='cd -'
alias -g ...='../..'
alias -g ....='../../..'
alias -g .....='../../../..'
alias -g ......='../../../../..'

```

The point is that using a framework didn't tell me whats happening. It might as well be magic for all I know. This maybe doesn't bother most people and some would say that it is good for beginners to start with this. I would say that they will stay beginners with this approach and find it harder to learn how to make the shell work for them.

Turning it all off was a good decision. It didn't take all that much time to figure out what I missed, search for a solution and implement it. The pay off is the speed which a new prompt starts with. Terminal windows are fairly disposible and I tend to spin up and destroy windows fairly regularly. The less time waiting for a prompt to appear is a good thing.

Not loading settings and functions you don't need will be a minor win, we are talking marginal gains here. What it did for me was send me down a path which enpowered me to enhance the shell how I wanted it. Writing functions for semi complicated tasks for example is not something I would have thought to do without ditching the framework and getting my hands dirty. 

There is a lot to be said about not reinventing the wheel though, and frameworks like Oh My Zsh and Pretzo benefit greatly from the communities that maintain them.
