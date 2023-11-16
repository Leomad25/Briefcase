export function savePrevPageEstatus($address:string, $pairList?:PairItemInterface[]): void {

}

export function getPrevPageEstatus(): PrevPagInterface {
    const localStorageAddress: string|null = localStorage.getItem('prevPage.address');
    const localStoragePairList: string|null = localStorage.getItem('prevPage.pairList');

    let pair:string[] = [];
    if (localStoragePairList != null) {
        localStoragePairList.split('|');
    }

    let responsive: PrevPagInterface = {
        address: localStorageAddress ? localStorageAddress : '',
        pairList: []
    };
    
    return responsive;
}

export interface PrevPagInterface {
    address: string;
    pairList: PairItemInterface[];
}

export interface PairItemInterface {
    key:string;
    value:string;
}