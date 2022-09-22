function rand(min = 1000, max=3000) { //para variar de 1000 a 3000
    const num = Math.random() * (max - min) + min; 
    return Math.floor(num);
}

// com a function rand lincada nas 3 funçoes , n saberemos qual vai ser executada primeiro 

function f1(callback) { 
    setTimeout(function() {
        console.log ('f1')
        if (callback) callback();
    },rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if  (callback) callback();
    },rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log ('f3');
        if (callback) callback();
    },rand());

}

//para eu fazer que a funçoes execute na order certa 
f1(function() {//chamo f1 , hora que terminar chamar f2 , hora que terminar f2  chamar f3 ,
    f2(function() {
        f3(function() {
            console.log ('ola mundo ')
        });
    });
});

