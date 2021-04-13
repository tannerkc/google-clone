import Head from 'next/head'
import Header from '../components/Header'
import Response from '../Response'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults';

function Search({results}) {
    const router = useRouter();
    console.log(results)
    return (
        <div>
            <Head>
                <title>{router.query.term} | Google Search</title>
            </Head>
            <Header />

            <SearchResults results={results} />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCqf6qQW2AyRGL2gTbvTPYhziVkvu7YoJk&cx=be79dc59863b8d1ad&q=${context.query.term}&start=${startIndex}`).then((response => response.json()));


    return{
        props: {
            results: data
        },
    };
}