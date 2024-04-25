import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/Produtorepository";



export class ProdutoController implements ProdutoRepository {



    private listaprodutos: Array<Produto> = new Array<Produto>();
    public id: number = 0;
    


    procurarPorId(id: number): void {
        let buscaproduto = this.buscarNoArray(id);

        if (buscaproduto !== null)
            buscaproduto.visualizar();
        else
            console.log("\nproduto nao foi encontrada!");
    }
    atualizar(produto: Produto): void {
        let buscaproduto = this.buscarNoArray(produto.id);

        if (buscaproduto !== null) {
            this.listaprodutos[this.listaprodutos.indexOf(buscaproduto)] = produto;
            console.log(`A produto id ${produto.id} foi atualizada com sucesso!`);
        } else
            console.log("\nproduto nao foi encontrada!");
    }

    listarTodas(): void {
        for (let produtos of this.listaprodutos)
            produtos.visualizar();
    }

    cadastrar(Produto: Produto): void {
        this.listaprodutos.push(Produto);
        console.log("O produto foi adicionado!");
      
    }

    deletar(id: number): void {
        let buscaproduto = this.buscarNoArray(id);

        if (buscaproduto !== null) {
            this.listaprodutos.splice(this.listaprodutos.indexOf(buscaproduto, 1))
            console.log(`A produto id ${id} foi excluida com sucesso!`);
        } else
            console.log("\nproduto nao foi encontrada!");
    }

    public gerarId(): number {
        return ++this.id
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaprodutos) {
            if (produto.id === id)
                return produto;

        }
        return null;

    }

}





