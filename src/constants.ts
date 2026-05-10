import { HeartPulse, Activity, Brain, Bone, Baby, UserCircle, Thermometer, Eye, Stethoscope } from 'lucide-react';

export const DEPARTMENTS = [
  {
    id: 'medicine',
    name: 'General Medicine',
    description: 'Comprehensive care for adult health issues including chronic disease management.',
    icon: Stethoscope,
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Advanced heart care, diagnostics, and treatment for cardiovascular conditions.',
    icon: HeartPulse,
  },
  {
    id: 'neurology',
    name: 'Neurology',
    description: 'Expert care for disorders of the brain, spinal cord, and nervous system.',
    icon: Brain,
  },
  {
    id: 'orthopaedics',
    name: 'Orthopaedics',
    description: 'Specialized treatment for bone, joint, and musculoskeletal conditions.',
    icon: Bone,
  },
  {
    id: 'paediatrics',
    name: 'Paediatrics',
    description: 'Dedicated healthcare for infants, children, and adolescents.',
    icon: Baby,
  },
  {
    id: 'gynaecology',
    name: 'Gynaecology & Obstetrics',
    description: 'Comprehensive women healthcare including pregnancy and prenatal care.',
    icon: UserCircle,
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    description: 'Diagnosis and treatment of digestive system and liver disorders.',
    icon: Activity,
  },
  {
    id: 'ent',
    name: 'ENT',
    description: 'Specialized care for Ear, Nose, and Throat related conditions.',
    icon: Thermometer,
  },
  {
    id: 'emergency',
    name: 'Emergency & ICU',
    description: '24/7 critical care and emergency response for life-threatening situations.',
    icon: Activity,
  },
];

export const DOCTORS = [
  {
    id: 1,
    name: 'Dr. NA',
    qualification: 'NA',
    specialization: 'General Medicine',
    timing: 'TBD',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&h=400&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Dr. NA',
    qualification: 'NA',
    specialization: 'Gynaecology',
    timing: 'TBD',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&h=400&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Dr. NA',
    qualification: 'NA',
    specialization: 'Orthopaedics',
    timing: 'TBD',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&h=400&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Dr. NA',
    qualification: 'NA',
    specialization: 'Paediatrics',
    timing: 'TBD',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=400&h=400&auto=format&fit=crop',
  },
];

export const FACILITIES = [
  { name: 'ICU Unit', icon: 'Activity' },
  { name: 'Operation Theatres', icon: 'Stethoscope' },
  { name: 'Diagnostic Lab', icon: 'Microscope' },
  { name: 'Pharmacy', icon: 'Pill' },
  { name: 'Ambulance', icon: 'Ambulance' },
];

export const TESTIMONIALS = [
  {
    name: 'Patient Name (NA)',
    text: 'Placeholder testimonial text. Genuine patient reviews will be added here.',
    rating: 5,
  },
  {
    name: 'Patient Name (NA)',
    text: 'Placeholder testimonial text. Genuine patient reviews will be added here.',
    rating: 5,
  },
  {
    name: 'Patient Name (NA)',
    text: 'Placeholder testimonial text. Genuine patient reviews will be added here.',
    rating: 5,
  },
];
