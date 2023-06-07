export const matchKeyboard = (parent,givenStr,index=0)=>{
    for(let i=0; i<parent.length; i++){
        for(let j=0; j<parent[i].children.length; j++){
            document.getElementById(parent[i].children[j].id).style.transform = "scale(1)" //changing the style of matched id button to default 
            document.getElementById(parent[i].children[j].id).style.border = "none" //changing the style of matched id button to default
            if(parent[i].children[j].id===givenStr[index]?.toUpperCase()){
                document.getElementById(parent[i].children[j].id).style.transform = "scale(1.3)" //changing the style of matched id button
                document.getElementById(parent[i].children[j].id).style.border = "2px solid #fff"  //changing the style of matched id button    
            }else if(givenStr[index]===" "){
                document.getElementById("key_space").style.transform = "scale(1.3)" //changing the style of matched id button for space
                document.getElementById("key_space").style.border = "2px solid #fff"      //changing the style of matched id button for space
            }
        }
    }
}