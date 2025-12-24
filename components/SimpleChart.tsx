'use client';

import React from 'react';

interface ChartData {
    label: string;
    value: number;
}

interface SimpleChartProps {
    data: ChartData[];
    title?: string;
}

export default function SimpleChart({ data, title }: SimpleChartProps) {
    const maxValue = Math.max(...data.map(d => d.value), 100); // Default to 100 if empty, or max value

    return (
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            {title && <h4 className="text-lg font-bold text-text mb-6">{title}</h4>}

            <div className="flex items-end justify-center gap-8 h-48 w-full">
                {data.map((item, index) => {
                    const heightPercentage = Math.round((item.value / maxValue) * 100);

                    return (
                        <div key={index} className="flex flex-col items-center gap-2 w-full max-w-[80px] group">
                            <div className="text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity mb-1 transform translate-y-2 group-hover:translate-y-0 duration-300">
                                {item.value}
                            </div>
                            <div
                                className="w-full bg-gradient-to-t from-primary/60 to-primary rounded-t-lg transition-all duration-700 ease-out group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                style={{ height: `${heightPercentage}%`, minHeight: '4px' }}
                            ></div>
                            <div className="text-xs text-text-secondary font-medium text-center">{item.label}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
