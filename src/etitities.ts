export type NavigationItem = {
  meta: { id: number };
  url: string;
  label: string;
};

export type FeatureType = {
  headline: string;
  description: string;
  icon: string;
};

export type TestimonialType = {
  quote: string;
  name: string;
  title: string;
};

export type BlogPost = {
  featured_image: string;
  featured_image_alt: string;
  slug: string;
  title: string;
  summary: string;
};
