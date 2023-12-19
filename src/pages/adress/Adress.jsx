import React from 'react'
import { LangContext } from '../../context/langcontext/LangContext'
import { Language } from '../language/Language'

const Adress = () => {
  const {lang} = React.useContext(LangContext)
  return (
    <div>{Language[lang].header.adress}</div>
  )
}

export default Adress