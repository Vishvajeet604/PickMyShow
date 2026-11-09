import { createContext, useState } from "react";

export let UserContext =createContext();
function UserProvider({children}){
const [user,setUser]=useState({
username :"Guest User",
email : "guest@example.com",
contact:"0000000000",
role:"guest",

});
return (
<UserContext.Provider value={{user,setUser}}>
    {children}
</UserContext.Provider>
);


};
export default UserProvider;