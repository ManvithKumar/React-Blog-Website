import React from 'react'

const Home = () => {
  return (
    <div className='homeapp'>
      <div className='intro'>
        <h1 className='myhead'>Welcome Traveller...!</h1>
        <p className='mypara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam velit magni tempore, molestias iusto consequatur necessitatibus, quae, at placeat ea animi corrupti nemo cupiditate distinctio. Quo a nobis molestias accusamus error odit quod? Magni aliquid sequi dolores ducimus molestiae vitae aut quo ipsa vero et. Ratione, nam! Eveniet dicta deserunt aliquid harum!<br /> Illum veritatis facere, officia, magnam beatae aliquam et dolores officiis rem quo debitis odit ipsa dolorem est, fugit distinctio sit provident.<br /> Sed porro quidem natus architecto dolor delectus ad quos, aut reprehenderit voluptatibus modi animi consequatur.<br /> Odit velit nostrum quasi quos pariatur ipsum neque. Molestias ex neque fugiat assumenda similique culpa alias dolor.<br /> Consequuntur, sapiente ab, facilis dolorum mollitia eius iusto quasi vero animi expedita ducimus odio<br /> officia eum harum odit distinctio quo tenetur nemo recusandae esse ut earum. Consequuntur itaque maxime<br /> eligendi at aspernatur dolor nihil a, omnis exercitationem quas quasi ullam assumenda sit magni rerum repudiandae<br />  enim perferendis magnam reprehenderit autem, ab et ad voluptatum quae! Magni repellat beatae, accusantium <br /> ad. Sequi nostrum in laudantium odit reiciendis commodi dolorum veritatis, perferendis, hic iusto alias rerum molestiae!<br /> In obcaecati deleniti, consectetur nihil voluptates, doloremque quaerat corporis quod magnam, quos similique veritatis<br /> inventore!</p>
   <img className='space' src='Space.png'/>
    <button  className='mybtn' >Be A Member</button>
        <button className='mybtn'>Visit My Profile</button>
      </div>
      <div className='myintro'>
        <h1 className='myhead2'>How Did I Started My Coding Sessions :</h1>
        <p className='mypara1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores eius tempore officiis excepturi voluptates culpa porro fugit, velit ipsa nulla explicabo maxime repudiandae, deserunt cum tempora ex aspernatur iste nam amet cumque itaque numquam sed! Nulla vel deserunt fugiat dolorum aliquam doloremque perspiciatis, nisi similique adipisci, esse, qui error? Optio exercitationem ex maxime, nobis itaque esse illo, modi nostrum perferendis veniam cum voluptatum reiciendis minus eum nihil sunt? Nam labore dolorem quam reprehenderit recusandae, eos deserunt dolores eius. Exercitationem atque, at maiores dolorum suscipit sit inventore dolore tempora eligendi, eum, sunt soluta quibusdam. Autem omnis ducimus porro dicta excepturi?</p>
        <h2 className='skills'>My Skills :-</h2>
        <div className='prof'>
          <table>
            <tr>
              <th>Languages</th>
              <th>Duration</th>
            </tr>
            <tr>
              <td>
                <img  className='images'src='html-css-js.png'/>
                <p>Web Development</p>
              </td>
              <td>15 days</td>
            </tr>
            <tr>
              <td>
                <img className='images' src='logo192.png'/>
                <p>React</p>
              </td>
              <td>15 days</td>
            </tr>
            <tr>
              <td>
                <img className='images' src='nodejs.png'/>
                <p>Node Js</p>
              </td>
              <td>5 days</td>
            </tr>
            <tr>
              <td>
                <img className='images' src='mysql.png'/>
                <p>MySQl Database</p>
              </td>
              <td>5 days</td>
            </tr>
            <tr>
              <td>
                <img className='images' src='ui_ux.png'/>
                <p>User Interface<br/>User Experience</p>
              </td>
              <td>5 days</td>
            </tr>
          </table>
          <img className='jafar' src='jafar.png'/>
        </div>
      </div>

    </div>
  )
}

export default Home