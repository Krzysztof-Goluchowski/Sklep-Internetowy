package org.krzystian.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")

public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "orders_seq")
//    @SequenceGenerator(name = "orders_seq",
//            sequenceName = "orders_SEQ", allocationSize = 1)
    @Column(name = "order_id")
    private Long orderId;

    @Column(name = "orderdate")
    private Date orderDate;

    @Column(name = "shipcity")
    private String shipCity;

    @Column(name = "shippostalcode")
    private String shipPostalCode;

    @Column(name = "shipaddress")
    private String  shipAddress;

    @Column(name = "customersphone")
    private String  customersPhone;

    @Column(name = "customer_id")
    private Long customerId;
}
