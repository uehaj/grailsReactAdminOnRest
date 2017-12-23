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
  NumberInput,
  ReferenceInput,
  ReferenceField,
  SelectInput,
} from 'admin-on-rest';

import ErrorBoundary from '../ErrorBoundary';
import Pagination from '../Pagination';
import BookIcon from 'material-ui/svg-icons/action/book';
export { BookIcon };

export const BookList = props => (
  <ErrorBoundary>
    <List {...props} pagination={<Pagination />}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="price" />
        <ReferenceField label="Author" source="author.id" reference="author">
          <TextField source="name" />
        </ReferenceField>
        <EditButton basePath="/book" />
      </Datagrid>
    </List>
  </ErrorBoundary>
);

const BookTitle = ({ record }) => {
  return <span>Book {record ? `"${record.title}"` : ''}</span>;
};

export const BookEdit = props => (
  <ErrorBoundary>
    <Edit title={<BookTitle />} {...props}>
      <SimpleForm>
        <DisabledInput source="id" />
        <TextInput source="title" />
        <NumberInput source="price" />
        <ReferenceInput label="Author" source="author.id" reference="author">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  </ErrorBoundary>
);

export const BookCreate = props => (
  <ErrorBoundary>
    <Create title="Create a Book" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <NumberInput source="price" />
        <ReferenceInput
          label="Author"
          source="author.id"
          reference="author"
          allowEmpty>
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  </ErrorBoundary>
);
