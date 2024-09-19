 const express = require('express')
 const users = require('./MOCK_DATA.json')
 const app = express();
 const port = 3000
 
 //Routes

 app.get('/users', (req, res) => {
    const html = `
<ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
</ul>
`;
res.send(html);
 
 });

 //REST API
 app.get('/api/users' , (req, res) => {
    return res.json(users);
 });

 app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
 })

 app.patch("/api/users/:id", (req,res) => {
    // todo edit the user with id
    return res.json({status: "pending"});
 })

 app.delete("/api/users/:id", (req,res) => {
    // todo delete the user with id
    return res.json({status: "pending"});
 })




 app.listen(port, () => console.log(`Example app listening on port ${port}!`))