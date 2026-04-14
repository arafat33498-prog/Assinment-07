'use client'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useState, useEffect, useMemo } from 'react';

const StatsPage = () => {
    const [mounted, setMounted] = useState(false);
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        
        const storedData = JSON.parse(localStorage.getItem('activityTimeline')) || [];
        setTimeline(storedData);
        setMounted(true);
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    const chartData = useMemo(() => {
        return [
            { name: 'Text', value: timeline.filter(t => t.type === 'Text').length },
            { name: 'Call', value: timeline.filter(t => t.type === 'Call').length },
            { name: 'Video', value: timeline.filter(t => t.type === 'Video').length },
        ];
    }, [timeline]);

    const COLORS = ['#8B5CF6', '#1E3A34', '#22C55E'];

    
    if (!mounted) return null;

    return (
        <div className="bg-slate-50 min-h-screen p-12 font-sans flex flex-col items-center">
            <div className="w-full max-w-3xl">
                <div className="mb-6 text-left">
                    <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Friendship Analytics</h1>
                </div>

                <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 min-h-[480px] flex flex-col">
                    <div className="mb-2">
                        <p className="text-[#2D5A47] font-bold text-base">By Interaction Type</p>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center">
                        {timeline.length > 0 ? (
                            <>
                                <div className="h-[280px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={chartData}
                                                innerRadius={75}
                                                outerRadius={100}
                                                paddingAngle={6}
                                                dataKey="value"
                                                startAngle={90}
                                                endAngle={450}
                                            >
                                                {chartData.map((entry, index) => (
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
                                    {chartData.map((entry, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                                            <span className="text-xs text-slate-500 font-medium">{entry.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-slate-400 italic">No activity data logged yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;