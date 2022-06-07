const textareaFrom = document.getElementById("textareaFrom");
const textareaTo = document.getElementById("textareaTo");
const btnTranslate = document.getElementById("btnTranslate");
const selects = document.querySelectorAll("select");

const countries = {
    
    "en-GB": "Inglês",
    "pt-BR": "Português",
    
  }

  selects.forEach(function(tag){
    for (let country in countries){
        let selected
        if (tag.className.includes('selectFrom') && count == 'pt-BR'){
            selected = 'selected'
        } else if (tag.className.includes('selectTo') && country == 'en-GB'){
            selected = 'selected'
        }
        
        const option = `<option value="${country}" ${selected}>${countries[country]}</option>` 
        tag.insertAdjacentHTML("beforeend", option)
    }
    

  })

btnTranslate.addEventListener("click", function() {
if (textareaFrom.value) {
    loadTranslation()
} else {
    textareaTo.value = ""
}
})

function loadTranslation() {
fetch(
    `https://api.mymemory.translated.net/get?q=${textareaFrom.value}&langpair=${selects[0].value}|${selects[1].value}`
)
    .then((res) => res.json())
    .then((data) => {
    textareaTo.value = data.responseData.translatedText;
    });
}