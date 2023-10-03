import Footer from "@/Layouts/Components/Footer";
import Navbar from "@/Layouts/Components/Navbar";
import { Head } from "@inertiajs/react";

import '../../../../sass/pages/works.scss'
import CardWork from "@/Components/App/Cards/CardWork";
import TestimonialSection from "@/Layouts/Components/TestimonialSection";

export default function Works({ works }) {

    return (
        <>
            <Head title="Works" />
            <Navbar />

            <main id="works">
                <section className="container hero">
                    <div className='flex-col hero-title-wrapper'>
                        <h1 className='hero-title-generic text-blue-g'>Ada Apa di Stelar</h1>
                        <p className='hero-desc'>This is looong a very looong description to explain what is going on in this page.</p>
                    </div>
                </section>

                <section className="collection">
                    <div className="container">
                        <div className="gallery">
                            {works && works.length > 0 && works.map(work => (
                                <CardWork key={work.id} data={work} />
                            ))}

                        </div>
                    </div>
                </section>

            </main>

            <TestimonialSection />
            <Footer />
        </>
    )
}