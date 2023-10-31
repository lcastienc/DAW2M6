//Act Fibonacci
function resolFibonacci(){
    let num = prompt("Introduce un valor:");
    let uno = 1;
    let dos = 1;
    for (let index = 3; index <= num; index++) {
        let  tres = uno +dos;
        uno = dos;
        dos = tres;        
    }
    //return dos;
    console.log(dos);
}

//console.log(resolFibonacci());
