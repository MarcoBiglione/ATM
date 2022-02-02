class Billete
{
  constructor(v, c)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenes[this.valor];
  }
}
function entregarDinero()
{
  var d = document.getElementById("dinero");
  dinero = parseInt(d.value);
  for(var bi of caja)
  {
    if (dinero > 0)
      {
        div = Math.floor(dinero/bi.valor);
        if(div > bi.cantidad)
          {
            papeles = bi.cantidad;
          }
        else
          {
            papeles = div;
          }
        for(var i = 0; i < papeles; i++)
          {
            resultado.innerHTML += "<img src=" + bi.imagen.src + " />";
          }
        dinero = dinero -(bi.valor * papeles);
        bi.cantidad = bi.cantidad - papeles;
      }

    }
  resultado.innerHTML += "<br />";
  if(dinero > 0)
    {
      alert ("lo siento no tengo dinero");
      resultado.innerHTML = "lo siento no tengo dinero";
    }
}

var caja = [];
var imagenes = [];
imagenes [50] = "50.png";
imagenes [20] = "20.png";
imagenes [10] = "10.png";
caja.push (new Billete(50, 3));
caja.push (new Billete(20, 2));
caja.push (new Billete(10, 2));
var dinero = 0;
var div = 0;
var papeles = 0;
var mostrar;
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
