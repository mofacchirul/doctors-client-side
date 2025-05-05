import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Reviwe = () => {
     useEffect(() => {
       AOS.init({
         duration: 2000, // animation duration in ms
         once: true, // animation only once
       });
     }, []);
    return (
        <div className="py-8  max-w-6xl space-y-2 mx-auto lg:py-12 px-4 md:px-12">
            <div className="w-2/3 text-center mx-auto ">
                <h1 className='text-4xl md:text-5xl font-bold'>
                Patient testimonials
                </h1>
                <p>
                It’s always the word of mouth that’s the best advice. Here are some of our…
                </p>
            </div>




           <div className="lg:flex justify-between items-center gap-2 py-4">



            <div  data-aos="fade-right" className="w-full">
                <img src="https://i.ibb.co.com/MyyL5RTj/header-img.png" alt="" />
            </div>
            <div className="w-full">
            <div className="space-y-4">
  <div>
    <div
      tabIndex={0}
      className="collapse collapse-open bg-base-100 border-base-300 border"
    >
      <div className="collapse-title font-semibold">
        How can I book an appointment with a doctor?
      </div>
      <div className="collapse-content text-sm">
        You can book an appointment by logging into your account, selecting your preferred doctor, and choosing an available time slot. Confirmation will be sent via email.
      </div>
    </div>
  </div>

  <div
    tabIndex={0}
    className="collapse collapse-arrow bg-base-100 border-base-300 border"
  >
    <div className="collapse-title font-semibold">
      What documents do I need for my first visit?
    </div>
    <div className="collapse-content text-sm">
      Please bring a valid ID, any previous medical records, prescriptions, and your insurance details (if applicable).
    </div>
  </div>

  <div
    tabIndex={0}
    className="collapse collapse-arrow bg-base-100 border-base-300 border"
  >
    <div className="collapse-title font-semibold">
      Can I consult with a doctor online?
    </div>
    <div className="collapse-content text-sm">
      Yes, we support online consultations through our secure video platform. You can choose the "Online Appointment" option while booking.
    </div>
  </div>

  <div
    tabIndex={0}
    className="collapse collapse-arrow bg-base-100 border-base-300 border"
  >
    <div className="collapse-title font-semibold">
      How can I cancel or reschedule my appointment?
    </div>
    <div className="collapse-content text-sm">
      You can cancel or reschedule your appointment from your dashboard up to 24 hours in advance. For urgent help, contact our support team.
    </div>
  </div>
</div>

            </div>
           </div>
        </div>
    );
};

export default Reviwe;