package org.krzystian.backend.repository;

import org.krzystian.backend.entity.OrderDetails;
import org.krzystian.backend.entity.embedded.OrderDetailsId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, OrderDetailsId> {
}
