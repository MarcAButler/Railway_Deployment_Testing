import React, {useState, useEffect} from 'react'

const TestComponent = (props) =>
{
    const [helloWorldResponse, setHelloWorldResponse] = useState("")

    // Load in our data
    useEffect(() => {

    }, [])

    return(
        <div className="page">
            <button className="test-button"
                onClick={async () => {
                    const helloWorld = await fetch(`${__VITE_SERVER_URL__}/api/v1/helloWorld`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    const jsonResponse = await helloWorld.json()
                    setHelloWorldResponse(jsonResponse)

                }}
            >
            ❤️
            </button>
            <br></br>
            <h1>{helloWorldResponse}</h1>
        </div>
    )
}

export default TestComponent
