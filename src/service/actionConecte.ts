

class ActionConect{
    fetchApi (route: string){
       return fetch('example.com' + route,{
            method : "GET"
        })
    }
    
    deleteUser(id:number){
        return fetch('example.com' + id,{
            method : "DELETE"
        })
    }

}


export default new ActionConect()