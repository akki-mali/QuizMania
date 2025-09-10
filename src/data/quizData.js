export const QuizData = {
  javascript: {
    questions: [
      {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["var myVar;", "variable myVar;", "v myVar;", "declare myVar;"],
        correctAnswer: 0,
        explanation: "The 'var' keyword is used to declare variables in JavaScript."
      },
      {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Undefined"],
        correctAnswer: 2,
        explanation: "JavaScript doesn't have a 'Float' data type. Numbers are represented as 'Number' type."
      },
      {
        question: "What does '===' operator do in JavaScript?",
        options: ["Assigns a value", "Compares values only", "Compares values and types", "Declares a variable"],
        correctAnswer: 2,
        explanation: "The '===' operator performs strict equality comparison, checking both value and type."
      },
      {
        question: "How do you create a function in JavaScript?",
        options: ["function = myFunction() {}", "function myFunction() {}", "create myFunction() {}", "def myFunction() {}"],
        correctAnswer: 1,
        explanation: "Functions in JavaScript are declared using the 'function' keyword followed by the function name."
      },
      {
        question: "What will 'typeof null' return in JavaScript?",
        options: ["null", "undefined", "object", "boolean"],
        correctAnswer: 2,
        explanation: "This is a well-known quirk in JavaScript. 'typeof null' returns 'object' due to a historical bug."
      },
      {
        question: "Which method is used to add an element to the end of an array?",
        options: ["push()", "add()", "append()", "insert()"],
        correctAnswer: 0,
        explanation: "The push() method adds one or more elements to the end of an array."
      },
      {
        question: "What is the scope of a variable declared with 'let'?",
        options: ["Global scope", "Function scope", "Block scope", "Module scope"],
        correctAnswer: 2,
        explanation: "'let' creates block-scoped variables, meaning they're only accessible within the block they're declared in."
      },
      {
        question: "How do you convert a string to a number in JavaScript?",
        options: ["Number(string)", "parseInt(string)", "parseFloat(string)", "All of the above"],
        correctAnswer: 3,
        explanation: "All these methods can convert strings to numbers: Number(), parseInt(), and parseFloat()."
      },
      {
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: ["The current function", "The global object", "The object that owns the code", "The previous object"],
        correctAnswer: 2,
        explanation: "The 'this' keyword refers to the object that owns the currently executing code."
      },
      {
        question: "Which operator is used to check if a property exists in an object?",
        options: ["exists", "has", "in", "contains"],
        correctAnswer: 2,
        explanation: "The 'in' operator is used to check if a property exists in an object."
      }
    ]
  },
  angular: {
    questions: [
      {
        question: "What is Angular?",
        options: ["A JavaScript library", "A TypeScript-based web framework", "A database", "A CSS framework"],
        correctAnswer: 1,
        explanation: "Angular is a TypeScript-based web application framework developed by Google."
      },
      {
        question: "What is a component in Angular?",
        options: ["A service", "A directive", "A building block of Angular applications", "A module"],
        correctAnswer: 2,
        explanation: "Components are the main building blocks of Angular applications, controlling a patch of screen called a view."
      },
      {
        question: "What is dependency injection in Angular?",
        options: ["A design pattern", "A way to provide dependencies to a class", "A testing technique", "A routing method"],
        correctAnswer: 1,
        explanation: "Dependency injection is a way to supply a new instance of a class with the fully-formed dependencies it requires."
      },
      {
        question: "What is the Angular CLI?",
        options: ["A code editor", "A command line interface for Angular", "A testing framework", "A deployment tool"],
        correctAnswer: 1,
        explanation: "Angular CLI is a command line interface tool that helps create, build, and maintain Angular applications."
      },
      {
        question: "What are Angular directives?",
        options: ["Components only", "Classes that add behavior to elements", "Services", "Modules"],
        correctAnswer: 1,
        explanation: "Directives are classes that add additional behavior to elements in your Angular applications."
      },
      {
        question: "What is data binding in Angular?",
        options: ["A way to connect component data to the template", "A routing technique", "A testing method", "A styling approach"],
        correctAnswer: 0,
        explanation: "Data binding is a way to coordinate application data with the DOM, allowing dynamic content updates."
      },
      {
        question: "What is an Angular service?",
        options: ["A component", "A class that provides functionality across components", "A directive", "A pipe"],
        correctAnswer: 1,
        explanation: "Services are classes that provide specific functionality and can be shared across components."
      },
      {
        question: "What is Angular routing?",
        options: ["A way to navigate between views", "A data binding technique", "A testing method", "A styling approach"],
        correctAnswer: 0,
        explanation: "Angular routing enables navigation from one view to another as users perform application tasks."
      },
      {
        question: "What are Angular pipes?",
        options: ["Components", "Services", "A way to transform data in templates", "Directives"],
        correctAnswer: 2,
        explanation: "Pipes are a way to transform data in Angular templates, like formatting dates or currency."
      },
      {
        question: "What is NgModule in Angular?",
        options: ["A component", "A way to organize an application", "A service", "A directive"],
        correctAnswer: 1,
        explanation: "NgModule is a decorator that defines a module and provides metadata about how to compile and run code."
      }
    ]
  },
  flutter: {
    questions: [
      {
        question: "What is Flutter?",
        options: ["A JavaScript framework", "A mobile app development framework by Google", "A database", "A web browser"],
        correctAnswer: 1,
        explanation: "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop."
      },
      {
        question: "What programming language does Flutter use?",
        options: ["JavaScript", "Java", "Dart", "Python"],
        correctAnswer: 2,
        explanation: "Flutter uses Dart programming language, which is also developed by Google."
      },
      {
        question: "What is a Widget in Flutter?",
        options: ["A database", "The basic building block of Flutter UI", "A testing tool", "A deployment method"],
        correctAnswer: 1,
        explanation: "Widgets are the basic building blocks of a Flutter app's user interface."
      },
      {
        question: "What is the difference between StatelessWidget and StatefulWidget?",
        options: ["No difference", "StatelessWidget can change, StatefulWidget cannot", "StatefulWidget can change state, StatelessWidget cannot", "They are the same"],
        correctAnswer: 2,
        explanation: "StatefulWidget can change its state during the widget's lifetime, while StatelessWidget cannot."
      },
      {
        question: "What is Hot Reload in Flutter?",
        options: ["A testing feature", "A way to quickly see changes without restarting the app", "A deployment method", "A debugging tool"],
        correctAnswer: 1,
        explanation: "Hot Reload allows developers to quickly see changes in the app without losing the current state."
      },
      {
        question: "What is a BuildContext in Flutter?",
        options: ["A widget", "A handle to the location of a widget in the widget tree", "A state management tool", "A navigation method"],
        correctAnswer: 1,
        explanation: "BuildContext is a handle to the location of a widget in the widget tree."
      },
      {
        question: "What is the pubspec.yaml file in Flutter?",
        options: ["A configuration file", "A widget file", "A test file", "A build file"],
        correctAnswer: 0,
        explanation: "pubspec.yaml is the configuration file that contains metadata about the Flutter project and its dependencies."
      },
      {
        question: "What is setState() in Flutter?",
        options: ["A widget", "A method to update the UI when state changes", "A navigation method", "A testing function"],
        correctAnswer: 1,
        explanation: "setState() is used to notify the framework that the internal state has changed and the UI needs to be rebuilt."
      },
      {
        question: "What is a Scaffold in Flutter?",
        options: ["A testing tool", "A basic layout structure for a screen", "A navigation method", "A state management tool"],
        correctAnswer: 1,
        explanation: "Scaffold provides the basic layout structure for a screen, including app bar, body, and floating action button."
      },
      {
        question: "What is the main() function in Flutter?",
        options: ["A widget", "The entry point of a Flutter application", "A testing function", "A navigation method"],
        correctAnswer: 1,
        explanation: "The main() function is the entry point of every Flutter application."
      }
    ]
  },
  react: {
    questions: [
      {
        question: "What is JSX in React?",
        options: ["A JavaScript library", "A syntax extension for JavaScript", "A database", "A styling framework"],
        correctAnswer: 1,
        explanation: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in React components."
      },
      {
        question: "Which hook is used to manage state in functional components?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: 1,
        explanation: "useState is the primary hook for managing state in functional React components."
      },
      {
        question: "What is the purpose of useEffect hook?",
        options: ["To manage state", "To handle side effects", "To create components", "To style components"],
        correctAnswer: 1,
        explanation: "useEffect is used to handle side effects like API calls, subscriptions, and DOM manipulation."
      },
      {
        question: "How do you pass data from parent to child component?",
        options: ["Through state", "Through props", "Through context", "Through refs"],
        correctAnswer: 1,
        explanation: "Props are the primary way to pass data from parent components to child components."
      },
      {
        question: "What is the virtual DOM in React?",
        options: ["A real DOM element", "A JavaScript representation of the DOM", "A database", "A styling method"],
        correctAnswer: 1,
        explanation: "The virtual DOM is a JavaScript representation of the real DOM that React uses for efficient updates."
      },
      {
        question: "Which method is called when a component is first created?",
        options: ["componentDidUpdate", "componentWillUnmount", "componentDidMount", "render"],
        correctAnswer: 2,
        explanation: "componentDidMount is called after a component is mounted (inserted into the DOM tree)."
      },
      {
        question: "What is the correct way to update state in React?",
        options: ["this.state = newState", "this.setState(newState)", "state = newState", "updateState(newState)"],
        correctAnswer: 1,
        explanation: "setState() is the correct method to update state in class components."
      },
      {
        question: "What are React Fragments used for?",
        options: ["To style components", "To group elements without extra DOM nodes", "To manage state", "To handle events"],
        correctAnswer: 1,
        explanation: "React Fragments allow you to group multiple elements without adding extra DOM nodes."
      },
      {
        question: "What is prop drilling in React?",
        options: ["A debugging technique", "Passing props through multiple component layers", "A performance optimization", "A testing method"],
        correctAnswer: 1,
        explanation: "Prop drilling refers to passing props through multiple component layers to reach deeply nested components."
      },
      {
        question: "Which hook is used for performance optimization?",
        options: ["useState", "useEffect", "useMemo", "useContext"],
        correctAnswer: 2,
        explanation: "useMemo is used to memoize expensive calculations and optimize performance."
      }
    ]
  }
};