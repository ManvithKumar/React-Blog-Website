import React from 'react'
import { Link} from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { GrGroup } from 'react-icons/gr'
import { VscFeedback } from 'react-icons/vsc'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>React Blog</h2>
      <a href='/'><li><AiFillHome className='icon'/>Home</li></a>  
          <a href='/about'><li><CgProfile className='icon'/>About</li></a>  
          <a href='/feedback'><li><VscFeedback className='icon'/>FeedBack</li></a>  
    
    </div>
  )
}

export default Navbar