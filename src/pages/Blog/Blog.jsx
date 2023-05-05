/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { createRef } from 'react';
import './Blog.css'
import Pdf from "react-to-pdf";
const ref = createRef();
const Blog = () => {
    // Options for Mobile and Desktop documents download
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [10, 13]
    };
    const options2 = {
        orientation: 'portrait',
        unit: 'in',
        format: [20, 6]
    };
    return (
        <>
        {/* Download Button */}
            <div className='mt-4 mx-3 my-5 md:mx-56 flex justify-center'>
                <div className='hidden md:block'>
                    <Pdf targetRef={ref} filename="blogs.pdf" options={options} x={1} y={1} scale={1}>
                        {({ toPdf }) => <button onClick={toPdf} className='bg-amber-500 py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white'>Download PDF</button>}
                    </Pdf>
                </div>
                <div className='block md:hidden'>
                    <Pdf targetRef={ref} filename="blogs.pdf" options={options2} x={1} y={1} scale={1}>
                        {({ toPdf }) => <button onClick={toPdf} className='bg-amber-500 py-1 px-2 mx-1 rounded hover:bg-gray-500 font-semibold md:my-0 text-white '>Create Document</button>}
                    </Pdf>
                </div>
            </div>
            {/* Blog of Question and Answer */}
            <div className='extrablog-parent mt-4 mx-3 my-5 md:mx-56' ref={ref}>
                <h1 className='qa-title'>Question and Answers</h1>
                <div className='extrablog-container'>
                    <div className='extrablog'>
                        <h4>Question: Differences between uncontrolled and controlled components?</h4>
                        <p><b>Answer:</b> Controlled components rely on external input, while uncontrolled components manage their own state. Controlled components are managed by their props, and any changes to the state are passed down to the component via its props. Uncontrolled components are generally simpler to use, but controlled components provide more control and flexibility over how state is managed and updated within a React application.</p>
                    </div>
                    <div className='extrablog'>
                        <h4>Question: How to validate React props using PropTypes?</h4>
                        <p><b>Answer: </b>PropTypes is a built-in validation feature in React that allows you to define the expected type and shape of props that are passed to a component. To use PropTypes, you import it from the 'prop-types' package and then define the PropTypes for each prop that the component expects. If a prop of the incorrect type is passed to the component, a warning will be displayed in the console, making it easier to debug and ensure that the correct props are being used.</p>
                    </div>
                    <div className='extrablog'>
                        <h4>Question: Difference between nodejs and express.js?</h4>
                        <p><b>Answer: </b>Node.js is a runtime environment that allows JavaScript code to run outside of a web browser. It provides core functionality such as file system access, network communication, and event handling. Express.js is a web application framework built on top of Node.js that provides additional features for building web applications, such as routing, middleware, and template rendering. In short, Node.js is a runtime environment, while Express.js is a web application framework built on top of Node.js.</p>
                    </div>
                    <div className='extrablog'>
                        <h4>Question: What is a custom hook, and why will you create a custom hook?</h4>
                        <p><b>Answer: </b>A custom hook is a JavaScript function in React that allows you to reuse stateful logic across multiple components. It is a way to abstract away complex logic into a reusable function, making code more concise and easier to read. You might create a custom hook to share functionality between multiple components, or to encapsulate complex logic in a reusable manner, improving the maintainability of your code.</p>
                    </div>
                </div>
            </div></>
    );
};

export default Blog;