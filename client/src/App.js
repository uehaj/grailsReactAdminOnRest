import React from 'react';
import { Admin, Resource } from 'admin-on-rest';

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
      name="author"
      list={AuthorList}
      edit={AuthorEdit}
      create={AuthorCreate}
      icon={AuthorIcon}
    />
  </Admin>
);
