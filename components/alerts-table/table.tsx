import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  user,
} from "@nextui-org/react";
import React from "react";
import { AlertUser, columns, users } from "./data";
import { RenderCell } from "./render-cell";


export const TableWrapper: React.FC = () => {
  // Helper function to get column name
  const getColumnName = (column: typeof columns[0]) => {
    // Get the first key that isn't 'uid'
    const nameKey = Object.keys(column).find(key => key !== 'uid');
    return nameKey ? column[nameKey] : column.uid;
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align="start"
            >
              {getColumnName(column)}  {/* This will display 'TIME', 'DATE', etc. */}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={users.indexOf(item)}>
              {columns.map((column) => (
                <TableCell key={column.uid}>
                  <RenderCell 
                    user={item as AlertUser} 
                    columnKey={column.uid}
                  />
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
