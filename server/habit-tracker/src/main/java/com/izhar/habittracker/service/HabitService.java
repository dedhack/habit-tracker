package com.izhar.habittracker.service;

import com.izhar.habittracker.dto.HabitDto;
import com.izhar.habittracker.dto.HabitResponse;
import com.izhar.habittracker.model.Habit;
import org.springframework.stereotype.Service;

@Service
public interface HabitService {

    HabitDto createHabit(HabitDto habit);

    HabitResponse getAllHabits(int pageNo, int pageSize);

    Habit getHabitById(long id);

    void deleteHabitById(long id);

    Habit updateHabit(long id, Habit habit);

}
