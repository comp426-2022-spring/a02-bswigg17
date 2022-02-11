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
    console.log(countFlips(coinFlips(1)));
}


