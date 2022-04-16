import React from 'react'

const Feedback = () => {
  return (
    <div className='feedbackapp'>
        <div className='report'>
          <h2>Please Send Your FeedBack</h2>
          <p>Your FeedBack will help me improve.Thank you</p>
            <form>
                <label>Name :</label><br/>
                <input type='text' className='midinput' placeholder='Name'/><br/><br/>
                <label>Email Please :</label><br/>
                <input type='email' className='midinput'  placeholder='Email Address'/><br/><br/>
                <label>Your FeedBack :</label><br/>
                <input type='text' className='extinput' /><br/><br/>
                <button className='btn1'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Feedback