"use client"
import { usePetContext } from '@/lib/hooks';
import Image from 'next/image'
import React from 'react'
import PetButton from './pet_button';

export default function PetDetails() {
  const {selectedPet,handleCheckoutPet} = usePetContext();
  return (
    <section className='flex flex-col h-full w-full'>
      {
        !selectedPet ? (
        <div className='h-full flex justify-center items-center'>
          <EmptyView/>
        </div>
        ):
        (
          <>
            <div className='flex items-center bg-white px-8 py-5 border-b border-light'>
              <Image
                src={selectedPet?.imageUrl}
                alt="Selected pet image"
                height = {75}
                width = {75}
                className='h-[75px] w-[75px] rounded-full object-cover'

              />
              <h2 className='text-3xl font-semibold leading-7 ml-5'>{selectedPet?.name}</h2>
              <div className='ml-auto space-x-3'>
                <PetButton actionType = "edit">Edit</PetButton>
                <PetButton actionType = "checkout" onClick={() => handleCheckoutPet(selectedPet.id)}>Checkout</PetButton>
              </div>
              
            </div>
            <div className='flex justify-around py-10 px-5 text-center'>
              <div>
                  <h3 className='text-[13px] font-medium uppercase text-zinc-700'>Owner name</h3>
                  <p className='mt-1 text-lg text-zinc-800'>{selectedPet?.ownerName}</p>
              </div>
              <div>
                  <h3 className='text-[13px] font-medium uppercase text-zinc-700'>Age</h3>
                  <p className='mt-1 text-lg text-zinc-800'>{selectedPet?.age}</p>
              </div>
            </div>

            <section className='flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-light' >
              {selectedPet?.notes}
            </section>
          </>
        )
      }
      
    </section>
    
  )
}

function EmptyView(){
  return <p className='text-2xl font-medium'>No Pet Selected</p>
}
