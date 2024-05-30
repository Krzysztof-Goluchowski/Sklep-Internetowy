package org.krzystian.backend.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class OrderDto {
    private Long orderId;
    private Date orderDate;
    private String shipCity;
    private String shipPostalCode;
    private String  shipAddress;
    private String  customersPhone;
    private Long customerId;
}
