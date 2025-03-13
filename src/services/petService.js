const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const index = async () => {
    try {
        // GET https://localhost:3000/pets
        // and store it in a variable called response
        const res = await fetch(BASE_URL);
        return res.json();
    } catch (error) {
        console.log(error);
    };
};

const create = async (formData) => {
    try {
        // this is also a post so it takes a second argument
        const res =  await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

const update = async (formData, petId) => {
    
    try {
        const res = await fetch(`${BASE_URL}/${petId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })

        return res.json();
    } catch (error) {
        console.log(error);
    };
};

// USE THIS TO TEST:
// console.log(await index());

// exports an object that contains multiple functions
export {
    index, 
    create,
    update
};
// using export default index can only export one thing at a time
// module.exports is express (back-end) this is React
