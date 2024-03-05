package com.example.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.DTO.GiftDTO;
import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.enumerated.mapper.Giftmap;
import com.example.demo.model.Gift;
import com.example.demo.repository.Giftrepo;
import com.example.demo.service.Giftservice;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class GiftImpl implements Giftservice {
    private final Giftrepo gift;

    @Override
    public GiftDTO createGift(GiftDTO u) {
        Gift r = Giftmap.mapToGift(u);
        Gift saved = gift.save(r);
        return Giftmap.mapToGiftDTO(saved);
    }

    @Override
    public GiftDTO getGiftById(Long giftid) {
        Gift u = gift.findById(giftid).orElseThrow(() -> new ResourceNotFoundException("User is not exist with given id: " + giftid));
        return Giftmap.mapToGiftDTO(u);
    }

    @Override
    public List<GiftDTO> getAllGifts() {
        List<Gift> li = gift.findAll();
        List<GiftDTO> lis = new ArrayList<>();
        for (Gift u : li) {
            lis.add(Giftmap.mapToGiftDTO(u));
        }
        return lis;
    }

    @Override
    public GiftDTO updateGift(Long giftid, GiftDTO giftDTO) {
        Gift existingGift = gift.findById(giftid).orElseThrow(() -> new ResourceNotFoundException("Gift not found with id: " + giftid));
        existingGift.setName(giftDTO.getName());
        existingGift.setDetails(giftDTO.getDetails());
        existingGift.setPrice(giftDTO.getPrice());
        Gift updatedGift = gift.save(existingGift);
        return Giftmap.mapToGiftDTO(updatedGift);
    }

    @Override
    public void deleteGift(Long giftid) {
        Gift existingGift = gift.findById(giftid).orElseThrow(() -> new ResourceNotFoundException("Gift not found with id: " + giftid));
        gift.delete(existingGift);
    }
}
