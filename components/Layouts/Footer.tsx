import Image from 'next/image'
import stelarLogo from '@/assets/logo/stelar.svg'
import { RiRocket2Fill } from 'react-icons/ri'
import PrimaryButton from '../Buttons/PrimaryButton'

export default function Footer() {
  return (
    <div className='container py-8 flex flex-col sm:flex-row justify-between gap-4 items-center'>
      <a href='/' className='h-8 w-auto'>
        <Image className='w-full h-full bg-contain' src={stelarLogo} alt="logo" />
      </a>

      <div className='flex flex-col items-center'>
        <p className='text-sm text-gray-400'>
          © 2024 All rights reserved
        </p>
        <p className='text-sm text-gray-400'>
          Made with ❤️ by <a href='https://www.instagram.com/stelar.hub' target='_blank' className='text-primary'>@stelar.hub</a>
        </p>
      </div>

      <PrimaryButton
        label='Buat Sekarang'
        link='https://wa.me/6285600809354'
        icon={<RiRocket2Fill className='w-6 h-6 rotate-45' />}
        iconPosition='right'
      />
    </div>
  )
}