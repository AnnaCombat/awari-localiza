class Carro {
  constructor(
    modelo,
    placa,
    ano,
    cor,
    quilometragem,
    valorDiario,
    observacao,
    tempo,
    melhorias
  ) {
    this.modelo = modelo;
    this.placa = placa;
    this.ano = ano;
    this.cor = cor;
    this.quilometragem = quilometragem;
    this.valorDiario = valorDiario;
    this.obesrvacao = observacao;
  }
}

class Esportivo extends Carro {
  constructor(
    modelo,
    placa,
    ano,
    cor,
    quilometragem,
    valor_diario,
    observacao
  ) {
    super(melhorias);
    this.melhorias = melhorias;
  }
}

class Utilitario extends Carro {
  constructor(
    modelo,
    placa,
    ano,
    cor,
    quilometragem,
    valor_diario,
    observacao,
    quantidadePassageiros,
    tamanhoBagageiro,
    kmLitro
  ) {
    super(quantidadePassageiros, tamanhoBagageiro, kmLitro);
    this.quantidadePassageiros = quantidadePassageiros;
    this.tamanhoBagageiro = tamanhoBagageiro;
    this.kmLitro = kmLitro;
  }
}

class Reserva {
  constructor(cpfCliente, status, dataInicio, dataFim) {
    this.cpfCliente;
    this.status = status;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
  }
}

class Pessoa {
  constructor(nome, cpf, endereco) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
  }
}

class Funcionario extends Pessoa {
  constructor(
    nome,
    cpf,
    emal,
    telefone,
    endereco,
    idade,
    dataContratacao,
    salario,
    qtAlugueisMes = 0,
    status = False
  ) {
    super(nome, cpf, emal, telefone, endereco);
    this.idade = idade;
    this.dataContratacao = dataContratacao;
    this.salario = salario;
    this.qtAlugueisMes = qtAlugueisMes;
    this.status = status;
  }
}

class Cliente extends Pessoa {
  constructor(
    nome,
    cpf,
    emal,
    telefone,
    endereco,
    dataNascimento,
    nuCarteira,
    fotoCarteira,
    dataVencimentoCarteira
  ) {
    super(nome, cpf, emal, telefone, endereco);
    this.dataNascimento = dataNascimento;
    this.nuCarteira = nuCarteira;
    this.otoCarteira = fotoCarteira;
    this.dataVencimentoCarteira = dataVencimentoCarteira;
  }
}

class Promocao {
  constructor(titulo, descricao, dataValidade) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.dataValidade = dataValidade;
  }
}
