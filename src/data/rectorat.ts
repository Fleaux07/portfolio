export interface RectoratDocument {
  slug: string;
  title: string;
  href: string;
}

export const RECTORAT_DOCUMENTS: RectoratDocument[] = [
  {
    slug: "attestation-stage-1",
    title: "Attestation Stage 1",
    href: "https://docs.google.com/document/d/1jO-fA4ZeXtM5PZ2bRAud23jZ7n8O4FLo/edit?usp=sharing&ouid=101251763382233731529&rtpof=true&sd=true",
  },
  { slug: "attestation-stage-2", title: "Attestation Stage 2", href: "#" },
  {
    slug: "tableau-synthese",
    title: "Tableau de synthèse",
    href: "https://docs.google.com/spreadsheets/d/1WSNk4eQTZ8e91MMD0RT_Ydwx5_0c6m6S/edit?usp=sharing&ouid=114919072661262894853&rtpof=true&sd=true",
  },
];
