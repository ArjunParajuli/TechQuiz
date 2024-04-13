export const quizData = {
    "HTML": [
      {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Tool Markup Language'],
        answer: 'Hyper Text Markup Language'
      },
      {
        question: 'What is the correct HTML element for the largest heading?',
        options: ['<h1>', '<heading>', '<head>', '<h6>'],
        answer: '<h1>'
      },
      {
        question: 'What does the <br> tag do?',
        options: ['It creates a line break', 'It creates a bold text', 'It creates a new paragraph', 'It creates a hyperlink'],
        answer: 'It creates a line break'
      },
      {
        question: 'Which attribute specifies an alternate text for an image, if the image cannot be displayed?',
        options: ['src', 'title', 'alt', 'href'],
        answer: 'alt'
      },
      {
        question: 'What is the correct HTML for creating a hyperlink?',
        options: ['<a href="http://www.example.com">Example</a>', '<a url="http://www.example.com">Example</a>', '<hyperlink>http://www.example.com</hyperlink>', '<link>http://www.example.com</link>'],
        answer: '<a href="http://www.example.com">Example</a>'
      }
    ],
    "CSS": [
      {
        question: 'What does CSS stand for?',
        options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
        answer: 'Cascading Style Sheets'
      },
      {
        question: 'Which property is used to change the background color?',
        options: ['bgcolor', 'color', 'background-color', 'background'],
        answer: 'background-color'
      },
      {
        question: 'Which CSS property is used to control the text size?',
        options: ['text-size', 'font-size', 'text-style', 'font-style'],
        answer: 'font-size'
      },
      {
        question: 'What does the "padding" property do in CSS?',
        options: ['It adds space around an element\'s content', 'It changes the color of the border', 'It changes the font of the text', 'It aligns the text'],
        answer: 'It adds space around an element\'s content'
      },
      {
        question: 'Which CSS property is used to make text bold?',
        options: ['font-weight', 'text-style', 'font-bold', 'bold'],
        answer: 'font-weight'
      }
    ],
    "JavaScript": [
      {
        question: 'Inside which HTML element do we put the JavaScript?',
        options: ['<scripting>', '<js>', '<javascript>', '<script>'],
        answer: '<script>'
      },
      {
        question: 'How do you declare a JavaScript variable?',
        options: ['var carName;', 'v carName;', 'variable carName;', 'vari carName;'],
        answer: 'var carName;'
      },
      {
        question: 'What is the correct way to write a JavaScript array?',
        options: ['var colors = "red", "green", "blue";', 'var colors = ["red", "green", "blue"];', 'var colors = (1:"red", 2:"green", 3:"blue");', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue");'],
        answer: 'var colors = ["red", "green", "blue"];'
      },
      {
        question: 'How do you round the number 7.25, to the nearest integer?',
        options: ['Math.round(7.25)', 'round(7.25)', 'Math.rnd(7.25)', 'rnd(7.25)'],
        answer: 'Math.round(7.25)'
      },
      {
        question: 'Which event occurs when the user clicks on an HTML element?',
        options: ['onchange', 'onclick', 'onmouseclick', 'onmouseover'],
        answer: 'onclick'
      }
    ],
    "React": [
        {
            question: 'What is React?',
            options: ['A JavaScript library for building user interfaces', 'A programming language', 'A CSS framework', 'A database management system'],
            answer: 'A JavaScript library for building user interfaces'
          },
          {
            question: 'What function is used to change the state in React?',
            options: ['setState()', 'updateState()', 'changeState()', 'stateChange()'],
            answer: 'setState()'
          },
          {
            question: 'What is JSX?',
            options: ['JavaScript XML', 'JavaScript XML Syntax', 'JavaScript Extension', 'JavaScript Extension Language'],
            answer: 'JavaScript XML'
          },
          {
            question: 'What is the purpose of ReactDOM.render() method in React?',
            options: ['To render HTML elements into the DOM', 'To render React components into the DOM', 'To render CSS styles into the DOM', 'To render JavaScript functions into the DOM'],
            answer: 'To render React components into the DOM'
          },
          {
            question: 'What is the correct way to pass props to a component in React?',
            options: ['<MyComponent props="value" />', '<MyComponent>{props}</MyComponent>', '<MyComponent {...props} />', '<MyComponent props={value} />'],
            answer: '<MyComponent {...props} />'
          }
        ],
        "Express": [
          {
            question: 'What is Express?',
            options: ['A JavaScript library for building user interfaces', 'A web application framework for Node.js', 'A database management system', 'A programming language'],
            answer: 'A web application framework for Node.js'
          },
          {
            question: 'Which HTTP method is used to request data from the server in Express?',
            options: ['POST', 'GET', 'PUT', 'PATCH'],
            answer: 'GET'
          },
          {
            question: 'What is middleware in Express?',
            options: ['Middleware is software that acts as a bridge between an operating system or database and applications', 'Middleware is a function that has access to the request and response objects', 'Middleware is a database management system', 'Middleware is a programming language'],
            answer: 'Middleware is a function that has access to the request and response objects'
          },
          {
            question: 'How do you create a route in Express?',
            options: ['app.route("/example")', 'app.get("/example")', 'app.use("/example")', 'app.post("/example")'],
            answer: 'app.get("/example")'
          },
          {
            question: 'What does res.send() do in Express?',
            options: ['Sends an HTTP response with a status code and optional data', 'Sends an HTTP request to the server', 'Sends an email to the user', 'Sends a message to the console'],
            answer: 'Sends an HTTP response with a status code and optional data'
          }
        ],
        "MongoDB": [
          {
            question: 'What is MongoDB?',
            options: ['A relational database management system', 'A NoSQL database management system', 'A programming language', 'An operating system'],
            answer: 'A NoSQL database management system'
          },
          {
            question: 'Which data model does MongoDB use?',
            options: ['Relational data model', 'Document data model', 'Hierarchical data model', 'Network data model'],
            answer: 'Document data model'
          },
          {
            question: 'What is a collection in MongoDB?',
            options: ['A group of related documents stored in a database', 'A function in JavaScript', 'A data type in MongoDB', 'A table in a relational database'],
            answer: 'A group of related documents stored in a database'
          },
          {
            question: 'Which command is used to create a new database in MongoDB?',
            options: ['newDB', 'createDB', 'useDB', 'db.create()'],
            answer: 'useDB'
          },
          {
            question: 'What does the "find" command do in MongoDB?',
            options: ['Finds documents in a collection that match a query', 'Finds documents in a database', 'Finds collections in a database', 'Finds databases on a server'],
            answer: 'Finds documents in a collection that match a query'
          }
        ],
        'Node.js': [
          {
            question: 'What is Node.js?',
            options: ['A JavaScript library for building user interfaces', 'A web application framework for Node.js', 'A runtime environment for executing JavaScript code', 'A programming language'],
            answer: 'A runtime environment for executing JavaScript code'
          },
          {
            question: 'Which programming language is Node.js based on?',
            options: ['Java', 'Python', 'C++', 'JavaScript'],
            answer: 'JavaScript'
          },
          {
            question: 'What is the purpose of Node.js?',
            options: ['To build web applications', 'To build mobile applications', 'To execute JavaScript code on the server-side', 'To design user interfaces'],
            answer: 'To execute JavaScript code on the server-side'
          },
          {
            question: 'What is the Node.js event loop?',
            options: ['A loop that handles asynchronous operations', 'A loop that handles synchronous operations', 'A loop that handles HTTP requests', 'A loop that handles database queries'],
            answer: 'A loop that handles asynchronous operations'
          },
          {
            question: 'How do you include a module in Node.js?',
            options: ['import module', 'include module', 'require module', 'use module'],
            answer: 'require module'
          }
        ]
      };