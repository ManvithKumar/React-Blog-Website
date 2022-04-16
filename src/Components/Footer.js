import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram,BsFacebook } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='myfooter'>
        <img src='logo192.png' className='reactlogo' alt='' />
        <div className='smedia'>
      <li><ImWhatsapp/></li>
      <li><BsInstagram/></li>
      <li><BsFacebook/></li>
      <li><FaGithub/></li>
      <li><SiGmail/></li>
      </div>
    </div>
  )
}

export default Footer