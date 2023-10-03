import { useRef, useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { Work, WorksProps } from "@/types";

import route from 'ziggy-js';

import randomImg from '../../../../assets/images/random-image3.jpg'

function isTextOverflowing(element: HTMLHeadingElement | null): boolean {
  if (!element) return false;

  const containerWidth = element.clientHeight;
  const textWidth = element.scrollHeight;

  return textWidth > containerWidth;
}

function handleResize(ref: React.RefObject<HTMLHeadingElement>, fn: (overflow: boolean) => void) {
  if (ref.current) {
    const overflow = isTextOverflowing(ref.current);
    fn(overflow);
  }
}

const CardWork = ({ data }: { data: Work }) => {

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    // Initial check
    handleResize(titleRef, setIsOverflowing);

    // Add event listener for window resize
    window.addEventListener('resize', () => handleResize(titleRef, setIsOverflowing));

    // Remove the event listener when the component unmounts
    return () => {
      window.addEventListener('resize', () => handleResize(titleRef, setIsOverflowing));
    };
  }, []);

  return (
    <>
      <Link href={route('work.show', { slug: data.slug })} className="card-container">
        <div className='card-content'>
          <div className='wrapper'>
            <div className="card-thumbnail">
              <img className='card-image-works'
                src={randomImg}
                alt="" />

              <div className="work-category">
                <div className="category-wrapper">
                  {data && data.categories && data.categories.map(cat => {
                    return (
                      <span className="category-item" key={cat.id}>{cat.name}</span>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='text'>
              <span className="card-client">{data.client_name}</span>
              <h2 ref={titleRef} className="card-title works">{data.title}</h2>
              {/* <p className="card-desc">{data.excerpt}</p> */}

              {/* Popup title when overflows */}
              {isOverflowing && <div className="popup-text">{data.title}</div>}
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default CardWork