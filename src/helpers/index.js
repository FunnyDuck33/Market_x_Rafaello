export function sleep(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });
}

export function updateStorage(data) {
    const storageString = localStorage.getItem('storage');

    let storage = {};

    if (!!storageString) {
        storage = JSON.parse(storageString);
    }

    localStorage.setItem('storage', JSON.stringify({
        ...storage,
        lastDate: new Date().getUTCDate(),
        ...data
    }));
}

export function getStorage() {
    const storageString = localStorage.getItem('storage');

    let storage = {
        contentId: undefined,
        activeIndex: undefined,
        lastDate: null
    };

    if (!!storageString) {
        storage = JSON.parse(storageString);
    }

    return storage;
}

export function resetStorageIfNecessary() {
    const {lastDate} = getStorage();
    const currentDate = new Date().getUTCDate();

    if (lastDate !== currentDate) {
        updateStorage({
            contentId: undefined,
            activeIndex: undefined,
            lastDate: null
        })
    }
}
