function display() {  
    for(let i = 0; i <= 20; i++) {
        console.log(i);
    }
    for(let j = 0; j <= 20; j++) {
        if(j % 2) {
            console.log(j);
            
        }
    }
}

display();

function sum() {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let str = 0;
    for(let i = arr.length - 1; i >= 0; i-- ) {
        str = str + arr[i];
    }
    console.log('Suma elementelor este: ', str);
}

sum();

function max() {
    let arr = [20, 11, 43, 2, 18]
    let max = -Infinity;
    for(let i = arr.length - 1; i >= 0; i--) {
    if(max < arr[i]) {
        max = arr[i];
    }
}
       
    console.log('Maximul elementelor este: ', max);
}

max();

 
function count() {
    let arr = [1, 2, 1, 3, 25, 1, 4, 7];
    let value = 1;
    let nr = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == value) {
            nr++;
        }
    }
    console.log('Numarul 1 apare de ' + nr + ' ori');
}

count();