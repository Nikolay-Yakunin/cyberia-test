export type Project = {
  id: number;
  title: string;
  slug: string;
  project_url: string | null;
  image: string;
  image_dark: string;
  description: string;
  geo: {
    lat: number | null;
    lng: number | null;
  };
  categories: Categorie[];
};

export type Categorie = {
  id: number;
  name: string;
};
