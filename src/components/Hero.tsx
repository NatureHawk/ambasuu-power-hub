import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-pattern">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ambasuu Industrial Electrical Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-1 bg-accent"></div>
              <span className="text-primary-foreground/90 font-medium tracking-wide">
                TRUSTED SINCE 2020
              </span>
            </div>
            
            <h1 className="text-white mb-6 leading-tight">
              Powering Industries with{" "}
              <span className="text-accent">Reliable Electrical</span> Solutions
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
             From customized AC/DC motor manufacturing to traction motor repair, we deliver a one-stop solution for electrical and mechanical industrial manufacturing & repair across India with precision and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="cta-button group">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 7980427886
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">25+</div>
                <div className="text-sm text-primary-foreground/80">Years Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-primary-foreground/80">Clients Satisfied</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-primary-foreground/80">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;