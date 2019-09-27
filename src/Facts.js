import React, {useState, useEffect} from 'react'

export default function Facts() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    async function fetchUrl () {
        setIsLoading(true);
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const json = await response.json();
        setData(json);
        setIsLoading(false);
    }

    useEffect(() => {   
        fetchUrl();
    }, []);

    return (
        <>
        {
            isLoading ? ("Loading ...") 
                : 
                (
                    <div>
                        {data.text}
                        <br />
                        <button type="button" onClick={() => fetchUrl()}>New fact.</button>
                    </div>
                )
        }   
        </>
    )
}
