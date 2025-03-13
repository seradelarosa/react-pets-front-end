const PetDetail = (props) => {
    const pet = props.selected;

    if (!pet) {
        return (
            <div>
                <h1>NO DETAILS</h1>
            </div>
        );
    }

    return (
        <>
            <h2>{pet.name}</h2>
            <h3>Breed: {pet.breed}</h3>
            <h3>Age: {pet.age}</h3>
            <button onClick={ () => props.handleFormView(props.selected) }>
                Edit Pet
            </button>
        </>
    )
};

export default PetDetail;