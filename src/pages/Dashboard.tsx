import { SectionCards } from '@/components/section-cards'
import { useEffect, useState } from 'react'

function Dashboard() {
  const [user, setUser] = useState<String| null>(null);

  useEffect(()=>{
   async function fetData(){
    
    const response = await fetch('/api/front');
    const data = await response.json();
    if(!data) console.log("No data");
    setUser(data);
    console.log(data);
    }
    fetData();
  }, [])
  return (
    <div>
        <SectionCards/>
      <div className="mt-6 bg-white rounded-lg overflow-hidden border-2 border-blue-400">
        Shortcuts, {user}
      </div>
      <div className="mt-2 bg-white rounded-lg shadow-xl overflow-hidden border-2 border-red-400">
        <p className='text-center text-gray-400'>Video Demo</p>
        {/* <video alt='video-demo' controls src={} className='w-full' autoPlay>
        Video
     </video> */}
     <div className='flex w-full items-center justify-center'>Video-src</div>
      </div>
    </div>
  )
}

export default Dashboard
