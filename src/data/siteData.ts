export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  badge?: string;
  isEmergency?: boolean;
  category: "Healthcare" | "Senior Care" | "Logistics" | "Daily Support" | "Emergency";
  iconName: "Hospital" | "HeartHandshake" | "Pill" | "TestTube2" | "Clock" | "AlertCircle";
  actionText: string;
  features: string[];
  benefits: string[];
  howItWorks: { step: string; title: string; desc: string }[];
  accentColor: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "hospital-assistance",
    slug: "hospital-assistance",
    title: "Hospital Assistance",
    shortDesc: "Get reliable assistance for hospital visits, doctor appointments, check-ins, navigation and patient care.",
    fullDesc: "Navigating busy hospitals, managing admission queues, and attending specialist visits can be overwhelming. Care For Your Life 24/7 provides dedicated, compassionate assistants who accompany you or your family members throughout the entire medical journey.",
    category: "Healthcare",
    image: "/images/services/hospital_assistance.jpg",
    iconName: "Hospital",
    actionText: "Explore Service",
    accentColor: "green",
    features: [
      "Doctor Visit Assistance",
      "Hospital Check-in & Registration",
      "Navigation & Ward Support",
      "Appointment Scheduling & Management",
      "Patient Companionship & Escort"
    ],
    benefits: [
      "No waiting in endless queues alone",
      "Clear coordination between doctors and family",
      "Physical and emotional support for vulnerable patients",
      "Wheelchair and pharmacy queue handling"
    ],
    howItWorks: [
      { step: "01", title: "Select Hospital & Doctor", desc: "Share details of your appointment, hospital name, and schedule." },
      { step: "02", title: "Assistant Assigned", desc: "A verified healthcare assistant is confirmed and briefed on your specific needs." },
      { step: "03", title: "Hospital Accompaniment", desc: "Your assistant meets you at the entrance, manages queues, and supports the visit." },
      { step: "04", title: "Post-Visit Summary", desc: "Receive updates, prescribed slips, and safe transit departure." }
    ]
  },
  {
    id: "elder-care",
    slug: "elder-care",
    title: "Elder Care",
    shortDesc: "Compassionate assistance for seniors with everyday support, wellness check-ins, companionship and essential activities.",
    fullDesc: "Helping families care, even from a distance. Whether your elderly parents live in another city or simply require dedicated care while you are at work, our verified companions provide empathetic support for their daily well-being and happiness.",
    badge: "Most Trusted",
    category: "Senior Care",
    image: "/images/services/elder_care.jpg",
    iconName: "HeartHandshake",
    actionText: "Explore Service",
    accentColor: "green",
    features: [
      "Daily Living Assistance",
      "Scheduled Wellness Check-ins",
      "Caring Companionship & Conversation",
      "Medical Appointment Accompaniment",
      "Personal Assistance & Routine Errands"
    ],
    benefits: [
      "Peace of mind for children living in other cities or abroad",
      "Encouraging social connection and mental wellness for elders",
      "Prompt updates and health observations sent to family members",
      "Empathetic, vetted helpers trained in senior safety"
    ],
    howItWorks: [
      { step: "01", title: "Share Senior's Needs", desc: "Specify frequency, timing, preferred companion profile, and routines." },
      { step: "02", title: "Companion Matching", desc: "We assign a background-verified care assistant suitable for senior support." },
      { step: "03", title: "Care Delivery", desc: "The companion visits regularly, engages in activities, assists routines, and checks well-being." },
      { step: "04", title: "Family Digital Updates", desc: "Family members receive instant visit notes and reassurance via the app." }
    ]
  },
  {
    id: "medicine-delivery",
    slug: "medicine-delivery",
    title: "Medicine Delivery",
    shortDesc: "Order prescribed medicines conveniently and get them verified and delivered to your doorstep.",
    fullDesc: "Managing recurring medications and running between chemists is time-consuming. We streamline prescription verification and door-to-door delivery through certified licensed pharmacies.",
    category: "Logistics",
    image: "/images/services/medicine_delivery.jpg",
    iconName: "Pill",
    actionText: "Order Medicines",
    accentColor: "green",
    features: [
      "Prescription Upload & Verification",
      "Medicine Selection & Availability Check",
      "Licensed Pharmacy Coordination",
      "Safe Doorstep Delivery",
      "Refill Reminders & Regular Schedules"
    ],
    benefits: [
      "Genuine medications sourced from compliant registered pharmacies",
      "Convenient photo upload for handwritten prescriptions",
      "No running from pharmacy to pharmacy searching for rare medicines",
      "Prompt delivery directly to your home address"
    ],
    howItWorks: [
      { step: "01", title: "Upload Prescription", desc: "Snap a photo of your doctor's prescription or choose regular medicines." },
      { step: "02", title: "Pharmacist Verification", desc: "Licensed pharmacy partners check dosages, brands, and availability." },
      { step: "03", title: "Price Confirmation", desc: "Review the verified bill and confirm delivery timing." },
      { step: "04", title: "Doorstep Delivery", desc: "Packaged securely and delivered to your doorstep with tracking." }
    ]
  },
  {
    id: "lab-test-visit",
    slug: "lab-test-visit",
    title: "Lab Test Visit",
    shortDesc: "Book convenient at-home sample collection and manage your laboratory test experience from one place.",
    fullDesc: "Avoid early morning laboratory queues and travel hassle. Trained certified phlebotomists arrive at your home with sterilized kits for diagnostic sample collections.",
    category: "Healthcare",
    image: "/images/services/lab_test_visit.jpg",
    iconName: "TestTube2",
    actionText: "Book a Test",
    accentColor: "green",
    features: [
      "Diagnostic Test Booking",
      "Hygienic Home Sample Collection",
      "Certified Lab Partners",
      "Digital Report Delivery",
      "Flexible Morning & Evening Scheduling"
    ],
    benefits: [
      "100% sterile vacuum collection containers",
      "Comfortable sample collection right from your bed or living room",
      "Strict cold-chain logistics to maintain diagnostic accuracy",
      "Digital test reports delivered on time"
    ],
    howItWorks: [
      { step: "01", title: "Select Test or Package", desc: "Pick your required blood tests, profiles, or upload doctor's lab requisition." },
      { step: "02", title: "Choose Home Slot", desc: "Select a comfortable date and morning or evening time slot." },
      { step: "03", title: "Certified Phlebotomist Visit", desc: "A vaccinated, trained technician collects samples hygienically." },
      { step: "04", title: "Digital Reports", desc: "Reports verified by certified pathologists sent straight to your phone." }
    ]
  },
  {
    id: "daily-assistance",
    slug: "daily-assistance",
    title: "Daily Assistance",
    shortDesc: "Get trusted help with important everyday tasks when you need an extra hand.",
    fullDesc: "Life gets busy, and certain essential errands require trustworthy hands on the ground. We provide vetted support for administrative, banking, documentation, and home supervision needs.",
    category: "Daily Support",
    image: "/images/services/daily_assistance.jpg",
    iconName: "Clock",
    actionText: "Request Assistance",
    accentColor: "green",
    features: [
      "Bank Visits & Cheque Submissions",
      "Utility Bill & Government Office Errands",
      "Local Shopping & Grocery Assistance",
      "Home Maintenance & Repair Supervision",
      "Document Attestation & Paperwork Support"
    ],
    benefits: [
      "Save crucial work hours while tasks are completed reliably",
      "Trustworthy helpers who treat your requests with utmost integrity",
      "Real-time progress updates throughout the errand",
      "Clear transparent pricing based on service duration"
    ],
    howItWorks: [
      { step: "01", title: "Describe Your Task", desc: "Detail the task, address, specific instructions, and timeline." },
      { step: "02", title: "Get Matched", desc: "A vetted task specialist is assigned to your requirement." },
      { step: "03", title: "Task Execution", desc: "Your assistant carries out the errand keeping you informed." },
      { step: "04", title: "Completion Confirmation", desc: "Receive photo confirmation, receipts, and completion sign-off." }
    ]
  },
  {
    id: "emergency-sos",
    slug: "emergency-sos",
    title: "Emergency SOS",
    shortDesc: "When urgent assistance is needed, quickly request support and connect with available assistance.",
    fullDesc: "In unexpected situations, immediate coordination is critical. Emergency SOS lets you trigger an urgent priority request, broadcast your GPS coordinates to primary family contacts, and connect with immediate support.",
    badge: "Urgent Priority",
    isEmergency: true,
    category: "Emergency",
    image: "/images/services/hospital_assistance.jpg",
    iconName: "AlertCircle",
    actionText: "Get Emergency Help",
    accentColor: "red",
    features: [
      "One-Tap Urgent SOS Request",
      "Instant GPS Location Sharing",
      "Rapid Provider & Team Assignment",
      "Automated Emergency Contact Alert",
      "Hospital & Ambulance Coordination Support"
    ],
    benefits: [
      "Direct priority channel designed for speed",
      "Simultaneous alerts sent to designated loved ones",
      "Dedicated coordination team managing logistical hurdles",
      "Clear guidance and support while help is on the way"
    ],
    howItWorks: [
      { step: "01", title: "Press SOS", desc: "Trigger the emergency protocol directly from web or mobile app." },
      { step: "02", title: "Location Broadcast", desc: "Exact coordinates and critical health notes are relayed immediately." },
      { step: "03", title: "Emergency Desk Activation", desc: "Our 24/7 coordination team confirms assistance and contacts support." },
      { step: "04", title: "Continuous Assistance", desc: "Team stays on line until family or on-ground assistance arrives." }
    ]
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Choose a Service",
    desc: "Select the healthcare, elder care, or daily assistance support you need from our platform.",
  },
  {
    step: "02",
    title: "Tell Us What You Need",
    desc: "Provide the required details, preferred date, location, and any special instructions.",
  },
  {
    step: "03",
    title: "Get Matched",
    desc: "We connect you with an appropriate, background-verified service provider trained for your request.",
  },
  {
    step: "04",
    title: "Receive Support",
    desc: "Get compassionate, reliable assistance delivered at your requested time and location.",
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    id: "1",
    title: "24/7 Support",
    desc: "Our dedicated support team and digital platform operate around the clock to assist you.",
    icon: "Clock"
  },
  {
    id: "2",
    title: "Verified Providers",
    desc: "Every caregiver and provider undergoes thorough identity verification and service screening.",
    icon: "ShieldCheck"
  },
  {
    id: "3",
    title: "Simple Booking",
    desc: "Intuitive mobile app and website booking designed for easy use by family members of all ages.",
    icon: "Smartphone"
  },
  {
    id: "4",
    title: "Transparent Pricing",
    desc: "Clear, upfront service charges with zero hidden surprises or undisclosed fee additions.",
    icon: "Receipt"
  },
  {
    id: "5",
    title: "Real-Time Updates",
    desc: "Track service status, assistant arrival, and progress notes seamlessly directly on your device.",
    icon: "BellRing"
  },
  {
    id: "6",
    title: "Human-Centered Care",
    desc: "Compassionate, empathetic professionals who treat your family members with warmth and respect.",
    icon: "Heart"
  }
];

export const FAQS = [
  {
    q: "What services does Care For Your Life 24/7 provide?",
    a: "Care For Your Life 24/7 provides 6 core assistance services: Hospital Visit Assistance, Dedicated Elder Care, Medicine Delivery from licensed pharmacies, At-Home Lab Test Visits, Everyday Daily Assistance (banking, errands, supervision), and Urgent Emergency SOS coordination."
  },
  {
    q: "How do I book a service?",
    a: "You can book directly on our website via the 'Book a Service' page or using our mobile application. Simply choose your service, enter contact details, address, preferred date and time, and submit your request. You'll receive instant confirmation and provider details."
  },
  {
    q: "How does Medicine Delivery work?",
    a: "You can upload a photo of your valid doctor's prescription. Our partner licensed pharmacies verify the prescription and stock availability. Once confirmed, your medicines are safely packaged and delivered to your doorstep."
  },
  {
    q: "Can I book Elder Care for a family member living in another city?",
    a: "Yes, absolutely. A significant portion of our users are adult children booking regular care, wellness checks, and hospital accompaniment for their parents while living in another city or abroad. You receive regular digital reports and updates."
  },
  {
    q: "How does Hospital Assistance work?",
    a: "A verified healthcare assistant meets the patient at the hospital entrance. The assistant helps navigate between OPD departments, registers tickets, holds queues, assists with wheelchair transit, collects test reports, and accompanies the patient throughout the visit."
  },
  {
    q: "How does Emergency SOS work?",
    a: "Pressing Emergency SOS sends an immediate high-priority alert with your GPS location to our 24/7 coordination team and your predefined emergency contacts. Our team immediately coordinates logistical assistance, contacts nearby hospitals/ambulances, and stays in touch. Note: This is an urgent coordination tool and does not replace statutory 108/112 emergency numbers."
  },
  {
    q: "Can I track my booking in real time?",
    a: "Yes. The Care For Your Life 24/7 mobile app and web confirmation page provide real-time status updates: from assignment to provider departure, on-site arrival, and completion."
  },
  {
    q: "How are service providers verified?",
    a: "Every provider on our platform undergoes a multi-step vetting process including government ID verification, background and address checks, previous service experience reviews, and training on client safety and communication standards."
  },
  {
    q: "How can I become a provider?",
    a: "You can apply via the 'Become a Service Provider' link in our header or footer. Fill out the application form with your service expertise and credentials. Our onboarding team reviews applications within 24–48 hours."
  },
  {
    q: "How can I contact support?",
    a: "Our customer support team is available 24/7. You can reach us via our toll-free phone line, WhatsApp support, email at support@careforyourlife247.com, or through the interactive in-app help desk."
  }
];

export const TESTIMONIAL_PLACEHOLDERS = [
  {
    id: 1,
    name: "Rajesh S.",
    role: "Family Member (Son living in Bangalore)",
    service: "Elder Care & Medicine Delivery",
    quote: "Booking regular wellness check-ins and monthly medicines for my elderly parents in Pune has given our family immense peace of mind. The assistants are polite and dependable.",
    rating: 5,
    note: "Customer experience placeholder for development"
  },
  {
    id: 2,
    name: "Sunita M.",
    role: "Patient & Working Professional",
    service: "Hospital Assistance",
    quote: "Having an assistant accompany me to the multi-specialty hospital for complex diagnostic scans made everything so stress-free. Navigating registration and queues was effortless.",
    rating: 5,
    note: "Customer experience placeholder for development"
  },
  {
    id: 3,
    name: "Amit V.",
    role: "Senior Citizen",
    service: "Lab Test Visit & Daily Assistance",
    quote: "The phlebotomist arrived right on time at 7:30 AM with a sterile kit. No traveling, no lines. Very respectful and gentle care right at home.",
    rating: 5,
    note: "Customer experience placeholder for development"
  }
];
