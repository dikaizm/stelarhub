import { Link } from '@inertiajs/react';
import { AnchorHTMLAttributes } from 'react';

function PrimaryButton({ className = '', children, href = "" }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <div className="btn-wrapper">
            <Link
                href={href}
                className={
                    `btn btn-primary ` + className
                }
            >
                {children}
            </Link>
        </div>
    );
}

function SecondaryButton({ className = '', children, href = "" }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <div className="btn-wrapper">
            <Link
                href={href}
                className={
                    `btn btn-secondary ` + className
                }
            >
                {children}
            </Link>
        </div>
    );
}

function NavButton({ className = '', children, href = "" }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <div className="btn-wrapper">
            <Link
                href={href}
                className={
                    `btn btn-nav ` + className
                }
            >
                {children}
            </Link>
        </div>
    );
}

function CardButton({ className = '', children, href = "" }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <div className="btn-wrapper">
            <Link
                href={href}
                className={
                    `btn btn-card ` + className
                }
            >
                {children}
            </Link>
        </div>
    );
}

export { PrimaryButton, SecondaryButton, NavButton, CardButton }