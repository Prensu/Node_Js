const fs=require('fs');

fs.readFile('./docs/blog1.txt',(err,data)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log(data.toString());
});

// console.log("This line gets executed first due to asynchronous nature of javascript!");

fs.writeFile('./docs/blog2.txt',"Anyways new year idiots ",() =>{
    console.log("file was written");
})