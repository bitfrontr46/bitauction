import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

const PostCreate = (...props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

export default PostCreate;
