import os from 'os'
import {writeFile,readFile,appendFile} from'fs'
import {unlink} from'fs/promises'

console.log(os.freemem())
console.log(os.cpus())

writeFile('./data.txt','Hello World',()=>{console.log('saved')})
writeFile('./Readme.md','## This is first line in Readme',()=>{console.log('Readme.md file created')})
readFile('data.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data)
})
appendFile('./data.txt','This is second line',(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log('second line added')
})
unlink('./Readme.md')
console.log('readme.md deleted')