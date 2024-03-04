import axios from "axios";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };

}

const placeholderAPI = "https://jsonplaceholder.typicode.com/users"

axios
.get<User[]>(placeholderAPI)
.then((response) => {
    // printUser(response.data);
    response.data.forEach((user) => {
        printUser(user);
        console.log("====================================");
    })
})
.catch((error) => {
    console.log(error)
});

function printUser(user: User) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}