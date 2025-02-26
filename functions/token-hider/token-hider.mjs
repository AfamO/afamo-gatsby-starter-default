// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2

export default (request, context) => {
  try {
    const url = new URL(request.url)
    console.log("My requates=="+JSON.stringify(context.params));
    const subject = url.searchParams.get('name') || 'World'
    const resp = {
      message: `Hello ${subject}, this is a secret message!`,
      date: new Date().toISOString(),
      id: context.params.id,
      sender:"Netlify"
    }
    return new Response(JSON.stringify(resp));
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    })
  }
}
