import {Project} from "@/types/project";
import fluffy from "@/assets/fluffy.md";
import mimont from "@/assets/mimont.md";
import cfc from "@/assets/cfc.md";
import treasureChest from "@/assets/treasure-chest.md";
import gol from "@/assets/gol.md";
import graphProg from "@/assets/graphprog.md";
// import simfluencer from "!raw-loader!@/assets/simfluencer.md";
import cliffsideCave from "@/assets/cliffside-cave.md";
import proceduralTrees from "@/assets/procedural-trees.md";
import buidlingAnalyzer from "@/assets/buildings-osm.md";
import basicNetworking from "@/assets/basic-networking.md";
// import example from "!raw-loader!@/assets/example.md";

const array: Project[] = [
    {
        "name": "Mimont",
        "slug": "mimont",
        "thumbnailUri": "project_content/mimont/thumb.png",
        "splash": "project_content/mimont/splash.jpg",
        "content": mimont,
        "shortDescription": "Interactive experience exploring the act of kissing.",
        "year": 2020,
        "tags": ["unity", "networking", "experience", "emotional", "csharp", "hku"],
        "techs": ["Unity 2019.3", "UDP networking", "C#"],
        "isFavorite": true,
    },
    {
        "name": "Procedural tree generator",
        "slug": "tree-generator",
        "thumbnailUri": "project_content/tree-gen/thumb.png",
        "splash": "project_content/tree-gen/thumb.png",
        "content": proceduralTrees,
        "shortDescription": "Low-poly tree mesh generator in Unity.",
        "year": 2020,
        "tags": ["unity", "3d modeling", "procedural", "c-sharp", "hku"],
        "techs": ["Unity 2019", "C#"]
    },
    {
        "name": "Where is Fluffy?",
        "slug": "fluffy",
        "thumbnailUri": "project_content/fluffy/thumb.jpg",
        "splash": "project_content/fluffy/thumb.jpg",
        "content": fluffy,
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
        "content": cfc,
        "shortDescription": "Meet strangers while searching for WiFi.",
        "year": 2019,
        "tags": ["interaction", "web", "nodejs", "emotional", "humanity", "social", "hku"],
        "techs": ["Node.js", "Websockets", "Raspberry Pi", "WiFi"],
        "isFavorite": true,
    },
    {
        "name": "Game of Life",
        "slug": "game-of-life",
        "thumbnailUri": "project_content/gol/thumb.png",
        "splash": "project_content/gol/splash.png",
        "content": gol,
        "shortDescription": "Windows console version of the game of life in C++.",
        "year": 2019,
        "tags": ["c++", "hku"],
        "techs": ["C++"]
    },
    {
        "name": "Digital Treasure Chest",
        "slug": "treasure-chest",
        "thumbnailUri": "project_content/treasure-chest/thumb.jpg",
        "splash": "project_content/treasure-chest/splash.jpg",
        "content": treasureChest,
        "shortDescription": "Custom-built chest that opens with a unique, digital code.",
        "year": 2018,
        "tags": ["arduino", "c++", "hardware", "hku"],
        "techs": ["Arduino", "C/C++", "Electronics", "Wood & metalworking"],
        "isFavorite": true,
    },
    // {
    //     // TODO
    //     "name": "The Journalist",
    //     "slug": "journalist",
    //     "thumbnailUri": "project_content/treasure-chest/thumb.jpg",
    //     "splash": "project_content/treasure-chest/splash.jpg",
    //     "content": "",
    //     "shortDescription": "Custom-built chest that opens with a unique, digital code.",
    //     "year": "2020-2021",
    //     "tags": ["arduino", "c++", "hardware", "hku"],
    //     "techs": ["Arduino", "C/C++", "Electronics", "Wood & metalworking"]
    // },
    {
        // TODO
        "name": "Shaders in MonoGame",
        "slug": "graphprog",
        "thumbnailUri": "project_content/graphprog/thumb.jpg",
        "splash": "project_content/graphprog/splash.jpg",
        "content": graphProg,
        "shortDescription": "OpenGL shader programming.",
        "year": 2021,
        "tags": ["arduino", "c++", "hardware", "hku"],
        "techs": ["C#", "MonoGame", "OpenGL", "HLSL"]
    },
    {
        // TODO
        "name": "Building Analyzer",
        "slug": "buildings-osm",
        "thumbnailUri": "project_content/buildings-osm/splash.png",
        "splash": "project_content/buildings-osm/splash.png",
        "content": buidlingAnalyzer,
        "shortDescription": "Node.js tool to help track progress mapping a town on OpenStreetMap",
        "year": "2020-2021",
        "tags": ["nodejs", "javascript", "openstreetmap"],
        "techs": ["Node.js", "OverPass API", "OpenStreetMap"],
    },
    {
        // TODO
        "name": "Cliffside cave",
        "slug": "cliffside-cave",
        "thumbnailUri": "project_content/envmod/thumb.jpg",
        "splash": "project_content/envmod/splash.jpg",
        "content": cliffsideCave,
        "shortDescription": "A small cave, hidden away and forgotten...",
        "year": 2020,
        "tags": ["3d modeling", "environment", "storytelling", "hku"],
        "techs": ["Substance Painter", "Blender", "Unity HDRP"]
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
    {
        // TODO
        "name": "Basic Networking",
        "slug": "basic-networking",
        "thumbnailUri": "project_content/basic-networking/thumb.png",
        "splash": "project_content/basic-networking/thumb.png",
        "content": basicNetworking,
        "shortDescription": "Custom-built chest that opens with a unique, digital code.",
        "year": 2021,
        "tags": ["unity", "csharp", "networking"],
        "techs": ["Unity", "C#", "UDP Networking"]
    },
    // {
    //     "name": "Test Project",
    //     "slug": "test-project",
    //     "thumbnailUri": "project_content/thumbX.png",
    //     "splash": "project_content/thumbX.png",
    //     "content": example,
    //     "shortDescription": "",
    //     "year": 2081,
    //     "tags": ["unity", "dialogue", "entertainment", "storytelling"],
    //     "techs": ["Unity 2021.1", "Yarn Spinner", "C#"]
    // },
];

export default array;