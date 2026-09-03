# स्टोरेज डिवाइस — हार्ड डिस्क, SSD, पेन ड्राइव, CD/DVD — क्षमता व अंतर

Storage device वह hardware है जो data को स्थायी (permanent/non-volatile) रूप से संग्रहीत रखता है — यानी बिजली बंद होने पर भी data नष्ट नहीं होता (इसके विपरीत RAM जैसी primary memory **volatile** होती है, बिजली जाने पर data मिट जाता है)। इसे **Secondary Memory/Storage** भी कहा जाता है।

## मेमोरी मापन इकाइयों का क्रम (आधारभूत, अत्यंत महत्वपूर्ण)

1 Byte = 8 Bits
1 KB (Kilobyte) = 1024 Bytes
1 MB (Megabyte) = 1024 KB
1 GB (Gigabyte) = 1024 MB
1 TB (Terabyte) = 1024 GB
1 PB (Petabyte) = 1024 TB

प्रत्येक इकाई अगली से **1024 गुना** बड़ी होती है (क्योंकि computer binary — आधार-2 प्रणाली — पर काम करता है, और 2¹⁰ = 1024) — दशमलव प्रणाली के 1000 से भ्रमित न हों, यह गणनात्मक (numerical) प्रश्नों का आधार है।

## Secondary Storage Devices — तुलना तालिका

| Device | तकनीक | सामान्य क्षमता | विशेषता |
|---|---|---|---|
| **Hard Disk Drive (HDD)** | Magnetic — घूर्णनशील धातु की plate (platter) पर चुंबकीय रूप से data लिखा जाता है, एक read/write head प्लेट के ऊपर घूमकर data पढ़ता/लिखता है | सामान्यतः 500 GB – 8 TB (consumer), enterprise में 20 TB+ | सस्ता प्रति-GB, यांत्रिक भाग (moving parts) होने के कारण SSD से धीमा व झटके/गिरने से भौतिक क्षति संभव |
| **SSD (Solid State Drive)** | Flash Memory (NAND) — कोई घूमने वाला भाग नहीं, data electronic रूप से chip में संग्रहीत | सामान्यतः 250 GB – 4 TB (consumer) | HDD से कई गुना तेज़ (data access/boot time में भारी अंतर), शांत (silent — कोई moving part नहीं), कम बिजली खपत, पर महंगा प्रति-GB |
| **Pen Drive / USB Flash Drive** | Flash Memory, USB port से जुड़ने वाली छोटी portable device | सामान्यतः 8 GB – 256 GB (बाज़ार में 1 TB तक भी उपलब्ध) | पोर्टेबल, plug-and-play (बिना अतिरिक्त driver install किए तुरंत काम करने वाली), hot-swappable (कंप्यूटर चालू रहते हुए भी जोड़ी/निकाली जा सकती है) |
| **CD (Compact Disc)** | Optical — laser किरण द्वारा पढ़ी/लिखी जाती है | ~700 MB (मानक 80-मिनट CD) | सस्ती, अब काफी हद तक अप्रचलित |
| **DVD (Digital Versatile/Video Disc)** | Optical | Single Layer: 4.7 GB; Double Layer: 8.5 GB | CD से अधिक क्षमता, film/software वितरण हेतु प्रयुक्त होती रही |
| **Blu-ray Disc** | Optical (नीली — blue-violet — laser किरण) | Single Layer: 25 GB; Double Layer: 50 GB | उच्च-परिभाषा (High Definition) video हेतु |
| **Memory Card (SD/microSD)** | Flash Memory | सामान्यतः 8 GB – 1 TB | Camera, mobile phone, tablet में प्रयुक्त |

## HDD बनाम SSD — प्रमुख अंतर (सबसे अधिक पूछा जाने वाला बिंदु)

| आधार | HDD | SSD |
|---|---|---|
| तकनीक | Magnetic घूर्णनशील disk | Flash memory chip (कोई गतिशील भाग नहीं) |
| गति | धीमी (यांत्रिक घूर्णन में समय लगता है) | बहुत तेज़ (electronic access, कोई physical movement नहीं) |
| शोर व कंपन | होता है (disk घूमने की आवाज़) | नहीं होता |
| कीमत प्रति GB | कम | अधिक |
| टिकाऊपन (झटके/गिरने पर) | कम (यांत्रिक भाग टूट सकते हैं) | अधिक मज़बूत (shock-resistant) |
| बिजली खपत | अधिक | कम |

## प्राथमिक (Primary) बनाम द्वितीयक (Secondary) मेमोरी — त्वरित पुनरावलोकन

- **Primary Memory (RAM, ROM, Cache)** — CPU द्वारा सीधे access की जाती है, RAM **volatile** होती है (बिजली जाने पर data मिट जाता है), तेज़ पर महंगी व सीमित क्षमता।
- **Secondary Memory (HDD, SSD, Pen Drive, CD/DVD)** — स्थायी (non-volatile) संग्रहण, बिजली जाने पर भी data सुरक्षित रहता है, धीमी पर सस्ती व बड़ी क्षमता।

## महत्वपूर्ण अतिरिक्त तथ्य

- Optical disc (CD/DVD/Blu-ray) data को **laser किरण** द्वारा disc की सतह पर सूक्ष्म गड्ढों (**pits**) व समतल भागों (**lands**) के pattern के रूप में पढ़ती/लिखती है — यही binary 0 और 1 का भौतिक रूप है।
- **NAND Flash Memory** — SSD, Pen Drive व Memory Card — तीनों की core तकनीक एक ही है।
- SSD में data access का समय HDD की तुलना में सामान्यतः बहुत कम होता है क्योंकि इसमें कोई भौतिक घूर्णन (mechanical rotation) नहीं होता — इसलिए mechanical delay समाप्त हो जाती है।
- Pen drive को **USB (Universal Serial Bus)** port के माध्यम से जोड़ा जाता है — यह **hot-swappable** है, अर्थात कंप्यूटर बंद किए बिना जोड़ी/निकाली जा सकती है।

## अभ्यास प्रश्न

1. 1 GB में कितने MB होते हैं? — **1024 MB**
2. कोई गतिशील/यांत्रिक भाग न होने वाला storage device कौन-सा है? — **SSD**
3. एक single-layer DVD की सामान्य क्षमता कितनी है? — **4.7 GB**
4. RAM किस श्रेणी की memory है — volatile या non-volatile? — **Volatile**

## परीक्षा हेतु सबसे महत्वपूर्ण तथ्य

- Memory इकाइयों का क्रम (Byte→KB→MB→GB→TB, प्रत्येक ×1024) रटें — गणनात्मक (numerical) प्रश्न बनते हैं।
- HDD (magnetic, धीमा, सस्ता) बनाम SSD (flash, तेज़, महंगा) का अंतर सबसे अधिक पूछा जाता है।
- CD ≈ 700 MB, DVD (single layer) = 4.7 GB, DVD (double layer) = 8.5 GB — ये संख्याएं याद रखें।
- Primary (अस्थायी/volatile) बनाम Secondary (स्थायी/non-volatile) memory का मूल भेद स्पष्ट रखें।

## स्रोत

- सामान्य optical disc क्षमता (CD ~700 MB, DVD 4.7/8.5 GB) व HDD/SSD क्षमता-श्रेणी मानक उद्योग तथ्य हैं, वेब-सत्यापित।
