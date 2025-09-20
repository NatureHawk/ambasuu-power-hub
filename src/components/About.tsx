import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield } from "lucide-react";
import aboutImage from "@/assets/about-industrial.jpg";

const About = () => {
  const stats = [
    {
      icon: Award,
      number: "15+",
      text: "Years of Excellence",
      description: "Serving industries with dedication"
    },
    {
      icon: Users,
      number: "50+",
      text: "Expert Technicians",
      description: "Qualified and certified professionals"
    },
    {
      icon: Clock,
      number: "24/7",
      text: "Emergency Support",
      description: "Round-the-clock service availability"
    },
    {
      icon: Shield,
      number: "100%",
      text: "Quality Guarantee",
      description: "Assured quality in every project"
    }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "Electrical Contractors License",
    "Safety Compliance Certified",
    "Industrial Automation Certified"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-1 bg-accent"></div>
              <span className="text-accent font-semibold tracking-wide">ABOUT AMBASUU</span>
            </div>
            
            <h2 className="text-primary mb-6">
              Leading Industrial Services Provider in Eastern India
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Established in 2008, Ambasuu has been at the forefront of providing reliable 
              electrical and mechanical industrial services across India. Based in Kolkata, 
              we serve major industries with precision, expertise, and unwavering commitment to quality.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of certified technicians and engineers brings decades of combined 
              experience to every project, ensuring optimal performance and minimal downtime 
              for your industrial operations.
            </p>

            {/* Certifications */}
            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-4">Certifications & Compliance</h4>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="cta-button">
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Ambasuu Industrial Facility"
                className="rounded-2xl shadow-industrial w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">99%</div>
                      <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="hidden">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.text}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold text-foreground mb-1">{stat.text}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;