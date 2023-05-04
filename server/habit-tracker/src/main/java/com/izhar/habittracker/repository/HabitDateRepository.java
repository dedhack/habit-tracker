package com.izhar.habittracker.repository;

import com.izhar.habittracker.model.HabitDate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HabitDateRepository extends JpaRepository<HabitDate, Long> {
}
