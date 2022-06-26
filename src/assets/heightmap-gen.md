To expand the possibilities and tools environment designers have at their disposal, we could possibly make use of generative neural networks. I was curious to see if a DCGAN could be trained to generate heightmaps that can be loaded into terrain tools in game engines, and these are the results.{.intro}

I adapted a DCGAN written in PyTorch that I found on [github](https://github.com/Natsu6767/DCGAN-PyTorch) as the foundational neural net. It needed to be changed to work on single-channel grayscale images.

## Data
For the input data, I started with a PNG heightmap of the entire earth, provided to us for free by NASA. My algorithm was made for 64x64px images, which also happens to be a nice size to test the feasibility of the project. Training will take much longer with larger images. To get the most out of the input file, the image can be cut up with a rolling window technique, resulting in some overlap in the images. This is no problem for the DCGAN, as it would only get better at learning.

![](/project_content/heightmap-gen/earth.jpg)

After filtering out bad data like even-colored tiles or areas stretched out by the map projection, I ended up with 14,645 unique images. These could again be flipped and rotated several different ways, to end up at a total of 117,160 frames.

## Results
I trained the DCGAN for 15 epochs, in about 7 hours. The resulting heightmaps look quite a bit like actual landscapes:

![](/project_content/heightmap-gen/imgen4.jpg)

The images of 64px are too small to be used in terrains directly, as they contain too little detail to form recognizable landscape features. They could however be used as a more realistic base for terrain generation, compared to for example Perlin noise. The following shows a heightmap 64px loaded into Unity:

![](/project_content/heightmap-gen/heightmap-unity.jpg)

[Code on Github](https://github.com/Creator13/HeightmapGen){.external-link}{.github} {.link-container}