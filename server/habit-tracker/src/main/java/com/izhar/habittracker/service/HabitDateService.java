package com.izhar.habittracker.service;

import com.izhar.habittracker.dto.HabitDateDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface HabitDateService {

    // methods to be implemented
    // Create habit date
    HabitDateDto createHabitDate(HabitDateDto habitDateDto);

    // Get all habit dates
    List<HabitDateDto> getAllHabitDates();

    // Get habit dates by habit id
    List<HabitDateDto> getHabitDatesByHabitId(long habitId);

    // Update habit date
    HabitDateDto updateHabitDate(long id, HabitDateDto habitDateDto);

    // Delete habit date by id
    void deleteHabitDateById(long id);

}
