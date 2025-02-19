"use client"
import { Pet } from "@/lib/types";
import { useState } from "react";
import { createContext } from "react";

type PetContextProviderProps = {
  data : Pet[];
  children : React.ReactNode;
}

type TPetContext = {
  pets : Pet[];
  selectedPetId : string | null;
  handleSelectedPetId: (id:string) =>void
  selectedPet : Pet | undefined;
  numberOfPet : number
}
export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({data,children}:PetContextProviderProps) {
    //state  
    const [pets,setPets] = useState(data);
    const [selectedPetId,setSelectedPetId] = useState<string | null>(null);

    //derived state
    const selectedPet = pets.find((pet)=>pet.id === selectedPetId);
    const numberOfPet = pets.length;
    const handleSelectedPetId = (id:string) => {
      setSelectedPetId(id);
    }
  return <PetContext.Provider value={
    {
        pets,selectedPetId,selectedPet,numberOfPet,handleSelectedPetId,
    }
  }>{children}</PetContext.Provider>
}
