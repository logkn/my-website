import Image from 'next/image'
import IntroTypewriter from './components/IntroTypewriter'


export default function Home() {

  // a modern dark theme personal website with a profile picture, a short bio, and a navbar on top
  // that links to "projects" "bio" and "contact"


  return (
    <main className="
      flex min-h-screen flex-col items-center justify-between p-24
      bg-gradient-to-br from-indigo-950 to-fuchsia-950
    ">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/../public/profile.jpg"
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
    </main>
  )
}
