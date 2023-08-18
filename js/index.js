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

    showArea("parallelogram-area", area);
  });
