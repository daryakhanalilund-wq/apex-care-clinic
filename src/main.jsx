import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Menu,
  X,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Stethoscope,
  Activity,
  ShieldCheck,
  Clock3,
  MapPin,
  Star,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    text: "Professional medical consultations focused on your everyday health needs.",
  },
  {
    icon: HeartPulse,
    title: "Heart Care",
    text: "Personalized cardiovascular care with modern diagnostic support.",
  },
  {
    icon: Activity,
    title: "Health Checkups",
    text: "Routine health assessments designed to help you stay ahead.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Care",
    text: "Practical guidance and preventive healthcare for every stage of life.",
  },
  {
    icon: Calendar,
    title: "Specialist Visits",
    text: "Convenient appointments for a range of specialist healthcare needs.",
  },
  {
    icon: Clock3,
    title: "Follow-up Care",
    text: "Ongoing support to help monitor your progress and recovery.",
  },
];

const faqs = [
  {
    q: "How can I book an appointment?",
    a: "Choose an appointment time using the booking form or contact the clinic directly.",
  },
  {
    q: "Do I need an appointment for a consultation?",
    a: "Appointments are recommended so our team can give you the best possible experience.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "Bring any relevant medical reports, current medication details, and identification if required.",
  },
  {
    q: "Can I request a follow-up appointment?",
    a: "Yes. Follow-up visits can be arranged with the clinic team after your consultation.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site">
      <div className="demo-banner">
        <span>Demo website — Apex Care Clinic is a fictional brand.</span>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark">
              <HeartPulse size={22} />
            </span>
            <span>
              <strong>Apex Care</strong>
              <small>Clinic</small>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#doctor" onClick={closeMenu}>Doctor</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a className="nav-cta" href="#appointment">
            Book Appointment
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-dot"></span>
                Trusted care. Better living.
              </div>

              <h1>
                Healthcare that puts
                <span> you first.</span>
              </h1>

              <p className="hero-text">
                Modern, compassionate healthcare designed around you,
                your family, and your everyday wellbeing.
              </p>

              <div className="hero-actions">
                <a href="#appointment" className="btn btn-primary">
                  Book an Appointment
                  <ArrowRight size={18} />
                </a>

                <a href="#services" className="btn btn-secondary">
                  Explore Services
                </a>
              </div>

              <div className="hero-trust">
                <div className="avatars">
                  <span>AK</span>
                  <span>SM</span>
                  <span>RA</span>
                </div>
                <div>
                  <div className="stars">
                    <Star size={15} fill="currentColor" />
                    <Star size={15} fill="currentColor" />
                    <Star size={15} fill="currentColor" />
                    <Star size={15} fill="currentColor" />
                    <Star size={15} fill="currentColor" />
                  </div>
                  <small>Loved by our patients</small>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow"></div>

              <div className="doctor-card">
                <div className="doctor-image">
                  <div className="doctor-head"></div>
                  <div className="doctor-body">
                    <div className="coat"></div>
                    <div className="stethoscope"></div>
                  </div>
                </div>

                <div className="doctor-floating-card">
                  <div className="floating-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <strong>Appointments</strong>
                    <span>Available today</span>
                  </div>
                </div>
              </div>

              <div className="experience-card">
                <strong>15+</strong>
                <span>Years of<br />experience</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            <div>
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>
            <div>
              <strong>25k+</strong>
              <span>Patients Served</span>
            </div>
            <div>
              <strong>12</strong>
              <span>Medical Services</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Patient Rating</span>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container split">
            <div className="section-label">ABOUT APEX CARE</div>

            <div>
              <h2>
                Care built around
                <span> real people.</span>
              </h2>

              <p className="large-text">
                At Apex Care Clinic, we believe healthcare should feel
                personal, clear, and reassuring. Our approach combines
                modern medical care with genuine attention to every patient.
              </p>

              <div className="check-list">
                <div>
                  <CheckCircle2 size={20} />
                  <span>Patient-first approach</span>
                </div>
                <div>
                  <CheckCircle2 size={20} />
                  <span>Modern healthcare environment</span>
                </div>
                <div>
                  <CheckCircle2 size={20} />
                  <span>Clear and compassionate communication</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-label">OUR SERVICES</div>
                <h2>
                  Complete care for
                  <span> every stage.</span>
                </h2>
              </div>

              <p>
                From routine checkups to specialist consultations,
                our services are designed around your health goals.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="service-card" key={service.title}>
                    <div className="service-icon">
                      <Icon size={25} />
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.text}</p>

                    <a href="#appointment">
                      Learn more <ArrowRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="doctor-section" id="doctor">
          <div className="container doctor-grid">
            <div className="doctor-profile">
              <div className="profile-photo">
                <div className="profile-head"></div>
                <div className="profile-body"></div>
              </div>

              <div className="profile-info">
                <span>MEDICAL DIRECTOR</span>
                <h3>Dr. Sarah Mitchell</h3>
                <p>MBBS · Family Medicine</p>
              </div>
            </div>

            <div className="doctor-copy">
              <div className="section-label">MEET YOUR DOCTOR</div>
              <h2>
                Experienced care with a
                <span> human touch.</span>
              </h2>

              <p>
                Dr. Sarah Mitchell is a fictional doctor profile created
                for this website demo. The design demonstrates how a
                real clinic can present its medical team, qualifications,
                and patient-focused approach.
              </p>

              <div className="credentials">
                <div>
                  <strong>15+</strong>
                  <span>Years<br />Experience</span>
                </div>

                <div>
                  <strong>25k+</strong>
                  <span>Patients<br />Supported</span>
                </div>

                <div>
                  <strong>4.9</strong>
                  <span>Patient<br />Rating</span>
                </div>
              </div>

              <a href="#appointment" className="text-link">
                Meet the team <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section appointment-section" id="appointment">
          <div className="container appointment-grid">
            <div className="appointment-copy">
              <div className="section-label">BOOK A VISIT</div>

              <h2>
                Your health deserves
                <span> your time.</span>
              </h2>

              <p>
                Schedule a convenient appointment with our care team.
                This demo form shows how online appointment booking can
                look on a clinic website.
              </p>

              <div className="contact-mini">
                <div>
                  <Phone size={20} />
                  <span>+1 (555) 012-3456</span>
                </div>

                <div>
                  <MapPin size={20} />
                  <span>123 Wellness Avenue</span>
                </div>

                <div>
                  <Clock3 size={20} />
                  <span>Mon–Sat · 9:00 AM–6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="appointment-card">
              {submitted ? (
                <div className="success-state">
                  <div className="success-icon">
                    <CheckCircle2 size={42} />
                  </div>
                  <h3>Appointment Request Sent</h3>
                  <p>
                    Thank you. This is a demo confirmation for the
                    Apex Care Clinic website.
                  </p>

                  <button
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3>Request an appointment</h3>
                  <p>Fill in your details and our team will contact you.</p>

                  <div className="form-row">
                    <label>
                      Full Name
                      <input
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </label>

                    <label>
                      Phone
                      <input
                        type="tel"
                        placeholder="+92 300 0000000"
                        required
                      />
                    </label>
                  </div>

                  <div className="form-row">
                    <label>
                      Email
                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </label>

                    <label>
                      Preferred Date
                      <input type="date" required />
                    </label>
                  </div>

                  <label>
                    Service
                    <select defaultValue="" required>
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>General Consultation</option>
                      <option>Health Checkup</option>
                      <option>Heart Care</option>
                      <option>Preventive Care</option>
                      <option>Specialist Visit</option>
                    </select>
                  </label>

                  <label>
                    Message
                    <textarea
                      placeholder="Tell us how we can help..."
                      rows="4"
                    ></textarea>
                  </label>

                  <button className="btn btn-primary form-btn" type="submit">
                    Request Appointment
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container">
            <div className="section-heading centered">
              <div>
                <div className="section-label">WHY APEX CARE</div>
                <h2>
                  Healthcare made
                  <span> simpler.</span>
                </h2>
              </div>

              <p>
                Everything is designed to make your healthcare journey
                easier, clearer, and more comfortable.
              </p>
            </div>

            <div className="why-grid">
              <div className="why-card">
                <ShieldCheck size={28} />
                <h3>Trusted Care</h3>
                <p>
                  A patient-first environment focused on quality,
                  communication, and comfort.
                </p>
              </div>

              <div className="why-card">
                <HeartPulse size={28} />
                <h3>Personal Attention</h3>
                <p>
                  Care plans and consultations designed around
                  individual patient needs.
                </p>
              </div>

              <div className="why-card">
                <Clock3 size={28} />
                <h3>Easy Access</h3>
                <p>
                  Simple online booking and clear contact information
                  whenever you need support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="container">
            <div className="testimonial-card">
              <div className="quote-mark">“</div>

              <p>
                The team made the whole experience feel simple and
                comfortable. I always felt listened to.
              </p>

              <div className="testimonial-person">
                <div className="person-avatar">AM</div>
                <div>
                  <strong>Alex Morgan</strong>
                  <span>Fictional demo testimonial</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div>
              <div className="section-label">FAQ</div>

              <h2>
                Questions?
                <span> We can help.</span>
              </h2>

              <p>
                Common questions patients may have before visiting
                a modern healthcare clinic.
              </p>

              <a href="#contact" className="text-link">
                Contact our team <ArrowRight size={17} />
              </a>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${
                    openFaq === index ? "active" : ""
                  }`}
                  key={faq.q}
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? -1 : index)
                    }
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={19}
                      className="faq-chevron"
                    />
                  </button>

                  {openFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <div className="section-label">GET IN TOUCH</div>
              <h2>
                We're here when
                <span> you need us.</span>
              </h2>
            </div>

            <div className="contact-details">
              <div>
                <Phone size={21} />
                <div>
                  <span>Call us</span>
                  <strong>+1 (555) 012-3456</strong>
                </div>
              </div>

              <div>
                <MapPin size={21} />
                <div>
                  <span>Visit us</span>
                  <strong>123 Wellness Avenue</strong>
                </div>
              </div>

              <div>
                <MessageCircle size={21} />
                <div>
                  <span>Message us</span>
                  <strong>WhatsApp available</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        className="whatsapp"
        href="https://wa.me/15550123456"
        target="_blank"
        rel="noreferrer"
        aria-l
