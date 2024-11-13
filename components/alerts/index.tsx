'use client'
import React from "react";
import { TableWrapper } from "@/components/alerts-table/table";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const Alerts = () => {
  return (
    <div className="my-10 px-4 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
        </li>

        <li className="flex gap-2">
        </li>
        <li className="flex gap-2">
        </li>
      </ul>

      <h2 className="text-xl font-bold">All Alerts</h2>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            className="w-full"
            placeholder="Search an alert..."
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <Button color="primary">
            Export to CSV
          </Button>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableWrapper />
      </div>
    </div>
  );
};
export default Alerts;