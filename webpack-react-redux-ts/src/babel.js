export async function asyncRequest() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const correctResp = response.json().then(data => console.log(data));
}
