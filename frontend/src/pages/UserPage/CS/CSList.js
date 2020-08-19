//Q&A Post 페이지, 여기서 답변 하면 실제로 답글 달리게끔 해보자

import React from "react";
import { cloneElement } from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  SimpleList,
  TextInput,
  ReferenceInput,
  SelectInput,
  useListContext,
  TopToolbar,
  CreateButton,
  ExportButton,
  sanitizeListRestProps,
  BulkDeleteButton,
  Filter,
} from "react-admin";

import { useMediaQuery } from "@material-ui/core";
import ResetViewsButton from "../ResetViewsButton";
import PostPagination from "../MyPagination";

//Post Page에서 다중 선택 시 나오는 Popup
const CSBulkActionButtons = (props) => (
  <>
    <ResetViewsButton label="Reset Views" {...props} />
    <BulkDeleteButton {...props} />
  </>
);

const ListActions = (props) => {
  const { className, exporter, filters, maxResults, ...rest } = props;
  const {
    currentSort,
    resource,
    displayedFilters,
    filterValues,
    basePath,
    showFilter,
    total,
  } = useListContext();
  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      {filters &&
        cloneElement(filters, {
          resource,
          showFilter,
          displayedFilters,
          filterValues,
          context: "button",
        })}
      <CreateButton basePath={basePath} />
      <ExportButton
        disabled={total === 0}
        resource={resource}
        sort={currentSort}
        filterValues={filterValues}
        maxResults={maxResults}
      />
    </TopToolbar>
  );
};

const CSFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <TextInput label="Title" source="title" defaultValue="Hello World" />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const CSList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      {...props}
      actions={<ListActions />}
      filters={<CSFilter />}
      bulkActionButtons={<CSBulkActionButtons />}
      pagination={<PostPagination />}
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `${record.views} views`}
          tertiaryText={(record) =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
