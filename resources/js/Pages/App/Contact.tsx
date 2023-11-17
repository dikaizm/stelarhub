import "@sass/pages/contact.scss"

import AppLayout from "@/Layouts/AppLayout";
import { Checkmark } from "@/assets/icons";
import { PrimaryButton } from "@/Components/App/Buttons/Button";

export default function Contact() {
  return (
    <AppLayout
      head="Kontak"
      id="contact"
      theme="dark"
      footer="partial">
      {/* Contact directly via WhatsApp */}
      <section className="s-wa">

      </section>

      {/* Contact via email */}
      <section className="s-email">
        <div className="container">
          <div className="email-wrapper">
            <div className="content-wrapper">
              <h5>Bicara dengan pakar tim sales kami</h5>
              <h1>Jadwalkan konsultasi gratis </h1>
              <p>Tentunya kami sangat bersemangat untuk berbicara dengan Anda, baik itu untuk membahas proyek baru atau untuk memberi informasi lebih lanjut tentang Stelar! Isi formulir kontak dan salah satu anggota tim kami akan segera menghubungi Anda. Terima kasih!</p>

              <ul className="client-expect">
                <li className="item-expect">
                  <div className="icon-w">
                    <Checkmark />
                  </div>
                  <span>Timeline dan estimasi biaya dari proyek Anda</span>
                </li>
              </ul>
            </div>

            <form action="" className="form-wrapper">
              <div className="form-input">
                <label htmlFor="form-name">Name</label>
                <input type="text" name="form-name" id="form-name" />
              </div>

              <PrimaryButton>Mulai Proyek Anda</PrimaryButton>
            </form>
          </div>
        </div>
      </section>
    </AppLayout>
  )
}