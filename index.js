fetch("./usersample.json")
    // fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
    })
    .then(function (user) {

        let placeholder = document.querySelector("#userData");
        let out = "";
        for (let product of user) {
            // console.log(product);
            out += `
        <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.username}</td>
        <td>${product.email}</td>
        <td>${product.website}</td>
        <td>${product.phone}</td>
        <td>${product.company.name}</td>
        <td>${product.address.zipcode}</td>
        <td>${product.address.street}</td>
        <td>${product.address.city}</td>
        <td>${product.address.geo.lat}</td>
        <td>${product.address.geo.lng}</td>
    
        </tr>
        
        `;
        }
        console.log(out);
        placeholder.innerHTML = out;
    })
    // function refresh(){
    //     var clear=document.querySelector("#userData");
    //     clear.value="";
       
        
    // }

