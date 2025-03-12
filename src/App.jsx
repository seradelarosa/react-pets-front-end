// set initial state of pets 
// import hooks
import { useState, useEffect } from 'react';
// gives us an alias and imports all calls that we will define in service file
import * as petService from './services/petService.js';
import PetList from './components/PetList/PetList.jsx';


const App = () => {
  const [pets, setPets] = useState([]); // set initial state of pets

  //first arg is an anonymous function, which will hold our logic
  //second arg is an array of info we might use
  useEffect(() => {

    const fetchPets = async () => { //define function that makes the api call
      try {
        const fetchedPets = await petService.index(); // holds pets from index function in petService

        if (fetchedPets.err) {
          throw new Error(fetchedPets.err);
        }

        setPets(fetchedPets); // set state of pets to the value of fetchedPets
      } catch (err) {
        console.log(err);
      };
    }

    fetchPets(); //putting this AFTER the definition of fetchPets
  }, []);

  // now we have fetched the data, we need to display it by making a component


  return (
    <>
      {/* passing pets into the component */}
      <PetList pets={pets} />
    </>
  )
};

export default App;

