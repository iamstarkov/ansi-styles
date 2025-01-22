import styles from './index.js';

console.log(`${styles.green.open} styles.green ${styles.green.close}`);

function green(str) { return `\u001B[32m${str}\u001B[39m` }

console.log(green('custom green'));
