const SkillsSection = () => {
    const skillGroups = [
        { category: 'Languages', items: ['C', 'Java', 'Python', 'PHP', 'JavaScript'] },
        { category: 'Frameworks', items: ['Spring Boot', 'React.js', 'Symfony', 'CMocka'] },
        { category: 'Tools', items: ['Linux', 'Docker', 'Git', 'GitLab CI/CD'] },
    ];

    return (
        <div className="py-8">
            <div className="">
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center md:text-left">Core Skills</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillGroups.map((group) => (
                        <div key={group.category} className="space-y-3">
                            <h4 className="text-[11px] font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                                {group.category}
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                                {group.items.map((skill) => (
                                    <span 
                                        key={skill} 
                                        className="text-xs font-mono text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 px-2 py-0.5 rounded-sm border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;