window.addEventListener('load', () => {
   var semana = ['dilluns','dimarts','dimecres','dijous','divendres'];
   console.log(semana[semana.length-4]);

    let x = 0;
    for(let i=5; i < 20; i++) {
        x = i;
    }
    console.log(x);

    if(5 == '5') {
        console.log('Tranquilo, bebote. Estabas en lo correcto :]');
    }
});