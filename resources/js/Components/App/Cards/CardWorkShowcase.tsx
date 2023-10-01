import { Link } from "@inertiajs/react";
import React from "react";

import route from 'ziggy-js';

export default function CardWorkShowcase({ data, className }) {

    return (
        <Link href={route('work.show', { slug: data.slug })} className={`card-container ${className}`}>
            <div className="bg-shadow"></div>

            <img className="card-image"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="" />

            <div className="bg-white"></div>

            <div className="content-w">
                <div className="card-filler"></div>

                <div className="subcontent-w">
                    <div className="card-title">{data.title}</div>
                    <div className="category-wrapper">
                        {data.categories.length > 0 && data.categories.map((cat, index) => {
                            const n = data.categories.length

                            return (
                                <React.Fragment key={cat.id}>
                                    <div className="card-subtitle">{cat.name}</div>

                                    {index !== n - 1 && (
                                        <span key={`separator-${index}`}>•</span>
                                    )}
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
                <p className="card-desc">{data.excerpt}</p>
                <div className="card-icon">
                    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="5"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </Link>
    )
}
