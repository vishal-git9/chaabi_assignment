export const matchString = (taskStr,inputStr)=>{
    let Inputlength = inputStr.length
    console.log(taskStr[Inputlength-1])
    console.log(inputStr)
    if(taskStr[Inputlength-1]===inputStr[Inputlength-1]){
        return true
    }
    return false
}