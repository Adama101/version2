'use client'
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function AddRule() {
    return (
        <div className="flex h-screen">
            <div className="flex-grow bg-black-100 p-6">
                <div className="">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Rule Details</CardTitle>
                            <CardDescription>Define parameters for your rule.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Rule Name</Label>
                                        <Input id="name" placeholder="Enter Rule Name" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="description">Description</Label>
                                        <Input className="h-24" id="description" placeholder="Describe the purpose of this rule" />
                                    </div>

                                    {/* Row for Criteria, Second Description, and Button */}
                                    <div className="flex items-end gap-4">
                                        <div className="flex flex-col w-1/3 space-y-1.5">
                                            <Label htmlFor="criteria">Criteria</Label>
                                            <Select>
                                                <SelectTrigger id="criteria">
                                                    <SelectValue placeholder="Select Criteria Type" />
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    <SelectItem value="sending-country">Sending Country</SelectItem>
                                                    <SelectItem value="receiving-country">Receiving Country</SelectItem>
                                                    <SelectItem value="currency">Currency</SelectItem>
                                                    <SelectItem value="kyc-completeness">KYC Completeness</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex flex-col w-1/3 space-y-1.5">
                                            <Label htmlFor="secondary-description">Description</Label>
                                            <Input id="secondary-description" placeholder="Additional description" />
                                        </div>
                                        <Button variant="secondary" className="self-end">
                                            + Add Condition
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mt-3">
                                    <Label htmlFor="criteria">Action</Label>
                                    <Select>
                                        <SelectTrigger id="action">
                                            <SelectValue placeholder="Select Action" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="sending-country">Sending Country</SelectItem>
                                            <SelectItem value="receiving-country">Receiving Country</SelectItem>
                                            <SelectItem value="currency">Currency</SelectItem>
                                            <SelectItem value="kyc-completeness">KYC Completeness</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            <div className="flex items-center space-x-2 mt-4">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Activate Rule Immediately
                                </label>
                            </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-between gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Save</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AddRule;
