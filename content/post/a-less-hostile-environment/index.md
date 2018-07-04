---
title: "A Less Hostile Environment"
date: 2018-07-04T19:43:37+01:00
draft: false
---
I often wonder how I ended up working the way I do. Things move quite quickly in tech land, which can make it hard to keep up sometimes. I personally like working in the terminal because the whole experience is stripped back. There is a certain relaxing feeling one gets from having a lack of choice. What follows are a few notes I have written myself on how to make the command line feel like home.

## Learn some basics

This might be obvious but learn some basic commands. Get a nice Linux box or VM and get moving around the file system. Learn what [pipes](https://en.wikipedia.org/wiki/Pipeline_%28Unix%29<Paste>) ( | ) are, what they do and how they should be used. Read up on what the [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) and what [Linux](https://en.wikipedia.org/wiki/Linux) is. 

## Install a theme

On first boot the terminal can look a bit sparse. MacOS ships with a plain white window and small text. Not only is it not so easy on the eyes but adding a bit of color can help focus the eyes on where the action is.

{{< img default-terminal "macOS terminal out the box" >}}

I use [seoul256](https://github.com/junegunn/seoul256.vim) because I used the Vim one. I used that for Vim because I used [vim-plug](https://github.com/junegunn/vim-plug) the plugin manager. It is made by the [same person](https://github.com/junegunn). Thats the logic. The terminal can be a bit limited with colours even in 2018. [Terminals can be colourful](terminals.sexy) though.

## Get a good prompt

A good prompt is subjective. What makes a good prompt comes down to what you want to have quick access to in your terminal all the time. There is a whole host of information that can be useful here. Most people have the current directory I imagine, with a lot of developers choosing to put some sort of git status there too. When ssh'ing into a lot of machines it might be useful to include the host name too. The benefit a good prompt will show all kinds of information about your current state in a succinctly.

{{< img seoul-256 "Pure prompt on Seoul 256 theme" >}}

I use Pure because it is nice&trade; and doesn't take up a lot of room. Some information is nice and greyed out and there is a git status indicator. It is missing a vital feature if you want to use vi key bindings which is a mode indicator.

NOTE: I like the idea of using the vi key bindings more than I like it in practice. In my experience I get stuck really easily. Being stuck in normal mode is disorientating and takes a bit of mental agility to get back to editing normally. This is because it behaves more like vi than Vim which doesn't have some of the niceties, such as nocompatible mode. This could be helped with an indicator displaying which mode you are in but it might not.

{{< img pure-prompt "Pure prompt with git markers" >}}

If you wanted to, you can [make your own](http://ezprompt.net/).

## Syntax Highlighting

Now that we have some colours we are on to the most useful tool I have found. When using another vanilla machine this is what I miss the most. Basically when a command is valid the text goes green. When it is not valid it goes red. This is a really quick way to check for installed programs and easily spot spelling mistakes which can save time.

{{< img syntax-highlighting "Syntax highlighting in the terminal" >}}

I believe that [zsh-users/zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) is the most popular plugin for achieving this. I have at some point in the past switched to [zdharma/fast-syntax-highlighting](https://github.com/zdharma/fast-syntax-highlighting), I believe the marketing, it probably is faster.

## Use FZF

This is one of the most useful tools on the command line and can be used in many command line apps (like [Vim](https://github.com/junegunn/fzf.vim)). Getting to know what this does and how it can enhance the existing features on the command line will pay off. ( searching history for example ). I often use it to navigate through a list of folders with `m-c` or `<ESC>-c`. Or get a list of the files in all the sub folders from the current working directory.

You can use it for *lots* of things. Git branches, commit messages, histories of all kinds, tags, tmux sessions etc. The key to fzf is it's simplicity. It takes text, lets your fuzzy find your way through it, and spits out the result. It is very UNIXy.

## Use fzf-marks

This is another [really useful tool](https://github.com/urbainvaes/fzf-marks) if you want to go back to the same places each time. The principle is a simple one. Navigate to a folder and mark that location in a file. When you want to return to one of the bookmarked locations you can `jump` to it. This implementation uses fzf to list out all the book marks for fuzzy finding the one that you want. I have a book mark in every project I work on and a few for other locations on my computer. My notes directory for example. Or the Downloads folder.

I know that `z - the frecent command` exists and I have used it but never really remembered to use it properly. It always seemed too woolly for me.

## Just to start

These are a few of the things which I find makes the terminal feel more like home. There are likely a [few more things](https://github.com/JoshuaCrewe/dotfiles) which will contribute towards a comfortable and *productive* environment, but these are probably the core of it. These notes will most likely act as a marker to see what changes over the years of tweaking and fixing in the terminal.
