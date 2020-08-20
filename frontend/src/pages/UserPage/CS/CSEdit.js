import React from "react";
import {
  SimpleForm,
  Edit,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const CSEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export default CSEdit