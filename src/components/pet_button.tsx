import React from 'react'
import { Button } from './ui/button'
import { PlusIcon } from '@radix-ui/react-icons';

type PetButtonProps = {
  actionType:"add" | "edit" | "checkout";
}
export default function PetButton({
  actionType
}:PetButtonProps) {
  
  if(actionType==='add'){
    return (
      <Button size="icon">
        <PlusIcon className='h-6 w-6'/>
      </Button>
    )
  }

  if(actionType==='edit'){
    return (
      <Button variant="secondary">
        Edit
      </Button>
    )
  }

  if(actionType==='checkout'){
    return(
      <Button variant='destructive'>
        Checkout
      </Button>
    )
  }
  
}
