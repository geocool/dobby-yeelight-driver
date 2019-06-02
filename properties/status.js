export default ({device, property}) => {
  const {deviceCode, data} = device.driverDevice;

  if (deviceCode === "color-bulb") {
      const {status, bright} = data;
      
      switch (property) {
          case "status": return status;
          case "brightness": return bright;
          default: throw new Error(`Not implemented property`);
      }
  }

  throw new Error(`Device does not support properties`);
};
