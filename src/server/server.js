const express=require("express");
const path=require("path");

const startServer=(options)=>{
    const {port,public_path='public'}=options;
     
    const app=express();

    //Para poder usar middleware se usa use
    app.use(express.static(public_path)) //Contenido estatico disponible

    app.get('*',(req,res)=>{
        const indexPath=path.join(__dirname+`../../${public}/index.html`);
        res.sendFile(indexPath);
    });
    app.listen(
        port,()=>{
            console.log(`Server listening on port ${port}`)
        }
    )
}
module.exports={
    startServer
}