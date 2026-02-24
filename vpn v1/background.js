    const VPN = {
    servers: [
        { name: 'US-CA', country: 'California, USA' },
        { name: 'US-NY', country: 'New York, USA' },
        { name: 'US-TX', country: 'Texas, USA' },
        { name: 'US-FL', country: 'Florida, USA' },
        { name: 'US-IL', country: 'Illinois, USA' },
        { name: 'US-PA', country: 'Pennsylvania, USA' },
        { name: 'US-OH', country: 'Ohio, USA' },
        { name: 'US-GA', country: 'Georgia, USA' },
        { name: 'US-NC', country: 'North Carolina, USA' },
        { name: 'US-MI', country: 'Michigan, USA' },
        { name: 'US-CO', country: 'Colorado, USA' },
        { name: 'US-WA', country: 'Washington, USA' },
        { name: 'US-OR', country: 'Oregon, USA' },
        { name: 'US-VA', country: 'Virginia, USA' },
        { name: 'US-MA', country: 'Massachusetts, USA' },
        { name: 'CA', country: 'Canada' },
        { name: 'UK', country: 'United Kingdom' },
        { name: 'DE', country: 'Germany' },
        { name: 'FR', country: 'France' },
        { name: 'NL', country: 'Netherlands' },
        { name: 'ES', country: 'Spain' },
        { name: 'IT', country: 'Italy' },
        { name: 'SE', country: 'Sweden' },
        { name: 'CH', country: 'Switzerland' },
        { name: 'BR', country: 'Brazil' },
        { name: 'MX', country: 'Mexico' },
        { name: 'JP', country: 'Japan' },
        { name: 'KR', country: 'South Korea' },
        { name: 'SG', country: 'Singapore' },
        { name: 'HK', country: 'Hong Kong' },
        { name: 'TH', country: 'Thailand' },
        { name: 'VN', country: 'Vietnam' },
        { name: 'IN', country: 'India' },
        { name: 'AU', country: 'Australia' },
        { name: 'NZ', country: 'New Zealand' },
        { name: 'AE', country: 'United Arab Emirates' },
        { name: 'ZA', country: 'South Africa' }
    ],
    
    init: () => {
        chrome.storage.local.set({
            vpnStatus: false,
            currentServer: 'US',
            connectedTime: null,
            lastConnectTime: 0
        });
    },
    
    connect: () => {
        const now = Date.now();
        chrome.storage.local.set({
            vpnStatus: true,
            connectedTime: new Date().toISOString(),
            lastConnectTime: now
        });
    },
    
    disconnect: () => {
        chrome.storage.local.set({
            vpnStatus: false,
            connectedTime: null
        });
    },
    
    changeServer: (serverName) => {
        chrome.storage.local.set({ currentServer: serverName });
    }
    };

    chrome.runtime.onInstalled.addListener(VPN.init);

    chrome.runtime.onMessage.addListener((req, sender, send) => {
        if (req.action === 'toggleVPN') {
            const newStatus = req.status;
            if (newStatus) {
                VPN.connect();
            } else {
                VPN.disconnect();
            }
            send({ success: true, status: newStatus });
        }
        if (req.action === 'changeServer') {
            VPN.changeServer(req.server);
            send({ success: true, server: req.server });
        }
    });
