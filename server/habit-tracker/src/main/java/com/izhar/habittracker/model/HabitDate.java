package com.izhar.habittracker.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@RequiredArgsConstructor
@Entity
@Table(name = "habit_dates")
public class HabitDate {

    // Fields
    @Id
    private long id;

    private LocalDateTime date;
    private boolean completed;

    // Relationships
    @ManyToOne(fetch = FetchType.LAZY)
    private Habit habit;
}
