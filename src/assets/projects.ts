import {Project} from "@/types/project";
import fluffy from "!raw-loader!@/assets/fluffy.md";
import mimont from "!raw-loader!@/assets/mimont.md";
import cfc from "!raw-loader!@/assets/cfc.md";
// import example from "!raw-loader!@/assets/example.md";

const array: Project[] = [
    {
        "name": "Connect for Coffee",
        "slug": "connect-for-coffee",
        "thumbnailUri": "project_content/connect-for-coffee/thumb.png",
        "splash": "project_content/connect-for-coffee/thumb.png",
        "content": cfc,
        "shortDescription": "Meet strangers while searching for WiFi.",
        "year": 2019,
        "tags": ["unity", "dialogue", "entertainment", "storytelling"],
        "techs": ["Node.js", "Websockets", "Raspberry Pi", "WiFi captive portal"]
    },
    {
        "name": "Mimont",
        "slug": "mimont",
        "thumbnailUri": "project_content/mimont/thumb.png",
        "splash": "project_content/mimont/splash.jpg",
        "content": mimont,
        "shortDescription": "Interactive experience exploring the act of kissing.",
        "year": 2020,
        "tags": ["unity", "networking", "experience", "emotional", "csharp"],
        "techs": ["Unity 2019.3", "UDP networking", "C#"]
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
    {
        "name": "Where is Fluffy?",
        "slug": "fluffy",
        "thumbnailUri": "project_content/fluffy/thumb.jpg",
        "splash": "project_content/fluffy/thumb.jpg",
        "content": fluffy,
        "shortDescription": "Interactive story about a young child overcoming their fear.",
        "year": 2021,
        "tags": ["unity", "dialogue", "entertainment", "storytelling", "c-sharp"],
        "techs": ["Unity 2021.1", "Yarn Spinner", "C#"]
    }
];

export default array;