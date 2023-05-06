package com.izhar.habittracker.dto;

import com.izhar.habittracker.model.Habit;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class HabitDateDto {
    private long id;

    private LocalDateTime date;
    private boolean completed;

}
