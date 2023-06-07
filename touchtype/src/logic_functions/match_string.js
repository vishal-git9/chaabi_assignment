export const matchString = (taskStr,inputStr,index)=>{
    let Inputlength = inputStr.length
    console.log(taskStr[Inputlength-1])
    let check = true
    console.log(inputStr)
    if(taskStr[Inputlength-1]===inputStr[Inputlength-1]){
        check = true
        index++
        console.log(index)
        return {index,check}
    }
    check = false
    return {index,check}
}