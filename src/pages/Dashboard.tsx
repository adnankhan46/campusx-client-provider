import { SectionCards } from '@/components/section-cards'

function Dashboard() {
  return (
    <div>
        <SectionCards/>
      <div className="mt-10 bg-white rounded-lg shadow-xl overflow-hidden border-6">
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
