
    // ------------------- Variáveis
            var variavel;                // variável inicializada sem valor
            var nome    = "Daniel";      // variável inicializada como String
            var idade   = 45;            // variável inicializada como Inteiro
            var peso    = 115.3;         // variável inicializada como Float
            var humano  = true;          // variável inicializada como Boolean 

            var alunos = [ "Bernardo", "Luciana", "Daniel"];     // Vetor (Array)

            var aluno = {
                nome:alunos[2],
                idade:45,               // Objeto
                peso:115.3,
                humano:true,
            };
            
            
            
    // ------------------- Funções        
            // Função soma
            function soma(numero1, numero2){
                var resultado = numero1 + numero2;
                return resultado;
            }



            // Função multilica
            function multiplica(numero1,numero2){
                var resultado = numero1 * numero2;
                return resultado;
            }
    
    // --------------- CONDICIONAIS
    // IF, ELSE IF, ELSE

    function retornasexo(sexo){
        if (sexo === "M"){
            return "Masculino";
        }
        else if (sexo === "F") {
            return "Feminino";
        }
        else {
            return "Outro";
        }

    }

    // SWITCH, CASE

    function retornaSexo(sexo) {
        switch (sexo){
            case 'M' :
                return 'Masculino';
            case 'F':
                return 'Femino';
            default:
                return 'Outro';

        }
    }

    // ------ OPERADORES LÓGICOS
    // AND = &&
    // OR  = ||
    // NOT = != (valor) / !== (valor e tipo da variável)

    // Armazenando valor em uma variável

    var sexo = 'M';

    var masculino;

    if (sexo === 'M'){
        masculino = true;
    }   else {
        vmasculino = false;
    }
    

    // Verificação de operador simples.
    var sexo = 'MFhk';

    var masculino = sexo === 'M';

    console.log(masculino);