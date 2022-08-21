/// <reference types="vite-plugin-svgr/client" />

export interface MenuItemProps {
    name: string;
    link: string;
    className: string;
    onClick: () => void;
}

export interface ThemeProviderProps {
    children: React.ReactNode;
}

export interface Client {
    name: string;
    image: string;
    link: string;
}

export interface Skill {
    name: string;
    image: string;
}

export interface Project {
    title: string;
    image: string;
    summary: string;
    description: string;
    links: Link[];
}

export interface Link {
    name: string;
    link: string;
}
