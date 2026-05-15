import { createContext, useContext, useState, ReactNode } from "react";

export type Lang =
  | "en" | "hi" | "te" | "kn" | "mr" | "ta" | "bn" | "gu" | "ml" | "pa" | "hinglish";

export const LANGUAGES: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "hinglish", label: "Hinglish", native: "Hinglish" },
  { code: "te", label: "Telugu", native: "తెలుగు" },
  { code: "kn", label: "Kannada", native: "ಕನ್ನಡ" },
  { code: "mr", label: "Marathi", native: "मराठी" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "bn", label: "Bengali", native: "বাংলা" },
  { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
  { code: "ml", label: "Malayalam", native: "മലയാളം" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
];

type Dict = Record<string, Partial<Record<Lang, string>> & { en: string }>;

export const t: Dict = {
  brand: { en: "SikhoDigital", hi: "सीखोडिजिटल", hinglish: "SikhoDigital", te: "నేర్చుకోDigital", kn: "ಕಲಿDigital", mr: "शिकाDigital", ta: "கற்றுDigital" },
  nav_courses: { en: "Courses", hi: "पाठ्यक्रम", hinglish: "Courses", te: "కోర్సులు", kn: "ಕೋರ್ಸುಗಳು", mr: "अभ्यासक्रम", ta: "பாடங்கள்" },
  nav_about: { en: "About", hi: "हमारे बारे में", hinglish: "About", te: "గురించి", kn: "ಬಗ್ಗೆ", mr: "विषयी", ta: "பற்றி" },
  nav_help: { en: "Help", hi: "सहायता", hinglish: "Help", te: "సహాయం", kn: "ಸಹಾಯ", mr: "मदत", ta: "உதவி" },
  login: { en: "Log in", hi: "लॉग इन", hinglish: "Log in", te: "లాగిన్", kn: "ಲಾಗಿನ್", mr: "लॉग इन", ta: "உள்நுழை" },
  signup: { en: "Sign up", hi: "साइन अप", hinglish: "Sign up", te: "సైన్ అప్", kn: "ಸೈನ್ ಅಪ್", mr: "नोंदणी", ta: "பதிவு" },
  hero_kicker: { en: "Digital Literacy for Everyone", hi: "हर किसी के लिए डिजिटल साक्षरता", hinglish: "Sabke liye Digital Literacy", te: "అందరికీ డిజిటల్ అక్షరాస్యత", kn: "ಎಲ್ಲರಿಗೂ ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆ", mr: "सर्वांसाठी डिजिटल साक्षरता", ta: "அனைவருக்கும் டிஜிட்டல் கல்வி" },
  hero_title: { en: "Learn the digital world, one simple step at a time.", hi: "एक-एक आसान कदम से डिजिटल दुनिया सीखिए।", hinglish: "Ek-ek aasaan step me digital duniya seekhiye.", te: "ఒక్కో సులభమైన అడుగుతో డిజిటల్ ప్రపంచాన్ని నేర్చుకోండి.", kn: "ಸುಲಭ ಹಂತಗಳಲ್ಲಿ ಡಿಜಿಟಲ್ ಜಗತ್ತನ್ನು ಕಲಿಯಿರಿ.", mr: "सोप्या टप्प्यांत डिजिटल जग शिका.", ta: "எளிய படிகளில் டிஜிட்டல் உலகை கற்றுக்கொள்ளுங்கள்." },
  hero_sub: { en: "Step-by-step training with real screenshots — payments, train, bus, flight, hotel, movies and more. In your language.", hi: "असली स्क्रीनशॉट के साथ कदम-दर-कदम ट्रेनिंग — भुगतान, ट्रेन, बस, फ्लाइट, होटल, मूवी और बहुत कुछ।", hinglish: "Real screenshots ke saath step-by-step training — payments, train, bus, flight, hotel, movies aur bahut kuch.", te: "నిజమైన స్క్రీన్‌షాట్‌లతో దశల వారీ శిక్షణ — చెల్లింపులు, రైలు, బస్, విమానం, హోటల్, సినిమాలు.", kn: "ನಿಜವಾದ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳೊಂದಿಗೆ ಹಂತ ಹಂತದ ತರಬೇತಿ.", mr: "खऱ्या स्क्रीनशॉटसह टप्प्याटप्प्याने प्रशिक्षण.", ta: "உண்மையான திரைக்காட்சிகளுடன் படிப்படியான பயிற்சி." },
  cta_start: { en: "Start learning free", hi: "मुफ्त सीखना शुरू करें", hinglish: "Free me seekhna shuru karein", te: "ఉచితంగా ప్రారంభించండి", kn: "ಉಚಿತವಾಗಿ ಪ್ರಾರಂಭಿಸಿ", mr: "विनामूल्य सुरू करा", ta: "இலவசமாக தொடங்குங்கள்" },
  cta_browse: { en: "Browse courses", hi: "पाठ्यक्रम देखें", hinglish: "Courses dekhein", te: "కోర్సులు చూడండి", kn: "ಕೋರ್ಸುಗಳನ್ನು ನೋಡಿ", mr: "अभ्यासक्रम पहा", ta: "பாடங்களை பார்க்க" },
  stat_learners: { en: "Learners", hi: "सीखने वाले", hinglish: "Learners", te: "నేర్చుకున్నవారు", kn: "ಕಲಿಯುವವರು", mr: "विद्यार्थी", ta: "மாணவர்கள்" },
  stat_courses: { en: "Courses", hi: "पाठ्यक्रम", hinglish: "Courses", te: "కోర్సులు", kn: "ಕೋರ್ಸುಗಳು", mr: "अभ्यासक्रम", ta: "பாடங்கள்" },
  stat_languages: { en: "Languages", hi: "भाषाएँ", hinglish: "Languages", te: "భాషలు", kn: "ಭಾಷೆಗಳು", mr: "भाषा", ta: "மொழிகள்" },
  section_courses_kicker: { en: "All courses", hi: "सभी कोर्स", hinglish: "All courses" },
  section_courses_title: { en: "Pick what you want to learn today", hi: "आज क्या सीखना है, चुनिए", hinglish: "Aaj kya seekhna hai, choose kariye", te: "ఈరోజు ఏమి నేర్చుకోవాలో ఎంచుకోండి", kn: "ಇಂದು ಏನು ಕಲಿಯಬೇಕೆಂದು ಆಯ್ಕೆಮಾಡಿ", mr: "आज काय शिकायचे ते निवडा", ta: "இன்று கற்க விரும்புவதை தேர்ந்தெடுக்கவும்" },
  view_steps: { en: "View steps", hi: "कदम देखें", hinglish: "Steps dekhein", te: "దశలు చూడండి", kn: "ಹಂತಗಳು ನೋಡಿ", mr: "पायऱ्या पहा", ta: "படிகள் பார்" },
  steps_count: { en: "steps", hi: "कदम", hinglish: "steps", te: "దశలు", kn: "ಹಂತಗಳು", mr: "पायऱ्या", ta: "படிகள்" },
  why_kicker: { en: "Why us", hi: "हम क्यों", hinglish: "Why us" },
  why_title: { en: "Built for first-time digital users", hi: "पहली बार डिजिटल इस्तेमाल करने वालों के लिए बना", hinglish: "First-time digital users ke liye banaya gaya" },
  feat1_t: { en: "Real screenshots", hi: "असली स्क्रीनशॉट", hinglish: "Real screenshots" },
  feat1_d: { en: "See exactly what to tap on the screen.", hi: "स्क्रीन पर वास्तव में क्या दबाना है, देखें।", hinglish: "Screen pe exactly kya tap karna hai, dekhiye." },
  feat2_t: { en: "Native languages", hi: "स्थानीय भाषाएँ", hinglish: "Native languages" },
  feat2_d: { en: "Hindi, Telugu, Kannada, Marathi, Tamil & more.", hi: "हिन्दी, तेलुगु, कन्नड़, मराठी, तमिल और बहुत कुछ।", hinglish: "Hindi, Telugu, Kannada, Marathi, Tamil aur bahut kuch." },
  feat3_t: { en: "Bite-sized lessons", hi: "छोटे-छोटे पाठ", hinglish: "Chote-chote lessons" },
  feat3_d: { en: "Each lesson takes under 5 minutes.", hi: "हर पाठ 5 मिनट से कम का है।", hinglish: "Har lesson 5 minute se kam ka hai." },
  feat4_t: { en: "Safe & private", hi: "सुरक्षित और निजी", hinglish: "Safe & private" },
  feat4_d: { en: "We never ask for OTPs or passwords.", hi: "हम कभी OTP या पासवर्ड नहीं मांगते।", hinglish: "Hum kabhi OTP ya password nahi maangte." },
  cta_band_title: { en: "Ready to feel confident on your phone?", hi: "अपने फ़ोन पर आत्मविश्वास महसूस करने के लिए तैयार?", hinglish: "Apne phone pe confident feel karne ke liye ready?" },
  cta_band_sub: { en: "Join thousands learning daily — in your language.", hi: "हज़ारों लोगों के साथ रोज़ सीखें — अपनी भाषा में।", hinglish: "Hazaaron logon ke saath roz seekhein — apni bhasha me." },
};

export const tr = (key: string, lang: Lang) => {
  const entry = t[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en;
};

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
};

export const useLang = () => useContext(Ctx);
