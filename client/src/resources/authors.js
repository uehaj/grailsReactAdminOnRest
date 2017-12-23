import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  EditButton,
  DisabledInput,
  TextInput,
} from 'admin-on-rest';

import ErrorBoundary from '../ErrorBoundary';
import Pagination from '../Pagination';
import AuthorIcon from 'material-ui/svg-icons/social/person';
export { AuthorIcon };

export const AuthorList = props => (
  <ErrorBoundary>
    <List {...props} pagination={<Pagination />}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EditButton basePath="/author" />
      </Datagrid>
    </List>
  </ErrorBoundary>
);

const AuthorTitle = ({ record }) => {
  return <span>Author {record ? `"${record.name}"` : ''}</span>;
};

export const AuthorEdit = props => (
  <ErrorBoundary>
    <Edit title={<AuthorTitle />} {...props}>
      <SimpleForm>
        <DisabledInput source="id" />
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  </ErrorBoundary>
);

export const AuthorCreate = props => (
  <ErrorBoundary>
    <Create title="Create a Author" {...props}>
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  </ErrorBoundary>
);
