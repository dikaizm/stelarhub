import type { PageProps } from '@inertiajs/inertia';

export interface MenuType extends PageProps {
    menus: {
        id: number;
        name: string;
        endpoint: string;
        submenus: {
            id: number;
            name: string;
            endpoint: string;
            desc: string;
            menu_id: number;
        }[];
    }[];
}