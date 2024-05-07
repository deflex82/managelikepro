const savenotes = (text)=>{
    const notes = getnotes();
    console.log(notes);
    const timestamp = new Date().toISOString();
    const newnote = {text:text,timestamp:timestamp};
    notes.push(newnote);
    try{
         localStorage.setItem("notes",JSON.stringify(notes));

    }
    catch(err){
        console.log(err.message);
    }

}


const getnotes = ()=>{

    try{
        const notes = localStorage.getItem("notes");
        return notes?JSON.parse( notes):[];

    }
    catch(err){
        console.log(err.message)
    }

}

const clearallnotes = ()=>{
    try{
        localStorage.removeItem("notes");

    }catch(err){
        console.log(err.message)
    }
 
}


export {savenotes,getnotes,clearallnotes}