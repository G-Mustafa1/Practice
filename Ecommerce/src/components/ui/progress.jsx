import { Loader2 } from 'lucide-react'
import React from 'react'

const Progress = () => {
  return (
    <div className="flex justify-center py-6 backdrop-blur-lg inset-0">
      <Loader2 className="h-12 w-12 animate-spin text-[#0d98a5]" />
    </div>

  )
}

export default Progress
