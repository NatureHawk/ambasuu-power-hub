import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/ambasuu-logo.png";

const Footer = () => {
  const services = [
    "Motor Rewinding & Repair",
    "Transformer Services",
    "Control Panel & Automation",
    "Generator Servicing",
    "Blower & Fan Servicing",
    "On-site Maintenance"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Us", href: "#contact" },
    { name: "Emergency Service", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Ambasuu" className="h-12 w-auto" />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Leading provider of electrical and mechanical industrial services 
              across India. Trusted by major industries.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-accent" />
                <span className="text-sm">+91 7980427886</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-accent" />
                <span className="text-sm">ambasuu.in@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm">
                  Workshop- Madhya Khalia,Kona More, Chamrail, Howrah -711114
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
            <div className="space-y-2 mb-6">
              <div className="text-sm">
                <span className="text-primary-foreground/80">Monday - Saturday:</span><br />
                <span className="text-accent">8:00 AM - 8:00 PM</span>
              </div>
              <div className="text-sm">
                <span className="text-primary-foreground/80">Emergency Service:</span><br />
                <span className="text-accent">24/7 Available</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="bg-primary-light p-2 rounded-lg hover:bg-accent transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="border-t border-primary-light py-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
            <span>ISO 9001:2015 Certified</span>
            <span>•</span>
            <span>Electrical Contractors License</span>
            <span>•</span>
            <span>Safety Compliance Certified</span>
            <span>•</span>
            <span>MSME</span>
            <span>•</span>
            <span>100% Local Content</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <div>
              © 2024 Ambasuu Industrial Services. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;