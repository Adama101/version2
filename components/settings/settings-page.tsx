'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Rules from './rules/rule-managment';
import GeneralSettings from './general-settings/general-settings';
import Security from './security/security';
import Integrations from './system-integrations/system-integrations';

const Settings = () => {
    const [settings, setSettings] = useState({
        name: '',
        email: '',
        language: 'English',
        darkMode: false
    });

    const [activeTab, setActiveTab] = useState('general');

    // Fetch settings from backend
    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await fetch('//API_ENDPOINT');
                const data = await response.json();
                setSettings(data);
            } catch (error) {
                console.error('Failed to fetch settings:', error);
            }
        };
        fetchSettings();
    }, []);

    // Handle settings updates
    const updateSetting = async (key: string, value: string | boolean) => {
        try {
            const response = await fetch('', {
                method: 'PATCH',
                headers: {
                    // 'Content-Type': 'application/json',
                },
                body: JSON.stringify({ [key]: value }),
            });

            if (response.ok) {
                setSettings(prev => ({ ...prev, [key]: value }));
            }
        } catch (error) {
            console.error('Failed to update setting:', error);
        }
    };

    return (
        <div className="flex h-screen">
            <div className="flex-grow bg-black-100 p-6">
                <div className="max-w-2xl mx-auto h-full">
                    <h1 className="text-2xl font-bold mb-6">Settings</h1>

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
                        <TabsList className="mb-6">
                            <TabsTrigger value="general">General</TabsTrigger>
                            <TabsTrigger value="notifications">Notifications</TabsTrigger>
                            <TabsTrigger value="security">Security</TabsTrigger>
                            <TabsTrigger value="rules">Rules Management</TabsTrigger>
                            <TabsTrigger value="system-integration">System Integration</TabsTrigger>
                        </TabsList>

                        <div className="flex-grow overflow-y-auto">
                            <TabsContent value="general">
                                {/* General settings */}
                                <GeneralSettings />
                            </TabsContent>

                            <TabsContent value="notifications">
                                <Card className="h-full">
                                    <CardContent className="pt-6 h-full">
                                        <h2 className="text-xl font-semibold">Notifications Settings</h2>
                                        <p className="text-gray-600">Configure your notification preferences.</p>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="security">
                                <Card className="h-full">
                                    <CardContent className="pt-6 h-full">
                                        <h2 className="text-xl font-semibold">Security Settings</h2>
                                        <p className="text-gray-600">Manage your security preferences.</p>
                                        <Security />
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="rules">
                                <h2 className="text-xl font-semibold">Rules Management</h2>
                                <p className="text-gray-600">Manage AML and other fraud rules.</p>
                                <Rules />
                            </TabsContent>

                            <TabsContent value="system-integration">
                                <h2 className="text-xl font-semibold">System Integration</h2>
                                <p className="text-gray-600">Manage all system integrations</p>
                            <Integrations />
                        </TabsContent>
                </div>
            </Tabs>
        </div>
            </div >
        </div >
    );
};

export default Settings;