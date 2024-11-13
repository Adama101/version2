"use client";

import React from "react";
import dynamic from "next/dynamic";
import { TableWrapper } from "../alerts-table/table";
import { Card1 } from "./card-1";
import { Card2 } from "./card-2";
import { Card3 } from "./card-3";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import { Card4 } from "./card-4";

const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Content = () => (
  <div className="h-screen lg:px-6">
    <div className="flex flex-col justify-center w-full h-half px-4 lg:px-5">
      <div className="mt-1 gap-6 flex flex-col w-full flex-grow">

      <div className="flex flex-wrap gap-5 justify-between w-full mt-4"> {/* Added mt-4 here */}
  <div className="flex-grow">
    <Card1 />
  </div>
  <div className="flex-grow">
    <Card2 />
  </div>
  <div className="flex-grow">
    <Card3 />
  </div>
  <div className="flex-grow">
    <Card4 />
  </div>
</div>

        {/* Chart */}
        <div className="h-full flex flex-col gap-2 mt-4">
          <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 flex-grow">
            <Chart />
          </div>
        </div>
      </div>

      {/* Left Section */}
      <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-full">
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          {/* Additional content can go here */}
        </div>
      </div>
    </div>

    {/* Table Latest Alerts */}
    <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0 max-w-[90rem] mx-auto gap-3">
      <div className="flex flex-wrap justify-between">
        <h3 className="text-center text-xl font-semibold">Latest Alerts</h3>
        <Link
          href="/alerts"
          as={NextLink}
          color="primary"
          className="cursor-pointer"
        >
          View All
        </Link>
      </div>
      <TableWrapper />
    </div>
  </div>
);