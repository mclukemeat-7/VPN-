const VPN = {
  servers: [
    { name: 'US', country: 'United States' },
    { name: 'UK', country: 'United Kingdom' },
    { name: 'DE', country: 'Germany' },
    { name: 'JP', country: 'Japan' }
  ],
  
  init: () => {
    chrome.storage.local.set({
      vpnStatus: false,
      currentServer: 'US',
      connectedTime: null
    });
  },
  
  connect: () => {
    chrome.storage.local.set({
      vpnStatus: true,
      connectedTime: new Date().toISOString()
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
  if (req.action === 'toggleVPN') req.status ? VPN.connect() : VPN.disconnect();
  if (req.action === 'changeServer') VPN.changeServer(req.server);
});
