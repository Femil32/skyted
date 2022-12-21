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
      <div className="xl:py-8 py-14">
        <section className="flex md:flex-nowrap flex-wrap xl:gap-24 lg:gap-16 md:gap-12 gap-10 section-container">
          <form action="" className="blur-bg flex-1 lg:p-10 p-7 rounded-2xl flex flex-col gap-6">
            <div>
              <Input type="text" placeholder="Name" title="name" className="w-full backdrop-blur-lg bg-white/20 lg:placeholder:text-base placeholder:text-sm" />
            </div>
            <div>
              <Input type="email" placeholder="Email" title="email" className="w-full backdrop-blur-lg bg-white/20 lg:placeholder:text-base placeholder:text-sm" />
            </div>
            <div>
              <TextArea placeholder="Message" name="message" className="w-full backdrop-blur-lg bg-white/20 lg:placeholder:text-base placeholder:text-sm resize-none" rows={5} />
            </div>
            <div className="md:mt-3 mt-0">
              <button type="submit" className="lg:px-12 px-10 rounded-xl lg:py-3 py-2.5 md:text-base text-sm bg-twitter/90 relative">Submit</button>
            </div>
          </form>
          <div className="flex-1 text-black flex items-stretch flex-col justify-between">
            <div className="md:mb-0 mb-5">
              <PageHeader title="Contact" className="text-black" />
              <h6>Our friendly team would love to here from you!</h6>
            </div>
            <div className="md:space-y-8 space-y-5">
              <div className="bg-gradient-radial from-white to-cyan-100 lg:px-10 px-6 py-4 lg:py-8 rounded-xl lg:h-36 h-32 flex justify-center flex-col gap-2">
                <h4 className="red-header  lg:text-lg md:text-base text-sm">Business Location</h4>
                <address className="text-sm lg:text-base">
                  B612 – Toulouse Aerospace Innovation
                  {" "}
                  <br />
                  {" "}
                  ParkToulouse, France
                </address>
              </div>
              <div className="bg-gradient-radial from-white to-blue-100 lg:px-10 px-6 py-4 lg:py-8 rounded-xl lg:h-36 h-32 flex justify-center flex-col gap-2">
                <h4 className="red-header lg:text-lg md:text-base text-sm">You can email contact on</h4>
                <a href="mailto:skypted.puricare@contact.in" className="text-sm lg:text-base">skypted.puricare@contact.in</a>
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
