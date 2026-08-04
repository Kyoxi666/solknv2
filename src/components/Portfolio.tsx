import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Calendar App',
    category: 'Dashboards',
    location: 'Web Application',
    year: '2023',
    image: '/b2f04972-282e-4683-8d4f-06cff9316b8a.jfif',
    description: 'Developed an intuitive calendar interface for seamless scheduling and time management.',
  },
  {
    id: 2,
    title: 'Decoration.One',
    category: 'Web Design',
    location: 'Web & Mobile',
    year: '2026',
    image: '/aff94a99-9f13-43e0-8a02-f8daa0d0732b.png',
    description: 'Designed a modern, AI-driven platform focusing on clean aesthetics and user engagement.',
  },
  {
    id: 3,
    title: 'IndianWholesale.co.uk',
    category: 'Web Design',
    location: 'Web & Mobile',
    year: '2026',
    image: '/5ddf10ee-1b4f-4800-bdb7-fac7e046eb75.png',
    description: 'Created an expansive B2B wholesale marketplace with advanced filtering and cart management.',
  },
  {
    id: 4,
    title: 'PrPartyDecorations',
    category: 'Web Design',
    location: 'Web & Mobile',
    year: '2024',
    image: '/d8661941-5739-438c-8eb6-72a987e002d3.jfif',
    description: 'Built a vibrant e-commerce storefront with integrated inventory and order tracking dashboards.',
  },
  {
    id: 5,
    title: 'Stock Management',
    category: 'Dashboards',
    location: 'Web Application',
    year: '2025',
    image: '/stockmannagement.png',
    description: 'Implemented a real-time stock management system with predictive analytics and reporting.',
  },
  {
    id: 6,
    title: 'Ecommerce Tracker',
    category: 'Dashboards',
    location: 'Web Application',
    year: '2023',
    image: '/1d4f0371-1986-4804-9bdc-a4909170b2b7.png',
    description: 'Developed a comprehensive analytics dashboard for tracking sales, conversion, and traffic metrics.',
  },
  {
    id: 7,
    title: 'FlowerBlossom',
    category: 'Web Design',
    location: 'Web & Mobile',
    year: '2026',
    image: '/a585b59d-d0c3-4ae8-bd6d-6b54bfc244ca.png',
    description: 'Designed a unified digital marketing command centre aggregating campaign performance.',
  },
  {
    id: 8,
    title: 'Automation Dashboard',
    category: 'Dashboards',
    location: 'Web Application',
    year: '2026',
    image: '/33a6739a-971f-4907-8f8a-08758caa5fd4.png',
    description: 'Engineered custom business automation flows with visual workflow editors and live monitoring.',
  },
];

// Fixed: categories match the actual category values used in projects above
const categories = ['All', 'Web Design', 'Dashboards'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  const getGridItemClass = (index: number) => {
    const classes = [
      'md:col-span-2 md:row-span-1',
      'md:col-span-1 md:row-span-2',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
      'md:col-span-2 md:row-span-1',
      'md:col-span-5 md:row-span-1',
    ];
    return classes[index % classes.length];
  };

  return (
    <section className="py-24 bg-[#0f172a] text-white font-sans border-t border-slate-800/60">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate-500 mb-4">
            Selected works
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white max-w-xl">
              Portfolio
            </h2>
            {/* Filter tabs */}
            <div className="flex gap-4 text-sm font-medium">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`pb-0.5 transition-all duration-200 ${
                    activeCategory === category
                      ? 'text-white border-b border-white'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 sm:gap-3 auto-rows-[250px] md:auto-rows-[300px] grid-flow-dense">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group overflow-hidden bg-slate-800 rounded-lg ${getGridItemClass(index)}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/20 to-transparent flex flex-col justify-end p-5 sm:p-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg sm:text-xl font-medium text-white drop-shadow-md transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>

                <div className="overflow-hidden max-h-0 group-hover:max-h-[200px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-sm text-slate-300 leading-relaxed mt-3 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-[10px] font-medium text-slate-400">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
