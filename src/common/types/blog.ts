export interface BlogFrontMatterProps {
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  tags: string[];
  is_show: boolean;
}

export interface BlogItemProps extends BlogFrontMatterProps {
  slug: string;
  reading_time: number;
}

export interface BlogDetailProps extends BlogItemProps {
  content: string;
}
