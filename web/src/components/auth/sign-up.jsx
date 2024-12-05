import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";


const SignUpDialog = ({ children, className }) => {
    return (
        <Dialog className="">
            <DialogTrigger className={cn(className)}>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-sm">
                <DialogHeader>
                    <DialogTitle>Create an account</DialogTitle>
                    <DialogDescription>
                        Enter your email below to create your account
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input id="password-confirm" type="confirm password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Sign in email
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <rect x="1" y="1" width="10" height="10" fill="#F25022" />
                            <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
                            <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
                            <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
                        </svg>
                        Continue with Microsoft
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="#" className="underline">
                        Login
                    </Link>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default SignUpDialog;