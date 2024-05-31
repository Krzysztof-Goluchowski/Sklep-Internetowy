package org.krzystian.backend.repository;

import org.krzystian.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    @Query(value = "SELECT EXTRACT(MONTH FROM o.orderdate) AS month, SUM(od.amount * od.unit_price) AS totalValue " +
            "FROM orders o JOIN order_details od ON o.order_id = od.order_id " +
            "WHERE o.orderdate >= DATE_TRUNC('year', CURRENT_DATE) - INTERVAL '1 year' " +
            "AND o.orderdate < DATE_TRUNC('year', CURRENT_DATE) " +
            "GROUP BY EXTRACT(MONTH FROM o.orderdate) " +
            "ORDER BY month", nativeQuery = true)
    List<Object[]> getOrderValuesByMonthLastYear();

    @Query(value = "SELECT EXTRACT(MONTH FROM o.orderdate) AS month, SUM(od.amount * od.unit_price) AS totalValue " +
            "FROM orders o JOIN order_details od ON o.order_id = od.order_id " +
            "WHERE o.orderdate >= DATE_TRUNC('year', CURRENT_DATE) " +
            "AND o.orderdate <= CURRENT_DATE " +
            "GROUP BY EXTRACT(MONTH FROM o.orderdate) " +
            "ORDER BY month", nativeQuery = true)
    List<Object[]> getCurrentYearSalesData();
}
