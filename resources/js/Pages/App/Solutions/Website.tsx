import FeatureCountdown from "@/Layouts/Components/FeatureCountdown";
import Footer from "@/Layouts/Components/Footer";
import Navbar from "@/Layouts/Components/Navbar";
import { Service } from "@/types";
import { Head } from "@inertiajs/react";

//@ts-ignore
import ReactRotatingText from 'react-rotating-text';

const randomDomainList = ["umkmmaju.com", "bisnislokal.id", "peluangusaha.net", "produklokal.com", "kreatifumkm.id",
    "warungonline.co.id", "jualankita.net", "usahahebat.id", "tokokecilku.com", "inovasiumkm.net", "produksikreatif.co.id", "pasardigital.id", "panganlokal.net", "perajinindonesia.com", "dagangcerdas.id", "jualansejahtera.net", "ekspresibisnis.co.id", "warungdigital.id", "umkmberkualitas.com", "kulinerterbaik.net"]

export default function Website({ data }: { data: Service }) {
    return (
        <>
            <Head title={data.name} />
            <Navbar />

            <main>
                <FeatureCountdown targetDate={'2023-10-16T23:59:59'} />

                {/* <div>
                    <span>www.</span>
                    <ReactRotatingText items={randomDomainList} />
                </div> */}
            </main>

            <Footer />
        </>
    )
}
