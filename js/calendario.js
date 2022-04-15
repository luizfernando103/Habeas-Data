$(document).ready(function() {
    $("#calendar").evoCalendar({
        language: "pt",
        theme: 'Royal Navy',
        calendarEvents:[ 
            // ---------- Janeiro 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/01 a 17/01 - Período para <b>substituição</b> de remessa das informações <b>(ref. Novembro/2021)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["January/08/2022","January/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/01 a 31/01 - Período para <b>envio</b> de remessa das informações <b>(ref. Dezembro/2021)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["January/01/2022","January/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/01 a 10/02 - Período para <b>envio</b> de remessa das informações <b>(ref. Novembro/2021)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["January/01/2021","January/10/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/01 a 09/02 - Período para <b>envio</b> de remessa das informações <b>(ref. Dezembro/2021)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["January/01/2022","February/09/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>6º bimestre do exercício anterior</b> (art. 165, § 3º da C.R/88 c/c o art. 52 da LRF).",
                date: "January/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "lrf",
                name: "LRF - Exec e Legis Mun.",
                description: "Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>2º semestre do exercício anterior</b>, para municípios com <b>menos de 50.000 habitantes</b>, optantes pelo envio semestral (art. 63, § 1º da LRF). <br> Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>3º quadrimestre do exercício anterior</b>, para municípios com <b>mais de 50.000 habitantes</b> e para municípios <b>não optantes</b> pelo envio semestral (art. 54 c/c art. 55, § 2º da LRF).",
                date: "January/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/01 a 31/01 - Período para <b>substituição</b> das informações do módulo Acompanhamento Mensal (AM), relativas ao mês de <b>novembro</b> do exercício anterior (art. 13, I, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["January/08/2022","January/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Exec Municipal",
                description: "01/01 a 31/01 - Período de <b>envio</b> das informações do módulo Instrumentos de Planejamento (IP), relativas ao <b>PPA, LDO e LOA</b>, acompanhadas dos textos integrais das referidas leis (art. 5º, § 1º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["January/01/2022","January/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/01 a 31/01 - Período para <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>dezembro</b> do exercício anterior (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["January/01/2022","January/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/01 a 31/01 - Período para <b>envio</b> das informações do módulo Acompanhamento Mensal (AM), relativas ao mês de <b>dezembro</b> do exercício anterior (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["January/01/2022","January/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/01 a 31/03 - Período de <b>envio</b> das informações do módulo Demonstrações Contábeis Aplicadas ao Setor Público (DCASP), juntamente com os documentos especificados nos anexos I a VIII, da INTC n° 04/2017, em formato PDF (art. 10 da INTC nº 03/2015, alterada pela INTC nº 02/2017, e art. 2º, §2°, da INTC nº 04/2017), para comporem a <b>Prestação de Contas Anual</b> do exercício anterior.",
                date: ["January/01/2022","March/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/01 a 31/01 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>dezembro</b> do exercício anterior (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["January/01/2022","January/31/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Considerando que o Módulo Edital não pode ser enviado sem que o IP-Instrumento de Planejamento já tenha sido enviado e que a data limite de envio do IP é 31/01 do ano exercício, os prazos de envio do Módulo Edital no mês de Janeiro é: <b>Até 5 (cinco) dias úteis após a data de envio do IP</b>, caso a data de publicação do edital tenha sido anterior ou igual à data de envio do IP ou até 5 (cinco) dias úteis após a data de publicação do edital se esta for posterior à data de envio do IP. A tabela abaixo resume esta situação. <br> <b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["January/01/2022","February/05/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // ---------- Fevereiro 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/02 a 17/02 - Período para <b>substituição</b> de remessa das informações <b>(ref. Dezembro/2021)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["February/08/2022","February/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/02 a 28/02 - Período para <b>envio</b> de remessa das informações <b>(ref. Janeiro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["February/01/2022","February/28/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/02 a 14/03 - Período para <b>envio</b> de remessa das informações <b>(ref. Janeiro/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["February/01/2021","March/14/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para realização de audiência pública para demonstrar e avaliar o cumprimento das metas fiscais do <b>3º quadrimestre do exercício anterior</b> (art. 9º, § 4º da LRF).",
                date: "February/28/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Exec Municipal",
                description: "Último dia para <b>reenvio</b> das informações do módulo Instrumentos de Planejamento, relativas ao <b>PPA, LDO e LOA</b> (art. 12, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: "February/20/2022",
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/02 a 28/02 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>janeiro</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["February/01/2022","February/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Último dia para <b>envio</b> das informações do módulo Balancete Contábil relativas ao <b>encerramento do exercício anterior</b> (art. 9º, caput, da INTC 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: "February/15/2022",
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/02 a 28/02 - Prazo de <b>envio</b> das informações de Acompanhamento Mensal (AM) relativas ao mês de <b>janeiro</b> (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["February/01/2022","February/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/02 a 17/02 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>dezembro do exercício anterior</b> (art. 13, inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["February/8/2022","February/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "21/02 a 28/02 - Período destinado ao <b>reenvio</b> permitido das informações do módulo de Acompanhamento Mensal (AM) relativas aos meses de <b>novembro e dezembro do exercício anterior</b>. <br> <b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["February/21/2022","February/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br> <b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["February/01/2022","March/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/02 a 28/02 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>janeiro</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["February/01/2022","February/28/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Março 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/03 a 17/03 - Período para <b>substituição</b> de remessa das informações <b>(ref. Janeiro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["March/08/2022","March/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/03 a 31/03 - Período para <b>envio</b> de remessa das informações <b>(ref. Fevereiro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["March/01/2022","March/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/03 a 11/04 - Período para <b>envio</b> de remessa das informações <b>(ref. Fevereiro/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["March/01/2021","April/11/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>1º bimestre do exercício atual</b> (art. 165, § 3º da C.R/88 c/c o art. 52 da LRF).",
                date: "March/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Último dia para <b>envio</b> das informações do módulo Demonstrações Contábeis Aplicadas ao Setor Público (DCASP) relativas ao <b>encerramento do exercício anterior</b>, em formato PDF de cada órgão (art. 10, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: "March/31/2022",
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Último dia para que o Prefeito Municipal efetue o <b>envio</b> das informações do módulo Demonstrações Contábeis Aplicadas ao Setor Público consolidadas do município, juntamente com os documentos especificados nos anexos I a VIII, da INTC n° 04/2017 (art. 10, § 1º, da INTC nº 03/2015, alterada pela INTC nº 02/2017 e art. 2º, §2°, da INTC nº 04/2017), para comporem a <b>Prestação de Contas Anual</b> do exercício anterior.",
                date: "March/31/2022",
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Último dia de período para <b>reenvio</b> das informações do módulo Demonstrações Contábeis Aplicadas ao Setor Público para comporem a <b>Prestação de Contas Anual</b> do exercício anterior.",
                date: "March/31/2022",
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/03 a 31/03 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>fevereiro</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["March/01/2022","March/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/03 a 31/03 - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal (AM) relativas ao mês de <b>fevereiro</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017)",
                date: ["March/01/2022","March/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/03 a 17/03 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>janeiro</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["March/08/2022","March/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "19/03 a 31/03 - Período para <b>reenvio</b> das remessas do módulo Acompanhamento Mensal (AM) do <b>exercício anterior</b>, para fins de prestação de contas (art. 3º, §1º, da INTC 04/2017). <br><b>ATENÇÃO! Encerrado o prazo final para reenvio das informações em 31 de março, o último relatório consolidado será considerado como base para a análise da prestação de contas anual (art. 3°, §3°, da INTC Nº 04/2017).</b>",
                date: ["March/19/2022","February/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["March/01/2022","April/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/03 a 31/03 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>fevereiro</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["March/01/2022","March/31/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Abril 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/04 a 17/04 - Período para <b>substituição</b> de remessa das informações <b>(ref. Fevereiro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["April/08/2022","April/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/04 a 30/04 - Período para <b>envio</b> de remessa das informações <b>(ref. Março/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["April/01/2022","April/30/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/04 a 10/05 - Período para <b>envio</b> de remessa das informações <b>(ref. Março/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["April/01/2021","May/10/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/04 a 30/04 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>março</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["April/01/2022","April/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/04 a 30/04 - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal (AM) relativas ao mês de <b>março</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017)",
                date: ["April/01/2022","April/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/04 a 17/04 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>fevereiro</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["April/08/2022","April/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "21/04 a 28/04 - Período destinado ao <b>último reenvio</b> permitido das informações do Acompanhamento Mensal (AM) relativas aos meses de <b>janeiro e fevereiro do exercício atual</b> (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Após esse prazo, as informações serão consideradas validadas e não mais poderão ser alteradas (art. 15, § 2º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b> <br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["April/21/2022","April/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/04 a 15/04 - Período para o chefe do Poder Executivo <b>requerer</b> a alteração de dados do módulo DCASP do exercício anterior após 31 de março no Portal do Sicom, por meio da funcionalidade 'Autorizar Substituta-PCA/Ano Referência - INTC n° 04/2017' (art. 3º, §4º, da INTC nº 04/2017). <br> <b>ATENÇÃO! Esta substituição deverá ocorrer em até 05 dias úteis da data da autorização.</b>",
                date: ["April01/2022","April/15/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Exec Municipal",
                description: "01/04 a 15/04 - Período para o chefe do Poder Executivo <b>requerer</b> a alteração de dados dos arquivos do AM do exercício anterior após 31 de março no Portal do Sicom, por meio da funcionalidade 'Autorizar Substituta-PCA/Ano Referência - INTC n° 04/2017' (art. 3º, §4º, da INTC nº 04/2017). <br> <b>ATENÇÃO! Esta substituição deverá ocorrer em até 05 dias úteis da data da autorização.</b>",
                date: ["April/01/2022","April/15/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["April/01/2022","May/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/04 a 30/04 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>março</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["April/01/2022","April/30/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Maio 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/05 a 17/05 - Período para <b>substituição</b> de remessa das informações <b>(ref. Março/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["May/08/2022","May/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/05 a 31/05 - Período para <b>envio</b> de remessa das informações <b>(ref. Abril/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["May/01/2022","May/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/05 a 09/06 - Período para <b>envio</b> de remessa das informações <b>(ref. Abril/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["May/01/2021","June/09/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec e Legis Mun.",
                description: "Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>1º quadrimestre do exercício atual</b>, para municípios <b>com mais de 50.000 habitantes</b> e para municípios <b>não optantes</b> pelo envio semestral (art. 54 c/c art. 55, § 2º da LRF).",
                date: "May/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>2º bimestre do exercício atual</b> (art. 165, § 3º da C.R/88 c/c o art. 52 da LRF).",
                date: "May/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para realização de audiência pública para demonstrar e avaliar o cumprimento das metas fiscais do <b>1º quadrimestre do exercício atual</b> (art. 9º, § 4º da LRF).",
                date: "May/31/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/05 a 31/05 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>abril</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["May/01/2022","May/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/05 a 31/05 - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal (AM) relativas ao mês de <b>abril</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017)",
                date: ["May/01/2022","May/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/05 a 17/05 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>março</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["May/08/2022","May/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["May/01/2022","June/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/04 a 31/04 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>abril</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["May/01/2022","May/31/2022"],
                type: "event",
                color: "#00d1d1"
            },


             // Junho 2022
             {
                id: "capmg",
                name: "CAPMG",
                description: "08/06 a 17/06 - Período para <b>substituição</b> de remessa das informações <b>(ref. Abril/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["June/08/2022","June/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/06 a 31/06 - Período para <b>envio</b> de remessa das informações <b>(ref. Maio/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["June/01/2022","June/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/06 a 11/07 - Período para <b>envio</b> de remessa das informações <b>(ref. Maio/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["June/01/2021","July/11/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/06 a 30/06 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>maio</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["June/01/2022","June/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/06 a 30/06 - Período para <b>envio</b> das informações relativas ao módulo Acompanhamento Mensal (AM) do mês de <b>maio</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["June/01/2022","June/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/06 a 17/06 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>abril</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["June/08/2022","June/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "21/06 a 28/06 - Período destinado ao <b>último reenvio</b> permitido das informações do Acompanhamento Mensal (AM) relativas aos meses de <b>março e abril do exercício atual</b> (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Após esse prazo, as informações serão consideradas validadas e não mais poderão ser alteradas (art. 15, § 2º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b> <br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["June/21/2022","June/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["June/01/2022","July/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/06 a 30/06 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>maio</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["June/01/2022","June/30/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Julho 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/07 a 17/07 - Período para <b>substituição</b> de remessa das informações <b>(ref. Maio/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["July/08/2022","July/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/07 a 31/07 - Período para <b>envio</b> de remessa das informações <b>(ref. Junho/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["July/01/2022","July/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/07 a 09/08 - Período para <b>envio</b> de remessa das informações <b>(ref. Junho/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["July/01/2021","August/09/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec e Legis Mun.",
                description: "Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>1º semestre do exercício atual</b>, para municípios <b>com menos de 50.000 habitantes,</b> optantes pelo envio semestral (art.63, § 1º da LRF).",
                date: "July/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>3º bimestre do exercício atual</b> (art. 165, § 3º da C.R/88 c/c o art. 52 da LRF).",
                date: "July/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/07 a 31/07 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>junho</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015).</b>",
                date: ["July/01/2022","July/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/07 a 31/07 - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal (AM) relativas ao mês de <b>junho</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017)",
                date: ["July/01/2022","July/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/07 a 17/07 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>maio</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["July/08/2022","July/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["July/01/2022","August/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/07 a 31/07 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>junho</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["July/01/2022","July/31/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Agosto 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/08 a 17/08 - Período para <b>substituição</b> de remessa das informações <b>(ref. Junho/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["August/08/2022","August/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/08 a 31/08 - Período para <b>envio</b> de remessa das informações <b>(ref. Julho/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["August/01/2022","August/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/08 a 09/09 - Período para <b>envio</b> de remessa das informações <b>(ref. Julho/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["August/01/2021","September/09/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/08 a 31/08 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>julho</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["August/01/2022","August/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/08 a 31/08 - Período para <b>envio</b> das informações relativas ao módulo Acompanhamento Mensal (AM) do mês de <b>julho</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["August/01/2022","August/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/08 a 17/08 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>junho</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["August/08/2022","August/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "21/08 a 28/08 - Período destinado ao <b>último reenvio</b> permitido das informações do Acompanhamento Mensal (AM) relativas aos meses de <b>maio e junho do exercício atual</b> (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Após esse prazo, as informações serão consideradas validadas e não mais poderão ser alteradas (art. 15, § 2º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b> <br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["August/21/2022","August/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["August/01/2022","September/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/08 a 31/08 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>julho</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["August/01/2022","August/31/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Setembro 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/09 a 17/09 - Período para <b>substituição</b> de remessa das informações <b>(ref. Julho/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["September/08/2022","September/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/09 a 31/09 - Período para <b>envio</b> de remessa das informações <b>(ref. Agosto/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["September/01/2022","September/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/09 a 10/10 - Período para <b>envio</b> de remessa das informações <b>(ref. Agosto/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["September/01/2021","October/10/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec e Legis Mun.",
                description: "Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>2º quadrimestre do exercício atual</b>, para municípios <b>com mais de 50.000 habitantes</b> e para municípios <b>não optantes</b> pelo envio semestral (art. 54 c/c art. 55, § 2º da LRF).",
                date: "September/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>4º bimestre do exercício atual</b> (art. 165, § 3º da C.R/88 c/c o art. 52 da LRF).",
                date: "September/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para realização de audiência pública para demonstrar e avaliar <b>o cumprimento das metas fiscais do 2º quadrimestre do exercício atual</b> (art. 9º, § 4º da LRF).",
                date: "September/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/09 a 30/09 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>agosto</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["September/01/2022","September/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/09 a 30/09 - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal (AM) relativas ao mês de <b>agosto</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017)",
                date: ["September/01/2022","September/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/09 a 17/09 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>julho</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["September/08/2022","September/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["September/01/2022","October/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/09 a 30/09 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>agosto</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["September/01/2022","September/30/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Outubro 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/10 a 17/10 - Período para <b>substituição</b> de remessa das informações <b>(ref. Agosto/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["October/08/2022","October/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/10 a 31/10 - Período para <b>envio</b> de remessa das informações <b>(ref. Setembro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["October/01/2022","October/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/10 a 09/11 - Período para <b>envio</b> de remessa das informações <b>(ref. Setembro/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["October/01/2021","November/09/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/10 a 31/10 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>setembro</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["October/01/2022","October/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/10 a 31/10 - Período para <b>envio</b> das informações relativas ao módulo Acompanhamento Mensal (AM) do mês de <b>setembro</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["October/01/2022","October/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/10 a 17/10 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>agosto</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["October/08/2022","October/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "21/10 a 28/10 - Período destinado ao <b>último reenvio</b> permitido das informações do Acompanhamento Mensal (AM) relativas aos meses de <b>julho e agosto do exercício atual</b> (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Após esse prazo, as informações serão consideradas validadas e não mais poderão ser alteradas (art. 15, § 2º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b> <br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["October/21/2022","October/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["October/01/2022","November/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/10 a 31/10 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>setembro</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["October/01/2022","October/31/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // November 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/11 a 17/11 - Período para <b>substituição</b> de remessa das informações <b>(ref. Setembro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["November/08/2022","November/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/11 a 31/11 - Período para <b>envio</b> de remessa das informações <b>(ref. Outubro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["November/01/2022","November/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/11 a 12/12 - Período para <b>envio</b> de remessa das informações <b>(ref. Outubro/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["November/01/2021","December/12/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>5º bimestre do exercício atual</b> (art. 165, § 3º da C.R/88 c/c o art. 52 da LRF).",
                date: "November/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/11 a 30/11 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>outubro</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["November/01/2022","November/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/11 a 30/11 - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal (AM) relativas ao mês de <b>outubro</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017)",
                date: ["November/01/2022","November/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/11 a 17/11 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>setembro</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["November/08/2022","November/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["November/01/2022","December/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/11 a 30/11 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>agosto</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["November/01/2022","November/30/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Dezembro 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/12 a 17/12 - Período para <b>substituição</b> de remessa das informações <b>(ref. Outubro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["December/08/2022","December/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/10 a 31/10 - Período para <b>envio</b> de remessa das informações <b>(ref. Novembro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["December/01/2022","December/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/12 a 10/01 - Período para <b>envio</b> de remessa das informações <b>(ref. Novembro/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["December/01/2021","January/10/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/12 a 31/12 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>novembro</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["December/01/2022","December/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/12 a 31/12 - Período para <b>envio</b> das informações relativas ao módulo Acompanhamento Mensal (AM) do mês de <b>novembro</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["December/01/2022","December/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/12 a 17/12 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>outubro</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["December/08/2022","December/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "21/12 a 28/12 - Período destinado ao <b>último reenvio</b> permitido das informações do Acompanhamento Mensal (AM) relativas aos meses de <b>setembro e outubro do exercício atual</b> (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Após esse prazo, as informações serão consideradas validadas e não mais poderão ser alteradas (art. 15, § 2º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b> <br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["December/21/2022","December/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["December/01/2022","January/05/2023"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/12 a 31/12 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>novembro</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["December/01/2022","December/31/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Janeiro
        ]
    });
})