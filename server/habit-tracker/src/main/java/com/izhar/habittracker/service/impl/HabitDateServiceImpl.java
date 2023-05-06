package com.izhar.habittracker.service.impl;

import com.izhar.habittracker.dto.HabitDateDto;
import com.izhar.habittracker.model.HabitDate;
import com.izhar.habittracker.repository.HabitDateRepository;
import com.izhar.habittracker.service.HabitDateService;

import java.util.List;

public class HabitDateServiceImpl implements HabitDateService{

    private HabitDateRepository habitDateRepository;

    @Override
    public HabitDateDto createHabitDate(HabitDateDto habitDateDto) {
        // Map dto to entity
        HabitDate habitDate = mapToEntity(habitDateDto);

        // Save entity to database
        HabitDate savedHabitDate = habitDateRepository.save(habitDate); // habitDateRepository.save(habitDate);

        return mapToDto(savedHabitDate);
    }

    @Override
    public List<HabitDateDto> getAllHabitDates() {
        return null;
    }

    @Override
    public List<HabitDateDto> getHabitDatesByHabitId(long habitId) {
        return null;
    }

    @Override
    public HabitDateDto updateHabitDate(long id, HabitDateDto habitDateDto) {
        return null;
    }

    @Override
    public void deleteHabitDateById(long id) {

    }

    private HabitDateDto mapToDto(HabitDate habitDate) {
        HabitDateDto habitDateDto1 = new HabitDateDto();
        habitDateDto1.setId(habitDate.getId());
        habitDateDto1.setDate(habitDate.getDate());
        habitDateDto1.setCompleted(habitDate.isCompleted());

        return habitDateDto1;
    }

    private HabitDate mapToEntity(HabitDateDto habitDateDto) {
        HabitDate habitDate = new HabitDate();
        habitDate.setDate(habitDateDto.getDate());
        habitDate.setCompleted(habitDateDto.isCompleted());

        return habitDate;
    }
}
