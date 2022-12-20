import React from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";
import { Input, PageHeader, TextArea } from "../components/Micro";

// const mapStyles = {
//   width: "100%",
//   height: "100%",
// };

function Contact() {
  return (
    <main className="bg-white">
      <div className="py-8">
        <section className="flex gap-24 section-container">
          <form action="" className="blur-bg flex-1 p-10 rounded-2xl flex flex-col gap-6">
            <div>
              <Input type="text" placeholder="Name" title="name" className="w-full backdrop-blur-lg bg-white/20" />
            </div>
            <div>
              <Input type="email" placeholder="Email" title="email" className="w-full backdrop-blur-lg bg-white/20" />
            </div>
            <div>
              <TextArea placeholder="Message" name="message" className="w-full backdrop-blur-lg bg-white/20 resize-none" rows={5} />
            </div>
            <div className="mt-3">
              <button type="submit" className="px-12 rounded-xl py-3 bg-twitter/90 relative">Submit</button>
            </div>
          </form>
          <div className="flex-1 text-black flex items-stretch flex-col justify-between">
            <div>
              <PageHeader title="Contact" className="text-black" />
              <h6>Our friendly team would love to here from you!</h6>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-radial from-white to-cyan-100 px-10 py-8 rounded-xl h-36 flex justify-center flex-col gap-2">
                <h4 className="red-header text-lg">Business Location</h4>
                <address>
                  B612 – Toulouse Aerospace Innovation
                  {" "}
                  <br />
                  {" "}
                  ParkToulouse, France
                </address>
              </div>
              <div className="bg-gradient-radial from-white to-blue-100 px-10 py-8 rounded-xl h-36 flex justify-center flex-col gap-2">
                <h4 className="red-header text-lg">You can email contact on</h4>
                <a href="mailto:skypted.puricare@contact.in">skypted.puricare@contact.in</a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-red-800">
          <div>
            {/* <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={
                {
                  lat: -1.2884,
                  lng: 36.8233,
                }
              }
            /> */}
            Map goes here
          </div>
        </section>
      </div>
    </main>
  );
}

// export default GoogleApiWrapper({
//   apiKey: "YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE",
// })(Contact);
export default Contact;
