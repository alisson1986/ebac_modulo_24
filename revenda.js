function Automovel (fabricante, modelo, categoria, preco) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.categoria = categoria;
    
    let _preco = preco;
    this.getPreco = function() {
        return _preco;
    }

    this.setPreco = function(valor) {
        if (typeof preco === 'number') {
            _preco = valor;
        }
    }

    this.desconto = function() {
        const novoPreco = _preco * 0.98;
        _preco = novoPreco;
    }
}

function Suv(fabricante, modelo) {
    Automovel.call(this,fabricante, modelo, "Suv", 150.000);

    this.desconto = function() {
        const novoPreco = this.getPreco() * 0.95;
        this.setPreco(novoPreco);
    }
}

function Pickup(fabricante, modelo) {
    Automovel.call(this,fabricante, modelo, "Pickup", 200.000);

    this.desconto = function() {
        const novoPreco = this.getPreco() * 0.92;
        this.setPreco(novoPreco);
    }
}

const automovel1 = new Automovel("Chevrolet", "Onix", "hatch", 100.000 );
const automovel2 = new Suv("Volkswagen", "Nivus");
const automovel3 = new Pickup("Fiat", "Toro");

automovel1.desconto();
const precoAutomovel1 = automovel1.getPreco().toFixed(3);
console.log(`O preco do ${automovel1.fabricante} ${automovel1.modelo} é: R$ ${precoAutomovel1}`)


automovel2.desconto();
const precoAutomovel2 = automovel2.getPreco().toFixed(3);
console.log(`O preco do ${automovel2.fabricante} ${automovel2.modelo} é: R$ ${precoAutomovel2}`)

automovel3.desconto();
const precoAutomovel3 = automovel3.getPreco().toFixed(3);
console.log(`O preco da ${automovel3.fabricante} ${automovel3.modelo} é: R$ ${precoAutomovel3}`)