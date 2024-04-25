import { Produto } from "./Produto";
export class Cosmetico extends Produto {

    private _fragrancia: string


	constructor(id: number, nome: string, tipo: number, preco: number, fragrancia: string) {
        super(id, nome, tipo, preco)
        this._fragrancia = fragrancia;

	}

     /**
     * Getter frafrancia
     * @return {string}
     */
	 public get fragrancia(): string {
		return this._fragrancia;
	}

	
    /**
     * Setter fragrancia
     * @param {string} value
     */
	public set fragrancia(value: string) {
		this._fragrancia = value;
	}
    public visualizar(): void {
		super.visualizar();
		console.log(`Fragrancia:   ${this._fragrancia}`);
	
}
}