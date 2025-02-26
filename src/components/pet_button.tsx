"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { PlusIcon } from '@radix-ui/react-icons';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from './ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import PetForm from './pet_form';


type PetButtonProps = {
  actionType:"add" | "edit" | "checkout";
  children ?: React.ReactNode;
  onClick ?: ()=>void;
}
export default function PetButton({
  actionType,children,onClick
}:PetButtonProps) {
  const [isFormOpen,setIsFormOpen] = useState(false);
  if(actionType==='checkout'){
    return(
      <Button variant='secondary' onClick={onClick}>
        {children}
      </Button>
    )
  }

  if(actionType==='add' || actionType==="edit"){
    return (
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogTrigger asChild>
          {
            actionType === "add" ?(
              <Button size="icon">
                <PlusIcon className='h-6 w-6'/>
              </Button>
            ):
            (
              <Button variant="secondary">
                {children}
              </Button>
            )
          }
          
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {
                actionType === "add" ? "Add a new pet" : "Edit pet"
              }
            </DialogTitle>
          </DialogHeader>
          <PetForm actionType = {actionType} onFormSubmission = {()=>setIsFormOpen(false)}/>
        </DialogContent>
      </Dialog>
    )
  }

}
