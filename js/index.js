window.addEventListener('load', () => {
   var semana = ['dilluns','dimarts','dimecres','dijous','divendres'];
   console.log(semana[semana.length-4]);

    let x = 0;
    for(let i=5; i < 20; i++) {
        x = i;
    }
    console.log(x);

    if(5 == '5') {
        console.log('Estabas en lo correcto :]');
    }

    const a = [1,3,5,7,9];
    const b = [1,3,5,7,9];
    var i = 0;

    while(a[i] === b[i] && a.length === b.length && a[i] != undefined) {
        i++;
    }
    
    if(i === a.length) {
        console.log('true');
    }else {
        console.log('False');
    }
});