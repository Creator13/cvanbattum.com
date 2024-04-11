In this challenging grid-based stealth game, your task is to guide our character Dan out of a hostile, toxic office environment and keep him out of sight from a series of patrolling guards.{.intro}

This game is the result of an eight-week-long vertical slice project at the Game Design faculty of Uppsala University. Our focus was to deliver a polished experience in a short time span, while simulating and experimenting with a professional working environment. We presented *The Social Grip* at Gotland Game Conference in June 2023, where it received two nominations for Best Level Design and Best Art Design.

![GGC 2023 Nominations](/project_content/social-grip/nominations.jpg){.no-shadow}

## Game architecture

As the lead programmer on this project, I was responsible for managing the software architecture. There were several challenges we faced during the development, not the least of which was time. Many decisions had to be made to prioritize getting things done fast, over doing them properly. 

### Grid-based game

The basis of the game is a 2D-grid upon which our characters move. My earlier experience building grid-based games came in helpful here, as I was able to reuse much of my A* code, as well as avoid pitfalls I made during earlier projects. 

The biggest issue with grid-based games is deciding how to store data about each cell in your grid. For earlier projects I had been using the ostensibly faster, but more cumbersome way of using two-dimensional arrays to store references to my objects. For this project, I decided to reference objects through dictionaries, indexed by structs of x-y coordinates. Since these structs are built into Unity, using them made development fast and convenient. The drawback was that lookup functions started to make a serious dent in performance during pathfinding and similarly heavy functions.

![grid.jpg](/project_content%2Fsocial-grip/grid.jpg)

### Grid performance

Perhaps the greatest technical challenge during this project was managing the performance of the game. The grids of levels were quite big from the start, and this caused rendering to be slow. The initial, naive approach involved each tile object being rendered separately. This was not a viable long-term solution, but because of the strict time constraints I was not able to program a proper solution. We needed a way to modify tile properties for each individual tile (such as whether it's passable), a way to color the tiles in a checker pattern to communicate the grid to the player, but then for performance, we needed to get rid of the concept of individual tiles entirely. 

The fastest solution I was able to come up with, was to generate a single mesh spanning the entire grid. Using some previous mesh generation code, and due to the simple geometric nature of a flat plane, this was up and running in no time at all. The meshes are generated during development time and baked into the game as static mesh assets. By modifying the UV-coordinates, we were able to use a single four-by-four tile texture for the entire floor. This solution fixed most of our performance issues.

![floormesh.png](/project_content/social-grip/floormesh.png){.auto-width}

### A* pathfinding & performance

All movement on the grid is dictated by A* pathfinding. At the end of the project, this was the part of the codebase that still caused most of our performance issues. Possible ideas for future improvements are caching of paths and intermediate grids, pooling of collection objects to improve the _many_ memory allocations that happen during frames, and optimizing the different pathfinding functions themselves.

## Team streamlining

This project was made during an eight-week-long course. Including the startup time and final week of presentations, that left us with just a little over six weeks to make a game. Making sure that everyone could work as independently and freely as possible was critical to our success. I ended up making several small tools to help my teammates with the development process.

### Grid generation
To allow our level designer to prototype different levels easily, the grids can be generated and re-generated easily. It allows modifying the size of the grid and re-generating the floor meshes during changes. 

![generator.png](/project_content/social-grip/generator.png){.auto-width}

### Dynamic level selection
Scene management was one of the most critical things to get right. I wanted our level designer to be able to build levels long before features they relied on were complete. As soon as we started testing, we wanted to be able to quickly create different levels to be able to test certain features separately. Having to manage the scenes in the builds manually quickly became a hassle, and I figured it could easily be automated.

By combining a package for [Scene References](https://bitbucket.org/alfish/com.unity_x.modules.sceneref/src/master/) and [Hextant Utilities' Settings Provider package](https://github.com/hextantstudios/com.hextantstudios.utilities), I spent a few hours on creating a settings menu in which my team could easily manage the levels to be included in a build. These levels are then dynamically loaded into the build, and added to the main menu during runtime. 

![scenes.png](/project_content/social-grip/scenes.png){.auto-width}

## The team: **Chonk Cat Productions**

I had the pleasure of working with this lovely team of talented people for the duration of this project:

- **[Rens van Eldijk](https://rance.nl/)**: Product Owner, level design  
- **[Dylan Kühl](https://kuehldy.itch.io/)**: Producer, UI design
- **[Anna Hatzl](https://hawtsheep.artstation.com/resume)**: Art director, 2D & 3D art
- **[Ottilia Hedberg](https://ottilia.itch.io/)**: Character art, 2D & 3D art
- **[Ilias Keramidas](https://www.linkedin.com/in/ilias-keramidas-254782258/)**: Programming, VFX
- **[Disa Nordström](https://www.linkedin.com/in/disa-nordstr%C3%B6m-82862b278/)**: Quality assurance, social media
- **[Leo Wognum](https://www.linkedin.com/in/leo-wognum-339425250/)**: Music & sound design
- Casper van Battum: Lead programmer

[Itch.io](https://chonk-cats-productions.itch.io/the-social-grip){.external-link}{.game} {.link-container}