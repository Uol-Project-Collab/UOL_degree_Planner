const modules = {lvl4: [
    {
        id: 1,
        title: "Introduction to programming I",
        description: "By taking this module, you will learn how to use the basic elements of computer programming such as variables, conditionals, functions and loops. You will also learn how to create interactive, graphical computer programs. You will also be introduced to basic object-oriented programming techniques.",
        credits: "15 (150 hours)",
        assessment: ["Coursework I (50%", "Coursework II (50%)"]
    },
    {
        id: 2,
        title: "Introduction to programming II",
        description: "This module is focused on adding to the basic programming skill set you developed in Introduction to Programming I and giving you experience working with existing code and third-party libraries. By taking this module, you will learn how to customise existing code, to implement basic object orientation and to work with a range of third-party libraries.",
        credits: "15 (150 hours)",
        assessment: ["Coursework I (30%", "Coursework II (70%)"]
    },
    {
        id: 3,
        title: "Computational mathematics",
        description: "This module helps you hone your skills in thinking abstractly. It also introduces you to many of the standard continuous models used to help understand and design computational systems. Through this module, you will develop the fundamental computational mathematical tools that will support you throughout the BSc programme. Particular attention is paid to notions of experimentation, reasoning, and generalisation. By taking this module, you will learn a wide range of the computational mathematical concepts and techniques that underpin Computer Science. In particular, you will study number systems, special functions, graphing and linear algebra.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 4,
        title: "Discrete mathematics",
        description: "This module helps you to hone your skills in thinking abstractly. It also introduces you to many of the standard discrete models used to help understand and design computational systems. Through this module, you will develop the fundamental discrete mathematical tools that will support you throughout the BSc programme. Particular attention is paid to notions of experimentation, reasoning, and generalisation.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 5,
        title: "How computers work",
        description: "This module aims to help you understand, and to interact with, computer systems. You will learn how to use knowledge about computational processes to analyse and explain the behaviour of computer systems.The module will use the concept of a Notional Machine, an abstract representation of the functioning of a computer system, to help you to reason about computer systems and to predict their behaviour. You will also learn about typical computer system architectures, basic networking and network services such as databases.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 6,
        title: "Fundamentals of computer science",
        description: "By taking this module, you will gain a broad understanding of many of the key topic areas in computer science and the fundamental concepts that underpin them. In the area of fundamental concepts, you will study binary representations and logic, complexity theory and theories of computation, finite state machines and Turing machines. Building on this, you will then study key areas of interest in computer science including databases, artificial intelligence, and machine learning. These will be presented in the light of practical examples to illustrate how they are implemented in modern computer systems.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 7,
        title: "Web development",
        description: "The Web Development module equips you with the skills to design and implement dynamic web applications using foundational web programming concepts and frameworks. The course considers practical skills such as responsive design with CSS as well as the abstract underpinnings of markup languages. The course extends beyond general web programming and into areas of professional practice.",
        credits: "15 (150 hours)",
        assessment: ["Coursework I (30%)", "Coursework II (70%)"]
    },
    {
        id: 8,
        title: "Algorithms and data structures I",
        description: "This module aims to help you to develop your analytical and problem-solving skills, particularly concerning thinking algorithmically. The module will encourage you to start thinking about how to use computers to solve problems. You will develop skills in thinking algorithmically and learn the central concepts of algorithms and data structures.You will learn about linear data structures such as arrays, vectors and lists, and a unifying framework for considering such data structures as collections. You will learn how algorithms can be expressed as flowcharts and pseudocode, and how to convert these expressions into running programs.You will learn specific algorithms used for sorting and searching, and how to express repetition as iteration and recursion. You will learn a simple model for execution of computation, and how to describe computational problems and their solutions. The model will allow you to compare algorithms regarding their correctness and regarding their efficiency.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
],
lvl5: [
    {
        id: 1,
        title: "Object oriented programming",
        description: "This module aims to provide you with an object-oriented programming skill set. You will learn what objects and classes are and how to write your classes. You will see how objects can interact with each other, including defining and implementing interfaces to control the interaction. You will learn how to use inheritance to inherit and extend functionality from parent classes. You will learn how to write code according to style guidelines and how to write formal code documentation. The language you will use in this module is C++.",
        credits: "15 (150 hours)",
        assessment: ["Coursework I (50%)", "Coursework II (50%)"]
    },
    {
        id: 2,
        title: "Software design and development",
        description: "This module aims to advance your software development skills so that you can write more robust and complicated programs. You will learn how to use a range of programming techniques that will allow you to deal with unwanted or unexpected events that might happen when your application is running. You will use defensive coding to check data before processing it, and exception handling to gracefully manage unforeseen or unwanted occurrences. You will learn how to discuss program structure concerning cohesion (how to meaningfully organise code into modules) and coupling (how to define the interactions between different parts of the program). You will learn about test-driven development, where you write tests for your code, and write the code itself, in parallel. You will also learn how to use software versioning tools to manage a software project as it develops.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 3,
        title: "Databases, networks and the web",
        description: "In this module, you will learn theory and practical skills focused on the modern web, internet and client-server applications. You will learn about relational database systems, mainly from a development perspective, emphasising issues related to data modelling and database implementation in SQL. You will learn how to model data in a database, retrieve data from the database and provide access to data through dynamic websites. In particular, you will learn about the Relational Model, Query processing, and socket architectures to enable communication.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 4,
        title: "Computer security",
        description: "This module aims to provide you with an understanding of the need for computer security and the technologies that support it. The module has both a theoretical component that will teach you mathematical underpinnings of security systems and a practical element that will help you discover the pitfalls of security design and to comprehend the mathematics underlying the protocols by programming small examples.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 5,
        title: "Graphics programming",
        description: "This module aims to show you how to work with images in a variety of ways. You will learn how to synthesise graphics and how to process visual signals. You will learn about the mathematical ideas that underpin digital representations of graphics; how digital media files represent graphics, and how to handle and manipulate them; and the basics of working with simulated physics and 3D graphics.",
        credits: "15 (150 hours)",
        assessment: ["Coursework I (50%)", "Coursework II (50%)"]
    },
    {
        id: 6,
        title: "Algorithms and data structures II",
        description: "Algorithms and data structures are critical elements of the body of knowledge of computer science. Knowledge of a range of algorithms and data structures will allow you to solve common programming problems more rapidly. Within the programme, this module builds on the knowledge and skills gained in Algorithms and Data Structures 1. This module aims to provide you with detailed knowledge of several common algorithms and data structures. You will improve your understanding of searching and sorting and learn new algorithms to solve new problems. and learn about a range of data structures.You will learn how to evaluate and describe the performance of algorithms using big-O notation and how to choose appropriate data structures for representing problems,You will be expected to have mastered the material in Algorithms and Data Structures I before attempting this module.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 7,
        title: "Programming with data",
        description: "Increasingly, computer systems in research and industry are designed to leverage large amounts of data. The data explored by such systems are rich and various: they could include anything from the results of clinical trials to information gleaned from analysing millions of tweets to understanding how people talk positively and negatively about politics.This module will show you how to work with data: getting data from a variety of sources and visualising data in compelling, informative ways. You will also be shown how to process data to make it useful and shareable, and reasoning with data to test hypotheses and make parameterised predictions. The module will also introduce you to a new language and programming environment that is well-adapted to languages for these applications.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 8,
        title: "Professional practice for computer scientists",
        description: "This module prepares you for post-graduation computing careers by enhancing your technical education with broader professional skills. It introduces foundational ethical, legal, and regulatory principles, emphasizing responsible computing practices. You will refine your communication skills, essential for teamwork and stakeholder engagement.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
],
lvl6: [
    {
        id: 1,
        title: "Data science",
        description: "Data science is a significant subfield in computer science. Data science has many application areas ranging from medicine to climate science and business analytics. This module builds on several topics covered in earlier parts of the computer science programme including mathematics, databases, programming and graphics. By taking this module, you will gain a data science skillset. With these skills, you will be able to write computer programs that can read, process and analyse textual and numerical data.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 2,
        title: "Databases and advanced data techniques",
        description: "By taking this module, you will gain a data science skillset. Databases and data services form the basis of many of the computer systems we use today. This module builds on data concepts and skills from previous modules, providing advanced level knowledge about working with data in computers. computer programs that can read, process and analyse textual and numerical data. ",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 3,
        title: "Machine learning and neural networks",
        description: "Machine learning and neural networks provide means for computer systems to extract useful information out of data. These techniques are widely used in the technology industry for a variety of applications, for example, recommending music and other products to people, identifying faces in photos and predicting trends in financial markets. You will learn how to solve common machine learning problems such as regression, classification, clustering, matrix completion and pattern recognition. You will learn about neural networks and how they can be trained and optimised, including an exploration of deep neural networks.You will learn about machine learning and neural network software libraries that allow you to develop machine learning systems rapidly, and you will learn how to verify and evaluate the results.",
        credits: "15 (150 hours)",
        assessment: ["Coursework I (50%)", "Coursework II (50%)"]
    },
    {
        id: 4,
        title: "Artificial intelligence",
        description: "Artificial Intelligence is a long-standing area of interest in computer science research. This module focuses on AI techniques through topics such as symbolic representations, modelling, task learning and game playing. Explore the historical development of AI including search, vision and planning, and the foundations of agent-based approaches to software design, decision making and problem solving. Then try applying AI techniques to issues such as game playing.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 5,
        title: "Virtual reality",
        description: "Discover the medium of Virtual Reality (VR) and VR development. This module combines the theory and psychology of VR with practical development skills. Design and develop compelling VR environments for use in creative practice, science and industry. This module aims to give you the skills needed to develop VR. These skills include understanding the basic theory of presence in VR, which underlies the basic design principles. You will also learn practical development skills, using an appropriate 3D engine to create interactive virtual environments.",
        credits: "15 (150 hours)",
        assessment: ["Coursework I (30%)", "Coursework II (70%)"]
    },
    {
        id: 6,
        title: "Games development",
        description: "This module builds on other modules in the programme, and through it, you will gain experience in the video game development toolkit and process. Video games are a critical application area for computer science, and the games industry forms a significant part of the creative economy. It is a complicated subject, drawing on other areas such as computer graphics, interaction design and artificial intelligence. Develop simple computer games to comply with industry practice, using specialist technical skills acquired in other modules. You will be introduced to tools such as game engines and the processes of game development, including prototyping and play-testing. Your projects involve proposing a game to fit a specific brief and then delivering it with documentation. This module will also introduce key game AI concepts, which is pivotal for contemporary video game production.",
        credits: "15 (150 hours)",
        assessment: ["Coursework I (30%)", "Coursework II (70%)"]
    },
    {
        id: 7,
        title: "Advanced web development",
        description: "Web application development is a critical application area for computer science. Many of the largest technology companies maintain large scale web applications, providing services such as social media, search, advertising and video and audio streaming. Through this module, you will learn how to build dynamic, data-driven websites using databases, front-end frameworks and server-side programming. This module provides the skill set required to do full stack web development work.",
        credits: "15 (150 hours)",
        assessment: ["Coursework I (50%)", "Coursework II (50%)"]
    },
    {
        id: 8,
        title: "Physical computing and the internet of things",
        description: "This module will introduce you to the core techniques used in physical computing. The module complements other parts of the programme, especially regarding programming, networking and the analysis of sensor data. This module provides an introduction to the development and programming of hardware devices that can sense and act in the environment.",
        credits: "15 (150 hours)",
        assessment: ["Coursework I (30%)", "Coursework II (70%)"]
    },
    {
        id: 9,
        title: "3D Graphics and animation",
        description: "This module provides a standalone 3D graphics skill set, and it works alongside other modules in the programme to prepare you to develop graphically intensive applications such as video games and virtual reality systems. This module will cover advanced methods used in current state-of-the-art graphics and animation systems. It will include the mathematical foundations, computational techniques and their use in creative practice.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 10,
        title: "Mobile development",
        description: "This module will support you in getting started in mobile development, and it builds on material such as databases, networking and web development taught elsewhere in the programme. This module aims to give you the fundamental understanding and skills needed to develop mobile applications. By studying this module, you will learn the principles of effective mobile user interface design and how to design and build user interfaces.",
        credits: "15 (150 hours)",
        assessment: ["Coursework I (30%)", "Coursework II (70%)"]
    },
    {
        id: 11,
        title: "Interaction design",
        description: "This module provides you with knowledge and methods from the field of Human-Computer Interaction (HCI) about how to better design computer systems for use by humans. This module complements other, more programming intensive modules by providing theory and techniques which will help you to design more usable computer systems. When taking this module, you will examine the notion of 'interaction with technology'. You will focus on the concepts behind modern user experience design and production. You will gain a solid grasp and practical experience of the process which allows the creation of interactive systems. ",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 12,
        title: "Natural language processing",
        description: "Natural language processing (NLP) involves machines processing and extracting information from natural human languages. NLP is a crucial target for the application of computer science techniques. It consists of a range of specialised techniques that researchers are developing in the significant and growing field of Natural Language Processing. By taking this module, you will gain a solid grasp and practical experience with those techniques. The module complements other modules in the programme which involve the processing and interpretation of data by machines.",
        credits: "15 (150 hours)",
        assessment: ["Coursework (50%)", "Examination (50%)"]
    },
    {
        id: 13,
        title: "Intelligent signal processing",
        description: "This module builds on other topics in the computer science programme such as computer graphics, data representation and artificial intelligence. It provides you with an advanced skill set for writing computer programs that can work with a range of digital signals. This module aims to provide you with a broad experience of digital signal processing techniques and applications. You will study how audio and video signals can be captured and processed by a computer program.",
        credits: "15 (150 hours)",
        assessment: ["Coursework I (50%)", "Coursework II (50%)"]
    },
    {
        id: 14,
        title: "Final project",
        description: "This module provides an opportunity to work individually on an extended project. You will be expected to develop an idea for software development or research project and then carry it out. It pulls together the streams of study, knowledge and practical skills gained in other modules into a single, long-form project. In this module, you will undertake a substantial independent project that will allow you to demonstrate a wide range of skills such as project planning, management, research, software implementation, and written presentation.",
        credits: "30 (300 hours)",
        assessment: [
            "Project proposal (pass/fail)", 
            "Progress logs (5%)", 
            "Preliminary Project report (10%)", 
            "Project presentation video (5%)", 
            "Final project report and code (60%)", 
            "Final project exam (20%)"
        ]
    },
]}