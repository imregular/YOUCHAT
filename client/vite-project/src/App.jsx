
import React, {lazy} from 'react'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ProtectRoute from './componets/auth/ProtectRoute';

const Home=lazy(()=>import("./pages/home"));
const Login=lazy(()=>import("./pages/login"));
const Chat=lazy(()=>import("./pages/Chat"));
const Groups=lazy(()=>import("./pages/Groups"));
const NotFound=lazy(()=>import("./pages/notFound"));


let user=false
;




function App() {
  return(
    <BrowserRouter>
    <Routes >
    <Route element={<ProtectRoute user={user}/>}>
      <Route path="/" element={<Home></Home>}> </Route>
      <Route path="/Groups" element={<Groups></Groups>}/>
      <Route path="/Chats/:chatId" element={<Chat></Chat>}/>


      </Route>

    

      <Route 
      path="/login" element={
      <ProtectRoute user={!user} redirect='/'>
        <Login></Login>
      </ProtectRoute>
    }
    />
    <Route path="*" element={<NotFound></NotFound>}> </Route>

      
         </Routes>
    
    
    </BrowserRouter>
  )
  
}

export default App
