// PedidoRepository.js
async function salvar(pedido) {
  const { usuarioId, restauranteId, itens, total, status, dataPedido } = pedido;
  
  const pedidoCriado = await db.query(
    'INSERT INTO Pedidos (usuario_id, restaurante_id, total, status_pedido, data_pedido) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [usuarioId, restauranteId, total, status, dataPedido]
  );

  const pedidoId = pedidoCriado.rows[0].id;

  for (const item of itens) {
    await db.query(
      'INSERT INTO ItensPedidos (pedido_id, produto_id, quantidade, preco_unitario) VALUES ($1, $2, $3, $4)',
      [pedidoId, item.produtoId, item.quantidade, item.preco]
    );
  }

  return pedidoCriado.rows[0];
}
