import React from 'react'

function WorkFlow() {
  return (
    <>
    <div className="work-flow p-3">
        <h1>Get your First Client</h1>
        <div className="boxes">
            
                <img className='arrow-right' src="https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Farrow-1.038be0dd.svg&w=256&q=75" alt="" />
                <img className='arrow-right2' src="https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Farrow-1.038be0dd.svg&w=256&q=75" alt="" />
                <img className='arrow-down' src="https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Farrow-4.0deed6e6.svg&w=32&q=75" alt="" />
                <img className='arrow-left' src="https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Farrow-3.2f517f25.svg&w=256&q=75" alt="" />
                <img className='arrow-down2' src="https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Farrow-4.0deed6e6.svg&w=32&q=75" alt="" />
            
        <div className="box-1 p-3 d-flex justify-content-center align-items-center">
            <div className="icon">
                <img width={70} src="https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Fsignup-for-free.76cd8871.png&w=128&q=75" alt="" />
            </div>
            <div className="para1">
                <h4>Sign-up for free</h4>
                <p>Sign-up on our Partner dashboard and 
                get your contact details verified in no time!
                </p>
            </div>
        </div>
        <div className="box-1 p-3 d-flex justify-content-center align-items-center">
            <div className="icon">
                <img width={70} src="https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Fresume.306d4570.png&w=128&q=75" alt="" />
            </div>
            <div className="para1">
                <h4>Complete your Profile</h4>
                <p>Login to your personalised dashboard and complete your profile by adding your GST number and Banking information.
                </p>
            </div>
        </div>
         <div className="box-1 p-3 d-flex justify-content-center align-items-center">
            <div className="icon">
                <img width={70} src="https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Fget-verified.d3c66dcf.png&w=128&q=75" alt="" />
            </div>
            <div className="para1">
                <h4>Get verified</h4>
                <p>Get verified by our team and begin working for our clients. Track your projects seamlessly through our Partner Dashboard.
                </p>
            </div>
        </div>
         <div className="box-1 p-3 d-flex justify-content-center align-items-center">
            <div className="icon">
                <img width={70} src="https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Fportfolio.7cda3835.png&w=128&q=75" alt="" />
            </div>
            <div className="para1">
                <h4>Upload your Porfolio</h4>
                <p>Update your portfolio and previous work samples for the clients on our platform.
                </p>
            </div>
        </div>

        </div>
      
            <button className='btn btn-success px-3 py-3  get-started'>Get Started</button>

      

    </div>

    </>
  )
}

export default WorkFlow