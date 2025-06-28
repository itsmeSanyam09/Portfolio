import React from 'react'

const InfoCard = () => {
  return (
    <div className="rounded-[10px] border-slate-400 border-[0.5px] flex flex-col gap-3 px-4 py-8 justify-center font-[url('Geist/Geist-VariableFont_wght.ttf')]">
        <div className="flex gap-40 justify-between items-center px-4">
            <div className="flex gap-3 items-center">
                <div className="profile-pic rounded-full border-blue-800 border-[3px] items-center">
                    <img src='\assets\images\profile.jpg' className='w-9 h-9 rounded-full'/>
                </div>
                <div className="info flex flex-col  items-start">
                    <div className="name text-2xl  font-medium">Sanyam Bothra</div>
                    <div className="about text-[#939695]">Full Stack Web Developer</div>
                </div>
            </div>
            <div className="logos flex gap-3 -translate-y-3">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400 hover:text-white"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400 hover:text-white"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400 hover:text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> */}

            </div>
        </div>
        <div className="para text-[#80828b] px-4">
            <p>Looking to hire me?Email me sanyambothra6@gmail.com</p>
        </div>


    </div>
  )
}

export default InfoCard