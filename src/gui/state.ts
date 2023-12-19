const useState = (defaultValue: any, callback: (value: any) => any) => {
    let value = defaultValue;

    return (setter: (cvalue: any) => void) => {
        value = setter(value);
        callback(value);
    }
}

export { useState };