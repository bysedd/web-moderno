{
    {
        {
            {
                var sera = 'Será???'; // var é global
                console.log(sera);
            }
        }
    }
}
console.log(sera);

function test() {
    var local = 123;
    console.log(local);
}

test();
// console.log(local); // ReferenceError: local is not defined