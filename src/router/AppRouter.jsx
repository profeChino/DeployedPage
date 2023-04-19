import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Parallax } from '../Index/Parallax'
import { Navbar } from '../helper/Navbar'
import { Spotify } from '../Spotify/Spotify'
import { Calculadora } from '../Calculadora/Calculadora'
import { TodoApp } from '../Todo/TodoApp'
import { PianoApp } from '../Piano/PianoApp'
import '../Mainpage.css'

const MainPage = () => {
  return(
      <>
          <br />
          <br />
          <div className='wrapper'>
              <div className='main-title'>Bienvenido</div>
          </div>
      </>
  )
}

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/about' element={<Parallax titulo='PROYECTOS' t1='TECNOLOGIAS UTILIZADAS' t2='CAPYBARA PARTY' t3='ROLLIN&apos; IN THE 90&apos;S' t4='BLUEPRINT' t5='TOKI NO ATO' />}/>
            <Route path='/spotify' element={<Spotify titulo='Buscar album'/>}/>
            <Route path='/calculadora' element={<Calculadora titulo='Calculadora'/>}/>
            <Route path='/todo' element={<TodoApp lista='To-do'/>}/>
            <Route path='/piano' element={<PianoApp titulo='Piano'/>}/>
            <Route path='/*' element={<MainPage/>}/>
        </Routes>  
    </>
  )
}
