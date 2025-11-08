import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Download, Send, MapPin } from "lucide-react";
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
    },
    {
      icon: Linkedin,
      label: t.contact.labels.linkedin,
      value: "linkedin.com/in/jvictormds",
      action: "https://www.linkedin.com/in/jvictormds/"
    },
    {
      icon: MapPin,
      label: t.contact.labels.location,
      value: "Belo Horizonte, MG",
      action: null
    }
  ];

  return (
    <section id="contact" className="pt-5 pb-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Grid - Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card rounded-lg shadow-soft hover:shadow-md transition-smooth">
                    <div className="p-2 md:p-3 bg-primary/10 rounded-full shrink-0">
                      <contact.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm font-medium text-muted-foreground">{contact.label}</p>
                      {contact.action ? (
                        <a 
                          href={contact.action}
                          className="text-sm md:text-base text-foreground hover:text-primary transition-smooth break-all"
                          target={contact.action.startsWith('http') ? '_blank' : undefined}
                          rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-sm md:text-base text-foreground break-words">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/curriculo-joao-maciel.pdf" download>
                    <Download className="w-4 h-4 md:w-5 md:h-5" />
                    {t.contact.actions.downloadCV}
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a 
                    href="https://www.linkedin.com/in/jvictormds/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                    {t.contact.actions.connectLinkedIn}
                  </a>
                </Button>
                
                <Button variant="cta" className="w-full justify-start" asChild>
                  <a 
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Reunião%20com%20João%20Maciel&dates=&details=Conversa%20sobre%20oportunidades%20profissionais%20ou%20projetos&add=joaovictormaciel02@hotmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    {t.contact.actions.scheduleCall}
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