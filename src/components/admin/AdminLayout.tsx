import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from './AdminSidebar';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Header with trigger */}
        <header className="fixed top-0 left-0 right-0 h-14 border-b bg-background z-50 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <h1 className="text-lg font-semibold">Painel Administrativo</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </header>

        <AdminSidebar />

        <main className="flex-1 pt-14">
          <div className="container mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
