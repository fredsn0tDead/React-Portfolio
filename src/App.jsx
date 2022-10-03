
import React from 'react'
import Header from './components/header/header.jsx'
import {Nav} from './components/nav/nav'
import {About} from './components/about/about'
import {Experience} from './components/experience/experience'
import {Footer} from './components/footer/footer'
import { Contacts } from './components/contacts/contacts.jsx'
import { Portfolio } from './components/portfolio/portfolio.jsx'
export const App = () => {
  return (
    <div className='container'>
      <Header />
      <Nav/>
      <About />
      <Experience />
      <Portfolio/>
      <Contacts/>
      <Footer />

    </div>
  )
}

