class TestController
{
    static async apiTest(req, res, next)
    {


        let response = 
        {
            test: "hello world",
        }

        res.json(response)
    }
}

export default TestController
