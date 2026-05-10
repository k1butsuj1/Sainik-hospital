import React from 'react';
import { motion } from 'motion/react';
import { Phone, Clock, Mail, MapPin, Star, Ambulance, FlaskConical, Pill, ShieldCheck, UserCheck, ArrowRight, Facebook, Twitter, Instagram, HeartPulse } from 'lucide-react';
import Navbar from './components/Navbar';
import ThreeHero from './components/ThreeHero';
import DepartmentCard from './components/DepartmentCard';
import AppointmentForm from './components/AppointmentForm';
import { Counter, SectionHeader } from './components/Common';
import { DEPARTMENTS, DOCTORS, TESTIMONIALS } from './constants';
import hospitalHero from './assets/images/regenerated_image_1778398498379.jpg';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <ThreeHero />
        <div className="section-padding grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-primary/20 text-primary text-sm font-bold mb-6">
              <ShieldCheck size={18} />
              NABH Accredited Hospital
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[1.1] mb-8 tracking-tight text-slate-900">
              Healthcare <br />
              <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
              Dedicated to delivering high-quality, affordable multispeciality care with advanced medical technology in the heart of Mysore.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#appointment" className="bg-primary text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-primary/20">
                Book Appointment
              </a>
              <a href="#about" className="bg-slate-100 text-slate-700 px-10 py-4 rounded-xl font-bold border border-slate-200 hover:bg-slate-200 transition-all">
                Learn More
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block relative px-12"
          >
            <div className="relative">
              <img
                src={hospitalHero}
                alt="Hospital Exterior"
                className="rounded-[3rem] shadow-2xl relative z-10"
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              

            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50/50 rounded-[4rem] my-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&h=600&auto=format&fit=crop"
              alt="Medical Care"
              className="rounded-[3rem] shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="space-y-8">
            <SectionHeader
              align="left"
              badge="Since 2014"
              title="Dedicated to Your Health and Wellness"
              description="Sainik Multispeciality Hospital is dedicated to delivering high-quality, affordable healthcare with advanced medical technology and compassionate care. Our hospital offers a wide range of specialties under one roof, ensuring complete treatment for every patient."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: UserCheck, title: 'Expert Doctors', desc: 'Highly qualified specialists' },
                { icon: ShieldCheck, title: 'Modern Gear', desc: 'Latest medical technology' },
                { icon: Clock, title: '24/7 Service', desc: 'Round the clock care' },
                { icon: HeartPulse, title: 'Patient First', desc: 'Empathy driven approach' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl transition-all hover:bg-white hover:shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary pt-20 pb-20 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 border-[40px] border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center [&_*]:text-white">
            <Counter value={0} label="Years Experience" suffix="+" />
            <Counter value={0} label="Expert Doctors" suffix="+" />
            <Counter value={24} label="Service Hours" suffix="/7" />
            <Counter value={0} label="Patients Treated" suffix="+" />
          </div>
        </div>
      </section>

      {/* Specialities Section */}
      <section id="specialities" className="section-padding">
        <SectionHeader
          badge="Departments"
          title="Our Specialities"
          description="We provide world-class clinical expertise across a wide range of medical specialities using the latest technology."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEPARTMENTS.map((dept) => (
            <DepartmentCard key={dept.id} {...dept} />
          ))}
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="section-padding bg-gray-50/50 rounded-[4rem]">
        <SectionHeader
          badge="Team"
          title="Meet Our Specialists"
          description="Highly qualified medical professionals dedicated to your recovery."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doc) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-white group"
            >
              <div className="relative h-64 bg-slate-100 flex items-center justify-center">
                <UserCheck size={64} className="text-slate-300" />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur shadow-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                  {doc.specialization}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-1">{doc.name}</h3>
                <p className="text-xs text-secondary font-bold mb-4">{doc.qualification}</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                  <Clock size={14} className="text-primary" />
                  {doc.timing}
                </div>
                <a href="#appointment" className="block text-center w-full bg-gray-50 text-gray-900 py-3 rounded-xl font-bold text-sm transition-all hover:bg-primary hover:text-white">
                  Book Appointment
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding">
        <SectionHeader
          badge="Care Units"
          title="Modern Facilities"
          description="Equipped with state-of-the-art medical infrastructure to handle all healthcare needs."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: ShieldCheck, name: 'Advanced ICU' },
            { icon: FlaskConical, name: 'Diagnostic Lab' },
            { icon: Pill, name: '24/7 Pharmacy' },
            { icon: Ambulance, name: 'Emergency' },
            { icon: HeartPulse, name: 'OT Center' },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center gap-4 text-center shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary">
                <f.icon size={32} />
              </div>
              <h4 className="font-bold text-gray-900">{f.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 border-[60px] border-white rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 border-[60px] border-white rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <SectionHeader
              align="left"
              badge="Healing Starts Here"
              title="Schedule Your Visit Today"
              description="Take the first step towards better health. Book an appointment with our specialists in just a few clicks."
            />
            <div className="space-y-6 [&_*]:text-white mb-8 px-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Star className="fill-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Prioritized Care</h4>
                  <p className="text-white/60">Fast-track appointments for emergencies</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Safe Environment</h4>
                  <p className="text-white/60">NABH standard hygiene protocols</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary group overflow-hidden">
                  <Phone size={32} className="animate-pulse" />
                </div>
                <div>
                  <div className="text-white/60 text-sm font-bold uppercase tracking-widest">Emergency Help</div>
                  <div className="text-white text-3xl font-display font-bold">+91 821 4242424</div>
                </div>
              </div>
            </div>
          </div>
          <AppointmentForm />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding overflow-hidden">
        <SectionHeader
          badge="Stories"
          title="What Our Patients Say"
        />
        <div className="flex flex-wrap justify-center gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 max-w-sm flex flex-col gap-6"
            >
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="italic text-gray-600 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4 border-t border-gray-50 pt-6 mt-auto text-center">
                <div className="w-full">
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <SectionHeader
              align="left"
              badge="Find Us"
              title="Get in Touch"
              description="Have questions? Reach out to us through any of these channels."
            />
            <div className="space-y-6">
              {[
                { icon: MapPin, title: 'Our Location', detail: 'Ramakrishna Nagar, Mysore, Karnataka' },
                { icon: Phone, title: 'Call Center', detail: '+91 821 4242424' },
                { icon: Mail, title: 'Email Support', detail: 'info@sainikhospital.com' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-gray-600 font-medium">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-full min-h-[400px] border-8 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15594.39446419515!2d76.6111303!3d12.2751433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf6f6e8e50669b%3A0x6bba46c597c45873!2sRamakrishna%20Nagar%2C%20Mysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715340000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 bg-gray-900 text-white rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <a href="/" className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                  <HeartPulse size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-display font-bold leading-tight">SAINIK</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60">Multispeciality</span>
                </div>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Providing standard and affordable healthcare services to the society through advanced technology and human touch.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#specialities" className="hover:text-white transition-colors">Specialities</a></li>
                <li><a href="#doctors" className="hover:text-white transition-colors">Doctors</a></li>
                <li><a href="#appointment" className="hover:text-white transition-colors">Appointments</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary">Departments</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">General Medicine</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cardiology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Orthopaedics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gynaecology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Neurology</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary">Working Hours</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="text-white">09:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white">Emergency Only</span>
                </li>
                <li className="pt-4">
                  <div className="bg-white/10 p-4 rounded-xl flex items-center gap-3">
                    <Ambulance size={20} className="text-secondary" />
                    <span className="font-bold text-white tracking-widest">24/7 EMERGENCY</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 text-center text-gray-500 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Sainik Multispeciality Hospital. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
