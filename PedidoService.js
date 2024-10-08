// PedidoService.js
async function criarPedido(pedidoData) {
  const restaurante = await restauranteRepository.obterPorId(pedidoData.restauranteId);
  
  const pedido = new Pedido(pedidoData.usuarioId, pedidoData.restauranteId, pedidoData.itens);
  
  pedido.validarDisponibilidade(restaurante);
  
  const novoPedido = await pedidoRepository.salvar(pedido);

  return novoPedido;
}
