var hints = [{id: "inverse19a-h1", type: "hint", dependencies: [], title: "Finding g(f(x))", text: "The first step is to find g(f(x)).", variabilization: {}}, {id: "inverse19a-h2", type: "hint", dependencies: ["inverse19a-h1"], title: "Calculating g(f(x))", text: "$$g(f(x))=sqrt(3,{\\left(x-\\left(1\\right)\\right)}^3)$$", variabilization: {}}, {id: "inverse19a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["inverse19a-h2"], title: "Verifying the Value of g(f(x))", text: "Does $$g(f(x))=x$$?", choices: ["Yes", "No"], variabilization: {}}, {id: "inverse19a-h4", type: "hint", dependencies: ["inverse19a-h3"], title: "Interpreting the Meaning of g(f(x))", text: "If $$g(f(x))=x$$, then $$g(x)=f^{-0.} x$$ and $$f(x)=g^{-0.} x$$. If g(f(x)) is not equal to x, then these statements are false.", variabilization: {}}, ]; export {hints};