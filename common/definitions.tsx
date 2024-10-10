import { ComponentType } from "react";
import { type getDictionary } from "@/get-dictionary";

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export type Icon = ComponentType<{ className: string; }>;

/**
 * Select Item used for SelectButton component
 */
export type SelectItem = {
    key: string;
    display: string;
    value: string;
};

export type Badge = {
    name: string;
    imageUrl: string;
    href: string;
    alt: string;
};

export type ProjectType = {
    type: string;
    projects: Project[];
};

export type Project = {
    id: string;
    title: string;
    description: string[];
    year: number;
    image: string;
    url?: string;
    technologies?: Icon[];
};
