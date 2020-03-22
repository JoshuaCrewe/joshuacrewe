---
title: "Pacman Helpers"
date: 2020-03-22T19:20:12+01:00
---

There are a few commands for pacman that I tend to forget but find really useful. A full list can be found in the [Arch Wiki](https://wiki.archlinux.org/index.php/Pacman).

```bash
# Search for a package to install
pacman -Ss <package>

# Search locally to see if a packge is already installed
pacman -Qs <package>

# List all packages which have been installed locally i.e. downloaded from the aur.
pacman -Qm

# list packages no longer required as dependencies
pacman -Qdt

# Remove a package and its dependencies
pacman -Rs <package>
```

