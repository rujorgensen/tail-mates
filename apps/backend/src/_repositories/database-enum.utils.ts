import type {
    EGender,
    ESize,
} from '@prisma-types/tailmates';
import type {
    TGender_S,
    TSize_S,
} from '@tailmates/shared/interfaces';

// ****************************************************************************
// *** Utilities
// ****************************************************************************

/**
 * Converts database enums for size into app types.
 * 
 * @param { ESize } size
 * 
 * @returns { TSize_S }
 */
export const convertSizeFromDatabase = (
    size: ESize,
): TSize_S => {
    switch (size) {
        case 'SMALL':
            return 'small';
        case 'MEDIUM':
            return 'medium';
        case 'LARGE':
            return 'large';
    }
}

/**
 * Converts database enums for gender into app types.
 * 
 * @param { EGender } size
 * 
 * @returns { TGender_S }
 */
export const convertGenderFromDatabase = (
    size: EGender,
): TGender_S => {
    switch (size) {
        case 'MALE':
            return 'male';
        case 'FEMALE':
            return 'female';
    }
}

/**
 * Converts app enums for size into database types.
 * 
 * @param { TSize_S } size
 * 
 * @returns { ESize }
 */
export const convertSizeFromApp = (
    size: TSize_S,
): ESize => {
    switch (size) {
        case 'small':
            return 'SMALL';
        case 'medium':
            return 'MEDIUM';
        case 'large':
            return 'LARGE';
    }
}

/**
 * Converts app enums for gender into database types.
 * 
 * @param { TGender_S } gender
 * 
 * @returns { TGender_S }
 */
export const convertGenderFromApp = (
    gender: TGender_S,
): EGender => {
    switch (gender) {
        case 'male':
            return 'MALE';
        case 'female':
            return 'FEMALE';
    }
}
