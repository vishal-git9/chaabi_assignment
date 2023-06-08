export const matchString = (taskStr,inputStr,index,correctKeys)=>{
    let check = true
    // gve
    // gbe
    let isMatched = true
    for (let i = 0; i < inputStr.length; i++) {
        if(taskStr[i]!==inputStr[i]){
            isMatched = false
            break;
        }
    }
    if(isMatched){
        check = true            // managing the check state 
        correctKeys++           //increasing the correct user keys
        index++                 //increasing the task string index after matching with the input string
        return {index,check,correctKeys}
    }
    check = false
    return {index,check,correctKeys}
}