import { useState } from 'react';
import '../styles/Autocomplete.css'

function Autocomplete({suggestions, setDirectorName}){
    const [activeSuggestion,setActiveSuggestion] = useState(0);
    const [filteredSuggestions,setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [userInput,setUserInput] = useState("");

    function onChange(e){
        const userInput = e.currentTarget.value;

        const filteredSuggestions = suggestions.filter(
            suggestion => 
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setActiveSuggestion(0);
        setFilteredSuggestions(filteredSuggestions);
        setShowSuggestions(true);
        setUserInput(e.currentTarget.value);
        setDirectorName(e.currentTarget.value);  
    }

    function onClick(e) {
        setActiveSuggestion(0);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
        setUserInput(e.currentTarget.innerText);
    }

    function onKeyDown(e){
        console.log(e.keyCode);
        if (e.keyCode === 13) {
            setActiveSuggestion(0);
            setShowSuggestions(false);
            setUserInput(filteredSuggestions[activeSuggestion]);
            setDirectorName(filteredSuggestions[activeSuggestion]);  
        }
        else if (e.keyCode === 38){
            if (activeSuggestion === 0){
                return;
            }
            setActiveSuggestion(activeSuggestion-1);
        }
        else if (e.keyCode === 40){
            if (activeSuggestion-1 === filteredSuggestions.length){
                return;
            }
            setActiveSuggestion(activeSuggestion+1);
        }
    }

    let suggestionsListComponent;
    
    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
          suggestionsListComponent = (
            <ul class="suggestions">
              {filteredSuggestions.map((suggestion, index) => {
                let className;

                if (index === activeSuggestion) {
                  className = "suggestion-active";
                }
                return (
                  <li className={className} key={suggestion} onClick={onClick}>
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          );
        } else {
          suggestionsListComponent = (
            <div class="no-suggestions">
              <em>No suggestions available.</em>
            </div>
          );
        }
    }

    return (
        <>
          <input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          {suggestionsListComponent}
        </>
    )  
}

export default Autocomplete;