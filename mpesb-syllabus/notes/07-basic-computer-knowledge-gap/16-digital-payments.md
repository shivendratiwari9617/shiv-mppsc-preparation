# डिजिटल भुगतान — UPI, नेट बैंकिंग, मोबाइल बैंकिंग

Digital Payment वे भुगतान (payment) प्रणालियाँ हैं जो भौतिक नकद (cash) के बिना, इलेक्ट्रॉनिक माध्यम से धन का हस्तांतरण (transfer) करती हैं। भारत सरकार के **Digital India** अभियान व Demonetisation (नोटबंदी, 2016) के बाद इनका उपयोग तेज़ी से बढ़ा — यह MPESB/MPPSC प्रारंभिक के "सामान्य कंप्यूटर ज्ञान" व "समसामयिकी" दोनों में समान रूप से प्रासंगिक विषय है।

## UPI (Unified Payments Interface)

**UPI** — **National Payments Corporation of India (NPCI)** द्वारा विकसित एक real-time payment प्रणाली, जो कई bank accounts को एक ही mobile application में जोड़कर तुरंत (instant) धन-हस्तांतरण संभव बनाती है — यह 2016 में launch हुई थी।

### UPI की कार्यविधि

1. Bank account को UPI app (जैसे Google Pay, PhonePe, Paytm, BHIM) से link करना, mobile number verification के माध्यम से।
2. एक **Virtual Payment Address (VPA)** बनती है, जैसे `name@bankname` या `mobile@upi` — इसी पते पर पैसा भेजा/मंगाया जा सकता है, बिना account number/IFSC बताए।
3. भुगतान करते समय **UPI PIN** (एक गुप्त संख्या) डालकर लेन-देन प्रमाणित (authenticate) किया जाता है।
4. QR code scan कर या mobile number/VPA डालकर तुरंत भुगतान संभव।

### UPI लेन-देन सीमा (Transaction Limits) — NPCI द्वारा निर्धारित

| श्रेणी | सीमा |
|---|---|
| सामान्य UPI लेन-देन (दैनिक) | ₹1,00,000 (₹1 लाख) — सभी UPI apps में मिलाकर संयुक्त सीमा |
| दैनिक लेन-देन संख्या | सामान्यतः लगभग 20 लेन-देन/दिन |
| विशेष श्रेणियाँ (capital markets, insurance, education, healthcare, IPO, सरकारी भुगतान) | ₹5 लाख प्रति लेन-देन तक |

**नोट:** व्यक्तिगत bank, NPCI की इस ऊपरी सीमा के भीतर अपनी risk policy के अनुसार अलग-अलग सीमा भी तय कर सकते हैं — इसलिए वास्तविक सीमा bank-दर-bank थोड़ी भिन्न हो सकती है।

## अन्य Fund Transfer प्रणालियाँ — तुलना (परीक्षा में सर्वाधिक पूछा जाने वाला बिंदु)

| प्रणाली | पूरा नाम | गति | सीमा | उपयुक्त कब |
|---|---|---|---|---|
| **NEFT** | National Electronic Funds Transfer | Batch में process (आधे-घंटे के batches में), अब 24×7×365 उपलब्ध | कोई RBI-निर्धारित ऊपरी सीमा नहीं | गैर-तत्काल (non-urgent), सामान्य राशि के लेन-देन हेतु |
| **RTGS** | Real Time Gross Settlement | तत्काल (real-time), एक-एक लेन-देन अलग से settle होता है | न्यूनतम ₹2 लाख, ऊपरी सीमा नहीं — बड़ी राशि हेतु | बड़ी राशि के तत्काल/समय-संवेदनशील (time-critical) लेन-देन हेतु |
| **IMPS** | Immediate Payment Service | तुरंत (instant, सेकंडों में), 24×7×365 उपलब्ध | सामान्यतः ₹5 लाख तक | तत्काल भुगतान, छोटी-मध्यम राशि हेतु, बैंक बंद होने पर भी |
| **UPI** | Unified Payments Interface | तुरंत (instant) | ₹1 लाख/दिन (सामान्य श्रेणी) | mobile-app आधारित तत्काल भुगतान, QR code scan से |

तीनों (NEFT, RTGS, IMPS) अब **24×7×365** (सप्ताहांत/अवकाश सहित) उपलब्ध हैं — यह RBI का हालिया सुधार है, पहले NEFT/RTGS केवल banking hours में उपलब्ध थे।

## Net Banking (Internet Banking)

Bank की आधिकारिक website के माध्यम से browser से login कर खाता प्रबंधन (balance जाँचना, fund transfer, bill payment, statement download) करने की सुविधा — computer/laptop पर प्रयुक्त होने वाला पारंपरिक digital banking माध्यम।

## Mobile Banking

Bank द्वारा जारी mobile application (app) के माध्यम से smartphone पर वही सुविधाएं — Net Banking का मोबाइल-केंद्रित रूप, आजकल सर्वाधिक प्रयुक्त माध्यम बन चुका है।

## Digital Payment के अन्य साधन

| साधन | विशेषता |
|---|---|
| **Debit/Credit Card** | Physical/virtual card से भुगतान — Debit card खाते से सीधे राशि काटता है, Credit card उधार (credit) पर आधारित है |
| **Mobile Wallet** | App में पहले से राशि जमा (load) कर रखना, फिर उससे भुगतान करना (जैसे Paytm Wallet) |
| **AEPS (Aadhaar Enabled Payment System)** | Aadhaar number व fingerprint से बिना card/PIN के भुगतान — ग्रामीण/बैंकिंग-सुविधा-रहित क्षेत्रों हेतु विशेष रूप से उपयोगी |
| **BHIM App** | सरकार द्वारा NPCI के माध्यम से जारी आधिकारिक UPI app (Bharat Interface for Money) |

## महत्वपूर्ण अतिरिक्त तथ्य

- UPI का संचालन **NPCI (National Payments Corporation of India)** करता है — यह RBI व Indian Banks' Association (IBA) की एक पहल है।
- UPI में लेन-देन **VPA (Virtual Payment Address)** से होता है — इससे बिना account number/IFSC साझा किए भुगतान संभव है, जो सुरक्षा की दृष्टि से लाभदायक है।
- **RTGS** का प्रयोग केवल ₹2 लाख या अधिक की राशि हेतु किया जा सकता है — इससे कम राशि के लिए NEFT/IMPS/UPI उपयुक्त हैं।
- NEFT/RTGS/IMPS का ऑनलाइन उपयोग (net-banking/mobile-app से) व्यक्तिगत ग्राहकों हेतु सामान्यतः निःशुल्क है।

## अभ्यास प्रश्न

1. UPI का संचालन कौन-सी संस्था करती है? — **NPCI (National Payments Corporation of India)**
2. न्यूनतम ₹2 लाख की राशि हेतु प्रयुक्त होने वाली तत्काल fund transfer प्रणाली? — **RTGS**
3. NPCI द्वारा जारी सरकारी UPI application का नाम? — **BHIM**

## परीक्षा हेतु सबसे महत्वपूर्ण तथ्य

- NEFT (batch, कोई सीमा नहीं), RTGS (न्यूनतम ₹2 लाख, real-time), IMPS (तुरंत, ₹5 लाख तक), UPI (तुरंत, ₹1 लाख/दिन सामान्य सीमा) — चारों के मूल अंतर याद रखें।
- UPI = NPCI द्वारा संचालित, VPA आधारित, mobile-app केंद्रित तत्काल भुगतान प्रणाली।
- सभी प्रमुख fund-transfer प्रणालियाँ अब 24×7×365 उपलब्ध हैं — यह हालिया परिवर्तन याद रखें।

## स्रोत

- [UPI Transaction Limit Per Day in 2026 — Razorpay](https://razorpay.com/blog/upi-transaction-limit-per-day/)
- [NEFT vs RTGS vs IMPS: Limits, Speed & Charges Compared (2026) — Tips4Banking](https://tips4banking.com/banking/payments/neft-vs-rtgs-vs-imps/)
- [Difference Between IMPS, NEFT and RTGS — BankBazaar](https://www.bankbazaar.com/ifsc/difference-neft-rtgs-imps.html)
