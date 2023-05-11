import React from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlinePhone} from 'react-icons/ai'

function SubProfile() {
  return (
    <>
      <div className="leads my-5">
      
        <div className="d-flex justify-content-center h-75  align-items-center">
        <div className="stack2 d-flex  flex-column justify-content-center align-items-start">
          <div className="top d-flex mx-5 justify-content-around align-items-center">
          <BiEditAlt className='edit'/>
            <CgProfile className='mx-3' size={50}/>
            <div className="name d-flex flex-column">
              <h5>Full Name</h5>
              <p>Ankit Raghuwanshi</p>
            </div>
          </div>
          <div className="top d-flex mx-5 justify-content-around align-items-center">
            <HiOutlineMail className='mx-3' size={50}/>
            <div className="name d-flex flex-column">
              <h5>Email</h5>
              <p>ankit.skycomm@gmail.com</p>
            </div>
          </div>
               <div className="top d-flex mx-5 justify-content-around align-items-center">
            <AiOutlinePhone className='mx-3' size={50}/>
            <div className="name d-flex flex-column">
              <h5>Contact</h5>
              <p>91+ 9074146871</p>
            </div>
          </div>

        </div>

        </div>
      </div>

    </>
  )
}

export default SubProfile