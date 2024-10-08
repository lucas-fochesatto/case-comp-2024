// Pedido.js (Entidade)
class Pedido {
  constructor(usuarioId, restauranteId, itens) {
    this.usuarioId = usuarioId;
    this.restauranteId = restauranteId;
    this.itens = itens;
    this.status = 'Em processamento';
    this.dataPedido = new Date();
    this.total = this.calcularTotal();
  }

  calcularTotal() {
    return this.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  validarDisponibilidade(restaurante) {
    if (!restaurante.estaAberto()) {
      throw new Error('Restaurante fechado. Pedido não pode ser processado.');
    }
  }
}
