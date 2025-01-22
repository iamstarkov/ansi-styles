import test from 'ava';
import ansiStyles, {
	backgroundColorNames,
	colorNames,
	foregroundColorNames,
	modifierNames,
} from '../index.js';

const styles = ansiStyles;

console.log(`${styles.green.open}Hello world!${styles.green.close}`);
