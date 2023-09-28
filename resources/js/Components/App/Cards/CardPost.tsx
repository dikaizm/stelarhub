import { useRef, useState, useEffect } from "react";

interface CategoryData {
    id: number;
    attributes: {
        name: string;
        endpoint: string;
    }
}

interface ImageData {
    id: number;
    attributes: {
        formats: {
            small: {
                url: string;
            }
        }
    }
}

interface PostAttributes {
    title: string;
    slug: string;
    excerpt: string;
    updatedAt: string;
    image: {
        data: ImageData;
    }
    category: {
        data: CategoryData;
    };
}

interface PostData {
    data: {
        id: number;
        attributes: PostAttributes;
    };
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

function getPublishedDate({ updatedAt }: PostAttributes) {
    const date = new Date(updatedAt);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
}

const CardPost = ({ data, isCategoryVisible = false, isDescVisible = true, isDateVisible = true }: PostData) => {
    const rootUrl = window.location.origin;

    const attr = data.attributes

    const publishedTime = getPublishedDate(attr)

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
            <a href={attr.slug} className="card-container">
                <div className='card-content'>
                    <div className='wrapper'>
                        <img className='card-image stories'
                            src={`${rootUrl}${attr.image.data.attributes.formats.small.url}`}
                            alt="" />
                        {isCategoryVisible && <div className="card-category">{attr.category.data.attributes.name}</div>}
                        <div className='text'>
                            <h2 ref={titleRef} className="card-title">{attr.title}</h2>
                            {isDescVisible && <p className="card-desc">{attr.excerpt}</p>}
                            {isOverflowing && <div className="popup-text">{attr.title}</div>}
                        </div>
                    </div>
                    {isDateVisible && <span className='publish-time'>{publishedTime}</span>}
                </div>
            </a>
        </>
    )
}

export default CardPost