function getRandomElement3<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

const getRandomElement2 = <T,>(list: T[]): T => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}