"use client";
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
import { useState, useEffect } from "react";
import Link from "next/link";

export function Transactions() {
    // Placeholder dummy data
    const placeholderData = [
        {
            transactionCode: "TXN001",
            sender: "Alice",
            receiver: "Bob",
            amount: "$250.00",
            status: "Completed",
        },
        {
            transactionCode: "TXN002",
            sender: "Charlie",
            receiver: "Diana",
            amount: "$150.00",
            status: "Pending",
        },
        {
            transactionCode: "TXN003",
            sender: "Edward",
            receiver: "Fiona",
            amount: "$350.00",
            status: "Failed",
        },
        {
            transactionCode: "TXN004",
            sender: "George",
            receiver: "Hannah",
            amount: "$450.00",
            status: "Completed",
        },
        {
            transactionCode: "TXN005",
            sender: "Ivy",
            receiver: "Jack",
            amount: "$550.00",
            status: "Completed",
        },
    ];

    const [transactions, setTransactions] = useState(placeholderData); // Start with placeholder data
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    // Fetch transactions from the API
    // useEffect(() => {
    //     const fetchTransactions = async () => {
    //         setLoading(true);
    //         setError(null);
    //         try {
    //             const response = await fetch(``);
    //             if (!response.ok) throw new Error("Network response was not ok.");
    //             const data = await response.json();
    //             setTransactions(data.transactions || placeholderData); // Replace with API data
    //         } catch (err) {
    //             console.error("Error fetching transactions:", err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchTransactions();
    // }, [page, placeholderData]);

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Recent Transactions</CardTitle>
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
                            <TableHead>Transaction Code</TableHead>
                            <TableHead>Sender</TableHead>
                            <TableHead>Receiver</TableHead>
                            <TableHead className="text-center">Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.map((transaction) => (
                            <TableRow key={transaction.transactionCode}>
                                <TableCell className="font-medium">{transaction.transactionCode}</TableCell>
                                <TableCell>{transaction.sender}</TableCell>
                                <TableCell>{transaction.receiver}</TableCell>
                                <TableCell className="text-center">{transaction.amount}</TableCell>
                                <TableCell>{transaction.status}</TableCell>
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

export default Transactions;
