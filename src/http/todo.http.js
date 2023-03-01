import { SERVER_URL } from ".."

export function apiAddTodo({task,todoID})
{
    const options={
            method:'POST',
            mode:'cors',
            credentials:'include',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                task:task,
                todoID:todoID
            })
    }
    return new Promise(async (resolve,reject)=>{

        try
        {
            let res=await fetch(`${SERVER_URL}/todo/`,options)
            if(res.ok)
            {
                return resolve(await res.json())
            }
            if(res.status===400)
                return reject(await res.text())
        }
        catch(e)
        {
            return reject("Some Server error")
        }
    })
}


export function apiLoadTodo()
{
    const options={
            method:'GET',
            mode:'cors',
            credentials:'include',
    }
    return new Promise(async (resolve,reject)=>{

        try
        {
            let res=await fetch(`${SERVER_URL}/todo/`,options)
            if(res.ok)
            {
                return resolve(await res.json())
            }
            else
                return reject(await res.text())
        }
        catch(e)
        {
            return reject("Some Server error")
        }
    })
}