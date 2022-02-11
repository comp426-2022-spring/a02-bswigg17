import { coinFlips,  countFlips } from './modules/coin.mjs';


try {
    const args = process.argv.slice(2)[0].slice(9); 
    if (isNaN(args)) {
        throw new Error()
    }
    else {
        console.log(countFlips(coinFlips(parseInt(args)))); 
    }
}
catch (error) {
    const obj = countFlips(coinFlips(1))
    if (obj.heads == 1) {
        delete obj['tails']; 
        console.log(obj);
    }
    else {
        delete obj['heads'];
        console.log(obj)
    }

}


