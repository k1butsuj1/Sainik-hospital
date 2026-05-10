import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { DEPARTMENTS } from '../constants';

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-slate-100 shadow-2xl shadow-slate-200/40">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Send size={20} />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900">Quick Appointment</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Patient Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-sm outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-sm outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Specialty</label>
                <select required className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-sm outline-none focus:border-primary focus:bg-white transition-all appearance-none text-slate-500">
                  <option value="">Select Department</option>
                  {DEPARTMENTS.map(dept => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Appointment Date</label>
                <input
                  required
                  type="datetime-local"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-sm outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Medical Note</label>
              <textarea
                rows={3}
                placeholder="Briefly describe your symptoms..."
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-sm outline-none focus:border-primary focus:bg-white transition-all resize-none"
              ></textarea>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-secondary text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-secondary/90 shadow-xl shadow-secondary/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Processing...
                </>
              ) : (
                <>
                  Confirm Request
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">Appointment Scheduled!</h3>
            <p className="text-gray-500 max-w-md mb-8">
              Thank you for trusting Sainik Multispeciality Hospital. Our team will contact you shortly to confirm your visit.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-primary font-bold hover:underline"
            >
              Book Another Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
