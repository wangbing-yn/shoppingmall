const mutations={
    login(state,v){
     state.userInfo=v;
    },
    addshop(state,payload){
            let oldgoods =null;
            for(let item of state.carlist){
                if(item.id=== payload.id){
                    oldgoods=item;
                }
            }
           
            if(oldgoods){
               oldgoods.count+=1;
            }
           else
           {payload.count=1;
            state.carlist.push(payload);
           }       
           
    }
   }
   export default mutations;