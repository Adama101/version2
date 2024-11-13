'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import RulesTable, { AMLRulesTable } from "./table/aml-rules-table"
import FraudRulesTable from "./table/fraud-rules-table"
import Link from "next/link"

export function Rules() {
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">AML Rules</TabsTrigger>
                <TabsTrigger value="password">Fraud Rules</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>AML Rules</CardTitle>
                            <Link href="/settings/add-rule" passHref> 
                                <Button  variant="default">+ Add Rule</Button> 
                            </Link>
                        </div>
                    </CardHeader>
                    <AMLRulesTable />
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Fraud Rules</CardTitle>
                            <Link href="" passHref> 
                                <Button  variant="default">+ Add Rule</Button> 
                            </Link>
                        </div>
                    </CardHeader>
                    <FraudRulesTable />
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
export default Rules;