package com.izhar.habittracker.dto;

import lombok.Data;

import java.util.List;

@Data
public class HabitResponse {

    private List<HabitDto> habits;
    private int pageNo;
    private int pageSize;
    private long totalElements;
    private int totalPages;
    private boolean last;
}
