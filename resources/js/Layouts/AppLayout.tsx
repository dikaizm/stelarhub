import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

interface AppLayoutProps extends PropsWithChildren {
    head: string;
    id: string;
    theme?: string;
    footer?: string;
}

export default function AppLayout({ children, head, id, theme = 'light', footer = "full" }: AppLayoutProps) {

    return (
        <>
            <Head title={head} />
            <Navbar theme={theme} />

            <main id={id}>{children}</main>

            <Footer style={footer} />
        </>
    )
}
