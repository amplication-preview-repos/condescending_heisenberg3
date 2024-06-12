import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BlogPostWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  shareCount?: IntNullableFilter;
  text?: StringNullableFilter;
  title?: StringNullableFilter;
  viewCount?: IntNullableFilter;
};
