'use client';
import { useState } from 'react';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';

export default function MinimalistPortfolio() {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <main className="min-h-screen dark:bg-gray-900 flex flex-col md:flex-row">
            {/* Left Section: Fixed Identity */}
            <div className="md:w-auto border-b md:border-b-0 md:border-r border-gray-800 pt-16 md:pt-24 px-8 md:px-12 sticky top-0 md:h-screen flex flex-col items-center md:items-end text-center md:text-right">
                <div className="max-w-xs">
                    <ProfileSection />
                </div>
            </div>

            {/* Right Section: Interactive Content */}
            <div className="md:flex-1 pt-16 md:pt-24 px-8 md:px-16 lg:px-24 pb-20">
                <nav className="flex space-x-12 mb-16 border-b border-gray-800">
                    {['about', 'projects', 'blog'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 text-[11px] font-bold uppercase tracking-[0.3em] transition-all relative ${
                                activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                            )}
                        </button>
                    ))}
                </nav>

                <div className="transition-all duration-500 ease-in-out">
                    {activeTab === 'about' ? (
                        <div className="">
                            <ExperienceSection />
                            <SkillsSection />
                        </div>
                    ) : (
                        <ProjectsSection />
                    )}
                </div>
            </div>
        </main>
    );
}