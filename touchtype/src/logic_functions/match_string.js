export const matchString = (taskStr,inputStr,index)=>{
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
        index++
        console.log(index)
        return {index,check}
    }
    check = false
    return {index,check}
}