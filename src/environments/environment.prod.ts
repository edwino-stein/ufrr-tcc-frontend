export const environment = {
    production: true,
    serverStreamProtocol: 'ws-mpegts',
    serverStreamPort: 8088,
    streamControlUrls: {
        status: '/stream/status',
        start: '/stream/start',
        stop: '/stream/stop'
    },
    defaultUser: 'admin',
    authUrls: {
        login: '/auth/login',
        logout: '/auth/logout'
    }
};
