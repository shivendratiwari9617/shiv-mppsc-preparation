# फाइल एक्सटेंशन की पहचान (.docx, .xlsx, .pdf, .jpg आदि)

**File Extension** file के नाम के अंत में "." (dot/डॉट) के बाद आने वाले अक्षर होते हैं (जैसे `report.docx` में `.docx`), जो बताते हैं कि file किस प्रकार का data रखती है और उसे किस programme से खोला जाना चाहिए। Operating System extension देखकर ही तय करता है कि double-click करने पर file किस software में खुले।

## दस्तावेज़ (Document) Extensions

| Extension | प्रकार | खोलने वाला Software |
|---|---|---|
| .doc / .docx | Word Document | MS Word |
| .xls / .xlsx | Excel Spreadsheet | MS Excel |
| .ppt / .pptx | PowerPoint Presentation | MS PowerPoint |
| .pdf | Portable Document Format | Adobe Acrobat Reader (व अन्य PDF viewer) |
| .txt | Plain Text | Notepad व कोई भी text editor |
| .rtf | Rich Text Format | WordPad, MS Word |

## चित्र (Image) Extensions

| Extension | प्रकार |
|---|---|
| .jpg / .jpeg | Joint Photographic Experts Group — compressed photo format, सबसे सामान्य |
| .png | Portable Network Graphics — lossless (गुणवत्ता-हानि रहित), transparent background सहेजने योग्य |
| .gif | Graphics Interchange Format — छोटे animated चित्र |
| .bmp | Bitmap Image — बिना compression का बड़ा file-size वाला format |
| .svg | Scalable Vector Graphics — vector-आधारित, बिना गुणवत्ता खोए किसी भी आकार में बड़ा/छोटा किया जा सकता है |

## Audio/Video Extensions

| Extension | प्रकार |
|---|---|
| .mp3 | Audio (compressed music format) |
| .wav | Audio (uncompressed, उच्च गुणवत्ता) |
| .mp4 | Video (सबसे सामान्य video format) |
| .avi | Audio Video Interleave — पुराना video format |
| .mkv | Matroska — high-quality video container |

## Compressed/Archive Extensions

| Extension | प्रकार |
|---|---|
| .zip | सबसे सामान्य compression format — कई files को एक में समेटना |
| .rar | WinRAR द्वारा बनाया गया compressed format |

## Executable व System Extensions

| Extension | प्रकार |
|---|---|
| .exe | Executable — Windows में चलने वाला programme/installer |
| .html / .htm | Web Page (HyperText Markup Language) |
| .css | Web page की styling file (Cascading Style Sheets) |
| .js | JavaScript file (web page की scripting) |

## महत्वपूर्ण अतिरिक्त तथ्य

- Extension बदलने मात्र से file का वास्तविक प्रकार (internal data-format) नहीं बदलता — केवल नाम बदलने से एक .jpg file .docx नहीं बन जाती; उसे खोलने पर error आएगा (यह एक common conceptual trap है)।
- .jpg बनाम .png में मूल अंतर — .jpg **lossy compression** प्रयोग करता है (कुछ गुणवत्ता खोकर file-size घटाता है, फोटो हेतु उपयुक्त), .png **lossless compression** प्रयोग करता है (गुणवत्ता बरकरार रहती है, graphics/logo व transparent background हेतु उपयुक्त)।
- **PDF** को Adobe ने विकसित किया था और इसका मूल उद्देश्य था कि दस्तावेज़ किसी भी device/operating system पर बिल्कुल एक जैसा (format न बिगड़े हुए) दिखे — इसीलिए सरकारी फॉर्म व official दस्तावेज़ PDF में जारी होते हैं।
- Windows में default रूप से जानी-पहचानी file types के लिए extension छिपा (hidden) रहता है — इसे "Folder Options → View → Hide extensions for known file types" को uncheck करके दिखाया जा सकता है।

## अभ्यास प्रश्न

1. MS Excel file की डिफ़ॉल्ट extension क्या है? — **.xlsx**
2. Compressed (गुणवत्ता-हानि रहित) व transparent background सहेजने योग्य image format कौन-सा है? — **.png**
3. Windows executable/installer file किस extension से पहचानी जाती है? — **.exe**

## परीक्षा हेतु सबसे महत्वपूर्ण तथ्य

- .docx (Word), .xlsx (Excel), .pptx (PowerPoint), .pdf — Office/document extensions याद रखें।
- .jpg (lossy) बनाम .png (lossless) का अंतर याद रखें।
- केवल extension बदल देने से file का वास्तविक प्रकार नहीं बदलता — यह conceptual बिंदु याद रखें।
