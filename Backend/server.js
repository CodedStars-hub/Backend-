import express from 'express'
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send('Server is running')
})
app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id: 1,
            title: 'Why did the AI break up with the database?',
            content: 'Because it found a better connection!'
        },
        {
            id: 2,
            title: 'Why did the JavaScript developer quit his job?',
            content: 'Because he didn\'t get arrays!'
        },
        {
            id: 3,
            title: 'Why did the CSS developer break up with the HTML developer?',
            content: 'Because they had too many conflicts!'
        },
        {
            id: 4,
            title: 'Why did the Python developer go broke?',
            content: 'Because he lost all his bytes!'
        },
        {
            id: 5,
            title: 'Why did the PHP developer go to therapy?',
            content: 'Because he had too many issues!'
        },
        {
            id: 6,
            title: 'Why did the SQL developer break up with the NoSQL developer?',
            content: 'Because they had too many differences!'
        },
        {
            id: 7,
            title: 'Why did the Git developer break up with the GitHub developer?',
            content: 'Because they had too many branches!'
        },
        {
            id: 8,
            title: 'Why did the React developer break up with the Angular developer?',
            content: 'Because they had too many components!'
        },
        {
            id: 9,
            title: 'Why did the Vue developer break up with the Svelte developer?',
            content: 'Because they had too many directives!'
        },
        {
            id: 10,
            title: 'Why did the Node.js developer break up with the Express developer?',
            content: 'Because they had too many middleware!'
        },
    ]
    res.json(jokes);
})

app.listen(port, ()=>{
    console.log('Server is running')
})