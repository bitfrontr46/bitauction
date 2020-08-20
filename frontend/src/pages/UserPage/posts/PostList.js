//Post 페이지
import * as React from "react";
import { cloneElement } from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  TextInput,
  ReferenceInput,
  SelectInput,
  SimpleList,
  useListContext,
  TopToolbar,
  CreateButton,
  ExportButton,
  Button,
  sanitizeListRestProps,
  BulkDeleteButton,
  Filter,
} from "react-admin";

import { useMediaQuery } from "@material-ui/core";
import IconEvent from "@material-ui/icons/Event";
import ResetViewsButton from "./ResetViewsButton";
import PostPagination from "./PostPagination";

//Post Page에서 다중 선택 시 나오는 Popup
const PostBulkActionButtons = (props) => (
  <>
    <ResetViewsButton label="Reset Views" {...props} />
    {/* default bulk delete action */}
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
      {/* Add your custom actions */}
      <Button
        onClick={() => {
          alert("Your custom action");
        }}
        label="Show calendar"
      >
        <IconEvent />
      </Button>
    </TopToolbar>
  );
};

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <TextInput label="Title" source="title" defaultValue="Hello World" />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

const PostList = (...props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      {...props}
      actions={<ListActions />}
      filters={<PostFilter />}
      bulkActionButtons={<PostBulkActionButtons />}
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

export default PostList;