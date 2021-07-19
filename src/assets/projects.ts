import {Project} from "@/types/project";
import fluffy from "!raw-loader!@/assets/fluffy.md";
import example from "!raw-loader!@/assets/example.md";

const array: Project[] = [
    {
        "name": "#Connect-For-Coffee",
        "slug": "connect-for-coffee",
        "thumbnailUri": "project_content/connect-for-coffee/thumb.png",
        "splash": "project_content/connect-for-coffee/thumb.png",
        "content": "CFC is a **fun** game lorem ispsum blablablala",
        "shortDescription": "Meet strangers while searching for WiFi.",
        "year": 2019
    },
    {
        "name": "Mimont",
        "slug": "mimont",
        "thumbnailUri": "project_content/mimont/thumb.png",
        "splash": "project_content/mimont/thumb.png",
        "content": "",
        "shortDescription": "",
        "year": 2020
    },
    {
        "name": "Test Project",
        "slug": "test-project",
        "thumbnailUri": "project_content/thumbX.png",
        "splash": "url://todo",
        "content": example,
        "shortDescription": "",
        "year": 2081
    },
    {
        "name": "Where is Fluffy?",
        "slug": "fluffy",
        "thumbnailUri": "project_content/fluffy/thumb.png",
        "splash": "project_content/fluffy/thumb.png",
        "content": fluffy,
        "shortDescription": "Interactive story about a young child overcoming their fear.",
        "year": 2021
    }
];

export default array;