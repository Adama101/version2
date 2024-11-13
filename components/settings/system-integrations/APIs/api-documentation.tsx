"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const APIDocumentation = () => {
    return (
        <div className="container mx-auto p-6 max-w-5xl space-y-8">
            <h1 className="text-3xl font-bold">API Documentation</h1>

            {/* Getting Started Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Getting Started</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        Our API provides a comprehensive toolkit for integrating the platform’s capabilities into other systems.
                        The API allows submission of requests, retrieval of transaction statuses, and alert monitoring.
                    </p>
                </CardContent>
            </Card>

            {/* Base URL Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Base URL</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Use the following base URL to access the API:</p>
                    <SyntaxHighlighter language="plaintext" style={oneDark}>
                        {`https://prodetect-fraudcheck-api.onrender.com`}
                    </SyntaxHighlighter>
                </CardContent>
            </Card>

            {/* Authentication Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        Authenticate with a Private and Public API Key. Include both API keys in the request headers as follows:
                    </p>
                    <SyntaxHighlighter language="json" style={oneDark}>
                        {`{
  "x-api-secret": "your_private_key",
  "x-api-key": "your_public_key"
}`}
                    </SyntaxHighlighter>
                </CardContent>
            </Card>

            {/* Endpoint Section - Transactions */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Endpoints</h2>

                {/* Transactions Endpoint */}
                <Card>
                    <CardHeader>
                        <CardTitle>1. Transactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h3 className="text-lg font-semibold">POST /transactions</h3>
                        <p>Submit a transaction for analysis.</p>
                        <div className="mt-4">
                            <p>Request Body:</p>
                            <SyntaxHighlighter language="json" style={oneDark}>
                                {`{
  "transaction_id": "123456",
  "amount": 150.00,
  "currency": "USD",
  "timestamp": "2023-11-13T12:00:00Z",
  "sender": {
    "name": "John Doe",
    "account_number": "123456789"
  },
  "recipient": {
    "name": "Jane Smith",
    "account_number": "987654321"
  }
}`}
                            </SyntaxHighlighter>
                        </div>

                        <div className="mt-4">
                            <p>Response:</p>
                            <SyntaxHighlighter language="json" style={oneDark}>
                                {`{
  "status": "submitted",
  "transaction_id": "123456",
  "analysis_result": "Pending"
}`}
                            </SyntaxHighlighter>
                        </div>
                    </CardContent>
                </Card>

                {/* Transaction Status Endpoint */}
                <Card>
                    <CardHeader>
                        <CardTitle>GET /transactions/:transaction_id</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Retrieve the status and details of a specific transaction.</p>
                        <SyntaxHighlighter language="plaintext" style={oneDark}>
                            {`GET /transactions/123456`}
                        </SyntaxHighlighter>

                        <p className="mt-4">Response:</p>
                        <SyntaxHighlighter language="json" style={oneDark}>
                            {`{
  "transaction_id": "123456",
  "status": "completed",
  "analysis_result": {
    "risk": "low",
    "message": "Transaction appears normal."
  }
}`}
                        </SyntaxHighlighter>
                    </CardContent>
                </Card>

                {/* Alerts Endpoint */}
                <Card>
                    <CardHeader>
                        <CardTitle>2. Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h3 className="text-lg font-semibold">GET /alerts</h3>
                        <p>Retrieve alerts generated by the system’s monitoring features.</p>
                        <SyntaxHighlighter language="json" style={oneDark}>
                            {`GET /alerts`}
                        </SyntaxHighlighter>

                        <p className="mt-4">Response:</p>
                        <SyntaxHighlighter language="json" style={oneDark}>
                            {`[
  {
    "alert_id": "ALERT123",
    "transaction_id": "123456",
    "risk": "high",
    "description": "Suspicious transaction pattern detected."
  },
  {
    "alert_id": "ALERT124",
    "transaction_id": "654321",
    "risk": "medium",
    "description": "Unusual transaction size detected."
  }
]`}
                        </SyntaxHighlighter>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default APIDocumentation;
