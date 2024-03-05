package com.example.demo.enumerated.mapper;

import com.example.demo.DTO.OrderDTO;
import com.example.demo.model.Order;

public class Ordermap {

    public static OrderDTO mapToOrderDTO(Order order) {
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setId(order.getId());
        orderDTO.setDate(order.getDate());
        orderDTO.setOrderprice(order.getOrderprice());
        orderDTO.setQuantity(order.getQuantity());
        // Assuming you have methods to map Gift and Customer to their respective DTOs, include them here
        // orderDTO.setGiftDTO(GiftMap.mapToGiftDTO(order.getGift()));
        // orderDTO.setCustomerDTO(CustomerMap.mapToCustomerDTO(order.getCustomer()));
        return orderDTO;
    }

    public static Order mapToOrder(OrderDTO orderDTO) {
        Order order = new Order();
        order.setId(orderDTO.getId());
        order.setDate(orderDTO.getDate());
        order.setOrderprice(orderDTO.getOrderprice());
        order.setQuantity(orderDTO.getQuantity());
        // Assuming you have methods to map GiftDTO and CustomerDTO to their respective entities, include them here
        // order.setGift(GiftMap.mapToGift(orderDTO.getGiftDTO()));
        // order.setCustomer(CustomerMap.mapToCustomer(orderDTO.getCustomerDTO()));
        return order;
    }
}
