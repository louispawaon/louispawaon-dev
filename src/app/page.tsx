"use client"
import React from "react"
import {Banner, Experience,Footer,Header,Sidebar} from "@/app/compontents/ComponentIndex"

export default function Home() {
  return (
    <>
    <title>Louis Miguel Pawaon</title>
    <Sidebar/>
    <main className='snap-y snap-mandatory md:mx-auto lg:mx-[15rem] py-16 px-7'>
      <section id="Top">
        <Banner/>
        <Header/>
      </section>
      <Experience/> 
      <Footer/>
    </main>
    </>
  )
}
