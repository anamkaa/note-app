export const sortByDate = (notes,byDate) =>{
    if(byDate === "latest"){
        return [...notes].sort( (a, b) => (b.date) - (a.date));
    }

    else if(byDate === "oldest"){
        return [...notes].sort( (a, b) => (a.date) - (b.date));
    }

     return notes;
}