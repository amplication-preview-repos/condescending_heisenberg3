import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const BlogPostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="shareCount" source="shareCount" />
        <TextInput label="text" multiline source="text" />
        <TextInput label="title" source="title" />
        <NumberInput step={1} label="viewCount" source="viewCount" />
      </SimpleForm>
    </Edit>
  );
};
