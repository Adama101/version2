'use client'
import { Label } from "@/components/ui/label"
import { Switch as UISwitch } from "@/components/ui/switch" 

export function SwitchComponent() {
    return (
        <div className="flex items-end space-y-2  mt-3 gap-3">
            <UISwitch id="2FA" className="ml-2 mt-4"/>
            <Label htmlFor="2FA">Enable 2 Factor Authentication</Label>
        </div>
    )
}

export default SwitchComponent;
