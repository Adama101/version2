'use client'
import * as React from "react"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import SwitchComponent from "./2FA-switch/switch";
import { Button } from "@/components/ui/button"

export function Security() {
    // Set up local state for settings
    const [settings, setPasswords] = React.useState({
        password: "",
        newPassword: "",
        confirmPassword: ""
    });

    function updatePassword(key: string, value: string) {
        setPasswords((prevPasswords: any) => ({
            ...prevPasswords,
            [key]: value,
        }));
    }
    return (
        <CardContent className="pt-6 h-full">
            <div className="space-y-4 h-full">
                <div className="space-y-2">
                    <label className="font-medium">Current Password</label>
                    <Input
                        value={settings.password}
                        onChange={(e) => updatePassword('password', e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <div className="space-y-2">
                    <label className="font-medium">New Password</label>
                    <Input
                        value={settings.newPassword}
                        onChange={(e) => updatePassword('password', e.target.value)}
                        placeholder="Enter your new password"
                        type="password"
                    />
                </div>
                <div className="space-y-2">
                    <label className="font-medium">Confirm Password</label>
                    <Input
                        value={settings.confirmPassword}
                        onChange={(e) => updatePassword('password', e.target.value)}
                        placeholder="Confirm your new password"
                        type="password"
                    />
                </div>
            </div>
            <SwitchComponent />
            <Button className="mt-4">Update Password</Button>
        </CardContent>
    )
}

export default Security;