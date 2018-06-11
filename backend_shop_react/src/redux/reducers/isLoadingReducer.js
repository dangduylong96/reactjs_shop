const isLoadingReducer=(state=true, action)=>{
    switch(action.type){
        case 'STATUS_LOADING':{
            return action.status;
        }
        default:{
            return state;
        }
    }
}
export default isLoadingReducer;