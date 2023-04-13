function display(obj) {
    console.log(`${obj} is of type '${typeof obj}'`);
}

let any = 'Cool';
display(any);

any = 3.1516;
display(any);

any = true;
display(any);
