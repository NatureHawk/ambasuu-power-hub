import { Shield, Cog, Cpu, Hammer } from "lucide-react";

const Capabilities = () => {
  const cards = [
    { icon: Cog, title: "Motor Manufacturing", desc: "AC & DC motors incl. shunt/compound/PMDC, squirrel-cage & slip-ring; IE3 efficiency; S1 duty." },
    { icon: Cpu, title: "Control Panels", desc: "PCC, MCC, APFC panels with HV/insulation/primary-injection tests and documented QA." },
    { icon: Shield, title: "Transformers", desc: "Power & distribution transformers (up to 3 kVA, 3-phase), star/delta, dry type & furnace." },
    { icon: Hammer, title: "Mechanical Fabrication", desc: "Flanges, tanks, bearing blocks, gear housings, rollers, shafts, screw jacks, V-pulleys, etc." },
  ];

  const highlights = [
    "ISO 9001:2015",
    "IE3 Efficient Motors",
    "S1 Continuous Duty",
    "18-Month Guarantee",
    "Custom Non-Standard Designs",
    "Fits Global Standards (JP/US/RU/EU)",
  ];

  return (
    <section id="manufacturing" className="w-full bg-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Manufacturing</h2>
        <p className="mt-2 text-gray-600">
          We design and manufacture motors, control panels, transformers, and precision mechanical parts—built for reliability and energy savings.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-gray-200">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <ul className="flex flex-wrap items-center justify-between gap-3">
            {highlights.map((h, i) => (
              <li key={i} className="rounded-full px-4 py-2 text-sm font-medium ring-1 ring-gray-200">{h}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-500">
            Also: routine testing on heavy-duty benches/dynamometers, thermostatic protection on higher variants, vacuum-impregnated windings, and selected bearings for long service life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
