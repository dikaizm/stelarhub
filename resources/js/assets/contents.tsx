import { WhatsApp } from "./IconInline";

export function websiteData() {
    const data = {
        randomDomainList: ["umkmmaju.com", "bisnislokal.id", "peluangusaha.net", "produklokal.com", "kreatifumkm.id",
            "warungonline.co.id", "jualankita.net", "usahahebat.id", "tokokecilku.com", "inovasiumkm.net", "produksikreatif.co.id", "pasardigital.id", "panganlokal.net", "perajinindonesia.com", "dagangcerdas.id", "jualansejahtera.net", "ekspresibisnis.co.id", "warungdigital.id", "umkmberkualitas.com", "kulinerterbaik.net"],

        productType: [
            {
                name: "Company Profile",
                desc: "Pembuatan website company profile untuk menampilkan profil perusahaan atau bisnis secara mendetail.",
                image: "",
                cta: ""
            },
            {
                name: "Toko Online",
                desc: "Pembuatan website dengan berbagai fitur untuk mengelola transaksi & penjualan secara online.",
                image: "",
                cta: "Mulai berjualan di website sendiri"
            },
            {
                name: "Custom Web & Aplikasi",
                desc: "Pembuatan website dengan berbagai fitur untuk mengelola transaksi & penjualan secara online.",
                image: "",
                cta: "Mulai berjualan di website sendiri"
            }
        ]
    }

    return data;
}

import techExpress from "@assets/logo/tech-express.png"
import techGolang from "@assets/logo/tech-golang.png"
import techHCJ from "@assets/logo/tech-htmlcssjs.png"
import techLaravel from "@assets/logo/tech-laravel.png"
import techMongoDB from "@assets/logo/tech-mongodb.png"
import techMySQL from "@assets/logo/tech-mysql.png"
import techNodeJS from "@assets/logo/tech-nodejs.png"
import techPHP from "@assets/logo/tech-php.png"
import techReactJS from "@assets/logo/tech-reactjs.png"

type TechStackProps = {
    url: string;
    alt: string;
}

export const TechStack: TechStackProps[] = [
    {
        url: techHCJ,
        alt: "HTML CSS JS"
    },
    {
        url: techGolang,
        alt: "Golang"
    },
    {
        url: techNodeJS,
        alt: "Node.js"
    },
    {
        url: techExpress,
        alt: "Express.js"
    },
    {
        url: techReactJS,
        alt: "React.js"
    },
    {
        url: techPHP,
        alt: "PHP"
    },
    {
        url: techLaravel,
        alt: "Laravel"
    },
    {
        url: techMySQL,
        alt: "MySQL"
    },
    {
        url: techMongoDB,
        alt: "MongoDB"
    },
]

export const AboutValues: AboutValuesProps[] = [
    {
        title: "Keahlian",
        desc: "Tim kami terdiri dari profesional berpengalaman dengan pengetahuan mendalam dalam pengembangan web, branding, dan analitika data.",
        icon: WhatsApp
    },
    {
        title: "Solusi yang Disesuaikan",
        desc: "Kami memahami bahwa setiap bisnis memiliki keunikan. Solusi kami dirancang khusus untuk memenuhi kebutuhan dan tujuan spesifik Anda.",
        icon: WhatsApp
    },
    {
        title: "Tech Savvy",
        desc: "Kami selalu berada di garis depan, mengadopsi teknologi dan tren terbaru untuk menjaga keberlanjutan brand Anda.",
        icon: WhatsApp
    },
    {
        title: "Pendekatan Kolaboratif",
        desc: "Kami bekerja sama erat dengan klien, penting untuk membangun komunikasi terbuka dan kolaborasi dalam setiap langkah.",
        icon: WhatsApp
    },
    {
        title: "Orientasi pada Hasil",
        desc: "Kesuksesan Anda adalah kesuksesan kami. Kami mengukur prestasi dari dampak yang kami buat pada bisnis Anda.",
        icon: WhatsApp
    },
    {
        title: "Komitmen pada Kualitas",
        desc: "Kami berkomitmen untuk memberikan hasil pekerjaan yang berkualitas tinggi, tepat waktu, dan sesuai dengan anggaran.",
        icon: WhatsApp
    }
]