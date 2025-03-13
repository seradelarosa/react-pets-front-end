// track changes that are happening as user is typing in the form
import { useState } from 'react';

const PetForm = (props) => {
    const initialState = { //{object}
        name: '',
        age: '',
        breed: ''
    }

    const [formData, setFormData] = useState(
        props.selected ? props.selected : initialState
    );

    // handleChange function to update formData state.
  const handleChange = (evt) => {
    // object that destructures values from formData and then appends...
    // don't directly change the state 
    // so we destructure the data into a brand new object that's passed into the setter
    // appending new key:value
    // keep original info where it's still the same, and change to new values where it was changed
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (props.selected) {
      props.handleUpdatePet(formData, props.selected._id);
    } else {
      props.handleAddPet(formData);
    }
  }

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"> Name </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="age"> Age </label>
          <input
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <label htmlFor="breed"> Breed </label>
          <input
            id="breed"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
          />
          <button type="submit">
            { props.selected ? 'Update Pet' : 'Add New Pet' }
            </button>
        </form>
      </div>
    );
};

export default PetForm;