# Projeto

# Execução do projeto
1. Faça o clone do repositório https://github.com/rafadelanhese/hprojeto.git
2. Na pasta onde baixou o projeto execute o seguinte comando: mvn clean install
3. Após a conclusão, acesse a pasta target e copie o arquivo: funcionarios.war
4. Cole o arquivo .war na pasta .\apache-tomcat-8.5.64\webapps
5. Deploy do projeto executando o seguinte arquivo do Tomcat: .\apache-tomcat-8.5.64\bin\statup.bat

# Banco de dados
1.Banco de dados utilizado foi o MySql rodando na sua porta padrão 3306
2. Crie um schema chamado: funcionarios_prova
3. Crie um usuário chamado: func_prova
4. Utilize a seguinte senha para o usuário: func_prova

#Acesso ao sistema
1. Após a conclusão com êxito das etapas acima o sistema deve estar disponível em: http://localhost:8080/funcionarios