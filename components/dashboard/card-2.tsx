import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";

export const Card2 = () => {
  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-default-900">AML Alerts</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-default-900 text-xl font-semibold">
            118
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="text-default-900 text-xs">- 4% Last Month</span>
              </div>
          </div>

          <div>
            <div>
            </div>
          </div>

          <div>
            <div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
