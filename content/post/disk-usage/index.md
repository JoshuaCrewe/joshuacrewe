---
title: "Disk Usage"
date: 2021-06-28T09:44:12+01:00
draft: false
---

Since moving to Linux full time I have learnt a lot. I expected to as I was taking the safety net out from under me and forcing myself to figure things out. One of my career goals for a while has been to learn MYSQL direct from the command line. Using Linux where I don't have (want to get?) a gui for interacting with my databases has forced me to get things done without it.

This is not about MYSQL though, this is about finding out what is taking up space on the Hard Disk and figuring out what can be deleted. I was able to learn one new command and figure out another command to facilitate a system clean up.

`du` is a program for showing how much Disk is being Used. Historically I have not been able to get useful output from it and didn't bother to read the manual or anything like this. This time around I did read the manual and came up with the following:

```bash
du -h -d 1 ~/Downloads | sort -hr | less
```

This will scan the give folder (~/Downloads in this case) to the depth of one folder and list the contents with their sizes in a human readable format. The output is piped to `sort` that ... sorts it with the largest files/folders at the top which in turn gets piped to the `less` pager.

It is a bit manual as I move from folder to folder going deeper and deeper to find files to remove. I am sure there are better ways to do it but this is the way I found which worked fine. I cleared out 100s of gigabytes this way so nice and effective.

The reason I am writing about it now is I moved back to the family macOS laptop which has got filled up and so needed to clean out some space. I have always used Daisy Disk in trial mode which has its limitations although it is quite pretty with its graphs. I remembered doing this process recently but couldn't remember the commands. Fish shell does a really good job of remembering the commands for me! This is a way of remembering how I did it the last time, so in six months I can do it again.

The other command which I discovered was `paccache -r` :

```bash
$ man pacchache
...

DESCRIPTION
       Paccache removes old packages from the pacman cache directory. By default the last three versions of a package are kept.

OPERATIONS
        -r, --remove
           Remove candidate packages from the cache directory.
...
```
