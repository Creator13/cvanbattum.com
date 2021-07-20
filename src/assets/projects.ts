import {Project} from "@/types/project";
import fluffy from "!raw-loader!@/assets/fluffy.md";
import mimont from "!raw-loader!@/assets/mimont.md";
import cfc from "!raw-loader!@/assets/cfc.md";
import treasureChest from "!raw-loader!@/assets/treasure-chest.md";
import gol from "!raw-loader!@/assets/gol.md";
// import example from "!raw-loader!@/assets/example.md";

const array: Project[] = [
    {
        "name": "Connect for Coffee",
        "slug": "connect-for-coffee",
        "thumbnailUri": "project_content/connect-for-coffee/thumb.png",
        "splash": "project_content/connect-for-coffee/logo_notext.svg",
        "content": cfc,
        "shortDescription": "Meet strangers while searching for WiFi.",
        "year": 2019,
        "tags": ["interaction", "web", "nodejs", "emotional", "humanity", "social", "hku"],
        "techs": ["Node.js", "Websockets", "Raspberry Pi", "WiFi"]
    },
    {
        "name": "Mimont",
        "slug": "mimont",
        "thumbnailUri": "project_content/mimont/thumb.png",
        "splash": "project_content/mimont/splash.jpg",
        "content": mimont,
        "shortDescription": "Interactive experience exploring the act of kissing.",
        "year": 2020,
        "tags": ["unity", "networking", "experience", "emotional", "csharp", "hku"],
        "techs": ["Unity 2019.3", "UDP networking", "C#"]
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
        "techs": ["Arduino", "C/C++", "Electronics", "Wood & metalworking"]
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
        "techs": ["Unity 2021.1", "Yarn Spinner", "C#"]
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