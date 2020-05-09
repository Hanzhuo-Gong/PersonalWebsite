export const data = {
  'Versions': [
    {
      'version': '1.2.0',
      'notes': [
        {
          'label': 'Feature',
          'desc': 'Added Projects section.'
        }
      ]
    },
    {
      'version': '1.1.1',
      'notes': [
        {
          'label': 'Bugfix',
          'desc': 'Fixed CSS issue causing unexpected 1% opacity for some labels.'
        }
      ]
    },
    {
      'version': '1.1.0',
      'notes': [
        {
          'label': 'Feature',
          'desc': 'Added a Skills section.'
        },
        {
          'label': 'Feature',
          'desc': 'Separated data from codebase into a single file.'
        },
        {
          'label': 'Feature',
          'desc': 'Added Release Notes, accessible via footer.'
        }
      ]
    },
    {
      'version': '1.0.1',
      'notes': [
        {
          'label': 'Feature',
          'desc': 'Added mobile device viewability.'
        }
      ]
    },
    {
      'version': '1.0.0',
      'notes': [
        {
          'label': 'Feature',
          'desc': 'First public release.'
        },
        {
          'label': 'Feature',
          'desc': 'Added About Me and Experience sections.'
        },
        {
          'label': 'Feature',
          'desc': 'Added links to GitHub and LinkedIn.'
        }
      ]
    }
  ],
  'TechnicalSkills': [
    {
      'skillset': 'Codebases',
      'skills': [
        {
          'name': 'Python',
          'level': 5,
          'desc': 'My primary general-purpose, high-level software development language. I do all sorts of things with Python, including Backend Web Development, Automation, and Data Scraping.'
        },
        {
          'name': 'JavaScript',
          'level': 5,
          'desc': 'My primary web development language. I also use JavaScript frameworks extensively, particularly React and Express.'
        },
        {
          'name': 'TypeScript',
          'level': 3,
          'desc': 'Slowly switching from JavaScript to TypeScript for better development practices.'
        },
        {
          'name': 'Bash / Shell',
          'level': 3,
          'desc': 'I write Shell Scripts to automate procedures sometimes.'
        },
        {
          'name': 'C++',
          'level': 3,
          'desc': 'The language I used at university.'
        }
      ]
    },
    {
      'skillset': 'Frontend',
      'skills': [
        {
          'name': 'React / JSX',
          'level': 4,
          'desc': 'My primary web frontend framework. I also sometimes pair TypeScript with React (this website was written with TypeScript!)'
        },
        {
          'name': 'HTML / CSS',
          'level': 4,
          'desc': 'Kinda need to know these for any kind of web development.'
        },
        {
          'name': 'Bootstrap',
          'level': 4,
          'desc': 'CSS is awful.'
        }
      ]
    },
    {
      'skillset': 'Backend',
      'skills': [
        {
          'name': 'Flask (Python)',
          'level': 4,
          'desc': 'My primary web backend framework. I generally use Flask to write web APIs / middleware.'
        },
        {
          'name': 'Express (JavaScript)',
          'level': 3,
          'desc': 'The other web backend framework I use. I run Express apps on NodeJS.'
        },
        {
          'name': 'HTTP',
          'level': 4,
          'desc': 'For RESTful programming and data transfer between applications.'
        }
      ]
    },
    {
      'skillset': 'Databases',
      'skills': [
        {
          'name': 'MySQL',
          'level': 4,
          'desc': 'My primary relational database management system.'
        },
        {
          'name': 'PostgreSQL',
          'level': 3,
          'desc': 'Slowly switching my primary RDBMS from MySQL to PostgreSQL.'
        },
        {
          'name': 'MongoDB',
          'level': 3,
          'desc': 'Non-relational database service I use for personal projects.'
        }
      ]
    },
    {
      'skillset': 'Cloud Services',
      'skills': [
        {
          'name': 'Amazon Web Services',
          'level': 4,
          'desc': 'Especially experienced with EC2, Lambda, RDS, and S3 services.'
        }
      ]
    },
    {
      'skillset': 'Other',
      'skills': [
        {
          'name': 'Git',
          'level': 5,
          'desc': 'I\'ve done hundreds of Merge Conflicts, Interactive Rebases, and Commit Squashes. I also sometimes use Bisect and Reflog.'
        },
        {
          'name': 'Linux',
          'level': 4,
          'desc': 'Very comfortable using and navigating the Linux operating system, particularly Ubuntu and Debian.'
        },
        {
          'name': 'VIM',
          'level': 4,
          'desc': 'My editor of choice.'
        }
      ]
    }
  ],
  'Projects': [
    {
      'name': 'Prep To Your Door',
      'desc': 'A web e-commerce platform for a meal prep business based in Austin.',
      'about': 'This application consists of a web UI, a MySQL database, and an API that facilitates data flow between the frontend and backend. The UI is written with React, a JavaScript web frontend framework, and deployed to Netlify. The API is written with Flask, a Python web backend framework and is deployed to AWS Lambda. User subscription billing is automated with Python and Shell scripts on AWS EC2.',
      'app': 'https://preptoyourdoor.netlify.app/',
      'src': 'https://github.com/infinite-options/Prep-To-Your-Door',
      'languages': [
        'la01',
        'la02',
        'la03',
        'la07'
      ]
    },
    {
      'name': 'Grad Planner',
      'desc': 'Helping students graduate on time.',
      'about': 'This software allows students to generate a four-year undergraduate plan within seconds. All they have to do is tell the application their major and classes taken, and then our super smart algorithm will give them a roadmap of their classes. Web platform developed with a React UI, a Flask API, and a PostgreSQL database, supported by a unique Python scheduling algorithm.',
      'app': 'http://gradplanner.us/',
      'src': null,
      'languages': [
        'la01',
        'la02',
        'la03'
      ]
    },
    {
      'name': 'Personal Website',
      'desc': 'This site!',
      'about': 'This website was created using React and with the intent of teaching myself TypeScript.',
      'app': 'https://junha.netlify.app/',
      'src': 'https://github.com/park-junha/PersonalWebsite',
      'languages': [
        'la04',
        'la05'
      ]
    },
    {
      'name': 'CovidSweeper',
      'desc': 'Minesweeper, but with a twist.',
      'about': 'This is a variation of Minesweeper I developed during the early stages of the COVID-19 pandemic, mostly intended to familiarize myself with manipulating canvas with JavaScript and also entertain myself and others.',
      'app': 'https://park-junha.github.io/CovidSweeper/',
      'src': 'https://github.com/park-junha/CovidSweeper',
      'languages': [
        'la02'
      ]
    },
    {
      'name': 'Leetcode',
      'desc': 'My solutions to various Leetcode problems.',
      'about': null, 
      'app': null,
      'src': 'https://github.com/park-junha/Leetcode',
      'languages': [
        'la06'
      ]
    }
  ],
  'language_ids': {
    'la01': {
      'name': 'Python',
      'color': '#29577e'
    },
    'la02': {
      'name': 'JavaScript',
      'color': '#8a7c0c'
    },
    'la03': {
      'name': 'SQL',
      'color': '#a03115'
    },
    'la04': {
      'name': 'TypeScript',
      'color': '#286c7f'
    },
    'la05': {
      'name': 'CSS',
      'color': '#473367'
    },
    'la06': {
      'name': 'Java',
      'color': '#a26917'
    },
    'la07': {
      'name': 'Shell',
      'color': '#428417'
    }
  },
  'ProfessionalExperience': {
    'defaultKey': 'HCL',
    'experience': [
      {
        'id': 'HCL',
        'title': 'Software Engineer',
        'company': 'HCL Technologies',
        'start': 'May \'20',
        'end': 'Current',
        'body': '<div><i>Full Stack Software Engineer</i> for BigFix, a B2B software product that allows administrators to maintain hundreds of thousands of computers.</div>'
      },
      {
        'id': 'IO',
        'title': 'Full Stack Software Engineer',
        'company': 'Infinite Options',
        'start': 'Sep \'19',
        'end': 'May \'20',
        'body': '<div><i>Software Team Lead</i> and <i>Full Stack Developer</i> for a Web-based, customer-facing e-commerce <a href=\'https://preptoyourdoor.netlify.com/\' target=\'_blank\' rel=\'noopener noreferrer\'>platform</a><ul><li>Developed and scaled the web UI with <strong>React</strong> (a <strong>JavaScript</strong> web UI framework) and web APIs with <strong>Flask</strong> (a <strong>Python</strong> web framework)</li><li>Designed and developed a <strong>MySQL</strong> database and hosted it on <strong>AWS RDS</strong></li><li>Automated procedures and platform services with <strong>Python</strong> and <strong>Shell</strong> scripts</li><li>Performed <a href=\'https://github.com/infinite-options/Prep-To-Your-Door\' target=\'_blank\' rel=\'noopener noreferrer\'>code</a> reviews, merge conflict resolutions, and rebases using <strong>Git</strong></li><li>Deployed APIs to a serverless <strong>AWS Lambda</strong> infrastructure using <strong>Zappa</strong> and the web UI to <strong>Netlify</strong></li></ul><i>Technologies Used:</i><ul><li><strong>Codebases</strong>: Python, JavaScript, Bash</li><li><strong>Databases</strong>: MySQL</li><li><strong>Web Frameworks</strong>: Flask, React</li><li><strong>Cloud Services</strong>: AWS, Netlify, Zappa</li></div>'
      },
      {
        'id': 'GP',
        'title': 'Founding Engineer',
        'company': 'Grad Planner',
        'start': 'Sep \'19',
        'end': 'Current',
        'body': '<div><i>Founding Engineer</i> and <i>Technical Advisor</i> to the Board of Directors<ul><li>Created a Web <a href=\'http://gradplanner.herokuapp.com/\' target=\'_blank\' rel=\'noopener noreferrer\'>resource</a> to assist undergraduate students graduate on time, prototyped using the <strong>LAMP</strong> (<strong>Python</strong>) stack</li><li>Directed the team to migrate the software to an MVC model with a <strong>React</strong> UI, <strong>Flask</strong> APIs, and a <strong>PostgreSQL</strong> database</li><li>Performed code reviews, merge conflict resolutions, task management, and interactive rebases using <strong>Git</strong> and <strong>GitHub</strong></li><li>Conducted technical interviews to onboard new interns and employees</li></ul><i>Technologies Used:</i><ul><li><strong>Codebases</strong>: Python, JavaScript, Bash</li><li><strong>Databases</strong>: MySQL, PostgreSQL</li><li><strong>Web Frameworks</strong>: Flask, React</li><li><strong>Cloud Services</strong>: AWS, Heroku</li></ul></div>'
      }
    ]
  }
};
