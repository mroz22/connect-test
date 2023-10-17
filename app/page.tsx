'use client';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <button onClick={() => {
        // @ts-expect-error
        window.navigator.usb.requestDevice({
          filters: [],
        });
      }}> webusb pairing with host</button>

      <button onClick={() => {
        // @ts-expect-error
        console.log('trezorConnect', window.TrezorConnect);
        // @ts-expect-error
        TrezorConnect.init({
          manifest: {
            email: 'meow',
            appUrl: 'meow',
          },
          transport: ['WebUsbTransport'],
          transports: ['WebUsbTransport'],
        // @ts-expect-error
        }).then((res) => {
          console.log('res init', res);
        // @ts-expect-error
          TrezorConnect.getAddress({ 
            path: "m/49'/0'/0'/0/0",
        // @ts-expect-error
          }).then((res2) => {
            console.log('res2', res2);
          })
        }
      );
      }}> TrezorConnect.getAddress</button>
      

       
    </main>
  )
}
