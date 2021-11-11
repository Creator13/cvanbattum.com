Mapsnap is a small command line tool to grab images from OpenStreetMap, targeted at mappers and contributors, with the purpose of creating snapshots and timelapses of mapping progress.{.intro}

As a frequent contributor to the OpenStreetMap project, I wanted to create timelapses of the areas I was working on. I would simply create screenshots of the map at openstreetmap.org, crop them and stitch them together using some gif editor. This process was as cumbersome as it was unreliable and prone to errors, so I decided to create a tool that would do it for me.

## Features
- **Snapshot**: Capture any region of the rendered OpenStreetMap slippy map, by entering the boundary coordinates and the zoom level you want to want.
- **Projects**: Store the area you want to capture in a project file, so you can capture a new snapshot of the exact same area each time.
- **Filename customization**: Choose between saving the images with index numbering or with a date format.

## How does it work?
OpenStreetMap is an ambitious open data project aimed at creating an open map of the entire world. At its core, it is just a very big database containing all the points and shapes and their properties. This is not very interesting to look at yet. The map you see at openstreetmap.org (referred to as the [Slippy Map](https://wiki.openstreetmap.org/wiki/Slippy_Map)) is the result of the one of the many renderers that turn the data into a visually appealing map.

A map is too big to store in one single image. The solution to that is to chop the whole map up in small pieces called tiles. OpenStreetMap is divided in tiles of 256x256 pixels, and if the web viewer can show these tiles, so can any program with internet access. These tiles are used by mapsnap to create images.

For example, this is the link to a tile containing the city of amsterdam: https://tile.openstreetmap.org/13/4207/2692.png. And here is the tile directly embedded into this website: ![](https://b.tile.openstreetmap.org/13/4207/2692.png){.no-shadow}{.auto-width}

Due to the open nature of OpenStreetMap, the tile servers are freely accessible to anyone. The wiki has a [page](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames) listing all the technical details on how to access these servers and get the exact tiles you want. It comes down to converting GPS coordinates into the x and y coordinates of the tile that contains those coordinates, and turning that into a link. 

In mapsnap, you need to provide two coordinate pairs, i.e. two points on the map. Those coordinates get turned into links to tiles, as well as every single tile in a rectangle between those points. All these tiles then get downloaded to the computer. To create a final output image, all the tiles get stitched together into one big image that will be saved to the computer. Now it looks just like you downloaded a single part of the map!

## Usage
The program has two simple commands. The first one is `init`, which creates a new project with the specified settings:
```shell
> mapsnap init myProject "52.3990,4.8591" "52.3393,4.9781" 15
```
The second is `snap` which loads a project and snaps an image of the map as it currently is.
```shell
/myProject> mapsnap snap
```

To see more about the commands, visit the [wiki](https://github.com/Creator13/mapsnap/wiki) on GitHub.

## Libraries
What began as a simple tool quickly became as much a quest to make myself better acquainted with the .NET framework. I settled for .NET because I wanted to program this application in C#, and I was simply curious as to what the modern .NET framework and ecosystem are capable of. 

### Multi-platform support
.NET Core 3.0 introduced out-of-the-box native compatibility for all major platforms, which was one of the requirements I had for this tool. To be able to perform any image processing operations, I couldn't rely on a library that had native dependencies, as this would break the multi-platform support. I settled on [ImageSharp](https://github.com/SixLabors/ImageSharp), a popular library that aims for near-native performance without any native dependencies.

### Command line interface
Command line interfaces can be tricky to write. The parsing that is required can grow very large, very quickly. I opted for using a library instead of doing all the work myself. The one I chose is the [System.CommandLine](https://github.com/dotnet/command-line-api) package, which aims to greatly simplify the process of writing command line tools. It is developed as an optional part to the official .NET framework, and is currently still in beta. I found it to be more user-friendly and at least as feature-complete as the older and more popular [CommandlineParser](https://github.com/commandlineparser/commandline) package, and I would highly recommend keeping a close eye on it!

## Interested?
View the source code, downloads and full usage guide on Github:

[Repository on GitHub](https://github.com/Creator13/mapsnap){.external-link}{.github} {.link-container}