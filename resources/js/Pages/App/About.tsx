import "@sass/pages/about.scss"

import AppLayout from "@/Layouts/AppLayout"

import randomImg from "../../../assets/images/random-image.jpg"
import { GuidingStar } from "@/assets/icons"
import { AboutValues } from "@/assets/contents"

type TeamsProps = {
  name: string;
  role: string[];
  url: string;
  alt: string;
}

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

const Teams: TeamsProps[] = [
  {
    name: "Izzulhaq Mahardika",
    role: ["Web Developer", "Project Manager"],
    url: "https://media.licdn.com/dms/image/D5603AQGUf7WALJ4hTg/profile-displayphoto-shrink_800_800/0/1691427946876?e=1705536000&v=beta&t=FEyBznjTyYnU3xgkOMWHsI4PALJpKyAQE_P0h86TXco",
    alt: ""
  },
  {
    name: "Mazir Muhammad",
    role: ["UI/UX Designer"],
    url: "https://media.licdn.com/dms/image/D5635AQFL9GjoIC9Kug/profile-framedphoto-shrink_800_800/0/1698131397610?e=1700733600&v=beta&t=-hHW9Ttm02PG1q73Yr4oW51I8JxyQW5OMphy_qztt0U",
    alt: ""
  }
]

export default function About() {
  return (
    <AppLayout head="Tentang Kami" id="about">
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
            {imgHeros && imgHeros.map((img, idx) => {
              return (
                <div key={"hero" + idx} className="img-wrapper">
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
            {Teams && Teams.map((person, idx) => {
              return (
                <div key={"profile" + idx} className="profile-wrapper">
                  <div className="profile-avatar">
                    <div className="avatar-wrapper">
                      <img src={person.url} alt={person.alt} />
                    </div>
                  </div>

                  <div className="profile-desc">
                    <p className="profile-name">{person.name}</p>
                    {person.role && person.role.map((role, idx) => {
                      return (
                        <p key={"role" + idx} className="profile-role">{role}</p>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="s-values">
        <div className="container">
          <div className="section-title-wrapper">
            <h3 className="section-title">Apa yang Membedakan Kami dengan Agensi Lain?</h3>
          </div>

          <div className="values-wrapper">
            {AboutValues && AboutValues.map((value: AboutValuesProps, idx: number) => {
              return (
                <div className="value-item-w" key={"value" + idx}>
                  <div className="icon-w">
                    <value.icon />
                  </div>
                  <div className="content-w">
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-desc">{value.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </AppLayout>
  )
}