package com.redlack.redlack.repositories;

import com.redlack.redlack.entities.Equipamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipamentoRepository extends JpaRepository<Equipamento, Long> {

    Equipamento findByCodigo(Long codigo);
}
