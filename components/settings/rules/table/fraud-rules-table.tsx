import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import ButtonDestructive from "../button/deactivate-rule-button";
import EditButton from "../button/edit-rule-button";

const invoices = [
    // Sample Data
    {
        rule: "Suspecious Activity",
        description: "Transaction suspecious activity",
        actions: "",
        status: "Active",
    },
]

export function FraudRulesTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Rule</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((rule) => (
                    <TableRow key={rule.rule}>
                        <TableCell className="font-medium">{rule.rule}</TableCell>
                        <TableCell>{rule.description}</TableCell>
                        <TableCell>{rule.status}</TableCell>
                        <TableCell className="text-right">{rule.actions}
                        <div className="flex gap-2.5">
                            <EditButton />
                            <ButtonDestructive/>
                        </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
export default FraudRulesTable;