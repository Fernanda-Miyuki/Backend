class Aluno {
    nome: string;
    nota: number;

    constructor(nome: string, nota:number) {
        this.nome= nome;
        this.nota= nota
    }
    avaliar(){
        if(this.nota > 6){
            console.log(this.nome + "Passou! :)" )
        } else {
            console.log(this.nome + "Te vejo ano que vem!")
        }
        
    }
}

const aluno1 = new Aluno("Daniel Lucas", 10)
aluno1.avaliar()
const aluno2 = new Aluno("Fernanda", 9)
aluno2.avaliar()