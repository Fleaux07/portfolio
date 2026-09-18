export interface NavItem {
  label: string;
  href?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "CV", href: "/" },
  { label: "Réalisations" },
  { label: "Stages", href: "/stages" },
  { label: "Veille" },
  { label: "Rectorat" },
];
