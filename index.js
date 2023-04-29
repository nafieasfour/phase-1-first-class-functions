function receivesAFunction(call) {
    call();
  }

function returnsANamedFunction(test){
    return function name(){}
}



function returnsAnAnonymousFunction(toto){
    return () => console.log("hello")
}


