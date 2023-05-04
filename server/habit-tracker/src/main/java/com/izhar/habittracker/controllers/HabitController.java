package com.izhar.habittracker.controllers;

import com.izhar.habittracker.dto.HabitDto;
import com.izhar.habittracker.service.HabitService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/habit")
@RequiredArgsConstructor
public class HabitController {

    private final HabitService habitService;

//    public HabitController(HabitService habitService) {
//        this.habitService = habitService;
//    }

    @PostMapping("/create")
    public ResponseEntity<HabitDto> createHabit(@RequestBody HabitDto habitDto){
        return new ResponseEntity<>(habitService.createHabit(habitDto), HttpStatus.CREATED);
    }


}
