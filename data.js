// Data for all AI tools with new fields
const toolsData = [
  {
    id: 'chatgpt',
    name: { en: 'ChatGPT', ar: 'شات جي بي تي' },
    logo: 'https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg',
    website: 'https://chat.openai.com/',
    rating: 4.8,
    reviewCount: 15700,
    category: 'writing',
    isSponsored: true,
    pricing: {
        en: "Free tier available, Plus $20/month",
        ar: "خطة مجانية متاحة، Plus بسعر 20$/شهر"
    },
    short_description: {
      en: 'Advanced conversational AI for writing, coding, and problem-solving.',
      ar: 'روبوت دردشة ذكي متقدم للمحادثات والكتابة وحل المشاكل.'
    }
  },
  {
    id: 'grammarly',
    name: { en: 'Grammarly', ar: 'جرامرلي' },
    logo: 'https://cdn.worldvectorlogo.com/logos/grammarly-2.svg',
    website: 'https://www.grammarly.com/',
    rating: 4.7,
    reviewCount: 2100,
    category: 'writing',
    isSponsored: true,
    pricing: {
        en: "Free tier available, Premium $12/month",
        ar: "خطة مجانية متاحة، Premium بسعر 12$/شهر"
    },
    short_description: {
      en: 'AI-powered writing assistant for grammar, spelling, and style.',
      ar: 'مساعد كتابة ذكي لتحسين القواعد والإملاء والأسلوب.'
    }
  },
  {
    id: 'midjourney',
    name: { en: 'Midjourney', ar: 'ميدجورني' },
    logo: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_Midjourney_-white.svg',
    website: 'https://www.midjourney.com/',
    rating: 4.9,
    reviewCount: 9800,
    category: 'image',
    isSponsored: false,
    pricing: {
        en: "Basic Plan from $10/month",
        ar: "الخطة الأساسية تبدأ من 10$/شهر"
    },
    short_description: {
      en: 'Generate high-quality, artistic images from text descriptions.',
      ar: 'توليد صور فنية عالية الجودة من الأوصاف النصية.'
    }
  },
  {
    id: 'synthesia',
    name: { en: 'Synthesia', ar: 'سينثيسيا' },
    logo: 'https://assets-global.website-files.com/61ba09162326382c5598686a/623049b497364b635677a287_logo-1.svg',
    website: 'https://www.synthesia.io/',
    rating: 4.6,
    reviewCount: 1200,
    category: 'video',
    isSponsored: false,
    pricing: {
        en: "Personal plan from $30/month",
        ar: "الخطة الشخصية تبدأ من 30$/شهر"
    },
    short_description: {
      en: 'Create AI-generated videos with realistic avatars and voiceovers.',
      ar: 'أنشئ مقاطع فيديو بالذكاء الاصطناعي مع شخصيات رمزية واقعية.'
    }
  },
  {
    id: 'elevenlabs',
    name: { en: 'ElevenLabs', ar: 'إيليفن لابز' },
    logo: 'https://storage.googleapis.com/eleven-public-prod/images/v2_web/logo_light.svg',
    website: 'https://elevenlabs.io/',
    rating: 4.8,
    reviewCount: 2300,
    category: 'audio',
    isSponsored: true,
    pricing: {
        en: "Free tier, Starter from $5/month",
        ar: "خطة مجانية، المبتدئة تبدأ من 5$/شهر"
    },
    short_description: {
        en: 'Generative Voice AI for text-to-speech and voice cloning.',
        ar: 'ذكاء اصطناعي صوتي لتوليد الكلام من النص واستنساخ الصوت.'
    }
  },
  {
    id: 'notion-ai',
    name: { en: 'Notion AI', ar: 'نوشن إي آي' },
    logo: 'https://www.notion.so/images/meta/default.png',
    website: 'https://www.notion.so/product/ai',
    rating: 4.7,
    reviewCount: 3400,
    category: 'productivity',
    isSponsored: false,
    pricing: {
        en: "Add-on for $10/month per member",
        ar: "إضافة بسعر 10$/شهر لكل عضو"
    },
    short_description: {
      en: 'Your connected workspace with the power of AI integrated.',
      ar: 'مساحة عملك المتصلة مع قوة الذكاء الاصطناعي المدمجة.'
    }
  },
  {
    id: 'runway',
    name: { en: 'Runway', ar: 'رانواي' },
    logo: 'https://www.runwayml.com/images/runway-logo.svg',
    website: 'https://runwayml.com/',
    rating: 4.7,
    reviewCount: 1900,
    category: 'video',
    isSponsored: true,
    pricing: {
        en: "Free tier, Standard from $15/month",
        ar: "خطة مجانية، القياسية تبدأ من 15$/شهر"
    },
    short_description: {
        en: 'AI magic tools for video editing, generation, and collaboration.',
        ar: 'أدوات سحرية بالذكاء الاصطناعي لتحرير الفيديو وتوليده والتعاون.'
    }
  },
  {
    id: 'copy-ai',
    name: { en: 'Copy.ai', ar: 'كوبي.إي آي' },
    logo: 'https://assets-global.website-files.com/623253096b52c0703c153358/623253096b52c0032c153381_61e8c56543165b4c4143499e_Copy.ai%2520Logo.svg',
    website: 'https://www.copy.ai/',
    rating: 4.5,
    reviewCount: 1600,
    category: 'writing',
    isSponsored: false,
    pricing: {
        en: "Free plan, Pro from $49/month",
        ar: "خطة مجانية، Pro تبدأ من 49$/شهر"
    },
    short_description: {
      en: 'AI-powered copywriter that generates high-quality marketing copy.',
      ar: 'كاتب إعلانات مدعوم بالذكاء الاصطناعي يولد نصوصًا تسويقية.'
    }
  },
  {
    id: 'jasper',
    name: { en: 'Jasper', ar: 'جاسبر' },
    logo: 'https://cdn.worldvectorlogo.com/logos/jasper-ai.svg',
    website: 'https://www.jasper.ai/',
    rating: 4.8,
    reviewCount: 5500,
    category: 'writing',
    isSponsored: false,
    pricing: {
        en: "Creator mode from $49/month",
        ar: "وضع المبدع يبدأ من 49$/شهر"
    },
    short_description: {
        en: 'The AI Content Platform for teams that helps you create amazing content.',
        ar: 'منصة محتوى الذكاء الاصطناعي للفرق لمساعدتك في إنشاء محتوى مذهل.'
    }
  },
  {
    id: 'durable',
    name: { en: 'Durable', ar: 'ديورابل' },
    logo: 'https://durable.co/assets/logo-icon-color-84d72379.svg',
    website: 'https://durable.co/',
    rating: 4.4,
    reviewCount: 800,
    category: 'productivity',
    isSponsored: false,
    pricing: {
        en: "Starter from $15/month",
        ar: "المبتدئة تبدأ من 15$/شهر"
    },
    short_description: {
        en: 'The AI website builder that generates an entire website in seconds.',
        ar: 'منشئ المواقع بالذكاء الاصطناعي الذي يولد موقعًا كاملاً في ثوانٍ.'
    }
  },
  {
    id: 'github-copilot',
    name: { en: 'GitHub Copilot', ar: 'جيتهاب كوبايلوت' },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/GitHub_Copilot_logo.svg/1200px-GitHub_Copilot_logo.svg.png',
    website: 'https://github.com/features/copilot',
    rating: 4.6,
    reviewCount: 4100,
    category: 'developer',
    isSponsored: true,
    pricing: {
        en: "Individual from $10/month",
        ar: "للأفراد يبدأ من 10$/شهر"
    },
    short_description: {
        en: 'Your AI pair programmer. Get suggestions for whole lines or functions.',
        ar: 'مبرمجك الزوجي الاصطناعي. احصل على اقتراحات لأسطر كاملة أو دوال.'
    }
  },
  {
    id: 'leonardo-ai',
    name: { en: 'Leonardo.Ai', ar: 'ليوناردو.إي آي' },
    logo: 'https://leonardo.ai/icons/favicon-32x32.png',
    website: 'https://leonardo.ai/',
    rating: 4.7,
    reviewCount: 3200,
    category: 'image',
    isSponsored: false,
    pricing: {
        en: "Free tier, Apprentice from $12/month",
        ar: "خطة مجانية، المبتدئة تبدأ من 12$/شهر"
    },
    short_description: {
        en: 'Create stunning game assets and visuals with the power of AI.',
        ar: 'أنشئ أصول ألعاب وصور مذهلة بقوة الذكاء الاصطناعي.'
    }
  },
  {
    id: 'quillbot',
    name: { en: 'QuillBot', ar: 'كويل بوت' },
    logo: 'https://quillbot.com/favicon.png',
    website: 'https://quillbot.com/',
    rating: 4.5,
    reviewCount: 6000,
    category: 'writing',
    isSponsored: false,
    pricing: {
        en: "Free tier, Premium from $8.33/month",
        ar: "خطة مجانية، Premium تبدأ من 8.33$/شهر"
    },
    short_description: {
        en: 'AI-powered paraphrasing tool, grammar checker, and summarizer.',
        ar: 'أداة إعادة صياغة ومدقق نحوي وملخص نصوص مدعومة بالذكاء الاصطناعي.'
    }
  },
  {
    id: 'heygen',
    name: { en: 'HeyGen', ar: 'هاي جين' },
    logo: 'https://www.heygen.com/static/favicon-32x32.png',
    website: 'https://www.heygen.com/',
    rating: 4.7,
    reviewCount: 1100,
    category: 'video',
    isSponsored: false,
    pricing: {
        en: "Creator plan from $29/month",
        ar: "خطة المبدع تبدأ من 29$/شهر"
    },
    short_description: {
        en: 'Scale your video production with customizable AI avatars.',
        ar: 'وسع إنتاج الفيديو الخاص بك باستخدام شخصيات رمزية قابلة للتخصيص.'
    }
  },
  {
    id: 'luma-ai',
    name: { en: 'Luma AI', ar: 'لوما إي آي' },
    logo: 'https://lumalabs.ai/luma-logo-256.png',
    website: 'https://lumalabs.ai/',
    rating: 4.6,
    reviewCount: 950,
    category: '3d',
    isSponsored: true,
    pricing: {
        en: "Free to use (with limits)",
        ar: "مجاني للاستخدام (مع قيود)"
    },
    short_description: {
        en: 'Create incredible lifelike 3D models and scenes with your phone.',
        ar: 'أنشئ نماذج ومشاهد ثلاثية الأبعاد واقعية بشكل لا يصدق باستخدام هاتفك.'
    }
  }
];

const categories = ['writing', 'image', 'video', 'audio', 'productivity', 'developer', '3d'];
