require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000
const githubData = {
  "login": "Aayushy7777",
  "id": 139547466,
  "node_id": "U_kgDOCFFTSg",
  "avatar_url": "https://avatars.githubusercontent.com/u/139547466?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Aayushy7777",
  "html_url": "https://github.com/Aayushy7777",
  "followers_url": "https://api.github.com/users/Aayushy7777/followers",
  "following_url": "https://api.github.com/users/Aayushy7777/following{/other_user}",
  "gists_url": "https://api.github.com/users/Aayushy7777/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Aayushy7777/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Aayushy7777/subscriptions",
  "organizations_url": "https://api.github.com/users/Aayushy7777/orgs",
  "repos_url": "https://api.github.com/users/Aayushy7777/repos",
  "events_url": "https://api.github.com/users/Aayushy7777/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Aayushy7777/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Aayush Yadav",
  "company": "Thakur college of Engineering and Technology",
  "blog": "",
  "location": "Mumbai",
  "email": null,
  "hireable": null,
  "bio": "I’m a final-year Artificial Intelligence & Data Science undergraduate.",
  "twitter_username": null,
  "public_repos": 23,
  "public_gists": 0,
  "followers": 2,
  "following": 7,
  "created_at": "2023-07-14T09:46:13Z",
  "updated_at": "2026-03-16T14:39:15Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter' , (req, res) => {
    res.send('aayushdotcom')
})

app.get('/login',(req,res) => {
   res.send('<h1>Login Page</h1>')

})

app.get('/youtube',(req,res) => {
    res.send('<h2>Youtube Channel: Chai aur code</h2>')
})


app.get('/github',(req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
