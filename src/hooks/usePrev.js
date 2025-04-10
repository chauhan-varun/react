import { useEffect, useRef } from 'react';

/**
 * A custom hook that returns the previous value of a variable
 * @param {any} value - The value to track
 * @returns {any} - The previous value
 */
export function usePrev(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

export default usePrev;
