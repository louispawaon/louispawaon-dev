"use client"
import React from "react"
import {ContentSection,Footer,Header,Sidebar} from "@/app/compontents/ComponentIndex"

export default function Home() {
  return (
    <>
    <title>Louis Miguel Pawaon</title>
    <Sidebar/>
    <main className='snap-y snap-mandatory md:mx-auto lg:mx-60 py-16 px-7'>
      <section id="Top">
        <Header/>
      </section>
      <ContentSection/> 
      <Footer/>
    </main>
    </>
  )
}
