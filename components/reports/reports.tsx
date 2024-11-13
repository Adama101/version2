"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Select, SelectContent, SelectTrigger, SelectItem } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function Reports() {
    return (
        <div className="p-8 space-y-8">
            <h1 className="text-2xl font-bold">Reports</h1>

            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Generate New Report Card */}
                <Card className="p-4">
                    <CardHeader className="flex justify-center mt-2">
                        <CardTitle>Generate New Report</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {/* Report Type Selector */}
                        <Select>
                            <SelectTrigger className="bg-white text-black">
                                Select report type
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="aml">AML Report</SelectItem>
                                <SelectItem value="fraud">Fraud Report</SelectItem>
                                <SelectItem value="fraud">KYC Report</SelectItem>
                                <SelectItem value="fraud">Sanctions Report</SelectItem>
                                <SelectItem value="fraud">Compliance Report</SelectItem>
                                {/* Add more report types as needed */}
                            </SelectContent>
                        </Select>
                        <Button className="w-full bg-black text-black">Generate Report</Button>
                    </CardContent>
                </Card>

                {/* Other Cards */}
                <Card className="p-4 justify-center">
                    <CardHeader className="text-center mt-2">
                        <CardTitle>AML Alerts Trend</CardTitle>
                    </CardHeader>
                </Card>

                <Card className="p-4  justify-center">
                    <CardHeader className="text-center mt-2">
                        <CardTitle>Fraud Detection Rate</CardTitle>
                    </CardHeader>
                </Card>
            </div>

            {/* Recent Reports Section */}
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Recent Reports</h3>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Report Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Monthly AML Summary</TableCell>
                            <TableCell>AML</TableCell>
                            <TableCell>2023-05-31</TableCell>
                            <TableCell>
                                <Badge variant="default">Generated</Badge>
                            </TableCell>
                            <TableCell className="space-x-2">
                                <Button variant="ghost" className="text-blue-600">
                                    <i className="fas fa-download"></i> Download
                                </Button>
                                <Button variant="ghost" className="text-blue-600">
                                    View
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Quarterly Fraud Analysis</TableCell>
                            <TableCell>Fraud</TableCell>
                            <TableCell>2023-06-30</TableCell>
                            <TableCell>
                                <Badge variant="default">Scheduled</Badge>
                            </TableCell>
                            <TableCell className="space-x-2">
                                <Button variant="ghost" className="text-blue-600">
                                    <i className="fas fa-download"></i> Download
                                </Button>
                                <Button variant="ghost" className="text-blue-600">
                                    View
                                </Button>
                            </TableCell>
                        </TableRow>
                        {/* Add more rows as needed */}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default Reports;
