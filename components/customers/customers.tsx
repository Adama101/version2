'use client'
import * as React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState,  } from "react";
import Link from "next/link";

export function Customers() {
    const placeholderData = [
        {
            senderID: "CXN001",
            receiverID: "CXN001",
            senderName: "Alice",
            receiverName: "Bob",
            amount: "$250.00",
            status: "Completed",
        },
        {
            senderID: "CXN002",
            receiverID: "CXN002",
            senderName: "Charlie",
            receiverName: "Diana",
            amount: "$150.00",
            status: "Pending",
        },
        {
            senderID: "CXN003",
            receiverID: "CXN003",
            senderName: "Malin",
            receiverName: "Tana",
            amount: "$1500.00",
            status: "Pending",
        },
        {
            senderID: "CXN004",
            receiverID: "CXN004",
            senderName: "Charles",
            receiverName: "Fatou",
            amount: "$550.00",
            status: "Pending",
        },
        {
            senderID: "CXN005",
            receiverID: "CXN005",
            senderName: "Sam",
            receiverName: "Awa",
            amount: "$1000.00",
            status: "Pending",
        },
    ];

    const [customer, setCustomer] = useState(placeholderData); // Starting with placeholder data
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    // Uncomment the following lines and set API endpoint to enable API fetching
    // useEffect(() => {
    //     const fetchCustomers = async () => {
    //         setLoading(true);
    //         setError(null);
    //         try {
    //             const response = await fetch(`API_ENDPOINT?page=${page}`);
    //             if (!response.ok) throw new Error("Network response was not ok.");
    //             const data = await response.json();
    //             setCustomer(data.customers || []);
    //         } catch (err) {
    //             setError("Error fetching customers");
    //             console.error("Error fetching customers:", err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchCustomers();
    // }, [page]);

    return (
        <Card className="w-auto">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>All Customers</CardTitle>
                    <Link href="/export" passHref>
                        <Button variant="default">Export CSV</Button>
                    </Link>
                </div>
            </CardHeader>

            {loading ? (
                <div className="p-4">Loading...</div>
            ) : error ? (
                <div className="p-4 text-red-500">{error}</div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Sender ID</TableHead>
                            <TableHead>Receiver ID</TableHead>
                            <TableHead>Sender Name</TableHead>
                            <TableHead>Receiver Name</TableHead>
                            <TableHead className="text-center">Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customer.map((customer) => (
                            <TableRow key={customer.senderID}>
                                <TableCell className="font-medium">{customer.senderID}</TableCell>
                                <TableCell className="font-medium">{customer.receiverID}</TableCell>
                                <TableCell>{customer.senderName}</TableCell>
                                <TableCell>{customer.receiverName}</TableCell>
                                <TableCell className="text-center">{customer.amount}</TableCell>
                                <TableCell>{customer.status}</TableCell>
                                <TableCell>
                                    <button className="text-blue-500 hover:underline">View</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}

            <CardFooter className="flex justify-between">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious onClick={() => setPage((prev) => Math.max(prev - 1, 1))} />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick={() => setPage(1)}>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext onClick={() => setPage((prev) => prev + 1)} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </CardFooter>
        </Card>
    );
}

export default Customers;
