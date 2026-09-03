# ऑपरेटिंग सिस्टम — Windows GUI बेसिक्स (फाइल/फोल्डर प्रबंधन, कंट्रोल पैनल, टास्कबार)

नोट: OS की आंतरिक अवधारणाएं (process/thread, memory management, kernel) Unit 9 (ICT) में विस्तार से कवर हैं — यहाँ उन्हें दोहराया नहीं जा रहा। यहाँ केवल **Windows के रोज़मर्रा GUI (Graphical User Interface) उपयोग** पर ध्यान है, जो कार्यालयीन कंप्यूटर उपयोग से जुड़े व्यावहारिक प्रश्नों की नींव है — MPSI के दैनिक कार्यालयीन कार्य के लिए यह सबसे प्रत्यक्ष रूप से प्रासंगिक टॉपिक है।

## Desktop के मूल घटक

Windows चालू होने पर सबसे पहले जो screen दिखती है उसे **Desktop** कहते हैं — यह user का मुख्य कार्य-क्षेत्र है।

| घटक | कार्य |
|---|---|
| **Desktop** | मुख्य screen, icons व shortcuts का प्रारंभिक स्थान |
| **Taskbar** | Screen के निचले भाग की पट्टी — Start button, खुले programme, System Tray (घड़ी, network, volume icon) दिखाती है |
| **Start Menu** | Programme, settings व files तक पहुँचने का मुख्य द्वार |
| **System Tray (Notification Area)** | Taskbar के दाईं ओर — घड़ी, battery, volume, network icon |
| **Icon** | Programme/file/folder का दृश्य प्रतीक (छोटा चित्र) |
| **Window** | प्रत्येक खुला programme एक आयताकार frame में चलता है — Minimize, Maximize, Close बटन ऊपर दाईं ओर होते हैं |

## File Explorer व File/Folder प्रबंधन

Windows में data को व्यवस्थित (organize) रखने की मूल इकाइयाँ **File** व **Folder** हैं, जिन्हें **File Explorer** (पहले "My Computer"/"Windows Explorer" कहलाता था) के माध्यम से प्रबंधित किया जाता है।

- **File** — data की एकल इकाई (दस्तावेज़, चित्र, programme)।
- **Folder/Directory** — files/अन्य folders को व्यवस्थित रखने का container।
- **Path** — किसी file का स्थान बताने वाला पूरा पता, जैसे `C:\Users\Documents\file.docx` — यह root drive से शुरू होकर हर उप-folder को पार करते हुए file तक पहुँचता है।
- सामान्य क्रियाएं: नया folder बनाना (right-click → New → Folder), Copy-Paste, Cut-Paste, नाम बदलना (Rename), हटाना (Delete → Recycle Bin में जाता है), स्थायी रूप से हटाना (**Shift+Delete** — Recycle Bin को bypass करके सीधे मिटाना)।
- **Recycle Bin** — हटाई गई files अस्थायी रूप से यहाँ जाती हैं, स्थायी हटाने से पहले वहाँ से पुनर्प्राप्ति (restore) संभव है — यह एक "safety net" के रूप में काम करता है।
- **Drive Letter प्रणाली** — Windows में हर storage device को एक अक्षर मिलता है (C:, D:, E:...); C: सामान्यतः primary (system) drive होती है जिसमें OS स्वयं install रहता है।

## Control Panel

Windows की settings प्रबंधित करने का पारंपरिक केंद्रीय स्थान (आधुनिक Windows में अधिकांश काम "Settings" app में स्थानांतरित हो चुका है, पर Control Panel अभी भी उपलब्ध रहता है)।

| श्रेणी | कार्य |
|---|---|
| System and Security | Windows Update, Firewall, Backup |
| Network and Internet | Network connections, Wi-Fi settings |
| Hardware and Sound | Printer, devices, volume settings |
| Programs | Programme install/uninstall करना (Programs and Features) |
| User Accounts | उपयोगकर्ता खाता प्रबंधन, password |
| Appearance and Personalization | Theme, display settings |
| Clock and Region | दिनांक/समय, भाषा settings |

## Taskbar व Window प्रबंधन की सामान्य क्रियाएं

- **Alt+Tab** — खुले programmes के बीच switch करना (होल्ड करते हुए Tab दबाते रहने से preview के साथ चयन)।
- **Snap** — किसी window को screen के किनारे तक खींचने से वह screen के आधे/चौथाई हिस्से में automatically fit हो जाती है — दो windows को साथ-साथ (side-by-side) देखने हेतु उपयोगी।
- **Task Manager** — `Ctrl+Shift+Esc` से खोलें; चल रहे programme/process देखना व अटके हुए (not responding) programme को ज़बरदस्ती बंद करना (**End Task**)।

## महत्वपूर्ण अतिरिक्त तथ्य

- File नाम के अंत में **extension** (जैसे .docx, .jpg) होता है जो file का प्रकार व उसे किस programme से खोलना है, बताता है (विस्तार से बिंदु 14 देखें)।
- **Desktop Shortcut** मूल file की प्रतिलिपि (copy) नहीं, बल्कि उसका एक "link" होता है — shortcut हटाने से मूल file प्रभावित नहीं होती, यह केवल रास्ता (pointer) है।
- Windows में एक साथ कई programme चलाने की क्षमता को **Multitasking** कहते हैं।
- `Windows Key + D` — तुरंत सभी windows minimize कर Desktop दिखाता है; `Windows Key + E` — File Explorer तुरंत खोलता है।

## अभ्यास प्रश्न

1. हटाई गई file अस्थायी रूप से कहाँ जाती है? — **Recycle Bin**
2. Task Manager खोलने की shortcut key? — **Ctrl+Shift+Esc**
3. Programme install/uninstall करने हेतु Control Panel की कौन-सी श्रेणी प्रयुक्त होती है? — **Programs (Programs and Features)**
4. Desktop shortcut हटाने से मूल file पर क्या असर पड़ता है? — **कोई असर नहीं (shortcut केवल एक link है)**

## परीक्षा हेतु सबसे महत्वपूर्ण तथ्य

- Taskbar, Start Menu, System Tray, Desktop — इन मूल GUI घटकों के नाम व कार्य याद रखें।
- Recycle Bin = हटाई गई files का अस्थायी भंडार; Shift+Delete = स्थायी रूप से हटाना — यह अंतर स्पष्ट रखें।
- Control Panel की मुख्य श्रेणियाँ (User Accounts, Programs, Network) से परिचित रहें।
