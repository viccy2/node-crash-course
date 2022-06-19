const fs = require('fs');

//reading files

fs.readFile('./docs/blog.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});


//writing files
fs.writeFile('./docs/blog2.txt', 'hello world', () =>{
    console.log('done')
})

//directories
if(!fs.existsSync('./assets')){
fs.mkdir('./assets', (err) =>{
    if(err){
        console.log(err);
    }
    console.log('folder created');
})
}
else{
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted');
    });
}

//deleting files
if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}
