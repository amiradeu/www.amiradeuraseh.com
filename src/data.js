export const SUMMARY = {
    main: 'Amira Deuraseh is a Frontend Developer with over 5 years of diverse experience in web development, programming education and creative media. She specialises in building interactive web experience using modern JavaScript frameworks & WebGL, transforming innovative ideas to life in the digital space.',
    sub: 'Beyond development, Amira is also a dedicated programming tutor and passionate visual storyteller, making her a well-rounded professional with a love for design, art and collaboration.',
    pronoun: 'she/her',
}

export const CONTACTS = {
    name: 'Amira Deuraseh',
    site: 'www.amiradeuraseh.com',
    email: 'hey@amiradeuraseh.com',
    location: 'Seremban, Malaysia',
}

export const WORKS = [
    {
        title: 'Programming Tutor',
        company: 'Various Clients',
        year: '2019 - Present',
        description:
            'Amira provides personalised one-to-one tutoring in a wide range of computer science topics, from fundamental concepts to advanced design patterns. Her adaptable teaching style accommodates students from diverse educational backgrounds, and she thrives on the challenges of teaching new subjects and tailoring lessons to meet each student’s specific learning needs.',
    },
    {
        title: 'Creative Content Producer',
        company: 'Various Clients',
        year: '2021 - Present',
        description:
            'As a content producer, Amira seamlessly combines roles as a photographer, videographer, storyteller and editor to create captivating visual content for global brands. Her work with clients across South Korea, Malaysia, Portugal and Japan consistently result in emotionally resonant narratives that drives user engagement for marketing campaigns.',
    },
    {
        title: 'Design Engineer',
        company: 'Sony EMCS Malaysia',
        year: '2019 - 2021',
        description:
            'At Sony, Amira played a key role in developing and maintaining Android TV Java applications for automation and testing. She developed internal software for automatic picture quality testing using Sony’s proprietary hardware sensors and Android native C++. Additionally, she helped the team in integrating Amazon Alexa’s Voice Assistant API to offer smart TV features.',
    },
    {
        title: 'Web Developer',
        company: 'SME Corporation Malaysia',
        year: '2017 - 2018',
        description:
            'Amira designed and developed an interactive data analytics platform to visualise complex SME data in user-friendly formats. This platform significantly enhanced data accessibility and provided users with real-time data simulations and insights.',
    },
    {
        title: 'Research Assistance',
        company: 'Walailak University (WU) Thailand',
        year: '2016',
        description:
            'Under the supervision of Dr. Anurak Thungtong, Amira analysed and visualised student admission records using Python. Her collaborative efforts yielded valuable insights that supported data-driven decisions aimed at improving educational policies at Walailak University.',
    },
]

export const CERTIFICATIONS = [
    {
        title: 'Three.js Journey',
        courseLink: 'https://threejs-journey.com',
        author: 'Bruno Simon',
        year: '2023',
        certLink: 'https://threejs-journey.com/certificate/view/15484',
        description:
            'Comprehensive training in WebGL and Three.js library, covering performance optimisation, 3D modeling in Blender, GLSL shaders, GPGPU, and React Three Fibre (r3f).',
    },
    {
        title: 'The Joy of React',
        courseLink: 'https://www.joyofreact.com',
        author: 'Josh W Comeau',
        year: '2024',
        certLink:
            'https://courses.joshwcomeau.com/certificate/6708c9b177254c0f3dfe53f2',
        description:
            'In-depth React development training, covering advanced state management, Hooks, component API design, full stack React with Next.js, Framer Motion and MDX-based blogs.',
    },
    {
        title: 'CSS for Javascript Developer',
        courseLink: 'https://css-for-js.dev',
        author: 'Josh W Comeau',
        year: '2023',
        certLink:
            'https://courses.joshwcomeau.com/certificate/651fa3556506fa37e0723728',
        description:
            'Focuses on the intricacies of modern CSS, including layout techniques, styled components, animations, and accessibility best practices.',
    },
]

export const EDUCATION = {
    institute: 'Universiti Putra Malaysia (UPM), Serdang',
    bachelor: 'Bachelor of Computer & Communication Systems Engineering',
    year: '2016-2019',
    result: 'Second-Class Upper Honours, CGPA 3.696',
}

export const LANGUAGES = [
    {
        title: 'English',
        level: 'Fluent',
        certLink: '',
    },
    {
        title: 'Malay',
        level: 'Native',
    },
    {
        title: 'Korean',
        level: 'Intermediate (TOPIK Level 3)',
        certLink: '/certs/TOPIK-Cert.pdf',
    },
    {
        title: 'Thai, Japanese, Turkish',
        level: 'Elementary',
    },
]

export const MODELS = {
    LEMON: {
        name: 'lemon',
        source: 'https://polyhaven.com/a/lemon',
        attributes: {
            scale: 30,
            rotation: [0, 0, 0.2],
        },
    },
    APPLE: {
        name: 'apple',
        source: 'https://polyhaven.com/a/food_apple_01',
    },
    LIME: {
        name: 'lime',
        source: 'https://polyhaven.com/a/food_lime_01',
    },
    POMEGRATE: {
        name: 'pomegrate',
        source: 'https://polyhaven.com/a/food_pomegranate_01',
    },
    KIWI: {
        name: 'kiwi',
        source: 'https://polyhaven.com/a/food_kiwi_01',
    },
    AVOCADO: {
        name: 'avocado',
        source: 'https://polyhaven.com/a/food_avocado_01',
    },
}

export const TECHSTACK = [
    {
        skill: 'ThreeJS',
        level: 3,
        image: 'threejs.svg',
        attributes: {
            scale: 0.06,
            rotation: [0, 0, 0.7],
            position: [0, 0, 0.04],
        },
        model: MODELS.LEMON,
    },
    {
        skill: 'React',
        image: 'react.svg',
        level: 3,
    },
    {
        skill: 'Javascript',
        image: 'javascript.svg',
        level: 3,
    },
    {
        skill: 'CSS',
        image: 'css.svg',
        level: 3,
    },
    {
        skill: 'styled-component',
        image: 'styled-component.svg',
        level: 3,
    },
    {
        skill: 'git',
        image: 'git.svg',
        level: 3,
    },
    {
        skill: 'Blender',
        image: 'blender.svg',
        level: 3,
    },
    {
        skill: 'GLSL',
        image: 'glsl.svg',
        level: 3,
    },
    {
        skill: 'Gsap',
        image: 'gsap.svg',
        level: 2,
    },
    {
        skill: 'NextJS',
        image: 'nextjs.svg',
        level: 2,
    },
    {
        skill: 'Node.js',
        image: 'nodejs.svg',
        level: 2,
    },
    {
        skill: 'VueJS',
        image: 'vuejs.svg',
        level: 2,
    },
    {
        skill: 'Figma',
        image: 'figma.svg',
        level: 1,
    },
    {
        skill: 'Illustrator',
        image: 'illustrator.svg',
        level: 1,
    },
    {
        skill: 'C++',
        image: 'c++.svg',
        level: 1,
    },
    {
        skill: 'Android',
        image: 'android.svg',
        level: 1,
    },
    {
        skill: 'Python',
        image: 'python.svg',
        level: 1,
    },
    {
        skill: 'Web3',
        image: 'web3.svg',
        level: 1,
    },
]

export const LEVELS = [
    {
        level: 5,
        description: 'comfortable',
    },
    {
        level: 4,
        description: 'good',
    },
    {
        level: 3,
        description: 'experimental',
    },
    {
        level: 2,
        description: 'do-able',
    },
    {
        level: 1,
        description: 'well, but not my preference',
    },
]
