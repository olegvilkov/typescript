// Simple function decorator, wich make caching result when function call with same arguments
function memoize<T, U extends any[]>(fn: (...args: U) => T): (...args: U) => T { 
    let cachedArguments: U;
    let cachedReturn: T;
    return (...args: U) => {
        const currentArguments = args;
        if (!isArrayEqual(currentArguments, cachedArguments)) { 
            cachedArguments = currentArguments;
            cachedReturn = fn.apply(null, args);
        }
        return cachedReturn;
    }
}

// Check is 2 arrays equals each other ( simple cases, todo.. )
function isArrayEqual(arr1: any[], arr2: any[] = []): boolean { 
    if (arr1.length != arr2.length) {
        return false;
    }
    if (arr1.find((element, i) => element != arr2[i])) { 
        return false;
    }
    return true;
}