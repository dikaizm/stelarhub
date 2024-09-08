import { CardPortfolioProps } from "../PortfolioSection";

import fiveElementsImg from '@/assets/images/portfolio/five-elements.png'
import mataFutsalImg from '@/assets/images/portfolio/matafutsal.png'

export const portfolioData: CardPortfolioProps[] = [
  {
    title: "5Elements",
    description: "5Elements adalah landing page yang menghadirkan informasi lengkap tentang profil perusahaan dan sarana promosi yang efektif. Dengan tampilan desain yang unik dan menarik, setiap elemen visual mencerminkan esensi dan nilai-nilai perusahaan, menciptakan pengalaman yang mengesankan bagi pengunjung.",
    tags: ['Website', 'Event Organizer', 'UI/UX Design', 'Frontend Development'],
    img: fiveElementsImg
  },
  {
    title: "MataFutsal",
    description: "MataFutsal hadir sebagai website untuk menemukan dan memesan lapangan futsal dengan mudah. Di landing page, pengguna dapat menemukan informasi tentang lokasi, fasilitas, harga, lengkap dengan promosi terkini. Terdapat dashboard khusus admin untuk manajemen booking yang efisien dan simpel.",
    tags: ['Website', 'Futsal', 'UI/UX Design', 'Frontend Development'],
    img: mataFutsalImg
  },
]