# कंप्यूटर के प्रकार — सुपर, मेनफ्रेम, मिनी, माइक्रो कंप्यूटर

Computer को उसके आकार (size), processing speed व capacity के आधार पर चार मुख्य categories में बाँटा जाता है। यह वर्गीकरण relative (सापेक्ष) है — एक category का computer दूसरी category से कितना शक्तिशाली/बड़ा है, यही आधार है, कोई fixed मापदंड नहीं। प्रारंभिक परीक्षाओं में "किस प्रकार का प्रयोग कहाँ होता है" पूछा जाता है।

## वर्गीकरण तालिका

| प्रकार | आकार/क्षमता | प्रयोग | उदाहरण |
|---|---|---|---|
| **Super Computer** | सबसे शक्तिशाली, अत्यंत तेज़ गति (**FLOPS** में मापी जाती है) | Weather forecasting (मौसम पूर्वानुमान), nuclear research, space research, जटिल वैज्ञानिक गणना जिनमें अरबों-खरबों गणनाएं प्रति सेकंड करनी हों | परम (भारत, C-DAC), Fugaku (जापान), PARAM Siddhi-AI, Cray |
| **Mainframe Computer** | बड़ा आकार, एक साथ हज़ारों उपयोगकर्ताओं को सेवा (service) दे सकता है | बैंक, बीमा कंपनी, रेलवे आरक्षण प्रणाली, बड़े सरकारी databases जहाँ भारी मात्रा में लेन-देन (transaction) एक साथ processing हों | IBM zSeries, IBM System z |
| **Mini Computer** | मध्यम आकार, कई उपयोगकर्ता एक साथ (multi-user) संभाल सकता है, पर mainframe से छोटा व कम शक्तिशाली | छोटे व्यवसाय, अनुसंधान प्रयोगशाला (research lab), विभागीय (departmental) कार्य | PDP-11, VAX-11, IBM AS/400 |
| **Micro Computer** | सबसे छोटा, एक ही microprocessor chip पर आधारित, सामान्यतः single-user (एक समय में एक व्यक्ति उपयोग) | घरेलू व कार्यालयीन दैनिक कार्य | Desktop PC, Laptop, Tablet, Smartphone |

## Micro Computer की उप-श्रेणियाँ

- **Desktop** — स्थिर (stationary), टेबल पर रखा जाने वाला; monitor, CPU cabinet, keyboard, mouse अलग-अलग units के रूप में।
- **Laptop/Notebook** — पोर्टेबल (portable), बैटरी-चालित, सभी components एक ही fold-होने-वाले frame में जुड़े हुए।
- **Tablet** — touchscreen आधारित, keyboard-रहित पोर्टेबल device।
- **Workstation** — शक्तिशाली micro computer, विशेष रूप से graphics/engineering design (CAD/CAM), video editing जैसे भारी-गणना (compute-heavy) कार्यों हेतु — सामान्य PC से अधिक शक्तिशाली पर mini computer से कम।
- **PDA/Smartphone** — जेब में आने योग्य (pocket-sized) computing device, आज के smartphone में लगभग एक पूर्ण micro computer जितनी क्षमता होती है।

## शक्ति व गति का क्रम (घटते क्रम में)

**Super Computer > Mainframe > Mini Computer > Workstation > Micro Computer (PC)**

## महत्वपूर्ण अतिरिक्त तथ्य

- Super computer की गति **FLOPS** (Floating Point Operations Per Second — प्रति सेकंड दशमलव-संख्या गणनाओं की संख्या) में मापी जाती है, जबकि सामान्य PC की processor speed **MHz/GHz** (clock speed) में मापी जाती है — दोनों अलग-अलग मापदंड (metric) हैं, इसलिए सीधी तुलना संभव नहीं।
- भारत का प्रथम super computer — **PARAM 8000** (1991, C-DAC द्वारा, Dr. विजय भटकर के नेतृत्व में विकसित) — यह इसलिए बना क्योंकि अमेरिका ने भारत को Cray super computer बेचने से मना कर दिया था, जिसके बाद भारत ने स्वदेशी तकनीक विकसित की।
- वर्तमान भारत का सबसे तेज़ super computer — **PARAM Siddhi-AI** (C-DAC, पुणे) — विश्व के शीर्ष सबसे तेज़ super computers की सूची (TOP500) में शामिल रहा है।
- Mainframe computer बड़े पैमाने पर **Batch Processing** (एक साथ बहुत-से कार्यों को क्रमबद्ध रूप से process करना) व **Transaction Processing** (जैसे बैंकिंग लेन-देन) के लिए प्रसिद्ध हैं।
- Mini computer की स्वतंत्र category अब काफी हद तक "server" व शक्तिशाली workstation में विलीन (merge) हो चुकी है — आधुनिक शब्दावली में mini computer शब्द कम प्रचलित है, पर परीक्षा में classical वर्गीकरण के रूप में अभी भी पूछा जाता है।

## अभ्यास प्रश्न

1. Weather forecasting (मौसम पूर्वानुमान) हेतु किस प्रकार का computer प्रयुक्त होता है? — **Super Computer**
2. बैंकों में हज़ारों लेन-देन एक साथ संभालने वाला computer? — **Mainframe Computer**
3. भारत के प्रथम super computer का नाम? — **PARAM 8000**
4. Super computer की गति किस इकाई में मापी जाती है? — **FLOPS**

## परीक्षा हेतु सबसे महत्वपूर्ण तथ्य

- चार प्रकार व उनका शक्ति-क्रम (Super > Mainframe > Mini > Micro) याद रखें।
- Super Computer = FLOPS में मापी गति; PARAM श्रृंखला भारत की उपलब्धि है — बार-बार पूछा जाता है।
- Mainframe को बैंकिंग/बड़े database से जोड़ें, Micro को व्यक्तिगत उपयोग से जोड़ें।
