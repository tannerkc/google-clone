import { GlobeIcon } from '@heroicons/react/solid'

function Footer() {
    return (
        <footer className="grid w-full text-sm text-gray-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-12 py-3">
                <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                    <img src="https://sustainability.google/static/images/GoogleG-GLeaf_%402x-noloop.gif?cache=e789f51" className="mr-1 h-5" /> <span className="link">Carbon neutral since 2007</span>
                </div>

                <div className="flex justify-center space-x-8 white-space-nowrap md:justify-self-start">
                    <p className="link">Advertising</p>
                    <p className="link">Business</p>
                    <p className="link">How Search Works</p>
                </div>

                <div className="flex justify-center space-x-8 md:ml-auto">
                    <p className="link">Privacy</p>
                    <p className="link">Terms</p>
                    <p className="link">Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
