*Where is Fluffy* is a short game made as an exercise in interactive narrative design. Its story revolves around Robin, who wakes up scared in the middle of the night and can't find their stuffed animal to comfort them. You embark on a nightly adventure to find him...{.intro}

The focus of this two-week course in interactive narrative design at the HKU was to create was to create an **interactive storytelling experience**. Out of the many different ways to create an experience like that, we chose the form of a game with **branching dialogue** and **different possible endings** based on player choices.

![Fluffy scene](/project_content/fluffy/screen_room.jpg){.no-shadow}

## Creating a platform for **collaborative branching dialogue**
My biggest challenge creating this game was to implement a system that allowed my teammates, some of whom had never coded or used Unity before, to contribute to the dialogue in a comprehensive way. In previous projects, I had made a graph-based dialogue editor with xNode, but those projects would quickly become exponentially more unmanageable the more conversations were involved. It would also have taken a significant time to set up.

![Fluffy scene](/project_content/fluffy/screen_fort.jpg){.no-shadow}

### Yarn Spinner to the rescue
Through a bit of research, I ended up at these amazing talks on how [Firewatch](https://www.youtube.com/watch?v=RVFyRV43Ei8&) and [Night in the Woods](https://www.youtube.com/watch?v=Qsiu-zzDYww) manage their extensive. Although a world like Firewatch's was slightly out of our scope, the solution offered by Night in the Woods sounded very interesting. On top of that, their solution called [**Yarn Spinner**](https://yarnspinner.dev/) was open source! It turned out that, combined with the also available Yarn Spinner Unity extension, it was surprisingly easy to set up without sacrificing much flexibility.

### Story editing with Yarn
The power of Yarn Spinner lies in the highly configurable Yarn files. On top of containing our dialogue, I could leverage the power of **commands** and **variables** to manage a large part of the story progress. I implemented commands to trigger actions in the game (showing an item to the player for example) and record player choices. These commands then got captured by the dialogue runner where I could write handler functions and change the game's state based upon the commands. And the best part was that editing the files was easy enough for everyone to contribute when I had my hands full programming!

![Yarn file](/project_content/fluffy/screen_yarn2.png){.no-shadow}

## Editor tools for **player agency**
To improve the players' engagement with the story, we gave them more agency by giving them the choice of what Fluffy looks like. In several dialogue options (see above), the player can choose three properties: a pattern, a color, and an accessory. When Robin finally finds Fluffy, the in-game sprite of the plushy animal will reflect the choices the player made. To save the artists some work, I created a simple tool which mixes the different properties and generates a new sprite. Instead of having to create 27 permutations of Fluffy, one for each option, we only needed 9 images plus a base layer!

![Mix 'n Match Fluffy](/project_content/fluffy/plushy_mix.gif){.no-shadow}

## Made in collaboration with

- [Yasmine Aarts](https://www.instagram.com/paprikaworm/) - Character design & animation
- [Sterre Eijk](https://www.instagram.com/bungley/) - Monster design & animation
- [Simone Abbring](https://www.instagram.com/moonimations/) - Environment design
- [Naomi Aalbers](https://www.instagram.com/aalbersnaomi/) - Dialogue writing
- And special thanks to [Tim de Jongh](https://timthelittlefoxbus.wixsite.com/home) who offered to create a soundtrack for our game!

[Play on Itch.io!](https://cvbattum.itch.io/fluffy){.external-link}{.game} [Source code on GitHub](https://github.com/Creator13/FluffyGame){.external-link}{.github} {.link-container}