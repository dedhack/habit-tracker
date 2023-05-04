package com.izhar.habittracker.dto;

import com.izhar.habittracker.model.HabitDate;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class HabitDto {

    private long id;
    private String name;
    private LocalDateTime createdAt;
    private List<HabitDate> habitDates;


}
