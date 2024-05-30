package org.krzystian.backend.service.impl;

import lombok.AllArgsConstructor;
import org.krzystian.backend.dto.CartDetailsDto;
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
    public CartDetailsDto addProduct(Long userId, Long productId) {
        CartDetails cartDetails = findCartDetailsOrNew(userId, productId);

        cartDetails.incrementQuantity();

        CartDetails savedCartDetails = cartDetailsRepository.save(cartDetails);

        return CartDetailsMapper.mapToCartDetailsDto(savedCartDetails);
    }

    @Override
    public CartDetailsDto removeProduct(Long userId, Long productId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User with given id doesn't exist!"));
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product with given id doesn't exist!"));

        CartDetailsId cartId = new CartDetailsId(user.getId(), product.getId());

        CartDetails cartDetails = cartDetailsRepository.findById(cartId)
                .orElseThrow(() -> new ResourceNotFoundException(("No such data in the cart!")));

        int updatedQuantity = cartDetails.decrementQuantity();
        if (updatedQuantity == 0) {
            cartDetailsRepository.delete(cartDetails);
            return null;
        } else {
            CartDetails savedCartDetails = cartDetailsRepository.save(cartDetails);
            return CartDetailsMapper.mapToCartDetailsDto(savedCartDetails);
        }
    }

    @Override
    public CartDetailsDto setProductQuantity(Long userId, Long productId, int quantity) {
        CartDetails cartDetails = findCartDetailsOrNew(userId, productId);

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
}
