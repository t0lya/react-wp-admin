import React, { FunctionComponent } from 'react';

import { TableRowProps } from './table-row.types';

const TableRow: FunctionComponent<TableRowProps> = ({ children, header }) => {
  return (
    <tr>
      <th scope="row">{header}</th>
      <td>{children}</td>
    </tr>
  );
};

export default TableRow;
