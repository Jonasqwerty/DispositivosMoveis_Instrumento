export class Instrumento {
    public id : string;
    public tipo : string;
    public cor : string;
    public datafabricacao : string;
    
    constructor(obj?: Partial<Instrumento>) {
        if (obj) {
            this.id = obj.id
            this.tipo = obj.tipo
            this.cor = obj.cor
            this.datafabricacao = obj.datafabricacao
         }
    }

    toFirestore() {
        const instrumento =  {
                    id : this.id,
                    tipo : this.tipo,
                    cor : this.cor,
                    datafabricacao : this.datafabricacao,
         }
         return instrumento
    }

   
    toString() {
        const Objeto = `{
            "id": "${this.id}",
            "tipo": "${this.tipo}",
            "cor": "${this.cor}",
            "datafabricacao": "${this.datafabricacao}"
        }`
        return Objeto
    }
};