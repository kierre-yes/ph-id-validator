export function digitsOnly(input: string): string {
    return input.replace(/\D/g, '');//remove non digits
}
