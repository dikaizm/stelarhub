import React from 'react'
import Card from '@/components/Card'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { InsightPost } from '@/lib/insights'

interface BlogCardProps {
    post: InsightPost
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/insights/${post.slug}`} className="block h-full">
            <Card className="h-full flex flex-col group cursor-pointer hover:border-primary/50 transition-all">
                <div className="h-48 bg-background-subtle rounded-lg mb-6 flex items-center justify-center text-text-muted border border-border">
                    {post.image || "Image"}
                </div>
                <div className='p-2 pt-0 flex flex-col flex-1'>
                    <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
                        <span className="text-primary font-semibold uppercase">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold mt-auto">
                        Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Card>
        </Link>
    )
}
