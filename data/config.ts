export interface Experience {
    period: string;
    company: string;
    title: string;
    description: string;
    tech: string[];
}

export interface SiteConfig {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    location: string;
    available: boolean;
    email: string;
    linkedin: string;
    github: string;
    experiences: Experience[];
}

export const siteConfig: SiteConfig = {
    name: "Marcos Vinicius",
    role: "Desenvolvedor Full Stack & Game Developer",
    tagline: "Transformando ideias em soluções digitais & experiências de jogo envolventes",
    bio: "Desenvolvedor Full Stack apaixonado por transformar ideias em produtos reais. Trabalho com o ecossistema moderno de JavaScript no front e back-end, e desenvolvo jogos com Unity e C#. Gosto de código limpo, boas abstrações e interfaces que funcionam.",
    location: "Mato Grosso do Sul, Brasil",
    available: true,
    email: "viniciusmarcosdev.ti@gmail.com",
    linkedin: "https://www.linkedin.com/in/marcos-vinicius-dev/",
    github: "https://github.com/devmarcosv",
    experiences: [
        {
            period: "2021 — 2022",
            company: "Genesis Tecnologia",
            title: "Desenvolvedor Full Stack",
            description:
                "Desenvolvimento de aplicações web completas, do frontend com React ao backend com Node.js, integrando APIs RESTful e PostgreSQL. Colaborei na arquitetura de projetos e definição de boas práticas.",
            tech: ["React", "Node.js", "PostgreSQL", "TypeScript", "Git"],
        },
        {
            period: "Ago 2023 — Nov 2023",
            company: "Nymeria Tecnologia",
            title: "Desenvolvedor Full Stack",
            description:
                "Desenvolvimento de funcionalidades para plataforma SaaS com Vue.js no frontend e Django no backend. Implementei melhorias de performance e integração com serviços AWS.",
            tech: ["Vue.js", "Python", "Django", "AWS", "MySQL"],
        },
        {
            period: "2024 — 2025",
            company: "Pax Primavera",
            title: "Lead Backend",
            description:
                "Liderei a migração de sistemas legados para microsserviços com Java e Spring Boot. Responsável pela modelagem de bancos relacionais e não-relacionais, escalabilidade e segurança das APIs.",
            tech: ["Java", "Spring Boot", "MongoDB", "Redis", "Docker"],
        },
        {
            period: "2025 — atual",
            company: "Prefeitura de Dourados MS",
            title: "Lead Banco de Dados",
            description:
                "Administração e otimização de bancos Oracle e SQL Server. Desenvolvimento de queries complexas, procedures e tuning de performance. Supervisão do time de DBA e modelagem de dados.",
            tech: ["Oracle", "SQL Server", "PL/SQL", "Tuning", "Data Modeling"],
        },
    ],
};