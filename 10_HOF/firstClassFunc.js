const arithmetics = {
    add:(a,b) =>{
        return `${a}+${b} = ${a+b}`;
    },
    subtract:(a,b) =>{
        return `${a}-${b} = ${a-b}`;
    }
}


console.log(arithmetics.add(100,100));
console.log(arithmetics.subtract(100,80));