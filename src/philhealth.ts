import type {ValidationResult} from './types';
import { digitsOnly} from './utils';

const PHILHEALTH_LENGTH = 12;
const PHILHEALTH_LABEL = 'PHILHEALTH_PIN';

export function validatePhilhealthPin(input: string): ValidationResult {
    //get removed nondigits
    const normalized = digitsOnly(input);
    //empty check
    if (normalized.length === 0) {
        return {
            valid: false,
            errorCode: 'INVALID_LENGTH',
            message: 'PHILHEALTH_PIN cannot be empty',
        }
    }
    if (normalized.length !== PHILHEALTH_LENGTH) {
        return {
            valid: false,
            errorCode: 'INVALID_LENGTH',
            message: 'PHILHEALTH_PIN must be 12 digits long',
        }
    }  
    return {
        valid: true,
        normalized,
        type: PHILHEALTH_LABEL
    }
}

export function formatPhilhealthPin(input: string): string {
    const normalized = digitsOnly(input);
    if (normalized.length !== PHILHEALTH_LENGTH) {
        return input;
    }
    return normalized.replace(/(\d{2})(\d{9})(\d{1})/, '$1-$2-$3');

}

