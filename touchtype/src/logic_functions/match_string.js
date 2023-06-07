export const matchString = (taskStr,inputStr,index,correctKeys)=>{
    let Inputlength = inputStr.length
    console.log(taskStr[Inputlength-1])
    let check = true
    console.log(inputStr)
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
        check = true
        correctKeys++
        index++
        console.log(index)
        return {index,check,correctKeys}
    }
    check = false
    return {index,check,correctKeys}
}