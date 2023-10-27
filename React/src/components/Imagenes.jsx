import Portada from "../img/Portada.jpg";
import Portada1 from "../img/Portada1.jpg";
import "./Imagenes.css";
function Imagenes() {
    return (
<div class="container">
  
  <div id="theCarousel" class="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#theCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#theCarousel" data-slide-to="1"></li>
      
    </ol>

    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src={Portada} alt=""/> 
         <div class="carousel-caption d-none d-md-block">
  </div>
      </div>
      
       <div class="item">
        <img src={Portada1} alt="" /> 
         <div class="carousel-caption d-none d-md-block">
  </div>
      </div>

    <a class="left carousel-control" href="#theCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    </a>
    <a class="right carousel-control" href="#theCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    </a>
  </div>
</div>
</div>
    )
}

export default Imagenes