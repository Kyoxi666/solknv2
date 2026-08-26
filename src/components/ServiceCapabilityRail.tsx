import {
  Activity,
  BellRing,
  Bot,
  Cable,
  CalendarClock,
  ChartNoAxesCombined,
  Cloud,
  Gauge,
  Headphones,
  LayoutTemplate,
  LockKeyhole,
  Megaphone,
  MonitorCog,
  Network,
  Radar,
  Router,
  ShieldCheck,
  ShoppingBag,
  UserRoundCheck,
  Waypoints,
  Wifi,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

const capabilityIcons = {
  activity: Activity,
  alerts: BellRing,
  automation: Workflow,
  bot: Bot,
  cabling: Cable,
  calendar: CalendarClock,
  cloud: Cloud,
  commerce: ShoppingBag,
  dashboard: ChartNoAxesCombined,
  helpdesk: Headphones,
  infrastructure: Network,
  monitoring: Radar,
  performance: Gauge,
  platform: LayoutTemplate,
  remoteSupport: MonitorCog,
  router: Router,
  security: ShieldCheck,
  strategy: Waypoints,
  team: UserRoundCheck,
  visibility: Activity,
  webSecurity: LockKeyhole,
  wifi: Wifi,
  marketing: Megaphone,
} satisfies Record<string, LucideIcon>;

export type CapabilityIcon = keyof typeof capabilityIcons;

export interface ServiceCapability {
  icon: CapabilityIcon;
  title: string;
  description: string;
}

interface ServiceCapabilityRailProps {
  headline: string;
  items: ServiceCapability[];
}

export function ServiceCapabilityRail({ headline, items }: ServiceCapabilityRailProps) {
  return (
    <section className="bg-surface-light py-24 text-[#151515] md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl">
          {headline}
        </h2>

        <div className="mt-20 snap-x snap-mandatory overflow-x-auto pb-4 md:mt-28 lg:overflow-visible lg:pb-0">
          <div className="grid min-w-max auto-cols-[82vw] grid-flow-col border-y border-black/15 sm:auto-cols-[46vw] lg:min-w-0 lg:grid-flow-row lg:grid-cols-5">
            {items.map(({ icon, title, description }, index) => {
              const Icon = capabilityIcons[icon];

              return (
                <article
                  key={title}
                  className={`flex min-h-[390px] snap-start flex-col justify-between px-6 py-8 transition-colors duration-300 hover:bg-white/55 md:min-h-[430px] md:px-8 md:py-10 ${index === 0 ? '' : 'border-l border-black/10'}`}
                >
                  <Icon className="h-9 w-9 text-black/75" strokeWidth={1.25} aria-hidden="true" />
                  <div>
                    <h3 className="mb-3 text-lg font-semibold tracking-[-0.02em] text-black">
                      {title}
                    </h3>
                    <p className="max-w-[24ch] text-base leading-relaxed text-black/65">
                      {description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
