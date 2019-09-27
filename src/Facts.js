import React, {useState, useEffect} from 'react'

export default function Facts() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {   
        async function fetchUrl () {
            const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
            const json = await response.json();
            setData(json);
            setIsLoading(false);
        }
        fetchUrl();
    }, [isLoading]);

    return (
        <>
        {
            isLoading ? ("Loading ...") 
                : 
                (
                    <div>
                        {data.text}
                        <br />
                        <button type="button" onClick={() => setIsLoading(true)}>New fact.</button>
                    </div>
                )
        }   
        </>
    )
}
