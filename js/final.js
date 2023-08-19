// Utiliti functions
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
  const element = document.getElementById(elementId);
  element.classList.add("-mt-5", "mb-1");
  element.innerHTML = `
    <p class="text-xl font-semibold">Area: <span id="area-total"></span> cm<sup>2</sup></p>
    `;
  document.getElementById("area-total").innerText = areaTotal;
}
function areaEntry(areaType, area) {
  const entryId = document.getElementById("area-entry");
  const div = document.createElement("div");
  const count = entryId.childElementCount;
  div.innerHTML = `
      <p class ="text-xl">${count}. ${areaType} ${area} cm<sup>2</sup></p>
      <button class="btn btn-sm btn-primary text-white text-xs"><p>convart to m<sup>2</sup></p>
  </button>
    `;
  div.classList.add("flex", "items-center", "gap-3", "justify-center");
  entryId.appendChild(div);
}

//Triangle part
document.getElementById("btn-triangle").addEventListener(`click`, function () {
  const base = getInputValue("base-fild");
  const height = getInputValue("height-fild");
  document.getElementById("triangle-area").style.display = "none";

  if (base === 0 || height === 0) {
    return;
  }
  document.getElementById("triangle-area").style.display = "block";
  const area = 0.5 * base * height;
  showArea("triangle-area", area);
  areaEntry("Triangle", area);
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
  areaEntry("Rectangle", area);
});

// Parallelogram part
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const base = getInputValue("pbase-fild");
    const height = getInputValue("pheight-fild");
    document.getElementById("parallelogram-area").style.display = "none";

    if (base === 0 || height === 0) {
      return;
    }
    document.getElementById("parallelogram-area").style.display = "block";
    const area = base * height;
    showArea("parallelogram-area", area);
    areaEntry("Parallelogram", area);
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
  areaEntry("Rhombus", area);
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
  areaEntry("Pentagon", areaFixed);
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
  areaEntry("Ellipse", areaFixed);
});
