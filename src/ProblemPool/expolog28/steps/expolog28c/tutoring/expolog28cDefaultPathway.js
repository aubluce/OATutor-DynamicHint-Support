var hints = [{id: "expolog28c-h1", type: "hint", dependencies: [], title: "Solving for t", text: "Substitute $$T(t)=110$$ to solve for t.", variabilization: {}}, {id: "expolog28c-h2", type: "hint", dependencies: ["expolog28c-h1"], title: "Solving for t", text: "Subtract 75 from both sides.", variabilization: {}}, {id: "expolog28c-h3", type: "hint", dependencies: ["expolog28c-h2"], title: "Solving for t", text: "Divide by 90 from both sides.", variabilization: {}}, {id: "expolog28c-h4", type: "hint", dependencies: ["expolog28c-h3"], title: "Solving for t", text: "Take natural log on both sides.", variabilization: {}}, {id: "expolog28c-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["113"], dependencies: ["expolog28c-h4"], title: "Solving for t", text: "Divide by continuous rate of cooling, $$k=-0.008377$$. What is t? Round to the nearest minute.", variabilization: {}}, ]; export {hints};