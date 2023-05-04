package com.izhar.habittracker.service.impl;

import com.izhar.habittracker.dto.HabitDto;
import com.izhar.habittracker.dto.HabitResponse;
import com.izhar.habittracker.model.Habit;
import com.izhar.habittracker.repository.HabitRepository;
import com.izhar.habittracker.service.HabitService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
//@RequiredArgsConstructor
public class HabitServiceImpl implements HabitService {

    private HabitRepository habitRepository;

    public HabitServiceImpl(HabitRepository habitRepository) {
        this.habitRepository = habitRepository;
    }

    @Override
    public HabitDto createHabit(HabitDto habitDto) {
        Habit habit = new Habit();

        habit.setName(habitDto.getName());
        habit.setCreatedAt(LocalDateTime.now());

        Habit newHabit = habitRepository.save(habit);

        habitDto.setId(newHabit.getId());
        habitDto.setCreatedAt(newHabit.getCreatedAt());

        return habitDto;
    }

    @Override
    public HabitResponse getAllHabits(int pageNo, int pageSize) {
        return null;
    }

    @Override
    public Habit getHabitById(long id) {
        return null;
    }

    @Override
    public void deleteHabitById(long id) {

    }

    @Override
    public Habit updateHabit(long id, Habit habit) {
        return null;
    }
}
