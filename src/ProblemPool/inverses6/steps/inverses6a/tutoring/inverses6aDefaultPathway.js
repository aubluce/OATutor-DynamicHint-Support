var hints = [{id: "inverses6a-h1", type: "hint", dependencies: [], title: "Finding the Inverse", text: "Given a polynomial function, restrict the domain of a function that is not one-to-one and then find the inverse. \\n 1) Restrict the domain by determining a domain on which the original function is one-to-one. \\n 2) Replace f(x) with y. \\n 3) Interchange x and y. \\n 4) Solve for y, and rename the function or pair of function $$f^{-\\left(1\\right)} x$$. \\n 5) Revise the formula for $$f^{-\\left(1\\right)} x$$ by ensuring that the outputs of the inverse function correspond to the restricted domain of the original function.", variabilization: {}}, {id: "inverses6a-h2", type: "hint", dependencies: ["inverses6a-h1"], title: "Domain", text: "The domain are the values of x for which f(x) is one-to-one.", variabilization: {}}, {id: "inverses6a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3/2"], dependencies: ["inverses6a-h2"], title: "Domain", text: "The domain is the values of x for which f(x) is one-to-one. This occurs at the range of f(x) where the output is real. This occurs when the expression within the radical is greater than or equal to zero. What is the minimum value of x?", variabilization: {}}, {id: "inverses6a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$y=\\sqrt{\\left(2\\right) x+\\left(3\\right)}$$"], dependencies: ["inverses6a-h3"], title: "Replace f(x) with y", text: "What does the equation look like after replacing f(x) with y?", choices: ["$$y=\\sqrt{\\left(2\\right) x+\\left(3\\right)}$$", "$$f(x)=\\sqrt{\\left(2\\right) x+\\left(3\\right)}$$", "$$x=\\sqrt{\\left(2\\right) y+\\left(3\\right)}$$"], variabilization: {}}, {id: "inverses6a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x=\\sqrt{\\left(2\\right) y+\\left(3\\right)}$$"], dependencies: ["inverses6a-h4"], title: "Interchange x and y", text: "What does the equation look like after interchanging x and y.", choices: ["$$y=\\sqrt{\\left(2\\right) x+\\left(3\\right)}$$", "$$f(x)=\\sqrt{\\left(2\\right) x+\\left(3\\right)}$$", "$$x=\\sqrt{\\left(2\\right) y+\\left(3\\right)}$$"], variabilization: {}}, {id: "inverses6a-h6", type: "hint", dependencies: ["inverses6a-h5"], title: "Solve for y", text: "Make y the subject.", variabilization: {}}, {id: "inverses6a-h7", type: "hint", dependencies: ["inverses6a-h6"], title: "Solve for y", text: "Square each side.", variabilization: {}}, {id: "inverses6a-h8", type: "hint", dependencies: ["inverses6a-h7"], title: "Solve for y", text: "Subtract 3 from both sides.", variabilization: {}}, {id: "inverses6a-h9", type: "hint", dependencies: ["inverses6a-h8"], title: "Solve for y", text: "Divide by 2 to make y the subject.", variabilization: {}}, {id: "inverses6a-h10", type: "hint", dependencies: ["inverses6a-h9"], title: "Rename the function $$f^{-\\left(1\\right)} x$$", text: "", variabilization: {}}, ]; export {hints};