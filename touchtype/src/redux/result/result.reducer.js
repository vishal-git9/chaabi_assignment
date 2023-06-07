const intialState = {
    Accuracy:0,
    WordMinute:0
}

export const resultReducer = (state=intialState,{type,payload})=>{
    switch(type){
        case "ADD_RESULT":{
            return {
                ...state,Accuracy:payload?.Accuracy,WordMinute:payload?.WordMinute
            }
        }
        default:{
            return state
        }
    }
}