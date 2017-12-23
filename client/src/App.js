import React from 'react';
import { Admin, Resource } from 'admin-on-rest';

import { BookList, BookEdit, BookCreate, BookIcon } from './resources/books';

import {
  AuthorList,
  AuthorEdit,
  AuthorCreate,
  AuthorIcon,
} from './resources/authors';

import restClient from './grailsRestClient';

import * as Config from './config';

export default props => (
  <Admin restClient={restClient(Config.SERVER_URL)}>
    <Resource
      name="book"
      list={BookList}
      edit={BookEdit}
      create={BookCreate}
      icon={BookIcon}
    />
    <Resource
      name="author"
      list={AuthorList}
      edit={AuthorEdit}
      create={AuthorCreate}
      icon={AuthorIcon}
    />
  </Admin>
);
