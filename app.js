const btnAsk = document.querySelector('button.ask');
const divAnswer = document.querySelector('div.answer');

const omens = ["Zorzę widzi tylko ten, kto oglądał również mrok", "Oko nie jest miarą, ale wie, co jest małe", "Pozory mylą, odrzuć utarte opinie", "Ogień stłumiony popiołem wydaje się tylko ugaszony", "Szerokość rzeki nie jest jej głębokością", "Nawet jeśli byś chciał, nie możesz wziąć jedną ręką dwóch pstrągów"];

const omensGenerator = () => {
 const indexOmen = Math.floor(Math.random() * omens.length);
 divAnswer.textContent = `Wróżka Alberta przewiduje, że: ${omens[indexOmen]}`
}

btnAsk.addEventListener('click', omensGenerator)