const fs =require('fs');


if(!fs.existsSync('./assets')){
fs.mkdir('./assets',(err) =>
{
    if(err)
    {
        return console.log("there is an error");

    }

    console.log("Folder suCcessfully Created!!!")
}) ;
} else 
{
    fs.rmdir('./assets',(err) =>{
        if(err)
        {
            console.log(err);

        }
        console.log("Folder Deleted !");
    })
}