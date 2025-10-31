import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Briefcase, FolderKanban, FileBox, GraduationCap, Activity } from 'lucide-react';

interface Stats {
  experiences: { active: number; total: number };
  projects: { active: number; total: number };
  cases: { active: number; total: number };
  education: { active: number; total: number };
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({
    experiences: { active: 0, total: 0 },
    projects: { active: 0, total: 0 },
    cases: { active: 0, total: 0 },
    education: { active: 0, total: 0 },
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [experiences, projects, cases, education] = await Promise.all([
        supabase.from('experiences').select('is_active', { count: 'exact' }),
        supabase.from('projects').select('is_active', { count: 'exact' }),
        supabase.from('cases').select('is_active', { count: 'exact' }),
        supabase.from('education').select('is_active', { count: 'exact' }),
      ]);

      setStats({
        experiences: {
          total: experiences.count || 0,
          active: experiences.data?.filter(e => e.is_active).length || 0,
        },
        projects: {
          total: projects.count || 0,
          active: projects.data?.filter(p => p.is_active).length || 0,
        },
        cases: {
          total: cases.count || 0,
          active: cases.data?.filter(c => c.is_active).length || 0,
        },
        education: {
          total: education.count || 0,
          active: education.data?.filter(e => e.is_active).length || 0,
        },
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Experiências',
      icon: Briefcase,
      active: stats.experiences.active,
      total: stats.experiences.total,
      color: 'text-blue-500',
    },
    {
      title: 'Projetos',
      icon: FolderKanban,
      active: stats.projects.active,
      total: stats.projects.total,
      color: 'text-green-500',
    },
    {
      title: 'Cases',
      icon: FileBox,
      active: stats.cases.active,
      total: stats.cases.total,
      color: 'text-purple-500',
    },
    {
      title: 'Formação',
      icon: GraduationCap,
      active: stats.education.active,
      total: stats.education.total,
      color: 'text-orange-500',
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Visão geral do portfólio</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <card.icon className={`h-4 w-4 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.active}</div>
              <p className="text-xs text-muted-foreground">
                {card.active} ativos de {card.total} totais
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Bem-vindo ao Painel Administrativo
          </CardTitle>
          <CardDescription>
            Gerencie todo o conteúdo do seu portfólio de forma centralizada
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Use o menu lateral para navegar entre as diferentes seções do sistema:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li><strong>Seções:</strong> Ativar/desativar e reordenar seções do site</li>
            <li><strong>Textos:</strong> Editar conteúdo em português e inglês</li>
            <li><strong>Imagens:</strong> Gerenciar imagens e fotos do portfólio</li>
            <li><strong>Experiências:</strong> Gerenciar experiências profissionais</li>
            <li><strong>Projetos:</strong> Gerenciar projetos e cases de sucesso</li>
            <li><strong>Cases:</strong> Gerenciar estudos de caso completos</li>
            <li><strong>Formação:</strong> Gerenciar educação e certificações</li>
            <li><strong>Contato:</strong> Atualizar informações de contato</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
