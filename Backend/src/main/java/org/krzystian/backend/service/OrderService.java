package org.krzystian.backend.service;

import java.util.List;

public interface OrderService {
    List<Object[]> getOrderValuesByMonthLastYear();
    List<Object[]> getCurrentYearSalesData();
}
