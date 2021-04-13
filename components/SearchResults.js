import { useEffect } from "react";
import PaginationButtons from "./PaginationButtons";

function SearchResults({results}) {

  
    useEffect(() => {

        let a = document.querySelectorAll('#snippet');

        Array.from(a).forEach(val => {
            val.innerHTML = val.innerHTML.replace(/JavaScript/,'<span class="font-medium">JavaScript</span>');
        })
    }, [results])

    // useEffect(() => {
    //     let terms = results.queries.request[0].searchTerms.split(' ')

    //     let a = document.querySelectorAll('#snippet');
    //     terms.forEach(term => {
    //         let replace = `/${term}/`;
    //         console.log(term)
            
    //         Array.from(a).forEach(val => {
    //             val.innerHTML = val.innerHTML.replace(replace,`<span class="font-medium">${results.queries.request[0].searchTerms.replace(/\s/g, '.')}</span>`);
    //             // console.log(a)
    //         })
    //     });

    // }, [results])


    

    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-md mt-3 mb-5">About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)</p>

            {results.items?.map((result)=>(
                <div key={result.link} className="max-w-xl mb-8 text-gray-700">
                    <div className="group">
                        <a href={result.link} className="text-sm">
                            {result.formattedUrl}
                        </a>
                        <a href={result.link}>
                            <h2 className="truncate text-xl text-blue-700 group-hover:underline">
                                {result.title}
                            </h2>
                        </a>
                    </div>
                    <p className="line-clamp-2" id="snippet">{result.snippet}</p>

                </div>
            ))}
            <PaginationButtons />
        </div>
    )
}

export default SearchResults
