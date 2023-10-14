import FeatureCountdown from "@/Layouts/Components/FeatureCountdown"
import Footer from "@/Layouts/Components/Footer"
import Navbar from "@/Layouts/Components/Navbar"
import { Head } from "@inertiajs/react"

export default function About() {
    return (
        <>
            <Head title="About" />
            <Navbar />

            <FeatureCountdown targetDate={'2023-10-20T23:59:59'} />

            <main>
                <section>
                    <h1>Your Digital Solution Partner</h1>
                    <p>Welcome to Stelar, your one-stop digital agency that's here to propel your brand into the digital stratosphere. We are a newly founded agency with a passion for crafting exceptional web solutions, elevating branding strategies, and harnessing the power of data analytics to drive your success.</p>
                </section>

                <section>
                    <h3>Our Mission</h3>
                    <p>At Stelar, our mission is clear: We exist to empower businesses of all sizes to thrive in the digital realm. In an ever-evolving digital landscape, we aim to be your guiding star, leading you through the complexities and opportunities that the online world has to offer.</p>
                </section>

                <section>
                    <h2>People Behind Your Successful Brands</h2>
                </section>

                <section>
                    <h3>What Sets Us Apart</h3>
                    <div>
                        <h4>Expertise</h4>
                        <p>Our team comprises seasoned professionals with a wealth of experience in web development, branding, and data analytics.</p>

                        <h4>Tailored Solutions</h4>
                        <p>We understand that every business is unique. Our solutions are customized to fit your specific needs and goals.</p>

                        <h4>Cutting-Edge Technology</h4>
                        <p>We stay ahead of the curve, adopting the latest technologies and trends to keep your digital presence competitive.</p>

                        <h4>Collaborative Approach</h4>
                        <p>We believe in working closely with our clients, fostering open communication and collaboration every step of the way.</p>

                        <h4>Results-Driven</h4>
                        <p>Your success is our success. We measure our achievements by the impact we make on your business.</p>

                        <h4>Commitment to Excellence</h4>
                        <p>We are committed to delivering high-quality work, on time and within budget.</p>
                    </div>
                </section>

                <section>
                    <h3>Our Solutions</h3>
                    <div>
                        <h4>Web Development: Crafting Digital Experiences</h4>
                        <p>Our web development services are at the heart of what we do. We understand that your website is often the first point of interaction with your audience. That's why we focus on creating stunning, user-friendly, and responsive websites that not only captivate but also convert. From e-commerce platforms to corporate websites, our team of expert developers has you covered.</p>

                        <h4>Branding: Shaping Your Digital Identity</h4>
                        <p>Your brand is your story, and we are here to help you tell it. Our branding experts will work closely with you to define and refine your brand's identity, creating a unique and memorable presence in the digital sphere. Whether you're starting from scratch or looking for a brand refresh, we'll ensure your brand shines brightly.</p>

                        <h4>Data Analytics: Driving Informed Decisions</h4>
                        <p>In today's data-driven world, success hinges on your ability to harness the power of information. Stelar's data analytics services offer deep insights into customer behavior, trends, and opportunities. We transform raw data into actionable intelligence, enabling you to make informed decisions that drive your business forward.</p>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    )
}