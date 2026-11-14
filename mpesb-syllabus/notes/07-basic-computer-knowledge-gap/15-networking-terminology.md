# नेटवर्किंग शब्दावली — LAN/WAN/Wi-Fi/मॉडेम/राउटर (दैनिक-उपयोग स्तर)

नोट: Networking की गहन तकनीकी अवधारणाएं (OSI model, TCP/IP layers, DNS, IP addressing, protocols) Unit 9 (ICT) में विस्तार से कवर हैं — यहाँ केवल वह **दैनिक-उपयोग शब्दावली** है जो कार्यालयीन/घरेलू networking से सामान्य परिचय हेतु आवश्यक है।

## Network के प्रकार — फैलाव (coverage area) के आधार पर

| प्रकार | पूरा नाम | फैलाव | उदाहरण |
|---|---|---|---|
| **LAN** | Local Area Network | सीमित छोटा क्षेत्र — एक भवन/कार्यालय/परिसर | किसी कार्यालय के सभी computers को आपस में जोड़ना |
| **MAN** | Metropolitan Area Network | एक शहर जितना बड़ा क्षेत्र | किसी शहर के कई कार्यालयों को जोड़ने वाला network |
| **WAN** | Wide Area Network | बहुत बड़ा क्षेत्र — देश/महाद्वीप स्तर | **Internet** स्वयं सबसे बड़ा WAN का उदाहरण है |
| **PAN** | Personal Area Network | बहुत छोटा, व्यक्तिगत उपकरणों के बीच (कुछ मीटर) | Bluetooth से mobile-laptop connection |

**फैलाव के अनुसार क्रम:** PAN < LAN < MAN < WAN

## प्रमुख Networking Device/शब्दावली

| शब्द | अर्थ |
|---|---|
| **Modem** (Modulator-Demodulator) | ISP (Internet Service Provider) से आने वाले analog signal को computer के समझने योग्य digital signal में बदलता है, व digital data को वापस analog में — यह घर/कार्यालय तक Internet connection लाने का प्रवेश-द्वार (entry point) है |
| **Router** | एक network के भीतर कई devices (computer, mobile, laptop) के बीच data का सही रास्ता (route) तय कर आपस में व Internet से जोड़ता है — घर में Wi-Fi वितरित करने वाला device सामान्यतः Modem+Router दोनों का काम एक साथ करता है |
| **Wi-Fi** (Wireless Fidelity) | बिना तार (wireless) के, radio waves के माध्यम से network से जुड़ने की तकनीक — router से एक सीमित दायरे में उपकरण जुड़ते हैं |
| **Hotspot** | Mobile phone के Internet connection को Wi-Fi के रूप में अन्य devices से साझा करने की सुविधा |
| **Hub** | कई computers को जोड़ने वाला सरल device, जो data सभी जुड़े devices को एक साथ भेजता है (गंतव्य तय नहीं करता) — Router से कम बुद्धिमान (unintelligent), अब कम प्रचलित |
| **Switch** | Hub जैसा पर अधिक बुद्धिमान — data केवल सही गंतव्य device को भेजता है, network traffic कम करता है |
| **Ethernet Cable** | LAN में computers को भौतिक रूप से (wired) जोड़ने वाली तार |
| **Bandwidth** | Network की data transfer की क्षमता — प्रति सेकंड कितना data भेजा/प्राप्त किया जा सकता है (Mbps/Gbps में मापी जाती है) |
| **IP Address** | Network से जुड़े हर device का अद्वितीय (unique) पहचान-पत्र, जो data सही device तक पहुँचाने में प्रयुक्त होता है |
| **SSID** | किसी Wi-Fi network का नाम (जो devices पर connect करते समय सूची में दिखता है) |

## Wired बनाम Wireless Networking

| आधार | Wired (तार-आधारित) | Wireless (बिना तार) |
|---|---|---|
| माध्यम | Ethernet cable | Radio waves (Wi-Fi, Bluetooth) |
| गति व स्थिरता | सामान्यतः अधिक स्थिर व तेज़ | गतिशीलता (mobility) की सुविधा, पर हस्तक्षेप (interference) संभव |
| उदाहरण | LAN cable से जुड़ा office computer | Mobile/Laptop Wi-Fi से जुड़ा |

## महत्वपूर्ण अतिरिक्त तथ्य

- **Modem बनाम Router** — Modem Internet Service Provider (ISP) से connection घर तक लाता है; Router उस connection को घर के भीतर कई devices में बाँटता (distribute) है — दोनों को एक ही समझना एक सामान्य confusion है, हालाँकि आजकल दोनों functions एक ही single device (Wi-Fi Router सह Modem) में मिल जाते हैं।
- **Bluetooth** — कम दूरी (कुछ मीटर) की wireless तकनीक, PAN के उदाहरण के रूप में; Wi-Fi से अलग है (Wi-Fi का दायरा व गति दोनों अधिक होते हैं)।
- Internet को सबसे बड़ा उदाहरण **WAN** का माना जाता है — यह दुनिया-भर के लाखों छोटे-बड़े networks को आपस में जोड़ता है।

## अभ्यास प्रश्न

1. एक भवन/कार्यालय तक सीमित network किस श्रेणी में आता है? — **LAN**
2. Internet किस प्रकार के network का सबसे बड़ा उदाहरण है? — **WAN**
3. ISP से आने वाले signal को digital में बदलने वाला device? — **Modem**

## परीक्षा हेतु सबसे महत्वपूर्ण तथ्य

- PAN < LAN < MAN < WAN — फैलाव के अनुसार यह क्रम याद रखें।
- Modem (signal-conversion, ISP से जोड़ना) बनाम Router (devices के बीच बाँटना) का कार्य-भेद स्पष्ट रखें।
- Wi-Fi = wireless technology; Ethernet cable = wired माध्यम — दोनों का अंतर याद रखें।
