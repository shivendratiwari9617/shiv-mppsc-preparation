# इंटरनेट व ईमेल — ब्राउज़र, सर्च इंजन, ईमेल भेजना/प्राप्त करना, अटैचमेंट

नोट: Internet की तकनीकी architecture (IP address, DNS, HTTP/HTTPS, OSI/TCP-IP model) Unit 9 (ICT) में विस्तार से कवर है — यहाँ केवल **रोज़मर्रा के practical उपयोग** (browser चलाना, search करना, email भेजना) पर ध्यान है।

## Web Browser

Browser वह application software है जिसके माध्यम से उपयोगकर्ता Internet पर मौजूद websites को access व देख (view) पाता है। यह HTML कोड को पढ़कर उसे दृश्य (visual) पृष्ठ के रूप में render करता है।

| लोकप्रिय Browser | विकसित करने वाली कंपनी |
|---|---|
| Google Chrome | Google |
| Mozilla Firefox | Mozilla Foundation |
| Microsoft Edge | Microsoft |
| Safari | Apple |
| Opera | Opera Software |

**Browser के मूल घटक:** Address Bar (URL टाइप करने की पट्टी), Tabs (एक साथ कई pages खोलना), Bookmarks/Favorites (पसंदीदा site सहेजना), History (देखी गई sites की सूची), Back/Forward बटन, Refresh/Reload बटन।

## Search Engine

Search Engine वह website/tool है जो Internet पर मौजूद अरबों pages में से उपयोगकर्ता के query से मिलते-जुलते परिणाम खोज कर दिखाता है।

| लोकप्रिय Search Engine |
|---|
| Google (सर्वाधिक प्रयुक्त) |
| Bing (Microsoft) |
| Yahoo |
| DuckDuckGo (privacy-केंद्रित) |

Browser व Search Engine में मूल अंतर: **Browser** एक software है जो Internet तक पहुँचने का माध्यम (medium) है; **Search Engine** browser के अंदर चलने वाली एक website/service है जो जानकारी खोजने में मदद करती है — यह दोनों को एक ही समझ लेना एक common ग़लती है।

## Email (Electronic Mail)

Email Internet के माध्यम से इलेक्ट्रॉनिक संदेश (message) भेजने/प्राप्त करने की प्रणाली है।

| Email Service Provider |
|---|
| Gmail (Google) |
| Outlook/Hotmail (Microsoft) |
| Yahoo Mail |
| NIC Email (सरकारी अधिकारियों हेतु — @gov.in, @nic.in डोमेन) |

### Email के मूल घटक (Compose करते समय)

| फ़ील्ड | अर्थ |
|---|---|
| **To** | मुख्य प्राप्तकर्ता (recipient) का email address |
| **CC (Carbon Copy)** | अतिरिक्त प्राप्तकर्ता, जिनका address सभी को दिखता है |
| **BCC (Blind Carbon Copy)** | अतिरिक्त गुप्त (hidden) प्राप्तकर्ता, जिनका address अन्य किसी को नहीं दिखता |
| **Subject** | संदेश का शीर्षक/विषय |
| **Body** | संदेश की मुख्य सामग्री |
| **Attachment** | Email के साथ जोड़ी गई file (document, फोटो) |

### Email भेजने/प्राप्त करने की प्रक्रिया

1. **Compose** पर क्लिक कर नया email लिखना।
2. To/CC/BCC में प्राप्तकर्ता का address डालना।
3. Subject व Body भरना, आवश्यकता पर **Attach File** से document जोड़ना।
4. **Send** दबाना — यह email server के माध्यम से प्राप्तकर्ता के **Inbox** में पहुँचता है।
5. प्राप्त email को **Reply** (केवल भेजने वाले को उत्तर), **Reply All** (सभी को उत्तर), या **Forward** (किसी तीसरे व्यक्ति को आगे भेजना) किया जा सकता है।

### Email Folder संरचना

| Folder | अर्थ |
|---|---|
| Inbox | प्राप्त हुए सभी email |
| Sent | स्वयं द्वारा भेजे गए email |
| Drafts | लिखे गए पर अभी तक न भेजे गए email |
| Trash/Bin | हटाए गए email |
| Spam/Junk | अवांछित/संदिग्ध email (स्वतः यहाँ filter होते हैं) |

## महत्वपूर्ण अतिरिक्त तथ्य

- Email address का प्रारूप — `username@domain.com` (जैसे `example@gmail.com`) — "@" चिह्न username व domain को अलग करता है।
- **Attachment** की एक अधिकतम आकार-सीमा (size limit) होती है (Gmail में सामान्यतः 25 MB तक); बड़ी file हेतु cloud-link (Google Drive आदि) साझा किया जाता है।
- **Spam** — अवांछित (unsolicited), प्रायः विज्ञापन या धोखाधड़ी (fraud) वाले bulk email; अधिकांश email service इन्हें स्वतः पहचान कर Spam folder में डाल देती हैं।
- **Phishing Email** — किसी वास्तविक संस्था (जैसे बैंक) का रूप धारण कर गोपनीय जानकारी (password, OTP) चुराने के प्रयास वाले धोखाधड़ी email — cybersecurity awareness से जुड़ा महत्वपूर्ण बिंदु (विस्तार से बिंदु 13 में)।

## अभ्यास प्रश्न

1. जिस प्राप्तकर्ता का address अन्य किसी को न दिखे, वह किस field में डाला जाता है? — **BCC**
2. भेजे गए email कहाँ संग्रहीत होते हैं? — **Sent folder**
3. Email के साथ जोड़ी गई file क्या कहलाती है? — **Attachment**

## परीक्षा हेतु सबसे महत्वपूर्ण तथ्य

- Browser (software जो Internet access करता है) व Search Engine (जानकारी खोजने वाली website) का अंतर स्पष्ट रखें।
- CC (सबको दिखने वाला) बनाम BCC (गुप्त) का अंतर याद रखें — यह बार-बार पूछा जाता है।
- Email folders (Inbox, Sent, Drafts, Spam) व उनका अर्थ याद रखें।
