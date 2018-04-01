---
title: "A Less Hostile Environment"
date: 2018-03-23T19:27:08Z
draft: true
---
I often wonder how I ended up working the way I do. Things move quite quickly in tech land, which can make it hard to keep up sometimes. I personally like working in the terminal because the whole experience is stripped back. There is a certain relaxing feeling one gets from having a lack of choice. What follows are a few notes I have written myself on how to make the command line feel like home.

## Learn some basics

This might be obvious but learn some basic commands. Get a nice Linux box or VM and get moving around the file system. Learn what [pipes](https://en.wikipedia.org/wiki/Pipeline_%28Unix%29<Paste>) (|) are, what they do and how they should be used. Read up on what the [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) and what [Linux](https://en.wikipedia.org/wiki/Linux) is. 

## Install a theme

On first boot the terminal can look a bit sparse. MacOS ships with a plain white window and small text. Not only is it not so easy on the eyes but adding a bit of color can help focus the eyes on where the action is.

I use [seoul256](https://github.com/junegunn/seoul256.vim) because I used the Vim one. I used that for Vim because I used [vim-plug](https://github.com/junegunn/vim-plug) the plugin manager. It is made by the [same person](https://github.com/junegunn). Thats the logic. The terminal can be a bit limited with colours even in 2018. [Terminals can be colourful](terminals.sexy) though.

## Get a good prompt

TODO: Explain why you would want to use a good prompt.
TODO: Add link to making your own

I use Pure because it is nice&trade; and doesn't take up a lot of room. Some information is nice and greyed out and there is a git status indicator. It is missing a vital feature if you want to use vi key bindings which is a mode indicator.[1]

TODO: Add Image for prompt on its own and with git markers

## Syntax Highlighting

Now that we have some colours we are on to the most useful tool I have found. When using another machine in vanilla mode this is what I miss the most. Basically when a command is valid the text goes green. When it is not valid it goes red. This is a really quick way to check for installed programs and easily spot spelling mistakes which can save time.

## Use FZF

This is one of the most useful tools on the command line and many command line apps (like vim). Getting to know what this does and how it can enhance the existing features on the command line will pay off. ( searching history for example ). I often use it to navigate through a list of folders with `m-c` or `<ESC>-c`. Or get a list of the files in all the sub folders from the current working directory.

TODO: This is a little too advanced to talk about here.

You can use it for *lots* of things. Git branches and commit messages.

TODO: Add Gif of navigating through files and folders

## Use fzf-marks

This is another really useful tool if you want to go back to the same places each time. The principle is a simple one. Navigate to a folder and mark that location in a file. When you want to return to one of the bookmarked locations you can `jump` to it. This implementation uses fzf to list out all the book marks for fuzzy finding the one that you want. I have a book mark in every project I work on and a few for other locations on my computer. My notes directory for example. Or the Downloads folder.

I know that `z - the frecent command` exists and I have used it but never really remembered to use it properly. It always seemed too wooly for me.

## Appendix One

### A note on bash vs Zsh and frameworks

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

## Appendix Two

### BONUS

#### Use a plugin manager.

I have used them all and zplugin is the best so far.

#### Use a package manager

i.e pacman / pacaur, aptitude, brew

## Notes

[1] I like the idea of using the vi keybindings more than I like it in practice. In my experience I get stuck really easily. Being stuck in normal mode is disorientating and takes a bit of mental agility to get back to editing normally. This is because it behaves more like vi than vim which doesn't have some of the niceties, such as nocompatible mode. This could be helped with an indicator displaying which mode you are in but it might not.
