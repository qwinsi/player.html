/* IMPORTANT!!!

  If you would like support for opening directly from the cloud, you must supply the appropriate keys
  in the `app.options.cloud` below AND register your app with Google and/or Microsoft.

  OneDrive Docs: https://docs.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/app-registration?view=odsp-graph-online
  GDrive Docs: https://developers.google.com/drive/api/v3/picker

*/
const global = window;
global.app = {
    options: {
        cloud: {
            onedrive: {
                clientId: '98a393da-bb36-4061-82df-f847ed49ce8a'
            },
            gdrive: {
                developerKey: 'AIzaSyASwr9ZqtB_DGszfJ7E1nIq-SRO44rsXdc', // Browser API key obtained from the Google API Console.
                clientId: '350482528905-uplflng9avfo3p5sghlgr0g059r04v0b.apps.googleusercontent.com', // Client ID obtained from the Google API Console. Replace with your own Client ID.
                appId: '350482528905' // console.developers.google.com - 'Project number' under 'IAM & Admin' > 'Settings'
            }
        },
        thumbnails: {
            timestamps: [0.005, 0.01, 0.015], // How far into the clip (relatively) should it grab the thumbnail from (e.g. 0.10 = 10%)
            size: 320, // Maximum width of thumbnails. Setting this smaller will save localStorage space.
            mime: {
                type: 'image/webp',
                quality: 0.2
            },
            cache: true, // Should thumbnails be written and read from localStorage cache
            resizeQuality: 'high', // `<canvas>` resize quality
            concurrency: 1 // How many thumbnails should it generate at a time. WARNING: Be careful with this setting. Setting it higher than 1 can swamp your HTTP server with thumbnail requests and cause playback issues.
        },
        updateRate: { // Limit UI update rates in ms
            timeupdate: 1000 / 5, // media playback `timeupdate` events
            trickHover: 1000 / 10 // Seeking on trickplay hover overlay
        }
    },
    links: [],
    metadata: {}
};
