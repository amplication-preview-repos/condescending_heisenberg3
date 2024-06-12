import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  shareCount?: SortOrder;
  text?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  viewCount?: SortOrder;
};
