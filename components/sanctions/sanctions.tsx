'use client'
import * as React from "react"
import { Button } from "@/components/ui/button"
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

export function Sanctions() {
    return (
        <Card className="w-auto">
            <CardHeader>
                <CardTitle>Sanctions Checks</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 mt-6">
                            <Input id="name" placeholder="Search for transactions ID or party name" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Search</Button>
            </CardFooter>
        </Card>

    )
}
export default Sanctions;