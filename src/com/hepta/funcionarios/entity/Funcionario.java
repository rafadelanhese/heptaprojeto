package com.hepta.funcionarios.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Funcionario implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ID_FUNCIONARIO")
  private Integer id;

  @NotNull(message = "Nome não pode ser nulo")
  @Column(name = "NOME")
  private String nome;

  @ManyToOne
  @JoinColumn(name = "FK_SETOR")
  private Setor setor;

  @Size(min = 0, message = "Salário deve ser no mínimo: {min}")
  @NotNull(message = "Salário não pode ser nulo")
  @Column(name = "NU_SALARIO")
  private Double salario;

  @NotNull(message = "Email não pode ser nulo")
  @Column(name = "DS_EMAIL")
  private String email;

  @Size(min = 0, max = 110, message = "Idade deve ter entre {min} e {max}")
  @NotNull(message = "Idade não pode ser nulo")
  @Column(name = "NU_IDADE")
  private Integer idade;

  public Funcionario() {}

  public Funcionario(
    Integer id,
    String nome,
    Setor setor,
    Double salario,
    String email,
    Integer idade
  ) {
    this.id = id;
    this.nome = nome;
    this.setor = setor;
    this.salario = salario;
    this.email = email;
    this.idade = idade;
  }

  public Funcionario(
    String nome,
    Setor setor,
    Double salario,
    String email,
    Integer idade
  ) {
    this.nome = nome;
    this.setor = setor;
    this.salario = salario;
    this.email = email;
    this.idade = idade;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public Setor getSetor() {
    return setor;
  }

  public void setSetor(Setor setor) {
    this.setor = setor;
  }

  public Double getSalario() {
    return salario;
  }

  public void setSalario(Double salario) {
    this.salario = salario;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Integer getIdade() {
    return idade;
  }

  public void setIdade(Integer idade) {
    this.idade = idade;
  }
}
