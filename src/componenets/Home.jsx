import React ,{useContext} from 'react'
import { Productcontext } from '../Context/Productcontext'

function Home() {
    const {info} = useContext (Productcontext)
  return (
    <div>

      {info[0].drug_name}
    </div>
  )
}

export default Home
