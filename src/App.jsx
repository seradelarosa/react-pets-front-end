// set initial state of pets 
// import hooks
import { useState, useEffect } from 'react';
// gives us an alias and imports all calls that we will define in service file
import * as petService from './services/petService.js';
import PetList from './components/PetList/PetList.jsx';
import PetDetail from './components/PetDetail/PetDetail.jsx';
import PetForm from './components/PetForm/PetForm.jsx';


const App = () => {
  const [pets, setPets] = useState([]); // set initial state of pets
  // selected pet from list
  const [selected, setSelected] = useState(null);
  // is form open or not open?
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  const handleSelect = (pet) => {
    setSelected(pet);
  };

  const handleFormView = (pet) => {
    if (!pet._id) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  const handleAddPet = async (formData) => {
    try {
      const newPet = await petService.create(formData);

      if (newPet.error) {
        throw new Error(newPet.error);
      }
      
      //destructure value of pets that exists there
      setPets([newPet, ...pets]);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error)
    }
  };

  const handleUpdatePet = async (formData, petId) => {
    // eventually call an update service function
    // update pets state
    try {
      const updatedPet = await petService.update(formData, petId);

      if (updatedPet.error) {
        throw new Error(updatedPet.error);
      }

      const updatedPetList = pets.map((pet) => {
        return pet._id !== updatedPet._id ? pet : updatedPet
      });

      setPets(updatedPetList);
      setIsFormOpen(false);
      setSelected(updatedPet);
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      {/* passing pets into the component */}
      <PetList
        pets={pets}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />

      {isFormOpen ? (
        <PetForm 
        handleAddPet={handleAddPet}
        selected={selected}
        handleUpdatePet={handleUpdatePet}
        />
      ) : (
        <PetDetail 
        selected={selected}
        handleFormView={handleFormView}
        />
      )}

    </>
  )
};

export default App;

