import express from "express";
const app = express();
// app.get("/", (req, res) => {
//   res.send("Server is Ready");
// });
app.get("/api/jokes", (req, res) => {
    const jokes = [{
        id :1 ,
        title : 'a joke ',
        content : "this is a Joke"
    },
    {
        id :2 ,
        title : '2nd joke ',
        content : "this is 2nd Joke"   
    },
    {
      id: 4,
      title: "4th Joke",
      content: "This is 4th Joke"
    }
]
    res.send(jokes);
  });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
