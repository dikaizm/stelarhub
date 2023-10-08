import Navbar from "@/Layouts/Components/Navbar";
import { Head } from "@inertiajs/react";

import '../../sass/pages/error.scss'

export default function Error() {
    return (
        <>
            <Head title="Oops! Halaman tidak ditemukan" />
            <Navbar />

            <section className="container s-error">
                <div className="flex-col">
                    <h1>404</h1>
                    <p>Oops! Halaman tidak ditemukan.</p>
                </div>
            </section>
        </>
    )
}
