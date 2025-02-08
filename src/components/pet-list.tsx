"use client";
import React from 'react'
import Image from 'next/image'
import { usePetContext } from '@/lib/hooks'


export default function PetList() {
    
    const {pets,handleSelectedPetId} = usePetContext();
  return (
    <ul className='bg-white border-b border-black/[0.08]'>
        {
            pets.map((pet) =>(
                <li key={pet.id}>
                    <button onClick={() => handleSelectedPetId(pet.id)} 
                    className='flex h-[70px] w-full cursor-pointer px-5 text-base gap-3 
                    hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition'>
                        <Image src={pet.imageUrl}
                        alt="Pet image"
                        width={45}
                        height={45}
                        className='w-[45px] h-[45px] rounded-full object-cover'/>
                        <p className='font-semibold'>{pet.name}</p>
                    </button>
                </li>
            ))
        }
        

        
      
    </ul>
  )
}
