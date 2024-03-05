package com.example.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.DTO.CustomerDTO;
import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.enumerated.mapper.Customermap;
import com.example.demo.model.Customer;
import com.example.demo.repository.Customerrepository;
import com.example.demo.service.Custservice;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CustImpl implements Custservice {
    private Customerrepository cust;

    public CustomerDTO createcust(CustomerDTO c){
      Customer r=Customermap.maptoCust(c);
      Customer saved=cust.save(r);
      return Customermap.maptoCustDTO(saved);
    }
    
    public CustomerDTO getCustById(Long custid){
      Customer u=cust.findById(custid).orElseThrow(()->new ResourceNotFoundException("Customer is not exist with given id: "+custid));
      return Customermap.maptoCustDTO(u);
    }
    
    public List<CustomerDTO> getAllCust(){
      List<Customer> li=cust.findAll();
      List<CustomerDTO> lis=new ArrayList<>();
      for(Customer u:li){
        lis.add(Customermap.maptoCustDTO(u));
      }
      return lis;
    }
}
