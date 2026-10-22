import Header from '../components/Header.jsx'
import Entry from '../components/Entry.jsx'
import data from '../data.js'
import { useState} from 'react'



/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */





function App() {

  const[searchTerm, setSearchItem] = useState('')

  const filteredData = data.filter(contact=>
    contact.country.toLowerCase().trim().includes(searchTerm.toLocaleLowerCase().trim())
  )

  const myArray = filteredData.map(entry=>
    <Entry
    key={entry.id}
    //spread the entry object as prop
    //entry={entry}
    {...entry}

    />
  )
  return(
    <>
    <Header />
    <main className='container'>
      <input
      className='viewed'
      type="text"
      placeholder='search destination'
      value={searchTerm}
      onChange={(event) => setSearchItem(event.target.value)}
      ></input>
      {myArray}
    </main>

    </>

  )
}

export default App
