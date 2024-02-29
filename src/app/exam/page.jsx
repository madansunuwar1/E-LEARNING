import React from 'react'

const questions = [
    {
      id: 1,
      question: "What does MVC stand for in the context of web development?",
      options: [
        { id: 0, option: "Model View Controller", is_correct: true },
        { id: 1, option: "Modern View Control", is_correct: false },
        { id: 2, option: "Multi View Configuration", is_correct: false },
        { id: 3, option: "Main Visual Component", is_correct: false },
      ],
    },
    {
      id: 2,
      question: "Which programming language is commonly used for server-side scripting in a Node.js environment?",
      options: [
        { id: 0, option: "Java", is_correct: false },
        { id: 1, option: "Python", is_correct: false },
        { id: 2, option: "JavaScript", is_correct: true },
        { id: 3, option: "Ruby", is_correct: false },
      ],
    },
    {
      id: 3,
      question: "What does API stand for in the context of web development?",
      options: [
        { id: 0, option: "Advanced Programming Interface", is_correct: false },
        { id: 1, option: "Application Programming Interface", is_correct: true },
        { id: 2, option: "Automated Program Integration", is_correct: false },
        { id: 3, option: "Application Process Interface", is_correct: false },
      ],
    },
    {
      id: 4,
      question: "Which database type is known for its schema-less design?",
      options: [
        { id: 0, option: "Relational Database", is_correct: false },
        { id: 1, option: "NoSQL Database", is_correct: true },
        { id: 2, option: "Object-Oriented Database", is_correct: false },
        { id: 3, option: "Hierarchical Database", is_correct: false },
      ],
    },
    {
      id: 5,
      question: "In the context of version control, what does 'commit' refer to?",
      options: [
        { id: 0, option: "Pushing changes to the remote repository", is_correct: false },
        { id: 1, option: "Creating a new branch", is_correct: false },
        { id: 2, option: "Saving changes to the local repository", is_correct: true },
        { id: 3, option: "Reverting to a previous state", is_correct: false },
      ],
    },
    {
      id: 6,
      question: "Which frontend framework is often used for building single-page applications?",
      options: [
        { id: 0, option: "Angular", is_correct: true },
        { id: 1, option: "React", is_correct: false },
        { id: 2, option: "Vue.js", is_correct: false },
        { id: 3, option: "Bootstrap", is_correct: false },
      ],
    },
    {
      id: 7,
      question: "What is the purpose of the 'npm' command in Node.js development?",
      options: [
        { id: 0, option: "Node Package Manager", is_correct: true },
        { id: 1, option: "New Project Module", is_correct: false },
        { id: 2, option: "Node Project Manager", is_correct: false },
        { id: 3, option: "NPM Package Manager", is_correct: false },
      ],
    },
    {
      id: 8,
      question: "What does the acronym 'REST' stand for in the context of APIs?",
      options: [
        { id: 0, option: "Remote Execution of Services and Tasks", is_correct: false },
        { id: 1, option: "Representational State Transfer", is_correct: true },
        { id: 2, option: "Responsive and Efficient Service Technologies", is_correct: false },
        { id: 3, option: "Resourceful Endpoint Service Transfer", is_correct: false },
      ],
    },
    {
      id: 9,
      question: "Which HTTP method is typically used for updating existing resources on the server?",
      options: [
        { id: 0, option: "POST", is_correct: false },
        { id: 1, option: "PUT", is_correct: true },
        { id: 2, option: "GET", is_correct: false },
        { id: 3, option: "DELETE", is_correct: false },
      ],
    },
    {
      id: 10,
      question: "What is the purpose of the 'webpack' tool in a frontend development workflow?",
      options: [
        { id: 0, option: "Database management", is_correct: false },
        { id: 1, option: "Code linting", is_correct: false },
        { id: 2, option: "Module bundling and asset compilation", is_correct: true },
        { id: 3, option: "Server-side scripting", is_correct: false },
      ],
    },
  ];

function page() {
    // const [questions, setQuestions] = useState([]);
  return (
    <>
        <div className="h-auto min-h-[100vh] mb-6 sm:px-8 md:px-12 lg:px-20 xl:px-48 border-b-2 pb-8">
            <h1 className="text-center text-[50px] lg:text-[67px] font-Oswald font-bold mt-4 text-white px-12">Test your <span className="text-green-600">Knowledge</span></h1>
            {questions.map(question => (
                <div className="container">
                    <div className="my-16" key={question.id}>
                        <p className="text-[18px] md:text-[24px] font-Oswald px-4 py-3 text-green-600 border-b-2">{question.id}) {question.question}</p>
                        <ul className="text-[14px] md:text-[20px] font-serif p-4 grid grid-cols-2 grid-rows-2">
                            {question.options.map((option) => (
                                <li className="mt-2 flex text-green-400 font-Oswald" key={option.id}>
                                    <label>
                                        <input
                                            style={{transform: 'scale(0.8)'}}
                                            className="mr-3 item-center"
                                            type="radio"
                                            value={option.id}
                                            // checked={userAnswers[question.id] === option.id}
                                            // onChange={() => handleAnswerChange(question.id, option.id)}
                                        />
                                    </label>
                                    <label>
                                        {option.option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            <div className="flex justify-center">
                <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                    className="border-2 shadow-md shadow-slate-500 text-green-500 font-DM px-5 py-2 my-auto">Submit
                </button>
            </div>
    </div>
    </>
  )
}

export default page