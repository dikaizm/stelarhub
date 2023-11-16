import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

interface AppLayoutProps extends PropsWithChildren {
    head: string;
    id: string;
}

export default function AppLayout({ children, head, id }: AppLayoutProps) {
    return (
        <>
            <Head title={head} />
            <Navbar />

            <main id={id}>{children}</main>

            <Footer />
        </>
    )
}
