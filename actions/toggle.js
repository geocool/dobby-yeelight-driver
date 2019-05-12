import { Yeelight } from 'yeelight-awesome';

export default device => {
  const deviceInfo = device.driverDevice.data;
  console.debug(`>>>>>>>> ${deviceInfo.host} ${deviceInfo.port}`);
  const yeelight = new Yeelight({ lightIp: deviceInfo.host, lightPort: deviceInfo.port });
  yeelight.connect().then(l => {
    l.toggle().then(() => {
      console.log('toggled');
      l.disconnect();
    });
  });
};
