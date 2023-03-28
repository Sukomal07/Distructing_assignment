function extractNameAndStreet(person) {
    const { name, address: { street } } = person
    return { name, street }
}

const person = {
    name: "Sukomal",
    age: 22,
    address: {
        street: "BB, Block B , Industrial Area",
        city: "Kharagpur",
        state: "West Bengal"
    }
}

const extract = extractNameAndStreet(person)
console.log(extract)