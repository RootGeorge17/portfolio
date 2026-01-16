const ProjectsSection = () => {
	const projects = [
		{
			title: 'PairWise (Final Year Project)',
			tech: ['Java', 'Spring Boot', 'Docker', 'React.js', 'TypeScript', 'MariaDB'],
			description: 'Collaborative coding platform enabling users to concurrently write & execute code for solving challenges.',
			link: 'https://github.com/RootGeorge17/project-link',
		},
		{
			title: 'Music Review Community',
			tech: ['Symfony', 'PHP', 'Stimulus', 'JavaScript', 'MySQL', 'Twig', 'Bootstrap'],
			description: 'Built a Symfony-based platform for centralised music discovery, allowing users to submit and browse album reviews.',
			link: 'https://github.com/RootGeorge17/project-link',
		},
	];

	return (
		<div className="py-6">
			<div className="space-y-4">
				<div>
					<h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center md:text-left">Selected Projects</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-8">
					{projects.map((project) => (
						<div key={project.title} className="group relative">
							<div className="space-y-2">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
									<h4 className="text-md font-medium text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
										<a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
											{project.title}
											<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
										</a>
									</h4>
									<div className="flex flex-wrap gap-2">
										{project.tech.map((t) => (
											<span key={t} className="text-[10px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
												{t}
											</span>
										))}
									</div>
								</div>
								<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
									{project.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;