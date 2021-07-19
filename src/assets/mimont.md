*Mimont* is an interactive experience which explores what kissing is supposed. Two players find themselves in a sea container, and they're separated by a glass panel. Their goal is to earn points by kissing the glass at the right places, but what happens when they end up kissing at the same spot?{.intro}

This physical interactive experience is meant to be deployed at festivals or popular events that attract a wide public.

As the dedicated programmer and Unity expert in the team, I focused on structuring the program and getting everything to work the way we wanted it to.

![Sea container](/project_content/mimont/render2.jpg){.no-shadow}

## Playtesting during a pandemic
This project was born during the 2020 covid pandemic. This made playtesting a lot harder for us. By opting to implement the prototype using **UDP networking**, it allowed my team and I to playtest the game more safely, while impacting the user experience as little as possible.

For the physical experience, networking is not strictly necessary. We could have made one game instance that rendered to two beamers. But this wouldn't cut it for playtesting. Networking allowed us to playtest the game's experience through a tablet or a smartphone.

<div class="video-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/ovXipv-U9Q0" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe></div>

## UDP networking
I implemented networking using the pre-release [Unity Transport package](https://docs.unity3d.com/Packages/com.unity.transport@0.3/manual/index.html) (v0.3), with plenty of support from my teacher and classmates. This package is very bare-bones and requires a lot of boilerplate before it can be used to make a game. In order to make it more usable and *re*usable, I took on the challenge of abstracting this code away. This has served as the basis for my [Basic Networking package](basic-networking).

### Program structure
The game is built on a server-client network model. Each game is hosted on an integrated server, which player 2 can join (currently directly using the IP address of player 1). This allowed me to write custom clients for debugging purposes as well as a single player mode.

### Networking features
- Fully functioning server-client networking model.
- Local playtesting using phones or tablets.
- Direct IP address connection.

## The team
- [Job Elfrink](https://www.jobelfrink.nl/)
- [Leon van Oldenborgh](https://p4radigm.itch.io/)
- Me

[Play on Itch.io](https://p4radigm.itch.io/mimont){.external-link} [Code on GitHub](https://github.com/Creator13/Mimont){.external-link} [Design document](https://docs.google.com/document/d/1LVjTTzhnp1LH14JwPJwHEUcqjaw-YE4A5-iJ0DFeMWU/edit?usp=sharing){.external-link} {.link-container}