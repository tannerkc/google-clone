import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter();
  const SearchInputRef = useRef(null);

  const search = (e) =>{
    e.preventDefault();
    const term = SearchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <header className="flex w-full px-6 py-3 justify-between text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        <ViewGridIcon className="p-2 h-10 w-10 rounded-full hover:bg-gray-100 cursor-pointer" />
        
        <Avatar url='https://media-exp1.licdn.com/dms/image/C4E03AQF7LnlpTm6Mgw/profile-displayphoto-shrink_200_200/0/1612367574440?e=1623888000&v=beta&t=g3Lh7UhwLwYaopY0sg2HEzZy28tsN9XECTZ8tPSaDUQ' />
      </div>

    </header>

    <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
      <Image 
        src="http://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png"
        height={150}
        width={300}
      />
      <div className="flex w-full mt-5 px-5 py-3 items-center hover:shadow-lg focus-within:shadow-lg max-w-md border border-gray-300 rounded-full sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input 
          ref={SearchInputRef}
          type="text" 
          className=" flex-grow outline-none" 
        />
        <MicrophoneIcon className="h-5 mr-3 text-gray-500" />
      </div>

      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button onClick={search} className="btn">Google Search</button>
        <button onClick={search} className="btn">I'm Feeling Lucky</button>
      </div>
    </form>

    <Footer />
  
    </div>
  )
}
