export const STAGE_INFO = {
  dates: "26/05/2026 – 26/06/2026",
};

export interface SoftwareItem {
  name: string;
  description: string;
  image?: string;
}

export const LOGICIELS: SoftwareItem[] = [
  {
    name: "Teams / Outlook",
    description: "Pour communiquer au sein de l'entreprise. Teams permet également d'organiser des réunions.",
  },
  {
    name: "Deskare",
    description:
      "Gère la réservation de bureau sur place, l'entreprise fonctionnant en « flex-office ». Permet aussi de gérer les absences et les jours de télétravail.",
  },
  {
    name: "Jira",
    description:
      "Utilisé pour gérer les différents projets sous forme de tickets à déplacer entre « à faire », « en cours » et « terminé », un format proche de Trello.",
    image: "/images/stages/paris-match/environnement-jira.jpg",
  },
];

export const SECURITE: SoftwareItem[] = [
  { name: "MAIA", description: "Couche de sécurité sur les IA." },
  { name: "OKTA", description: "Système d'authentification pour l'ordinateur." },
];

export interface MaterielItem {
  title: string;
  description: string;
  image: string;
}

export const MATERIEL: MaterielItem[] = [
  {
    title: "Baie de brassage (niveau 6)",
    description:
      "Les câbles rouges correspondent à l'ancien réseau de l'entreprise (postes encore sous le réseau d'avant le rachat par LVMH), les câbles bleus au nouveau réseau.",
    image: "/images/stages/paris-match/environnement-baie-brassage.jpg",
  },
  {
    title: "Imprimante spéciale fabrication",
    description:
      "Imprime des échantillons du journal pour vérifier les couleurs avant impression et fournir un bon à tirer aux imprimeurs.",
    image: "/images/stages/paris-match/environnement-imprimante.jpg",
  },
  {
    title: "Serveur Fairy d'impression",
    description: "Crée une file d'attente sur les imprimantes ; chacune en possède un.",
    image: "/images/stages/paris-match/environnement-serveur-fairy.jpg",
  },
  {
    title: "Accès aux salles de réunion",
    description: "Permet de gérer les salles de réunion et de voir si l'une d'elles est disponible.",
    image: "/images/stages/paris-match/environnement-acces-salle.jpg",
  },
];

export interface Activity {
  slug: string;
  title: string;
  summary: string;
}

export const ACTIVITIES: Activity[] = [
  {
    slug: "getty-transform",
    title: "GettyTransform",
    summary: "Outil Python d'automatisation du traitement des exports Getty Images.",
  },
  {
    slug: "xml-elle",
    title: "Traitement XML défectueux — Elle",
    summary: "Script Python de correction automatique d'une balise XML vide sur les magazines Elle.",
  },
  {
    slug: "bnf",
    title: "Régénération des fichiers BNF",
    summary: "Régénération par IA des XML d'archives Paris Match scannées par la BNF.",
  },
];
