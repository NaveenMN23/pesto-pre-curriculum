const {addition, subtraction, multiplication, division} = require('./index');

const describe = (desc, fn) => {
	console.log(desc);
	fn();
}

const it = (msg, fn) => describe(' ' + msg, fn);

const matchers = (exp) => ({
	toBe: (assertion) => {
		if(exp === assertion){
			console.log('pass');
			return true;
		}else{
			console.log('fail');
			return false;
		}
	}
})

const expect = (exp) => matchers(exp);

describe('addition', () => {
	it('adds two numbers', () => {
		const result = addition(1, 2);
		expect(result).toBe(3);
	});
});

describe('subtraction', () => {
	it('subtracts two numbers', () => {
		const result = subtraction(2, 1);
		expect(result).toBe(1);
	});
});

describe('multiplication', () => {
	it('multiplies two numbers', () => {
		const result = multiplication(2, 3);
		expect(result).toBe(6);
	});
});

describe('division', () => {
	it('divides two numbers', () => {
		const result = division(6, 2);
		expect(result).toBe(3);
	});
});