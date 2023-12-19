
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faHtml5, faCss3, faJs, faNodeJs, faReact, faJava, faPython, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faFlag, faMapMarker, faUserCircle } from '@fortawesome/free-solid-svg-icons';



function App() {
  return (
    <div className="App">
        <div className='opciones' style={{display:'flex',backgroundColor:'#272727',fontFamily:'sans-serif'}}>
        <a href='/' style={{textDecoration:'none',color:'#ffd562',marginLeft:'100px',border:'5px'}}>INICIO</a>
        <a href='/' style={{textDecoration:'none',color:'#ffd562'}}>SOBRE MÍ</a>
        <a href='/' style={{textDecoration:'none',color:'#ffd562'}}>HABILIDADES</a>
        <a href='/' style={{textDecoration:'none',color:'#ffd562'}}>FORMACIÓN</a>
        <a href='/' style={{textDecoration:'none',color:'#ffd562'}}>EXPERIENCIAS</a>
        <a href='/' style={{textDecoration:'none',color:'#ffd562'}}>CONTACTO</a>
        </div>
        
      <div className='cont-nombre' style={{margin:'0',height:'350px',backgroundColor:'#272727',flexDirection:'column',display:'flex',justifyContent:'center'}}> 
        <h1 style={{color:'#000000',display:'flex',fontFamily:'sans-serif',textShadow:'0 0 30px #ffd562', marginTop:'170px',justifyContent:'center'}}>PABLO DAMIÁN ALCARAZ</h1>
        <h3 style={{fontFamily:'sans-serif',color:'#9c9c9c',textAlign:'center',marginTop:'20px'}}>ESTUDIANTE DE PROGRAMACION</h3>
        <div className='redes' style={{fontSize: '2em', color: '#ffd562'}}>
          <a href='https://www.linkedin.com/in/pablo-alcaraz-822636186/'><FontAwesomeIcon  icon={faLinkedinIn} style={{width:'30px', height:'30px',border:' 2px solid black',borderRadius:'15%', backgroundColor:'#000000'}} /></a>
          <a href='http://github.com/fullprintserigrafia/proyectofinal_pabloalcaraz/blob/main/index.html'><FontAwesomeIcon icon={faGithub} style={{border:' 2px solid black',borderRadius:'100%', backgroundColor:'#000000'}} /></a>
          <a herf='https://www.instagram.com/pablodalcaraz/'><FontAwesomeIcon icon={faInstagram} style={{border:' 2px solid black',backgroundColor:'#000000',borderRadius:'40%'}} /></a>
        </div>
        
        <div className='cont-foto'> 
          <img className='Foto'
        src={require('./imagen/foto.png')}
        alt='foto de perfil'
        /></div>
        </div>
        
        <div className='cont-sobreMi' style={{margin:'0', height:'500px',backgroundColor:'#9c9c9c',
        display:'grid',placeContent:'center',placeItems:'center'}}>
          <h2 className='titulo-sobre-mi' style={{fontFamily:'sans-serif',marginBottom:'30px',marginTop:'40px'}}>Sobre Mí</h2>
          <p className='cont-presentacion' style={{fontFamily:'sans-serif',fontSize:'17px'}}><strong>Soy estudiante de programación, y tengo mucha experiencia en atención a clientes.</strong></p>
          <p className='cont-texto-presentacion' style={{fontFamily:'sans-serif',color:'#272727',marginBottom:'20px'}}>Me motiva el desafío de aprender, por lo que siempre estoy buscando nuevos desafíos.</p>
          
          <div className='cont-columnas' style={{ display:'flex', justifyContent:'center'}}>
          
          <div className='columna1'>
          <FontAwesomeIcon icon={faUserCircle} style={{fontSize: '2em', color: '#ffd562',
          display:'grid',placeItems:'center',marginLeft:'210px',marginRight:'210px'}} />
          <p style={{fontFamily:'sans-serif',marginTop:'15px',display:'grid',placeItems:'center',marginLeft:'180px',marginRight:'180px'}}>PERFIL</p>
          <p style={{textAlign:'center', fontSize:'15px',marginTop:'20px',maxWidth:'200px',marginLeft:'130px',fontFamily:'sans-serif',color:'#272727'}}>Me destaco en operaciones de caja, con altos volumenes de efectivo, cobros en terminales pos, cheques, depositos, atención a clientes, administración, formularios, habilidad para solucionar conflictos, </p>
          </div>

          <div className='columna2'>
          <FontAwesomeIcon icon={faMapMarker} style={{fontSize: '2em', color: '#ffd562',
          display:'grid',placeItems:'center',marginLeft:'210px',marginRight:'210px'}} />
          <p style={{fontFamily:'sans-serif',marginTop:'10px',display:'grid',placeItems:'center',marginLeft:'180px',marginRight:'180px'}}>UBICACIÓN</p>
          <p style={{marginTop:'20px',marginLeft:'70px',fontFamily:'sans-serif',color:'#272727',fontSize:'15px'}}>Tobar García 1237, <strong>San Luis Capital</strong>, CP 5700</p>
          </div>

          <div className='columna3'>
          <FontAwesomeIcon icon={faFlag} style={{fontSize: '2em', color: '#ffd562',
          display:'grid',placeItems:'center',marginLeft:'210px',marginRight:'210px'}} />
          <p style={{fontFamily:'sans-serif',marginTop:'10px',display:'grid',placeItems:'center',marginLeft:'180px',marginRight:'180px'}}>INTERESES</p>
          <p style={{textAlign:'center',marginTop:'20px',marginLeft:'125px',fontFamily:'sans-serif',color:'#272727',fontSize:'15px',maxWidth:'200px'}}>Lo que me interesa de un nuevo trabajo es tener posibilidades de incorporar conocimientos y lograr un pefil profesional competitivo. </p>
          </div>
          
          </div>
          </div>

        <div className='cont-habilidades' style={{margin:'0',height:'350px',backgroundColor:'#272727'}}>
          <h2 style={{fontFamily:'sans-serif',fontSize:'30px',color:'#000000',textAlign:'center'}}>Habilidades</h2>  
          <FontAwesomeIcon icon={faHtml5} style={{width:'100px',height:'100px', color:'#383838',marginLeft:'21px',marginRight:'21px'}} />
          <FontAwesomeIcon icon={faCss3} style={{width:'100px',height:'100px',color:'#383838',marginLeft:'21px',marginRight:'21px'}} />
          <FontAwesomeIcon icon={faJs} style={{width:'100px',height:'100px', color:'#383838',marginLeft:'21px',marginRight:'21px'}} />
          <FontAwesomeIcon icon={faNodeJs} style={{width:'100px',height:'100px',color:'#383838',marginLeft:'21px',marginRight:'21px'}} />
          <FontAwesomeIcon icon={faReact} style={{width:'100px',height:'100px',color:'#383838',marginLeft:'21px',marginRight:'21px'}} />
          <FontAwesomeIcon icon={faJava} style={{width:'100px',height:'100px',color:'#383838',marginLeft:'21px',marginRight:'21px'}} />
          <FontAwesomeIcon icon={faPython} style={{width:'100px',height:'100px',color:'#383838',marginLeft:'21px',marginRight:'21px'}} />
          <img className='cd' style={{width:'100px',height:'100px',marginLeft:'21px',marginRight:'21px'}} src={require('./imagen/corel.png')}
          alt='logo corel'/>
           <img className='ps' style={{width:'100px',height:'100px',marginLeft:'21px',marginRight:'21px',marginTop:'100px'}} src={require('./imagen/ps.png')}
          alt='logo photoshop'/>
          </div>

        <div className='cont-formacion' style={{placeItems:'center', fontFamily:'sans-serif', margin:'0',height:'800px',backgroundColor:'#9c9c9c',display:'grid',placeContent:'center'}}>
          <h2 style={{fontFamily:'sans-serif', fontSize:'30pz',color:'#000000',marginTop:'20px'}}>ESTUDIOS Y CURSOS</h2>
          <h3 style={{marginTop:'15px'}}>Tecnicatura en Desarro de Software</h3>
          <h4>Universidad de La Punta</h4>
          <p>Inicio: 2023 - En curso</p>
          <p>Pseudocódigo en Pseint, POO en Java</p>
          <h3>Manipulación de datos en Python</h3>
          <h4>Ticmas Academy</h4>
          <p>Inicio: 2022-2022</p>
          <p>Importar archivos de distintas extenciones para manipularlos utilizando la libreria Panda a través del lenguaje Python.</p>
          <h3>Primeros pasos en Front-End</h3>
          <h4>Ticmas Academy</h4>
          <p>Inicio: 2022-2022</p>
          <p>Primera página web utilizando HTML5, CSS3 y JavaScrip. Utilización de repositorios.</p>
          <h3>Argentina Programa</h3>
          <h4>Gobierno de la Nación</h4>
          <p>Inicio: 2021-2022</p>
          <p>Fundamentos de la programación, Gobstone, Ruby, JavaScrip, Java</p>

          <h2 style={{fontFamily:'sans-serif', fontSize:'30pz',color:'#000000',marginTop:'15px',}}>EXPERIENCIA LABORAL</h2>
          <img style={{height:'30px',width:'120px',color:'#0000',marginTop:'15px'}}  src={require('./imagen/heroes.png')} alt='logo heroes' />
          <h4>Tienda de prendas de vestir</h4>
          <p>Inicio: 2013-Actualidad</p>
          <p>Atención a clientes, pago a proveedores, control de stock, mantenimiento del negocio en general.</p>
          <img style={{height:'30px',width:'120px'}} src={require('./imagen/ribeiro.png')} alt='logo heroes' />
          <h4>Cajero, Operador de Créditos</h4>
          <p>Inicio: 2006-2013</p>
          <p>Atención a clientes, Cajero, cobros con todos los medios de pagos, operador de créditos, apertura de cuentas corrientes, análisis para el otorgamiento de créditos.</p>
          <img style={{height:'30px',width:'120px'}} src={require('./imagen/coto.png')} alt='logo heroes' />
          <h4>Cajero, Auxiliar de Cajas</h4>
          <p>Inicio: 2001-2003</p>
          <p>Atención a clientes, Cajero, auxiliar de cajas, manejo de fondo fijo, distribución y organización de dotación de personal del sector. </p>
          </div>
          <div className='cont-contacto' style={{margin:'0', height:'300px', backgroundColor:'#ffd562'}}>
          <h2 style={{placeItems:'center'}}>CONTACTO</h2> 
          </div> 
    </div>
  );
}

export default App;
