import React from "react";
import {
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
} from "react-admin";

export const CSCreate = (props) => (
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
