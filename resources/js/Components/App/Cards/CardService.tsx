import { Link } from "@inertiajs/react";
import { PostData } from "@/types";

import icon from '../../../../assets/icons/service-website.svg'

const CardService = ({ data }: { data: { name: string } }) => {

  return (
    <>
      <Link href="" className="card-container type-service">
        <div className='card-content'>
          <div className="icon-wrapper">
            <img className="icon" src={icon} alt="" />
          </div>
          <div className='text'>
            <h2 className="card-title works">{data?.name}</h2>
            <p className="card-desc">Bambambimbim blyaat adasbdaj asdj asd asdna asd sadasd</p>
          </div>
          <div className="arrow-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </Link>
    </>
  )
}

export default CardService