'use client'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useState } from 'react';

const StatsPage = () => {
    const [data] = useState(() => {
        if (typeof window !== "undefined") {
            const timeline = JSON.parse(localStorage.getItem('activityTimeline')) || [];

            return [
                { name: 'Text', value: timeline.filter(t => t.type === 'Text').length },
                { name: 'Call', value: timeline.filter(t => t.type === 'Call').length },
                { name: 'Video', value: timeline.filter(t => t.type === 'Video').length },
            ];
        }
        return [];
    });



    const COLORS = ['#8B5CF6', '#1E3A34', '#22C55E'];

    return (
        <div className="bg-slate-50 min-h-screen p-12 font-sans flex flex-col items-center">


            <div className="w-full max-w-3xl">

                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Friendship Analytics</h1>
                </div>

                
                <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 min-h-[480px] flex flex-col">

                    <div className="mb-2">
                        <p className="text-[#2D5A47] font-bold text-base">By Interaction Type</p>
                    </div>

                    
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="h-[280px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        innerRadius={75}
                                        outerRadius={100}
                                        paddingAngle={6}
                                        dataKey="value"
                                        startAngle={90}
                                        endAngle={450}
                                    >
                                        {data.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                                stroke="none"
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                    
                        <div className="flex justify-center gap-6 mt-6">
                            {data.map((entry, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                                    <span className="text-xs text-slate-500 font-medium">{entry.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StatsPage;