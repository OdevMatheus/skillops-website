export type Locale = "en" | "pt-BR" | "es";

export const LOCALE_LIST: { id: Locale; label: string; fullName: string }[] = [
  { id: "en", label: "EN", fullName: "English" },
  { id: "pt-BR", label: "PT-BR", fullName: "Português (Brasil)" },
  { id: "es", label: "ES", fullName: "Español" }
];

export interface AboutTabTranslation {
  id: "overview" | "modules" | "sync";
  label: string;
  surface: "white" | "lime";
  panelTitle: string;
  panelDesc: string;
  diagram: string;
}

export interface TranslationDictionary {
  header: {
    navAria: string;
    library: string;
    langSwitcherAria: string;
    starOnGithub: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    sub: string;
    scrollCueAria: string;
    scrollCueLabel: string;
  };
  about: {
    title: string;
    leadPart1: string;
    leadSkills: string;
    leadAnd: string;
    leadSubagents: string;
    leadPart2: string;
    leadTools: string;
    leadPart3: string;
    tabsAria: string;
    tabs: AboutTabTranslation[];
  };
  workflow: {
    title: string;
    subBeforeCmd: string;
    subAfterCmd: string;
    tuiAria: string;
    statusLaunching: string;
    statusStep1: string;
    statusStep2: string;
    statusInstalled: string;
    step1Banner: string;
    step1Group: string;
    step1Hint: string;
    selectedWord: string;
    enterToContinue: string;
    step1CompletedLabel: string;
    step2Banner: string;
    step2Descriptions: {
      mcpArchitect: string;
      contextScout: string;
      astBlastRadius: string;
      securitySastGate: string;
    };
    step2SelectedSummary: string;
    enterToImport: string;
    step3ConfiguredLabel: string;
    step3ConfiguredSummary: string;
    step3Banner: string;
    step3Done: string;
    step3LockUpdated: string;
  };
  openSource: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    leadPart1: string;
    leadSkill: string;
    leadSubagent: string;
    leadAnd: string;
    leadAdapter: string;
    leadPart2: string;
    exploreRepoBtn: string;
    contributeSkillBtn: string;
    panelAria: string;
    panelBadge: string;
    tracks: {
      tag: string;
      path: string;
      desc: string;
    }[];
  };
  footer: {
    wordmarkAria: string;
    license: string;
    builtBy: string;
    socialsAria: string;
  };
  library: {
    contributePrompt: string;
    contributeLink: string;
    title: string;
    sub: string;
    switchAria: string;
    skillsTab: string;
    agentsTab: string;
    badgeSkill: string;
    badgeAgent: string;
    copy: string;
    copied: string;
    viewManifest: string;
    summaries: {
      mcpArchitect: string;
      contextScout: string;
    };
  };
  transpiler: {
    headingPrefix: string;
    modeWords: {
      skill: string;
      subagent: string;
    };
    headingSuffix: string;
    desc: string;
    shaNote: string;
    canonicalHead: string;
    controlAria: string;
    switchAria: string;
    skillBtn: string;
    subagentBtn: string;
    copyCmd: string;
    copiedCmd: string;
    ideTabsAria: string;
    copiedStatus: string;
    readyStatus: string;
  };
  catalog: {
    title: string;
    sub: string;
    browseBtn: string;
    categoriesAria: string;
    tabs: {
      allTitle: string;
      allSub: string;
      skillsTitle: string;
      skillsSub: string;
      subagentsTitle: string;
      subagentsSub: string;
      adaptersTitle: string;
      adaptersSub: string;
    };
    submitSkillBtn: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
  en: {
    header: {
      navAria: "Primary navigation",
      library: "Library",
      langSwitcherAria: "Select language",
      starOnGithub: "Star on GitHub"
    },
    hero: {
      titleLine1: "One skills library.",
      titleLine2: "Every coding agent.",
      sub: "Curated open-source Skills and Subagents, imported directly into your coding agent with a single command.",
      scrollCueAria: "Scroll down to learn what SkillOps is",
      scrollCueLabel: "What is SkillOps"
    },
    about: {
      title: "What is SkillOps?",
      leadPart1:
        "SkillOps is an open-source package manager for AI coding assistants. Instead of copying and rewriting prompt files across Cursor, Claude Code, GitHub Copilot, and Antigravity, you maintain one library of ",
      leadSkills: "Skills",
      leadAnd: " and ",
      leadSubagents: "Subagents",
      leadPart2: " and install them natively across ",
      leadTools: "28 AI tools",
      leadPart3: " with a single command.",
      tabsAria: "What is SkillOps dimensions",
      tabs: [
        {
          id: "overview",
          label: "1 Manifest -> 28 Tools",
          surface: "white",
          panelTitle: "One canonical source of truth for every coding agent.",
          panelDesc:
            "Every AI assistant demands its own folder layout and YAML frontmatter. SkillOps compiles a single Markdown manifest into the native file structure each tool expects.",
          diagram: `catalog/skills/mcp-architect/SKILL.md
  |-- .cursor/rules/skillops-mcp-architect.mdc
  |-- .claude/skills/mcp-architect/SKILL.md
  |-- .github/instructions/skillops-mcp-architect.instructions.md
  |-- .agent/skills/mcp-architect/SKILL.md
  +-- +24 native IDE & CLI targets`
        },
        {
          id: "modules",
          label: "Skills & Subagents",
          surface: "lime",
          panelTitle: "Reusable playbooks and isolated specialist personas.",
          panelDesc:
            "Skills load procedural workflows progressively (<= 60 tokens at idle). Subagents run in isolated context windows with dedicated system prompts and read-only tool allowlists.",
          diagram: `SKILL.md     -> Procedural workflow + L3 scripts (0 idle tokens)
SUBAGENT.md  -> Isolated specialist + restricted tool allowlist`
        },
        {
          id: "sync",
          label: "100% Local & Safe",
          surface: "white",
          panelTitle: "Zero API keys. Deterministic SHA-256 drift protection.",
          panelDesc:
            "SkillOps runs locally via npx with zero cloud dependencies. Every installed file is hash-tracked in .skillops-lock.json so manual local edits are never overwritten.",
          diagram: `$ npx skillops-cli@latest add
  + CREATED   New native rule or agent file written
  = KEPT      Unchanged file already up to date
  ! CONFLICT  Local edit detected and safely preserved`
        }
      ]
    },
    workflow: {
      title: "Every skill. Every agent. One command.",
      subBeforeCmd: "Run ",
      subAfterCmd:
        " in your repository. Pick your AI coding agents, select the Skills and Subagents you need, and SkillOps writes every native file automatically.",
      tuiAria: "Animated preview of npx skillops-cli@latest add",
      statusLaunching: " launching...",
      statusStep1: "step 1/2",
      statusStep2: "step 2/2",
      statusInstalled: "✔ installed",
      step1Banner: "◆ SkillOps — Step 1/2: Select Your AI IDE / Agent",
      step1Group: "[ ◆ AI IDEs & Agents (28) ]",
      step1Hint: "↑/↓ move · Space select",
      selectedWord: "selected",
      enterToContinue: "Enter to continue",
      step1CompletedLabel: "Step 1/2 · AI IDEs",
      step2Banner: "◆ SkillOps — Step 2/2: Select Skills & Subagents",
      step2Descriptions: {
        mcpArchitect: "Design & validate MCP servers",
        contextScout: "Read-only codebase explorer",
        astBlastRadius: "Call-graph impact analyzer",
        securitySastGate: "OWASP static security gate"
      },
      step2SelectedSummary: "selected (1 Skill, 1 Agent)",
      enterToImport: "Enter to import",
      step3ConfiguredLabel: "Configured",
      step3ConfiguredSummary: "cursor, claude, copilot · 2 modules",
      step3Banner: "◆ SkillOps — Skills & Subagents Installed",
      step3Done: "Done in 38ms",
      step3LockUpdated: "· .skillops-lock.json updated"
    },
    openSource: {
      eyebrow: "MIT LICENSED · COMMUNITY DRIVEN",
      titleLine1: "100% Open Source.",
      titleLine2: "Built in the open.",
      leadPart1:
        "No proprietary cloud, no API keys, and no walled gardens. Every ",
      leadSkill: "Skill",
      leadSubagent: "Subagent",
      leadAnd: ", and ",
      leadAdapter: "IDE adapter",
      leadPart2:
        " in SkillOps is public Markdown and TypeScript — free to audit, fork, and improve with the community.",
      exploreRepoBtn: "Explore GitHub Repository",
      contributeSkillBtn: "Contribute a Skill (PR)",
      panelAria: "Open-source architecture and contribution tracks",
      panelBadge: "MIT LICENSE",
      tracks: [
        {
          tag: "TRACK A · FAST-TRACK CATALOG",
          path: "catalog/skills/ & catalog/subagents/",
          desc: "Open a Pull Request directly with any new SKILL.md or SUBAGENT.md. GitHub Actions validates schema and frontmatter automatically — no prior Issue required."
        },
        {
          tag: "TRACK B · CORE CLI & 28 ADAPTERS",
          path: "src/adapters/ & src/commands/",
          desc: "Pure TypeScript transpiler engine and zero-dependency terminal UI. Propose new IDE targets or CLI capabilities via architectural Issues."
        },
        {
          tag: "MIT LICENSE · ZERO LOCK-IN",
          path: ".skillops-lock.json (SHA-256)",
          desc: "Runs 100% locally via npx with zero telemetry and zero API keys. Every generated file is standard Markdown you own inside your repository."
        }
      ]
    },
    footer: {
      wordmarkAria: "SKILLOPS architectural block wordmark",
      license: "MIT Licensed",
      builtBy: "Built by",
      socialsAria: "Social media links"
    },
    library: {
      contributePrompt:
        "Want to contribute a new Skill or Agent to the library?",
      contributeLink: "Open a Pull Request ↗",
      title: "Library.",
      sub: "Official open-source modules ready to install into any of the 28 supported AI coding agents.",
      switchAria: "Choose Skills or Agents",
      skillsTab: "Skills",
      agentsTab: "Agents",
      badgeSkill: "SKILL",
      badgeAgent: "AGENT",
      copy: "Copy",
      copied: "Copied ✔",
      viewManifest: "View manifest on GitHub ↗",
      summaries: {
        mcpArchitect:
          "Design, implement, and audit Model Context Protocol (MCP) servers and FastMCP tools with strict JSON-RPC stdio hygiene and typed schemas.",
        contextScout:
          "Read-only codebase cartographer running in an isolated context window to map entrypoints, call graphs, and exact file line ranges."
      }
    },
    transpiler: {
      headingPrefix: "Transpile ",
      modeWords: {
        skill: "Skills",
        subagent: "Subagents"
      },
      headingSuffix: " live.",
      desc: "Flip the manifest switch between a reusable Skill and an isolated Subagent, then pick any supported IDE target. The live transpiler previews the exact file path, native YAML frontmatter, and CLI command generated by SkillOps.",
      shaNote:
        "Deterministic SHA-256 sync prevents overwriting local edits without your confirmation.",
      canonicalHead: "Canonical source manifest",
      controlAria: "Interactive SkillOps manifest transpiler",
      switchAria: "Select manifest kind",
      skillBtn: "Skill manifest",
      subagentBtn: "Subagent manifest",
      copyCmd: "Copy npx command",
      copiedCmd: "Copied!",
      ideTabsAria: "Target AI IDEs",
      copiedStatus: "Copied to clipboard",
      readyStatus: "Ready to run in any repository"
    },
    catalog: {
      title: "Catalog and runtime targets.",
      sub: "Point at any row in the catalog index to inspect its CLI command and target files in the preview frame, or filter by category on the left.",
      browseBtn: "Browse catalog folder",
      categoriesAria: "Catalog categories",
      tabs: {
        allTitle: "All modules",
        allSub: "Skills, Agents & IDEs",
        skillsTitle: "Catalog Skills",
        skillsSub: "Reusable workflows",
        subagentsTitle: "Subagents",
        subagentsSub: "Isolated specialists",
        adaptersTitle: "IDE Adapters",
        adaptersSub: "28 native targets"
      },
      submitSkillBtn: "Submit a new Skill"
    }
  },

  "pt-BR": {
    header: {
      navAria: "Navegação principal",
      library: "Biblioteca",
      langSwitcherAria: "Selecionar idioma",
      starOnGithub: "Star no GitHub"
    },
    hero: {
      titleLine1: "Uma biblioteca de skills.",
      titleLine2: "Todos os agentes de código.",
      sub: "Skills e Subagents open-source curados, importados diretamente para o seu agente de programação com um único comando.",
      scrollCueAria: "Role para baixo para saber o que é o SkillOps",
      scrollCueLabel: "O que é o SkillOps"
    },
    about: {
      title: "O que é o SkillOps?",
      leadPart1:
        "O SkillOps é um gerenciador de pacotes open-source para assistentes de programação com IA. Em vez de copiar e reescrever arquivos de prompt entre Cursor, Claude Code, GitHub Copilot e Antigravity, você mantém uma única biblioteca de ",
      leadSkills: "Skills",
      leadAnd: " e ",
      leadSubagents: "Subagents",
      leadPart2: " e os instala nativamente em ",
      leadTools: "28 ferramentas de IA",
      leadPart3: " com um único comando.",
      tabsAria: "Dimensões sobre o que é o SkillOps",
      tabs: [
        {
          id: "overview",
          label: "1 Manifesto -> 28 Ferramentas",
          surface: "white",
          panelTitle:
            "Uma única fonte da verdade para cada agente de código.",
          panelDesc:
            "Cada assistente de IA exige sua própria estrutura de pastas e frontmatter YAML. O SkillOps compila um único manifesto Markdown na estrutura nativa de arquivos que cada ferramenta espera.",
          diagram: `catalog/skills/mcp-architect/SKILL.md
  |-- .cursor/rules/skillops-mcp-architect.mdc
  |-- .claude/skills/mcp-architect/SKILL.md
  |-- .github/instructions/skillops-mcp-architect.instructions.md
  |-- .agent/skills/mcp-architect/SKILL.md
  +-- +24 destinos nativos de IDEs e CLIs`
        },
        {
          id: "modules",
          label: "Skills & Subagents",
          surface: "lime",
          panelTitle:
            "Playbooks reutilizáveis e personas especialistas isoladas.",
          panelDesc:
            "Skills carregam fluxos procedurais de forma progressiva (<= 60 tokens em repouso). Subagents rodam em janelas de contexto isoladas com system prompts dedicados e permissões restritas de leitura.",
          diagram: `SKILL.md     -> Fluxo procedural + scripts L3 (0 tokens ociosos)
SUBAGENT.md  -> Especialista isolado + lista restrita de ferramentas`
        },
        {
          id: "sync",
          label: "100% Local e Seguro",
          surface: "white",
          panelTitle:
            "Zero chaves de API. Proteção determinística SHA-256 contra conflitos.",
          panelDesc:
            "O SkillOps roda localmente via npx sem dependências de nuvem. Cada arquivo instalado é rastreado por hash no .skillops-lock.json para que edições manuais locais nunca sejam sobrescritas.",
          diagram: `$ npx skillops-cli@latest add
  + CREATED   Novo arquivo nativo de regra ou agente criado
  = KEPT      Arquivo inalterado já atualizado
  ! CONFLICT  Edição local detectada e preservada com segurança`
        }
      ]
    },
    workflow: {
      title: "Cada skill. Cada agente. Um único comando.",
      subBeforeCmd: "Execute ",
      subAfterCmd:
        " no seu repositório. Escolha seus agentes de código de IA, selecione as Skills e Subagents que você precisa, e o SkillOps grava cada arquivo nativo automaticamente.",
      tuiAria: "Prévia animada do comando npx skillops-cli@latest add",
      statusLaunching: " iniciando...",
      statusStep1: "passo 1/2",
      statusStep2: "passo 2/2",
      statusInstalled: "✔ instalado",
      step1Banner: "◆ SkillOps — Passo 1/2: Selecione sua IDE / Agente de IA",
      step1Group: "[ ◆ IDEs e Agentes de IA (28) ]",
      step1Hint: "↑/↓ mover · Espaço selecionar",
      selectedWord: "selecionados",
      enterToContinue: "Enter para continuar",
      step1CompletedLabel: "Passo 1/2 · IDEs de IA",
      step2Banner: "◆ SkillOps — Passo 2/2: Selecione Skills e Subagents",
      step2Descriptions: {
        mcpArchitect: "Projete e valide servidores MCP",
        contextScout: "Explorador de código somente leitura",
        astBlastRadius: "Analisador de impacto de call-graph",
        securitySastGate: "Gate estático de segurança OWASP"
      },
      step2SelectedSummary: "selecionados (1 Skill, 1 Agent)",
      enterToImport: "Enter para importar",
      step3ConfiguredLabel: "Configurado",
      step3ConfiguredSummary: "cursor, claude, copilot · 2 módulos",
      step3Banner: "◆ SkillOps — Skills e Subagents Instalados",
      step3Done: "Concluído em 38ms",
      step3LockUpdated: "· .skillops-lock.json atualizado"
    },
    openSource: {
      eyebrow: "LICENÇA MIT · IMPULSIONADO PELA COMUNIDADE",
      titleLine1: "100% Open Source.",
      titleLine2: "Construído em aberto.",
      leadPart1:
        "Sem nuvem proprietária, sem chaves de API e sem ecossistemas fechados. Cada ",
      leadSkill: "Skill",
      leadSubagent: "Subagent",
      leadAnd: " e ",
      leadAdapter: "adaptador de IDE",
      leadPart2:
        " no SkillOps é Markdown e TypeScript públicos — livres para auditar, fazer fork e evoluir com a comunidade.",
      exploreRepoBtn: "Explorar Repositório no GitHub",
      contributeSkillBtn: "Contribuir com uma Skill (PR)",
      panelAria: "Arquitetura open-source e trilhas de contribuição",
      panelBadge: "LICENÇA MIT",
      tracks: [
        {
          tag: "TRILHA A · CATÁLOGO FAST-TRACK",
          path: "catalog/skills/ & catalog/subagents/",
          desc: "Abra um Pull Request diretamente com qualquer novo SKILL.md ou SUBAGENT.md. O GitHub Actions valida schema e frontmatter automaticamente — sem necessidade de Issue prévia."
        },
        {
          tag: "TRILHA B · CORE CLI E 28 ADAPTADORES",
          path: "src/adapters/ & src/commands/",
          desc: "Motor transpilador em TypeScript puro e interface de terminal com zero dependências. Proponha novos alvos de IDE ou recursos de CLI via Issues arquiteturais."
        },
        {
          tag: "LICENÇA MIT · ZERO LOCK-IN",
          path: ".skillops-lock.json (SHA-256)",
          desc: "Roda 100% localmente via npx com zero telemetria e zero chaves de API. Cada arquivo gerado é Markdown padrão que pertence a você dentro do seu repositório."
        }
      ]
    },
    footer: {
      wordmarkAria: "Logotipo arquitetural em blocos SKILLOPS",
      license: "Licença MIT",
      builtBy: "Desenvolvido por",
      socialsAria: "Links de redes sociais"
    },
    library: {
      contributePrompt:
        "Quer contribuir com uma nova Skill ou Agent para a biblioteca?",
      contributeLink: "Abra um Pull Request ↗",
      title: "Biblioteca.",
      sub: "Módulos open-source oficiais prontos para instalar em qualquer um dos 28 agentes de programação com IA suportados.",
      switchAria: "Escolha Skills ou Agents",
      skillsTab: "Skills",
      agentsTab: "Agents",
      badgeSkill: "SKILL",
      badgeAgent: "AGENT",
      copy: "Copiar",
      copied: "Copiado ✔",
      viewManifest: "Ver manifesto no GitHub ↗",
      summaries: {
        mcpArchitect:
          "Projete, implemente e audite servidores Model Context Protocol (MCP) e ferramentas FastMCP com higiene estrita de stdio JSON-RPC e schemas tipados.",
        contextScout:
          "Cartógrafo de código somente leitura executado em uma janela de contexto isolada para mapear entrypoints, call graphs e intervalos exatos de linhas."
      }
    },
    transpiler: {
      headingPrefix: "Transpile ",
      modeWords: {
        skill: "Skills",
        subagent: "Subagents"
      },
      headingSuffix: " ao vivo.",
      desc: "Alterne a chave do manifesto entre uma Skill reutilizável e um Subagent isolado e escolha qualquer IDE suportada. O transpilador ao vivo exibe o caminho exato do arquivo, o frontmatter YAML nativo e o comando CLI gerado pelo SkillOps.",
      shaNote:
        "A sincronização determinística SHA-256 evita sobrescrever edições locais sem a sua confirmação.",
      canonicalHead: "Manifesto-fonte canônico",
      controlAria: "Transpilador interativo de manifestos SkillOps",
      switchAria: "Selecionar tipo de manifesto",
      skillBtn: "Manifesto de Skill",
      subagentBtn: "Manifesto de Subagent",
      copyCmd: "Copiar comando npx",
      copiedCmd: "Copiado!",
      ideTabsAria: "IDEs de IA de destino",
      copiedStatus: "Copiado para a área de transferência",
      readyStatus: "Pronto para rodar em qualquer repositório"
    },
    catalog: {
      title: "Catálogo e destinos de execução.",
      sub: "Aponte para qualquer linha no índice do catálogo para inspecionar seu comando CLI e arquivos de destino no quadro de pré-visualização, ou filtre por categoria à esquerda.",
      browseBtn: "Explorar pasta catalog",
      categoriesAria: "Categorias do catálogo",
      tabs: {
        allTitle: "Todos os módulos",
        allSub: "Skills, Agents e IDEs",
        skillsTitle: "Skills do Catálogo",
        skillsSub: "Fluxos reutilizáveis",
        subagentsTitle: "Subagents",
        subagentsSub: "Especialistas isolados",
        adaptersTitle: "Adaptadores de IDE",
        adaptersSub: "28 destinos nativos"
      },
      submitSkillBtn: "Enviar uma nova Skill"
    }
  },

  es: {
    header: {
      navAria: "Navegación principal",
      library: "Biblioteca",
      langSwitcherAria: "Seleccionar idioma",
      starOnGithub: "Star en GitHub"
    },
    hero: {
      titleLine1: "Una biblioteca de skills.",
      titleLine2: "Todos los agentes de código.",
      sub: "Skills y Subagents open-source curados, importados directamente en tu agente de programación con un solo comando.",
      scrollCueAria: "Desplázate hacia abajo para descubrir qué es SkillOps",
      scrollCueLabel: "Qué es SkillOps"
    },
    about: {
      title: "¿Qué es SkillOps?",
      leadPart1:
        "SkillOps es un gestor de paquetes open-source para asistentes de programación con IA. En lugar de copiar y reescribir archivos de prompts entre Cursor, Claude Code, GitHub Copilot y Antigravity, mantienes una única biblioteca de ",
      leadSkills: "Skills",
      leadAnd: " y ",
      leadSubagents: "Subagents",
      leadPart2: " y los instalas de forma nativa en ",
      leadTools: "28 herramientas de IA",
      leadPart3: " con un solo comando.",
      tabsAria: "Dimensiones sobre qué es SkillOps",
      tabs: [
        {
          id: "overview",
          label: "1 Manifiesto -> 28 Herramientas",
          surface: "white",
          panelTitle:
            "Una única fuente de verdad para cada agente de código.",
          panelDesc:
            "Cada asistente de IA exige su propia estructura de carpetas y frontmatter YAML. SkillOps compila un único manifiesto Markdown en la estructura de archivos nativa que cada herramienta espera.",
          diagram: `catalog/skills/mcp-architect/SKILL.md
  |-- .cursor/rules/skillops-mcp-architect.mdc
  |-- .claude/skills/mcp-architect/SKILL.md
  |-- .github/instructions/skillops-mcp-architect.instructions.md
  |-- .agent/skills/mcp-architect/SKILL.md
  +-- +24 destinos nativos de IDEs y CLIs`
        },
        {
          id: "modules",
          label: "Skills & Subagents",
          surface: "lime",
          panelTitle:
            "Playbooks reutilizables y especialistas aislados.",
          panelDesc:
            "Las Skills cargan flujos procedimentales progresivamente (<= 60 tokens en reposo). Los Subagents se ejecutan en ventanas de contexto aisladas con system prompts dedicados y permisos restringidos de solo lectura.",
          diagram: `SKILL.md     -> Flujo procedimental + scripts L3 (0 tokens inactivos)
SUBAGENT.md  -> Especialista aislado + lista restringida de herramientas`
        },
        {
          id: "sync",
          label: "100% Local y Seguro",
          surface: "white",
          panelTitle:
            "Cero claves de API. Protección determinista SHA-256 contra conflictos.",
          panelDesc:
            "SkillOps se ejecuta localmente vía npx sin dependencias en la nube. Cada archivo instalado se rastrea mediante hash en .skillops-lock.json para que tus ediciones manuales locales nunca se sobrescriban.",
          diagram: `$ npx skillops-cli@latest add
  + CREATED   Nuevo archivo nativo de regla o agente creado
  = KEPT      Archivo sin cambios ya actualizado
  ! CONFLICT  Edición local detectada y preservada de forma segura`
        }
      ]
    },
    workflow: {
      title: "Cada skill. Cada agente. Un solo comando.",
      subBeforeCmd: "Ejecuta ",
      subAfterCmd:
        " en tu repositorio. Elige tus agentes de código de IA, selecciona las Skills y Subagents que necesitas, y SkillOps escribe cada archivo nativo automáticamente.",
      tuiAria: "Vista previa animada del comando npx skillops-cli@latest add",
      statusLaunching: " iniciando...",
      statusStep1: "paso 1/2",
      statusStep2: "paso 2/2",
      statusInstalled: "✔ instalado",
      step1Banner: "◆ SkillOps — Paso 1/2: Selecciona tu IDE / Agente de IA",
      step1Group: "[ ◆ IDEs y Agentes de IA (28) ]",
      step1Hint: "↑/↓ mover · Espacio seleccionar",
      selectedWord: "seleccionados",
      enterToContinue: "Enter para continuar",
      step1CompletedLabel: "Paso 1/2 · IDEs de IA",
      step2Banner: "◆ SkillOps — Paso 2/2: Selecciona Skills y Subagents",
      step2Descriptions: {
        mcpArchitect: "Diseña y valida servidores MCP",
        contextScout: "Explorador de código de solo lectura",
        astBlastRadius: "Analizador de impacto de call-graph",
        securitySastGate: "Gate estático de seguridad OWASP"
      },
      step2SelectedSummary: "seleccionados (1 Skill, 1 Agent)",
      enterToImport: "Enter para importar",
      step3ConfiguredLabel: "Configurado",
      step3ConfiguredSummary: "cursor, claude, copilot · 2 módulos",
      step3Banner: "◆ SkillOps — Skills y Subagents Instalados",
      step3Done: "Completado en 38ms",
      step3LockUpdated: "· .skillops-lock.json actualizado"
    },
    openSource: {
      eyebrow: "LICENCIA MIT · IMPULSADO POR LA COMUNIDAD",
      titleLine1: "100% Open Source.",
      titleLine2: "Construido en abierto.",
      leadPart1:
        "Sin nube propietaria, sin claves de API y sin jardines vallados. Cada ",
      leadSkill: "Skill",
      leadSubagent: "Subagent",
      leadAnd: " y ",
      leadAdapter: "adaptador de IDE",
      leadPart2:
        " en SkillOps es Markdown y TypeScript público — libre para auditar, hacer fork y mejorar junto a la comunidad.",
      exploreRepoBtn: "Explorar Repositorio en GitHub",
      contributeSkillBtn: "Contribuir con una Skill (PR)",
      panelAria: "Arquitectura open-source y vías de contribución",
      panelBadge: "LICENCIA MIT",
      tracks: [
        {
          tag: "VÍA A · CATÁLOGO FAST-TRACK",
          path: "catalog/skills/ & catalog/subagents/",
          desc: "Abre un Pull Request directamente con cualquier nuevo SKILL.md o SUBAGENT.md. GitHub Actions valida el esquema y frontmatter automáticamente — sin necesidad de Issue previa."
        },
        {
          tag: "VÍA B · CORE CLI Y 28 ADAPTADORES",
          path: "src/adapters/ & src/commands/",
          desc: "Motor transpilador en TypeScript puro e interfaz de terminal con cero dependencias. Propón nuevos destinos de IDE o capacidades de CLI mediante Issues arquitectónicas."
        },
        {
          tag: "LICENCIA MIT · CERO LOCK-IN",
          path: ".skillops-lock.json (SHA-256)",
          desc: "Se ejecuta 100% localmente vía npx con cero telemetría y cero claves de API. Cada archivo generado es Markdown estándar que te pertenece dentro de tu repositorio."
        }
      ]
    },
    footer: {
      wordmarkAria: "Logotipo arquitectónico en bloques SKILLOPS",
      license: "Licencia MIT",
      builtBy: "Desarrollado por",
      socialsAria: "Enlaces de redes sociales"
    },
    library: {
      contributePrompt:
        "¿Quieres contribuir con una nueva Skill o Agent a la biblioteca?",
      contributeLink: "Abre un Pull Request ↗",
      title: "Biblioteca.",
      sub: "Módulos open-source oficiales listos para instalar en cualquiera de los 28 agentes de programación con IA compatibles.",
      switchAria: "Elige Skills o Agents",
      skillsTab: "Skills",
      agentsTab: "Agents",
      badgeSkill: "SKILL",
      badgeAgent: "AGENT",
      copy: "Copiar",
      copied: "Copiado ✔",
      viewManifest: "Ver manifiesto en GitHub ↗",
      summaries: {
        mcpArchitect:
          "Diseña, implementa y audita servidores Model Context Protocol (MCP) y herramientas FastMCP con estricta higiene de stdio JSON-RPC y esquemas tipados.",
        contextScout:
          "Cartógrafo de código de solo lectura ejecutado en una ventana de contexto aislada para mapear entrypoints, call graphs y rangos exactos de líneas."
      }
    },
    transpiler: {
      headingPrefix: "Transpila ",
      modeWords: {
        skill: "Skills",
        subagent: "Subagents"
      },
      headingSuffix: " en vivo.",
      desc: "Alterna el interruptor del manifiesto entre una Skill reutilizable y un Subagent aislado, y elige cualquier IDE compatible. El transpilador en vivo muestra la ruta exacta del archivo, el frontmatter YAML nativo y el comando CLI generado por SkillOps.",
      shaNote:
        "La sincronización determinista SHA-256 evita sobrescribir ediciones locales sin tu confirmación.",
      canonicalHead: "Manifiesto fuente canónico",
      controlAria: "Transpilador interactivo de manifiestos SkillOps",
      switchAria: "Seleccionar tipo de manifiesto",
      skillBtn: "Manifiesto de Skill",
      subagentBtn: "Manifiesto de Subagent",
      copyCmd: "Copiar comando npx",
      copiedCmd: "¡Copiado!",
      ideTabsAria: "IDEs de IA de destino",
      copiedStatus: "Copiado al portapapeles",
      readyStatus: "Listo para ejecutar en cualquier repositorio"
    },
    catalog: {
      title: "Catálogo y destinos de ejecución.",
      sub: "Apunta a cualquier fila en el índice del catálogo para inspeccionar su comando CLI y archivos de destino en el cuadro de vista previa, o filtra por categoría a la izquierda.",
      browseBtn: "Explorar carpeta catalog",
      categoriesAria: "Categorías del catálogo",
      tabs: {
        allTitle: "Todos los módulos",
        allSub: "Skills, Agents e IDEs",
        skillsTitle: "Skills del Catálogo",
        skillsSub: "Flujos reutilizables",
        subagentsTitle: "Subagents",
        subagentsSub: "Especialistas aislados",
        adaptersTitle: "Adaptadores de IDE",
        adaptersSub: "28 destinos nativos"
      },
      submitSkillBtn: "Enviar una nueva Skill"
    }
  }
};
