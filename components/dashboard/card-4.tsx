import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";

export const Card4 = () => {
    return (
        <Card className="xl:max-w-sm bg-danger rounded-xl shadow-md px-3 w-full">
            <CardBody className="py-5 overflow-hidden">
                <div className="flex gap-2.5">
                    <Community />
                    <div className="flex flex-col">
                        <span className="text-white">KYC Verification</span>
                    </div>
                </div>
                <div className="flex gap-2.5 py-2 items-center">
                    <span className="text-white text-xl font-semibold">210</span>
                </div>
                <div className="flex items-center gap-6">
                    <div>
                        <div>
                            <span className="text-white text-xs">+ 5% Last Month</span>
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
