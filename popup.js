const connectBtn = document.getElementById('connectBtn');
const dashboardBtn = document.getElementById('dashboardBtn');
const statusIndicator = document.getElementById('statusIndicator');
const statusText = document.getElementById('statusText');
const ipInfo = document.getElementById('ipInfo');

const init = () => {
  chrome.storage.local.get(['vpnStatus', 'currentServer'], (result) => {
    updateUI(result.vpnStatus || false, result.currentServer || 'US');
  });
};

const toggleConnection = () => {
  chrome.storage.local.get(['vpnStatus', 'currentServer'], (result) => {
    const newStatus = !result.vpnStatus;
    chrome.storage.local.set({ vpnStatus: newStatus }, () => {
      updateUI(newStatus, result.currentServer || 'US');
    });
  });
};

const updateUI = (isConnected, server) => {
  if (isConnected) {
    statusIndicator.classList.add('active');
    statusText.textContent = `Connected (${server})`;
    connectBtn.classList.add('connected');
    connectBtn.textContent = 'Disconnect VPN';
  } else {
    statusIndicator.classList.remove('active');
    statusText.textContent = 'Disconnected';
    connectBtn.classList.remove('connected');
    connectBtn.textContent = 'Connect VPN';
  }
  fetchIP();
};

const fetchIP = () => {
  fetch('https://api.ipify.org?format=json')
    .then(r => r.json())
    .then(data => { ipInfo.textContent = `IP: ${data.ip}`; })
    .catch(() => { ipInfo.textContent = 'IP: Not available'; });
};

connectBtn.addEventListener('click', toggleConnection);
dashboardBtn.addEventListener('click', () => chrome.tabs.create({ url: 'dashboard.html' }));

init();
