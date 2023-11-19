const kayName = 'darknessMode';

function setDarknessMode($status: boolean): void {
    localStorage.setItem(kayName, $status.toString());
}

function getDarknessMode(): boolean {
    var result: boolean = false;
    localStorage.getItem(kayName) == 'true' ?
        result = true : result = false;
    return result;
}

export const DarknessMode = { getDarknessMode, setDarknessMode }