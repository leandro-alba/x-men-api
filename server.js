const express = require('express')
const app = express()
const PORT = 8000

const mutants ={
    'wolverine': {
        'birthName' : 'James Howlett',
        'mutation' : `animal-keen senses, enhanced physical capabilities, a powerful regenerative ability known as a healing factor, and three retractable claws in each hand`,
        'favFood' : 'hamburger'
    },
    'rogue': {
        'birthName' : 'Anna Marie',
        'mutation' : `involuntary ability to absorb and sometimes also remove the memories, physical strength, and superpowers of anyone she touches`,
        'favFood' : 'Gummy Worms'
    },
    'professor x': {
        'birthName' : 'Charles Francis Xavier',
        'mutation' : `World's most powerful telepath, capable of astral projection, mind control, illusion casting, memory manipulation, psychic blasts, as well as sensing the presence of other mutants in a limited radius`,
        'favFood' : 'ice cream'
    },
    'unknown': {
        'birthName' : '?',
        'mutation' : `?`,
        'favFood' : '?',
        'hmmm' : 'uhhh >w<'
    },
    
}
const nonMutants ={

}
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get('/api/:name',(req,res)=>{
    const mutantName = req.params.name.toLowerCase()
    if(mutants[mutantName]){
        res.json(mutants[mutantName])
    }else{
        res.json(mutants['unknown'])
    }
    //console.log(mutants[mutantName])
})
app.listen(PORT, (req,res)=>{
    console.log(`server is now running on port ${PORT} >w< !`)
})