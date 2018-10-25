const fs = requiere ('fs')
const path = requiere('path')
btnCreate = document.getElementById('btnCreate')
btnRead = document.getElementById('btnRead')
btnDelate = document.getElementById('btnDelate')
fileName = document.getElementById('fileName')
fileContents = document.getElementById('fileContents')


let pathName = path.join(__dirname, 'File')
btnCreate.addEventListener ('click',function(){
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value
    fs.writeFile(file, contents, function(err){
        if(err){
            return console.log(err);
        }

        console.log("Este archivo fue guardado");
    });
})

btnRead.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)
    fs.readFile(file, function(err, data){
        if (err){
            return console.log(err);
    }
    fileContents.value = data
    console.log("Este archivo ya fue leido");
    })
})

btnDelate.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)
    fs.unlink(file, function(err){
        if (err){
            return console.log(err);
        }
        fileName.value= ''
        fileContent.value =''
        console.log("Este archivo fue eliminado")
    })
})