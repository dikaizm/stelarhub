import { Link } from '@inertiajs/react';
import EventEmitter from 'events';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
    className?: string;
    children: ReactNode;
    href?: string;
    target?: string;
    type?: 'anchor' | 'button';
    onClick?: MouseEventHandler<HTMLButtonElement>
}

function PrimaryButton({ className = '', children, href = "", target, type = "anchor", onClick }: ButtonProps) {
    return (
        <div className="btn-wrapper">
            {type === "anchor" && (
                <Link
                    href={href}
                    target={target}
                    className={
                        `btn btn-primary ` + className
                    }
                >
                    {children}
                </Link>
            )}

            {type === "button" && (
                <button
                    type='button'
                    className={
                        `btn btn-primary ` + className
                    }
                    onClick={onClick}
                >
                    {children}
                </button>
            )}
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