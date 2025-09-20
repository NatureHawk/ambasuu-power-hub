import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 7980427886"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["ambasuu.in@gmail.com"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: ["63,Nilmoni Mullick Lane,Howrah, West Bengal 711101"],
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Sat: 8:00 AM - 8:00 PM", "Emergency: 24/7 Available"],
      action: "Emergency Call"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-accent"></div>
            <span className="text-accent font-semibold tracking-wide">GET IN TOUCH</span>
            <div className="w-8 h-1 bg-accent"></div>
          </div>
          <h2 className="text-primary mb-4">
            Ready to Power Your Project?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact our expert team for immediate assistance or to discuss your 
            industrial electrical and mechanical service requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={info.title}
                    className="p-6 hover:shadow-card transition-all duration-300 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start">
                      <div className="bg-accent/10 p-3 rounded-lg mr-4 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail) => (
                          <p key={detail} className="text-muted-foreground text-sm mb-1">
                            {detail}
                          </p>
                        ))}
                        <Button 
                          variant="link" 
                          className="text-accent p-0 h-auto mt-2 text-sm"
                        >
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-4">
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Support
              </Button>
              <Button 
                className="w-full cta-button"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Service
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 animate-scale-in">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                Request a Quote
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <Input 
                      placeholder="Enter your full name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      placeholder="+91 7980427886"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@company.com"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Company Name
                    </label>
                    <Input 
                      placeholder="Your company name"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Service Required *
                  </label>
                  <select className="w-full h-12 border border-input rounded-md px-3 bg-background">
                    <option>Select a service</option>
                    <option>Motor Rewinding & Repair</option>
                    <option>Transformer Services</option>
                    <option>Control Panel & Automation</option>
                    <option>Generator Servicing</option>
                    <option>On-site Maintenance</option>
                    <option>Emergency Repair</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea 
                    placeholder="Please describe your requirements, equipment specifications, timeline, and any specific needs..."
                    className="min-h-32 resize-none"
                  />
                </div>

                <Button className="cta-button w-full md:w-auto" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Quote Request
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6 text-center">
              Our Location
            </h3>
            <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Head Office - Kolkata</h4>
                <p className="text-muted-foreground">
                  63,Nilmoni Mullick Lane,Howrah West Bengal 711101
                </p>
                <Button variant="link" className="text-accent mt-2">
                  View on Google Maps →
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;