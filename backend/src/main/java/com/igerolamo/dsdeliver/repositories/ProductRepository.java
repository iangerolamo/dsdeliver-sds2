package com.igerolamo.dsdeliver.repositories;

import com.igerolamo.dsdeliver.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// JpaRepository já traz algumas implementações como buscar, salvar, editar, deletar, isto é, todas as operaçõe basicas
// O Long é porque o tipo do ID do product é do tipo Long

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findAllByOrderByNameAsc();
}

