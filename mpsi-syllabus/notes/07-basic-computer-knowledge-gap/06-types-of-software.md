# सॉफ्टवेयर के प्रकार — सिस्टम सॉफ्टवेयर बनाम एप्लीकेशन सॉफ्टवेयर

Software निर्देशों (instructions) का वह समूह (set of programs) है जो hardware को बताता है कि कोई कार्य कैसे करना है — hardware केवल भौतिक (physical) पुर्ज़े हैं जो software के बिना कुछ नहीं कर सकते। Software को उसके उद्देश्य के आधार पर दो मुख्य categories में बाँटा जाता है।

## 1. System Software

System software hardware व अन्य software (जैसे application software) के बीच सेतु (bridge/interface) का कार्य करता है — यह कंप्यूटर के मूल संचालन (basic functioning) हेतु आवश्यक है, और सामान्यतः computer चालू होते ही background में चलना शुरू हो जाता है।

| उप-प्रकार | कार्य | उदाहरण |
|---|---|---|
| **Operating System (OS)** | Hardware resources (CPU, memory, storage) का प्रबंधन (management), user को interface प्रदान करना | Windows, Linux, macOS, Android, iOS |
| **Device Driver** | विशिष्ट hardware (printer, graphics card) को OS से संवाद (communicate) कराने वाला छोटा software | Printer driver, Graphics driver |
| **Utility Software** | System maintenance (रखरखाव) कार्य | Antivirus, Disk Cleanup, File Compression (WinRAR/WinZip), Backup tool |
| **Language Translator** | Programming language को machine language में बदलना | Compiler, Interpreter, Assembler |
| **Firmware** | Hardware में स्थायी रूप से संग्रहीत निम्न-स्तरीय (low-level) software | BIOS/UEFI |

## 2. Application Software

Application software अंतिम उपयोगकर्ता (end-user) के किसी विशिष्ट कार्य को पूरा करने हेतु डिज़ाइन किया जाता है — यह हमेशा system software (OS) के ऊपर चलता है, स्वतंत्र रूप से नहीं चल सकता।

| श्रेणी | उदाहरण |
|---|---|
| Word Processing | MS Word, Google Docs |
| Spreadsheet | MS Excel, Google Sheets |
| Presentation | MS PowerPoint |
| Browser | Google Chrome, Mozilla Firefox |
| Multimedia | VLC Media Player, Adobe Photoshop |
| Database Management | MS Access, MySQL, Oracle |
| Communication | WhatsApp, Zoom, MS Teams |

## Language Translator के प्रकार (सामान्य Confusion बिंदु)

| प्रकार | कार्य विधि |
|---|---|
| **Compiler** | पूरे programme को एक साथ (in one go) machine language में translate करता है, फिर execute करता है; त्रुटियाँ (errors) अंत में एक साथ दिखाता है |
| **Interpreter** | Programme को line-by-line (एक-एक पंक्ति करके) translate व execute करता है; error मिलते ही execution रुक जाता है |
| **Assembler** | Assembly language को machine language में बदलता है |

## System बनाम Application Software — त्वरित अंतर

| आधार | System Software | Application Software |
|---|---|---|
| उद्देश्य | Hardware व अन्य software का प्रबंधन | User के विशिष्ट कार्य पूरे करना |
| कब चलता है | Computer चालू होते ही (background में) | उपयोगकर्ता द्वारा आवश्यकतानुसार चलाया जाता है |
| निर्भरता (Dependency) | सामान्यतः स्वतंत्र | System software (OS) पर निर्भर |
| उदाहरण | Windows, Linux, Device Driver | MS Word, Excel, Browser |

## महत्वपूर्ण अतिरिक्त तथ्य

- **Proprietary (मालिकाना) बनाम Open Source (मुक्त-स्रोत) Software** — Windows/MS Office proprietary (सशुल्क license, बंद source-code) हैं; Linux/LibreOffice/Ubuntu open-source (निःशुल्क, खुला source-code) हैं।
- **Freeware बनाम Shareware** — Freeware पूर्णतः निःशुल्क (जैसे VLC); Shareware सीमित समय/feature तक निःशुल्क, फिर भुगतान (payment) आवश्यक।
- **BIOS/UEFI** — computer चालू होते ही सबसे पहले चलने वाला firmware, hardware की प्रारंभिक जाँच (**POST — Power-On Self-Test**) करता है, फिर operating system को load करता है।

## अभ्यास प्रश्न

1. निम्न में से कौन-सा system software है — MS Word, Windows OS, Photoshop, Chrome? — **Windows OS**
2. Programme को line-by-line translate व execute करने वाला translator? — **Interpreter**
3. Antivirus किस श्रेणी का software है? — **System Software (Utility)**

## परीक्षा हेतु सबसे महत्वपूर्ण तथ्य

- System software (OS, Driver, Utility) बनाम Application software (Word, Excel, Browser) का स्पष्ट वर्गीकरण याद रखें।
- Compiler बनाम Interpreter का अंतर (एक साथ बनाम line-by-line) एक classic प्रश्न है।
- Antivirus/Disk Cleanup जैसे "Utility" programme को system software में गिनना न भूलें (अक्सर गलती से application मान लिया जाता है)।
