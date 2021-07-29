import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Menu(props) {
  useEffect(() => {
    const inputField = document.querySelector(".chosen-value");
    const dropdown = document.querySelector(".value-list");
    const dropdownArray = [...document.querySelectorAll("li")];
    dropdown.classList.add("open");
    inputField.focus();
    let valueArray = [];
    dropdownArray.forEach((item) => {
      valueArray.push(item.textContent);
    });

    const closeDropdown = () => {
      dropdown.classList.remove("open");
    };

    inputField.addEventListener("input", () => {
      dropdown.classList.add("open");
      let inputValue = inputField.value.toLowerCase();
      if (inputValue.length > 0) {
        for (let j = 0; j < valueArray.length; j++) {
          if (
            !(
              inputValue.substring(0, inputValue.length) ===
              valueArray[j].substring(0, inputValue.length).toLowerCase()
            )
          ) {
            dropdownArray[j].classList.add("closed");
          } else {
            dropdownArray[j].classList.remove("closed");
          }
        }
      } else {
        for (let i = 0; i < dropdownArray.length; i++) {
          dropdownArray[i].classList.remove("closed");
        }
      }
    });

    dropdownArray.forEach((item) => {
      item.addEventListener("click", (evt) => {
        inputField.value = item.textContent;
        dropdownArray.forEach((dropdown) => {
          dropdown.classList.add("closed");
        });
      });
    });

    inputField.addEventListener("focus", () => {
      inputField.placeholder = "Scegli la materia";
      dropdown.classList.add("open");
      dropdownArray.forEach((dropdown) => {
        dropdown.classList.remove("closed");
      });
    });

    inputField.addEventListener("blur", () => {
      inputField.placeholder = "Scegli la materia";
      dropdown.classList.remove("open");
    });

    document.addEventListener("click", (evt) => {
      const isDropdown = dropdown.contains(evt.target);
      const isInput = inputField.contains(evt.target);
      if (!isDropdown && !isInput) {
        dropdown.classList.remove("open");
      }
    });
  }, []);
  const handleChange = (evt) => {
    props.setInputProp(evt.target.value);
  };
  return (
    <div className="Menu">
      <h1 id="menu-title">
        <span>Scegli</span> la <span>materia</span> su cui fare i quiz
      </h1>
      <form>
        <input
          className="chosen-value"
          type="text"
          placeholder="Scegli la materia"
          value={props.inputProp}
          onChange={handleChange}
        />
        <ul className="value-list">
          <li onClick={() => props.setInputProp("Metodi")}>Metodi</li>
          <li onClick={() => props.setInputProp("Chimica")}>Chimica</li>
          <li onClick={() => props.setInputProp("Fisica2")}>Fisica II</li>
          <li onClick={() => props.setInputProp("Analisi2")}>Analisi II</li>
          <li onClick={() => props.setInputProp("Fisiologia")}>Fisiologia</li>
          <li onClick={() => props.setInputProp("Elettronica")}>Elettronica</li>
        </ul>
        <Link className="formSubmit" to={"/".concat(props.inputProp)}>
          Vai al quiz
        </Link>
      </form>
    </div>
  );
}

export { Menu };
