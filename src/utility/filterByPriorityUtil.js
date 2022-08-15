export const filterByPriority = (notes,byPriority) =>{
    if(byPriority==="low"){
        return notes.filter((item)=>{
            return item.priority === "low"
        })
    }
    else if(byPriority==="medium"){
        return notes.filter((item)=>{
            return item.priority === "medium"
        })
    }
    else if(byPriority==="high"){
        return notes.filter((item)=>{
            return item.priority === "high"
        })
    }

  return notes;
}