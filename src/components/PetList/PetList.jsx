// takes props bc we will be passing the pets
const PetList = (props) => {

    return (
        <div>
          <h1>Pet List</h1>
          <div>
            {!props.pets.length ? (
              <h2>No Pets Yet!</h2>
            ) : (
              <ul>
                {props.pets.map((pet) => (
                  <li key={pet._id}>{pet.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
};

export default PetList;