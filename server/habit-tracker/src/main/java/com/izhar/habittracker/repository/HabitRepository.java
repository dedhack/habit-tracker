package com.izhar.habittracker.repository;

import com.izhar.habittracker.model.Habit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface HabitRepository extends JpaRepository<Habit, Long> {
}
