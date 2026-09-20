export interface Realisation {
  slug: string;
  title: string;
  description: string;
  tags?: string[];
  href?: string;
}

export const REALISATIONS: Realisation[] = [];
