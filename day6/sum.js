function sum(operations) {
    operations.a = 7;
    return operations.a + operations.b;
}

const operations = {
    a: 5,
    b: 7
}

const result = sum(operations);
console.log(operations.a);
console.log(result);
