import React from 'react'
import './App.css';
import Header from  './Components/Header'
import SideBar from './Components/SideBar'
import Center from './Components/Center'
import Rightbar from './Components/Rightbar'

export default function Home() {
  return (
    <div>
      <Header/>
      <SideBar/>
      <Rightbar/>
      <Center/>
    </div>
  )
}
