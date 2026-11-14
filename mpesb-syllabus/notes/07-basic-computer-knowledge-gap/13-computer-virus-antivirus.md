# कंप्यूटर वायरस व एंटीवायरस — बुनियादी परिचय

नोट: Cybersecurity की गहन अवधारणाएं (hacking types, cyber laws, encryption, network attacks) Unit 9 (ICT, U9-022–U9-030) में विस्तार से कवर हैं — यहाँ केवल **virus/malware का बुनियादी वर्गीकरण व antivirus की सामान्य समझ** है, जो हर बुनियादी-computer-knowledge प्रश्नपत्र में पूछी जाती है।

## Computer Virus क्या है

**Virus** एक malicious (हानिकारक) programme/code है जो स्वयं को अन्य वैध (legitimate) files/programmes से जोड़कर एक computer से दूसरे में फैलता है, और उपयोगकर्ता की जानकारी या अनुमति के बिना कंप्यूटर की फाइलों/प्रदर्शन को नुकसान पहुँचाता है। जैविक (biological) वायरस की तरह ही यह स्वयं की प्रतिलिपियाँ (copies) बनाकर फैलता है — इसी समानता के कारण इसे "वायरस" नाम मिला।

## Malware के प्रमुख प्रकार (Virus इसी बड़े परिवार का एक सदस्य है)

| प्रकार | विशेषता |
|---|---|
| **Virus** | अन्य files से स्वयं को जोड़कर फैलता है; फैलने हेतु मानवीय क्रिया (जैसे infected file चलाना) आवश्यक |
| **Worm** | Virus जैसा ही पर स्वयं-प्रतिकृति (self-replicating) करता है व network के माध्यम से बिना किसी मानवीय क्रिया के स्वयं फैलता है |
| **Trojan Horse (ट्रोजन हॉर्स)** | स्वयं को उपयोगी/वैध software के रूप में छिपाता है, पर background में हानिकारक कार्य करता है — फैलता नहीं, बल्कि उपयोगकर्ता को धोखे से install कराया जाता है |
| **Spyware** | उपयोगकर्ता की गतिविधि (browsing, keystrokes) को गुप्त रूप से track/record करता है |
| **Ransomware** | Computer की files को encrypt (लॉक) कर देता है, फिर उन्हें खोलने हेतु फिरौती (ransom) की माँग करता है |
| **Adware** | अवांछित (unwanted) विज्ञापन बार-बार दिखाता है |

## Virus फैलने के सामान्य माध्यम

- Infected pen drive/external storage device।
- Email attachment (विशेषकर अनजान प्रेषक से)।
- असुरक्षित/pirated software download करना।
- संदिग्ध websites/pop-up links पर क्लिक करना।
- Network/Internet के माध्यम से (विशेषकर worm)।

## Antivirus क्या है

**Antivirus** एक utility software (system software की श्रेणी में आता है — देखें बिंदु 6) है जो कंप्यूटर को virus/malware से बचाने, पहचानने (detect) व हटाने (remove) का कार्य करता है।

### Antivirus की कार्यविधि

1. **Scanning** — files/system को जाँचकर संदिग्ध pattern खोजना।
2. **Signature-based Detection** — पहले से ज्ञात viruses के code-pattern (signature) के database से मिलान करना।
3. **Real-time Protection** — पृष्ठभूमि (background) में लगातार निगरानी, नई/चलाई जा रही files को तुरंत जाँचना।
4. **Quarantine** — संदिग्ध file को अलग (isolate) कर देना ताकि वह बाकी system को नुकसान न पहुँचाए, बिना उसे तुरंत delete किए।

### लोकप्रिय Antivirus Software

Windows Defender (Microsoft, Windows में built-in), Quick Heal, McAfee, Norton, Kaspersky, Avast, AVG.

## बचाव के सामान्य उपाय (Best Practices)

- Antivirus को हमेशा **updated** रखना — नए viruses के signature लगातार जुड़ते रहते हैं।
- अनजान email attachment व संदिग्ध link न खोलना।
- केवल विश्वसनीय (trusted/official) स्रोतों से software download करना।
- नियमित रूप से महत्वपूर्ण data का **backup** रखना (विशेषकर ransomware से बचाव हेतु)।
- Operating System व software को समय पर update करना (security patches के लिए)।
- बाहरी pen drive/USB को उपयोग से पहले scan करना।

## महत्वपूर्ण अतिरिक्त तथ्य

- विश्व का प्रथम computer virus **"Creeper"** (1971) माना जाता है — यह एक प्रयोगात्मक (experimental) self-replicating programme था।
- **"Elk Cloner"** (1982) — पहला virus जो व्यापक रूप से "in the wild" (सामान्य उपयोगकर्ताओं तक) फैला।
- Virus बनाम Worm का मूल अंतर — Virus को फैलने के लिए किसी host file व मानवीय क्रिया की ज़रूरत होती है, Worm स्वयं ही network के माध्यम से फैल सकता है, यह अंतर बार-बार पूछा जाता है।
- **Firewall** — यह antivirus से अलग है; Firewall network traffic को filter कर अनधिकृत (unauthorized) पहुँच रोकता है, जबकि antivirus files/programmes में मौजूद malware पहचानता व हटाता है — दोनों साथ मिलकर काम करते हैं पर अलग-अलग कार्य करते हैं।

## अभ्यास प्रश्न

1. वह malware जो files को encrypt कर फिरौती माँगता है? — **Ransomware**
2. Virus व Worm में मूल अंतर क्या है? — **Worm बिना मानवीय क्रिया के स्वयं network से फैल सकता है, Virus को host file व मानवीय क्रिया चाहिए**
3. वैध software के रूप में छिपकर हानि पहुँचाने वाला malware? — **Trojan Horse**

## परीक्षा हेतु सबसे महत्वपूर्ण तथ्य

- Virus, Worm, Trojan Horse, Ransomware, Spyware — इन पाँच प्रमुख malware प्रकारों का अंतर स्पष्ट रखें।
- Antivirus (malware पहचान/हटाना) बनाम Firewall (network traffic filter करना) की भूमिका अलग-अलग समझें।
- Antivirus को नियमित रूप से update रखने का महत्व व backup की भूमिका (ransomware से बचाव) याद रखें।
