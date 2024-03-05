package com.example.demo.service;

import java.util.List;
import com.example.demo.DTO.OrderDTO;

public interface Orderservice {
    OrderDTO createOrder(OrderDTO us);
    OrderDTO getOrderById(Long ordid);
    List<OrderDTO> getAllOrders();
}
