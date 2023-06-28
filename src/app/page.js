import Image from 'next/image'
import IntroTypewriter from './components/IntroTypewriter'
import Socials from './components/Socials'
import Header from './components/Header'


export default function Home() {

  // a modern dark theme personal website with a profile picture, a short bio, and a navbar on top
  // that links to "projects" "bio" and "contact"


  return (
    <div>
      <Header current_page="Home" />
      <div className="
        flex flex-col items-center p-24
      ">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/profile.JPG"
            className="mx-auto w-100 h-100 rounded-full shadow-md shadow-black"
            width={300}
            height={300}
          />
          <span className="flex">
            <h1 className="text-6xl mt-6 mr-4">Hi, I'm </h1>
            <h1 className="text-6xl mt-6 text-teal-300"><b>Logan</b></h1>
          </span>
          <IntroTypewriter />
        </div>
        <div className='my-32'>
          <Socials />
        </div>
      </div>
    </div>
  )
}
