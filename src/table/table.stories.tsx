import React, { FunctionComponent } from 'react';

import { Table as TableComponent, TableRow } from './index';

export default {
  title: 'Table',
};

export const Table: FunctionComponent = () => {
  return (
    <TableComponent>
      <TableRow header={<label htmlFor="input_id">Regular field</label>}>
        <input
          name="input_id"
          type="text"
          id="input_id"
          value="Lorem Ipsum is that!"
          className="regular-text"
        />
      </TableRow>
      <TableRow header="Checkbox">
        <fieldset>
          <legend className="screen-reader-text">
            <span>checkbox</span>
          </legend>
          <label htmlFor="checkbox_id">
            <input
              name="checkbox_id"
              type="checkbox"
              id="checkbox_id"
              value="1"
            />
            Just check me!
          </label>
        </fieldset>
      </TableRow>
      <TableRow header={<label htmlFor="select_id">Select</label>}>
        <select name="select_id" id="select_id">
          <option selected={false} value="option_one">
            Option #1
          </option>
          <option value="option_2">Option #2</option>
          <option value="option_3">Option #3</option>
          <option value="option_4">Option #4</option>
        </select>
      </TableRow>
      <TableRow header="Paragraph">
        <select name="select_id" id="select_id">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </select>
      </TableRow>
    </TableComponent>
  );
};
