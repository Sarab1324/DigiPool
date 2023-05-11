import React from 'react'

function WhyChoose() {
  return (
    <>
    <div className="why-choose">
        <h1>Why Choose Us!</h1>
        <small className='text-center'>Expand My Business has helped over 750 partners and agencies take up their business by as much as 35%. Join our platform to get assured support and experience exponential growth!</small>

        <div className="why-choose-content">
            <div className="first-content w-100 d-flex justify-content-space align-items-center">
                <img width={100} className='w-50' src="https://main.exmyb.com/_next/static/media/verified-agency.d46558cb.gif" alt="" />
                <div className="content-para w-50">
                    <h6>Top Client From Multiple Industries</h6>
                    <h3 className='my-3'>MASSIVE CLIENT POOL</h3>
                    <small>We have served over 1000 clients and have a massive pool of clients across multiple verticals to help you get the most lucrative projects. We ensure that you get to explore and choose from innumerable opportunities and take your business to the next level.</small>
                </div>

            </div>
            <div className="first-content-media w-100 d-flex justify-content-space align-items-center">
                <div className="content-para w-50">
                    <h6>Project Management</h6>
                    <h3 className='my-3'>HASSLE-FREE DELIVERIES</h3>
                    <small>We have a dedicated project manager to take care of each project. We ensure that we come up with detailed scoping of work and manage any escalations, queries and processes that need attention to ensure that you get to focus and deliver the best products.</small>
                </div>
                <img width={100} className='w-50' src="https://main.exmyb.com/_next/static/media/project-management.74dfbe10.gif" alt="" />

            </div>
            <div className="first-content w-100 d-flex justify-content-space align-items-center">
                <img width={100} className='w-50' src="https://main.exmyb.com/_next/static/media/payment-security.0d311e40.gif" alt="" />
                <div className="content-para w-50">
                    <h6>Escrow Payment</h6>
                    <h3 className='my-3'>THERE FOR YOU, EVERY STEP OF THE WAY</h3>
                    <small>We have a robust system of Escrow Solutions to safeguard all transactions on a milestone-based payment system. We ensure that you get your payments on time and without any glitches and delays.</small>
                </div>

            </div>
        </div>
    </div>

    </>
  )
}

export default WhyChoose