import Header from '../components/Header.jsx'
import Entry from '../components/Entry.jsx'
import data from '../data.js'
import { useState} from 'react-dom/client'


/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */





function App() {

const [search, setSearch] = useState("")

const filteredData = data.filter(item=>
item.tolowerCase().trim().includes(search.tolowerCase()))

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
<input value={search}
placeholder="enter city name"
type="text"
onChange= setSearch(event.target.vakue)

/>
    <main className='container'>
      {myArray}
    </main>

    </>

  )
}

export default App
