import React, { useState, useEffect, useRef } from "react";

export const RGBSlider = () => {
  // Объявим состояния для цветовых значений
  const [red, setRed] = useState(0),
    [green, setGreen] = useState(0),
    [blue, setBlue] = useState(0);

  // Объявим состояния для выбора цели изменения цвета
  const [colorTarget, setColorTarget] = useState("color");

  // adjust() приводит конвертированные в hex числа к двум знакам, если это необходимо
  const adjust = (n) => (n.length < 2 ? `0${n}` : n),
    // Приводим строки из значений слайдеров к числам и преобразуем в hex, приводим hex к двум знакам
    hexRed = adjust(parseInt(red, 10).toString(16)),
    hexGreen = adjust(parseInt(green, 10).toString(16)),
    hexBlue = adjust(parseInt(blue, 10).toString(16)),
    // "Собираем" hex в строку, передаём её ниже для отображения hex-кода
    hexValue = `#${hexRed}${hexGreen}${hexBlue}`;

  // Используем useEffect(), чтобы обращаться к элементам DOM только после рендера компонента
  useEffect(() => {
    colorTarget === "color"
      ? document
          .querySelector(".text-field")
          .setAttribute("style", `color: ${hexValue}`)
      : document
          .querySelector(".text-field")
          .setAttribute("style", `background: ${hexValue}`);
  });

  // Немного сократим boilerplate в inpit
  const properties = {
    className: "slider",
    type: "range",
    min: "0",
    max: "255",
    step: "1",
  };

  return (
    <div className="color-picker-app">
      <fieldset className="radio-toolbar">
        <legend className="radio-toolbar__legend">Select</legend>
        <input
          type="radio"
          id="color"
          name="colorToggle"
          value="color"
          onChange={(event) => setColorTarget(event.target.value)}
          defaultChecked
        />
        <label className="toggle-button__label" htmlFor="color">
          Color
        </label>

        <input
          type="radio"
          id="background"
          name="colorToggle"
          value="background"
          onChange={(event) => setColorTarget(event.target.value)}
        />
        <label className="toggle-button__label" htmlFor="background">
          Background
        </label>

        <output className="hex" id="hex">
          {hexValue}
        </output>
      </fieldset>
      <div className="text-and-toggles">
        <div className="color-picker">
          <div className="input-group">
            <label className="label-color" htmlFor="red">
              R
            </label>
            <input
              {...properties}
              id="red"
              value={red}
              onChange={(event) => {
                setRed(event.target.value);
              }}
            />
            <output className="label_color-value" htmlFor="red" id="r_out">
              {red}
            </output>
          </div>

          <div className="input-group">
            <label className="label-color" htmlFor="green">
              G
            </label>
            <input
              {...properties}
              id="green"
              value={green}
              onChange={(event) => setGreen(event.target.value)}
            />
            <output
              className="label_color-value"
              htmlFor="green"
              id="green_out"
            >
              {green}
            </output>
          </div>

          <div className="input-group">
            <label className="label-color" htmlFor="blue">
              B
            </label>
            <input
              {...properties}
              id="blue"
              value={blue}
              onChange={(event) => setBlue(event.target.value)}
            />
            <output className="label_color-value" htmlFor="blue" id="blue_out">
              {blue}
            </output>
          </div>
        </div>
        <div className="text-field">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </div>
      </div>
    </div>
  );
};
