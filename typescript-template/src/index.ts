import * as Lib from './lib';

async function main() {
    const result = await Lib.aux('Peppa');
    console.log(result);
}

(async () => {
    await main();
})();