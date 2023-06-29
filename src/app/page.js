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
        flex flex-col items-center py-8
      ">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/profile.JPG"
            className="mx-auto w-100 h-100 rounded-full shadow-md shadow-black"
            width={300}
            height={300}
          />
          <span className="flex">
            <h1 className="text-6xl font-mono tracking-tighter mt-6 mr-6">ᐳ Hi,I'm</h1>
            <h1 className="text-6xl font-mono tracking-tighter mt-6 text-teal-300"> Logan</h1>
          </span>
          <IntroTypewriter />
        </div>
        <div className='my-12'>
          <Socials />
        </div>
      </div>
    </div>
  )
}
