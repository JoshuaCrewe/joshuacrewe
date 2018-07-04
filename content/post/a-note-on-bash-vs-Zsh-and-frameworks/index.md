---
title: "A Note on Bash vs Zsh and Frameworks"
date: 2018-07-04T19:41:57+01:00
draft: true
---

I never gave bash a real go. When I was learning the commandline I was told to install zsh and install oh-my-zsh. I am not sure if this is good advice or not. Zsh auto completion is great when you have it. If you have never had it I dont know if it would be worth the inconvenience of loading zsh wherever you go. Bash is defauly on most systems which is great. For example using the new Windows Subsystem for Linux would be so much easier if bash was your go to shell. Loading zsh is just an added layer of complication.

As for Oh-My-Zsh, I dont use it personally. I couldn't work out what was OMZ and what was regular ZSH. There are some 'features' of OMZ which are not all that complicated to implement everywhere. for example changing directories without `cd` is an option in ZSH and moving multiple directories are just a list of aliases. The point is that using a framework doesn't tell you whats happening. It might as well be magic for all I know. This maybe doesn't bother most people and some would say that it is good for beginners to start with this. I would say that they will stay beginners with this approach and find it harder to learn how to make the shell work for them.

```
    setopt AUTO_CD

    alias -- -='cd -'
    alias -g ...='../..'
    alias -g ....='../../..'
    alias -g .....='../../../..'
    alias -g ......='../../../../..'

```
