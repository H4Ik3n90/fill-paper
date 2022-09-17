const coba = () => {
    const result = ((1 + Math.random()) * 0x10000);

    return result;
}

const bisa = () => {
    const result = Math.floor((1 + Math.random()) * 0x10000);

    return result;
}

// console.log(coba());
// console.log(bisa());

console.log(Math.floor(65946.522938769).toString(16));