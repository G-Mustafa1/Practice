import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 backdrop-blur-lg bg-opacity-70 flex items-center justify-center z-50">
  <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
</div>
  )
}

export default Loader
