import { Layers, Code2, Database, Cloud, Shield, Search, Rocket, Zap, Sparkles, GitBranch } from './Icons';

const brands = [
  { label: 'Shopify',   Icon: Layers },
  { label: 'Stripe',    Icon: Zap },
  { label: 'Notion',    Icon: Sparkles },
  { label: 'Vercel',    Icon: Cloud },
  { label: 'Linear',    Icon: Rocket },
  { label: 'Figma',     Icon: Code2 },
  { label: 'Supabase',  Icon: Database },
  { label: 'Railway',   Icon: GitBranch },
  { label: 'Prisma',    Icon: Shield },
  { label: 'Tailwind',  Icon: Search },
];

export default function TrustStrip() {
  return (
    /* No label, no border — just bare marquee row */
    <div className="relative flex overflow-hidden marquee-fade bg-gray-50 py-4">
      <div className="flex gap-14 animate-marquee whitespace-nowrap pr-14">
        {[...brands, ...brands].map(({ label, Icon }, i) => (
          <div
            key={`${label}-${i}`}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors"
          >
            <Icon size={20} />
            <span className="font-semibold text-base">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
