-- ====================================
-- FASE 1: Sistema de Roles e Permissões
-- ====================================

-- Criar enum de roles
CREATE TYPE public.app_role AS ENUM ('admin', 'viewer');

-- Criar tabela de user_roles
CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Habilitar RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Função security definer para verificar roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Policy: Admins podem visualizar roles
CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Policy: Admins podem gerenciar roles
CREATE POLICY "Admins can manage roles"
ON public.user_roles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ====================================
-- FASE 2: Estrutura de Dados
-- ====================================

-- Tabela de Seções do Site
CREATE TABLE public.site_sections (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    section_key text UNIQUE NOT NULL,
    is_active boolean DEFAULT true,
    display_order integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.site_sections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active sections"
ON public.site_sections FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage sections"
ON public.site_sections FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Tabela de Conteúdo Traduzível
CREATE TABLE public.content_translations (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    content_key text NOT NULL,
    language text NOT NULL,
    value text NOT NULL,
    section_key text REFERENCES public.site_sections(section_key) ON DELETE CASCADE,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    UNIQUE (content_key, language)
);

ALTER TABLE public.content_translations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view translations"
ON public.content_translations FOR SELECT
USING (true);

CREATE POLICY "Admins can manage translations"
ON public.content_translations FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Tabela de Imagens
CREATE TABLE public.site_images (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    image_key text UNIQUE NOT NULL,
    url text NOT NULL,
    alt_text_pt text,
    alt_text_en text,
    section_key text REFERENCES public.site_sections(section_key) ON DELETE SET NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.site_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view images"
ON public.site_images FOR SELECT
USING (true);

CREATE POLICY "Admins can manage images"
ON public.site_images FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Tabela de Experiências
CREATE TABLE public.experiences (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title_pt text NOT NULL,
    title_en text NOT NULL,
    company text NOT NULL,
    period text NOT NULL,
    location text NOT NULL,
    type text NOT NULL,
    description_pt text,
    description_en text,
    achievements_pt jsonb DEFAULT '[]'::jsonb,
    achievements_en jsonb DEFAULT '[]'::jsonb,
    skills jsonb DEFAULT '[]'::jsonb,
    display_order integer NOT NULL,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active experiences"
ON public.experiences FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage experiences"
ON public.experiences FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Tabela de Projetos
CREATE TABLE public.projects (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title_pt text NOT NULL,
    title_en text NOT NULL,
    category text NOT NULL,
    period text NOT NULL,
    summary_pt text,
    summary_en text,
    challenge_pt text,
    challenge_en text,
    role_pt text,
    role_en text,
    solution_pt jsonb DEFAULT '[]'::jsonb,
    solution_en jsonb DEFAULT '[]'::jsonb,
    results_pt jsonb DEFAULT '[]'::jsonb,
    results_en jsonb DEFAULT '[]'::jsonb,
    technologies jsonb DEFAULT '[]'::jsonb,
    metrics jsonb DEFAULT '[]'::jsonb,
    image_url text,
    gallery_images jsonb DEFAULT '[]'::jsonb,
    display_order integer NOT NULL,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active projects"
ON public.projects FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage projects"
ON public.projects FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Tabela de Cases
CREATE TABLE public.cases (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title_pt text NOT NULL,
    title_en text NOT NULL,
    subtitle_pt text,
    subtitle_en text,
    description_pt text,
    description_en text,
    category_pt text,
    category_en text,
    year text NOT NULL,
    pdf_url text NOT NULL,
    tags_pt jsonb DEFAULT '[]'::jsonb,
    tags_en jsonb DEFAULT '[]'::jsonb,
    display_order integer NOT NULL,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active cases"
ON public.cases FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage cases"
ON public.cases FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Tabela de Formação
CREATE TABLE public.education (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    degree_pt text NOT NULL,
    degree_en text NOT NULL,
    institution text NOT NULL,
    period text NOT NULL,
    status_pt text,
    status_en text,
    type_pt text,
    type_en text,
    description_pt text,
    description_en text,
    skills jsonb DEFAULT '[]'::jsonb,
    display_order integer NOT NULL,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.education ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active education"
ON public.education FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage education"
ON public.education FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Tabela de Certificações
CREATE TABLE public.certifications (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name_pt text NOT NULL,
    name_en text NOT NULL,
    issuer text NOT NULL,
    date text NOT NULL,
    expiry text,
    status text,
    description_pt text,
    description_en text,
    level text,
    display_order integer NOT NULL,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.certifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active certifications"
ON public.certifications FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage certifications"
ON public.certifications FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Tabela de Informações de Contato
CREATE TABLE public.contact_info (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text NOT NULL,
    phone text,
    linkedin_url text,
    location_pt text,
    location_en text,
    cv_url text,
    calendly_url text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.contact_info ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view contact info"
ON public.contact_info FOR SELECT
USING (true);

CREATE POLICY "Admins can manage contact info"
ON public.contact_info FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ====================================
-- TRIGGERS PARA UPDATED_AT
-- ====================================

CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_site_sections_updated_at
    BEFORE UPDATE ON public.site_sections
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_content_translations_updated_at
    BEFORE UPDATE ON public.content_translations
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_site_images_updated_at
    BEFORE UPDATE ON public.site_images
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_experiences_updated_at
    BEFORE UPDATE ON public.experiences
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON public.projects
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_cases_updated_at
    BEFORE UPDATE ON public.cases
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_education_updated_at
    BEFORE UPDATE ON public.education
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_certifications_updated_at
    BEFORE UPDATE ON public.certifications
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_contact_info_updated_at
    BEFORE UPDATE ON public.contact_info
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();