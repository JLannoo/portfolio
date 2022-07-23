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
