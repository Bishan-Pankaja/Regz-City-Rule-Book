document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");
    const ruleSections = document.querySelectorAll(".rule-section");
    const langItems = document.querySelectorAll(".lang-item");

    // Language translations for all content
    const translations = {
        en: {
            title: "Regz City Rule Book",
            header: "<span>Regz Roleplay</span><br><span class=\"rules\">Rule Book</span>",
            content: "Our rules are here to keep the server fair, realistic, and fun. Please respect others, follow staff guidance, and roleplay properly.<br>Breaking rules may lead to warnings or bans.",
            menu: {
                "server-rules": "Roleplay Rules",
                "crew-rules": "Crew Rules",
                "situation-rules": "Situation Rules"
            },
            situationRules: "1. Roleplay all situations realistically.<br>2. No random deathmatching (RDM).<br>3. Always prioritize story over winning.<br>[...Placeholder for additional rules...]",
            footer: "Developed by Team Of Regz<br>&copy; 2025 Regz Pvt. Ltd. All rights reserved.",
            "rule-1": "<strong>[1] Mature</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You must be mature enough to handle heated situations. Do not bring in-character (IC) issues, such as gang fights, to Discord.<br><br><br><br>",
            "rule-2": "<strong>[2] Hate</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The use of racial slurs, derogatory statements, or homophobic terms is strictly prohibited.<br><br><br><br>",
            // ... (rest of the English rules as provided in your translations object)
            "rule-22": "<strong>[22] Main Other Rules</strong><br><br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;Fake hostages (using friends) for robberies are not allowed.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;Interacting with clearly AFK players in non-RP positions is prohibited.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;Recording is allowed with in-game phones or cameras, but audio capture is limited to realistic ranges.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;No initiating RP or robbing banks, jewelry, or convenience stores 30 minutes before a tsunami.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;Only one character can be in a recognized gang; other characters cannot share the same agenda.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;Reviving downed players to take them hostage is not allowed.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;Mini/half-sized player peds cannot shoot from vehicles.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;Do not approach staff in-game for issues; use /report.",
            "crew-rule-1": "<strong>[1] Mature</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You must be mature enough to handle heated situations. Do not bring in-character (IC) issues, such as gang fights, to Discord.<br><br><br><br>",
            "crew-rule-2": "<strong>[2] Pov</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In Every Situation You Have To Take Pov Record.<br><br><br><br>",
            // ... (rest of the English crew rules as provided)
            "crew-rule-22": "<strong>[22] Roleplay Comes First</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Above all, these rules exist to promote immersive roleplay. Winning is secondary to creating fun, fair, and realistic RP experiences.<br><br><br><br>"
        },
        si: {
            title: "රෙග්ස් නගර නීති පොත",
            header: "<span>රෙග්ස් රෝල්ප්ලේ</span><br><span class=\"rules\">නීති පොත</span>",
            content: "අපගේ නීති මෙහි ඇත්තේ සර්වරය සාධාරණ, යථාර්ථවාදී සහ විනෝදජනක ලෙස තබා ගැනීමටයි. කරුණාකර අන්‍යයන්ට ගරු කරන්න, කාර්ය මණ්ඩලයේ මාර්ගෝපදේශයන් පිළිපදින්න, සහ නිසි ලෙස රෝල්ප්ලේ කරන්න.<br>නීති කඩ කිරීමෙන් අනතුරු ඇඟවීම් හෝ තහනම් කිරීම් සිදුවිය හැක.",
            menu: {
                "server-rules": "රෝල්ප්ලේ නීති",
                "crew-rules": "කණ්ඩායම් නීති",
                "situation-rules": "තත්ව නීති"
            },
            situationRules: "1. සියලු තත්වයන් යථාර්ථවාදීව රෝල්ප්ලේ කරන්න.<br>2. අහඹු මරණ ගැටුම් (RDM) තහනම්.<br>3. සැමවිටම කතාවට ජයග්‍රහණයට වඩා ප්‍රමුඛත්වය දෙන්න.<br>[...අතිරේක නීති සඳහා ඉඩ...]",
            footer: "රෙග්ස් කණ්ඩායම විසින් සංවර්ධනය කරන ලදී<br>&copy; 2025 රෙග්ස් පුද්ගලික සමාගම. සියලු හිමිකම් ඇවිරිණි.",
            "rule-1": "<strong>[1] පරිණත</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ඔබ උණුසුම් තත්වයන් හැසිරවීමට තරම් පරිණත විය යුතුය. චරිතය තුළ (IC) ගැටලු, උදාහරණයක් ලෙස ගැන්ග් රණ්ඩු, ඩිස්කෝඩ් වෙත ගෙන එන්න එපා.<br><br><br><br>",
            "rule-2": "<strong>[2] වෛරය</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;වාර්ගික අපහාස, අවමන් කිරීමේ ප්‍රකාශ, හෝ සමලිංගික විරෝධී යෙදුම් භාවිතය තහනම්ය.<br><br><br><br>",
            // ... (rest of the Sinhala rules as provided)
            "rule-22": "<strong>[22] ප්‍රධාන වෙනත් රීති</strong><br><br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;කොල්ලකෑම් සඳහා ව්‍යාජ බන්ධනාගාරිකයින් (මිතුරන් භාවිතා කිරීම) තහනම්ය.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;පැහැදිලිව AFK තත්වයේ සිටින ක්‍රීඩකයින් සමඟ RP නොවන ඉරියව්වලදී අන්තර්ක්‍රියා කිරීම තහනම්ය.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;ක්‍රීඩා තුළ දුරකථන හෝ කැමරා සමඟ පටිගත කිරීමට ඉඩ ඇත, නමුත් ශබ්ද ග්‍රහණය යථාර්ථවාදී පරාසයන්ට සීමා වේ.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;සුනාමියකට මිනිත්තු 30කට පෙර RP ආරම්භ කිරීම හෝ බැංකු, ආභරණ, හෝ පහසුවෙන් ගබඩා කොල්ලකෑම තහනම්ය.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;එක් චරිතයක් පමණක් පිළිගත් ගැන්ග් එකක සිටිය හැක; අනෙකුත් චරිතවලට එකම න්‍යායපත්‍රය බෙදා ගත නොහැක.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;බිම හෙළුනු ක්‍රීඩකයින් බන්ධනාගාරිකයින් ලෙස ගැනීමට නැවත ජනනය කිරීම තහනම්ය.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;මිනි/අඩ සයිස් ක්‍රීඩක පෙඩ්ස් වාහනවලින් වෙඩි තැබීම තහනම්ය.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;ක්‍රීඩාව තුළ ගැටලු සඳහා කාර්ය මණ්ඩලය ළඟා නොවන්න; /report භාවිතා කරන්න.",
            "crew-rule-1": "<strong>[1] පරිණත</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ඔබ උණුසුම් තත්වයන් හැසිරවීමට තරම් පරිණත විය යුතුය. චරිතය තුළ (IC) ගැටලු, උදාහරණයක් ලෙස ගැන්ග් රණ්ඩු, ඩිස්කෝඩ් වෙත ගෙන එන්න එපා.<br><br><br><br>",
            "crew-rule-2": "<strong>[2] POV</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;සෑම තත්වයකදීම ඔබ POV වාර්තාවක් ගත යුතුය.<br><br><br><br>",
            // ... (rest of the Sinhala crew rules as provided)
            "crew-rule-22": "<strong>[22] රඟපෑම ප්‍රථමය</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;සියල්ලටම වඩා, මෙම රීති පවතින්නේ ගිලී යන රඟපෑම් ප්‍රවර්ධනය කිරීමටය. ජයග්‍රහණය යනු විනෝදජනක, සාධාරණ, සහ යථාර්ථවාදී RP අත්දැකීම් නිර්මාණය කිරීමට ද්විතීයිකය.<br><br><br><br>"
        },
        ta: {
            title: "ரெக்ஸ் நகர விதிமுறை புத்தகம்",
            header: "<span>ரெக்ஸ் ரோல்பிளே</span><br><span class=\"rules\">விதிமுறை புத்தகம்</span>",
            content: "எங்கள் விதிமுறைகள் சர்வரை நியாயமாகவும், யதார்த்தமாகவும், வேடிக்கையாகவும் வைத்திருக்க இங்கு உள்ளன. மற்றவர்களை மதிக்கவும், ஊழியர்களின் வழிகாட்டுதல்களைப் பின்பற்றவும், மற்றும் சரியாக ரோல்பிளே செய்யவும்.<br>விதிமுறைகளை மீறினால் எச்சரிக்கைகள் அல்லது தடைகள் ஏற்படலாம்.",
            menu: {
                "server-rules": "ரோல்பிளே விதிமுறைகள்",
                "crew-rules": "குழு விதிமுறைகள்",
                "situation-rules": "நிலைமை விதிமுறைகள்"
            },
            situationRules: "1. எல்லா சூழ்நிலைகளையும் யதார்த்தமாக ரோல்பிளே செய்யவும்.<br>2. அநாவசிய மரணப் போர் (RDM) தடைசெய்யப்பட்டுள்ளது.<br>3. எப்போதும் கதைக்கு வெற்றியை விட முன்னுரிமை கொடுங்கள்.<br>[...கூடுதல் விதிமுறைகளுக்கான இடம்...]",
            footer: "ரெக்ஸ் குழுவினரால் உருவாக்கப்பட்டது<br>&copy; 2025 ரெக்ஸ் பிரைவேட் லிமிடெட். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
            "rule-1": "<strong>[1] முதிர்ச்சி</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;நீங்கள் சூடான சூழ்நிலைகளை கையாளும் அளவுக்கு முதிர்ச்சியுடன் இருக்க வேண்டும். கதாபாத்திரத்திற்கு உள்ளேயான (IC) பிரச்சினைகளை, உதாரணமாக கும்பல் சண்டைகள், டிஸ்கார்டுக்கு கொண்டு வர வேண்டாம்.<br><br><br><br>",
            "rule-2": "<strong>[2] வெறுப்பு</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;இனவெறி பேச்சு, இழிவான கருத்துக்கள், அல்லது ஓரினச்சேர்க்கை எதிர்ப்பு வார்த்தைகளைப் பயன்படுத்துவது கண்டிப்பாக தடை செய்யப்பட்டுள்ளது.<br><br><br><br>",
            // ... (rest of the Tamil rules as provided)
            "rule-22": "<strong>[22] முக்கிய பிற விதிகள்</strong><br><br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;கொள்ளைகளுக்கு போலி பணயக்கைதிகளை (நண்பர்களைப் பயன்படுத்தி) பயன்படுத்துவது அனுமதிக்கப்படாது.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;வெளிப்படையாக AFK நிலையில் உள்ள வீரர்களுடன் RP இல்லாத நிலைகளில் தொடர்பு கொள்வது தடை செய்யப்பட்டுள்ளது.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;விளையாட்டு உள்ளே தொலைபேசிகள் அல்லது கேமராக்கள் மூலம் பதிவு செய்ய அனுமதிக்கப்படுகிறது, ஆனால் ஆடியோ பதிவு யதார்த்தமான வரம்புகளுக்கு மட்டுப்படுத்தப்பட்டுள்ளது.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;சுனாமிக்கு 30 நிமிடங்களுக்கு முன் RP துவங்குவது அல்லது வங்கிகள், நகைகள், அல்லது வசதியான கடைகளை கொள்ளையடிப்பது தடை செய்யப்பட்டுள்ளது.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;ஒரு கதாபாத்திரம் மட்டுமே அங்கீகரிக்கப்பட்ட கும்பலில் இருக்க முடியும்; மற்ற கதாபாத்திரங்கள் அதே நோக்கத்தை பகிர்ந்து கொள்ள முடியாது.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;வீழ்ந்த வீரர்களை பணயக்கைதிகளாக எடுக்க மறுபிறப்பு செய்வது அனுமதிக்கப்படாது.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;மினி/பாதி அளவு வீரர் பெட்கள் வாகனங்களில் இருந்து சுட முடியாது.<br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;➤ &nbsp;&nbsp;விளையாட்டில் பிரச்சினைகளுக்கு ஊழியர்களை அணுக வேண்டாம்; /report பயன்படுத்தவும்.",
            "crew-rule-1": "<strong>[1] முதிர்ச்சி</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;நீங்கள் சூடான சூழ்நிலைகளை கையாளும் அளவுக்கு முதிர்ச்சியுடன் இருக்க வேண்டும். கதாபாத்திரத்திற்கு உள்ளேயான (IC) பிரச்சினைகளை, உதாரணமாக கும்பல் சண்டைகள், டிஸ்கார்டுக்கு கொண்டு வர வேண்டாம்.<br><br><br><br>",
            "crew-rule-2": "<strong>[2] POV</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;எல்லா சூழ்நிலைகளிலும் நீங்கள் POV பதிவு எடுக்க வேண்டும்.<br><br><br><br>",
            // ... (rest of the Tamil crew rules as provided)
            "crew-rule-22": "<strong>[22] ரோல்பிளே முதலில் வரும்</strong><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;எல்லாவற்றிற்கும் மேலாக, இந்த விதிகள் ஆழமான ரோல்பிளேயை ஊக்குவிக்கவே உள்ளன. வெற்றி என்பது வேடிக்கையான, நியாயமான, மற்றும் யதார்த்தமான RP அனுபவங்களை உருவாக்குவதற்கு இரண்டாமிடத்தில் உள்ளது.<br><br><br><br>"
        }
    };

    // Detect the current language from the HTML lang attribute
    const currentLang = document.documentElement.lang || "en";

    // Set default section (Server Rules)
    document.querySelector("#server-rules").classList.add("active");
    document.querySelector('.menu-item[data-section="server-rules"]').classList.add("active");
    document.querySelector(`.lang-item[data-lang="${currentLang}"]`).classList.add("active");

    // Populate content based on current language
    document.title = translations[currentLang].title;
    document.querySelector("header h1").innerHTML = translations[currentLang].header;
    document.querySelector(".content p").innerHTML = translations[currentLang].content;
    document.querySelector("#situation-rules p").innerHTML = translations[currentLang].situationRules;
    document.querySelector("footer p").innerHTML = translations[currentLang].footer;

    // Populate menu button text
    document.querySelector('.menu-item[data-section="server-rules"]').innerHTML = translations[currentLang].menu["server-rules"];
    document.querySelector('.menu-item[data-section="crew-rules"]').innerHTML = translations[currentLang].menu["crew-rules"];
    document.querySelector('.menu-item[data-section="situation-rules"]').innerHTML = translations[currentLang].menu["situation-rules"];

    // Populate server rules
    for (let i = 1; i <= 22; i++) {
        const ruleElement = document.querySelector(`#rule-${i}`);
        if (ruleElement) {
            ruleElement.innerHTML = translations[currentLang][`rule-${i}`];
        }
    }

    // Populate crew rules
    for (let i = 1; i <= 22; i++) {
        const crewRuleElement = document.querySelector(`#crew-rule-${i}`);
        if (crewRuleElement) {
            crewRuleElement.innerHTML = translations[currentLang][`crew-rule-${i}`];
        }
    }

    // Menu item click handler
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            menuItems.forEach(i => i.classList.remove("active"));
            ruleSections.forEach(section => section.classList.remove("active"));

            this.classList.add("active");
            const sectionId = this.getAttribute("data-section");
            document.getElementById(sectionId).classList.add("active");
        });
    });

    // Language item click handler (redirect to corresponding HTML file)
    langItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            const lang = this.getAttribute("data-lang");
            const pageMap = {
                en: "index.html",
                si: "sinhala.html",
                ta: "tamil.html"
            };
            window.location.href = pageMap[lang];
        });
    });
});