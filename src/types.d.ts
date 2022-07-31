export interface MenuItemProps {
    name: string;
    link: string;
    className: string;
    onClick: () => void;
}

export interface ThemeProviderProps {
    children: React.ReactNode;
}

export interface Skill {
    name: string;
    image: string;
}

export interface Project {
    title: string;
    image: string;
    description: string;
    github_link: string;
    website_link: string;
    skills: Skill[];
}
