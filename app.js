


let plantasSinFlorAromatica = ['Helecho', 'Potus', 'Cactus', 'Tuna']

let floresAromaticas = ['Jazmin', 'Rosa', 'Gardenia', 'Margarita', 'Clavel', "Girasol"]

//spread operator
let plantas = [...plantasSinFlorAromatica, ...floresAromaticas];

console.log(plantas);

//destructuring y rest parameter 
let [aromatica1, aromatica2, ...otras] = floresAromaticas;

console.log(aromatica1);
console.log(aromatica2);

console.log(otras);

//metodos de arrays 2 
// hacer una copia del array que agregue un emoji de girasol a cada flor aromatica 
//MAP

console.log(floresAromaticas.map((florAromatica)=> florAromatica + " 🌻"));

//filtrar de mi array de plantas aquellas cuyo nombre tenga mas de 5 letras 

console.log(plantas.filter((planta)=>planta.length>5));

//Filter map 
//agregar emoji de planta a las plantas que tengan un nombre con mas de 5 letras
console.log(
    plantas.filter((planta)=>planta.length>5)
            .map((plantaConNombreLargo)=>plantaConNombreLargo + " 🌴")
);


//Sigla que contenga todas las iniciales de mis flores aromaticas 
//string 

console.log(
    floresAromaticas.reduce((sigla, florAromatica)=>sigla+florAromatica[0], 'Mi sigla de flores aromaticas es: ')
)

//suma de las longitudes de las flores aromaticas con mas de 5 letras 
//filter reduce 
console.log(
    floresAromaticas.filter((florAromatica)=>florAromatica.length>5)
                    .reduce((sumaLongitudes, florAromaticaNombreLargo)=>sumaLongitudes + florAromaticaNombreLargo.length, 0) 
)

//de todas mis plantas , recperar la primera que empiece con G 
//FIND 

console.log(plantas.find((planta)=>planta[0]=='G'));

//de todas mis plantas , recperar la ultima que empiece con G 
//FIND REVERSE 
console.log(plantas.reverse()
                    .find((planta)=>planta[0]=='G'));











