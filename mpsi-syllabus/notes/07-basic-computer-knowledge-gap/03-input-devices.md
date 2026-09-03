# इनपुट डिवाइस — कीबोर्ड, माउस, स्कैनर, जॉयस्टिक आदि

Input device वह hardware है जिसके माध्यम से उपयोगकर्ता data/instructions को कंप्यूटर में डालता (feed करता) है — इसे कंप्यूटर उस data को process करने से पहले binary रूप (0 और 1) में बदल देता है। परीक्षाओं में "यह किस श्रेणी का device है" (input/output/दोनों) पूछा जाता है — कुछ devices दोनों श्रेणी में आते हैं, जो एक common trap (सामान्य भ्रम-बिंदु) है।

## प्रमुख इनपुट डिवाइस

| Device | कार्य | विशेष तथ्य |
|---|---|---|
| **Keyboard (कीबोर्ड)** | Text/अक्षर/संख्या input | मानक **QWERTY** layout (नाम पहली 6 अक्षर-keys से); 104/105 keys सामान्य desktop keyboard में होती हैं |
| **Mouse (माउस)** | Pointing Device — screen पर cursor को नियंत्रित करना व चयन (select) करना | Douglas Engelbart द्वारा आविष्कृत (1964); Mechanical (ball-based, अब obsolete) व Optical (LED/laser sensor-based) प्रकार |
| **Scanner (स्कैनर)** | कागज़ी document/चित्र को digital image में बदलना | Flatbed, Handheld, Drum scanner प्रकार |
| **Joystick (जॉयस्टिक)** | Gaming व simulation में दिशा-नियंत्रण | Cursor/object की गति नियंत्रित करता है, विशेषकर flight-simulation व video games में |
| **Trackball** | Mouse जैसा pointing device, स्थिर आधार पर लगी ball को उंगलियों से घुमाकर cursor चलाना | Laptop व CAD workstation में उपयोगी जहाँ desk-space सीमित हो |
| **Light Pen (लाइट पेन)** | Screen पर सीधे pen से चित्र बनाने हेतु pointing device | CAD design व touchscreen-पूर्व graphic input में प्रयुक्त |
| **Touchpad** | Laptop में built-in pointing surface | उंगली के स्पर्श व गति से cursor नियंत्रण |
| **Microphone (माइक्रोफोन)** | ध्वनि/आवाज़ input | Voice recording, speech-to-text conversion |
| **Webcam** | Video/चित्र input | Video calling, photo capture |
| **OMR (Optical Mark Reader)** | Pencil/pen से भरे गोलों (bubbles) को पहचानना व पढ़ना | परीक्षा उत्तर-पत्रक (OMR sheet) पढ़ने हेतु — MPSI/MPPSC जैसी प्रतियोगी परीक्षाओं में स्वयं यह device प्रयुक्त होता है |
| **OCR (Optical Character Reader/Recognition)** | मुद्रित (printed) या हस्तलिखित (handwritten) अक्षरों को machine-editable text में बदलना | Document scanning व text-निष्कर्षण (extraction) हेतु |
| **MICR (Magnetic Ink Character Reader)** | चुंबकीय स्याही (magnetic ink) से छपे विशेष अक्षर पढ़ना | बैंक चेक के नीचे छपी संख्या-पट्टी (routing व account number) पढ़ने हेतु प्रयुक्त |
| **Barcode Reader** | Barcode (लाइनों के pattern) को scan कर संख्यात्मक data पढ़ना | सुपरमार्केट में billing, inventory management |
| **Biometric Scanner** | Fingerprint, iris (आँख की पुतली), face पहचान | Aadhaar-आधारित प्रमाणीकरण (authentication), उपस्थिति (attendance) प्रणाली |
| **Digitizer/Graphics Tablet** | हाथ से चित्र/रेखाचित्र input | Designer व artists द्वारा प्रयुक्त, pen जैसे stylus से सीधे draw करना |

## "दोनों" श्रेणी वाले Devices (Input भी, Output भी — Common Trap)

- **Touchscreen** — input (स्पर्श पहचान) व output (छवि प्रदर्शन) दोनों एक ही सतह पर।
- **Modem** — data भेजना (output की तरह काम) व प्राप्त करना (input की तरह काम) दोनों — यह network से data आदान-प्रदान करता है।
- **Headset (Microphone + Speaker)** — Microphone भाग input है, Speaker भाग output है — पूरा device दोनों की भूमिका निभाता है।

## महत्वपूर्ण अतिरिक्त तथ्य

- **QWERTY keyboard** layout का आविष्कार Christopher Latham Sholes ने 1868 में किया — मूल उद्देश्य typewriter की धातु-भुजाओं (keys) को टकराने/उलझने से बचाना था, न कि typing को तेज़ बनाना (यह एक interesting historical fact है जो अक्सर पूछा जाता है)।
- Keyboard पर **Function Keys** (F1–F12) होती हैं — F1 सामान्यतः "Help" के लिए प्रयुक्त होती है।
- **Mouse के प्रकार** — Mechanical (rubber ball आधारित, अब अप्रचलित), Optical (LED/laser आधारित sensor), Wireless (Bluetooth/RF आधारित)।
- **OMR sheet** — प्रतियोगी परीक्षाओं (जैसे MPPSC/MPSI स्वयं) में उत्तर-पत्रक के रूप में प्रयुक्त — input device से जुड़ा यह प्रत्यक्ष-व्यावहारिक उदाहरण है, अभ्यर्थी के लिए विशेष रूप से प्रासंगिक।
- **MICR code** — बैंक चेक पर नीचे छपी विशेष अंकों की पंक्ति (routing/account number) — विशेष चुंबकीय स्याही से छपती है ताकि machine त्रुटि-रहित (highly accurate) तरीके से पढ़ सके, यहाँ तक कि चेक पर stamp/हस्ताक्षर होने पर भी।

## अभ्यास प्रश्न

1. बैंक चेक पर छपे विशेष अंक किस तकनीक से पढ़े जाते हैं? — **MICR**
2. QWERTY keyboard layout का आविष्कार किसने किया? — **Christopher Latham Sholes**
3. निम्न में से input व output दोनों device कौन-सा है — Modem, Scanner, Keyboard, Mouse? — **Modem**
4. परीक्षा उत्तर-पत्रक पढ़ने हेतु कौन-सा device प्रयुक्त होता है? — **OMR (Optical Mark Reader)**

## परीक्षा हेतु सबसे महत्वपूर्ण तथ्य

- OMR, OCR, MICR — तीनों के पूरे नाम व अंतर (क्रमशः गोले पढ़ना, अक्षर पहचानना, चुंबकीय स्याही पढ़ना) याद रखें — ये सबसे आम confusion-प्रश्न हैं।
- Touchscreen/Modem/Headset — "दोनों (Input+Output)" श्रेणी के devices के रूप में विशेष रूप से याद रखें।
- Mouse का आविष्कारक (Douglas Engelbart) व QWERTY का आविष्कारक (Sholes) अलग-अलग व्यक्ति हैं — भ्रमित न करें।
