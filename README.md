# now-or-never
Essa aplicação é uma Lista de Tarefas.

### O que foi usado
* react
  - context
  - memo
* styled-components
* miragejs
* axios
* react-hot-toast
* rc-year-calendar

### Para inicializar o projeto:
* Clone-o repositório para sua máquina.
* Instale as dependências do projeto com `npm install` ou `yarn install` (Certifique-se que o Node esteja instalado na sua máquina).
* Inicialize o projeto com `npm dev --port 3000` ou `yarn dev --port 3000`.
* Feito os passos acima, o projeto deverá estar rodando na porta 3000 no endereço http://localhost:3000

## Como o projeto NORN funciona?
#### Logo abaixo vemos uma tela, essa é a tela incial.
![image](https://user-images.githubusercontent.com/42146848/185535395-c5b0846c-6514-4fb8-9eea-2e53f0e1be14.png)

#### Ao clicar no botão "Criar uma nova tarefa" ira abrir um modal que terá duas etapas, a primeira terá os campos de "nome" e "data" da tarefa, no segundo vamos ter a "hora" e uma cor de idenficação.
![image](https://user-images.githubusercontent.com/42146848/185535616-b68de34c-3d73-46b5-9b98-d608943f2f54.png)
![image](https://user-images.githubusercontent.com/42146848/185535731-ee5d35b0-f612-4f98-a115-6f0382b0b3aa.png)

#### Após criar uma tarefa a home ficara assim, para ter um visualização melho. Nessa tela contém suas tarefas, um checkbox para mudar o estado da sua tarefa e um botão para criar mais tarefas.
![image](https://user-images.githubusercontent.com/42146848/185536255-5094febd-a8ad-4ee3-86af-952d7f4ce88b.png)

#### Seguindo para página de calendário, temos um calendario gigante com todas as suas tarefas marcadas. Nele é possível selecionar datas e criar novas tarefas com as datas selecionadas.
![image](https://user-images.githubusercontent.com/42146848/185536729-0c94dbc6-61ea-4035-bf87-607c7cc635c3.png)

#### Através desse calendário é possível excluir uma tarefa (Lembrando que a exclusão da tarefa só pode ser feita atráves do calendário, nas próximas atualizações será possível excluir através da tabela que está na página home). Para deletar, basta clicar com o botão direito em cima da tarefa, em seguida aparecerá o nome da terefa, quando passar o mouse em cima do nome aparecerá a opção "Excluir" é só clicar e a terfa será excluida.
![image](https://user-images.githubusercontent.com/42146848/185538190-a7ea9798-f52c-4846-8084-72ceaec7e11c.png)



### Atualizações 2.0
- Adicionado página de "calendario" de tarefas
- Adicionado opação deletar tarefa
- Adicionado data na tarefa
- Adicionado cor na tarefa
- Botões preenchidos de acordo com a pagina no menu lateral
- Mudanças na pagina "home"
- Responsivo
