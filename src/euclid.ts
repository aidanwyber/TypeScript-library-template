/**
 * Compute area of a triangle given base and height.
 */
export function triangleArea(base: number, height: number): number {
	if (base < 0 || height < 0) {
		throw new Error('Base and height must be non-negative');
	}
	return 0.5 * base * height;
}
