package com.hepta.funcionarios.rest;

import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.Form;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import org.glassfish.jersey.client.JerseyClient;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.glassfish.jersey.test.JerseyTestNg;
import org.glassfish.jersey.test.TestProperties;
import org.glassfish.jersey.test.spi.TestNgStrategy;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class FuncionarioServiceTest extends JerseyTest {

  @Override
  protected Application configure() {
    return new ResourceConfig(FuncionarioService.class);
  }

  @BeforeEach
  @Override
  public void setUp() throws Exception {
    super.setUp();
  }

  @AfterEach
  @Override
  public void tearDown() throws Exception {
    super.tearDown();
  }

  @Test
  void testFuncionarioRead() {
    Response response = target("/funcionarios/rs/funcionarios")
      .request(MediaType.APPLICATION_JSON)
      .get();
    assertEquals(Status.OK.getStatusCode(), response.getStatus());
  }

  @Test
  void testFuncionarioCreate() {
    Form form = new Form();
    form.param("nome", "Teste");
    form.param("setor", null);
    form.param("salario", "2223.45");
    form.param("email", "teste@yahoo.com.br");
    form.param("idade", "33");

    Response response = target("/funcionarios/rs/funcionarios")
      .request()
      .post(Entity.form(form));

    assertEquals(Status.OK.getStatusCode(), response.getStatus());
  }

  @Test
  void testFuncionarioCreateJSON() {
    Response response = target("/funcionarios/rs/funcionarios")
      .request(MediaType.APPLICATION_JSON)
      .post(
        Entity.json(
          "{\"nome\":\"Teste Pa\",\"setor\":null,\"salario\":20,\"email\":dastdassa@gmail.com,\"idade\":20}"
        )
      );

    assertEquals(Status.OK.getStatusCode(), response.getStatus());
  }

  @Test
  void testFuncionarioUpdate() {
    Form form = new Form();
    form.param("id", "5");
    form.param("nome", "Teste");
    form.param("setor", null);
    form.param("salario", "2223.45");
    form.param("email", "teste@yahoo.com.br");
    form.param("idade", "33");

    Response response = target("/funcionarios/rs/funcionarios")
      .request(MediaType.APPLICATION_JSON)
      .put(Entity.form(form));

    assertEquals(Status.OK.getStatusCode(), response.getStatus());
  }

  @Test
  void testFuncionarioDelete() {
    Response response = target("/funcionarios/rs/funcionarios/5")
      .request()
      .delete();

    assertEquals(Status.OK.getStatusCode(), response.getStatus());
  }
}
