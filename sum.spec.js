const sum = (input1, input2) => input1 + input2;

describe('sum tests', () => {
	it('should return the correct sum when input1 and input2 are positive integers', () => {
		// Arrange
		const input1 = 5;
		const input2 = 10;
		const expected = 15;

		// Act
		const actual = sum(input1, input2);

		// Assert
		expect(actual).toBe(expected);
	});
});
