const kayName = 'darknessMode';

function setDarknessMode($status: boolean): void {
    localStorage.setItem(kayName, $status.toString());
}

function getDarknessMode(): boolean {
    var result: boolean = false;
    const localSave = localStorage.getItem(kayName)
    localSave ?
        (localStorage.getItem(kayName) == 'true' ? result = true : result = false) :
        setDarknessMode(false);
    return result;
}

export const DarknessMode = { getDarknessMode, setDarknessMode }