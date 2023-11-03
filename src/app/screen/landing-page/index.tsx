import utility from "../../../utils/utility";
import Logo from "../../../assets/logo.svg";
import HeroImg from "../../../assets/undraw_Deliveries_2r4y.png";
import Illu1 from "../../../assets/illu1.svg";
import Illu2 from "../../../assets/illu2.svg";
import Fast from "../../../assets/undraw_location_tracking_re_n3ok.svg";
import Wide from "../../../assets/undraw_delivery_address_re_cjca.svg";
import Safety from "../../../assets/undraw_logistics_x-4-dc.svg";

const LandingPage: React.FC = () => {
  return (
    <div className="">
     
      <div
        className="grid grid-cols-1 sm:grid-cols-2 justify-center p-6 sm:p-10 lg:p-20 relative"
        style={{
          backgroundImage: `url(${Illu1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-6xl text-4xl font-groteska-bold uppercase">
            We Deliver excellence
          </h1>
          <p className="lg:text-xl text-sm font-groteska-regular text-gray-600">
            At CrowsKonnect, we're not just delivering packages; we're
            connecting people and priorities. Our platform links swift and
            reliable delivery riders with package senders like you. Experience
            the ease of sending packages effortlessly, with the assurance that
            your items will reach their destination securely and on time.
            Explore a world of convenience with us, where packages find their
            way home.
          </p>
          <a
            href=""
            className="inline-block font-groteska-medium h-12 flex justify-center items-center rounded-md bg-primaryGreen hover:bg-darkGreen duration-500 text-white w-[120px] "
          >
            Learn More
          </a>
        </div>
        <div>
          <img src={HeroImg} alt="" />
        </div>
      </div>
      <div className="mt-20">
        <h1 className="uppercase  text-4xl font-groteska-bold text-center">
          What we do
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-10 xl:gap-20 mt-10 px-10 sm:px-20">
          <div className="flex flex-col gap-4  items-center p-4 xl:p-6 shadow-lg h-[30rem] rounded-md">
            <img src={Fast} alt="" height="200px" width="200px" />
            <h3 className="xl:text-2xl text-lg font-groteska-medium inline-block">
              Efficient Package Delivery
            </h3>
            <p className="font-groteska-regular text-sm text-gray-500">
              Our dedicated delivery riders are committed to ensuring your
              packages reach their destination securely and on time. We provide
              a trusted network of couriers who specialize in quick and safe
              deliveries, so you can rely on us for all your shipping needs.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center p-4 xl:p-6 shadow-lg h-[30rem] rounded-md">
            <img src={Wide} alt="" height="200px" width="200px" />
            <h3 className="xl:text-2xl text-lg font-groteska-medium inline-block">
              Sender-Centric Approach
            </h3>
            <p className="font-groteska-regular text-sm text-gray-500">
              We prioritize your sender experience. Our user-friendly platform
              lets you schedule, track, and manage your deliveries effortlessly.
              Say goodbye to the hassles of traditional shipping. With us, it's
              all about simplicity, convenience, and peace of mind.
            </p>
          </div>
          <div className="flex flex-col gap-4  items-center p-4 xl:p-6 shadow-lg h-[30rem] rounded-md">
            <img src={Safety} alt="" height="300px" width="300px" />
            <h3 className="xl:text-2xl text-lg font-groteska-medium inline-block">
              Empowering Local Couriers
            </h3>
            <p className="font-groteska-regular text-sm text-gray-500">
              We believe in supporting our local communities. By choosing us,
              you're contributing to the livelihoods of local delivery riders.
              We empower these essential workers by providing them with
              opportunities and fair compensation. Together, we're building a
              stronger, more connected neighborhood.
            </p>
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="w-[100%] px-6 sm:px-10 lg:px-20" style={{
          backgroundImage: `url(${Illu1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <h1 className="uppercase  text-4xl font-groteska-bold text-center">
            About Us
          </h1>
          <p className="sm:text-lg text-sm font-groteska-regular text-gray-600  inline-block mt-10">
            At CrowsKonnect, we're more than just a package delivery service -
            we're a community of dedicated individuals passionate about making
            deliveries easier, faster, and more reliable. Our story began with a
            simple idea: to connect people who need to send packages with local
            couriers who can get the job done.
          </p>
          <p className="sm:text-lg text-sm font-groteska-regular text-gray-600  inline-block mt-10">
            Our mission is clear - to simplify package delivery for everyone.
            We're on a quest to revolutionize the way packages move from one
            place to another. Whether you're a sender looking for a hassle-free
            way to ship goods or a courier seeking opportunities to earn, we're
            here to bridge the gap and create a win-win situation.
          </p>
          <h2 className="font-groteska-bold text-2xl inline-block mt-10">
            What Drives Us
          </h2>
          <div className="mt-4 space-y-4">
            <p className="font-groteska-regular sm:text-lg text-sm text-gray-600">
              <span className="font-groteska-bold sm:text-xl text-lg text-black">
                Reliability:
              </span>
              &nbsp;We understand the importance of your packages, and we're
              committed to delivering them securely and on time.
            </p>
            <p className="font-groteska-regular sm:text-lg text-sm text-gray-600">
              <span className="font-groteska-bold sm:text-xl text-lg text-black">
                Community:
              </span>
              &nbsp;We're proud to support local couriers, providing them with
              opportunities to thrive and earn a living.
            </p>
            <p className="font-groteska-regular sm:text-lg text-sm text-gray-600">
              <span className="font-groteska-bold text-xl text-black">
                Innovation:
              </span>
              &nbsp;We're continuously investing in technology to make the
              delivery process smoother, from scheduling to tracking.
            </p>
            <p className="font-groteska-regular sm:text-lg text-sm text-gray-600">
              <span className="font-groteska-bold sm:text-xl text-lg   text-black">
                Customer-Centric:
              </span>
              &nbsp;Your satisfaction is our top priority. We're here to serve
              you and provide top-notch customer support.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="uppercase  text-4xl font-groteska-bold text-center">
          contact us
        </h1>
        <form className="px-4 xl:px-20 my-10 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-groteska-medium">
              Subject
            </label>
            <input
              type="text"
              className="w-full rounded-md bg-none border border-gray-500 p-2 focus:outline-none  focus:border-primaryGreen "
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="subject" className="font-groteska-medium">
              Body
            </label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="w-full rounded-md bg-none border border-gray-500 p-2 focus:outline-none  focus:border-primaryGreen "
            ></textarea>
          </div>
          <div className="mt-4">
            <button className="inline-block font-groteska-medium h-12 flex justify-center items-center rounded-md bg-primaryGreen hover:bg-darkGreen duration-500 text-white w-[120px] ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default utility.routeData("/", <LandingPage />, "landing-page");
