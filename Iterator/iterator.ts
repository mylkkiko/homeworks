interface ITrack {
    name: string;
    singer: string;
    duration: number;
    numberOfAuditions: number;
    addedAt: Date;
}

interface IteratorRes<T> {
    value?: T;
    done: boolean;
}

class Track implements ITrack {
    public name: string;
    public singer: string;
    public duration: number;
    public numberOfAuditions: number;
    public addedAt: Date;

    constructor(
        name: string, 
        singer: string, 
        duration: number,
        numberOfAuditions: number, 
        addedAt?: Date
    ) {
        this.name = name;
        this.singer = singer;
        this.duration = duration;
        this.numberOfAuditions = numberOfAuditions;
        this.addedAt = addedAt || new Date();
    }
}

abstract class PlaylistIterator {
    protected items: Track[];
    protected index: number = 0;

    constructor(collection: Playlist) {
        this.items = [...collection.getTracks()];
    }

    protected hasNext(): boolean {
        return this.index < this.items.length;
    }

    public next(): IteratorRes<Track> {
        if(this.hasNext()) {
            return {
                value: this.items[this.index++],
                done: false
            };
        }
        return {done: true};
    }
}

class DateAddedIterator extends PlaylistIterator {
    constructor(collection: Playlist) {
        super(collection);
        this.sortDate();
    }
    private sortDate(): void {
        this.items.sort((a, b) => a.addedAt.getTime() - b.addedAt.getTime());
    }
}

class DurationIterator extends PlaylistIterator {
    constructor(collection: Playlist) {
        super(collection);
        this.sortDuration();
    }
    private sortDuration(): void {
        this.items.sort((a, b) => a.duration - b.duration);
    }
}

class PopularityIterator extends PlaylistIterator {
    constructor(collection: Playlist) {
        super(collection);
        this.sortPopularity();
    }
    private sortPopularity(): void {
        this.items.sort((a, b) => a.numberOfAuditions - b.numberOfAuditions);
    }
}

class Playlist {
    private tracks: Track[] = [];
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public addTrack(track: Track): void {
        this.tracks.push(track);
    }

    public getTracks(): Track[] {
        return this.tracks;
    }

    public getIteratorByDate(): DateAddedIterator{
        return new DateAddedIterator(this);
    }

    public getIteratorByDuration(): DurationIterator{
        return new DurationIterator(this);
    }

    public getIteratorByPopularity(): PopularityIterator{
        return new PopularityIterator(this);
    }
}

function displayIteratorResults<T> (
    name: string,
    iterator: { next(): { value?: T; done: boolean } },
    formatFn: (item: T) => string
): void {
    console.log(`\n--- ${name} ---`);
    let result = iterator.next();

    while(!result.done) {
        if(result.value) {
            console.log(formatFn(result.value));
        }
        result = iterator.next();
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
    myPlaylist.getIteratorByDate(), 
    (t: Track) => `[${t.addedAt.toLocaleDateString('ru-RU')}] ${t.singer} - ${t.name}`
);

displayIteratorResults(
    "Сортировка по длительности (по возрастанию)", 
    myPlaylist.getIteratorByDuration(), 
    (t: Track) => `${t.duration} сек. | ${t.name} (${t.singer})`
);

displayIteratorResults(
    "Сортировка по популярности (от менее популярных)", 
    myPlaylist.getIteratorByPopularity(), 
    (t: Track) => `${t.numberOfAuditions} прослушиваний | ${t.name}`
);
