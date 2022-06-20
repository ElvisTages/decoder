
document.getElementById("btn").addEventListener('click', async ()=>{
    if(document.getElementById("file").value){
    console.log(document.getElementById("file"))
    console.log(document.getElementById("file").value.split('.')[1])
    var data = new FormData()
        data.append('file', document.getElementById("file").files[0])
    let response = await fetch('http://127.0.0.1/upload', {
        headers: {
            format: document.getElementById("file").value.split('.')[1]
        },
        method: 'POST',
        body: data
    });
    let result = await response.text();
    console.log(result)
    alert(result);
    

}else{
            console.log(document.getElementById("text").value)
    let response = await fetch('http://127.0.0.1/', {
        method: 'POST',
        body: document.getElementById("text").value
    });
    let result = await response.text();
    console.log(result)
    alert(result);
    }
    
})
