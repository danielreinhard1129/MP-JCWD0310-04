import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { LocateIcon } from "lucide-react"

  import React from 'react'
import { Button } from "./ui/button"
  
  const LocationFilter = () => {
    return (
        <DropdownMenu>
        <DropdownMenuTrigger>
        <Button variant="secondary" className="flex justify-between ">
              <LocateIcon />
              <span className="ml-10 hidden md:block w-full "> Location</span>
            </Button>
            </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Location</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Jakarta</DropdownMenuItem>
          <DropdownMenuItem>Yogyakarta</DropdownMenuItem>
          <DropdownMenuItem>Surabaya</DropdownMenuItem>
          <DropdownMenuItem>Bandung</DropdownMenuItem>
          <DropdownMenuItem>Bali</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  
  export default LocationFilter