/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
const ErrorPage = () => {

  const { error, status } = useRouteError()
  return (
      // Error page
    <section className='flex items-center h-screen p-16 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img className='h-56' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="" />
        
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-red-700'>
            <span className='sr-only '>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-green-500 text-white'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage;