package com.izhar.habittracker.service.impl;

import com.izhar.habittracker.dto.HabitDto;
import com.izhar.habittracker.dto.HabitResponse;
import com.izhar.habittracker.model.Habit;
import com.izhar.habittracker.repository.HabitRepository;
import com.izhar.habittracker.service.HabitService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

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
//        habitDto.getHabitDates().forEach(habitDate -> habitDate.setHabit(habit));

        return habitDto;
    }

    @Override
    public HabitResponse getAllHabits(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        Page<Habit> posts = habitRepository.findAll(pageable); // retrieving post objects

        List<Habit> listOfPosts = posts.getContent();
        List<HabitDto> content = listOfPosts.stream().map(post -> mapToDto(post)).collect(Collectors.toList());

        HabitResponse habitResponse = new HabitResponse();
        habitResponse.setHabits(content);
        habitResponse.setPageNo(posts.getNumber());
        habitResponse.setPageSize(posts.getSize());
        habitResponse.setTotalElements(posts.getTotalElements());
        habitResponse.setTotalPages(posts.getTotalPages());
        habitResponse.setLast(habitResponse.isLast());

        return habitResponse;
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

    private HabitDto mapToDto(Habit habit) {
        HabitDto habitDto = new HabitDto();
        habitDto.setId(habit.getId());
        habitDto.setName(habit.getName());
        habitDto.setCreatedAt(habit.getCreatedAt());
        return habitDto;
    }
}
