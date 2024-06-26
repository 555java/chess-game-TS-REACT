import React, { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
}

const CellComponent: FC<CellProps> = ({ cell, selected }) => {
  return (
    <div className={["cell", cell.color, selected ? "selected" : ""].join(" ")}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt="figure" />}
    </div>
  );
};
export default CellComponent;
