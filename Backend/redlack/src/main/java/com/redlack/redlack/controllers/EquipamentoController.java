package com.redlack.redlack.controllers;

import com.redlack.redlack.dto.EquipamentoDTO;
import com.redlack.redlack.services.EquipamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/equipamentos")
public class EquipamentoController {

    @Autowired
    private EquipamentoService service;

    @GetMapping
    public ResponseEntity<List<EquipamentoDTO>> findAll() {
        List<EquipamentoDTO> result = service.findAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<EquipamentoDTO> findById(@PathVariable Long id) {
        EquipamentoDTO result = service.findById(id);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping
    public EquipamentoDTO insert(@RequestBody EquipamentoDTO dto) {
        EquipamentoDTO result = service.insert(dto);
        return result;
    }

    @DeleteMapping(value = "/deletar/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteById(id);
    }

    @PutMapping(value = "/editar/{id}")
    public void update(@PathVariable Long id, @RequestBody EquipamentoDTO dto) {
        service.update(id, dto);
    }

}

   