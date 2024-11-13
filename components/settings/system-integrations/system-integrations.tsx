"use client";
import * as React from "react";
import Link from "next/link";
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Integrations = () => {
    return (
        <Card>
            <div className="p-9 space-y-8">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Upload File Card */}
                    <Card className="flex w-full h-full justify-center">
                        <CardHeader className="text-center mt-2">
                            <CardTitle>Upload File</CardTitle>
                                <div className="integration-card">
                                    <div className="icon">
                                        {/* Replace with an icon component or an SVG */}
                                        📄
                                    </div>
                                    <p>Upload a sample transaction file for the system to learn and adapt</p>
                                </div>
                        </CardHeader>
                    </Card>

                    {/* API Integration Card with Link */}
                    <Link href="/system-integrations/api-keys" >
                        <Card className="flex w-full h-full justify-center cursor-pointer">
                            <CardHeader className="text-center mt-2">
                                <CardTitle>API Integration</CardTitle>
                                <div className="integration-card">
                                    <div className="icon">
                                        {/* Replace with an icon component or an SVG */}
                                        🔌
                                    </div>
                                    <p>Start a system integration using our APIs</p>
                                </div>
                            </CardHeader>
                        </Card>
                    </Link>
                </div>
            </div>
        </Card>
    );
}

export default Integrations;
