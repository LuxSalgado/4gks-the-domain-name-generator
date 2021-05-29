//console.log("Hello World");
function domainGenerator () {
    let pronoun = ['the','our'];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon','puedes'];
    let exten = ['.com','.net','.us','.io']

    console.log("Con varios tipos de extensiones");
    for ( i=0 ; i < pronoun.length ; i++){ 
        for ( j=0 ; j < adj.length ; j++){
            for ( k=0 ; k < noun.length ; k++){
                for ( l=0 ; l < exten.length ; l++){ //Agrega varios tipos de extensiones
                    console.log(pronoun[i]+adj[j]+noun[k]+exten[l]);
                }
            }
        }
    }
    console.log("")
    console.log("Con domain hacks");
    for ( i=0 ; i < pronoun.length ; i++){  //Agrega "domain hacks" donde la extension forma parte del dominio
        for ( j=0 ; j < adj.length ; j++){
            for ( k=0 ; k < noun.length ; k++){
                let palabraInicio = noun[k].slice(0,-2); //Guardo los valores del string, menos los ultimos dos
                let extCreado = noun[k].slice(-2); //Guardo los ultimos dos valores del string 
                console.log(pronoun[i]+adj[j]+palabraInicio+"."+extCreado); //
            }
        }
    }
}

domainGenerator();
