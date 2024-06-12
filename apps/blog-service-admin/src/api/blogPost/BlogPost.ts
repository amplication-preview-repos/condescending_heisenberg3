export type BlogPost = {
  createdAt: Date;
  date: Date | null;
  id: string;
  shareCount: number | null;
  text: string | null;
  title: string | null;
  updatedAt: Date;
  viewCount: number | null;
};
