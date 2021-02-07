package com.igerolamo.dsdeliver.services;

import com.igerolamo.dsdeliver.dto.ProductDTO;
import com.igerolamo.dsdeliver.entities.Product;
import com.igerolamo.dsdeliver.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

// anotation service porque é um objeto da camada de serviço

@Service
public class ProductService {


//    A anotação @ Autowired fornece controle sobre onde e como a ligação entre os beans deve ser realizada.
//    Pode ser usado para em métodos setter, no construtor, em uma propriedade ou métodos com nomes arbitrários
//    e / ou vários argumentos.

    @Autowired
    private ProductRepository repository;

// injeção de dependencias de componentes

    @Transactional(readOnly = true)
    public List<ProductDTO> findAll() {
        List<Product> list = repository.findAllByOrderByNameAsc();
        return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
    }

}

// o uso da stream() (a partir do java 8) é para aceitar programação funcionl de alta ordem, lambda por exemplo
// a função map passa por cada elemento da lista e transforma em uma nova lista
// o uso de collect() é para converter novamente para lista