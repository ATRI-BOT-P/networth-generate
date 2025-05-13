import localforage from 'localforage';

declare global {
    interface Window {
        $localforage: typeof localforage;
    }
}

export {};
