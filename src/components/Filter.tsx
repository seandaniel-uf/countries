import { useState } from "react";

// set state action?
export const Filter = ({ handleFilter }: any) => {
  return (
    <form>
      <select onChange={(e) => handleFilter(e)}>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </form>
  );
};
