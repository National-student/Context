import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components'
import { About, Adress, Comments, Contact, Home, Posts, UserSingle, Users } from './pages'
import React from 'react'
import { ThemeContext } from './context/themecontext/ThemeContext'
import { LangContext } from './context/langcontext/LangContext'


function App() {
const {theme} = React.useContext(ThemeContext) 
const {lang} = React.useContext(LangContext) 
  
  document.body.className=`${theme}`
  return (
    <div>
     <Header />

    <Routes>
      <Route path='/' element={<Home  />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/adress' element={<Adress />} />
      <Route path='/users' element={<Users />} />
      <Route path='/posts' element={<Posts lang={lang} />} />
      <Route path='/users/:userId' element={<UserSingle />} />
      <Route path='/posts/:postId/comments' element={<Comments />}/>

    </Routes>
    
    </div>
  )
}

export default App
