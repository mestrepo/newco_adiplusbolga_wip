export default {
    callToAction: 'Your Skincare Consultation',
    launchButton: "Start",
    formId: 'registration',
    questions: [
        {
            question: 'Are you ready for your skin consultation?',
            type: 'single',
            answers: [
                {
                    answer: 'Yes',
                    action: 'continue',
                    key: 'Y'
                },
                {
                    answer: 'No',
                    action: 'skip',
                    skipTo: 'thank-you',
                    key: 'N'
                },
            ],
        },
        // ----- START OF REQUIRED BACKUP QUESTION ----------
        {
            question: "How would you describe your skin type?",
            type: "single",
            answers: [
                {
                    answer: "Oily",
                    action: "continue",
                    key: "A"
                },
                {
                    answer: "Dry",
                    action: "continue",
                    key: "B"
                },
                {
                    answer: "Combined[Oily + Dry]",
                    action: "continue",
                    key: "C"
                },
                {
                    answer: "Normal",
                    action: "continue",
                    key: "D"
                },
            ]
        },
        //  -------- END OF REQUIRED BACKUP QUESTION -------------

        // {
        //   question: "Let us get to know you ",
        //   type: 'text',
        //   minLength: 2
        // },
        //  Let us get to know you
        {
            question: "What do you identify as ?",
            type: "single",
            answers: [
                {
                    answer: "Female",
                    action: "continue",
                    key: "F"
                },
                {
                    answer: "Male",
                    action: "continue",
                    key: "M"
                },
            ]
        },
        {
            question: "Whatʼs your age range? ",
            type: "single",
            answers: [
                {
                    answer: "Under 18 years old",
                    action: "continue",
                    key: "A"
                },
                {
                    answer: "18 to 24 years old ",
                    action: "continue",
                    key: "B"
                },
                {
                    answer: "25 to 30 years old ",
                    action: "continue",
                    key: "C"
                },
                {
                    answer: "Above 30 years old",
                    action: "continue",
                    key: "D"
                },
            ]
        },
        //  Let’s get to know how your skin is doing
        {
            question: "Which most closely describes the look of your pores  (Your pores are tiny openings in your skin.  ) ",
            type: "single",
            answers: [
                {
                    answer: "I clearly see my pores and they are large",
                    action: "continue",
                    key: "A"
                },
                {
                    answer: "I can see my pores and they look okay ",
                    action: "continue",
                    key: "B"
                },
                {
                    answer: "I can barely see my pores ",
                    action: "continue",
                    key: "C"
                },
                {
                    answer: "I don’t see it",
                    action: "continue",
                    key: "D"
                },
            ]
        },
        {
            question: "Which best describes the shine on your skin? (Your T-zone is area around forehead, nose, and chin)",
            type: "single",
            answers: [
                {
                    answer: "Very shiny all over my face and I have to pat my face during the day ",
                    action: "continue",
                    key: "A"
                },
                {
                    answer: "Shiny in the t-zone area and dull in other parts of my face ",
                    action: "continue",
                    key: "B"
                },
                {
                    answer: "Slight shine all over my face and do not have to pat face ",
                    action: "continue",
                    key: "C"
                },
                {
                    answer: "No shine at all. ",
                    action: "continue",
                    key: "D"
                },
            ]
        },
        {
            question: "How does your face feel 10 mins after cleansing  (Before using any other  product) ? ",
            type: "single",
            answers: [
                {
                    answer: "Very tight and moving my cheeks feel  uncomfortable ",
                    action: "continue",
                    key: "A"
                },
                {
                    answer: "Slight shine in the Tzone, cheeks and other parts feel dull or tight ",
                    action: "continue",
                    key: "B"
                },
                {
                    answer: "No tightness and feels comfortable",
                    action: "continue",
                    key: "C"
                },
                {
                    answer: "Shining bright like a diamond  ",
                    action: "continue",
                    key: "D"
                },
            ]
        },
        {
            question: "During the day, how does your skin look and feel?",
            type: "single",
            answers: [
                {
                    answer: "I need to dab my t zone area only ",
                    action: "continue",
                    key: "A"
                },
                {
                    answer: "Feels and looks moisturized ",
                    action: "continue",
                    key: "B"
                },
                {
                    answer: "Feels dry with slight tightness ",
                    action: "continue",
                    key: "C"
                },
                {
                    answer: "Shiny all over and need to dab occasionally ",
                    action: "continue",
                    key: "D"
                },
            ]
        },
        {
            question: "How frequently do you breakout?",
            type: "single",
            answers: [
                {
                    answer: "I’m in a love hate relationship(Rarely break out )",
                    action: "continue",
                    key: "A"
                },
                {
                    answer: "Before for Aunt Flo arrives ",
                    action: "continue",
                    key: "B"
                },
                {
                    answer: "The Acne aliens have taken over .Help!",
                    action: "continue",
                    key: "C"
                },
            ]
        },
        {
            question: "Where do you usually experience spots?",
            type: "single",
            answers: [
                {
                    answer: "The random pop up once in a while ",
                    action: "continue",
                    key: "A"
                },
                {
                    answer: "They’ve rented space on my face",
                    action: "continue",
                    key: "B"
                },
                {
                    answer: "Acne on the jaw and mouth area ",
                    action: "continue",
                    key: "C"
                },
                {
                    answer: "Acne on the forehead (which can itch)",
                    action: "continue",
                    key: "D"
                },
            ]
        },
        {
            question: "Do you react to products easily?",
            type: "single",
            answers: [
                {
                    answer: "Yes",
                    action: "continue",
                    key: "A"
                },
                {
                    answer: "No",
                    action: "continue",
                    key: "B"
                },
                {
                    answer: "Maybe / Not sure",
                    action: "continue",
                    key: "C"
                },
            ]
        },
        //  Skin Concerns
        {
            question: "Do you have any skin concern ?",
            type: "single",
            answers: [
                {
                    answer: "Acne or Blemishes",
                    action: "continue",
                    key: "A"
                },
                {
                    answer: "Oiliness",
                    action: "continue",
                    key: "B"
                },
                {
                    answer: "Blackheads",
                    action: "continue",
                    key: "C"
                },
                {
                    answer: "Uneven skin tone (Hyperpigmentation)",
                    action: "continue",
                    key: "D"
                },
                {
                    answer: "Redness or Rosacea",
                    action: "continue",
                    key: "E"
                },
                {
                    answer: "Sensitivity",
                    action: "continue",
                    key: "F"
                },
                {
                    answer: "Dehydration (skin feels tight but produces oil)",
                    action: "continue",
                    key: "G"
                },
                {
                    answer: "Dryness (skin is dry or flaky and produces no oil)",
                    action: "continue",
                    key: "H"
                },
                {
                    answer: "Wrinkles",
                    action: "continue",
                    key: "I"
                },
                {
                    answer: "Sun Damage(Sun Burns)",
                    action: "continue",
                    key: "J"
                },
                {
                    answer: "Large Pores",
                    action: "continue",
                    key: "K"
                },
                {
                    answer: "Age Prevention",
                    action: "continue",
                    key: "L"
                },
                {
                    answer: "Under Eye Puffiness or Dark Circles",
                    action: "continue",
                    key: "M"
                },
                {
                    answer: "Eczema",
                    action: "continue",
                    key: "N"
                },
            ]
        },
        {
            question: "Do you wear Sunscreen? [Ultraviolet (UV) light from the sun is the # 1 cause of premature skin aging.]",
            type: "single",
            answers: [
                {
                    answer: "No, Black don’t crack",
                    action: "continue",
                    key: "A"
                },
                {
                    answer: "Yes, religiously ",
                    action: "continue",
                    key: "B"
                },
                {
                    answer: "Sometimes (When I remember)",
                    action: "continue",
                    key: "C"
                },
            ]
        },
        {
            question: "Which skincare routine do you follow ?",
            type: "single",
            answers: [
                {
                    answer: "The Basic (Cleanser, Moisturiser, Sunscreen )",
                    action: "continue",
                    key: "A"
                },
                {
                    answer: "I take it a step further (Basics + toners)",
                    action: "continue",
                    key: "B"
                },
                {
                    answer: "All the works (Basic + toners, serums,masks,treatments , essence  )",
                    action: "continue",
                    key: "C"
                },
                {
                    answer: "I don’t have a routine , sadly",
                    action: "continue",
                    key: "D"
                },
            ]
        },
        // {
        //   question: "What's your last name?",
        //   type: 'text',
        //   minLength: 3,
        // },
        // {
        //   question: "Which email address shall we use?",
        //   small: "Don't worry, we're not going to spam you.",
        //   type: 'email',
        // },
        // {
        //   question: "After washing your face, don’t apply any moisturizer, sunscreen, toner, powder, or other products. Two or three hours later, look in a mirror under bright lights. Your forehead and cheeks feel or appear:",
        //   type: "single",
        //   answers: [
        //     {
        //       answer: "Very rough, flaky, or ashy",
        //       action: "continue",
        //       key: "A"
        //     },
        //     {
        //       answer: "Tight",
        //       action: "continue",
        //       key: "B"
        //     },
        //     {
        //       answer: "Well hydrated with no reflection of light",
        //       action: "continue",
        //       key: "C"
        //     },
        //     {
        //       answer: "Shiny with reflection of bright light",
        //       action: "continue",
        //       key: "D"
        //     },
        //   ]
        // },
        // {
        //   question: "In photos, your face appears shiny:",
        //   type: "single",
        //   answers: [
        //     {
        //       answer: "Never, or you’ve never noticed shine",
        //       action: "continue",
        //       key: "A"
        //     },
        //     {
        //       answer: "Sometimes",
        //       action: "continue",
        //       key: "B"
        //     },
        //     {
        //       answer: "Frequently",
        //       action: "continue",
        //       key: "C"
        //     },
        //     {
        //       answer: "Always",
        //       action: "continue",
        //       key: "D"
        //     },
        //   ]
        // },
        // {
        //   question: "Two to three hours after applying makeup foundation (also known as base) but no powder, your makeup appears:",
        //   type: "single",
        //   answers: [
        //     {
        //       answer: "Flaky or caked in wrinkles",
        //       action: "continue",
        //       key: "A"
        //     },
        //     {
        //       answer: "Smooth",
        //       action: "continue",
        //       key: "B"
        //     },
        //     {
        //       answer: "Shiny",
        //       action: "continue",
        //       key: "C"
        //     },
        //     {
        //       answer: "Streaked and shiny",
        //       action: "continue",
        //       key: "D"
        //     },
        //     {
        //       answer: "I do not wear facial foundation",
        //       action: "continue",
        //       key: "E"
        //     },
        //   ]
        // },
        // {
        //   question: "When in a low-humidity (cold, dry) environment, if you don’t use moisturizers or sunscreen, your facial skin:",
        //   type: "single",
        //   answers: [
        //     {
        //       answer: "Feels very dry or cracks",
        //       action: "continue",
        //       key: "A"
        //     },
        //     {
        //       answer: "Feels tight",
        //       action: "continue",
        //       key: "B"
        //     },
        //     {
        //       answer: "Feels normal",
        //       action: "continue",
        //       key: "C"
        //     },
        //     {
        //       answer: "Looks shiny, or I never feel that I need moisturizer",
        //       action: "continue",
        //       key: "D"
        //     },
        //     {
        //       answer: "Don’t know",
        //       action: "continue",
        //       key: "E"
        //     },
        //   ]
        // },
        // {
        //   question: "When you use soap that suds, bubbles, and foams vigorously, your facial skin:",
        //   type: "single",
        //   answers: [
        //     {
        //       answer: "Feels dry or cracks",
        //       action: "continue",
        //       key: "A"
        //     },
        //     {
        //       answer: "Feels slightly dry but does not crack",
        //       action: "continue",
        //       key: "B"
        //     },
        //     {
        //       answer: "Feels normal",
        //       action: "continue",
        //       key: "C"
        //     },
        //     {
        //       answer: "Feels oily",
        //       action: "continue",
        //       key: "D"
        //     },
        //     {
        //       answer: "I do not use soap or other foaming cleansers. (If this is because they make your skin dry, pick A.)",
        //       action: "continue",
        //       key: "E"
        //     },
        //   ]
        // },
        // {
        //   question: "If not moisturized, your facial skin feels tight:",
        //   type: "single",
        //   answers: [
        //     {
        //       answer: "Always",
        //       action: "continue",
        //       key: "A"
        //     },
        //     {
        //       answer: "Sometimes",
        //       action: "continue",
        //       key: "B"
        //     },
        //     {
        //       answer: "Rarely",
        //       action: "continue",
        //       key: "C"
        //     },
        //     {
        //       answer: "Never",
        //       action: "continue",
        //       key: "D"
        //     },
        //   ]
        // },
        // {
        //   question: "You have clogged pores (blackheads or whiteheads):",
        //   type: "single",
        //   answers: [
        //     {
        //       answer: "Never",
        //       action: "continue",
        //       key: "A"
        //     },
        //     {
        //       answer: "Rarely",
        //       action: "continue",
        //       key: "B"
        //     },
        //     {
        //       answer: "Sometimes",
        //       action: "continue",
        //       key: "C"
        //     },
        //     {
        //       answer: "Always",
        //       action: "continue",
        //       key: "D"
        //     },
        //   ]
        // },
        // {
        //   question: "Your face is oily in the T-zone (forehead and nose):",
        //   type: "single",
        //   answers: [
        //     {
        //       answer: "Never",
        //       action: "continue",
        //       key: "A"
        //     },
        //     {
        //       answer: "Sometimes",
        //       action: "continue",
        //       key: "B"
        //     },
        //     {
        //       answer: "Frequently",
        //       action: "continue",
        //       key: "C"
        //     },
        //     {
        //       answer: "Always",
        //       action: "continue",
        //       key: "D"
        //     },
        //   ]
        // },
        //
        //
        //
        //
        // {
        //   question: "Where are you located?",
        //   type: "text"
        // },
        // {
        //   id: 'thank-you',
        //   question: 'Thank you!',
        //   type: 'submit',
        // },
    ],
};
