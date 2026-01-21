export async function GET(request: Request) {


   const response = await fetch('https://example.com/api/login', {})
    const data = await response.json()
    console.log(data)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
}