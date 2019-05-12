import { Discover } from 'yeelight-awesome';

export default async deviceCode => {
  let outputDevices;
  const yeeDiscover = new Discover();

  try {
    const devices = await yeeDiscover.start();

    if (devices && devices.length > 0) {
      outputDevices = devices.reduce((result, device) => {
        // TODO: Info available on devices.json should not be filled by
        // driver. codeName also is available in higher stack.
        if (deviceCode === 'color-bulb' && device.model === 'color') {
          result.push({
            name: `Yeelight Bulb(${device.model})`,
            type: 'light',
            // codeName: deviceCode,
            actions: ['toggle'],
            data: device,
          });
        }
        return result;
      }, []);
    }
  } catch (err) {
    console.error(err);
  }

  yeeDiscover.destroy();

  return outputDevices;
};
