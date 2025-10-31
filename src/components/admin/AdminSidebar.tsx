import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Image,
  Briefcase,
  FolderKanban,
  FileBox,
  GraduationCap,
  Mail,
  Settings,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const menuItems = [
  { title: 'Dashboard', url: '/admin', icon: LayoutDashboard },
  { title: 'Seções', url: '/admin/sections', icon: Settings },
  { title: 'Textos', url: '/admin/content', icon: FileText },
  { title: 'Imagens', url: '/admin/images', icon: Image },
  { title: 'Experiências', url: '/admin/experiences', icon: Briefcase },
  { title: 'Projetos', url: '/admin/projects', icon: FolderKanban },
  { title: 'Cases', url: '/admin/cases', icon: FileBox },
  { title: 'Formação', url: '/admin/education', icon: GraduationCap },
  { title: 'Contato', url: '/admin/contact', icon: Mail },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'bg-muted text-primary font-medium' : 'hover:bg-muted/50';

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="mt-14">
        <SidebarGroup>
          <SidebarGroupLabel>Gerenciamento</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {state !== 'collapsed' && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
