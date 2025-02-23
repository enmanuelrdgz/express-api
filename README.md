# Host Info API 🖥️

A simple Express.js API that returns detailed system host information.  

## Features 🌟
- Operating system information
- CPU details (model, cores, speed)
- Memory usage (total, free, used)
- System uptime
- Network information (IP address, hostname)
- System user data

**Example Response:**
```json
{
  "system": {
    "hostname": "server-prod-01",
    "platform": "linux",
    "distro": "Ubuntu 22.04.3 LTS",
    "uptime": "3 days, 5 hours"
  },
  "cpu": {
    "manufacturer": "AMD",
    "brand": "Ryzen 9 5950X",
    "cores": 16,
    "speed": "3.40 GHz"
  },
  "memory": {
    "total": "32.00 GB",
    "free": "8.42 GB",
    "used": "23.58 GB"
  },
  "network": {
    "ip": "192.168.1.100",
    "publicIp": "85.203.154.12"
  }
}