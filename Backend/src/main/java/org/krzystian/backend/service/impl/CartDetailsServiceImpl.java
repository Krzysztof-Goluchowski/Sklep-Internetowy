package org.krzystian.backend.service.impl;

import lombok.AllArgsConstructor;
import org.krzystian.backend.dto.CartDetailsDto;
import org.krzystian.backend.dto.OrderDetailsDto;
import org.krzystian.backend.dto.OrderDto;
import org.krzystian.backend.entity.CartDetails;
import org.krzystian.backend.entity.Product;
import org.krzystian.backend.entity.User;
import org.krzystian.backend.entity.embedded.CartDetailsId;
import org.krzystian.backend.exception.ResourceNotFoundException;
import org.krzystian.backend.mapper.CartDetailsMapper;
import org.krzystian.backend.repository.CartDetailsRepository;
import org.krzystian.backend.repository.ProductRepository;
import org.krzystian.backend.repository.UserRepository;
import org.krzystian.backend.service.CartDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
//@AllArgsConstructor
public class CartDetailsServiceImpl implements CartDetailsService {

    private final CartDetailsRepository cartDetailsRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    @Autowired
    public CartDetailsServiceImpl(CartDetailsRepository cartDetailsRepository, UserRepository userRepository, ProductRepository productRepository) {
        this.cartDetailsRepository = cartDetailsRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    @Override
    public CartDetailsDto setProductQuantity(Long userId, Long productId, int quantity) {
        CartDetails cartDetails = findCartDetailsOrNew(userId, productId);

        if (quantity == 0) {
            cartDetailsRepository.delete(cartDetails);
            return null;
        }

        cartDetails.setQuantity(quantity);

        CartDetails savedCartDetails = cartDetailsRepository.save(cartDetails);

        return CartDetailsMapper.mapToCartDetailsDto(savedCartDetails);
    }

    @Override
    public List<CartDetailsDto> getCartDetailsByUserId(Long userId) {
        List<CartDetailsDto> allCartDetailsDto =  cartDetailsRepository.findByCartIdUserId(userId).stream()
                .map(CartDetailsMapper::mapToCartDetailsDto)
                .toList();

        return allCartDetailsDto;
    }

    private CartDetails findCartDetailsOrNew(Long userId, Long productId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User with given id doesn't exist!"));
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product with given id doesn't exist!"));

        CartDetailsId cartId = new CartDetailsId(user.getId(), product.getId());

        return cartDetailsRepository.findById(cartId)
                .orElse(new CartDetails(cartId, user, product, 0));
    }

    @Override
    public List<OrderDetailsDto> mapAllCartDetailsToOrderDetailsDto(
            List<CartDetailsDto> allCartDetailsDto, OrderDto orderDto) {

        return allCartDetailsDto.stream()
                .map(cartDetailsDto -> mapCartDetailsToOrderDetailsDto(
                        cartDetailsDto, orderDto))
                .collect(Collectors.toList());
    }

    @Override
    public void emptyCart(Long userId) {
        List<CartDetails> allCartDetails = cartDetailsRepository.findByCartIdUserId(userId);

        if (true)
            throw new ResourceNotFoundException("jakis niechciany blad");

        cartDetailsRepository.deleteAll(allCartDetails);
    }

    private OrderDetailsDto mapCartDetailsToOrderDetailsDto(
            CartDetailsDto cartDetailsDto, OrderDto orderDto) {

        double productPrice = productRepository.findById(cartDetailsDto.getProductId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Product with given id doesn't exist!")).getPrice();

        return new OrderDetailsDto(
                orderDto.getOrderId(),
                cartDetailsDto.getProductId(),
                cartDetailsDto.getQuantity(),
                productPrice
        );
    }
}
