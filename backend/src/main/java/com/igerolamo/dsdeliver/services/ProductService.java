package com.igerolamo.dsdeliver.services;

import com.igerolamo.dsdeliver.dto.ProductDTO;
import com.igerolamo.dsdeliver.entities.Product;
import com.igerolamo.dsdeliver.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    @Transactional(readOnly = true)
    public List<ProductDTO> findAll() {
        List<Product> list = repository.findAllByOrderByNameAsc();
        return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
    }

}

// o uso da stream() é para aceitar preogramação funcionl de alta ordem, lambda por exemplo
// o uso de collect() é para converter novamente para lista