"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const ApiKeys = () => {
    const [testMode, setTestMode] = useState(true);

    // API keys for test and live modes
    const apiKeys = {
        test: {
            publicKey: "5b7a1ad8-0122-4820-b51f-dda82115de6c",
            privateKey: "f06f2599-52ff-4734-b741-e745096e5084"
        },
        live: {
            publicKey: "1234abcd-5678-efgh-9101-ijklmnopqrst",
            privateKey: "abcd1234-5678-efgh-9101-ijklmnopqrstuv"
        }
    };

    // Determine current keys based on mode
    const currentKeys = testMode ? apiKeys.test : apiKeys.live;

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('Copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">API Keys</h1>
                <Button variant="default" onClick={() => window.open('/system-integrations/api-documentation', '_blank')}>
                    View Documentation
                </Button>
            </div>

            <Card className="mb-6">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Environment Settings</CardTitle>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="live-mode" className="text-sm">
                                Live Mode
                            </label>
                            <Switch
                                id="test-mode"
                                checked={testMode}
                                onCheckedChange={setTestMode}
                            />
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Public Key</label>
                        <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                            <code className="text-sm">{currentKeys.publicKey}</code>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleCopy(currentKeys.publicKey)}
                            >
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Private Key</label>
                        <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                            <code className="text-sm">{currentKeys.privateKey}</code>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleCopy(currentKeys.privateKey)}
                            >
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ApiKeys;
