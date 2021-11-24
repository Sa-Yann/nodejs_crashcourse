const url = require('url');

const myUrl = new URL('http://mywebsite.con:3000/hello.html?id=100&status=active');

// ------------------------------------------------------
//  Serialized way to render the entire url
// ------------------------------------------------------
console.log(`test de : myUrl.href render:`);
console.log(myUrl.href);
console.log(`test de : myUrl.toStting() render:`);
console.log(myUrl.toString());
// .host to get the host/rooot domain with port if stipulated
console.log(`test de : myUrl.host render:`);
console.log(myUrl.host);
// .hostname to get the host/rooot domain
console.log(`test de : myUrl.hostname render:`);
console.log(myUrl.hostname);
// NB hostname doeanst render the port when .host does
// .pathname to get the host/rooot domain
console.log(`test de : myUrl.pathname render:`);
console.log(myUrl.pathname);
// Search = Serialized query : render ?id=100&status=active everything after the ?
console.log(`test de : myUrl.search render:`);
console.log(myUrl.search);
// possibility to crreate an objecct with Params
console.log(`test de : myUrl.searchParams render:`);
console.log(myUrl.searchParams);
// .appen = possibility to appen/add Params values
myUrl.searchParams.append('type', 'ce que tu veux')
console.log(`On a rajouté un parametre avec key et value au tableau`)
console.log(myUrl.searchParams);
console.log(`du coup si je redemade mon url complet avec myurl.href j'obtient mon nouvel url`)
console.log(myUrl.href)
// loop possibility
myUrl.searchParams.forEach((key, value) => {
    console.log(`${key} à pour valeur: ${value}`)
})

console.log(`j ai inverser les parametre ds al réposne pour les abvoir dans l ordre recherché`)
myUrl.searchParams.forEach((key, value) => {
    // NB!!!!! La loupe renvoie le 2eme parametre d abord
    console.log(`${value} à pour valeur: ${key}`)
})


//  since we have only one condition in the loop we can write it as followed
myUrl.searchParams.forEach((key, value) => console.log(`${value} à pour valeur: ${key}`))

