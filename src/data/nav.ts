export interface NavItem {
  label: string;
  href?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "CV", href: "/" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Stages", href: "/stages" },
  { label: "Veille", href: "/veille" },
  { label: "Rectorat", href: "/rectorat" },
];
