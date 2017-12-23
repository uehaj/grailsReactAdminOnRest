import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

export default ({ page, perPage, total, setPage }) => {
  return (
    <Toolbar>
      <ToolbarGroup>
        {page > 1 && (
          <FlatButton
            primary
            key="prev"
            label="Prev"
            icon={<ChevronLeft />}
            onClick={() => setPage(page - 1)}
          />
        )}
        <FlatButton
          primary
          key="next"
          label="Next"
          icon={<ChevronRight />}
          onClick={() => setPage(page + 1)}
          labelPosition="before"
        />
      </ToolbarGroup>
    </Toolbar>
  );
};
