interface ITrack {
    name: string;
    singer: string;
    duration: number;
    numberOfAuditions: number;
    addedAt: Date;
}

interface IPlaylist {
    addTrack(track: ITrack): void; 
    getTracks(): ITrack[]; 
    createIterator(iterator: PlaylistIterator): PlaylistIterator; 
}

class Track implements ITrack {
    constructor(
        public readonly name: string,
        public readonly singer: string,
        public readonly duration: number,
        public readonly numberOfAuditions: number,
        public readonly addedAt: Date = new Date()  
    ) {}
}

class Playlist implements IPlaylist {
    private tracks: ITrack[] = []; 
    public name: string; 

    constructor(name: string) {
        this.name = name;
    }

    public addTrack(track: ITrack): void {
        this.tracks.push(track);
    }

    public getTracks(): ITrack[] {
        return [...this.tracks]; 
    }

    public createIterator(iterator: PlaylistIterator): PlaylistIterator {
        return iterator;
    }
}

abstract class PlaylistIterator implements Iterator<ITrack> {
    protected items: ITrack[]; 
    private index: number = 0;  

    constructor(collection: IPlaylist) {
        this.items = collection.getTracks();  
        this.sort();                             
    }

    protected abstract sort(): void;

    private hasNext(): boolean {
        return this.index < this.items.length;
    }

    public next(): IteratorResult<ITrack> {
        if (this.hasNext()) {
            return { value: this.items[this.index++], done: false };
        }
        return { value: undefined, done: true };
    }

    [Symbol.iterator](): Iterator<ITrack> {
        return this;
    }
}

class DateAddedIterator extends PlaylistIterator {
    protected sort(): void {
        this.items.sort((a, b) => a.addedAt.getTime() - b.addedAt.getTime());
    }
}

class DurationIterator extends PlaylistIterator {
    protected sort(): void {
        this.items.sort((a, b) => a.duration - b.duration);
    }
}

class PopularityIterator extends PlaylistIterator {
    protected sort(): void {
        this.items.sort((a, b) => a.numberOfAuditions - b.numberOfAuditions);
    }
}

function displayIteratorResults<ITrack>(
    name: string, 
    iterator: Iterable<ITrack>, 
    formatFn: (item: ITrack) => string 
): void {
    console.log(`\n--- ${name} ---`);
    for (const item of iterator) {      
        console.log(formatFn(item));
    }
}

const track1 = new Track("Bohemian Rhapsody", "Queen", 354, 15000, new Date('1975-10-31'));
const track2 = new Track("Blinding Lights", "The Weeknd", 200, 25000, new Date('2019-11-29'));
const track3 = new Track("Starman", "David Bowie", 250, 8000, new Date('1972-04-28'));
const track4 = new Track("Interstellar Main Theme", "Hans Zimmer", 240, 30000, new Date('2014-11-07'));

const myPlaylist = new Playlist("Студенческий Микс");
myPlaylist.addTrack(track1);
myPlaylist.addTrack(track2);
myPlaylist.addTrack(track3);
myPlaylist.addTrack(track4);

displayIteratorResults(
    "Сортировка по дате (от старых к новым)",
    myPlaylist.createIterator(new DateAddedIterator(myPlaylist)),
    (t: ITrack) => `[${t.addedAt.toLocaleDateString('ru-RU')}] ${t.singer} - ${t.name}`
);

displayIteratorResults(
    "Сортировка по длительности (по возрастанию)",
    myPlaylist.createIterator(new DurationIterator(myPlaylist)),
    (t: ITrack) => `${t.duration} сек. | ${t.name} (${t.singer})`
);

displayIteratorResults(
    "Сортировка по популярности (от менее популярных)",
    myPlaylist.createIterator(new PopularityIterator(myPlaylist)),
    (t: ITrack) => `${t.numberOfAuditions} прослушиваний | ${t.name}`
);