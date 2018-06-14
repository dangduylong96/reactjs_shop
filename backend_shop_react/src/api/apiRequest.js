export function requestPost(url,dataPost){
    return fetch(url,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(dataPost)
    })
    .then(res=>{
        return res.json();
    })
}
export function requestPut(url,dataPost){
    return fetch(url,{
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(dataPost)
    })
    .then(res=>{
        return res.json();
    })
}
export function requestDelete(url,dataPost){
    return fetch(url,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(dataPost)
    })
    .then(res=>{
        return res.json();
    })
}
export function requestGet(url){
    return fetch(url)
    .then(res=>res.json())
}