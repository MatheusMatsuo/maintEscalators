package com.redlack.redlack.services;

import com.redlack.redlack.dto.EquipamentoDTO;
import com.redlack.redlack.entities.Equipamento;
import com.redlack.redlack.repositories.EquipamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
/*import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
 */
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EquipamentoService {

    @Autowired
    private EquipamentoRepository repository;

    @Transactional(readOnly = true)
    public List<EquipamentoDTO> findAll(){
        List<Equipamento> result = repository.findAll();
        List<EquipamentoDTO> dto = result.stream().map(x -> new EquipamentoDTO(x)).collect(Collectors.toList());
        return dto;
    }

    @Transactional(readOnly = true)
    public EquipamentoDTO findById(@PathVariable Long id){
        Equipamento result = repository.findById(id).get();
        EquipamentoDTO dto = new EquipamentoDTO(result);
        return dto;
    }

    @Transactional
    public EquipamentoDTO insert(@RequestBody EquipamentoDTO dto){

        Equipamento nome = repository.findByCodigo(dto.getCodigo());
        EquipamentoDTO resultadoDTO = null;

        if(nome == null) {
            Equipamento resultado = new Equipamento(dto);
            resultado = repository.save(resultado);
            resultadoDTO = new EquipamentoDTO(resultado);

        }return resultadoDTO;
    }

    @Transactional
    public void deleteById(@PathVariable Long id){
        repository.deleteById(id);
    }

    @Transactional
    public void update(@RequestBody Long id, EquipamentoDTO dto){
       repository.findById(id)
                .map(equipamentoAntigo -> {
                    equipamentoAntigo.setCodigo(dto.getCodigo());
                    equipamentoAntigo.setQuantidade(dto.getQuantidade());
                    equipamentoAntigo.setAfiliado(dto.getAfiliado());
                    Equipamento equipamentoNovo = repository.save(equipamentoAntigo);
                    EquipamentoDTO dtoNovo = new EquipamentoDTO(equipamentoNovo);
                    return dtoNovo;
                        });

    }


}
