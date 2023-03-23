// export { };
const numberr: number = 32;
console.log(numberr);


interface Objects { id: number, name: string, status: boolean };

const objects: Objects = {
    id: 1,
    name: "Vo",
    status: true,
};
console.log(objects);

const Ob = (pops: Objects): any => {
    let expand = pops.name;
    return expand;
};

console.log(Ob(objects));
console.log("Hello");
 console.log("dghsvcbds");
 
 