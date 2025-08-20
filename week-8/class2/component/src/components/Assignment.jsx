import React from 'react'

export default function Assignment() {
  return (
    <div className='max-w-sm  max-h-md border mx-auto rounded-xl overflow-hidden shadow-lg'>
      <div className='relative h-32 bg-cover bg-center' style={{backgroundImage:`url('https://imgs.search.brave.com/dlBOr6AyP2dbNqhXD15cVqOHiFWsXbrDjVdgbBMG3kM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZm90b3IuY29t/L2FwcC9mZWF0dXJl/cy9pbWcvc3RlcF9u/ZXcvZ3JhcGhpY3Mv/ZnRfYmdfc3RlcF9n/cmFwaGljczMuanBn')`}}>
       <img className='absolute h-24 w-24 border-4 border-red-300  rounded-full left-1/2 bottom-[-48px]  transform -translate-x-1/2 ' src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="user Profile" />
      </div>
     
     {/* User info */}
<div className="pt-16 pb-6 text-center">
<h2 className="text-lg font-semibold text-gray-900">
Rita Correia <span className="text-gray-500 font-normal text-sm">32</span>
</h2>
<p className="text-gray-500 text-sm">London</p>
</div>


{/* Stats */}
<div className="flex justify-around border-t border-gray-200 py-4 text-center text-sm text-gray-600">
<div>
<div className="font-bold text-lg text-gray-900 cursor-pointer">80K</div>
<div>Followers</div>
</div>
<div>
<div className="font-bold text-lg text-gray-900 cursor-pointer">803K</div>
<div>Likes</div>
</div>
<div>
<div className="font-bold text-lg text-gray-900 cursor-pointer">1.4K</div>
<div>Photos</div>
</div>
</div>
    </div>
  )
}
