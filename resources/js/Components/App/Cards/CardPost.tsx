import { useRef, useState, useEffect } from "react";
import estimateReadingTime from "@/helpers/getReadingTimeMin";
import { Link } from "@inertiajs/react";

import route from 'ziggy-js';

import randomImg from '../../../../assets/images/random-image.jpg'
import { PostData } from "@/types";

interface PostProps {
    data: PostData;
    isCategoryVisible?: boolean;
    isDescVisible?: boolean;
    isDateVisible?: boolean;
}

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

function getPublishedDate(date: string) {
    const newDate = new Date(date);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const day = newDate.getDate();
    const month = monthNames[newDate.getMonth()];
    const year = newDate.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
}

const CardPost = ({ data, isCategoryVisible = false, isDescVisible = true, isDateVisible = true }: PostProps) => {
    const publishedTime = getPublishedDate(data.updated_at)
    const readingTime = estimateReadingTime(data.body)

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
            <Link href={route('post.show', { slug: data.slug })} className="card-container">
                <div className='card-content'>
                    <div className='wrapper'>
                        <img className='card-image stories'
                            src={randomImg}
                            alt="" />
                        {isCategoryVisible && <div className="card-category">{data.category.name}</div>}
                        <div className='text'>
                            <h2 ref={titleRef} className="card-title stories">{data.title}</h2>
                            {isDescVisible && <p className="card-desc">{data.excerpt}</p>}
                            {isOverflowing && <div className="popup-text">{data.title}</div>}
                        </div>
                    </div>
                    {isDateVisible && <span className='publish-time'>{publishedTime} • Baca {readingTime} menit</span>}
                </div>
            </Link>
        </>
    )
}

export default CardPost