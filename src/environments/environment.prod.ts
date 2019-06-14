export const environment = {
    production: true,
    serverStreamUrl: 'ws://localhost:8888',
    serverStreamProtocol: 'ws-mpegts',
    serverStreamPort: 8088,
    streamControlUrls: {
        status: '/stream/status',
        start: '/stream/start',
        stop: '/stream/stop'
    }
};
