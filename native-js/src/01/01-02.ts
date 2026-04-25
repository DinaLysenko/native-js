export const sum = (a: number, b: number) => {
    return a + b
}

export const multiply = (a: number, b: number) => {
    return a * b
}

export const splitString=(str: string)=>{
    return str.toLowerCase().replace(/[^a-z\s]/gi, "")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
}