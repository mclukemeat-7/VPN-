<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>VPN Dashboard - Chromebook</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .dashboard {
      background: white;
      border-radius: 15px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 600px;
      width: 100%;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px 30px;
      text-align: center;
    }
    .header h1 {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .content {
      padding: 40px 30px;
    }
    .status-box, .info-box {
      border-radius: 10px;
      padding: 25px;
      margin-bottom: 30px;
    }
    .status-box {
      background: #f8f9fa;
      border-left: 5px solid #667eea;
    }
    .status-box h2 {
      color: #333;
      font-size: 18px;
      margin-bottom: 15px;
    }
    .status-item {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #e9ecef;
    }
    .status-item:last-child {
      border-bottom: none;
    }
    .status-label {
      color: #666;
      font-weight: 500;
    }
    .status-value {
      color: #333;
      font-weight: bold;
    }
    .server-section h2 {
      color: #333;
      font-size: 18px;
      margin-bottom: 15px;
    }
    .server-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 30px;
    }
    .server-btn {
      padding: 15px;
      border: 2px solid #ddd;
      border-radius: 8px;
      background: white;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.3s;
    }
    .server-btn:hover {
      border-color: #667eea;
      color: #667eea;
    }
    .server-btn.active {
      background: #667eea;
      color: white;
      border-color: #667eea;
    }
    .control-btn {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
      margin-bottom: 20px;
    }
    .btn-connect {
      background: #51cf66;
      color: white;
    }
    .btn-connect:hover {
      background: #40c057;
    }
    .btn-connect.connected {
      background: #ff6b6b;
    }
    .btn-connect.connected:hover {
      background: #fa5252;
    }
    .info-box {
      background: #e7f5ff;
      border-left: 4px solid #4dabf7;
      color: #1971c2;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="dashboard">
    <div class="header">
      <h1>🔒 VPN Dashboard</h1>
    </div>
    
    <div class="content">
      <div class="status-box">
        <h2>Connection Status</h2>
        <div class="status-item">
          <span class="status-label">Status:</span>
          <span class="status-value" id="connectionStatus">Disconnected</span>
        </div>
        <div class="status-item">
          <span class="status-label">Current Server:</span>
          <span class="status-value" id="serverName">US</span>
        </div>
        <div class="status-item">
          <span class="status-label">Public IP:</span>
          <span class="status-value" id="publicIP">Loading...</span>
        </div>
        <div class="status-item">
          <span class="status-label">Connected Time:</span>
          <span class="status-value" id="connectedTime">N/A</span>
        </div>
      </div>

      <div class="server-section">
        <h2>Select Server</h2>
        <div class="server-grid">
          <button class="server-btn" data-server="US">🇺🇸 US</button>
          <button class="server-btn" data-server="UK">🇬🇧 UK</button>
          <button class="server-btn" data-server="DE">🇩🇪 Germany</button>
          <button class="server-btn" data-server="JP">🇯🇵 Japan</button>
        </div>
      </div>

      <button class="control-btn btn-connect" id="mainConnectBtn">Connect</button>

      <div class="info-box">
        ℹ️ Your connection is encrypted and secure.
      </div>
    </div>
  </div>

  <script src="dashboard.js"></script>
</body>
</html>
