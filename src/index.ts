import { Hono } from 'hono'

const app = new Hono()

// app.get('/', (c) => {
 
//   return c.html('<h1 style="color:red">Hello World!</h1>',201)//201 show the status like 404 show the error msg
// })

app.get('/', (c) => {
 
  return c.html('<h1 style="color:red">Hello World!</h1>',201)//201 show the status like 404 show the error msg
})

app.get('/help', (c) => {
  
  return c.text("help",201);
})
// health route
app.get('/status', (c) => {
  
  return c.json({message:"Service is Running"});
})

app.get('/api/calculate', (c) => {
  const text =c.req.query("text")
  const wpm =c.req.query("wpm")

  return c.json({message:text,wpm});//https://miniature-system-g4p76g4qgp4cj7x-8787.app.github.dev/calculate?text=hello%20world&wpm=100
});

export default app
