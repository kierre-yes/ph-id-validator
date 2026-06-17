import type {ValidationResult} from './types';
import { digitsOnly} from './utils';

//for tin id validation, base 9, b-length 12, label TIN
const TIN_BASE_LENGTH = 9;
const TIN_WITH_BRANCH_LENGTH = 12;
const TIN_LABEL = 'TIN';

export function validateTin(input: string): ValidationResult {
    //get removed nondigits
    const normalized = digitsOnly(input);
    //empty check
    if (normalized.length === 0) {
        return {
            valid: false,
            errorCode: 'INVALID_LENGTH',
            message: 'TIN must contain be empty',
        }
    }
    if (normalized.length !== TIN_BASE_LENGTH && normalized.length !== TIN_WITH_BRANCH_LENGTH) {
        return {
            valid: false,
            errorCode: 'INVALID_LENGTH',
            message: 'TIN must be 9 digits, or 12 digits including branch code.'
        }
    }
    //if pass, return if tin
    return {
        valid: true,
        normalized,
        type: TIN_LABEL
    }
}

export function formatTin(input: string): string {
    const normalized = digitsOnly(input);
    if (normalized.length === TIN_BASE_LENGTH) {
        return normalized.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
    }
    if (normalized.length === TIN_WITH_BRANCH_LENGTH) {
        return normalized.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1-$2-$3-$4');
    }
    //formatted input
    return input;
}



