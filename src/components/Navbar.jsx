import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-[85vh]  rounded-xl border-slate-600 border-[1px] flex gap-1 px-2 backdrop-blur-md'>
        <a className="py-2 px-1 rounded-xl" href='mailto:sanyambothra6@gmail.com' target='_blank'>
            <img src='src\assets\images\20-206251_gmail-logo-png-hd-transparent-png-removebg-preview.png' className='h-14 w-16 hover:scale-110 hover:-translate-y-2 hover:mx-2 transition-all duration-200'/>
        </a>
        <a className="py-2 px-1 rounded-xl" href='https://github.com/itsmeSanyam09' target='_blank'>
            <img src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png' className='h-14 w-14 rounded-lg  hover:scale-110 hover:-translate-y-2 hover:mx-2 transition-all duration-200'/>
        </a>
        <a className="py-2 px-1 rounded-xl" href='https://www.linkedin.com/in/sanyam-bothra-70ba30217' target='_blank'>
          <img src='src\assets\images\Remove background project (20).png' className='h-14 w-14 rounded-lg hover:scale-110 hover:-translate-y-2 hover:mx-2 transition-all duration-200'/>
        </a>


    </div>
    
  )
}

export default Navbar