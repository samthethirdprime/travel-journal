import Header from '../components/Header.jsx'
import Entry from '../components/Entry.jsx'
import data from '../data.js'



/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */





function App() {

  const myArray = data.map(entry=>
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
      {myArray}
    </main>

    </>

  )
}

export default App
