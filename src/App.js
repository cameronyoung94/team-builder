import React, { useState } from "react"
import {data} from './data'
import TeamMatesForm from "./components/teammatesform"
import Members from "./components/members"
import "./components/styles.css";


function App(){
 const  [teamMates, setTeamMates] = useState(data)

 const addNewMember = (member) =>{
  const newMember = {
    name: member.name,
    email: member.email,
    role: member.role
  }
  setTeamMates([...teamMates,newMember])
}

  return(
    
    <div><TeamMatesForm addnewmember= {addNewMember}/><Members teammates= {teamMates} /></div>

  )
}

export default App