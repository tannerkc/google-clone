import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {

    const router = useRouter();
    const SearchInputRef = useRef(null);

    const search = (e) =>{
        e.preventDefault();
        const term = SearchInputRef.current.value;
        if(!term) return;

        router.push(`/search?term=${term}`)
    }

    return (
        <header className="bg-white sticky top-0">
            <div className="flex w-full p-6 items-center">
                <Image 
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
                    height={40}
                    width={120}
                    onClick={() => router.push('/')}
                    className="cursor-pointer"
                />
                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-300 rounded-full shadow-md hover:shadow-lg focus-within:shadow-lg max-w-3xl items-center">
                    <input 
                        ref={SearchInputRef} 
                        type="text" 
                        defaultValue={router.query.term}
                        className="flex-grow w-full focus:outline-none"
                    />
                    <XIcon 
                        className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        onClick={() =>(SearchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar url='https://media-exp1.licdn.com/dms/image/C4E03AQF7LnlpTm6Mgw/profile-displayphoto-shrink_200_200/0/1612367574440?e=1623888000&v=beta&t=g3Lh7UhwLwYaopY0sg2HEzZy28tsN9XECTZ8tPSaDUQ' className="ml-auto" />
            </div>

            <HeaderOptions />
        </header>
    )
}

export default Header
