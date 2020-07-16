export const aboutLanding = {
    header: '“First we build the tools, then they build us.” ― Marshall McLuhan',
    body: ''
}

export const portLanding = {
    header: 'I\'m Working In',
    body: ['React',
        'React Native',
        'Vue',
        'TypeScript',
        'Node.JS',
        'JavaScript',
        'jQuery',
        'HTML / CSS',
        'SCSS']
}

export const personalDesc = {
    header: 'Joel Oliver Edward Lacey',
    body: [
        'I think we’re intrinsically linked with technology. At this point it spans every corner of our lives. We’ve reached an important cross-roads where we have to stop and ask ourselves; is our technology really helping us live better lives in the way we want it to?', 'I’m a Front End Developer who recently made an intensive shift from Content Management to be at the bleeding edge of contending with that very question. In what ways is our technology getting away from us? How can we design programs and websites that represent our best interests: in diversity, in our mental well being, in digital community?', 'I’ve been learning, coding, writing and collaborating with wonderful people and organizations in the community in that pursuit ever since. Read a little about that journey below.'
    ]
}

export const journey = [{
    company: 'Turing School of Software & Design',
    sdate: 'September 2019',
    edate: 'April 2020',
    location: 'Denver, CO',
    title: 'Certificate in Front-End Engineering',
    desc: ['I knew I wanted to be creating, and working with those in the midst of creation. Having attended a number of startup and volunteer events, I saw the area of most need was often in development. Either in being able to build and work with teams in communicating technical concepts, or in actual ground up problem-solving and coding.', 'I enrolled in a 7 month, full- time Front End Development program at Turing that entailed over 2000 hours of education.It lead to long nights of debugging, exploring, teaching, and working closely with some of the best teams I’ve ever got a chance to be a part of.'],
    highlights: [
        'Gave several talks on humane & sustainable technological design.',
        'Served as student leader for two modules coordinating class discussions, events, and weekly stand-ups & running a musicians group.',
        'Ran mentorship program teaching the fundamentals of JavaScript classes & array prototypes to lower classes.'
        ]
    }, {
        company: 'Factset Research Systems',
        sdate: 'August 2015',
        edate: 'August 2019',
        location: 'New York, NY',
        title: 'Content Manager',
        desc: ['My first job out of college at Factset was a whirlwind of learning new financial concepts, learning a vastly complicated application, learning how to operate in teams and how to interface with engineers. It was also a chance to work with a wonderful group of connections, mentors and friends who I still treasure today.', 'I joined a team working with Fixed Income financial data, integrating proprietary and third party content sets onto the platform. I ended up working on and eventually managing a content set encountering a lot of QA troubles. Through over a year effective business writing, team management, crisis meetings and collaborative problem solving we managed to achieve stability and overhaul the whole offering to restore client trust and access.'],
        highlights: [
            'Hired, trained and managed a team to improve support and turnover of content integration requests.',
            'Overhauled systemically struggling content sets reducing QA request tickets by 90 %.',
            'Devised technical specifications and fetch formulas for database creation, maintenance and client utilization.',
            'Managed a collection of products: Setting and maintaining priorities and timelines, assisting in contract management and compliance, and overseeing stability and QA testing.'
        ]
    }, {
        company: 'The University of Connecticut',
        sdate: 'September 2011',
        edate: 'May 2015',
        location: 'Storrs, CT',
        title: 'Bachelors of Science in Business: Management of Information System',
        desc: ['I started my education pursuing a degree in entrepreneurship. I knew I loved teams, and the creative problem solving that came along with the entrepreneurial experience. I was a member of the student entrepreneurial organization: starting business plans with fellow members, attending local startup weekend events and just getting mixed up in it however I could.', 'But I started to see that the entrepreneurial spirit was something you could bring to any profession.I realized that getting involved with technology allowed you to be a more valuable member of a team in solving a lot of modern problems.So I shifted my major to MIS, and leaned into technology.'],
        highlights: [
            'Managed transitioning the Student Entrepreneurial Organization website to the University platform.',
            'Competed with fellow SEO members at Startup Weekend events bringing ideas from concept to MVP.',
            'Worked at the African American Cultural Center helping facilitate operations and speaker events.',
            'Classes In: Networking, SQL, Database Managment, IT Security'
        ]
    },
]

export const projects = [
        {
            title: 'The American Portrait',
            github: 'https://github.com/joel-oe-lacey/The-American-Portrait',
            live: 'https://the-american-portrait.herokuapp.com/',
            desc: ['I believe there’s real power in remembering our collective history. Originally born in England, I immigrated with my family when I was young and only recently proudly participated in my citizenship ceremony having lived here my whole life.', 'I wanted to find a way to visual connect with the American past. I built this solo project in five days, it normalizes and massages data from the Harvard Art Museum API to feed a React-based timeline visualization tool for historical photos by US state, utilizing Redux for global state control.', 'It wasn’t without struggle, the Harvard API has provides a deeply variable nested object return dependent on the type of art being accessed. It also has large gaps in available meta-data for the pieces, creating limited options by which to create causal, meaningful groupings.', 'Ultimately however, it came together to create a fun, interactive platform by which people can explore the history of their state.'],
            stack: ['React (Class-Based)', 'React Router', 'Redux', 'SCSS', 'Jest', 'Enzyme'],
            img: 'https://d2fbv9aul2xr54.cloudfront.net/american_portrait.png'
        },
        {
            title: 'Treat Yo Self',
            github: 'https://github.com/TreatYoSelf/react_fe',
            live: '',
            desc: ['As we reached our final project of the bootcamp the full weight of COVID-19 was starting to bear down on society. Everyone was afraid for the wellbeing of themselves and their family, people in the class were unsure whether they’d find employment or face financial ruin. My team of four would then embark on a project that could well have broken us, where everything that could go wrong, did. The truest embodiment of Murphys law.', 'Among us two parents burdened to try find schedule balance with now homebound children. Ironically we’d be creating a self-care app, that looks to automatically schedule guilt free self-care tasks into your already jam packed google calendar.', 'Along the way we’d have to rebuild the React Native Front End four times due to Google OAuth dead-ends. We’d have to rebuild the Back End twice for similar conflicts with user sessions and Graph QL. All the while the team kept in spirit, kept in open communication, and cheerfully and supportively powered through setback after setback to reach a solid MVP.', 'While we might not have landed where we wanted, I can honestly say I’m more proud of that journey and that team more than I am of any other project.'],
            stack: ['React Native', 'Apollo/GraphQL', 'React Test Renderer', 'Travis CI', 'Expo', 'Google OAuth'],
            img: 'https://d2fbv9aul2xr54.cloudfront.net/treat_yoself.png'
        },
        {
            title: 'Sequence : A Fidget Game',
            github: 'https://github.com/joel-oe-lacey/fidget',
            live: 'https://joel-oe-lacey.github.io/fidget/',
            desc: ['My mind is often drifts with hyperactivity. I find I stay more engaged if I perform simple mechanical tasks in the background of whatever I\'m doing.I built a very simple arrow key fidget game to funnel that passive energy.', 'This was a basic hackathon project, built in four hours. It served as good practice on defining a baseline MVP and then shooting for that, with outlined extensions available. I had hoped to get a points shop open, to get more dynamic animations in place, but ultimately had to reign those in to create something concrete and usable.', 'The struggle came from the implementation of a custom hook to track user key stroke input, something I had set as a learning goal for the project. It took a variety of implementations to prevent an infinite loop of state refreshes. Creating dynamic styling for the arrow display was also a fun experiment.', 'Ultimately, this project placed third in the competition. Even in its simplicity, it’s a functional tool I still regularly turn to to manage hyperactivity in my day to day.'],
            stack: ['React (Hooks)', 'Redux', 'SCSS'],
            img: 'https://d2fbv9aul2xr54.cloudfront.net/fidget.png'
        },
        {
            title: 'Grandiose Sarajevo Motel',
            github: 'https://github.com/joel-oe-lacey/Grandiose-Sarajevo-Motel',
            live: '',
            desc: ['After working in JavaScript frameworks for long enough you can start to forget how much heavy lifting they’re doing. Starting at Turing, we were tested to start in that tribulation before we got to the good stuff. Three months in, this solo project was an exploration of that more fundamental form of development, built entirely using vanilla JavaScript and jQuery.', 'This project was built with a focus on Test Driven Design. While I’ve found TDD to be much more accessible in vanilla JavaScript than it is with a more complex framework, stateful tracking and effective single page display was quickly becoming unwieldy for the scope of the operation at hand.', 'jQuery helped eliminate a slew of event listeners, but effective utilization of event bubbling was still key. Given there were many displays for many user types, effectively designing modular and reusable components while allowing enough variation and flexibility in those components proved difficult with a purely object oriented structure.', 'Still, ultimately the project was a fun opportunity to work more closely with class design, experiment on some different modes of styling, and work in a clean TDD workflow which made the struggle all worthwhile.'],
            stack: ['Javascript', 'jQuery', 'SCSS', 'Mocha', 'Chai'],
            img: 'https://d2fbv9aul2xr54.cloudfront.net/sarajevo_motel.png'
        },

    ]