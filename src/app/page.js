
import Image from 'next/image'

export default function Home() {

  return (
    <div className='md:flex m-4 items-center my-16  '>
      <div className='flex-1 flex-col flex justify-center m-auto'>
        <h1 className='text-7xl p-6  text-wrap'>
          This is NextJS Demo app.
        </h1>
        <p className='text-2xl text-wrap p-6'>
          Hello world, This is Abhinav and I am learning Next JS. This is a demo app. It provides many more features than react, its more easier to route .
        </p>
        <div className=' flex gap-3 justify-center'>
          <button className='bg-purple-500 p-4 hover:bg-purple-300 transition'>Learn more</button>
          <button className='p-4 bg-white' >Contact</button>
        </div>
        <div className='w-82 h-10 lg:w-124 lg:h-24 relative mb-10  ml-10 grayscale-0 '>
          <Image src="/brands.png" fill />
        </div>
      </div>
      <div className='flex-1'>
        <div className='w-80 h-80 md:w-[700px] md:h-[700px] rounded-lg relative m-auto'>
          <Image src="/hero.gif" fill />
        </div>
      </div>
    </div>
  )
}
