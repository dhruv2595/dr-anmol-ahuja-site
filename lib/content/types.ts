export type ConditionSection = {
  heading: string;
  body?: string[];
  list?: string[];
  ordered?: boolean;
};

export type ConditionPage = {
  slug: string;
  cluster: string;
  isHub?: boolean;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  sections: ConditionSection[];
};
