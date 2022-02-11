import { coinFlips } from './modules/coin.mjs';


try {
    const args = parseInt(process.argv.slice(2)[0].slice(9)); 
    console.log(coinFlips(args));
}
catch (error) {
    console.log(coinFlips(1));
}


