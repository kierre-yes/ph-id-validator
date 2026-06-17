# @kierfr_atdev/ph-id-validator

TypeScript-first validation and formatting utilities for selected Philippine government IDs.

## Why this package exists

Philippine apps often need to validate user-entered identification numbers during registration, onboarding, HR, payroll, and government-related workflows. Instead of rewriting the same validation logic in every project, this package provides reusable helpers for Philippine **TIN** and **PhilHealth PIN** values.

This package is meant for **input validation and normalization**, not official government verification or identity authentication.

## Supported IDs

- TIN
- PhilHealth PIN

## Features

- Validate TIN input
- Format TIN input
- Validate PhilHealth PIN input
- Format PhilHealth PIN input
- TypeScript-friendly API
- Lightweight package for frontend or backend use

## Installation

```bash
npm install @kierfr_atdev/ph-id-validator
```

## Usage

```ts
import {
  validateTin,
  formatTin,
  validatePhilHealthPin,
  formatPhilHealthPin
} from '@kierfr_atdev/ph-id-validator';

const tin = validateTin('123-456-789');

if (tin.valid) {
  console.log('Normalized TIN:', tin.normalized);
  console.log('Formatted TIN:', formatTin(tin.normalized));
} else {
  console.log('TIN error:', tin.message);
}

const pin = validatePhilHealthPin('12-345678901-2');

if (pin.valid) {
  console.log('Normalized PIN:', pin.normalized);
  console.log('Formatted PIN:', formatPhilHealthPin(pin.normalized));
} else {
  console.log('PIN error:', pin.message);
}
```

## API

### `validateTin(input: string)`

Validates a Philippine TIN input and returns a result object.

### `formatTin(input: string)`

Formats a normalized TIN string into a readable TIN format.

### `validatePhilHealthPin(input: string)`

Validates a PhilHealth PIN input and returns a result object.

### `formatPhilHealthPin(input: string)`

Formats a normalized PhilHealth PIN string into a readable format.

## Result shape

Validation functions return a result similar to this:

```ts
type ValidationResult =
  | {
      valid: true;
      normalized: string;
    }
  | {
      valid: false;
      errorCode: string;
      message: string;
    };
```

## Notes

PhilHealth documentation describes the PIN as a 12-digit number and uses a 2-9-1 presentation format in claim form guidance.[web:397] Public explanations of Philippine TIN formatting commonly describe a 9-digit `XXX-XXX-XXX` structure, and some materials also describe extended forms with branch codes for certain use cases.[web:398][web:404]

## Limitations

This package does **not**:
- verify that an ID belongs to a real person
- connect to PhilHealth, BIR, or any government system
- replace official identity verification processes

It only validates and formats supported input according to package rules.

## Roadmap

Planned future support may include:

- Pag-IBIG MID
- SSS number
- PhilSys PSN / PCN

## Status
Ongoing

## License

MIT

