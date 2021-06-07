---
title: "Library (two years for a silly reason)"
date: 2021-06-07T20:34:35+01:00
draft: false
---

According to git, I started this coding journey 17th March 2019. The decision would have come before then. What I did was create an alternative front end for my local library book lending service. The idea isn't really a new idea, alternative front ends exist for big services like YouTube and Twitter and Instagram. You know. Those big popular services with many many users who want to distance themselves from privacy disrespecting services.

I made an alternative front end for Cornwall Council Library becase I didn't like how it scrolled on a phone.

The website had this truly disorientating "feature" where if you swiped your thumb to the left or right it would change the pagination or the catalogue enty forward or back one. The problem was that it couldn't tell if you were scrolling down or scrolling left. I would be looking through some results and then all of a sudden I would be navigated to another page of differnet content. It is truly infuriating.

Now I tried some different avenues for resolution. I contacted the Library and even rang the creators of the software ON THE PHONE to try and disable this feature. Once this reached a dead end I tried to find out if there was a legit API I could use to create my front end with. That would have been ace. I even called them on the phone again to get some answers. No response.

In the end I used a PHP webscraper and Lumen to make my own API to build my front end on. There are two reasons for this post. 

1. To celebrate a critical number of features that make the service useable
2. It relies on the library catalogue existing as it is and it could go away for ever if something changes

So here it is :

{{< img library-home-page "Library Home Page" >}}

And if you do a search, it will look like this :

{{< img library-search "Library Search" >}}

When you click on a result you get this page :

{{< img library-item "Library Item" >}}

When you search you get a spinner :

{{< img searching "When you search you get a spinner" >}}

There are also loading states, like this single page :

{{< img loading-single "Loading view for a single item" >}}

And this archive page :

{{< img loading-archive "Loading view for the archive" >}}

You can view your lists of items you want to borrow :

{{< img lists "The list view" >}}

And there is the dashboard view :

{{< img dashboard "The dashboard view" >}}

I am pretty happy with the way this has turned out. You can browse, reserve, cancel and renew books. As well as browse and add to your lists. This is enough feature for me to use this alternative front end in place of the actual library website.

This is a way to preserve the silly amount of work I have done to make this.
