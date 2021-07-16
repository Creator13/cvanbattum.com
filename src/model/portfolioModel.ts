import {Project} from "@/types/project";
import projectFile from "@/assets/projects.json";

const projects: Project[] = JSON.parse(JSON.stringify(projectFile.projects));

export function loadProject(slug: string) : Project {
    const project = projects.find(project => project.slug === slug);

    if (project === undefined) {
        return <Project> {};
    }

    return project;
}

export function projectExists(slug: string) : boolean {
    return projects.some(project => project.slug === slug);
}

export function all() : Project[] {
    return projects;
}