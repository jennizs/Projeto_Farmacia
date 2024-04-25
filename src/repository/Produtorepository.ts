import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    procurarPorId (id: number): void;
    listarTodas(): void;
    cadastrar(Produto: Produto ): void;
    atualizar(Produto: Produto): void;
    deletar(id:number): void;
    
   
}