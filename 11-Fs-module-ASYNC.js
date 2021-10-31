const {readFile, writeFile} = require('fs');

// önce kodumuz işlemini yapacak sonra biz callback func
//çağıracağız

readFile('./First.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const bir = result;
    readFile('./bir.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const iki = result;
        writeFile('./result-async.txt',
        `Here is the result :`,
        (err, result) =>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})