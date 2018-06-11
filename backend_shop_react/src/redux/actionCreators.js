export function saveToken(token){
    return {
        type: 'SAVE_TOKEN',
        _token: token
    }
}
export function statusLogin(status){
    return {
        type: 'STATUS_LOGIN',
        status: status
    }
}
export function statusLoading(status){
    return {
        type: 'STATUS_LOADING',
        status: status
    }
}