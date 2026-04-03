export const dict = {
  en: {
    header: {
      resume: "Resumé",
      title: "Glisboa-Security",
      href: ""
    },
    navItems: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Certifications", href: "#certs" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    about: {
      title: "Gabriel Lisboa",
      paragraphs: [
        "I am focused on cybersecurity with a strong inclination toward defensive operations, particularly in monitoring, detection, and incident response. My work centers on understanding how systems behave under normal conditions and identifying deviations that indicate malicious activity.",
        "Currently building hands-on projects that simulate real-world SOC environments, including log analysis, alert triage, and threat investigation. I prioritize practical implementation over theory, developing workflows that reflect how security teams operate in production environments.",
        "My goal is to contribute to blue team operations by improving visibility, refining detection logic, and responding effectively to security events using structured methodologies and continuous learning."
      ],
      badges: ["Blue Team", "IT Intern", "CS Student - 2026"]
    },
    stacks: {
      title: "TECH STACK",
      sections: [
        {
          id: "Networking",
          title: "Networking",
          items: ["Wireshark"],
        },
        {
          id: "Security Tools",
          title: "Security Tools",
          items: ["Splunk", "Nmap", "Linux"],
        },
        {
          id: "Programming",
          title: "Programming",
          items: ["C", "Java", "Python", "SQL", "PostgreSQL"],
        },
      ]
    },
    projects: {
      sectionTitle: "Projects",
      items: [
        {
          status: "sample",
          title: "SOC Detection Lab",
          description: "A home lab focused on log ingestion, alert triage, and detection rules using Windows Event Logs, Sysmon, and a SIEM.",
          tags: ["Splunk", "Sysmon", "Windows Logs"],
          link: "#",
          accent: "from-cyan-400/20 to-cyan-500/5",
          border: "border-cyan-400/20",
          text: "text-cyan-300",
        },
      ]
    },
    certifications: {
      sectionTitle: "Certifications & Training",
      certLabel: "Certifications",
      trainLabel: "Training",
      items: [
        {
          title: "Google Cybersecurity Professional Certificate",
          issuer: "Google",
          type: "Training",
          status: "Completed",
          date: "September 2025",
          color: "emerald",
          link: "https://www.credly.com/badges/54c48be1-dd63-4146-95ef-5e83de58f6f2/public_url",
        },
        {
          title: "CompTIA Security+",
          issuer: "CompTIA",
          type: "Certification",
          status: "In Progress",
          date: "Exam Scheduled",
          color: "red",
          link: "",
        },
        {
          title: "Junior Cybersecurity Analyst",
          issuer: "Cisco Networking Academy",
          type: "Training",
          status: "In Progress",
          date: "In Progress",
          color: "cyan",
          link: "",
        },
      ]
    },
    experience: {
      sectionTitle: "Experience & Education",
      moreToCome: "More to come...",
      ongoingText: "Ongoing",
      items: [
        {
          role: "Bachelor's in Computer Science",
          company:"Universidade Cidade de São Paulo",
          period: "3 years",
          startDate: "2023 - Present",
          status: "ongoing",
          location: "São Paulo, Brazil",
          mode: "On-site",
          type: "education",
          description: "Final-year Computer Science student with focus on networking, operating systems, and cybersecurity fundamentals. Built practical experience in programming, system design, and troubleshooting through academic projects and labs — applying concepts in network security, threat analysis, and system administration.",
          highlights: ["Networking", "Operating Systems", "Cybersecurity Fundamentals", "Programming", "Data Structures & Algorithms", "System Administration", "Network Security", "Application Security", "Database Fundamentals", "Software Engineering"],
        },
        {
          role: "IT Intern",
          company: "Ligue Mais Telecom",
          period: "9 months",
          startDate: "2025 - Present",
          status: "Current",
          location: "São Paulo, Brazil",
          mode: "On-site",
          description: "Delivered N1 technical support for VoIP/telephony environments—troubleshooting network and connectivity issues, performing call flow and log analysis (SIP signaling, RTP), and escalating complex incidents. Configured and provisioned ATA devices and IP telephones, ensuring proper network integration. Gained hands-on experience in a production IT environment following incident management and escalation procedures.",
          highlights: ["N1 Support & Troubleshooting", "Call Log Analysis", "Telephony Systems", "User-facing Problem Resolution", "VoIP/Telephony Environments", "SIP Signaling", "RTP Analysis", "ATA Devices", "IP Telephones", "Incident Management", "Escalation Procedures"],
        },
      ]
    },
    contact: {
      sectionTitle: "Contact",
      title: "Get In Touch",
      description: "I'm currently open to new opportunities. Whether you have a question or just want to connect, feel free to reach out and I'll get back to you!",
      buttonText: "Send Email"
    }
  },

  pt: {
    header: {
      resume: "Currículo",
      title: "Glisboa-Security",
      href: ""
    },
    navItems: [
      { label: "Sobre", href: "#about" },
      { label: "Habilidades", href: "#skills" },
      { label: "Projetos", href: "#projects" },
      { label: "Certificações", href: "#certs" },
      { label: "Experiência", href: "#experience" },
      { label: "Contato", href: "#contact" },
    ],
    about: {
      title: "Gabriel Lisboa",
      paragraphs: [
        "Focado em segurança da informação com uma forte inclinação para operações defensivas, particularmente em monitoramento, detecção e resposta a incidentes. Meu trabalho se concentra em entender como os sistemas se comportam em condições normais e identificar desvios que indiquem atividades maliciosas.",
        "Atualmente construindo projetos práticos que simulam ambientes reais de SOC, incluindo análise de logs, triagem de alertas e investigação de ameaças. Priorizo a implementação prática sobre a teoria, desenvolvendo fluxos de trabalho que refletem como as equipes de segurança operam em ambientes de produção.",
        "Meu objetivo é contribuir para as operações de blue team, melhorando a visibilidade, refinando a lógica de detecção e respondendo efetivamente a eventos de segurança usando metodologias estruturadas e aprendizado contínuo."
      ],
      badges: ["Blue Team", "Estagiário de TI", "Estudante de CC - 2026"]
    },
    stacks: {
      title: "TECNOLOGIAS",
      sections: [
        {
          id: "Networking",
          title: "Redes",
          items: ["Wireshark", "TCP/IP", "DNS", "HTTP"],
        },
        {
          id: "Security Tools",
          title: "Ferramentas de Segurança",
          items: ["Splunk", "Nmap", "Linux"],
        },
        {
          id: "Programming",
          title: "Programação",
          items: ["C", "Java", "Python", "SQL", "PostgreSQL"],
        },
      ]
    },
    projects: {
      sectionTitle: "Projetos",
      items: [
        {
          status: "exemplo",
          title: "Laboratório de Detecção SOC",
          description: "Um laboratório doméstico focado em ingestão de logs, triagem de alertas e regras de detecção usando Logs de Eventos do Windows, Sysmon e um SIEM.",
          tags: ["Splunk", "Sysmon", "Logs do Windows"],
          link: "#",
          accent: "from-cyan-400/20 to-cyan-500/5",
          border: "border-cyan-400/20",
          text: "text-cyan-300",
        },
      ]
    },
    certifications: {
      sectionTitle: "Certificações e Treinamento",
      certLabel: "Certificações",
      trainLabel: "Treinamentos",
      items: [
        {
          title: "Certificado Profissional de Cibersegurança do Google",
          issuer: "Google",
          type: "Treinamentos",
          status: "Concluído",
          date: "Setembro 2025",
          color: "emerald",
          link: "https://www.credly.com/badges/54c48be1-dd63-4146-95ef-5e83de58f6f2/public_url",
        },
        {
          title: "CompTIA Security+",
          issuer: "CompTIA",
          type: "Certificações",
          status: "Em Progresso",
          date: "Exame Agendado",
          color: "red",
          link: "",
        },
        {
          title: "Analista Júnior de Cibersegurança",
          issuer: "Cisco Networking Academy",
          type: "Treinamentos",
          status: "Em Progresso",
          date: "Em Progresso",
          color: "cyan",
          link: "",
        },
      ]
    },
    experience: {
      sectionTitle: "Experiência e Formação",
      moreToCome: "Mais por vir...",
      ongoingText: "Atual",
      items: [
        {
          role: "Bacharelado em Ciência da Computação",
          company:"Universidade Cidade de São Paulo",
          period: "3 anos",
          startDate: "2023 - Presente",
          status: "Em andamento",
          location: "São Paulo, Brasil",
          mode: "Presencial",
          type: "educação",
          description: "Estudante do último ano de Ciência da Computação com foco em redes, sistemas operacionais e fundamentos de cibersegurança. Experiência prática em programação, design de sistemas e solução de problemas por meio de projetos acadêmicos e laboratórios — aplicando conceitos em segurança de rede, análise de ameaças e administração de sistemas.",
          highlights: ["Redes", "Sistemas Operacionais", "Fundamentos de Cibersegurança", "Programação", "Estruturas de Dados e Algoritmos", "Administração de Sistemas", "Segurança de Redes", "Segurança de Aplicações", "Fundamentos de Banco de Dados", "Engenharia de Software"],
        },
        {
          role: "Estagiário de TI",
          company: "Ligue Mais Telecom",
          period: "9 meses",
          startDate: "2025 - Presente",
          status: "Atual",
          location: "São Paulo, Brasil",
          mode: "Presencial",
          description: "Suporte técnico N1 para ambientes de VoIP/telefonia — solucionando problemas de rede e conectividade, realizando análise de fluxo de chamadas e logs (sinalização SIP, RTP) e escalonando incidentes complexos. Configuração e provisionamento de dispositivos ATA e telefones IP, garantindo integração de rede adequada. Adquiriu experiência prática em um ambiente de TI em produção, seguindo procedimentos de gerenciamento e escalonamento de incidentes.",
          highlights: ["Suporte e Solução N1", "Análise de Logs", "Sistemas de Telefonia", "Resolução Focada no Usuário", "Ambientes VoIP/Telefonia", "Sinalização SIP", "Análise RTP", "Dispositivos ATA", "Telefones IP", "Gerenciamento de Incidentes", "Procedimentos de Escalonamento"],
        },
      ]
    },
    contact: {
      sectionTitle: "Contato",
      title: "Entre em Contato",
      description: "Atualmente estou aberto a novas oportunidades. Se você tiver alguma dúvida ou quiser apenas se conectar, sinta-se à vontade para entrar em contato e eu responderei!",
      buttonText: "Enviar Email"
    }
  }
};
