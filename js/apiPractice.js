const firstAPI = `http://geodb-free-service.wirefreethought.com/`

const getData = async (e) => {
    const response = await fetch(firstAPI);
    const jsonResponse = await response.json();

    console.log(jsonResponse);
}
getData();