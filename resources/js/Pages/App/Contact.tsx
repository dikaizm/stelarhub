import "@sass/pages/contact.scss"

import AppLayout from "@/Layouts/AppLayout";
import { Checkmark, WhatsApp } from "@/assets/icons";
import { PrimaryButton } from "@/Components/App/Buttons/Button";
import { useEffect, useState } from "react";
import TextInput from "@/Components/App/Input/TextInput";

type FormDataProps = {
  name: string;
  email: string;
  company: string;
  body: string;
}

const fields = {
  NAME: "name",
  EMAIL: "email",
  COMPANY: "company",
  BODY: "body",
}

const LOCAL_STORAGE_FORM = "contact_form"

export default function Contact() {
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    company: "",
    body: "",
  })

  const [error, setError] = useState<FormDataProps>({
    name: "test error",
    email: "",
    company: "",
    body: "",
  })

  const handleFormInput = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const scrollToSection = (id: string) => {
    const elmt = document.getElementById(id)
    if (elmt) elmt.scrollIntoView({ behavior: "smooth" })
  }

  const handleClickLink = (url: string, target: string) => {
    window.open(url, target)
  }

  useEffect(() => {
    const storedForm = localStorage.getItem(LOCAL_STORAGE_FORM)
    if (storedForm) {
      setFormData(JSON.parse(storedForm))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_FORM, JSON.stringify(formData))
  }, [formData])

  return (
    <AppLayout
      head="Kontak"
      id="contact"
      theme="dark"
      footer="partial">

      <section className="s-contact-type">
        <div className="container">
          <div className="type-wrapper">
            <div className="card-contact">
              <div className="bg-circle-blue"></div>
              <div className="contact-wrapper">
                <div className="icon-w">
                  <WhatsApp />
                </div>
                <div className="content-w">
                  <h3>Chat Langsung</h3>
                  <p>Hubungi Stelar & dapatkan bantuan ahli untuk pertumbuhan digital Anda.</p>
                </div>
                <PrimaryButton type="button" onClick={() => handleClickLink("http://wa.me/+6285600809354?text=Saya%20ingin%20memulai%20proyek%20baru%20dengan%20Stelar", "_blank")}>WhatsApp</PrimaryButton>
              </div>
            </div>

            <div className="card-contact">
              <div className="bg-circle-blue"></div>
              <div className="contact-wrapper">
                <div className="icon-w">
                  <WhatsApp />
                </div>
                <div className="content-w">
                  <h3>Kirim Email</h3>
                  <p>
                    Hubungi kami melalui:<br />
                    <strong>hello@stelarhub.com</strong>
                  </p>
                </div>
                <PrimaryButton type="button" onClick={() => scrollToSection("s-email")}>Kirim Email</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact via email */}
      <section id="s-email" className="s-email">
        <div className="container">
          <div className="email-wrapper">
            <div className="content-wrapper">
              <div>
                <h5>Bicara dengan pakar tim sales kami</h5>
                <h1>Jadwalkan konsultasi gratis dan dapatkan insight untuk bisnis Anda</h1>
              </div>
              <p>Tentunya kami sangat bersemangat untuk berbicara dengan Anda, baik itu untuk membahas proyek baru atau untuk memberi informasi lebih lanjut tentang Stelar! Isi formulir kontak dan salah satu anggota tim kami akan segera menghubungi Anda. Terima kasih!</p>

              <ul className="client-expect">
                <li className="item-expect">
                  <div className="icon-w">
                    <Checkmark />
                  </div>
                  <span>Timeline dan estimasi biaya dari proyek Anda</span>
                </li>
                <li className="item-expect">
                  <div className="icon-w">
                    <Checkmark />
                  </div>
                  <span>Solusi bisnis dari Stelar</span>
                </li>
              </ul>
            </div>

            <form action="" className="form-wrapper">
              <TextInput
                id="input-name"
                input={{
                  value: formData.name,
                  setValue: handleFormInput,
                  field: fields.NAME
                }}>Nama</TextInput>

              <TextInput
                id="input-email"
                input={{
                  value: formData.email,
                  setValue: handleFormInput,
                  field: fields.EMAIL
                }}>Email</TextInput>

              <TextInput
                id="input-company"
                input={{
                  value: formData.company,
                  setValue: handleFormInput,
                  field: fields.COMPANY
                }}>Perusahaan/Organisasi</TextInput>

              <TextInput
                type="textarea"
                id="input-body"
                input={{
                  value: formData.body,
                  setValue: handleFormInput,
                  field: fields.BODY
                }}>Kebutuhan Proyek Anda</TextInput>

              <PrimaryButton className="form-btn">Mulai Proyek Anda</PrimaryButton>
            </form>
          </div>
        </div>
      </section>
    </AppLayout>
  )
}