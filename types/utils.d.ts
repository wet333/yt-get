declare module 'utils' {
    function sanitizeFilename(filename: string): string;
    function createOutputFolder(folderName: string): Promise<void>;
}