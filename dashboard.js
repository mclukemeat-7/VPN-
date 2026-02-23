const els = {
  status: document.getElementById('connectionStatus'),
  server: document.getElementById('serverName'),
  ip: document.getElementById('publicIP'),
  time: document.getElementById('connectedTime'),
  btn: document.getElementById('mainConnectBtn'),
  servers: document.querySelectorAll('.server-btn')
};

const Dashboard = {
  refresh: () => {
    chrome.storage.local.get(['vpnStatus', 'currentServer', 'connectedTime'], (r) => {
      const connected = r.vpnStatus || false;
      const server = r.currentServer || 'US';
      
      els.status.textContent = connected ? '🟢 Connected' : '🔴 Disconnected';
      els.status.style.color = connected ? '#51cf66' : '#ff6b6b';
      els.btn.classList.toggle('connected', connected);
      els.btn.textContent = connected ? 'Disconnect' : 'Connect';
      els.server.textContent = server;
      
      if (connected && r.connectedTime) {
        const elapsed = Math.floor((Date.now() - new Date(r.connectedTime)) / 1000);
        els.time.textContent = `${Math.floor(elapsed / 60)}m ${elapsed % 60}s`;
      } else {
        els.time.textContent = 'N/A';
      }
      
      els.servers.forEach(btn => btn.classList.toggle('active', btn.dataset.server === server));
    });
  },
  
  fetchIP: () => {
    fetch('https://api.ipify.org?format=json')
      .then(r => r.json())
      .then(d => { els.ip.textContent = d.ip; })
      .catch(() => { els.ip.textContent = 'Not available'; });
  }
};

els.btn.addEventListener('click', () => {
  chrome.storage.local.get(['vpnStatus'], (r) => {
    chrome.storage.local.set({ vpnStatus: !r.vpnStatus }, Dashboard.refresh);
  });
});

els.servers.forEach(btn => {
  btn.addEventListener('click', () => {
    chrome.storage.local.set({ currentServer: btn.dataset.server }, Dashboard.refresh);
  });
});

Dashboard.refresh();
Dashboard.fetchIP();
setInterval(Dashboard.refresh, 5000);
setInterval(Dashboard.fetchIP, 30000);
