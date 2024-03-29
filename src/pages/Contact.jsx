import React, { useEffect, useState } from "react";
import EmbedMap from "../components/common/EmbedMap";
import Loader from "../components/common/Loader";
// import { Map, GoogleApiWrapper } from "google-maps-react";
import { PageHeader } from "../components/Micro";
import useAxios from "../hooks/useAxios";

// const mapStyles = {
//   width: "100%",
//   height: "100%",
// };

function Contact() {
  const [contactData, setContactData] = useState([]);
  const { error, response, loading } = useAxios({
    url: "contact-pages/1",
    method: "get",
  });

  useEffect(() => {
    console.log(error);
    setContactData(response?.data?.attributes?.ContactPage[0]);
  }, [error, response]);

  return (
    <main className="bg-white">
      {loading ? <Loader />
        : (
          <div className="xl:py-20 py-14">
            <section className="flex md:flex-nowrap flex-wrap xl:gap-24 lg:gap-16 md:gap-12 gap-10 section-container">
              <form
                className="blur-bg flex-1 lg:p-10 p-7 rounded-2xl flex flex-col gap-6"
                autoComplete="off"
                action="https://alumnair.us1.list-manage.com/subscribe/post?u=13691f994582aaf2190f0c8d2&amp;id=b807faeffb&amp;f_id=007233e2f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
              >
                <div className="mc-field-group flex-1">
                  {/* <input type="text" name="FNAME" className="" id="mce-FNAME" /> */}
                  <input
                    name="FNAME"
                    id="mce-FNAME"
                    className="px-5 py-3 border-none outline-none w-full rounded-xl backdrop-blur-lg bg-white/20 lg:placeholder:text-base placeholder:text-sm"
                    placeholder="Name"
                    type="text"
                    title="full_name"
                    required
                  />
                  <span id="mce-FNAME-HELPERTEXT" className="helper_text" />
                </div>
                <div className="mc-field-group flex-1">
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required
                    className="px-5 py-3 border-none outline-none required email w-full rounded-xl backdrop-blur-lg bg-white/20 lg:placeholder:text-base placeholder:text-sm resize-none"
                    placeholder="Email"
                    title="email"
                  />
                  {/* <input type="text" name="MMERGE3" className="" id="mce-MMERGE3" /> */}
                  <span id="mce-MMERGE3-HELPERTEXT" className="helper_text" />
                </div>
                <div className="mc-field-group size1of2 flex-1">
                  <input
                    type="number"
                    name="MMERGE3"
                    id="mce-MMERGE3"
                    className="px-5 py-3 border-none outline-none required email w-full rounded-xl backdrop-blur-lg bg-white/20 lg:placeholder:text-base placeholder:text-sm resize-none"
                    pattern={/(7|8|9)\d{9}/}
                    placeholder="Mobile Number"
                    title="Must be 10 digit"
                    required
                  />
                  <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
                </div>
                <div className="mc-field-group">
                  <textarea
                    type="text"
                    name="MMERGE2"
                    id="mce-MMERGE2"
                    placeholder="Message"
                    className="px-5 py-3 w-full outline-none rounded-xl backdrop-blur-lg bg-white/20 lg:placeholder:text-base placeholder:text-sm resize-none"
                    rows={3}
                  />
                  <span id="mce-MMERGE2-HELPERTEXT" className="helper_text" />
                </div>
                <div className="md:mt-3 mt-0 max-md:mx-auto">
                  <div className="mx-auto">
                    <div hidden="true"><input type="hidden" name="tags" value="5620685" /></div>
                    <div id="mce-responses" className="clear foot">
                      <div className="response" id="mce-error-response" style={{ display: "none" }} />
                      <div className="response" id="mce-success-response" style={{ display: "none" }} />
                    </div>
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_13691f994582aaf2190f0c8d2_b807faeffb" tabIndex="-1" /></div>
                    <button
                      type="submit"
                      className="lg:px-12 px-10 rounded-xl lg:py-3 py-2.5 md:text-base text-sm bg-twitter/90 relative"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <div className="flex-1 text-black flex items-stretch flex-col justify-between">
                <div className="md:mb-0 mb-5">
                  <PageHeader
                    title={contactData?.ContactTitle}
                    className="text-black"
                  />
                  <h6>
                    {contactData?.ContactDetail}
                  </h6>
                </div>
                <div className="md:space-y-8 space-y-5">
                  <div
                    className="bg-gradient-radial from-white to-cyan-100 lg:px-10 px-6 py-4 lg:py-8 rounded-xl lg:h-36 h-32 flex justify-center flex-col gap-2"
                  >
                    <h4 className="red-header  lg:text-lg md:text-base text-sm">
                      {contactData?.BusinessLocation?.Title}
                    </h4>
                    <address className="text-sm lg:text-base max-w-xs">
                      {contactData?.BusinessLocation?.Location}
                    </address>
                  </div>
                  <div
                    className="bg-gradient-radial from-white to-blue-100 lg:px-10 px-6 py-4 lg:py-8 rounded-xl lg:h-36 h-32 flex justify-center flex-col gap-2"
                  >
                    <h4 className="red-header lg:text-lg md:text-base text-sm">
                      {contactData?.ContactEmail?.Title}
                    </h4>
                    <a
                      href={`mailto:${contactData?.ContactEmail?.Emailaddress}`}
                      className="text-sm lg:text-base"
                    >
                      {contactData?.ContactEmail?.Emailaddress}
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full mx-auto flex justify-center items-center my-12">
              <EmbedMap address={contactData?.BusinessLocation?.Location} height={550} />
            </section>
            {/* <section className="bg-red-800">
          <div>
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={
                {
                  lat: -1.2884,
                  lng: 36.8233,
                }
              }
            />
            Map goes here
          </div>
        </section> */}
          </div>
        )}
    </main>
  );
}

// export default GoogleApiWrapper({
//   apiKey: "YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE",
// })(Contact);
export default Contact;
