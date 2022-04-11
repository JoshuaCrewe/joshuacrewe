---
title: "I really do have the best RSS reader"
date: 2022-04-10T14:13:02+01:00
draft: false
---

Previously I [wrote about having the best RSS reader](/post/rss-reader) with the caveat that Pocket wasn't open source. Well, pocket are moving all their accounts over to Firefox accounts. This was enough of a faff that I did a silly thing and started self hosting a [Wallabag](https://www.wallabag.it/en) instance.

I already have a Firefox account which I use and like. But it uses a different email to the Pocket account I have. So either I end up with two Firefox accounts or I need to migrate content from pocket to firefox. Which involves moving the existing data but also reconfiguring the rss to pocket script.

If I am going to do that I might as well move to Wallabag as it is the same process. With two (important) caveats to this :
1. I didn't have Wallabag set up at the time
2. I didn't have an rss to wallabag solution

Both of these things are not a small amount of work, certainly more than the migration to firefox accounts outlined above.

I have wanted to try wallabag for a while as it is open source and a pretty well shouted about alternative to Pocket. I am self hosting some other things and Docker is easy (right!) so adding another self hosted service is not completely nuts.

Not having an RSS to Wallabag script was a bigger deal. I tried to port the existing rss to pocket script but it was too difficult. I don't know Rust and the organisation of the code wasn't making sense to me. Fortunately I had already done the ground work before, go me!

I once upon a time wrote a script in Go to do the same thing as the rust feeds to pocket script. I did it to learn Go and once I got most of the way there I stopped, feeling pleased with myself and carried on using the Rust script. Porting the Go version to Wallabag was pretty straight forwards. I found Go easier to work with and as I was the author of this dodgy code it was easier for me to work with it.

I have got as far as getting it to work with a long list of improvements I want to make one day. First is to stop it completely crashing out if the rss feed returns a 404. The other is to not store usernames, passwords and access tokens in the config file in plain text. I don't know why wallabag needs your user name, password AND access tokens to send articles to itself but there we are. I am currently thinking about encrypting that data and passing the password to the script via an ENV or something.

Essentially this Go script and Wallabag has all the benefits/flow of the old setup but with the benefit that now everything is open source.
