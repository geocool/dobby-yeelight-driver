const Yeelight = require("yeelight-awesome");
const Discover = Yeelight.Discover;

module.exports = {
  name: "Yeelight Bulb (Color)",
  type: "light",
  actions: {
    toggle: async ({ data }) => {
      const yee = new Yeelight.Yeelight({
        lightIp: data.host,
        lightPort: data.port
      });

      try {
        const device = await yee.connect();
        await device.toggle();
        device.disconnect();
      } catch (error) {
        // TODO: Log
        console.log(error);
        // log.error(error);
      }
    }
  },
  state: {
    status: ({ data, updateData, extra, log }) => {},
    brightness: ({ data, updateData, extra, log }) => {}
  },
  discover: async ({ createDeviceEntry, onCancel, log }) => {
    const yeeDiscover = new Discover();

    try {
      const devices = await yeeDiscover.start();
      if (devices && devices.length > 0) {
        devices.forEach(device => {
          createDeviceEntry(device);
        });
      }
    } catch (error) {
      // TODO: Log
      console.log(error);
      // log.error(error);
    }

    yeeDiscover.destroy();
  }
};

// device[id][actions][action];
// device[id][state][key];

// DeviceId

// driver.devices[code][actions][action];
