# VPN Connect for Chromebook

A clean, simple VPN extension for Chrome and Chromebook with instant connection and dashboard management.

## Features

- ✅ One-click VPN toggle (popup)
- ✅ Full dashboard in new tab
- ✅ Multiple servers (US, UK, Germany, Japan)
- ✅ Real-time IP display
- ✅ Connection time tracking
- ✅ Beautiful UI optimized for Chromebook

---

## 📥 Installation Guide

### Step 1: Prepare the Extension Files

Make sure you have these files downloaded/ready:
- `manifest.json`
- `popup.html` & `popup.js`
- `dashboard.html` & `dashboard.js`
- `background.js`

All files must be in the **same folder**.

### Step 2: Open Chrome Extensions Page

1. Open **Chrome Browser**
2. In the address bar, type: `chrome://extensions/`
3. Press **Enter**

You should see a page with "Extensions" at the top.

### Step 3: Enable Developer Mode

Look for the **"Developer mode"** toggle in the **top right corner**.

- Click the toggle to turn it **ON** (it will turn blue)
- You'll see new buttons appear: "Load unpacked", "Pack extension", "Update"

### Step 4: Load the Extension

1. Click the **"Load unpacked"** button
2. A file browser window will open
3. Navigate to the folder containing your VPN extension files
4. Select that folder and click **"Select"** or **"Open"**

✅ **The extension is now installed!** You should see "VPN Connect" in your extensions list.

### Step 5: Pin the Extension (Optional but Recommended)

1. Look for the **puzzle icon** in the top right corner of Chrome (near address bar)
2. Click it
3. Find "VPN Connect"
4. Click the **pin icon** next to it

Now the VPN icon will always be visible on your toolbar!

---

## 🚀 How to Use

### Quick Connect (from popup)

1. **Click the VPN icon** in your Chrome toolbar
2. A small popup appears showing connection status
3. Click **"Connect VPN"** to connect
4. The button changes to **"Disconnect VPN"** when connected
5. Your IP address is displayed at the bottom

### Open Full Dashboard (in new tab)

1. Click the VPN icon in toolbar
2. Click **"Open Dashboard"** button (📊)
3. A **new tab opens** with the full dashboard
4. Here you can:
   - See detailed connection info
   - Switch between servers (US, UK, Germany, Japan)
   - View how long you've been connected
   - Monitor your public IP

### Change VPN Server

1. Open the dashboard (click VPN icon → Open Dashboard)
2. Look for "Select Server" section with 4 buttons
3. Click your desired server: 🇺🇸 US, 🇬🇧 UK, 🇩🇪 Germany, 🇯🇵 Japan
4. Selected server is highlighted in purple
5. If connected, it will reconnect to the new server

### Check Connection Status

**From Popup:**
- Green dot = Connected
- Red dot = Disconnected
- Shows current server and your IP

**From Dashboard:**
- 🟢 Connected / 🔴 Disconnected
- Current server name
- Public IP address
- Connected time (minutes and seconds)

---

## 📱 Troubleshooting

### Extension doesn't appear in toolbar?
- Refresh the extensions page (`chrome://extensions/`)
- Make sure Developer mode is still enabled

### Can't load unpacked extension?
- Check all 6 files are in the same folder
- Make sure `manifest.json` is present
- Restart Chrome and try again

### Dashboard won't open?
- Make sure popup is visible when you click "Open Dashboard"
- It should open in a new tab automatically
- Check if pop-ups are blocked for this extension

### Connection status not updating?
- Refresh the dashboard page
- The status updates every 5 seconds automatically

### IP address shows "Not available"?
- Check your internet connection
- The extension fetches your IP from api.ipify.org
- Wait 30 seconds for it to retry

---

## ⚙️ How It Works

The extension uses **Chrome's Storage API** to manage:
- **Connection status** - Whether VPN is on/off
- **Selected server** - Which location you chose
- **Connection time** - When you connected

**Your data is stored locally** on your device and synced across your Chrome profile if you're signed in.

---

## 📋 File Breakdown

| File | Purpose |
|------|---------|
| `manifest.json` | Extension configuration & permissions |
| `popup.html` | Quick access popup interface |
| `popup.js` | Popup functionality |
| `dashboard.html` | Full management page (new tab) |
| `dashboard.js` | Dashboard functionality |
| `background.js` | VPN service worker (runs in background) |

---

## 🔐 Permissions Explained

- **`tabs`** - Allows opening the dashboard in a new tab
- **`storage`** - Saves your VPN settings and preferences
- **`<all_urls>`** - Can work on any website you visit

---

## 💡 Tips & Tricks

✨ **Tip 1:** Your VPN settings persist - if you close Chrome, your settings stay saved

✨ **Tip 2:** You can switch servers while connected - it reconnects instantly

✨ **Tip 3:** The dashboard updates every 5 seconds automatically

✨ **Tip 4:** Keep the popup pinned to toolbar for fastest access

---

## 🔄 Uninstall

To remove the extension:
1. Go to `chrome://extensions/`
2. Find "VPN Connect"
3. Click the red trash icon

---

## 📊 Status Indicators

| Indicator | Meaning |
|-----------|---------|
| 🟢 Green dot | Connected to VPN |
| 🔴 Red dot | Not connected |
| 🇺🇸 Flag icons | Available server locations |
| ⏱️ Timer | How long you've been connected |

---

## ❓ FAQ

**Q: Is this a real VPN?**
A: This is a demo/control panel. For a fully functional VPN, you'd need to integrate with actual VPN protocols (OpenVPN, WireGuard, etc.)

**Q: Will it encrypt my traffic?**
A: This extension manages VPN connections and shows status. You'd need to connect to a real VPN provider.

**Q: Can I add more servers?**
A: Yes! Edit the `background.js` file and add more servers to the `VPN.servers` array.

**Q: Does it work on other browsers?**
A: This is specifically for Chrome and Chromebook. It won't work on Firefox or Safari.
