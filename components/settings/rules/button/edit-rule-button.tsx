import Link from "next/link"

import { Button } from "@/components/ui/button"

export function EditButton() {
    return (
        <Button asChild>
            <Link href="">Edit</Link>
        </Button>
    )
}
export default EditButton;