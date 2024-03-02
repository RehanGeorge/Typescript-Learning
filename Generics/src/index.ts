const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;

console.dir(inputEl.value);

const btn = document.querySelector<HTMLButtonElement>('.btn');

function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

// function identity(item: any): any {
//     return item;
// }

function identity<Type>(item: Type): Type {
    return item;
}

identity<string>("Hello");
identity<number>(7);

function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
console.log(getRandomElement<number>([1, 2, 3]));

console.log(getRandomElement([true, false, 3]));

function merge<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}

const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"]});

console.log(merge({ name: "colt" }, { num: 9 }));

interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T) {
    return thing.length * 2;
}

printDoubleLength("hello");
printDoubleLength([1, 2, 3]);

function makeEmptyArray<T = number>(): T[] {
    return [];
}

const strings = makeEmptyArray();

const bools = makeEmptyArray<boolean>();

interface Song {
    title: string;
    artist: string;
}
interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class VideoPlaylist {
    public videos: Video[] = [];
}

class SongPlaylist {
    public songs: Song[] = [];
}

class Playlist<T> {
    public queue: T[] = [];
    add(el: T) {
        this.queue.push(el);
    }
}

const songs = new Playlist<Song>()

const videos = new Playlist<Video>()
videos.add({ title: "video1", creator: "colt", resolution: "1080p" });