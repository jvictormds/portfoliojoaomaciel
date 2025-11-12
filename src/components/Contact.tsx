import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.labels.email,
      value: "joaovictormaciel02@hotmail.com",
      action: "mailto:joaovictormaciel02@hotmail.com"
    },
    {
      icon: Phone,
      label: t.contact.labels.phone,
      value: "+55 (31) 9 9785-7798",
      action: "tel:+5531997857798"
    }
  ];

  return (
    <section id="contact" className="pt-16 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Compact Vertical Layout */}
          <div className="space-y-8">
            {/* Contact Information Cards - 2 Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-card rounded-lg shadow-soft hover:shadow-md transition-smooth cursor-pointer">
                  <div className="p-3 bg-primary/10 rounded-full shrink-0">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground mb-1">{contact.label}</p>
                    {contact.action ? (
                      <a 
                        href={contact.action}
                        className="text-base text-foreground hover:text-primary transition-smooth break-all font-medium"
                        target={contact.action.startsWith('http') ? '_blank' : undefined}
                        rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-base text-foreground break-words font-medium">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons - 2 Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="outline" size="lg" className="w-full justify-start h-auto py-4" asChild>
                <a 
                  href="https://www.linkedin.com/in/jvictormds/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  <span className="font-medium">{t.contact.actions.connectLinkedIn}</span>
                </a>
              </Button>
              
              <Button variant="cta" size="lg" className="w-full justify-start h-auto py-4" asChild>
                <a 
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Reunião%20com%20João%20Maciel&dates=&details=Conversa%20sobre%20oportunidades%20profissionais%20ou%20projetos&add=joaovictormaciel02@hotmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Send className="w-5 h-5 mr-3" />
                  <span className="font-medium">{t.contact.actions.scheduleCall}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;