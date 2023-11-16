import "@sass/pages/about.scss"

import AppLayout from "@/Layouts/AppLayout"

import randomImg from "../../../assets/images/random-image.jpg"
import { GuidingStar } from "@/assets/icons"

const imgHeros = [
    {
        url: randomImg,
        alt: ""
    },
    {
        url: randomImg,
        alt: ""
    },
    {
        url: randomImg,
        alt: ""
    }
]

const Teams = [
    {
        name: "Izzulhaq Mahardika",
        role: "Developer",
        url: "https://images.pexels.com/photos/1066127/pexels-photo-1066127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: ""
    },
    {
        name: "Izzulhaq Mahardika",
        role: "Developer",
        url: "https://i.pinimg.com/564x/0d/d0/b6/0dd0b63c4d9b19d4e12121b082058465.jpg",
        alt: ""
    },
    {
        name: "Izzulhaq Mahardika",
        role: "Developer",
        url: "https://images.pexels.com/photos/1066127/pexels-photo-1066127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: ""
    },
    {
        name: "Izzulhaq Mahardika",
        role: "Developer",
        url: "https://images.pexels.com/photos/1066127/pexels-photo-1066127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: ""
    }
]

export default function About() {
    return (
        <AppLayout head="About" id="about">
            <section className="s-hero">
                <div className="container">
                    <div className="hero-heading">
                        <h1 className="hero-title-medium">
                            <span className="text-blue-g">Mitra Solusi Digital Bisnis Anda</span>

                            <span> 🤝</span>
                        </h1>

                        <p className="hero-desc">Stelar merupakan digital agency yang siap membantu Anda menciptakan solusi web yang luar biasa, meningkatkan strategi branding, dan menggunakan kekuatan analitika data untuk mendukung kesuksesan Anda.</p>
                    </div>

                    <div className="hero-collage">
                        {imgHeros && imgHeros.map((img) => {
                            return (
                                <div className="img-wrapper">
                                    <img src={img.url} alt={img.alt} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="s-mission">
                <div className="container">
                    <h4>Misi kami adalah <strong>memberdayakan bisnis</strong> dari berbagai skala untuk tumbuh dalam <strong>era digital</strong>. Kami berusaha menjadi <strong>bintang pemandu</strong> yang terpercaya, mendampingi Anda melalui peluang dan tantangan di dunia online yang selalu berubah.</h4>

                    <div className="icon-w">
                        <GuidingStar />
                    </div>
                </div>
            </section>

            <section className="s-team">
                <div className="container">
                    <div className="section-title-wrapper">
                        <h3 className="section-title">Tim Kebanggaan Kami</h3>
                    </div>

                    <div className="team-wrapper">
                        {Teams && Teams.map((person) => {
                            return (
                                <div className="profile-wrapper">
                                    <div className="profile-avatar">
                                        <div className="avatar-wrapper">
                                            <img src={person.url} alt={person.alt} />
                                        </div>
                                    </div>

                                    <div className="profile-desc">
                                        <p className="profile-name">{person.name}</p>
                                        <p className="profile-role">{person.role}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="s-values">
                <h3>Apa yang Membuat Kami Berbeda</h3>
                <div>
                    <h4>Keahlian</h4>
                    <p>Tim kami terdiri dari profesional berpengalaman dengan pengetahuan mendalam dalam pengembangan web, branding, dan analitika data.</p>

                    <h4>Solusi yang Disesuaikan</h4>
                    <p>Kami memahami bahwa setiap bisnis memiliki keunikan. Solusi kami dirancang khusus untuk memenuhi kebutuhan dan tujuan spesifik Anda.</p>

                    <h4>Teknologi Terkini</h4>
                    <p>Kami selalu berada di garis depan, mengadopsi teknologi dan tren terbaru untuk menjaga keberlanjutan brand Anda.</p>

                    <h4>Pendekatan Kolaboratif</h4>
                    <p>Kami bekerja sama erat dengan klien, penting untuk membangun komunikasi terbuka dan kolaborasi dalam setiap langkah.</p>

                    <h4>Orientasi pada Hasil</h4>
                    <p>Kesuksesan Anda adalah kesuksesan kami. Kami mengukur prestasi dari dampak yang kami buat pada bisnis Anda.</p>

                    <h4>Komitmen pada Kualitas</h4>
                    <p>Kami berkomitmen untuk memberikan hasil pekerjaan yang berkualitas tinggi, tepat waktu, dan sesuai dengan anggaran.</p>
                </div>
            </section>
        </AppLayout>
    )
}