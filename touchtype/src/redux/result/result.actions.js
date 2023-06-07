export const handleUserResult = (data,dispatch)=>{ //simple action for adding user current result to the reudx store
    dispatch({type:"ADD_RESULT",payload:data})
}