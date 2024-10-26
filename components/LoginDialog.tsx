import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-highlight hover:text-secondary transition-colors duration-300">
          Log-In
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-[#E8D7D5]">
        <DialogHeader className="flex flex-col items-center space-y-4">
          <button 
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <div className="flex justify-center w-full mb-6">
            <Image
              src="/logo.png"
              alt="The Waiter Company Logo"
              width={150}
              height={50}
              className="h-8 w-auto"
            />
          </div>
        </DialogHeader>
        <div className="flex flex-col space-y-6 px-6">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">
              User Id
            </label>
            <Input 
              type="text"
              placeholder="Enter ID"
              className="h-9 px-3 py-2 bg-white border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter Password"
              className="h-9 px-3 py-2 bg-white border border-gray-300 rounded-md"
            />
          </div>
          <Button 
            className="w-full bg-[#4A4A4A] hover:bg-[#333333] text-white py-2 rounded-md transition-colors duration-300"
          >
            Log In
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;