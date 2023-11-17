import '@sass/layouts/components/footer.scss'

import logoStelar from '../../../assets/logo/stelar-logo-white.svg'

type FooterProps = {
  style?: string;
}

export default function Footer({ style }: FooterProps) {
  
  return (
    <footer>
      <div className="background"></div>
      <section className={"container s-cta " + (style === "partial" ? "hidden" : "")}>
        <div className="cta-w">
          <h2 className="section-title">Have an awesome project for your brand?</h2>
          <div className="btn-w">
            <a className="btn-primary btn" href="/contact">START A PROJECT</a>
            <a className="btn-secondary btn" href="/works">SEE OUR WORKS</a>
          </div>
        </div>
        <ul>
          <li><svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 16C32 7.19101 24.809 0 16 0C7.19101 0 0 7.19101 0 16C0 24.809 7.19101 32 16 32C24.809 32 32 24.809 32 16ZM1.79775 16C1.79775 8.17977 8.17977 1.79775 16 1.79775C23.8202 1.79775 30.2022 8.17977 30.2022 16C30.2022 23.8202 23.8202 30.2022 16 30.2022C8.17977 30.2022 1.79775 23.8202 1.79775 16Z" />
            <path
              d="M24.0001 11.4157C23.6406 11.0561 23.1012 11.0561 22.7417 11.3708L14.0226 19.6404L9.30348 14.9213C8.94393 14.5618 8.4046 14.5618 8.04505 14.9213C7.6855 15.2809 7.6855 15.8202 8.04505 16.1797L13.3934 21.5281C13.5731 21.7078 13.7979 21.7977 14.0226 21.7977C14.2473 21.7977 14.472 21.7078 14.6518 21.5281L23.9552 12.6741C24.3147 12.3146 24.3147 11.7752 24.0001 11.4157Z" />
          </svg>
            <p>Help you figure out how to approach your problems.</p>
          </li>
          <li><svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 16C32 7.19101 24.809 0 16 0C7.19101 0 0 7.19101 0 16C0 24.809 7.19101 32 16 32C24.809 32 32 24.809 32 16ZM1.79775 16C1.79775 8.17977 8.17977 1.79775 16 1.79775C23.8202 1.79775 30.2022 8.17977 30.2022 16C30.2022 23.8202 23.8202 30.2022 16 30.2022C8.17977 30.2022 1.79775 23.8202 1.79775 16Z" />
            <path
              d="M24.0001 11.4157C23.6406 11.0561 23.1012 11.0561 22.7417 11.3708L14.0226 19.6404L9.30348 14.9213C8.94393 14.5618 8.4046 14.5618 8.04505 14.9213C7.6855 15.2809 7.6855 15.8202 8.04505 16.1797L13.3934 21.5281C13.5731 21.7078 13.7979 21.7977 14.0226 21.7977C14.2473 21.7977 14.472 21.7078 14.6518 21.5281L23.9552 12.6741C24.3147 12.3146 24.3147 11.7752 24.0001 11.4157Z" />
          </svg>
            <p>Help you figure out how to approach your problems.</p>
          </li>
          <li><svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 16C32 7.19101 24.809 0 16 0C7.19101 0 0 7.19101 0 16C0 24.809 7.19101 32 16 32C24.809 32 32 24.809 32 16ZM1.79775 16C1.79775 8.17977 8.17977 1.79775 16 1.79775C23.8202 1.79775 30.2022 8.17977 30.2022 16C30.2022 23.8202 23.8202 30.2022 16 30.2022C8.17977 30.2022 1.79775 23.8202 1.79775 16Z" />
            <path
              d="M24.0001 11.4157C23.6406 11.0561 23.1012 11.0561 22.7417 11.3708L14.0226 19.6404L9.30348 14.9213C8.94393 14.5618 8.4046 14.5618 8.04505 14.9213C7.6855 15.2809 7.6855 15.8202 8.04505 16.1797L13.3934 21.5281C13.5731 21.7078 13.7979 21.7977 14.0226 21.7977C14.2473 21.7977 14.472 21.7078 14.6518 21.5281L23.9552 12.6741C24.3147 12.3146 24.3147 11.7752 24.0001 11.4157Z" />
          </svg>
            <p>Help you figure out how to approach your problems.</p>
          </li>
        </ul>
      </section>

      <hr className="container" />

      <section className="container s-company">
        <img src={logoStelar} alt="Logo" />
        <p>Stelar © <span>{new Date().getFullYear()}</span></p>
        <ul>
          <li><a href="https://www.instagram.com/stelar.hub">Instagram</a></li>
          <li><a href="">Twitter</a></li>
          <li><a href="">LinkedIn</a></li>
        </ul>
      </section>
    </footer>
  )
}