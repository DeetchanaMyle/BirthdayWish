const phrases = [
    { text: "பிறந்த நாள் வாழ்த்துகள்", language: "Tamil (Thamizh)" },
    { text: "जन्मदिन की शुभकामनाएं (Janmadin Ki Shubhkaamnayein)", language: "Hindi" },
    { text: "¡Feliz cumpleaños!", language: "Spanish" },
    { text: "Joyeux anniversaire !", language: "French" },
    { text: "Alles Gute zum Geburtstag!", language: "German" },
    { text: "生日快乐 (Shēngrì kuàilè)", language: "Chinese (Mandarin)" },
    { text: "お誕生日おめでとうございます (Otanjōbi omedetō gozaimasu)", language: "Japanese" },
    { text: "생일 축하합니다 (Saengil Chukhahamnida)", language: "Korean" },
    { text: "С днём рождения! (S dnyom rozhdeniya!)", language: "Russian" },
    { text: "عيد ميلاد سعيد (Eid milad saeid)", language: "Arabic" },
    { text: "Feliz aniversário!", language: "Portuguese" },
    { text: "Buon compleanno!", language: "Italian" },
    { text: "Χρόνια πολλά (Chronia polla)", language: "Greek" },
    { text: "สุขสันต์วันเกิด (Suk San Wan Keut)", language: "Thai" },
    { text: "জন্মদিনের শুভেচ্ছা (Janmodiner Shubhechha)", language: "Bengali" },
    { text: "Selamat Hari Lahir!", language: "Malay" },
    { text: "Heri ya siku ya kuzaliwa!", language: "Swahili" },
    { text: "Doğum günün kutlu olsun!", language: "Turkish" },
    { text: "Gefeliciteerd met je verjaardag!", language: "Dutch" },
    { text: "Chúc mừng sinh nhật!", language: "Vietnamese" },
    { text: "ਜਨਮਦਿਨ ਦੀਆਂ ਵਧਾਈਆਂ (Janamdin Diyan Wadhaiyan)", language: "Punjabi" },
    { text: "سالگرہ مبارک (Saalgirah Mubarak)", language: "Urdu" },
    { text: "Maligayang kaarawan!", language: "Filipino (Tagalog)" },
    { text: "Wszystkiego najlepszego z okazji urodzin!", language: "Polish" },
    { text: "تولدت مبارک (Tavalodet Mobarak)", language: "Persian (Farsi)" },
    { text: "יום הולדת שמח (Yom Huledet Sameach)", language: "Hebrew" },
    { text: "जन्मदिनको शुभकामना (Janmadinko Shubhakamana)", language: "Nepali" },
    { text: "උපන්දිනයට සුබ පැතුම් (Upandinanata Suba Pathum)", language: "Sinhala" },
    { text: "Boldog születésnapot!", language: "Hungarian" },
    { text: "Všechno nejlepší k narozeninám!", language: "Czech" },
    { text: "Grattis på födelsedagen!", language: "Swedish" },
    { text: "Hyvää syntymäpäivää!", language: "Finnish" },
    { text: "Tillykke med fødselsdagen!", language: "Danish" },
    { text: "Gratulerer med dagen!", language: "Norwegian" },
    { text: "La mulți ani!", language: "Romanian" },
    { text: "З днем народження! (Z Dnem Narodzhennya!)", language: "Ukrainian" },
    { text: "Срећан рођендан (Srećan Rođendan)", language: "Serbian" },
    { text: "Všetko najlepšie k narodeninám!", language: "Slovak" },
    { text: "Su gimtadieniu!", language: "Lithuanian" },
    { text: "Sretan rođendan!", language: "Croatian" },
    { text: "Daudz laimes dzimšanas dienā!", language: "Latvian" },
    { text: "Palju õnne sünnipäevaks!", language: "Estonian" },
    { text: "გილოცავ დაბადების დღეს! (Gilotsav Dabadebis Dghes!)", language: "Georgian" },
    { text: "မွေးနေ့ဆုတောင်းများ (Mway Nay Su Tawk Mya)", language: "Burmese" },
    { text: "សូរអេមថ្ងៃកំណើត (Sour Aem Thngai Komnaet)", language: "Khmer" },
    { text: "ສຸຂສັນວັນເກີດ (Suk San Wan Keut)", language: "Lao" },
    { text: "Mirary fitsingerenan'ny andro nahaterahana sambatra!", language: "Malagasy" },
    { text: "Ndewo ụbọchị ọmụmụ gị!", language: "Igbo" },
    { text: "Ku ọjọ ibi!", language: "Yoruba" },
    { text: "Usuku olumnandi lokuzalwa!", language: "Zulu" },
    { text: "Ra whanau ki a koe!", language: "Maori" },
    { text: "Hauʻoli lā hānau!", language: "Hawaiian" },
    { text: "Zorionak zure urtebetetzean!", language: "Basque" },
    { text: "Feliz aniversario!", language: "Galician" },
    { text: "Feliç aniversari!", language: "Catalan" },
    { text: "Til hamingju með afmælið!", language: "Icelandic" },
    { text: "Ծննդյան օրվա շնորհավորանքներ! (Tsnundyan Orva Shnorhavorankner!)", language: "Armenian" },
];

  
  let currentPhraseIndex = 0;
  
  function updateText() {
    const textElement = document.getElementById("happy-birthday-text");
    const languageElement = document.getElementById("language-name");
  
    const { text, language } = phrases[currentPhraseIndex];
    textElement.textContent = "";
    languageElement.textContent = "";
  
    // Typing animation for text
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < text.length) {
        textElement.textContent += text[charIndex];
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  
    // Display language name
    setTimeout(() => {
      languageElement.textContent = `(${language})`;
    }, text.length * 100 + 500);
  
    // Move to next phrase
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  }
  
  // Auto-cycle every 3 seconds
  setInterval(updateText, 4000);
  
  // Initialize first text
  updateText();
  