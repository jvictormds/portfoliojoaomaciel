import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Download, Send, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConsentChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      consent: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: t.contact.toasts.consentRequired.title,
        description: t.contact.toasts.consentRequired.description,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t.contact.toasts.success.title,
        description: t.contact.toasts.success.description,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        consent: false
      });
    } catch (error) {
      toast({
        title: t.contact.toasts.error.title,
        description: t.contact.toasts.error.description,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                {t.contact.infoTitle}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-soft">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">{contact.label}</p>
                      {contact.action ? (
                        <a 
                          href={contact.action}
                          className="text-foreground hover:text-primary transition-smooth"
                          target={contact.action.startsWith('http') ? '_blank' : undefined}
                          rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">{t.contact.quickActions}</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/curriculo-joao-maciel.pdf" download>
                    <Download className="w-4 h-4" />
                    {t.contact.actions.downloadCV}
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a 
                    href="https://www.linkedin.com/in/jvictormds/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                    {t.contact.actions.connectLinkedIn}
                  </a>
                </Button>
                
                <Button variant="cta" className="w-full justify-start" asChild>
                  <a 
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Reunião%20com%20João%20Maciel&dates=&details=Conversa%20sobre%20oportunidades%20profissionais%20ou%20projetos&add=joaovictormaciel02@hotmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Send className="w-4 h-4" />
                    {t.contact.actions.scheduleCall}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>{t.contact.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contact.labels.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={t.contact.placeholders.name}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t.contact.labels.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={t.contact.placeholders.email}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.labels.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder={t.contact.placeholders.message}
                    rows={5}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={handleConsentChange}
                    required
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed">
                    {t.contact.consent}
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  variant="hero"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t.contact.actions.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t.contact.actions.send}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;