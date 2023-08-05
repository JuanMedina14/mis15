
 // JS DE CUENTA REGRESIVA ::::::::::::::::::::::::::::::::::::::::::::::::::::::

const days = document.getElementById("days"),
      hours = document.getElementById("hours"),
      min = document.getElementById("min"),
      sec = document.getElementById("sec");

      const navidad = new Date("December 25, 2023 00:00:00") .getTime();

    setInterval(()=> {
        
      let hoy = new Date().getTime()

      let tiempoRest = navidad - hoy;

      //conversionde milisegundos a dias horas min seg

      let 
        dias = Math.floor(tiempoRest/68400000),
        horas = Math.floor(tiempoRest/3600000) % 24,
        minutos = Math.floor(tiempoRest/60000) % 60,
        segundos = Math.floor(tiempoRest/1000) % 60;

        
      // mostrar en pantalla los resultados

      days.innerHTML = dias;
      hours.innerHTML = horas;
      min.innerHTML = minutos;
      sec.innerHTML = segundos;

      //Acomodar los segundos en dos cifras 

      if (horas <10) hours.innerHTML ="0" + horas;
      if (minutos <10) min.innerHTML ="0" + horas;
      if (segundos <10) sec.innerHTML ="0" + segundos;


    }, 1000);



    // JS DEL SLIDER ::::::::::::::::::::::::::::::::::::::::::::::::::::::

    
    const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
  moveToRight()
}, 3000);


let operacion = 0,
  counter = 0,
  widthImg = 100 / sliderSection.length;

function moveToRight() {
  if (counter >= sliderSection.length-1) {
      counter = 0;
      operacion = 0;
      slider.style.transform = `translate(-${operacion}%)`;
      slider.style.transition = "none";
      return;
  } 
  counter++;
  operacion = operacion + widthImg;
  slider.style.transform = `translate(-${operacion}%)`;
  slider.style.transition = "all ease .6s"
  
}  

function moveToLeft() {
  counter--;
  if (counter < 0 ) {
      counter = sliderSection.length-1;
      operacion = widthImg * (sliderSection.length-1)
      slider.style.transform = `translate(-${operacion}%)`;
      slider.style.transition = "none";
      return;
  } 
  operacion = operacion - widthImg;
  slider.style.transform = `translate(-${operacion}%)`;
  slider.style.transition = "all ease .6s"
  
  
}   