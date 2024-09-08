import { CardPortfolioProps } from "../PortfolioSection";

import fiveElementsImg from '@/assets/images/portfolio/five-elements.png'
import mataFutsalImg from '@/assets/images/portfolio/matafutsal.png'
import optiGuardImg from '@/assets/images/portfolio/optiguard.jpeg'

export const portfolioData: CardPortfolioProps[] = [
  {
    title: "5Elements",
    description: "Website yang menghadirkan informasi lengkap tentang profil perusahaan dan sarana promosi yang efektif. Dengan tampilan desain yang unik dan menarik, setiap elemen visual mencerminkan esensi dan nilai-nilai perusahaan, menciptakan pengalaman yang mengesankan bagi pengunjung.",
    tags: ['Website', 'Event Organizer', 'UI/UX Design', 'Frontend Development'],
    img: fiveElementsImg
  },
  {
    title: "MataFutsal",
    description: "MataFutsal hadir sebagai website untuk menemukan dan memesan lapangan futsal dengan mudah. Di landing page, pengguna dapat menemukan informasi tentang lokasi, fasilitas, harga, lengkap dengan promosi terkini. Terdapat dashboard khusus admin untuk manajemen booking yang efisien dan simpel.",
    tags: ['Website', 'Futsal', 'UI/UX Design', 'Frontend Development'],
    img: mataFutsalImg
  },
  {
    title: "OptiGuard",
    description: "Aplikasi deteksi dini penyakit mata melalui funduskopi yang memanfaatkan metode machine learning Convolutional Neural Network (CNN) untuk mendeteksi dini penyakit katarak, glaukoma, dan diabetes retinopati dengan adaptor yang menghubungkan lensa oftalmoskop 20D pada kamera ponsel pengguna.",
    tags: ['Mobile App', 'Healthcare', 'Machine Learning', 'Mobile Development', 'Backend Development'],
    img: optiGuardImg
  }
]