import { ReactElement } from 'react';

import { TableRowProps } from './table-row/table-row.types';

export interface TableProps {
  children: ReactElement<TableRowProps> | ReactElement<TableRowProps>[];
}
