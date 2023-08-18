// Utiliti functions
/* 
function getInputValue(fildId) {
    const inputFild = document.getElementById(fildId);
    const inputFildValue = inputFild.value;
    inputFild.value = "";
    if (!inputFildValue) {
      alert("Invalid input!");
      return 0;
    }
    //   const inputFildFixed = inputFildValue.toFixed(3);
    const inputFildFloat = parseFloat(inputFildValue);
    return inputFildFloat.toFixed(3);
  }
 */
function getInputValue(fildId) {
  const inputFild = document.getElementById(fildId);
  const inputFildValue = parseFloat(inputFild.value);
  inputFild.value = "";
  if (!inputFildValue) {
    alert("Invalid input!");
    return 0;
  }
  return inputFildValue;
}

function showArea(elementId, areaTotal) {
  //   document.getElementById(elementId).innerText = areaText;
  const element = document.getElementById(elementId);
  element.classList.add("-mt-5", "mb-1");
  element.innerHTML = `
  <p class="text-xl font-semibold">Area: <span id="areaTotal"></span> cm<sup>2</sup></p>
  `;
  //   const areaTotalFixed = areaTotal.toFixed(3);
  document.getElementById("areaTotal").innerText = areaTotal;
}

//Triangle part
document.getElementById("btn-triangle").addEventListener(`click`, function () {
  const base = getInputValue("base-fild");
  const height = getInputValue("height-fild");
  //   document.getElementById("base-fild").value = "";
  //   document.getElementById("height-fild").value = "";
  document.getElementById("area1").style.display = "none";

  if (base === 0 || height === 0) {
    return;
  }
  document.getElementById("area1").style.display = "block";
  const area = 0.5 * base * height;

  //   console.log(area);
  const areaTotal = area;
  showArea("area1", areaTotal);
});

// Rectangle part
document.getElementById("btn-rectangle").addEventListener(`click`, function () {
  const width = getInputValue("width-fild");
  const length = getInputValue("length-fild");
  document.getElementById("rectangle-area").style.display = "none";
  if (width === 0 || length === 0) {
    return;
  }
  document.getElementById("rectangle-area").style.display = "block";
  const area = width * length;

  showArea("rectangle-area", area);
});

// Parallelogram part
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const base = getInputValue("pbase-fild");
    const height = getInputValue("pheight-fild");
    // console.log(base);
    // console.log(height);
    document.getElementById("parallelogram-area").style.display = "none";

    if (base === 0 || height === 0) {
      return;
    }
    document.getElementById("parallelogram-area").style.display = "block";
    const area = base * height;
    // console.log(area);

    showArea("parallelogram-area", area);
  });

//   Rhombus part
document.getElementById("btn-rhombus").addEventListener(`click`, function () {
  const d1 = getInputValue("d1-fild");
  const d2 = getInputValue("d2-fild");

  document.getElementById("rhombus-area").style.display = "none";

  if (d1 === 0 || d2 === 0) {
    return;
  }
  document.getElementById("rhombus-area").style.display = "block";
  const area = (d1 * d2) / 2;
  showArea("rhombus-area", area);
});
//   Pentagon part
document.getElementById("btn-pentagon").addEventListener(`click`, function () {
  const length = getInputValue("pentagon-fild");
  const pi = Math.PI;
  const tan = Math.tan(pi / 5);

  document.getElementById("pentagon-area").style.display = "none";

  if (length === 0) {
    return;
  }
  document.getElementById("pentagon-area").style.display = "block";
  const area = (5 / 4) * Math.pow(length, 2) * (1 / tan);
  const areaFixed = area.toFixed(2);
  showArea("pentagon-area", areaFixed);
});
//   Ellipse part
document.getElementById("btn-ellipse").addEventListener(`click`, function () {
  const a = getInputValue("ellipse-a");
  const b = getInputValue("ellipse-b");
  const pi = Math.PI;

  document.getElementById("ellipse-area").style.display = "none";

  if (a === 0 || b === 0) {
    return;
  }
  document.getElementById("ellipse-area").style.display = "block";
  const area = pi * a * b;
  const areaFixed = area.toFixed(3);
  showArea("ellipse-area", areaFixed);
});
