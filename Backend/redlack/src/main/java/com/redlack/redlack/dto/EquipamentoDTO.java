package com.redlack.redlack.dto;

import com.redlack.redlack.entities.Equipamento;

import java.io.Serializable;
import java.util.Objects;

public class EquipamentoDTO implements Serializable {

    private static final long serialVerisonUID= 1L;

    private Long id;

    private Long codigo;

    private Long quantidade;
    private String afiliado;


    public EquipamentoDTO(){}

    public EquipamentoDTO(Equipamento equipamento){
        this.id = equipamento.getId();
        this.codigo = equipamento.getCodigo();
        this.quantidade = equipamento.getQuantidade();
        this.afiliado = equipamento.getAfiliado();
    }

    public EquipamentoDTO(Long id, Long codigo, Long quantidade, String afiliado) {
        this.id = id;
        this.codigo = codigo;
        this.quantidade = quantidade;
        this.afiliado = afiliado;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCodigo() {
        return codigo;
    }

    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }

    public Long getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Long quantidade) {
        this.quantidade = quantidade;
    }

    public String getAfiliado() {
        return afiliado;
    }

    public void setAfiliado(String afiliado) {
        this.afiliado = afiliado;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EquipamentoDTO that = (EquipamentoDTO) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "EquipamentoDTO{" +
                "id=" + id +
                ", codigo=" + codigo +
                ", quantidade=" + quantidade +
                ", afiliado='" + afiliado + '\'' +
                '}';
    }
}
