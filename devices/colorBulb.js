import Yeelight, { Discover } from 'yeelight-awesome';

export default {
  name: "Yeelight Bulb (Color)",
  type: "light",
  actions: {
    toggle: () => {
      const yee = new Yeelight({ lightIp: data.host, lightPort: data.port });

      try {
        const device = yee.connect();
        await device.toggle();
        device.disconnect();
      } catch(error) {
        log.error(error);
      }
    }
  },
  state: {
    status: ({data, updateData, extra, log}) => {},
    brightness: ({data, updateData, extra, log}) => {}
  },
  discover: ({createDeviceEntry,onCancel,log}) => {
    const yeeDiscover = new Discover();

    try {
      const devices = await yeeDiscover.start();
      if (devices && devices.length > 0) {
        devices.forEach(device => {
          createDeviceEntry(device);
        })
      }
    } catch (error) {
      log.error(error);
    }

    yeeDiscover.destroy();

    return outputDevices;
  }
};

// device[id][actions][action];
// device[id][state][key];

// DeviceId

// driver.devices[code][actions][action];
