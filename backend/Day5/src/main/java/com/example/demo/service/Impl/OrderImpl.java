package com.example.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.DTO.OrderDTO;
import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.enumerated.mapper.Ordermap;
import com.example.demo.model.Order;
import com.example.demo.repository.Orderrepo;
import com.example.demo.service.Orderservice;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrderImpl implements Orderservice{
    private Orderrepo ord;
    
    @Override
    public OrderDTO createOrder(OrderDTO u){
      Order r=Ordermap.mapToOrder(u);
      Order saved=ord.save(r);
      return Ordermap.mapToOrderDTO(saved);
    }
    
    @Override
    public OrderDTO getOrderById(Long ordid){
      Order u=ord.findById(ordid).orElseThrow(()->new ResourceNotFoundException("User is not exist with given id: "+ordid));
      return Ordermap.mapToOrderDTO(u);
    }
    
    @Override
    public List<OrderDTO> getAllOrders(){
      List<Order> li=ord.findAll();
      List<OrderDTO> lis=new ArrayList<>();
      for(Order u:li){
        lis.add(Ordermap.mapToOrderDTO(u));
      }
      return lis;
    }

}
