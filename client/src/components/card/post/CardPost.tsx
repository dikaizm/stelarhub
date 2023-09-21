import { useRef, useState, useEffect } from "react";

interface PostAttributes {
    title: string;
    slug: string;
    excerpt: string;
    updatedAt: string;
}

interface PostData {
    data: {
        id: number;
        attributes: PostAttributes;
    }
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

const CardPost = ({ data }: PostData) => {
    const attr = data.attributes
    const date = new Date(attr.updatedAt);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const publishedTime = `${day} ${month} ${year}`;

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
                        <img className='card-image'
                            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="" />
                        <div className='text'>
                            <h2 ref={titleRef} className="card-title">{attr.title}</h2>
                            <p className="card-desc">{attr.excerpt}</p>
                        </div>
                    </div>
                    <span className='publish-time'>{publishedTime}</span>
                </div>

                {isOverflowing && <div className="popup-text">{attr.title}</div>}
            </a>
        </>
    )
}

export default CardPost