## Log Corrida
Dado o seguinte log de uma corrida de Kart:

```text
Hora                               Piloto             Nº Volta   Tempo Volta       Velocidade média da volta
23:49:08.277      038 – F.MASSA                           1		1:02.852                        44,275
23:49:10.858      033 – R.BARRICHELLO                     1		1:04.352                        43,243
23:49:11.075      002 – K.RAIKKONEN                       1     1:04.108                        43,408
23:49:12.667      023 – M.WEBBER                          1		1:04.414                        43,202
23:49:30.976      015 – F.ALONSO                          1		1:18.456			            35,47
23:50:11.447      038 – F.MASSA                           2		1:03.170                        44,053
23:50:14.860      033 – R.BARRICHELLO                     2		1:04.002                        43,48
23:50:15.057      002 – K.RAIKKONEN                       2     1:03.982                        43,493
23:50:17.472      023 – M.WEBBER                          2		1:04.805                        42,941
23:50:37.987      015 – F.ALONSO                          2		1:07.011			            41,528
23:51:14.216      038 – F.MASSA                           3		1:02.769                        44,334
23:51:18.576      033 – R.BARRICHELLO		              3		1:03.716                        43,675
23:51:19.044      002 – K.RAIKKONEN                       3		1:03.987                        43,49
23:51:21.759      023 – M.WEBBER                          3		1:04.287                        43,287
23:51:46.691      015 – F.ALONSO                          3		1:08.704			            40,504
23:52:01.796      011 – S.VETTEL                          1		3:31.315			            13,169
23:52:17.003      038 – F.MASSA                           4		1:02.787                        44,321
23:52:22.586      033 – R.BARRICHELLO		              4		1:04.010                        43,474
23:52:22.120      002 – K.RAIKKONEN                       4		1:03.076                        44,118
23:52:25.975      023 – M.WEBBER                          4		1:04.216                        43,335
23:53:06.741      015 – F.ALONSO                          4		1:20.050			            34,763
23:53:39.660      011 – S.VETTEL                          2		1:37.864			            28,435
23:54:57.757      011 – S.VETTEL                          3		1:18.097			            35,633
```
Montar o resultado da corrida com as seguintes informações: Posição Chegada, Código Piloto, Nome Piloto, Qtde Voltas Completadas e Tempo Total de Prova

## Instalação

```
npm install
```

## Testes

```
npm run test
```

## Como Executar Projeto

```
node index.js
```
```
    Resultado da Corrida
    0: {
      "nomePiloto": "F.MASSA",
      "codigoPiloto": "038",
      "quantidadeVoltasCompletadas": 4,
      "posicaoChegada": 1,
      "tempoTotalProva": "4:11.578"
    }
    1: {
      "nomePiloto": "K.RAIKKONEN",
      "codigoPiloto": "002",
      "quantidadeVoltasCompletadas": 4,
      "posicaoChegada": 2,
      "tempoTotalProva": "4:15.153"
    }
    2: {
      "nomePiloto": "R.BARRICHELLO",
      "codigoPiloto": "033",
      "quantidadeVoltasCompletadas": 4,
      "posicaoChegada": 3,
      "tempoTotalProva": "4:16.080"
    }
    3: {
      "nomePiloto": "M.WEBBER",
      "codigoPiloto": "023",
      "quantidadeVoltasCompletadas": 4,
      "posicaoChegada": 4,
      "tempoTotalProva": "4:17.722"
    }
    4: {
      "nomePiloto": "F.ALONSO",
      "codigoPiloto": "015",
      "quantidadeVoltasCompletadas": 4,
      "posicaoChegada": 5,
      "tempoTotalProva": "4:54.221"
    }
    5: {
      "nomePiloto": "S.VETTEL",
      "codigoPiloto": "011",
      "quantidadeVoltasCompletadas": 3,
      "posicaoChegada": "-",
      "tempoTotalProva": "6:27.276"
    }
```
