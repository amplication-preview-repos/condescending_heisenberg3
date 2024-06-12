import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const BlogPostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="shareCount" source="shareCount" />
        <TextInput label="text" multiline source="text" />
        <TextInput label="title" source="title" />
        <NumberInput step={1} label="viewCount" source="viewCount" />
      </SimpleForm>
    </Create>
  );
};
