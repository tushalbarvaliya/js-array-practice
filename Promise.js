let mypromise = new Promise((reslove,reject)=>{
    let s=1;
    if(s==0){
        reslove( "success")
    }else{
        reject("Error")
    }
})

mypromise.then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);  
})