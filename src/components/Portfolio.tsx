import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Zap, X, Layers, Activity, ShieldCheck, ArrowRight } from 'lucide-react';

// Design Read: Agency portfolio section for B2B tech and high-growth enterprise clients, with an anti-slop dark-tech editorial language, leaning toward Tailwind v4 + Motion spring physics + asymmetric high-craft bento grid + rich case study detail drawer.
// DIALS: DESIGN_VARIANCE: 8 | MOTION_INTENSITY: 7 | VISUAL_DENSITY: 4

export interface Project {
  id: number;
  title: string;
  category: 'Web Design' | 'Dashboards';
  location: string;
  year: string;
  image: string;
  description: string;
  featured?: boolean;
  metric?: string;
  metricLabel?: string;
  tags: string[];
  fullCaseStudy?: {
    challenge: string;
    solution: string;
    deliverables: string[];
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Calendar App Platform',
    category: 'Dashboards',
    location: 'Web Application',
    year: '2023',
    featured: true,
    image: '/b2f04972-282e-4683-8d4f-06cff9316b8a.jfif',
    description: 'Intuitive calendar engine engineered for high-frequency team scheduling, zero-latency time blocking, and automated workflow syncing.',
    metric: '3.4x',
    metricLabel: 'Productivity Lift',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'WebSockets'],
    fullCaseStudy: {
      challenge: 'Multi-timezone teams struggled with fragmented calendar tools and scheduling friction during high-velocity work sprints.',
      solution: 'Engineered a real-time reactive grid engine with drag-and-drop availability blocks and instant multi-provider sync.',
      deliverables: ['Real-time sync engine', 'Custom time-blocking UI', 'Multi-calendar integrations', 'Mobile optimization'],
    },
  },
  {
    id: 2,
    title: 'Decoration.One',
    category: 'Web Design',
    location: 'Web & Mobile',
    year: '2026',
    featured: true,
    image: '/aff94a99-9f13-43e0-8a02-f8daa0d0732b.png',
    description: 'Modern decor studio platform focusing on clean aesthetics, dynamic visual customization, and fluid high-converting user journeys.',
    metric: '+140%',
    metricLabel: 'Direct Conversions',
    tags: ['Next.js', 'AI Engine', 'TailwindCSS', 'Motion'],
    fullCaseStudy: {
      challenge: 'Legacy studio storefront suffered from high bounce rates and rigid catalog navigation across mobile viewports.',
      solution: 'Rebuilt with an anti-slop dark-craft visual language and an interactive preview engine for instant item pairing.',
      deliverables: ['AI Visualizer integration', 'Sub-second page loads', 'Fluid filtering engine', 'Custom checkout flow'],
    },
  },
  {
    id: 3,
    title: 'IndianWholesale.co.uk',
    category: 'Web Design',
    location: 'Web & Mobile',
    year: '2026',
    image: '/5ddf10ee-1b4f-4800-bdb7-fac7e046eb75.png',
    description: 'Expansive B2B marketplace equipped with automated bulk pricing engines, instant tier calculations, and high-volume cart handling.',
    metric: '£2.4M+',
    metricLabel: 'Processed Volume',
    tags: ['E-Commerce', 'B2B Portal', 'Stripe API', 'PostgreSQL'],
    fullCaseStudy: {
      challenge: 'Wholesale buyers required complex multi-currency tier pricing and instant digital quotation approvals.',
      solution: 'Delivered an enterprise B2B portal with automated VAT calculators and real-time inventory reservation.',
      deliverables: ['Tiered pricing engine', 'Bulk order uploads', 'Automated invoicing', 'ERP integration'],
    },
  },
  {
    id: 4,
    title: 'PrPartyDecorations',
    category: 'Web Design',
    location: 'Web & Mobile',
    year: '2024',
    image: '/d8661941-5739-438c-8eb6-72a987e002d3.jfif',
    description: 'Vibrant e-commerce storefront integrated with real-time stock allocation and live order fulfillment telemetry.',
    metric: '+185%',
    metricLabel: 'Mobile Order Growth',
    tags: ['Shopify API', 'React', 'TailwindCSS', 'Analytics'],
    fullCaseStudy: {
      challenge: 'Seasonal inventory surges overwhelmed stock synchronization, leading to order backlogs and dropped checkouts.',
      solution: 'Designed a high-velocity mobile storefront with live inventory alerts and single-tap checkout options.',
      deliverables: ['Mobile-first UX redesign', 'Live stock notification trigger', 'Express payment gateway', 'SEO optimization'],
    },
  },
  {
    id: 5,
    title: 'Stock Management Engine',
    category: 'Dashboards',
    location: 'Web Application',
    year: '2025',
    featured: true,
    image: '/stockmannagement.png',
    description: 'Real-time multi-warehouse stock telemetry platform powered by predictive reorder analytics and automated alert webhooks.',
    metric: '99.98%',
    metricLabel: 'Inventory Accuracy',
    tags: ['Node.js', 'React', 'WebSockets', 'Chart.js'],
    fullCaseStudy: {
      challenge: 'Warehouse teams lacked unified visibility over multi-location stock transfers, resulting in phantom inventory discrepancies.',
      solution: 'Developed a zero-latency telemetry command center with automated reorder triggers and barcode scanner support.',
      deliverables: ['Real-time telemetry grid', 'Low-stock automated alerts', 'Supplier API webhooks', 'Custom reporting suite'],
    },
  },
  {
    id: 6,
    title: 'Ecommerce Analytics Tracker',
    category: 'Dashboards',
    location: 'Web Application',
    year: '2023',
    image: '/1d4f0371-1986-4804-9bdc-a4909170b2b7.png',
    description: 'Comprehensive telemetry dashboard tracking revenue funnels, customer retention cohorts, and ad conversion ROI.',
    metric: '< 200ms',
    metricLabel: 'Query Response',
    tags: ['TypeScript', 'D3.js', 'Vite', 'TailwindCSS'],
    fullCaseStudy: {
      challenge: 'E-commerce operators struggled to aggregate fragmented attribution data across Meta, Google Ads, and Klaviyo.',
      solution: 'Unified multi-channel streams into an ultra-dark command view with interactive cohort heatmaps.',
      deliverables: ['Unified data aggregator', 'Custom D3 charting components', 'Exportable executive summaries'],
    },
  },
  {
    id: 7,
    title: 'FlowerBlossom Digital Studio',
    category: 'Web Design',
    location: 'Web & Mobile',
    year: '2026',
    image: '/a585b59d-d0c3-4ae8-bd6d-6b54bfc244ca.png',
    description: 'Bespoke digital brand experience blending high-editorial typography with hardware-accelerated product showcases.',
    metric: '4.8s → 0.6s',
    metricLabel: 'Load Speed Boost',
    tags: ['Headless CMS', 'Motion', 'Vite', 'TailwindCSS'],
    fullCaseStudy: {
      challenge: 'High-res visual media impaired mobile load times and damaged search engine rankings.',
      solution: 'Implemented next-gen asset compression paired with hardware-accelerated reveal triggers and structured data schemas.',
      deliverables: ['Headless architecture setup', 'Micro-animation suite', 'Lighthouse 100/100 score', 'SEO schema mapping'],
    },
  },
  {
    id: 8,
    title: 'Enterprise Automation Command',
    category: 'Dashboards',
    location: 'Web Application',
    year: '2026',
    image: '/33a6739a-971f-4907-8f8a-08758caa5fd4.png',
    description: 'Visual workflow canvas enabling operations teams to orchestrate backend AI webhooks and automated cloud infrastructure.',
    metric: '42 hrs/wk',
    metricLabel: 'Manual Work Saved',
    tags: ['Python', 'FastAPI', 'React', 'TailwindCSS'],
    fullCaseStudy: {
      challenge: 'Operational workflows required repetitive manual data entry across disconnected legacy SaaS applications.',
      solution: 'Built a visual node-based execution editor with step-by-step audit logs and automated retry logic.',
      deliverables: ['Node-based workflow canvas', 'Live execution logs', 'Role-based access security', 'Webhook listeners'],
    },
  },
];

const categories = ['All', 'Web Design', 'Dashboards'] as const;

const aggregateMetrics = [
  { value: '3.8x', label: 'Avg Velocity Lift', icon: Activity },
  { value: '£10M+', label: 'Volume Processed', icon: Layers },
  { value: '99.98%', label: 'System Reliability', icon: ShieldCheck },
  { value: '< 300ms', label: 'Avg Page Response', icon: Zap },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  // Keyboard accessibility for modal dismissal
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedProject(null);
    }
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, handleKeyDown]);

  // Bento layout mapping for visual rhythm
  const getBentoSpan = (index: number) => {
    if (activeCategory !== 'All') {
      return index === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1';
    }
    const patterns = [
      'md:col-span-2 md:row-span-2', // Hero tile
      'md:col-span-1 md:row-span-1', 
      'md:col-span-1 md:row-span-1',
      'md:col-span-2 md:row-span-1', // Wide tile
      'md:col-span-1 md:row-span-2', // Tall tile
      'md:col-span-1 md:row-span-1',
      'md:col-span-2 md:row-span-1', // Wide tile
      'md:col-span-4 md:row-span-1', // Wide span across bottom
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section className="py-24 md:py-36 bg-[#090d16] text-white font-sans border-t border-zinc-800/60 relative overflow-hidden">
      {/* Dark Ambient Refraction Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-amber-500/10 via-cyan-500/5 to-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Micro Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-20">
          {/* Eyebrow Restraint: Single clean mono label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-amber-400/90 font-medium">
              // SELECTED SYSTEMS & BUILDS
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white max-w-4xl leading-[0.98] sm:leading-[0.95] pb-1">
                Architected for scale. <span className="italic text-zinc-400 font-light">Built to convert.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
                Explore our engineering portfolio spanning custom web design, high-concurrency telemetry dashboards, and automated enterprise platforms.
              </p>
            </div>

            {/* Anti-slop Animated Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-zinc-900/90 backdrop-blur-xl rounded-full border border-white/10 self-start lg:self-end shadow-xl">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                const count = category === 'All' 
                  ? projects.length 
                  : projects.filter(p => p.category === category).length;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`relative px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-300 flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                      isActive ? 'text-black font-semibold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-amber-400 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                    <span
                      className={`relative z-10 text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors ${
                        isActive
                          ? 'bg-black/20 text-black font-bold'
                          : 'bg-white/10 text-zinc-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Impact Metrics Banner */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/10">
            {aggregateMetrics.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm flex items-center gap-3.5 group hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400 tracking-wide font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[290px] md:auto-rows-[330px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const spanClass = getBentoSpan(index);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedProject(project)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${project.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  className={`group relative rounded-2xl overflow-hidden bg-zinc-900/70 border border-white/10 hover:border-amber-400/40 transition-all duration-500 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${spanClass}`}
                >
                  {/* Background Image with Smooth Scale */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
                    />
                  </div>

                  {/* Anti-Slop Dark Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/50 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Refraction Inner Border */}
                  <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] rounded-2xl pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 text-[11px] font-medium tracking-wide bg-[#090d16]/80 backdrop-blur-md border border-white/15 text-zinc-300 rounded-full">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-amber-300 rounded-full flex items-center gap-1">
                          <Zap className="w-3 h-3 fill-amber-300" />
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom Content Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
                    {/* Metric Highlight */}
                    {project.metric && (
                      <div className="mb-2 inline-flex items-baseline gap-2">
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-amber-400 font-mono drop-shadow">
                          {project.metric}
                        </span>
                        <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-mono">
                          {project.metricLabel}
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight group-hover:text-amber-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 mt-1.5 opacity-90 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Tech Stack Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/10">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono text-zinc-300 bg-white/5 border border-white/10 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            />

            {/* Modal Body */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d121f] border border-white/15 rounded-3xl shadow-2xl text-white z-10 custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/15 flex items-center justify-center text-zinc-300 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Hero Header */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-[#0d121f]/60 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 text-xs font-mono uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full">
                        {selectedProject.category} • {selectedProject.year}
                      </span>
                    </div>
                    <h3 id="modal-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                  {selectedProject.metric && (
                    <div className="p-3.5 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-amber-500/30 self-start sm:self-auto shadow-lg">
                      <div className="text-2xl font-bold text-amber-400 font-mono">
                        {selectedProject.metric}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        {selectedProject.metricLabel}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 space-y-8">
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-amber-400/90 mb-2 font-medium">
                    // SYSTEM OVERVIEW
                  </h4>
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.fullCaseStudy && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                    <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/10">
                      <h5 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 shadow-[0_0_8px_rgba(248,113,113,0.4)]" />
                        The Operational Friction
                      </h5>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {selectedProject.fullCaseStudy.challenge}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/10">
                      <h5 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
                        Engineered Solution
                      </h5>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {selectedProject.fullCaseStudy.solution}
                      </p>
                    </div>
                  </div>
                )}

                {/* Deliverables & Stack */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                  {selectedProject.fullCaseStudy?.deliverables && (
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-3 font-medium">
                        Key Deliverables
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedProject.fullCaseStudy.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-3 font-medium">
                      Architecture & Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-mono text-zinc-200 bg-white/5 border border-white/15 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-end gap-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    Close Preview
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-full bg-amber-400 text-black font-semibold text-xs tracking-wide hover:bg-amber-300 transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.35)] active:scale-[0.98]"
                  >
                    Request Similar Build
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
