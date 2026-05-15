import type { Lang } from "@/contexts/LanguageContext";

export type Course = {
  id: string;
  emoji: string;
  size: "sm" | "md" | "lg" | "xl";
  tone: "saffron" | "peach" | "cocoa" | "cream";
  title: Partial<Record<Lang, string>> & { en: string };
  blurb: Partial<Record<Lang, string>> & { en: string };
  steps: { title: Partial<Record<Lang, string>> & { en: string }; desc: Partial<Record<Lang, string>> & { en: string } }[];
};

const s = (en: string, hi?: string, hinglish?: string) => ({ en, hi, hinglish });

export const courses: Course[] = [
  {
    id: "phonepe",
    emoji: "💸",
    size: "lg",
    tone: "saffron",
    title: s("Send money on PhonePe", "PhonePe से पैसे भेजें", "PhonePe se paise bhejein"),
    blurb: s("Pay anyone using a phone number or UPI ID.", "फ़ोन नंबर या UPI ID से किसी को भी पैसे भेजें।", "Phone number ya UPI ID se kisi ko bhi paise bhejein."),
    steps: [
      { title: s("Open PhonePe", "PhonePe खोलें", "PhonePe kholein"), desc: s("Tap the purple PhonePe icon on your home screen.", "होम स्क्रीन पर बैंगनी PhonePe आइकन पर टैप करें।", "Home screen pe purple PhonePe icon tap karein.") },
      { title: s("Tap 'To Mobile or Contact'", "'मोबाइल पर भेजें' पर टैप करें", "'To Mobile' pe tap karein"), desc: s("On the home page, choose how you want to pay.", "होम पेज पर भुगतान का तरीका चुनें।", "Home page pe payment ka tarika choose karein.") },
      { title: s("Pick the contact", "संपर्क चुनें", "Contact choose karein"), desc: s("Search by name or type the phone number.", "नाम से खोजें या फ़ोन नंबर टाइप करें।", "Naam se search karein ya number type karein.") },
      { title: s("Enter amount", "राशि डालें", "Amount daalein"), desc: s("Type the amount in rupees and tap Pay.", "रुपयों में राशि डालें और Pay दबाएँ।", "Rupees me amount daalein aur Pay dabayein.") },
      { title: s("Enter UPI PIN", "UPI पिन डालें", "UPI PIN daalein"), desc: s("Enter your 4 or 6 digit UPI PIN to confirm.", "पुष्टि के लिए अपना UPI पिन डालें।", "Confirm karne ke liye apna UPI PIN daalein.") },
      { title: s("Done — show the green tick", "हो गया — हरा टिक दिखेगा", "Done — green tick dikhega"), desc: s("Take a screenshot to keep as receipt.", "रसीद रखने के लिए स्क्रीनशॉट लें।", "Receipt rakhne ke liye screenshot lein.") },
    ],
  },
  {
    id: "gpay",
    emoji: "📱",
    size: "md",
    tone: "peach",
    title: s("Pay with Google Pay", "Google Pay से भुगतान", "Google Pay se payment"),
    blurb: s("Scan a shop QR and pay safely.", "दुकान का QR स्कैन करके सुरक्षित भुगतान करें।", "Shop ka QR scan karke safely pay karein."),
    steps: [
      { title: s("Open Google Pay app", "Google Pay ऐप खोलें", "Google Pay app kholein"), desc: s("Tap the colourful G Pay icon.", "रंगीन G Pay आइकन पर टैप करें।", "Colourful G Pay icon tap karein.") },
      { title: s("Tap 'Scan any QR code'", "'QR कोड स्कैन करें' दबाएँ", "'Scan QR code' tap karein"), desc: s("Camera will open. Hold steady over the QR.", "कैमरा खुलेगा। QR के ऊपर स्थिर रखें।", "Camera khulega. QR ke upar steady rakhein.") },
      { title: s("Enter amount", "राशि डालें", "Amount daalein"), desc: s("Check shopkeeper's name carefully.", "दुकानदार का नाम ध्यान से देखें।", "Shopkeeper ka naam dhyan se dekhein.") },
      { title: s("Confirm with UPI PIN", "UPI पिन से पुष्टि करें", "UPI PIN se confirm karein"), desc: s("Never share PIN with anyone.", "अपना पिन किसी से साझा न करें।", "Apna PIN kisi ke saath share na karein.") },
      { title: s("Show success screen to shopkeeper", "सफलता स्क्रीन दिखाएँ", "Success screen dikhayein"), desc: s("Wait for the 'ting' sound from their phone.", "उनके फ़ोन की 'टिंग' आवाज़ का इंतज़ार करें।", "Unke phone ki 'ting' sound ka wait karein.") },
    ],
  },
  {
    id: "train",
    emoji: "🚆",
    size: "md",
    tone: "cocoa",
    title: s("Book a train ticket (IRCTC)", "ट्रेन टिकट बुक करें (IRCTC)", "Train ticket book karein (IRCTC)"),
    blurb: s("Book Indian Railways tickets from your phone.", "अपने फ़ोन से रेलवे टिकट बुक करें।", "Apne phone se railway ticket book karein."),
    steps: [
      { title: s("Open IRCTC Rail Connect app", "IRCTC ऐप खोलें", "IRCTC app kholein"), desc: s("Login with your IRCTC user ID.", "अपनी IRCTC आईडी से लॉगिन करें।", "Apni IRCTC ID se login karein.") },
      { title: s("Enter From and To station", "किस स्टेशन से किस तक — डालें", "From-To station daalein"), desc: s("Pick travel date below.", "नीचे यात्रा की तारीख चुनें।", "Niche travel date choose karein.") },
      { title: s("Choose a train", "ट्रेन चुनें", "Train choose karein"), desc: s("See timing, class and seat availability.", "समय, श्रेणी और सीट देखें।", "Timing, class aur seat dekhein.") },
      { title: s("Add passenger details", "यात्री विवरण भरें", "Passenger details bharein"), desc: s("Name, age, gender — exactly as on ID.", "नाम, उम्र, लिंग — ID के अनुसार।", "Name, age, gender — ID ke according.") },
      { title: s("Pay using UPI", "UPI से भुगतान करें", "UPI se pay karein"), desc: s("Choose UPI and complete with PIN.", "UPI चुनकर पिन से पूरा करें।", "UPI choose karke PIN se complete karein.") },
      { title: s("Get e-ticket", "ई-टिकट प्राप्त करें", "E-ticket milega"), desc: s("PNR will be sent on SMS too.", "PNR SMS पर भी आएगा।", "PNR SMS pe bhi aayega.") },
    ],
  },
  {
    id: "bus",
    emoji: "🚌",
    size: "sm",
    tone: "cream",
    title: s("Book a bus on RedBus", "RedBus से बस बुक करें", "RedBus se bus book karein"),
    blurb: s("Find and book inter-city buses easily.", "अंतर-शहर बसें आसानी से बुक करें।", "Inter-city buses easily book karein."),
    steps: [
      { title: s("Open RedBus", "RedBus खोलें", "RedBus kholein"), desc: s("Allow location for nearby pickup.", "नज़दीकी पिकअप के लिए लोकेशन दें।", "Nearby pickup ke liye location dein.") },
      { title: s("Select From, To and Date", "From, To और तारीख चुनें", "From, To aur date select karein"), desc: s("Tap Search Buses.", "Search Buses दबाएँ।", "Search Buses tap karein.") },
      { title: s("Choose seat", "सीट चुनें", "Seat choose karein"), desc: s("Pink seats are for ladies.", "गुलाबी सीटें महिलाओं के लिए हैं।", "Pink seats ladies ke liye hain.") },
      { title: s("Enter details and pay", "विवरण भरें और भुगतान करें", "Details bharein aur pay karein"), desc: s("Pay via UPI or card.", "UPI या कार्ड से भुगतान करें।", "UPI ya card se pay karein.") },
      { title: s("Show m-ticket while boarding", "बोर्डिंग के समय m-टिकट दिखाएँ", "Boarding ke time m-ticket dikhayein"), desc: s("Available in app under 'My Trips'.", "ऐप के 'My Trips' में मिलेगा।", "App ke 'My Trips' me milega.") },
    ],
  },
  {
    id: "flight",
    emoji: "✈️",
    size: "md",
    tone: "saffron",
    title: s("Book a flight", "फ्लाइट बुक करें", "Flight book karein"),
    blurb: s("Use MakeMyTrip or directly the airline app.", "MakeMyTrip या एयरलाइन ऐप का उपयोग करें।", "MakeMyTrip ya airline app use karein."),
    steps: [
      { title: s("Open MakeMyTrip → Flights", "MakeMyTrip → Flights खोलें", "MakeMyTrip → Flights kholein"), desc: s("Choose One-way or Round-trip.", "One-way या Round-trip चुनें।", "One-way ya Round-trip choose karein.") },
      { title: s("Enter cities and date", "शहर और तारीख डालें", "Cities aur date daalein"), desc: s("Tap Search.", "Search दबाएँ।", "Search tap karein.") },
      { title: s("Pick a flight", "फ्लाइट चुनें", "Flight choose karein"), desc: s("Check timing, baggage and price.", "समय, सामान और मूल्य देखें।", "Timing, baggage aur price dekhein.") },
      { title: s("Add traveler details", "यात्री विवरण भरें", "Traveler details bharein"), desc: s("Name as on government ID. Add a meal if needed.", "नाम सरकारी ID के अनुसार।", "Naam government ID ke according.") },
      { title: s("Pay and download ticket", "भुगतान करें और टिकट डाउनलोड करें", "Pay karein aur ticket download karein"), desc: s("Carry the same ID at airport.", "हवाई अड्डे पर वही ID ले जाएँ।", "Airport pe wahi ID le jayein.") },
    ],
  },
  {
    id: "hotel",
    emoji: "🏨",
    size: "sm",
    tone: "peach",
    title: s("Book a hotel", "होटल बुक करें", "Hotel book karein"),
    blurb: s("Find clean and safe stays near you.", "अपने पास साफ और सुरक्षित स्टे खोजें।", "Apne paas saaf aur safe stay khojein."),
    steps: [
      { title: s("Open MakeMyTrip → Hotels", "MakeMyTrip → Hotels खोलें", "MakeMyTrip → Hotels kholein"), desc: s("Type city or area name.", "शहर या क्षेत्र का नाम लिखें।", "City ya area ka naam likhein.") },
      { title: s("Pick check-in and check-out dates", "तारीख चुनें", "Dates choose karein"), desc: s("Add number of guests.", "मेहमानों की संख्या डालें।", "Guests ki count daalein.") },
      { title: s("Choose hotel by rating", "रेटिंग देखकर होटल चुनें", "Rating dekh ke hotel choose karein"), desc: s("Read recent reviews.", "हाल की समीक्षाएँ पढ़ें।", "Recent reviews padhein.") },
      { title: s("Pay or 'Pay at hotel'", "भुगतान करें या होटल पर करें", "Pay ya 'Pay at hotel' choose karein"), desc: s("Save your booking ID.", "अपना बुकिंग ID सेव करें।", "Apna booking ID save karein.") },
    ],
  },
  {
    id: "movie",
    emoji: "🎬",
    size: "sm",
    tone: "cocoa",
    title: s("Book movie tickets", "मूवी टिकट बुक करें", "Movie tickets book karein"),
    blurb: s("BookMyShow — pick seats and pay.", "BookMyShow से सीट चुनकर भुगतान करें।", "BookMyShow se seats pick karke pay karein."),
    steps: [
      { title: s("Open BookMyShow", "BookMyShow खोलें", "BookMyShow kholein"), desc: s("Set your city at top.", "ऊपर शहर सेट करें।", "Top pe city set karein.") },
      { title: s("Pick the movie and showtime", "मूवी और समय चुनें", "Movie aur time choose karein"), desc: s("Choose theatre near you.", "नज़दीकी थिएटर चुनें।", "Nearby theatre choose karein.") },
      { title: s("Select seats", "सीट चुनें", "Seats select karein"), desc: s("Green seats are available.", "हरी सीटें उपलब्ध हैं।", "Green seats available hain.") },
      { title: s("Pay via UPI", "UPI से भुगतान करें", "UPI se pay karein"), desc: s("Show QR ticket at the gate.", "गेट पर QR टिकट दिखाएँ।", "Gate pe QR ticket dikhayein.") },
    ],
  },
  {
    id: "whatsapp",
    emoji: "💬",
    size: "sm",
    tone: "cream",
    title: s("Send a WhatsApp voice note", "WhatsApp वॉइस नोट भेजें", "WhatsApp voice note bhejein"),
    blurb: s("Record and send your voice in seconds.", "कुछ सेकंड में अपनी आवाज़ रिकॉर्ड करके भेजें।", "Kuch seconds me apni voice record karke bhejein."),
    steps: [
      { title: s("Open the chat", "चैट खोलें", "Chat kholein"), desc: s("Tap the person you want to message.", "जिसको भेजना है, उस पर टैप करें।", "Jisko bhejna hai, us pe tap karein.") },
      { title: s("Hold the mic icon", "माइक आइकन दबाए रखें", "Mic icon dabaye rakhein"), desc: s("Speak clearly while holding.", "दबाते हुए साफ़-साफ़ बोलें।", "Dabate hue clearly bolein.") },
      { title: s("Release to send", "छोड़ने पर भेज जाएगा", "Release karne pe send ho jayega"), desc: s("Slide up to lock recording.", "लॉक करने के लिए ऊपर स्लाइड करें।", "Lock karne ke liye upar slide karein.") },
    ],
  },
  {
    id: "safety",
    emoji: "🛡️",
    size: "md",
    tone: "saffron",
    title: s("Stay safe online", "ऑनलाइन सुरक्षित रहें", "Online safe rahein"),
    blurb: s("Spot scams, OTP frauds and fake calls.", "धोखाधड़ी और फर्जी कॉल पहचानें।", "Frauds aur fake calls pehchaanein."),
    steps: [
      { title: s("Never share OTP", "OTP कभी न बताएँ", "OTP kabhi mat batayein"), desc: s("Banks never ask for OTP. Anyone asking is a fraud.", "बैंक कभी OTP नहीं माँगते।", "Bank kabhi OTP nahi maangte.") },
      { title: s("Check the URL", "URL जाँचें", "URL check karein"), desc: s("Real bank sites end in .com or .in — not random words.", "असली बैंक साइट .com या .in पर खत्म होती है।", "Real bank site .com ya .in pe end hoti hai.") },
      { title: s("Don't install unknown apps", "अनजान ऐप न डालें", "Unknown apps install na karein"), desc: s("Only use Play Store or App Store.", "केवल Play Store या App Store का उपयोग करें।", "Sirf Play Store ya App Store use karein.") },
      { title: s("Report scam to 1930", "1930 पर शिकायत करें", "1930 pe report karein"), desc: s("National cyber crime helpline.", "राष्ट्रीय साइबर हेल्पलाइन।", "National cyber helpline.") },
    ],
  },
];
