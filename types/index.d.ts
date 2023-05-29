declare module 'yt-get' {
    function downloadPlaylist(playlistURL: string): Promise<void>;
    function downloadVideo(videoURL: string): Promise<void>;
    function downloadVideoAsBase64(videoURL: string): Promise<string>;
}