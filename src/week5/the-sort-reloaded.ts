declare global {
    interface Array<T> {
        sortReloaded(sortType?: SortType): Comparator<T>;
    }
}

export type Comparator<T = number> = (a: T, b: T) => number;

export enum SortType {
    Asc = 'asc',
    Desc = 'desc',
}

// eslint-disable-next-line no-extend-native,@typescript-eslint/no-explicit-any
(Array.prototype as any).sortReloaded = function sortReloaded(
    sortType = SortType.Asc,
) {
    if (![SortType.Asc, SortType.Desc].includes(sortType)) {
        return false;
    }

    const array = Array.from(this);
    const comparator: Comparator<number> =
        sortType === SortType.Asc ? (a, b) => a - b : (a, b) => b - a;

    return array.sort(comparator);
};
