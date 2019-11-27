//vehicleClasses.js


class Vehiculo {
 constructor(matricula, modelo){
  this.matricula = matricula;
  this.modelo = modelo;
 }
 
 getMatricula(){return this.matriula;}
 getModelo(){return this.modelo;}
}

class Taxi {
  constructor(matricula, modelo, licencia){
    super(matricula, modelo);
    this.licencia = licencia;
  }
  
  getLicencia(){return this.licencia;}
  setLicencia(licencia){this.licencia = licencia}
}

class ClaseCinco {

}
