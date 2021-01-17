package com.igerolamo.dsdeliver.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

// JPA é uma ferramenta de ORM

@Entity
@Table(name = "tb_order")
public class Order implements Serializable {

    private static final long serialVersionUID = 1L;

    // necessário definir a chave primaria da tabela e como ela vai se comportar
    // número que será auto incrementado pelo banco com o @GeneratedValue
    // portanto esse comando irá instruir o JPA para ele mapear esse ID como uma chave primária no banco de dados

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String address;
    private Double latitude;
    private Double longitude;
    private Instant moment;
    private OrderStatus status;

    // usado para implementar a tabela de associação entre os pedidos e os produtos
    // o joinColumns é a chave estrangeira que referencia a classe em que estou no caso a tabela tb_order
    @ManyToMany
    @JoinTable(name = "tb_order_product",
        joinColumns = @JoinColumn(name = "order_id"), inverseJoinColumns = @JoinColumn(name = "product_id"))

    // Considerada uma interface que faz parte do pacote “java.util” e representa grupos de elementos sem duplicatas,
    // Ou seja, são usados quando o programador não precisar ter nenhum dado duplicado na coleção.
    private Set<Product> products = new HashSet<>();

    public Order() {

    }

    public Order(Long id, String address, Double latitude, Double longitude, Instant moment, OrderStatus status) {
        this.id = id;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.moment = moment;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Instant getMoment() {
        return moment;
    }

    public void setMoment(Instant moment) {
        this.moment = moment;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public Set<Product> getProducts() {
        return products;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Order other = (Order) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }
}
