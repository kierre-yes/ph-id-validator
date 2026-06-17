import { describe, it, expect } from 'vitest';
import { validateTin, formatTin } from '../src/tin';

describe('validateTin', () => {
    it('accepts a valid 9-digit TIN', () => {
        const result = validateTin('123-456-789');
        expect(result.valid).toBe(true);
        if (result.valid) {
            expect(result.normalized).toBe('123456789');
            expect(result.type).toBe('TIN');
        }
    })
    it('accepts a valid 12-digit TIN with branch code', () => {
        const result = validateTin('123-456-789-000');
        expect(result.valid).toBe(true);
        if (result.valid) {
            expect(result.normalized).toBe('123456789000');
        }
    });
    it('rejects empty input', () => {
        const result = validateTin('');
        expect(result.valid).toBe(false);
        if (!result.valid) {
            expect(result.errorCode).toBe('INVALID_LENGTH');
        }        
    })
    it ('rejects invalid lengths', () => {
        const result = validateTin('12345');
        expect(result.valid).toBe(false);
        if (!result.valid) {
            expect(result.errorCode).toBe('INVALID_LENGTH');
        }
    })
    it('rejects non-digit characters', () => {
        const result = validateTin('123-ABC-789');
        expect(result.valid).toBe(false);
})
    it('normalizes TIN without dashes', () => {
        const result = validateTin('123456789');
        expect(result.valid).toBe(true);
    if (result.valid) {
        expect(result.normalized).toBe('123456789');
    }
})
})

describe('formatTin', () => {
    it('formats a 9-digit TIN', () => {
        expect(formatTin('123456789')).toBe('123-456-789');
    })
    it('formats a 12-digit TIN with branch code', () => {
        expect(formatTin('123456789000')).toBe('123-456-789-000');
    })
})
