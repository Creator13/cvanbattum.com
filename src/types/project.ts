export interface Project {
    name: string;
    slug: string;
    content: string;
    shortDescription: string;
    thumbnailUri: string;
    splash: string;
    year: string | number;
    tags: string[];
    techs: string[]
    isFavorite?: boolean;
}