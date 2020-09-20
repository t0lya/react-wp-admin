import React, { FunctionComponent } from 'react';

import TableRow from './table-row';
import { TableProps } from './table.types';

const Table: FunctionComponent<TableProps> = ({ children }) => {
  return (
    <table className="form-table">
      <tbody>{children}</tbody>
    </table>
  );
};

export { Table, TableRow };
