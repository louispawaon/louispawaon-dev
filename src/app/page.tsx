"use client"
import React from "react"
import {Experience,Footer,Header,Sidebar} from "./compontents/ComponentIndex"

export default function Home() {
  return (
    <>
    <title>Louis Miguel Pawaon</title>
    <Sidebar/>
    <main className='md:mx-auto lg:mx-[15rem] py-16 px-7'>
      <section id="Top">
        <Header/>
      </section>
      <Experience/> 
      <Footer/>
    </main>
    </>
  )
}
