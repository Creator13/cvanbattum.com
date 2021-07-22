import {Project} from "@/types/project";
import projects from "@/assets/projects";

import fluffy from "@/assets/fluffy.md";
import mimont from "@/assets/mimont.md";
import cfc from "@/assets/cfc.md";
import treasureChest from "@/assets/treasure-chest.md";
import gol from "@/assets/gol.md";
import graphProg from "@/assets/graphprog.md";
import cliffsideCave from "@/assets/cliffside-cave.md";
import proceduralTrees from "@/assets/procedural-trees.md";
import buidlingAnalyzer from "@/assets/buildings-osm.md";
import basicNetworking from "@/assets/basic-networking.md";
// import example from "!raw-loader!@/assets/example.md";
// import simfluencer from "!raw-loader!@/assets/simfluencer.md";

const markdown: {[id: string]: string} = {
    "fluffy": fluffy,
    "mimont": mimont,
    "connect-for-coffee": cfc,
    "treasure-chest": treasureChest,
    "game-of-life": gol,
    "tree-generator": proceduralTrees,
    "buildings-osm": buidlingAnalyzer,
    "graphprog": graphProg,
    "cliffside-cave": cliffsideCave,
    "basic-networking": basicNetworking,
}

export function loadProject(slug: string): Project {
    const project = projects.find(project => project.slug === slug);

    if (project === undefined) {
        return <Project>{};
    }

    project.content = markdown[project.slug] ?? "**If you see this, something went wrong...**";

    return project;
}

export function projectExists(slug: string): boolean {
    return projects.some(project => project.slug === slug);
}

export function loadAllProjects(): Project[] {
    return projects;
}

export function nameFromSlug(slug: string): string {
    return projects.find(project => project.slug === slug)?.name ?? "";
}