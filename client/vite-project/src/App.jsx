
import React, {lazy} from 'react'

import { BrowserRouter,Route,Routes } from 'react-router-dom'

const Home=lazy(()=>import("./pages/home"));
const Login=lazy(()=>import("./pages/login"));
const Chat=lazy(()=>import("./pages/Chat"));
const Groups=lazy(()=>import("./pages/Groups"));


function App() {
  return(
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home></Home>}></Route>
      <Route path="login" element={<Login></Login>}/>
      <Route path="Groups" element={<Groups></Groups>}/>
      <Route path="Chats/:chatId" element={<Chat></Chat>}/>
      
      
      </Routes>
    
    
    </BrowserRouter>
  )
  
}

export default App
