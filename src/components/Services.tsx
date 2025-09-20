import { 
  Zap, 
  Fan, 
  Settings, 
  Cpu, 
  Power, 
  Wrench 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const linkFor = (title: string) => {
    const map: Record<string, string> = {
      "AC/DC Motor Rewinding": "/services/motors",
      "Blower & Fan Servicing": "/services/motors",        // adjust if you make a separate page
      "Transformer Services": "/services/transformers",
      "Control Panels & Automation": "/services/control-panels",
      "Generator Servicing": "/services/generators",
      "On-site Maintenance": "/services/maintenance",
    };
    return map[title] || "/services";
  };

  const services = [
    {
      icon: Zap,
      title: "AC/DC Motor Rewinding",
      description: "Complete motor rewinding and repair services for all types and capacities with precision testing.",
      features: ["All motor types", "Precision testing", "Quality guarantee"]
    },
    {
      icon: Fan,
      title: "Blower & Fan Servicing",
      description: "Comprehensive maintenance and repair of industrial blowers, fans, and ventilation systems.",
      features: ["Performance optimization", "Vibration analysis", "Emergency repairs"]
    },
    {
      icon: Settings,
      title: "Transformer Services",
      description: "Testing, repair, and maintenance of power transformers with advanced diagnostic equipment.",
      features: ["Oil analysis", "Insulation testing", "Load testing"]
    },
    {
      icon: Cpu,
      title: "Control Panels & Automation",
      description: "Design, installation, and maintenance of control panels and industrial automation systems.",
      features: ["PLC programming", "SCADA systems", "Panel manufacturing"]
    },
    {
      icon: Power,
      title: "Generator Servicing",
      description: "Complete generator maintenance, repair, and emergency response services for all brands.",
      features: ["All brands supported", "Preventive maintenance", "24/7 emergency"]
    },
    {
      icon: Wrench,
      title: "On-site Maintenance",
      description: "Professional on-site industrial maintenance services with qualified technicians.",
      features: ["Scheduled maintenance", "Emergency response", "Skilled technicians"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-accent"></div>
            <span className="text-accent font-semibold tracking-wide">OUR SERVICES</span>
            <div className="w-8 h-1 bg-accent"></div>
          </div>
          <h2 className="text-primary mb-4">
            Comprehensive Industrial Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From electrical repairs to mechanical maintenance, we provide complete 
            solutions for all your industrial needs with certified expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="service-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={linkFor(service.title)}>
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">Learn More</Button>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button className="cta-button">
            View All Services
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Need a custom solution? Contact us for specialized industrial services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;