'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <button onClick={() => {
window.navigator.usb.requestDevice({
  filters: [],
});
      }}> webusb pairing</button>
      <button onClick={() => {
        console.log('trezorConnect', window.TrezorConnect);
        TrezorConnect.init({
          manifest: {
            email: 'meow',
            appUrl: 'meow',
          },
          transport: ['WebUsbTransport'],
          transports: ['WebUsbTransport'],
        }).then((res) => {
          console.log('res init', res);
          TrezorConnect.getAddress({ 
            path: "m/49'/0'/0'/0/0",
          }).then((res2) => {
            console.log('res2', res2);
          })
        }
      );
      }}> get address</button>
      

       
    </main>
  )
}
