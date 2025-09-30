import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Download, Send, MapPin } from "lucide-react";

const Contact = () => {
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
        title: "Consentimento necessário",
        description: "Por favor, aceite os termos de privacidade para continuar.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve!",
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
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato diretamente por e-mail.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "joaovictormaciel02@hotmail.com",
      action: "mailto:joaovictormaciel02@hotmail.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (31) 9 9785-7798",
      action: "tel:+5531997857798"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jvictormds",
      action: "https://www.linkedin.com/in/jvictormds/"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Belo Horizonte, MG",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Interessado em discutir oportunidades ou trocar ideias sobre produtos digitais? 
            Entre em contato comigo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Informações de Contato
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
              <h4 className="text-lg font-semibold">Ações Rápidas</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/curriculo-joao-maciel.pdf" download>
                    <Download className="w-4 h-4" />
                    Download do Currículo
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a 
                    href="https://www.linkedin.com/in/jvictormds/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                    Conectar no LinkedIn
                  </a>
                </Button>
                
                <Button variant="cta" className="w-full justify-start" asChild>
                  <a 
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Reunião%20com%20João%20Maciel&dates=&details=Conversa%20sobre%20oportunidades%20profissionais%20ou%20projetos&add=joaovictormaciel02@hotmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Send className="w-4 h-4" />
                    Agendar Conversa
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Conte-me sobre sua ideia, projeto ou oportunidade..."
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
                    Concordo com o processamento dos meus dados pessoais de acordo com a 
                    LGPD (Lei Geral de Proteção de Dados) para fins de contato profissional. 
                    Seus dados não serão compartilhados com terceiros.
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
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensagem
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