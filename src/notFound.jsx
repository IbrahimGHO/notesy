import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="notFound">
        <h2>Sorry not found</h2>
        <p>This page not found</p>
        <Link to='/'> Go to home page</Link>
    </div>
  )
}
