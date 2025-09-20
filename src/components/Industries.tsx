import { 
  Factory, 
  Zap, 
  Building2, 
  Cog
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Steel, textiles, chemicals, and heavy manufacturing industries",
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      title: "Power Generation",
      description: "Thermal power plants, renewable energy facilities, and substations",
      color: "bg-yellow-500"
    },
    {
      icon: Building2,
      title: "Commercial Buildings",
      description: "Office complexes, hospitals, educational institutions, and hotels",
      color: "bg-green-500"
    },
    {
      icon: Cog,
      title: "Automation",
      description: "Industrial automation, robotics, and smart manufacturing",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="industries" className="section-padding bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-accent"></div>
            <span className="text-accent font-semibold tracking-wide">INDUSTRIES WE SERVE</span>
            <div className="w-8 h-1 bg-accent"></div>
          </div>
          <h2 className="text-primary mb-4">
            Powering Diverse Industries Across India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From manufacturing giants to emerging tech companies, we provide specialized 
            electrical and mechanical services tailored to each industry's unique requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={industry.title}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${industry.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Industries Stats */}
        {/* Case Study Highlight */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Major Project Success
          </h3>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-6">
            We are Russian, European, and American motor developers, bringing world-class engineering and decades of experience to deliver reliable and innovative industrial solutions.
          </p>
          <div className="flex justify-center space-x-8">
            <div>
              <div className="text-2xl font-bold text-accent">Large Scale</div>
              <div className="text-sm text-primary-foreground/80">Manufacturing Plant</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">40%</div>
              <div className="text-sm text-primary-foreground/80">Downtime Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">3 Months</div>
              <div className="text-sm text-primary-foreground/80">Project Duration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;