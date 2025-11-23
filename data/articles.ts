export interface Article {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    category: Category;
    tags: string[];
    author: Author;
    publishedAt: string;
    readingTime: number;
    featured?: boolean;
}

export interface Author {
    name: string;
    avatar: string;
    bio: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    color: string;
    icon: string;
}

export const categories: Category[] = [
    {
        id: '1',
        name: 'Langages',
        slug: 'langages',
        color: '#6366f1',
        icon: 'bi-code-square'
    },
    {
        id: '2',
        name: 'Intelligence Artificielle',
        slug: 'ia',
        color: '#ec4899',
        icon: 'bi-cpu'
    },
    {
        id: '3',
        name: 'Tech & Actualités',
        slug: 'tech',
        color: '#06b6d4',
        icon: 'bi-rocket-takeoff'
    },
    {
        id: '4',
        name: 'Frameworks',
        slug: 'frameworks',
        color: '#8b5cf6',
        icon: 'bi-grid-3x3'
    }
];

export const author: Author = {
    name: 'Admin Tech',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
    bio: 'Passionné de technologie et de développement, je partage mes découvertes et analyses.'
};

export const articles: Article[] = [
    {
        id: '1',
        slug: 'python-3-13-nouveautes',
        title: 'Python 3.13 : Les nouvelles fonctionnalités qui changent tout',
        excerpt: 'Découvrez les innovations majeures de Python 3.13, incluant le JIT compiler expérimental et les améliorations de performance spectaculaires.',
        content: `# Python 3.13 : Une révolution en marche

Python 3.13 marque un tournant majeur dans l'évolution du langage avec l'introduction d'un compilateur JIT expérimental qui promet des gains de performance significatifs.

## Le JIT Compiler : Une nouvelle ère

Le compilateur Just-In-Time expérimental peut améliorer les performances jusqu'à 60% sur certaines charges de travail. Cette amélioration majeure rapproche Python des langages compilés tout en conservant sa simplicité.

## Autres améliorations notables

- Meilleure gestion de la mémoire
- Optimisations du GIL
- Nouveaux modules dans la bibliothèque standard
- Support amélioré pour les types`,
        coverImage: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop',
        category: categories[0],
        tags: ['Python', 'Performance', 'JIT'],
        author,
        publishedAt: '2025-11-20T10:00:00Z',
        readingTime: 5,
        featured: true
    },
    {
        id: '2',
        slug: 'gemini-2-google-ia',
        title: 'Gemini 2.0 : Google repousse les limites de l\'IA',
        excerpt: 'Le nouveau modèle Gemini 2.0 de Google redéfinit les standards avec des capacités multimodales avancées et une compréhension contextuelle inégalée.',
        content: `# Gemini 2.0 par Google

Google lance Gemini 2.0, son modèle d'IA le plus avancé à ce jour, avec des capacités qui surpassent largement la génération précédente.

## Capacités multimodales

Gemini 2.0 peut traiter simultanément du texte, des images, de l'audio et de la vidéo avec une compréhension contextuelle exceptionnelle.

## Performance

Les benchmarks montrent des améliorations de 40% sur les tâches de raisonnement complexe comparé à Gemini 1.5.`,
        coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
        category: categories[1],
        tags: ['IA', 'Google', 'Gemini', 'Machine Learning'],
        author,
        publishedAt: '2025-11-19T14:30:00Z',
        readingTime: 6,
        featured: true
    },
    {
        id: '3',
        slug: 'rust-adoption-2025',
        title: 'Rust : Le langage qui conquiert l\'industrie en 2025',
        excerpt: 'De plus en plus d\'entreprises adoptent Rust pour ses garanties de sécurité mémoire et ses performances exceptionnelles.',
        content: `# L'ascension fulgurante de Rust

Rust continue sa progression impressionnante dans l'industrie du développement logiciel.

## Pourquoi Rust ?

- Sécurité mémoire garantie sans garbage collector
- Performance comparable au C++
- Écosystème mature avec Cargo
- Adoption par Microsoft, Amazon, et Google

## Cas d'usage

Les systèmes d'exploitation, les applications critiques et même le développement web adoptent massivement Rust.`,
        coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
        category: categories[0],
        tags: ['Rust', 'Sécurité', 'Performance'],
        author,
        publishedAt: '2025-11-18T09:15:00Z',
        readingTime: 7,
        featured: true
    },
    {
        id: '4',
        slug: 'react-19-nouveautes',
        title: 'React 19 : Les Server Components révolutionnent le développement',
        excerpt: 'React 19 introduit les Server Components de manière stable, transformant la façon dont nous construisons les applications web modernes.',
        content: `# React 19 est arrivé !

La nouvelle version majeure de React apporte enfin les Server Components en version stable.

## Server Components

Ces composants s'exécutent côté serveur, réduisant drastiquement la taille du bundle JavaScript envoyé au client.

## Améliorations
- Hydratation optimisée
- Meilleure gestion du streaming
- API simplifiée`,
        coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
        category: categories[3],
        tags: ['React', 'JavaScript', 'Frontend'],
        author,
        publishedAt: '2025-11-17T16:45:00Z',
        readingTime: 8
    },
    {
        id: '5',
        slug: 'claude-opus-4-anthropic',
        title: 'Claude Opus 4 : L\'IA qui comprend vraiment le contexte',
        excerpt: 'Anthropic dévoile Claude Opus 4 avec une fenêtre de contexte de 200K tokens et des capacités de raisonnement améliorées.',
        content: `# Claude Opus 4 d'Anthropic

Le nouveau modèle Claude Opus 4 établit de nouveaux standards en matière de compréhension contextuelle.

## Fenêtre de contexte massive

Avec 200K tokens, Claude peut traiter des documents entiers, des codebases complètes.

## Raisonnement avancé

Les capacités de raisonnement logique surpassent tous les modèles concurrents actuels.`,
        coverImage: 'https://images.unsplash.com/photo-1676277791608-cd2f6964c9a2?w=800&auto=format&fit=crop',
        category: categories[1],
        tags: ['Claude', 'Anthropic', 'IA', 'LLM'],
        author,
        publishedAt: '2025-11-16T11:20:00Z',
        readingTime: 5
    },
    {
        id: '6',
        slug: 'typescript-5-5-decorators',
        title: 'TypeScript 5.5 : Les décorateurs ECMAScript sont là',
        excerpt: 'TypeScript 5.5 ajoute le support complet des décorateurs ECMAScript stage 3, ouvrant de nouvelles possibilités.',
        content: `# TypeScript 5.5 et les décorateurs

Microsoft publie TypeScript 5.5 avec le support tant attendu des décorateurs ECMAScript.

## Décorateurs standards

Alignés sur la proposition ECMAScript stage 3, ils offrent une syntaxe unifiée.

## Migration facilitée

Des outils de migration automatique sont fournis pour passer des anciens décorateurs aux nouveaux.`,
        coverImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop',
        category: categories[0],
        tags: ['TypeScript', 'JavaScript', 'ECMAScript'],
        author,
        publishedAt: '2025-11-15T13:00:00Z',
        readingTime: 6
    }
];
