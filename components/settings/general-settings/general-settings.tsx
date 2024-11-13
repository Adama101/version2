'use client'
import * as React from "react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function GeneralSettings() {
    // Set up local state for settings
    const [settings, setSettings] = React.useState({
        name: "",
        email: "",
        language: "English"
    });

    function updateSetting(key: string, value: string) {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: value,
        }));
    }

    return (
        <Card className="h-full">
            <CardContent className="pt-6 h-full">
                <div className="space-y-6 h-full">
                    <h2 className="text-xl font-semibold mb-2">General Settings</h2>
                    <p className="text-gray-600 mb-6">
                        Manage your account settings and preferences.
                    </p>
                    <div className="space-y-4 h-full">
                        <div className="space-y-2">
                            <label className="font-medium">Name</label>
                            <Input
                                value={settings.name}
                                onChange={(e) => updateSetting('name', e.target.value)}
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="font-medium">Email</label>
                            <Input
                                value={settings.email}
                                onChange={(e) => updateSetting('email', e.target.value)}
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="font-medium">Language</label>
                            <Select
                                value={settings.language}
                                onValueChange={(value) => updateSetting('language', value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="English">English</SelectItem>
                                    <SelectItem value="Spanish">Spanish</SelectItem>
                                    <SelectItem value="French">French</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default GeneralSettings;
