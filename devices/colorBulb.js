export default {
  name: "Yeelight Bulb (Color)",
  type: "light",
  actions: {
    toggle: (data, updateData, extra, log) => {
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
    status: (data, updateData, extra) => {},
    brightness: (data, updateData, extra) => {}
  },
  discover: () => {}
};

// device[id][actions][action];
// device[id][state][key];

// DeviceId

driver.devices[code][actions][action];
