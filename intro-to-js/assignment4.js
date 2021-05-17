// COVID19 TEMPERATURE TEST
function COVID19TEST(temperaturetest) {
    let results = temperaturetest;
    if(temperaturetest == 33){
        results = 'temperature is normal';
    }
    else if (temperaturetest >=35){
        results = 'please watch your temperature';
    }
    else if (temperaturetest >37){
        results = 'test for covid19';
    } 
    else{
        results = 'negative for covid19';
    }
    return results;
}
console.log(temperaturetest);

//ARRAYS
let myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const rewind = 'Armstrong';
console.log (myArray);

Armstrong.reversed();
console.log (rewind(myArray));
