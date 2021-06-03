var hints = [{id: "geo3a-h1", type: "hint", dependencies: [], title: "Draw", text: "Draw and label the sides of the triangle with the given information", variabilization: {}}, {id: "geo3a-h2", type: "hint", dependencies: ["geo3a-h1"], title: "Identify and Name", text: "We are looking for the height of the triangle and we can name it \"h\"", variabilization: {}}, {id: "geo3a-h3", type: "hint", dependencies: ["geo3a-h2"], title: "Translate", text: "Using the formula $$a=\\left(0.5\\right) b h$$, we can substitute it to get $$90=\\left(0.5\\right) \\left(15\\right) h$$", variabilization: {}}, {id: "geo3a-h4", type: "hint", dependencies: ["geo3a-h3"], title: "Solve", text: "Solve the equation by simplifying it first to get $$90=\\left(15\\right) \\left(0.5\\right) h$$, and then solving for h by isolating the variable", variabilization: {}}, {id: "geo3a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7.5"], dependencies: ["geo3a-h4"], title: "Solve", text: "First let's simplify the right side of the equation. What is $$\\left(15\\right) \\left(0.5\\right)$$?", variabilization: {}}, {id: "geo3a-h6", type: "hint", dependencies: ["geo3a-h5"], title: "Solve", text: "Now, we can divide 7.5 by both sides to isolate h", variabilization: {}}, ]; export {hints};