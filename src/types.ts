export type ValidationErrorCode = 
| 'INVALID_LENGTH' 
| 'INVALID_FORMAT' 
| 'INVALID_CHARACTERS';

export interface ValidationSuccess {
    valid: true;
    normalized: string;
    type: string;
}

export interface ValidationFailure {
    valid: false;
    errorCode: ValidationErrorCode;
    message: string;
}

export type ValidationResult = ValidationSuccess | ValidationFailure;
