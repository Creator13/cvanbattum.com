A small clone of the classic Lunar Lander arcade game, built in C++ with the SDL2 library, made for the linear algebra course at the Uppsala University Game Design program.{.intro}

The goal for this project was to create a solidly built game, that was still manageable to create in just two weeks. I challenged myself to implement some fancier features at the cost of gameplay, such as an animated flame and simulated physics.

## Not-really-an-engine

Creating an engine for a small game like this makes absolutely no sense. There is no need for much object management, with just a single object in the world. However, that didn't withold me from implementing some abstractions that would make the code cleaner and better separated.

To this end, I separated input reading and time management to their own separate modules. I created the lander as a separate object, responsible for its own drawing and update logic. Same for the ground, but since this is not a user-interactable object, it ended up as simply a wrapper around a draw function.

The Game itself is still responsible for thing that would otherwise go into complicated systems, like collision, physics, and win conditions.

### Collision
Collision detection is extremely simple. However, an AABB model was not enough, because the main mechanic of the game is rotation. The solution I came up with is to have two collision points that are checked against intersecting with the ground. The two outer points of the legs are perfect for this. Since the legs extend slightly, it is always guaranteed that one of them is the lowest point on the lander. 

In the current implementation, only the altitude of these points is set and I did not implement collision with a complexly shaped ground.

[Source](https://github.com/Creator13/lunar-lander){.external-link}{.github} {.link-container}