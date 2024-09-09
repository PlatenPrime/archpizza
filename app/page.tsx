"use client"

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      Home
      <Button>Click</Button>
      <Input placeholder="Enter your name" />
      <Alert variant={"destructive"} >You do sng wrong</Alert>


      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => { window.alert("Continue") }} >Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>





      <div className="h-20 w-20">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <Image
            src="https://sharik.ua/upload/elements_big/1101-0001_m1.jpg"
            alt="Photo by Drew Beamer"
            fill
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>

    </div>
  );
}
