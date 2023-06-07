const intialState = { //intial store for user typing result
    Accuracy:0,
    WordMinute:0
}

export const resultReducer = (state=intialState,{type,payload})=>{
    switch(type){
        case "ADD_RESULT":{ // adding results to the store
            return {
                ...state,Accuracy:payload?.Accuracy,WordMinute:payload?.WordMinute
            }
        }
        default:{
            return state
        }
    }
}