import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-[#0d98a5]">Not Found</h1>
        <p className="text-lg text-muted-foreground">The page you are looking for does not exist.</p>
        <Link to="/" >
        <Button className="mt-4 bg-[#0d98a5] hover:bg-[#0d98a5]/90">Go Home</Button>
        </Link>
    </div>
  )
}

export default NotFound
