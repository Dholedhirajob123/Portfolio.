import { Github, Linkedin, Mail, Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919922837879"; // Remove hyphens for WhatsApp format
    const message = encodeURIComponent("Hello, I'm reaching out from your portfolio website.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Social links array with proper functionality
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Dholedhirajob123", 
      label: "GitHub",
      onClick: null
    },
    // { 
    //   icon: Linkedin, 
    //   href: "https://www.linkedin.com/in/dhiraj-dhole/", 
    //   label: "LinkedIn",
    //   onClick: null
    // },
    { 
      icon: Mail, 
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=dholedhirajob123@gmail.com", 
      label: "Email",
      onClick: null,
      target: "_blank",
      rel: "noopener noreferrer"
    },
    { 
      icon: Phone, 
      href: "#", 
      label: "WhatsApp",
      onClick: handleWhatsAppClick
    },
    // { icon: Instagram, href: "#", label: "Instagram" },
    // { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {/* <span className="text-muted-foreground text-sm">Connect</span> */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                social.onClick ? (
                  // For WhatsApp (button with onClick)
                  <button
                    key={social.label}
                    onClick={social.onClick}
                    className="w-10 h-10 rounded-full border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-box transition-all duration-300 cursor-pointer"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </button>
                ) : (
                  // For other social links (anchor tags)
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.target || "_blank"}
                    rel={social.rel || "noopener noreferrer"}
                    className="w-10 h-10 rounded-full border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-box transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Additional Contact Info */}
          {/* <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <a 
              href="https://github.com/Dholedhirajob123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub: Dholedhirajob123
            </a>
            <span className="hidden md:inline">•</span>
            <a 
              href="https://www.linkedin.com/in/dhiraj-dhole/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn: dhiraj-dhole
            </a>
            <span className="hidden md:inline">•</span>
            <button 
              onClick={handleWhatsAppClick}
              className="hover:text-primary transition-colors"
            >
              WhatsApp: +91-9922837879
            </button>
          </div> */}

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Dhiraj Dhole 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;