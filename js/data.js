const dictionaryData = [
    // Verbs
    {
        word: "eat",
        type: "verb",
        subtype: "Irregular Verb",
        translation: "makan",
        v1: "eat",
        v2: "ate",
        v3: "eaten",
        example: "I eat rice every day. (Saya makan nasi setiap hari)",
        tenses: {
            "Simple Present": "I eat rice every day.",
            "Present Continuous": "I am eating rice right now.",
            "Present Perfect": "I have eaten rice already.",
            "Present Perfect Continuous": "I have been eating rice for 20 minutes.",
            "Simple Past": "I ate rice yesterday.",
            "Past Continuous": "I was eating rice when you called.",
            "Past Perfect": "I had eaten rice before I went to sleep.",
            "Past Perfect Continuous": "I had been eating rice when the power went out.",
            "Simple Future": "I will eat rice tomorrow.",
            "Future Continuous": "I will be eating rice at this time tomorrow.",
            "Future Perfect": "I will have eaten rice by 8 PM.",
            "Future Perfect Continuous": "I will have been eating rice for 30 minutes by then."
        }
    },
    {
        word: "drink",
        type: "verb",
        subtype: "Irregular Verb",
        translation: "minum",
        v1: "drink",
        v2: "drank",
        v3: "drunk",
        example: "She drinks coffee in the morning. (Dia minum kopi di pagi hari)",
        tenses: {
            "Simple Present": "She drinks coffee every morning.",
            "Present Continuous": "She is drinking coffee now.",
            "Present Perfect": "She has drunk three cups of coffee.",
            "Simple Past": "She drank tea yesterday.",
            "Past Continuous": "She was drinking coffee when I arrived.",
            "Simple Future": "She will drink milk tonight."
        }
    },
    {
        word: "go",
        type: "verb",
        subtype: "Irregular Verb",
        translation: "pergi",
        v1: "go",
        v2: "went",
        v3: "gone",
        example: "They go to school by bus. (Mereka pergi ke sekolah naik bus)",
        tenses: {
            "Simple Present": "They go to school by bus.",
            "Present Continuous": "They are going to the mall.",
            "Present Perfect": "They have gone to Bali.",
            "Simple Past": "They went to the cinema last night.",
            "Past Continuous": "They were going home when it rained.",
            "Simple Future": "They will go to Japan next year."
        }
    },
    {
        word: "write",
        type: "verb",
        subtype: "Irregular Verb",
        translation: "menulis",
        v1: "write",
        v2: "wrote",
        v3: "written",
        example: "He writes a letter to his friend. (Dia menulis surat untuk temannya)",
        tenses: {
            "Simple Present": "He writes a story every week.",
            "Present Continuous": "He is writing a code now.",
            "Present Perfect": "He has written five books.",
            "Simple Past": "He wrote a letter yesterday.",
            "Past Continuous": "He was writing when the phone rang.",
            "Simple Future": "He will write a new article tomorrow."
        }
    },
    {
        word: "speak",
        type: "verb",
        subtype: "Irregular Verb",
        translation: "berbicara",
        v1: "speak",
        v2: "spoke",
        v3: "spoken",
        example: "Can you speak English? (Bisakah kamu berbicara bahasa Inggris?)",
        tenses: {
            "Simple Present": "I speak English fluently.",
            "Present Continuous": "He is speaking to the manager.",
            "Present Perfect": "They have spoken about the issue.",
            "Simple Past": "She spoke softly.",
            "Past Continuous": "We were speaking when she entered.",
            "Simple Future": "I will speak to him later."
        }
    },
    {
        word: "take",
        type: "verb",
        subtype: "Irregular Verb",
        translation: "mengambil",
        v1: "take",
        v2: "took",
        v3: "taken",
        example: "Please take this book. (Tolong ambil buku ini)",
        tenses: {
            "Simple Present": "He takes the bus to work.",
            "Present Continuous": "She is taking a nap.",
            "Present Perfect": "I have taken the medicine.",
            "Simple Past": "He took my pen by mistake.",
            "Past Continuous": "They were taking photos.",
            "Simple Future": "I will take exam next week."
        }
    },
    {
        word: "see",
        type: "verb",
        subtype: "Irregular Verb",
        translation: "melihat",
        v1: "see",
        v2: "saw",
        v3: "seen",
        example: "I saw him yesterday. (Saya melihatnya kemarin)",
        tenses: {
            "Simple Present": "I see a bird in the tree.",
            "Present Continuous": "She is seeing a doctor tomorrow.",
            "Present Perfect": "We have seen this movie twice.",
            "Simple Past": "I saw him at the park.",
            "Past Continuous": "I was seeing her when the accident happened.",
            "Simple Future": "I will see you later."
        }
    },
    {
        word: "run",
        type: "verb",
        subtype: "Irregular Verb",
        translation: "lari",
        v1: "run",
        v2: "ran",
        v3: "run",
        example: "The dog runs fast. (Anjing itu berlari cepat)",
        tenses: {
            "Simple Present": "Cheetahs run very fast.",
            "Present Continuous": "The boy is running in the field.",
            "Present Perfect": "He has run 5 kilometers today.",
            "Simple Past": "She ran a marathon last year.",
            "Past Continuous": "They were running when it started to rain.",
            "Simple Future": "I will run tomorrow morning."
        }
    },
    {
        word: "buy",
        type: "verb",
        subtype: "Irregular Verb",
        translation: "membeli",
        v1: "buy",
        v2: "bought",
        v3: "bought",
        example: "She bought a new car. (Dia membeli mobil baru)",
        tenses: {
            "Simple Present": "She buys fresh vegetables every Sunday.",
            "Present Continuous": "He is buying a gift.",
            "Present Perfect": "We have bought a new house.",
            "Simple Past": "I bought this shirt yesterday.",
            "Past Continuous": "She was buying groceries.",
            "Simple Future": "They will buy tickets soon."
        }
    },
    {
        word: "think",
        type: "verb",
        subtype: "Irregular Verb",
        translation: "berpikir",
        v1: "think",
        v2: "thought",
        v3: "thought",
        example: "I think it is a good idea. (Saya pikir itu ide yang bagus)",
        tenses: {
            "Simple Present": "I think you are right.",
            "Present Continuous": "I am thinking about moving.",
            "Present Perfect": "I have thought about it.",
            "Simple Past": "I thought he was busy.",
            "Past Continuous": "She was thinking of calling you.",
            "Simple Future": "I will think about it."
        }
    },
    // New Verbs (Regular & No-Change)
    {
        word: "cut",
        type: "verb",
        subtype: "Irregular Verb / No Change",
        translation: "memotong",
        v1: "cut",
        v2: "cut",
        v3: "cut",
        example: "I cut the paper carefully. (Saya memotong kertas dengan hati-hati)",
        tenses: {
            "Simple Present": "He cuts hair for a living.",
            "Simple Past": "She cut the cake yesterday.",
            "Present Perfect": "I have cut my finger."
        }
    },
    {
        word: "put",
        type: "verb",
        subtype: "Irregular Verb / No Change",
        translation: "menaruh / meletakkan",
        v1: "put",
        v2: "put",
        v3: "put",
        example: "Put it on the table. (Taruh itu di atas meja)",
        tenses: {
            "Simple Present": "I put sugar in my tea.",
            "Simple Past": "He put the keys here.",
            "Present Perfect": "She has put the books away."
        }
    },
    {
        word: "set",
        type: "verb",
        subtype: "Irregular Verb / No Change",
        translation: "mengatur / menetapkan",
        v1: "set",
        v2: "set",
        v3: "set",
        example: "Set the alarm for 6 AM. (Atur alarm untuk jam 6 pagi)",
        tenses: {
            "Simple Present": "The sun sets in the west.",
            "Simple Past": "He set a new record last year.",
            "Present Perfect": "We have set the wedding date."
        }
    },
    {
        word: "play",
        type: "verb",
        subtype: "Regular Verb",
        translation: "bermain",
        v1: "play",
        v2: "played",
        v3: "played",
        example: "Kids play in the park. (Anak-anak bermain di taman)",
        tenses: {
            "Simple Present": "They play every weekend.",
            "Simple Past": "We played cards last night.",
            "Present Perfect": "She has played tennis for years."
        }
    },
    {
        word: "walk",
        type: "verb",
        subtype: "Regular Verb",
        translation: "berjalan",
        v1: "walk",
        v2: "walked",
        v3: "walked",
        example: "I walk to school. (Saya berjalan kaki ke sekolah)",
        tenses: {
            "Simple Present": "He walks fast.",
            "Simple Past": "They walked home in the rain.",
            "Present Perfect": "I have walked 5 miles today."
        }
    },

    // Pronouns & Determiners (Grammar)
    {
        word: "I",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Subject Pronoun",
        translation: "saya / aku",
        example: "I am a student. (Saya adalah seorang siswa)"
    },
    {
        word: "me",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Object Pronoun",
        translation: "saya / aku (objek)",
        example: "She called me. (Dia menelepon saya)"
    },
    {
        word: "my",
        type: "determiner",
        subtype: "Possessive Determiner",
        detail: "Possessive Adjective (used before a noun)",
        translation: "milikku (kepemilikan)",
        example: "This is my book. (Ini adalah bukuku)"
    },
    {
        word: "mine",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Possessive Pronoun",
        translation: "milikku (tanpa noun)",
        example: "This book is mine. (Buku ini milikku)"
    },
    {
        word: "myself",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Reflexive Pronoun",
        translation: "diri saya sendiri",
        example: "I cooked this myself. (Saya memasak ini sendiri)"
    },
    {
        word: "you",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Subject / Object Pronoun",
        translation: "kamu / anda",
        example: "You are my friend. (Kamu adalah temanku)"
    },
    {
        word: "your",
        type: "determiner",
        subtype: "Possessive Determiner",
        detail: "Possessive Adjective",
        translation: "milikmu",
        example: "Is this your car? (Apakah ini mobilmu?)"
    },
    {
        word: "yours",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Possessive Pronoun",
        translation: "milikmu",
        example: "The car is yours. (Mobil itu milikmu)"
    },
    {
        word: "yourself",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Reflexive Pronoun",
        translation: "dirimu sendiri",
        example: "Take care of yourself. (Jaga dirimu sendiri)"
    },
    {
        word: "he",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Subject Pronoun",
        translation: "dia (laki-laki)",
        example: "He loves coffee. (Dia suka kopi)"
    },
    {
        word: "him",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Object Pronoun",
        translation: "dia (laki-laki sebagai objek)",
        example: "I saw him. (Saya melihatnya)"
    },
    {
        word: "his",
        type: "determiner",
        subtype: "Possessive Determiner",
        detail: "Possessive Adjective (used before a noun)",
        translation: "miliknya (laki-laki)",
        example: "This is his bag. (Ini tasnya)"
    },
    {
        word: "his",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Possessive Pronoun (used without a noun)",
        translation: "miliknya (laki-laki)",
        example: "The bag is his. (Tas itu miliknya)"
    },
    {
        word: "she",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Subject Pronoun",
        translation: "dia (perempuan)",
        example: "She is smart. (Dia pintar)"
    },
    {
        word: "her",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Object Pronoun",
        translation: "dia (perempuan sebagai objek)",
        example: "I saw her. (Saya melihatnya)"
    },
    {
        word: "her",
        type: "determiner",
        subtype: "Possessive Determiner",
        detail: "Possessive Adjective (used before a noun)",
        translation: "miliknya (kepemilikan)",
        example: "This is her book. (Ini adalah bukunya)"
    },
    {
        word: "hers",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Possessive Pronoun",
        translation: "miliknya",
        example: "The bag is hers. (Tas itu miliknya)"
    },
    {
        word: "it",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Subject / Object Pronoun",
        translation: "itu / dia (benda/hewan)",
        example: "It is raining. (Hari sedang hujan)"
    },
    {
        word: "its",
        type: "determiner",
        subtype: "Possessive Determiner",
        detail: "Possessive Adjective",
        translation: "miliknya (benda/hewan)",
        example: "The cat licked its paw. (Kucing itu menjilati kakinya)"
    },
    {
        word: "we",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Subject Pronoun",
        translation: "kami / kita",
        example: "We are happy. (Kami bahagia)"
    },
    {
        word: "us",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Object Pronoun",
        translation: "kami / kita (objek)",
        example: "Join us. (Bergabunglah dengan kami)"
    },
    {
        word: "our",
        type: "determiner",
        subtype: "Possessive Determiner",
        detail: "Possessive Adjective",
        translation: "milik kami",
        example: "Our house is near. (Rumah kami dekat)"
    },
    {
        word: "they",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Subject Pronoun",
        translation: "mereka",
        example: "They are playing. (Mereka sedang bermain)"
    },
    {
        word: "them",
        type: "pronoun",
        subtype: "Personal Pronoun",
        detail: "Object Pronoun",
        translation: "mereka (objek)",
        example: "Talk to them. (Bicara pada mereka)"
    },
    {
        word: "their",
        type: "determiner",
        subtype: "Possessive Determiner",
        detail: "Possessive Adjective",
        translation: "milik mereka",
        example: "Their team won. (Tim mereka menang)"
    },

    // Other Pronoun Types
    {
        word: "this",
        type: "pronoun",
        subtype: "Demonstrative Pronoun",
        detail: "Singular (Near)",
        translation: "ini",
        example: "This is my favorite. (Ini adalah favoritku)"
    },
    {
        word: "that",
        type: "pronoun",
        subtype: "Demonstrative Pronoun / Relative Pronoun",
        detail: "Singular (Far) / Connects clauses",
        translation: "itu / yang",
        multiexamples: [
            { label: "Demonstrative", text: "That is amazing. (Itu luar biasa)" },
            { label: "Relative", text: "The book that I read is good. (Buku yang saya baca itu bagus)" }
        ]
    },
    {
        word: "these",
        type: "pronoun",
        subtype: "Demonstrative Pronoun",
        detail: "Plural (Near)",
        translation: "ini (jamak)",
        example: "These are my shoes. (Ini adalah sepatuku)"
    },
    {
        word: "those",
        type: "pronoun",
        subtype: "Demonstrative Pronoun",
        detail: "Plural (Far)",
        translation: "itu (jamak)",
        example: "Those are birds. (Itu adalah burung-burung)"
    },
    // Interrogative / Relative Pronouns
    {
        word: "who",
        type: "pronoun",
        subtype: "Interrogative Pronoun / Relative Pronoun",
        detail: "Person (Subject)",
        translation: "siapa / yang",
        multiexamples: [
            { label: "Interrogative", text: "Who is calling? (Siapa yang menelepon?)" },
            { label: "Relative", text: "The man who called is my uncle. (Pria yang menelepon itu adalah pamanku)" }
        ]
    },
    {
        word: "whom",
        type: "pronoun",
        subtype: "Interrogative Pronoun / Relative Pronoun",
        detail: "Person (Object)",
        translation: "siapa / yang (Objek)",
        multiexamples: [
            { label: "Interrogative", text: "Whom did you invite? (Siapa yang kamu undang?)" },
            { label: "Relative", text: "The girl whom I met was kind. (Gadis yang saya temui itu baik)" }
        ]
    },
    {
        word: "whose",
        type: "pronoun",
        subtype: "Interrogative Pronoun / Relative Pronoun",
        detail: "Ownership",
        translation: "milik siapa / yang ...-nya",
        multiexamples: [
            { label: "Interrogative", text: "Whose bag is this? (Tas milik siapa ini?)" },
            { label: "Relative", text: "The boy whose bike was stolen is sad. (Anak yang sepedanya dicuri itu sedih)" }
        ]
    },
    {
        word: "which",
        type: "pronoun",
        subtype: "Interrogative Pronoun / Relative Pronoun",
        detail: "Choice / Thing Reference",
        translation: "yang mana / yang",
        multiexamples: [
            { label: "Interrogative", text: "Which do you prefer? (Yang mana yang kamu lebih suka?)" },
            { label: "Relative", text: "The cat which sat on the mat is fat. (Kucing yang duduk di tikar itu gemuk)" }
        ]
    },

    // Indefinite Pronouns (Group -one/-body/-thing)
    // Always Singular
    {
        word: "someone",
        type: "pronoun",
        subtype: "Indefinite Pronoun",
        detail: "Singular (Specific/Positive)",
        translation: "seseorang",
        example: "Someone is knocking. (Seseorang sedang mengetuk)"
    },
    {
        word: "everyone",
        type: "pronoun",
        subtype: "Indefinite Pronoun",
        detail: "Singular (All members)",
        translation: "setiap orang / semua orang",
        example: "Everyone is happy. (Setiap orang bahagia)"
    },
    {
        word: "anyone",
        type: "pronoun",
        subtype: "Indefinite Pronoun",
        detail: "Singular (Question/Negative)",
        translation: "siapapun / seseorang",
        example: "Is anyone home? (Apakah ada orang di rumah?)"
    },
    {
        word: "nothing",
        type: "pronoun",
        subtype: "Indefinite Pronoun",
        detail: "Singular (Absence)",
        translation: "tidak ada apa-apa",
        example: "Nothing is impossible. (Tidak ada yang mustahil)"
    },
    {
        word: "something",
        type: "pronoun",
        subtype: "Indefinite Pronoun",
        detail: "Singular",
        translation: "sesuatu",
        example: "Something is wrong. (Ada sesuatu yang salah)"
    },

    // Quantifiers: Can be Indefinite Pronoun OR Determiner
    // Many
    {
        word: "many",
        type: "determiner",
        subtype: "Quantifier (Indefinite Determiner)",
        detail: "Used with Countable Nouns",
        translation: "banyak",
        example: "Many students pass the exam. (Banyak siswa lulus ujian)"
    },
    {
        word: "many",
        type: "pronoun",
        subtype: "Indefinite Pronoun",
        detail: "Quantifier as Pronoun",
        translation: "banyak (orang/hal)",
        example: "Many tried, but few succeeded. (Banyak yang mencoba, tapi sedikit yang berhasil)"
    },
    // Few
    {
        word: "few",
        type: "determiner",
        subtype: "Quantifier (Indefinite Determiner)",
        detail: "Used with Countable Nouns",
        translation: "sedikit / beberapa",
        example: "Few people like this. (Sedikit orang menyukai ini)"
    },
    {
        word: "few",
        type: "pronoun",
        subtype: "Indefinite Pronoun",
        detail: "Quantifier as Pronoun",
        translation: "sedikit (orang/hal)",
        example: "Many were invited, but few came. (Banyak yang diundang, tapi sedikit yang datang)"
    },
    // Much
    {
        word: "much",
        type: "determiner",
        subtype: "Quantifier (Indefinite Determiner)",
        detail: "Used with Uncountable Nouns",
        translation: "banyak",
        example: "We don't have much time. (Kita tidak punya banyak waktu)"
    },
    {
        word: "much",
        type: "pronoun",
        subtype: "Indefinite Pronoun",
        detail: "Quantifier as Pronoun",
        translation: "banyak (hal)",
        example: "Much has been said. (Banyak yang telah dikatakan)"
    },
    // Little
    {
        word: "little",
        type: "determiner",
        subtype: "Quantifier (Indefinite Determiner)",
        detail: "Used with Uncountable Nouns",
        translation: "sedikit",
        example: "I have little money. (Saya punya sedikit uang)"
    },
    {
        word: "little",
        type: "pronoun",
        subtype: "Indefinite Pronoun",
        detail: "Quantifier as Pronoun",
        translation: "sedikit (hal)",
        example: "Little is known about her. (Sedikit yang diketahui tentang dia)"
    },
    // Some
    {
        word: "some",
        type: "determiner",
        subtype: "Quantifier (Indefinite Determiner)",
        detail: "Used with Countable/Uncountable Nouns",
        translation: "beberapa / sejumlah",
        example: "I need some water. (Saya butuh air)"
    },
    {
        word: "some",
        type: "pronoun",
        subtype: "Indefinite Pronoun",
        detail: "Quantifier as Pronoun",
        translation: "beberapa",
        example: "Some agreed, some disagreed. (Beberapa setuju, beberapa tidak)"
    },
    // Any
    {
        word: "any",
        type: "determiner",
        subtype: "Quantifier (Indefinite Determiner)",
        detail: "Used with Countable/Uncountable (Questions/Negatives)",
        translation: "ada / apapun",
        example: "Do you have any questions? (Apakah kamu punya pertanyaan?)"
    },
    {
        word: "any",
        type: "pronoun",
        subtype: "Indefinite Pronoun",
        detail: "Quantifier as Pronoun",
        translation: "satupun / siapapun",
        example: "I don't need any. (Saya tidak butuh satupun)"
    },
    // All
    {
        word: "all",
        type: "determiner",
        subtype: "Quantifier (Indefinite Determiner)",
        detail: "Used with Countable/Uncountable Nouns",
        translation: "semua",
        example: "All students must study. (Semua siswa harus belajar)"
    },
    {
        word: "all",
        type: "pronoun",
        subtype: "Indefinite Pronoun",
        detail: "Quantifier as Pronoun",
        translation: "semuanya",
        example: "All is well. (Semuanya baik-baik saja)"
    },
    // Several
    {
        word: "several",
        type: "determiner",
        subtype: "Quantifier (Indefinite Determiner)",
        detail: "Used with Countable Nouns",
        translation: "beberapa",
        example: "I visited him several times. (Saya mengunjunginya beberapa kali)"
    },
    {
        word: "several",
        type: "pronoun",
        subtype: "Indefinite Pronoun",
        detail: "Quantifier as Pronoun",
        translation: "beberapa",
        example: "Several of us are going. (Beberapa dari kami akan pergi)"
    },

    // Nouns
    // Format: Type / Countability / Plural Type
    {
        word: "book",
        type: "noun",
        subtype: "Common Noun / Countable Noun / Regular Plural",
        translation: "buku",
        example: "I am reading a book. (Saya sedang membaca buku)",
        plural: "books" // Optional detailed field
    },
    {
        word: "house",
        type: "noun",
        subtype: "Common Noun / Countable Noun / Regular Plural",
        translation: "rumah",
        example: "Their house is very big. (Rumah mereka sangat besar)",
        plural: "houses"
    },
    {
        word: "friend",
        type: "noun",
        subtype: "Common Noun / Countable Noun / Regular Plural",
        translation: "teman",
        example: "He is my best friend. (Dia adalah teman baikku)",
        plural: "friends"
    },
    {
        word: "Jakarta",
        type: "noun",
        subtype: "Proper Noun / Singular",
        translation: "Jakarta",
        example: "Jakarta is the capital city. (Jakarta adalah ibu kota)",
        detail: "Specific name of a place (Nama khusus tempat)"
    },
    {
        word: "joy",
        type: "noun",
        subtype: "Abstract Noun / Uncountable Noun / Singular",
        translation: "sukacita / kegembiraan",
        example: "Tears of joy. (Air mata kebahagiaan)",
        detail: "Abstract concept (Konsep abstrak)"
    },
    {
        word: "team",
        type: "noun",
        subtype: "Collective Noun / Countable Noun / Regular Plural",
        translation: "tim",
        example: "The team is playing well. (Tim itu bermain dengan baik)",
        plural: "teams",
        detail: "Group of people (Kumpulan orang)"
    },
    {
        word: "water",
        type: "noun",
        subtype: "Common Noun / Uncountable Noun / Singular",
        translation: "air",
        example: "Please give me some water. (Tolong beri saya air)",
        detail: "Cannot be counted directly (Tidak bisa dihitung langsung)"
    },
    {
        word: "child",
        type: "noun",
        subtype: "Common Noun / Countable Noun / Irregular Plural",
        translation: "anak",
        example: "The child is playing. (Anak itu sedang bermain)",
        plural: "children"
    },
    {
        word: "children",
        type: "noun",
        subtype: "Common Noun / Countable Noun / Plural",
        translation: "anak-anak",
        example: "The children are playing. (Anak-anak sedang bermain)",
        detail: "Irregular plural of 'child' (Bentuk jamak tidak beraturan dari 'child')"
    },
    {
        word: "woman",
        type: "noun",
        subtype: "Common Noun / Countable Noun / Irregular Plural",
        translation: "mwanita / perempuan (dewasa)",
        example: "The woman is kind. (Wanita itu baik)",
        plural: "women"
    },
    {
        word: "mouse",
        type: "noun",
        subtype: "Common Noun / Countable Noun / Irregular Plural",
        translation: "tikus",
        example: "The mouse is small. (Tikus itu kecil)",
        plural: "mice"
    },
    {
        word: "sheep",
        type: "noun",
        subtype: "Common Noun / Countable Noun / Invariant Plural",
        translation: "domba",
        example: "One sheep, two sheep. (Satu domba, dua domba)",
        detail: "Invariant noun (Bentuk tunggal dan jamak sama)"
    },
    {
        word: "fish",
        type: "noun",
        subtype: "Common Noun / Countable Noun / Invariant Plural",
        translation: "ikan",
        example: "I saw three fish. (Saya melihat tiga ekor ikan)",
        detail: "Invariant noun (Bentuk tunggal & jamak sama). Note: 'Fishes' is used ONLY for different species."
    },
    {
        word: "fishes",
        type: "noun",
        subtype: "Common Noun / Countable Noun / Plural",
        translation: "ikan-ikan (berbagai jenis)",
        example: "The scientist studies freshwater fishes. (Ilmuwan itu mempelajari berbagai jenis ikan air tawar)",
        detail: "Refers to multiple species of fish (Merujuk pada berbagai spesies ikan)"
    },
    {
        word: "deer",
        type: "noun",
        subtype: "Common Noun / Countable Noun / Invariant Plural",
        translation: "rusa",
        example: "A deer is running. Two deer are running. (Seekor rusa berlari. Dua ekor rusa berlari)",
        detail: "Invariant noun (Bentuk tunggal dan jamak sama)"
    },

    // Adjectives
    {
        word: "beautiful",
        type: "adjective",
        translation: "cantik / indah",
        example: "The view is very beautiful. (Pemandangannya sangat indah)"
    },
    {
        word: "happy",
        type: "adjective",
        translation: "bahagia",
        example: "She looks very happy today. (Dia terlihat sangat bahagia hari ini)"
    },
    {
        word: "big",
        type: "adjective",
        translation: "besar",
        example: "I have a big dream. (Saya punya mimpi yang besar)"
    },
    {
        word: "good",
        type: "adjective",
        translation: "bagus / baik",
        example: "You did a good job. (Kamu melakukan pekerjaan yang bagus)"
    },
    {
        word: "expensive",
        type: "adjective",
        translation: "mahal",
        example: "This watch is too expensive. (Jam tangan ini terlalu mahal)"
    },

    // Others (Prepositions, Adverbs, Conjunctions)
    {
        word: "always",
        type: "adverb",
        translation: "selalu",
        example: "I always wake up early. (Saya selalu bangun pagi)"
    },
    {
        word: "because",
        type: "conjunction",
        translation: "karena",
        example: "I am happy because of you. (Saya bahagia karenamu)"
    },
    {
        word: "in",
        type: "preposition",
        translation: "di dalam",
        example: "The cat is in the box. (Kucing itu ada di dalam kotak)"
    },
    {
        word: "and",
        type: "conjunction",
        translation: "dan",
        example: "You and I are friends. (Kamu dan saya berteman)"
    },
    {
        word: "but",
        type: "conjunction",
        translation: "tapi",
        example: "I want to go, but I am busy. (Saya ingin pergi, tapi saya sibuk)"
    }
];

// Export for usage if using modules, but here we just load it globally
window.dictionaryData = dictionaryData;
