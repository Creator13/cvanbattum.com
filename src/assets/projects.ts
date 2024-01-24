import {Project} from "../types/project";

const projects: Project[] = [
    {
        "name": "Mimont",
        "slug": "mimont",
        "thumbnailUri": "project_content/mimont/thumb.png",
        "splash": "project_content/mimont/splash.jpg",
        "content": "",
        "shortDescription": "Interactive experience exploring the act of kissing.",
        "year": 2020,
        "tags": ["unity", "networking", "experience", "emotional", "csharp", "hku"],
        "techs": ["Unity 2019.3", "UDP networking", "C#"],
        "isFavorite": true,
    },
    {
        "name": "The Social Grip",
        "slug": "social-grip",
        "thumbnailUri": "project_content/social-grip/thumb.png",
        "splash": "project_content/social-grip/splash.jpg",
        "content": "",
        "shortDescription": "Challenging grid-based stealth game.",
        "year": 2023,
        "tags": [],
        "techs": ["Unity 2022.2", "C#", "Grid-based", "Pathfinding"],
        "isFavorite": true,
    },
    {
        "name": "Mapsnap",
        "slug": "mapsnap",
        "thumbnailUri": "project_content/mapsnap/thumb.gif",
        "splash": "project_content/mapsnap/splash.png",
        "content": "",
        "shortDescription": "A command line tool to create snapshots and timelapses of OpenStreetMap.",
        "year": "2021-",
        "tags": ["c-sharp", "openstreetmap", "osm", "dotnet", "image-processing", "cli"],
        "techs": ["C#", ".NET 6.0", "OpenStreetMap", "CLI"],
        "isFavorite": true,
    },
    {
        "name": "Where is Fluffy?",
        "slug": "fluffy",
        "thumbnailUri": "project_content/fluffy/thumb.jpg",
        "splash": "project_content/fluffy/thumb.jpg",
        "content": "",
        "shortDescription": "Interactive story about a young child overcoming their fear.",
        "year": 2021,
        "tags": ["unity", "dialogue", "entertainment", "storytelling", "c-sharp", "hku"],
        "techs": ["Unity 2021.1", "Yarn Spinner", "C#"],
        "isFavorite": true,
    },
    {
        "name": "Connect for Coffee",
        "slug": "connect-for-coffee",
        "thumbnailUri": "project_content/connect-for-coffee/thumb.png",
        "splash": "project_content/connect-for-coffee/logo_notext.svg",
        "content": "",
        "shortDescription": "Meet strangers while searching for WiFi.",
        "year": 2019,
        "tags": ["interaction", "web", "nodejs", "emotional", "humanity", "social", "hku"],
        "techs": ["Node.js", "Websockets", "Raspberry Pi", "WiFi"],
        "isFavorite": true,
    },
    // {
    //     "name": "Game of Life",
    //     "slug": "game-of-life",
    //     "thumbnailUri": "project_content/gol/thumb.png",
    //     "splash": "project_content/gol/splash.png",
    //     "content": "",
    //     "shortDescription": "Windows console version of the game of life in C++.",
    //     "year": 2019,
    //     "tags": ["c++", "hku"],
    //     "techs": ["C++"]
    // },
    {
        "name": "Lunar Lander",
        "slug": "lunar-lander",
        "thumbnailUri": "project_content/lunar-lander/thumb.png",
        "splash": "project_content/lunar-lander/thumb.png",
        "content": "",
        "shortDescription": "OpenGL clone of the classic arcade game",
        "year": 2023,
        "tags": ["c++", "opengl"],
        "techs": ["C++", "OpenGL", "SDL2"]
    },
    {
        "name": "Digital Treasure Chest",
        "slug": "treasure-chest",
        "thumbnailUri": "project_content/treasure-chest/thumb.jpg",
        "splash": "project_content/treasure-chest/splash.jpg",
        "content": "",
        "shortDescription": "Custom-built chest that opens with a unique, digital code.",
        "year": 2018,
        "tags": ["arduino", "c++", "hardware", "hku"],
        "techs": ["Arduino", "C/C++", "Electronics", "Wood & metalworking"],
        "isFavorite": true,
    },
    {
        "name": "Portfolio website",
        "slug": "portfolio",
        "thumbnailUri": "project_content/portfolio/thumb.jpg",
        "splash": "project_content/portfolio/splash.jpg",
        "content": "",
        "shortDescription": "The tech behind this website.",
        "year": "2021-",
        "tags": ["web", "typescript", "node-js", "vue"],
        "techs": ["Typescript", "Vue", "Node.js", "Markdown"]
    },
    {
        "name": "AI heightmap generator",
        "slug": "heightmap-gen",
        "thumbnailUri": "project_content/heightmap-gen/imgen4.jpg",
        "splash": "project_content/heightmap-gen/heightmap-unity.jpg",
        "content": "",
        "shortDescription": "Adapting a neural network to generate heightmaps.",
        "year": "2022",
        "tags": ["ai", "dcgan", "python"],
        "techs": ["AI", "Python", "PyTorch"]
    },
    {
        "name": "Procedural tree generator",
        "slug": "tree-generator",
        "thumbnailUri": "project_content/tree-gen/thumb.png",
        "splash": "project_content/tree-gen/thumb.png",
        "content": "",
        "shortDescription": "Low-poly tree mesh generator in Unity.",
        "year": 2020,
        "tags": ["unity", "3d modeling", "procedural", "c-sharp", "hku"],
        "techs": ["Unity 2019", "C#"]
    },
    {
        "name": "The Journalist",
        "slug": "the-journalist",
        "thumbnailUri": "project_content/journalist/webapp.jpg",
        "splash": "project_content/journalist/splash.png",
        "content": "",
        "shortDescription": "Classroom web app to help teach students about ethics in journalism.",
        "year": "2020-2021",
        "tags": ["web", "typescript", "node-js", "database", "full-stack"],
        "techs": ["Webapp", "Vue", "Node.js", "MongoDB"]
    },
    {
        "name": "Shaders in MonoGame",
        "slug": "graphprog",
        "thumbnailUri": "project_content/graphprog/thumb.jpg",
        "splash": "project_content/graphprog/splash.jpg",
        "content": "",
        "shortDescription": "OpenGL shader programming.",
        "year": 2021,
        "tags": ["arduino", "c++", "hardware", "hku"],
        "techs": ["C#", "MonoGame", "OpenGL", "HLSL"]
    },
    {
        "name": "Cliffside cave",
        "slug": "cliffside-cave",
        "thumbnailUri": "project_content/envmod/thumb.jpg",
        "splash": "project_content/envmod/splash.jpg",
        "content": "",
        "shortDescription": "A small cave, hidden away and forgotten...",
        "year": 2020,
        "tags": ["3d modeling", "environment", "storytelling", "hku"],
        "techs": ["Substance Painter", "Blender", "Unity HDRP"]
    },
    {
        "name": "Basic Networking",
        "slug": "basic-networking",
        "thumbnailUri": "project_content/basic-networking/thumb.png",
        "splash": "project_content/basic-networking/thumb.png",
        "content": "",
        "shortDescription": "Server-client UDP networking with the Unity Transport API.",
        "year": 2021,
        "tags": ["unity", "csharp", "networking"],
        "techs": ["Unity", "C#", "UDP Networking"]
    },
    {
        "name": "Building Analyzer",
        "slug": "buildings-osm",
        "thumbnailUri": "project_content/buildings-osm/splash.png",
        "splash": "project_content/buildings-osm/splash.png",
        "content": "",
        "shortDescription": "Node.js tool to help track progress mapping a town on OpenStreetMap",
        "year": 2020,
        "tags": ["nodejs", "javascript", "openstreetmap", "cli"],
        "techs": ["Node.js", "OverPass API", "OpenStreetMap"],
    },
    // {
    //     // TODO
    //     "name": "Simfluencer",
    //     "slug": "simfluencer",
    //     "thumbnailUri": "project_content/simfluencer/thumb.png",
    //     "splash": "project_content/treasure-chest/splash.jpg",
    //     "content": simfluencer,
    //     "shortDescription": "Game about the impact of spreading fake news.",
    //     "year": "2020",
    //     "tags": ["unity", "c#", "hku"],
    //     "techs": ["Unity", "C#"]
    // },
];

export default projects;