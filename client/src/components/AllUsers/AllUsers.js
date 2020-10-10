import React, { Fragment } from 'react';

import './AllUsers';
import face from '../../images/face.png';
import online from '../../Icons/online.png';

const AllUsers = ( {users }) => {
   
    return (
        <>
         <div className="textContainer" >
             People
             </div>
          {

            users 
            ? (
                <div>
                <h1>Who's online?</h1>
                  <div className="online">
                      <img src={face} />
                  <h2>
                  {users.map(({name}) => (
                      <div key={name} className="item">
                          {name}
                          <img className="onlinegreen" alt="Online Icon" src={online} />
                      </div>
                  ))}
                  </h2>
                  </div>
                </div>
            )
            :null
        }
        
        </>
    )
    }


export default AllUsers;