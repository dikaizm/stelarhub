import Navbar from '@/Layouts/Components/Navbar';
import '../../../../sass/pages/works.scss'
import Footer from '@/Layouts/Components/Footer';
import { Head } from '@inertiajs/react';

export default function SingleWork({ work }) {
    console.log(work);

    return (
        <>
            <Head title={work.title} />
            <Navbar />

            <main id='works_single'>
                <article>
                    
                </article>
            </main>

            <Footer />
        </>
    )
}