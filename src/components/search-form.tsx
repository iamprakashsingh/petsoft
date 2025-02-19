"use client"
import { useSearchContext } from '@/lib/hooks'
import React, { useState } from 'react'

export default function SearchForm() {
  const {searchQuery,handleChangeSearchQuery} = useSearchContext();
  return (
    <form className='w-full h-full'>
      <input className="w-full h-full bg-white/20 rounded-md px-5 outline-none 
      tarnsition focus:bg-white/50 hover:bg-white/30 placeholder:text-white/50"
      placeholder='Search Pets' 
      type='Search' 
      value = {searchQuery}
      onChange={e => handleChangeSearchQuery(e.target.value)}
      />
    </form>
  )
}
