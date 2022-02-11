import { coinFlips } from './modules/coin.mjs';


try {
    const args = process.argv.slice(2)[0].slice(9); 
    if (NaN(args)) {
        throw new Error()
    }
    else {
        console.log(coinFlips(parseInt(args))); 
    }
}
catch (error) {
    console.log(coinFlips(1));
}


