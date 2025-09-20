import { type ComponentType } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cog, Cpu, Shield, Hammer, Wrench, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";

type Item = {
  icon: ComponentType<any>;
  title: string;
  desc: string;
  bullets: string[];
  cta?: string;
  href?: string;
};

const items: Item[] = [
  {
    icon: Cog,
    title: "Motor Manufacturing",
    desc: "AC/DC motors—shunt, compound, PMDC, squirrel-cage & slip-ring—engineered for reliability and efficiency.",
    bullets: ["IE3 efficiency options", "S1 continuous duty", "Vacuum-impregnated windings"],
    cta: "Explore Motors",
    href: "/services/motors",
  },
  {
    icon: Cpu,
    title: "Control Panels",
    desc: "PCC, MCC & APFC panels designed, wired and tested with full QA documentation.",
    bullets: ["Insulation & HV tests", "Primary injection tests", "PF improvement (APFC)"],
    cta: "Explore Panels",
    href: "/services/control-panels",
  },
  {
    icon: Shield,
    title: "Transformers",
    desc: "Power & distribution transformers with dry type and furnace options.",
    bullets: ["Up to 3 kVA, 3-phase", "Star/Delta configurations", "Routine test reports"],
    cta: "Explore Transformers",
    href: "/services/transformers",
  },
  {
    icon: Hammer,
    title: "Mechanical Fabrication",
    desc: "Precision parts & assemblies for industrial applications.",
    bullets: ["Flanges, tanks, housings", "Rollers, shafts, V-pulleys", "Screw jacks & fixtures"],
    cta: "Explore Fabrication",
    // href: "/services/maintenance"
  },
  {
    icon: Wrench,
    title: "Custom Design & Prototyping",
    desc: "Non-standard builds tailored to site constraints and performance goals.",
    bullets: ["Application-specific sizing", "Material & bearing selection", "Thermostat integration"],
    cta: "Discuss a Build",
    // href: "/services/automation"
  },
  {
    icon: ClipboardCheck,
    title: "Testing & QA",
    desc: "Documented routine tests for motors, panels and transformers.",
    bullets: ["Dynamometer/bench tests", "Insulation & HV checks", "Reports & certification"],
    cta: "See Test Scope",
    // href: "/services/motors"
  },
];

export default function Manufacturing() {
  const highlights = [
    "ISO 9001:2015",
    "IE3 Efficient Motors",
    "S1 Duty",
    "18-Month Guarantee",
    "Custom Non-Standard Designs",
    "Global Standards (JP/US/RU/EU)",
  ];

  return (
    <section id="manufacturing" className="w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <div className="text-sm font-semibold tracking-widest text-primary uppercase">Manufacturing</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-gray-900">
            Industrial Motors, Panels & Transformers
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We design and manufacture the core hardware that keeps plants running—built for longevity, efficiency and
            easy maintenance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <Card
              key={idx}
              className="group border border-gray-200 rounded-2xl shadow-none transition-all duration-200 will-change-transform hover:-translate-y-1 hover:ring-2 hover:ring-orange-500 hover:shadow-none"
            >
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <it.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">{it.title}</CardTitle>
                <CardDescription>{it.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mt-2 space-y-2 text-sm text-gray-700">
                  {it.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  {it.href ? (
                    <Link to={it.href}>
                      <Button
                        variant="outline"
                        className="rounded-xl border-orange-500 text-orange-600 hover:text-orange-700 hover:border-orange-600"
                      >
                        {it.cta ?? "Learn More"}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="outline"
                      className="rounded-xl border-orange-500 text-orange-600 hover:text-orange-700 hover:border-orange-600"
                    >
                      {it.cta ?? "Learn More"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border bg-white p-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {highlights.map((h, i) => (
              <Badge key={i} variant="secondary" className="rounded-full px-3 py-1">
                {h}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-gray-500">
            Routine testing on heavy-duty benches/dynamometers; thermostat options on higher variants; selected
            bearings for long service life.
          </p>
        </div>
      </div>
    </section>
  );
}
