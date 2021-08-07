import { useState } from "react";

const Questions = [
  {
    id: 1,
    TrueOrFalse: true,
    text: "Il polso è localizzato distalmente al gomito",
  },
  {
    id: 2,
    TrueOrFalse: true,
    text: "Sia i linfociti B che i macrofagi e le cellule dendritiche sono in grado di presentare antigeni ai linfociti T helper attraverso MHC di classe II",
  },
  {
    id: 3,
    TrueOrFalse: true,
    text: "il tRNA possiede una tripletta che è complementare ad una tripletta di un mRNA",
  },
  {
    id: 4,
    TrueOrFalse: true,
    text: "Gli osteoblasti di una lamella ossea depongono fibre collagene parallele",
  },
  {
    id: 5,
    TrueOrFalse: false,
    text: "Una sezione del corpo realizzata secondo un piano sagittale può servire per mostrare la corteccia somatosensoriale nei due emisferi cerebrali",
  },
  {
    id: 6,
    TrueOrFalse: true,
    text: "I lipidi, oltre che come substrato energetico trovano impiego nella costituzione delle membrane cellulari",
  },
  {
    id: 7,
    TrueOrFalse: false,
    text: "la membrana plasmatica è formata da un singolo strato di fosfolipidi ",
  },
  {
    id: 8,
    TrueOrFalse: true,
    text: "la riproduzione sessuata garantisce un'elevata variabilità genica della specie",
  },
  {
    id: 9,
    TrueOrFalse: true,
    text: "la riproduzione non sessuata garantisce l'uniformità genica della specie",
  },
  { id: 10, TrueOrFalse: true, text: "La timina è una base azotata" },
  {
    id: 11,
    TrueOrFalse: false,
    text: "L'RNA è strutturalmente simile al DNA essendo entrambe le strutture organizzate a doppia elica antiparallela",
  },
  {
    id: 12,
    TrueOrFalse: true,
    text: "nel processo di sintesi proteica gli amminoacidi sono codificati da triplette di basi azotate",
  },
  {
    id: 13,
    TrueOrFalse: true,
    text: "il crossing over avviene durante la meiosi",
  },
  {
    id: 14,
    TrueOrFalse: false,
    text: "la riproduzione non sessuata garantisce un'elevata variabilità genica della specie",
  },
  {
    id: 15,
    TrueOrFalse: false,
    text: "Gli osteoblasti sono cellule presenti nel tessuto cartilagineo ",
  },
  {
    id: 16,
    TrueOrFalse: true,
    text: "i fibroblasti sono cellule del tessuto connettivo responsabili della produzione della matrice cellulare ",
  },
  {
    id: 17,
    TrueOrFalse: false,
    text: "la sintesi delle cellule del sistema immunitario avviene nel midollo spinale ",
  },
  {
    id: 18,
    TrueOrFalse: true,
    text: "La memoria immunologica garantisce risposte immunitarie più intense",
  },
  {
    id: 19,
    TrueOrFalse: true,
    text: "Il pepsinogeno è convertito in pepsina da alte concentrazioni di HCl",
  },
  {
    id: 20,
    TrueOrFalse: false,
    text: "La trachea visualizzata secondo un piano sagittale ha una forma circolare",
  },
  {
    id: 21,
    TrueOrFalse: true,
    text: "Le proteine dell’organismo sono in generale realizzate secondo una precisa combinazione di mattoni fondamentali detti amminoacidi",
  },
  {
    id: 22,
    TrueOrFalse: false,
    text: "i vasi linfatici sono sprovvisti di muscolatura liscia",
  },
  {
    id: 23,
    TrueOrFalse: false,
    text: "i plessi coriotidei sono la sede di produzione dell'ormone antidiuretico",
  },
  {
    id: 24,
    TrueOrFalse: true,
    text: "i plessi corioidei producono liquido cerebrospinale",
  },
  {
    id: 25,
    TrueOrFalse: true,
    text: "Il riflesso barocettivo può essere attivato da una forte emorragia",
  },
  {
    id: 26,
    TrueOrFalse: false,
    text: "Il riflesso barocettivo è il riflesso motorio che media la retrazione dell'arto inferiore quando il piede subisce uno stimolo dolorifico",
  },
  {
    id: 27,
    TrueOrFalse: false,
    text: "L'arco efferente è costituito esclusivamente dalla via parasimpatica (nervo vago) che innerva il cuore",
  },
  {
    id: 28,
    TrueOrFalse: false,
    text: "Il riflesso barocettivo origina dai chemocettori dell'arco aortico e dei glomi carotidei",
  },
  {
    id: 29,
    TrueOrFalse: false,
    text: "Il riflesso barocettivo è deputato a mantenere costante la pressione intrapleurica",
  },
  {
    id: 30,
    TrueOrFalse: true,
    text: "Il riflesso barocettivo è un meccanismo di regolazione relativamente rapido: tempo di intervento dell'ordine di qualche secondo",
  },
  {
    id: 31,
    TrueOrFalse: false,
    text: "Il riflesso barocettivo è tale per cui un aumento di pressione arteriosa sistemica provoca un aumento di frequenza cardiaca",
  },
  {
    id: 32,
    TrueOrFalse: true,
    text: "Il riflesso barocettivo influenza l'attività del sistema nervoso autonomo simpatico e parasimpatico",
  },
  {
    id: 33,
    TrueOrFalse: false,
    text: "le molecole di acqua diffondono allontanandosi da soluzione iperosmotiche",
  },
  {
    id: 34,
    TrueOrFalse: true,
    text: "I processi di diffusione semplice non richiedono dispendio di energia",
  },
  {
    id: 35,
    TrueOrFalse: false,
    text: "il solo regolatore dell'omeostasi è il sistema nervoso",
  },
  {
    id: 36,
    TrueOrFalse: true,
    text: "I meccanismi di trasporto attivo necessitano di pompe metaboliche",
  },
  {
    id: 37,
    TrueOrFalse: true,
    text: "A seguito della depolarizzazione della membrana della fibra muscolare, il reticolo sarcoplasmatico rilascia ioni Ca++ nel citoplasma",
  },
  {
    id: 38,
    TrueOrFalse: false,
    text: "Le cellule muscolari lisce consumano più energia si quelle striate durante le contrazioni muscolari",
  },
  {
    id: 39,
    TrueOrFalse: false,
    text: "Le molecole di neurotrasmettitore non vengono normalmente rimosse dagli spazi sinaptici in modo da aumentare la stimolazione postsinaptica",
  },
  {
    id: 40,
    TrueOrFalse: true,
    text: "L'esocitosi delle vescicole sinaptiche richiede la presenza di ioni calcio",
  },
  {
    id: 41,
    TrueOrFalse: false,
    text: "il dolore riferito si riferisce a stimoli applicati sulle ossa",
  },
  {
    id: 42,
    TrueOrFalse: false,
    text: "Gli stimoli dolorifici interferiscono e sovrastano le sensazioni tattili",
  },
  {
    id: 43,
    TrueOrFalse: true,
    text: "L'ipotalamo è un importante sede di controllo di funzioni vegetative come il controllo della temperatura e dell'osmolarità",
  },
  {
    id: 44,
    TrueOrFalse: false,
    text: "Nel corso di un processo infiammatorio le cellule del sistema immunitario specifico intervengono per prime",
  },
  {
    id: 45,
    TrueOrFalse: true,
    text: "Nel corso di un processo infiammatorio le cellule del sistema aspecifico secernono citochine",
  },
  {
    id: 46,
    TrueOrFalse: false,
    text: "Nel corso di un processo infiammatorio non si ha aumento di permeabilità dei vasi ematici",
  },
  {
    id: 47,
    TrueOrFalse: true,
    text: "Nel corso di un processo infiammatorio si assiste ad un incremento di temperatura e ad un aumento del rossore dell'area interessata dalla lesione",
  },
  {
    id: 48,
    TrueOrFalse: true,
    text: "Il reticolo endoplasmatico granulare è detto anche rugoso",
  },
  {
    id: 49,
    TrueOrFalse: false,
    text: "Il reticolo endoplasmatico granulare è coinvolo nella sintesi lipidica",
  },
  {
    id: 50,
    TrueOrFalse: true,
    text: "Il reticolo endoplasmatico granulare è coinvolto nella sintesi proteica",
  },
  {
    id: 51,
    TrueOrFalse: false,
    text: "Il reticolo endoplasmatico granulare è detto rugoso perchè sulla sua superficie sono presenti lipidi",
  },
  {
    id: 52,
    TrueOrFalse: false,
    text: "Tra i meccanismi di trasporto attivo, a livello della membrana cellulare rientra quello della pompa sodio-potassio: una proteina di membrana che trasporta sodio all’interno della cellula e potassio in direzione opposta. (Na fuori K interno)",
  },
  {
    id: 53,
    TrueOrFalse: false,
    text: "Due soluzioni A e B di KCl sono separate da una membrana permeabile solo al Cloro. In A la concentrazione di KCL (completamente dissociato) è inizialmente doppia che in B, a regime la concentrazione di Cl- è uguale nelle due soluzioni",
  },
  {
    id: 54,
    TrueOrFalse: true,
    text: "Due soluzioni A e B di KCl sono separate da una membrana permeabile solo al Cloro. In A la concentrazione di KCL (completamente dissociato) è inizialmente doppia che in B, a regime la soluzione A è carica positivamente e la soluzione B è carica negativamente",
  },
  {
    id: 55,
    TrueOrFalse: true,
    text: "Due soluzioni A e B di KCl sono separate da una membrana permeabile solo al Cloro. In A la concentrazione di KCL (completamente dissociato) è inizialmente doppia che in B, a regime esiste una differenza di pressione osmotica tra A e B",
  },
  {
    id: 56,
    TrueOrFalse: true,
    text: "Due soluzioni A e B di KCl sono separate da una membrana permeabile solo al Cloro. In A la concentrazione di KCL (completamente dissociato) è inizialmente doppia che in B, a regime esiste una differenza di potenziale tra A e B che dipende dal rapporto tra le concentrazioni di Cloro in A e in B",
  },
  {
    id: 57,
    TrueOrFalse: false,
    text: "Due soluzioni A e B di NaCl sono separate da una membrana permeabile solo al sodio. Inizialmente ho un flusso di Na+ da A verso B e di Cl- in direzione opposta",
  },
  {
    id: 58,
    TrueOrFalse: true,
    text: "Due soluzioni A e B di NaCl in acqua sono separate da una membrana permeabile solo allo ione sodio; inizialmente la concentrazione di sale nella soluzione A è il doppio di quella in B. A regime la concentrazione di sodio in A è maggiore della concentrazione di sodio in B",
  },
  {
    id: 59,
    TrueOrFalse: false,
    text: "Due soluzioni A e B di NaCl in acqua sono separate da una membrana permeabile solo allo ione sodio; inizialmente la concentrazione di sale nella soluzione A è il doppio di quella in B. A regime la soluzione A è carica positivamente e la soluzione B negativamente",
  },
  {
    id: 60,
    TrueOrFalse: false,
    text: "Due soluzioni A e B di NaCl in acqua sono separate da una membrana permeabile solo allo ione sodio; inizialmente la concentrazione di sale nella soluzione A è il doppio di quella in B. A regime si stabilisce una differenza di potenziale tra le due soluzioni Va-Vb>0",
  },
  {
    id: 61,
    TrueOrFalse: true,
    text: "A tremila metri di altezza sul livello del mare. La percentuale di ossigeno nell'aria è sostanzialmente la stessa che sul livello del mare",
  },
  {
    id: 62,
    TrueOrFalse: false,
    text: "A tremila metri di altezza sul livello del mare la percentuale di ossigeno nell'aria è minore che sul livello del mare",
  },
  {
    id: 63,
    TrueOrFalse: true,
    text: "A tremila metri di altezza sul livello del mare la pressione parziale dell'ossigeno nell'aria è inferiore a quella che si osserva a livello del mare",
  },
  {
    id: 64,
    TrueOrFalse: false,
    text: "A tremila metri di altezza sul livello del mare la pressione parziale di ossigeno nell'aria è pari alla pressione parziale di CO2",
  },
  {
    id: 65,
    TrueOrFalse: true,
    text: "A tremila metri di altezza sul livello del mare la ventilazione aumenta leggermente, grazie al riflesso chemocettivo",
  },
  {
    id: 66,
    TrueOrFalse: true,
    text: "A tremila metri di altezza sul livello del mare il rene compensa lo squilibrio del PH diminuendo la concentrazione ematica di HCO3-",
  },
  {
    id: 67,
    TrueOrFalse: true,
    text: "A tremila metri di altezza sul livello del mare la concentrazione di CO2 nel sangue è più bassa del normale",
  },
  {
    id: 68,
    TrueOrFalse: false,
    text: "A tremila metri di altezza sul livello del mare. L'individuo non acclimatato sviluppa acidosi respiratoria",
  },
  {
    id: 69,
    TrueOrFalse: false,
    text: "A tremila metri di altezza sul livello del mare. Nell'individuo non acclimatato il pH urinario si abbassa",
  },
  {
    id: 70,
    TrueOrFalse: false,
    text: "A tremila metri di altezza sul livello del mare. Dopo qualche giorno di acclimatazione la concentrazione plasmatica di HCO3- aumenta",
  },
  {
    id: 71,
    TrueOrFalse: true,
    text: "Il potenziale di recettore quando supera un livello soglia dà luogo ad una sequenza di potenziali d'azione ad una frequenza che dipende dall'intensità di stimolazione ",
  },
  {
    id: 72,
    TrueOrFalse: false,
    text: "il potenziale di recettore è caratterizzato da un periodo refrattario di 1ms ",
  },
  {
    id: 73,
    TrueOrFalse: true,
    text: "Un potenziale post sinaptico inibitorio può essere causato dall'apertura di canali del potassio ligando dipendenti ",
  },
  {
    id: 74,
    TrueOrFalse: false,
    text: "Lo sviluppo di un potenziale post sinaptico eccitatorio è condizionato all'ingresso di ioni calcio nella cellula postsinaptica",
  },
  {
    id: 75,
    TrueOrFalse: false,
    text: "Il potenziale di equilibrio del potassio è 0 mV",
  },
  {
    id: 76,
    TrueOrFalse: false,
    text: "Le concentrazioni intracellulari di sodio e potassio sono mantenute costanti dalla pompa sodio potassio",
  },
  {
    id: 77,
    TrueOrFalse: true,
    text: "Il recettore postsinaptico può essere un canale ligando dipendente",
  },
  {
    id: 78,
    TrueOrFalse: true,
    text: "il rilascio di neurotrasmettitore avviene solo a seguito della depolarizzazione del terminale presinaptico",
  },
  {
    id: 79,
    TrueOrFalse: false,
    text: "Il potenziale di recettore quando supera un valore soglia dà luogo ad una sequenza di potenziali d'azione ad una frequenza che dipende dall'intensità dello stimolo",
  },
  {
    id: 80,
    TrueOrFalse: false,
    text: "Il potenziale di recettore è caratterizzato da un periodo refrattario assoluto dell'ordine di 1ms",
  },
  {
    id: 81,
    TrueOrFalse: true,
    text: "Nella fase di discesa (ripolarizzazione) del potenziale d'azione la membrana è permeabile principalmente al potassio",
  },
  {
    id: 82,
    TrueOrFalse: true,
    text: "il potenziale di equilibrio del potassio è circa di -90 mV ",
  },
  {
    id: 83,
    TrueOrFalse: false,
    text: "Una cellula permeabile selettivamente al sodio sviluppa un potenziale interno negativo",
  },
  {
    id: 84,
    TrueOrFalse: false,
    text: "La soglia è il massimo potenziale d'azione raggiunto dal potenziale d'azione da cui poi parte il potenziale",
  },
  {
    id: 85,
    TrueOrFalse: true,
    text: "Nella fase di salita del potenziale d'azione (depolarizzazione) la membrana è permeabile principalmente al sodio",
  },
  {
    id: 86,
    TrueOrFalse: false,
    text: "La legge del tutto o nulla riguarda i potenziali graduati",
  },
  {
    id: 87,
    TrueOrFalse: false,
    text: "I potenziali d'azione si possono sommare",
  },
  {
    id: 88,
    TrueOrFalse: true,
    text: "La mielina consente maggiori velocità di propagazione di potenziali d'azione",
  },
  {
    id: 89,
    TrueOrFalse: false,
    text: "Nelle fibre non mieliniche i canali per il sodio si trovano solo nei nodi di Ranvier",
  },
  {
    id: 90,
    TrueOrFalse: true,
    text: "Il potenziale d'azione segue la legge del tutto o nulla",
  },
  {
    id: 91,
    TrueOrFalse: false,
    text: "il fenomeno della sommazione riguarda i potenziali d'azione ",
  },
  {
    id: 92,
    TrueOrFalse: false,
    text: "I potenziali d'azione negli assoni mielinici viaggiano alla stessa velocità che in quelli amielinici ma raggiungono distanze più veloci ",
  },
  {
    id: 93,
    TrueOrFalse: true,
    text: "I potenziali graduati diminuiscono d'ampiezza propagandosi",
  },
  {
    id: 94,
    TrueOrFalse: false,
    text: "L'esocitosi delle vescicole sinaptiche è scatenata dall'ingresso di ioni potassio",
  },
  {
    id: 95,
    TrueOrFalse: true,
    text: "il neurotrasmettitore attraversa lo spazio sinaptico per diffusione semplice ",
  },
  {
    id: 96,
    TrueOrFalse: true,
    text: "I potenziali sinaptici lenti sono mediati da proteine-G e secondi messaggeri",
  },
  {
    id: 97,
    TrueOrFalse: false,
    text: "i potenziali sinaptici veloci sono mediati da proteine-G e secondi messaggeri",
  },
  {
    id: 98,
    TrueOrFalse: false,
    text: "Nella sommazione spaziale i potenziali sinaptici di una sola sinapsi si sommano nel tempo",
  },
  {
    id: 99,
    TrueOrFalse: false,
    text: "Il neurotrasmettitore attraversa lo spazio sinaptico per trasporto attivo",
  },
  {
    id: 100,
    TrueOrFalse: false,
    text: "Il neurotrasmettitore per agire deve entrare nella cellula postsinaptica",
  },
  {
    id: 101,
    TrueOrFalse: true,
    text: "Nella sommazione spaziale si sommano i potenziali sinaptici di due o più sinapsi",
  },
  {
    id: 102,
    TrueOrFalse: true,
    text: "In alcune cellule dell'organismo umano il potenziale d'azione può durare 300ms ",
  },
  {
    id: 103,
    TrueOrFalse: false,
    text: "Il potenziale d'azione è caratterizzato da un rapido ingresso di ioni potassio all'interno della cellula seguito da una rapida fuoriuscita di ioni sodio",
  },
  {
    id: 104,
    TrueOrFalse: false,
    text: "le fibre nervose mielinche sono caratterizzate da un diametro maggiore e velocità di conduzione minore delle fibre amieliniche ",
  },
  {
    id: 105,
    TrueOrFalse: false,
    text: "Il potenziale post sinaptico eccitatorio è una diminuzione del potenziale di membrana del neurone post sinaptico ",
  },
  {
    id: 106,
    TrueOrFalse: false,
    text: "La sintesi del neurotrasmettitore può avvenire solo a livello del nucleo cellulare. Dedicati sistemi di trasporto si occupano di far pervenire il neurotrasmettitore a livello delle terminazioni assoniche",
  },
  {
    id: 107,
    TrueOrFalse: false,
    text: "L'esocitosi che si verifica durante una trasmissione sinaptica esaurisce la disponibilità di vescicole contenenti neurotrasmettitore nel terminale presinaptico ",
  },
  {
    id: 108,
    TrueOrFalse: true,
    text: "Il terminale presinaptico rilascia neurotrasmettitore nello spazio sinaptico attraverso un processo di esocitosi ogni volta che viene raggiunto un potenziale d'azione",
  },
  {
    id: 109,
    TrueOrFalse: false,
    text: "L'ingresso di calcio nel terminale postsinaptico è un processo necessario per arrivare all'esocitosi del neurotrasmettitore ",
  },
  {
    id: 110,
    TrueOrFalse: false,
    text: "A livello post sinaptico si sviluppa solitamente un potenziale locale (potenziale post sinaptico) che dà sempre luogo ad un potenziale d'azione",
  },
  {
    id: 111,
    TrueOrFalse: false,
    text: "I potenziali post sinaptici sono fenomeni tutto o nulla che non possono sommarsi tra loro ",
  },
  {
    id: 112,
    TrueOrFalse: true,
    text: "il potenziale di membrana dipende dalla disposizione di alcuni ioni sulle due facce della membrana",
  },
  {
    id: 113,
    TrueOrFalse: false,
    text: "il potenziale di riposo è quasi interamente spiegabile come potenziale di diffusione del sodio",
  },
  {
    id: 114,
    TrueOrFalse: true,
    text: "La soglia è il potenziale a cui si innesca il potenziale d'azione",
  },
  {
    id: 115,
    TrueOrFalse: true,
    text: "Per uno stesso neurone i potenziali d'azione hanno sempre la stessa velocità di conduzione",
  },
  {
    id: 116,
    TrueOrFalse: true,
    text: "I potenziali graduati si disperdono propagandosi",
  },
  {
    id: 117,
    TrueOrFalse: true,
    text: "I potenziali graduati sono potenziali postsinaptici",
  },
  {
    id: 118,
    TrueOrFalse: false,
    text: "La perdita di mielina non influenza il funzionamento del sistema nervoso",
  },
  {
    id: 119,
    TrueOrFalse: true,
    text: "I potenziali post sinaptici si possono sommare",
  },
  {
    id: 120,
    TrueOrFalse: false,
    text: "Il neurotrasmettitore rilasciato dal terminale presinaptico permea all'interno della cellula postsinaptica e raggiunge il nucleo",
  },
  {
    id: 121,
    TrueOrFalse: true,
    text: "Il recettore postsinaptico si lega al neurotrasmettitore e regola l'apertura di un canale ionico",
  },
  {
    id: 122,
    TrueOrFalse: false,
    text: "Le vescicole all'interno del terminale presinaptico contengono ioni calcio in elevata concentrazione",
  },
  {
    id: 123,
    TrueOrFalse: true,
    text: "lo sviluppo di un potenziale postsinaptico avviene solo a seguito del superamento di un certo valore soglia da parte del potenziale di membrana della cellula postsinaptica",
  },
  {
    id: 124,
    TrueOrFalse: true,
    text: "La presenza di enzimi nello spazio sinaptico può servire a inattivare rapidamente il neurotrasmettitore",
  },
  {
    id: 125,
    TrueOrFalse: true,
    text: "Un potenziale post sinaptico inibitorio può essere causato dall'apertura di canali del potassio ligando-dipendenti",
  },
  {
    id: 126,
    TrueOrFalse: false,
    text: "Lo sviluppo di un potenziale post-sinaptico eccitatorio è condizionato dall'ingresso di ioni calcio nella cellula post-sinaptica",
  },
  {
    id: 127,
    TrueOrFalse: false,
    text: "La sintesi di neurotrasmettitore può avvenire solo a livello del nucleo cellulare. Dedicati sistemi di trasporto si occupano di far pervenire il neurotrasmettitore a livello delle terminazioni assoniche",
  },
  {
    id: 128,
    TrueOrFalse: false,
    text: "L'esocitosi, che si verifica durante una trasmissione sinaptica, esaurisce la disponibilità di vescicole contenenti neurotrasmettitore nel terminale pre-sinaptico",
  },
  {
    id: 129,
    TrueOrFalse: true,
    text: "Il recettore post sinaptico può essere un canale ionico 'ligando-dipendente'",
  },
  {
    id: 130,
    TrueOrFalse: true,
    text: "Il rilascio di un neurotrasmettitore avviene solo a seguito della depolarizzazione del terminale presinaptico",
  },
  -{
    id: 131,
    TrueOrFalse: false,
    text: "in un neurone a riposo il numero di canali per il Na+ aperti è alto mentre quello dei canali per il K+ è basso",
  },
  {
    id: 132,
    TrueOrFalse: true,
    text: "Aumentando la concentrazione di K+ esterno da 4 a 40mM si porta il potenziale di riposo del K+ verso valori meno negativi",
  },
  {
    id: 133,
    TrueOrFalse: true,
    text: "A determinare il valore del potenziale di membrana di una cellula eccitabile contribuisce il numero di ioni permeanti attraverso canali ionici aperti a riposo",
  },
  {
    id: 134,
    TrueOrFalse: false,
    text: "Al potenziale di equilibrio del Na+ (+62mv) la corrente del Na+ è entrante",
  },
  {
    id: 135,
    TrueOrFalse: false,
    text: "Durante il potenziale d'azione i canali del K+ si aprono prima di quelli del Na+ ",
  },
  {
    id: 136,
    TrueOrFalse: true,
    text: "In un neurone l'attivazione dei canali per il Na+ è responsabile della fase di depolarizzazione del potenziale d'azione",
  },
  {
    id: 137,
    TrueOrFalse: true,
    text: "Assoni con diametri più grandi conducono il potenziale d'azione più velocemente rispetto ad assoni con diametri più piccoli",
  },
  {
    id: 138,
    TrueOrFalse: false,
    text: "Il nodo di Ranvier contiene una bassa concentrazione di canali per il Na+ e quindi non genera potenziali d'azione",
  },
  {
    id: 139,
    TrueOrFalse: true,
    text: "Le fibre postgangliari simpatiche rilasciano catecolamine",
  },
  {
    id: 140,
    TrueOrFalse: true,
    text: "La glia svolge, tra le altre, un'importante funzione di regolazione della concentrazione di potassio",
  },
  {
    id: 141,
    TrueOrFalse: false,
    text: "I due emisferi cerebrali nell'uomo sono in connessione anatomica tra loro a livello del talamo",
  },
  {
    id: 142,
    TrueOrFalse: true,
    text: "Gli esperimenti condotti su animali decorticati (privati della corteccia cerebrale) dimostrano che le azioni come il camminare sono solo in parte soggetti ad un controllo corticale",
  },
  {
    id: 143,
    TrueOrFalse: true,
    text: "I fusi neuromuscolari svolgono una funzione sensoriale di rilevamento del grado di distensione del muscolo",
  },
  {
    id: 144,
    TrueOrFalse: false,
    text: "All'arrivo del potenziale d'azione i tubuli T rilasciano grandi quantità di Ca nel citoplasma",
  },
  {
    id: 145,
    TrueOrFalse: false,
    text: "La contrazione che si sviluppa a seguito di un singolo potenziale d'azione (scossa singola) dura circa 1-2 s",
  },
  {
    id: 146,
    TrueOrFalse: false,
    text: "la condizione di massimo accorciamento del muscolo (minima lunghezza) è quella in cui il muscolo sviluppa forza massima ",
  },
  {
    id: 147,
    TrueOrFalse: true,
    text: "nella contrazione muscolare una parte di energia è spesa per riportare il calcio nel reticolo endoplasmatico",
  },
  {
    id: 148,
    TrueOrFalse: true,
    text: "La contrazione muscolare è conseguenza del rilascio di calcio nel citoplasma",
  },
  {
    id: 149,
    TrueOrFalse: false,
    text: "La contrazione termina quando la cellula si ripolarizza",
  },
  {
    id: 150,
    TrueOrFalse: false,
    text: "La contrazione del muscolo può essere impedita da farmaci che bloccano i recettori dell'adrenalina",
  },
  {
    id: 151,
    TrueOrFalse: true,
    text: "Le unità motorie più piccole sono generalmente di tipo tonico (rosse)",
  },
  {
    id: 152,
    TrueOrFalse: true,
    text: "Le unità motorie pallide (fasiche) si affaticano più facilmente di quelle toniche (rosse)",
  },
  {
    id: 153,
    TrueOrFalse: true,
    text: "L'unità motoria è definita come l'insieme di un motoneurone e di tutte le fibre muscolari da esso innervate",
  },
  {
    id: 154,
    TrueOrFalse: true,
    text: "Una fibra muscolare può essere innervata da un solo motoneurone",
  },
  {
    id: 155,
    TrueOrFalse: false,
    text: "L'accoppiamento di actina e miosina è innescato dall'ingresso di ioni cloro nella cellula muscolare ",
  },
  {
    id: 156,
    TrueOrFalse: false,
    text: "I tubuli T contengono citoplasma e ioni calcio in concentrazione elevata",
  },
  {
    id: 157,
    TrueOrFalse: false,
    text: "Un singolo impulso elettrico evoca una contrazione muscolare della durata di circa 1ms ",
  },
  {
    id: 158,
    TrueOrFalse: true,
    text: "La contrazione della fibra muscolare si sviluppa nei motoneuroni localizzati nel midollo spinale",
  },
  {
    id: 159,
    TrueOrFalse: false,
    text: "le fibre muscolari sono innervate da motoneuroni localizzati nella corteccia motoria primaria",
  },
  {
    id: 160,
    TrueOrFalse: false,
    text: "a livello della placca muscolare viene rilasciato il neurotrasmettitore adrenalina",
  },
  {
    id: 161,
    TrueOrFalse: true,
    text: "il curaro è una sostanza chimica che blocca la trasmissione sinaptica a livello della placca muscolare",
  },
  {
    id: 162,
    TrueOrFalse: true,
    text: "lo ione calcio ha un ruolo importante nel meccanismo contrattile in quanto la sua presenza nel citoplasma permette l'accoppiamento tra i filamenti di actina e di miosina",
  },
  {
    id: 163,
    TrueOrFalse: false,
    text: "durante la contrazione i singoli sarcomeri si accorciano grazie all'accorciamento dei filamenti di miosina (filamenti spessi)",
  },
  {
    id: 164,
    TrueOrFalse: true,
    text: "Per afferrare un oggetto con la mano sinistra attivo la corteccia motoria di destra",
  },
  {
    id: 165,
    TrueOrFalse: true,
    text: "uno stimolo dolorifico alla mano provoca un riflesso di retrazione che comporta la flessione del gomito",
  },
  {
    id: 166,
    TrueOrFalse: false,
    text: "una risposta motoria riflessa è mediata da un circuito nervoso di almeno 3 neuroni in serie",
  },
  {
    id: 167,
    TrueOrFalse: true,
    text: "La forza sviluppata da un muscolo dipende dal numero di unità motorie reclutate",
  },
  {
    id: 168,
    TrueOrFalse: true,
    text: "La forza sviluppata da un muscolo dipende dalla frequenza (numero di potenziali d'azione al secondo) con cui vengono attivate le sue unità motorie",
  },
  {
    id: 169,
    TrueOrFalse: true,
    text: "La forza sviluppata da un muscolo dipende dallo stato di allungamento con cui il muscolo si trova a lavorare",
  },
  {
    id: 170,
    TrueOrFalse: true,
    text: "La forza sviluppata da un muscolo dipende dalla concentrazione di calcio raggiunta durante la contrazione nelle fibre muscolari",
  },
  {
    id: 171,
    TrueOrFalse: false,
    text: "Una risposta riflessa ad uno stimolo è sempre mediata da un circuito di almeno tre neuroni in serie ",
  },
  {
    id: 172,
    TrueOrFalse: true,
    text: "una risposta riflessa ad uno stimolo può consistere nella contrazione simultanea di alcuni muscoli e nel rilasciamento di altri",
  },
  {
    id: 173,
    TrueOrFalse: true,
    text: "Una risposta riflessa ad uno stimolo può coinvolgere la muscolatura liscia, scheletrica, cardiaca oppure l'attività secretoria di una ghiandola",
  },
  {
    id: 174,
    TrueOrFalse: false,
    text: "Quando la cute è soggetta ad uno stimolo di pressione, a livello del recettore si generano potenziali d’azione di ampiezza proporzionale all'intensità dello stimolo",
  },
  {
    id: 175,
    TrueOrFalse: true,
    text: "quando la cute è soggetta ad uno stimolo di pressione a livello del recettore si generano potenziali di recettore la cui ampiezza dipende dall'intensità di stimolazione",
  },
  {
    id: 176,
    TrueOrFalse: true,
    text: "La discriminazione spaziale è la capacità di distinguere come distinti due stimoli dati contemporaneamente in punti vicini",
  },
  {
    id: 177,
    TrueOrFalse: true,
    text: "La soglia di discriminazione spaziale dipende dalla densità di recettori nel distretto cutaneo interessato",
  },
  {
    id: 178,
    TrueOrFalse: true,
    text: "(NON SO LA VERA RISPOSTA) In un recettore cutaneo soggetto ad uno stimolo si possono generare potenziali d'azione ad una frequenza che dipende dall'intensità di stimolazione",
  },
  {
    id: 179,
    TrueOrFalse: false,
    text: "Il recettore a rapido adattamento è quello che mantiene una frequenza di scarica (di potenziali d'azione) costante in risposta ad uno stimolo costante (mantenuto nel tempo)",
  },
  {
    id: 180,
    TrueOrFalse: false,
    text: "Una risposta riflessa ad uno stimolo è sempre mediata da un circuito di tre neuroni in serie",
  },
  {
    id: 181,
    TrueOrFalse: true,
    text: "Una risposta riflessa ad uno stimolo può consistere nella contrazione simultanea di alcuni muscoli e nel rilasciamento di altri",
  },
  {
    id: 182,
    TrueOrFalse: true,
    text: "Una risposta riflessa ad uno stimolo può coinvolgere l'attività della muscolatura scheletrica, liscia, cardiaca oppure l'attività secretoria di una ghiandola",
  },
  {
    id: 183,
    TrueOrFalse: true,
    text: "Una risposta riflessa ad uno stimolo ha una latenza rispetto allo stimolo che dipende dalla velocità delle fibre nervose dell'arco afferente ed efferente",
  },
  {
    id: 184,
    TrueOrFalse: false,
    text: "In una risposta riflessa ad uno stimolo si genera un potenziale di recettore che dà luogo sempre ad almeno un potenziale d'azione",
  },
  {
    id: 185,
    TrueOrFalse: true,
    text: "In una risposta riflessa ad uno stimolo si genera un potenziale di recettore che si propaga elettrotonicamente fino al corpo cellulare del neurone",
  },
  {
    id: 186,
    TrueOrFalse: false,
    text: "In una risposta riflessa ad uno stimolo si possono generare potenziali d'azione di ampiezza progressivamente ridotta a seconda delle proprietà di adattamento del recettore",
  },
  {
    id: 187,
    TrueOrFalse: true,
    text: "In una risposta riflessa ad uno stimolo si possono generare potenziali d'azione ad una frequenza che dipende dall'intensità della stimolazione",
  },
  {
    id: 188,
    TrueOrFalse: false,
    text: "Le fibre simpatiche che innervano il cuore hanno il loro corpo cellulare (soma) nel midollo spinale",
  },
  {
    id: 189,
    TrueOrFalse: false,
    text: "I motoneuroni alfa che innervano i muscoli scheletrici hanno il loro corpo cellulare e i gangli annessi alle radici dorsali del midollo spinale ",
  },
  {
    id: 190,
    TrueOrFalse: true,
    text: "In generale il sistema parasimpatico rilascia a livello dell'effettore il neurotrasmettitore acetilcolina",
  },
  {
    id: 191,
    TrueOrFalse: true,
    text: "Adrenalina e noradrenalina agiscono sugli stessi recettori di membrana",
  },
  {
    id: 192,
    TrueOrFalse: false,
    text: "I movimenti posturali, che garantiscono il mantenimento della postura e dell'equilibrio dell'organismo nelle diverse situazioni sono pianificati nel dettaglio della corteccia motoria",
  },
  {
    id: 193,
    TrueOrFalse: false,
    text: "Durante l'intero ciclo cardiaco le valvole semilunari sono chiuse",
  },
  {
    id: 194,
    TrueOrFalse: false,
    text: "Il fascio di His impone la frequenza cardiaca",
  },
  {
    id: 195,
    TrueOrFalse: false,
    text: "La sistole ventricolare è localizzata tra l'onda Q e la fine dell'onda R dell'elettrocardiogramma",
  },
  {
    id: 196,
    TrueOrFalse: false,
    text: "l'onda T dell'ECG corrisponde alla depolarizzazione dei ventricoli",
  },
  {
    id: 197,
    TrueOrFalse: true,
    text: "il sistema ortosimpatico attivandosi provoca una restrizione delle resistenze periferiche",
  },
  {
    id: 198,
    TrueOrFalse: true,
    text: "La propagazione dell'onda depolarizzante nel cuore è controllata dal sistema di conduzione cardiaco",
  },
  {
    id: 199,
    TrueOrFalse: false,
    text: "i potenziali elettrici delle cellule pace-maker e contrattili hanno le stesse caratteristiche (cinetica, correnti ioniche)",
  },
  {
    id: 200,
    TrueOrFalse: false,
    text: "L'ECG rileva l'attività meccanica del cuore",
  },
  {
    id: 201,
    TrueOrFalse: false,
    text: "L'ECG evidenzia vizi valvolari",
  },
  {
    id: 202,
    TrueOrFalse: true,
    text: "ECG si può registrare in 12 derivazioni",
  },
  {
    id: 203,
    TrueOrFalse: true,
    text: "L'intervallo R-R permette di determinare la frequenza cardiaca",
  },
  {
    id: 204,
    TrueOrFalse: true,
    text: "Il nodo Atrio ventricolare contiene cellule pace maker",
  },
  {
    id: 205,
    TrueOrFalse: false,
    text: "La sistole atriale si verifica tra l'onda T e la successiva onda P",
  },
  {
    id: 206,
    TrueOrFalse: true,
    text: "Nell'intervallo P-Q le fibre ventricolari si trovano nello stato di riposo (normale polarizzazione)",
  },
  {
    id: 207,
    TrueOrFalse: true,
    text: "Non esiste un istante in cui le valvole aortica e atrio ventricolare siano contemporaneamente aperte",
  },
  {
    id: 208,
    TrueOrFalse: false,
    text: "In un soggetto in cui l'asse elettrico cardiaco sia verticale, la I derivazione offre un segnale più ampio della II",
  },
  {
    id: 209,
    TrueOrFalse: false,
    text: "Un aumento del volume di sangue nel ventricolo alla fine della diastole ventricolare (volume telediastolico) provoca una riduzione della forza contrattile ventricolare",
  },
  {
    id: 210,
    TrueOrFalse: true,
    text: "Il rilascio di acetilcolina a livello del cuore provoca brachicardia",
  },
  {
    id: 211,
    TrueOrFalse: false,
    text: "Durante l'intervallo P-R la valvola atrio-ventricolare è chiusa",
  },
  {
    id: 212,
    TrueOrFalse: true,
    text: "Onda P: depolarizzazione atriale",
  },
  {
    id: 213,
    TrueOrFalse: false,
    text: "L'onda T dell'ECG corrisponde alla ripolarizzazione atriale",
  },
  {
    id: 214,
    TrueOrFalse: false,
    text: "onda QRS: ripolarizzazione ventricolare",
  },
  {
    id: 215,
    TrueOrFalse: false,
    text: "T: ripolarizzazione atriale",
  },
  {
    id: 216,
    TrueOrFalse: true,
    text: "Durante la sistole ventricolare la valvola Atrioventricolare rimane chiusa",
  },
  {
    id: 217,
    TrueOrFalse: false,
    text: "I toni cardiaci sono generati dal contatto del muscolo cardiaco con la gabbia toracica ad ogni battito cardiaco",
  },
  {
    id: 218,
    TrueOrFalse: false,
    text: "Le cellule pace-maker (quelle capaci di autoeccitarsi) del cuore sono esclusivamente localizzate nel nodo senoatriale",
  },
  {
    id: 219,
    TrueOrFalse: false,
    text: "in condizioni di riposo o durante il sonno solo una parte delle fibre miocardiche si depolarizza e si contrae ad ogni battito cardiaco",
  },
  {
    id: 220,
    TrueOrFalse: false,
    text: "Durante la sistole ventricolare la pressione nell'atrio è maggiore che nel ventricolo corrispondente",
  },
  {
    id: 221,
    TrueOrFalse: true,
    text: "Il flusso unidirezionale è garantito dalle valvole cardiache e dalle valvole venose",
  },
  {
    id: 222,
    TrueOrFalse: false,
    text: "Le cellule cardiache si contraggono solo in risposta alla stimolazione nervosa",
  },
  {
    id: 223,
    TrueOrFalse: false,
    text: "I cardiomiociti non presentano giunzioni comunicanti",
  },
  {
    id: 224,
    TrueOrFalse: true,
    text: "Le cellule pace-maker generano spontaneamente dei potenziali d'azione",
  },
  {
    id: 225,
    TrueOrFalse: true,
    text: "La fibra muscolare cardiaca necessita dell'ingresso di calcio dal compartimento extracellulare per avviare la contrazione",
  },
  {
    id: 226,
    TrueOrFalse: false,
    text: "nel muscolo cardiaco il rilascio di calcio dal reticolo sarcoplasmatico è indotto da un potenziale d'azione al cloro",
  },
  {
    id: 227,
    TrueOrFalse: true,
    text: "La quantità di calcio rilasciato dal reticolo sarcoplasmatico influenza la forza di contrazione dei cardiomiociti",
  },
  {
    id: 228,
    TrueOrFalse: false,
    text: "La contrazione della fibra muscolare cardiaca si ha per accorciamento dei filamenti",
  },
  {
    id: 229,
    TrueOrFalse: true,
    text: "L'azione simpatica del sistema nervoso centrale fa aumentare la gittata cardiaca ",
  },
  {
    id: 230,
    TrueOrFalse: true,
    text: "L'aumento delle catecolamine circolanti aumenta la gittata sistolica ",
  },
  {
    id: 231,
    TrueOrFalse: false,
    text: "La gittata cardiaca è influenzata dalla frequenza cardiaca ma non dalla gittata sistolica ",
  },
  {
    id: 232,
    TrueOrFalse: true,
    text: "Un aumento del ritorno venoso determina un aumento della gittata sistolica    ",
  },
  {
    id: 233,
    TrueOrFalse: true,
    text: "Un maggior riempimento ventricolare (aumento del volume telediastolico) aumenta la forza di contrazione ventricolare",
  },
  {
    id: 234,
    TrueOrFalse: true,
    text: "un aumento delle resistenze periferiche aumenta la pressione arteriosa",
  },
  {
    id: 235,
    TrueOrFalse: true,
    text: "Un aumento della pressione arteriosa può indurre in via riflessa un aumento della frequenza cardiaca",
  },
  {
    id: 236,
    TrueOrFalse: false,
    text: "La parete del ventricolo destro è più spessa di quella del ventricolo sinistro ",
  },
  {
    id: 237,
    TrueOrFalse: true,
    text: "Durante il potenziale d'azione la fibra cardiaca resta depolarizzata per oltre 100ms",
  },
  {
    id: 238,
    TrueOrFalse: false,
    text: "Il primo tono cardiaco si manifesta tra l'onda P e l'onda Q dell'ECG ",
  },
  {
    id: 239,
    TrueOrFalse: false,
    text: "Il volume di sangue presente nel ventricolo raggiunge il minimo alla fine della sistole atriale",
  },
  {
    id: 240,
    TrueOrFalse: true,
    text: "Il volume di pressione arteriosa raggiunge il massimo tra l'onda R e l'onda T dell'ECG",
  },
  {
    id: 241,
    TrueOrFalse: true,
    text: "il nodo Atrio-true,  entricolo rappresenta l'unico punto di collegamento elettrico tra atri e ventricoli",
  },
  {
    id: 242,
    TrueOrFalse: true,
    text: "Durante l'intervallo P-Q la pressione aortica è maggiore della pressione atriale",
  },
  {
    id: 243,
    TrueOrFalse: false,
    text: "la diastole atriale coincide sostanzialmente con l'intervallo S-T",
  },
  {
    id: 244,
    TrueOrFalse: false,
    text: "il segnale elettrico prodotto dall'attività cardiaca può essere rilevato a livello del retro dei gomiti invece che a livello dei polsi",
  },
  {
    id: 245,
    TrueOrFalse: false,
    text: "La pressione ventricolare è sempre maggiore di quella atriale",
  },
  {
    id: 246,
    TrueOrFalse: true,
    text: "La valvola Atrio-Ventricolare si chiude all'inizio della sistole ventricolare",
  },
  {
    id: 247,
    TrueOrFalse: true,
    text: "un aumento dell'attività simpatica riduce l'intervallo R-R ",
  },
  {
    id: 248,
    TrueOrFalse: false,
    text: "La pressione del sangue nell'atrio supera gli 80 mmHg durante la sistole atriale",
  },
  {
    id: 249,
    TrueOrFalse: true,
    text: "La pressione del sangue nel ventricolo supera quella aortica durante la fase di eiezione ventricolare",
  },
  {
    id: 250,
    TrueOrFalse: false,
    text: "Tra l'onda P e l'onda S dell'ECG la valvola AV è chiusa",
  },
  {
    id: 251,
    TrueOrFalse: false,
    text: "la diastole ventricolare si sviluppa durante l'intervallo R-T",
  },
  {
    id: 252,
    TrueOrFalse: true,
    text: "l'onda T dell'ECG indica la ripolarizzazione dei ventricoli",
  },
  {
    id: 253,
    TrueOrFalse: false,
    text: "La sistole atriale si sviluppa tra l'onda T e la successiva onda P",
  },
  {
    id: 254,
    TrueOrFalse: true,
    text: "Nell'intervallo P-Q le fibre ventricolari si trovano nello stato di riposo (normale polarizzazione)",
  },
  {
    id: 255,
    TrueOrFalse: false,
    text: "In un soggetto a cui l'asse elettrico cardiaco sia verticale, la I derivazione offre un segnale più ampio della II",
  },
  {
    id: 256,
    TrueOrFalse: true,
    text: "Non esiste un istante in cui le valvole aortica e atrio-ventricolare sinistra siano contemporaneamente aperte",
  },
  {
    id: 257,
    TrueOrFalse: false,
    text: "Un aumento del volume di sangue nel ventricolo alla fine della diastole ventricolare (volume telediastolico) provoca una riduzione della forza contrattile ventricolare",
  },
  {
    id: 258,
    TrueOrFalse: true,
    text: "Il rilascio di acetilcolina a livello del cuore provoca bradicardia",
  },
  {
    id: 259,
    TrueOrFalse: true,
    text: "Il nodo atrio-ventricolare contiene cellule pace-maker",
  },
  {
    id: 260,
    TrueOrFalse: true,
    text: " Il contenuto di ioni cloruro negli eritrociti del sangue venoso è maggiore di quello nei globuli rossi del sangue arterioso",
  },
  {
    id: 261,
    TrueOrFalse: false,
    text: "Si ha un aumento di pressione arteriosa quando diminuisce la gittata sistolica",
  },
  {
    id: 262,
    TrueOrFalse: true,
    text: "Si ha un aumento di pressione arteriosa quando aumenta la frequenza cardiaca",
  },
  {
    id: 263,
    TrueOrFalse: true,
    text: "Si ha un aumento di pressione arteriosa quando aumentano le resistenze periferiche",
  },
  {
    id: 264,
    TrueOrFalse: false,
    text: "Si ha un aumento di pressione arteriosa quando si attiva il sistema nervoso parasimpatico",
  },
  {
    id: 265,
    TrueOrFalse: false,
    text: "Si ha un aumento di pressione arteriosa quando il potenziale di membrana delle cellule pacemaker è fluttuante",
  },
  {
    id: 266,
    TrueOrFalse: true,
    text: "Nel cuore il potenziale d'azione diffonde velocemente da una cellula contrattile all'altra attraverso sinapsi elettriche",
  },
  {
    id: 267,
    TrueOrFalse: false,
    text: "Il potenziale pacemaker è generato dalla fuoriuscita spontanea di sodio dalla cellula",
  },
  {
    id: 268,
    TrueOrFalse: true,
    text: "el cardiomiocita il periodo refrattario dura quasi quanto la contrazione muscolare",
  },
  {
    id: 269,
    TrueOrFalse: true,
    text: "il parasimpatico regola la frequenza cardiaca per azione dell'acetilcolina",
  },
  {
    id: 270,
    TrueOrFalse: false,
    text: "l'ortosimpatico regola la contrattilità dei cardiomiociti",
  },
  {
    id: 271,
    TrueOrFalse: true,
    text: "'ortosimpatico aumenta la velocità di depolarizzazione della cellula pacemaker",
  },
  {
    id: 272,
    TrueOrFalse: true,
    text: "La fase di plateau del potenziale d'azione dei cardiomiociti è dovuta al contemporaneo ingresso di calcio e fuoriuscita di potassio",
  },
  {
    id: 273,
    TrueOrFalse: true,
    text: "il flusso di volume (portata) aumenta all'aumentare della differenza pressoria",
  },
  {
    id: 274,
    TrueOrFalse: false,
    text: "La gittata sistolica coincide con il volume ventricolare telediastolico (volume di sangue presente all'interno del ventricolo alla fine della diastole ventricolare)",
  },
  {
    id: 275,
    TrueOrFalse: true,
    text: "La resistenza idraulica che un vaso sanguigno offre al passaggio del sangue (legge di Poiseuille) è direttamente proporzionale alla lunghezza del vaso",
  },
  {
    id: 276,
    TrueOrFalse: false,
    text: "La resistenza idraulica che un vaso sanguigno offre al passaggio del sangue (legge di Poiseuille) raddoppia se il diametro si dimezza",
  },
  {
    id: 277,
    TrueOrFalse: true,
    text: " La resistenza idraulica che un vaso sanguigno offre al passaggio del sangue (legge di Poiseuille) aumenta all'aumentare dell'ematocrito",
  },
  {
    id: 278,
    TrueOrFalse: false,
    text: "La resistenza idraulica che un vaso sanguigno offre al passaggio del sangue (legge di Poiseuille) può essere calcolata dal rapporto F/P essendo F il flusso di sangue nel vaso e P la differenza di pressione esistente tra gli estremi del vaso",
  },
  {
    id: 279,
    TrueOrFalse: false,
    text: "La resistenza idraulica di un vaso sanguigno è inversamente proporzionale al quadrato del suo diametro",
  },
  {
    id: 280,
    TrueOrFalse: false,
    text: "La pressione del sangue nelle vene è leggermente superiore che nei capillari",
  },
  {
    id: 281,
    TrueOrFalse: true,
    text: " La pressione del sangue nelle vene e nelle arterie è influenzata dalla postura",
  },
  {
    id: 282,
    TrueOrFalse: false,
    text: " La differenza di pressione osmotica tra sangue e liquido interstiziale vale circa 100mmHg",
  },
  {
    id: 283,
    TrueOrFalse: false,
    text: "La velocità del sangue nei capillari è maggiore che nell'aorta dato che la sezione di un capillare è molto minore di quella dell'aorta ",
  },
  {
    id: 284,
    TrueOrFalse: true,
    text: "Un aumento dell'attività del sistema simpatico comporta in generale un aumento della pressione arteriosa",
  },
  {
    id: 285,
    TrueOrFalse: false,
    text: " Un'improvvisa ipotensione (abbassamento di pressione arteriosa) ha come primo effetto un aumento della concentrazione ematica di angiotensina II",
  },
  {
    id: 286,
    TrueOrFalse: true,
    text: "L'angiotensina II ha il duplice effetto di 1) aumentare le resistenze vascolari e 2) ridurre la diuresi attraverso l'azione dell'aldosterone",
  },
  {
    id: 287,
    TrueOrFalse: true,
    text: "In un soggetto che abbia subito un'emorragia è possibile osservare aumentata frequenza cardiaca e pallore (vasocostrizione cutanea)",
  },
  {
    id: 288,
    TrueOrFalse: true,
    text: "La pressione intra-pleurica si mantiene negativa durante l'intero ciclo respiratorio normale",
  },
  {
    id: 289,
    TrueOrFalse: true,
    text: "La pressione intra-pleurica può diventare positiva durante un colpo di tosse",
  },
  {
    id: 290,
    TrueOrFalse: false,
    text: " La pressione intra-pleurica diventa molto negativa quando soffiamo per gonfiare un palloncino d'aria",
  },
  {
    id: 291,
    TrueOrFalse: false,
    text: " La pressione intra-pleurica si misura solitamente in cmH2O essendo 1cm H2O = 76 mmHg",
  },
  {
    id: 292,
    TrueOrFalse: true,
    text: "La pressione intra-pleurica diventa prossima a zero nel pneumotorace",
  },
  {
    id: 293,
    TrueOrFalse: true,
    text: " L'anidride carbonica è trasportata dal sangue in combinazione con l'emoglobina",
  },
  {
    id: 294,
    TrueOrFalse: true,
    text: " L'anidride carbonica è trasportata dal sangue come gas disciolto, nel plasma",
  },
  {
    id: 295,
    TrueOrFalse: false,
    text: " L'anidride carbonica è trasportata dal sangue da enzimi specifici come l'anidrasi carbonica",
  },
  {
    id: 296,
    TrueOrFalse: true,
    text: " L'anidride carbonica è trasportata dal sangue soprattutto come bicarbonato ",
  },
  {
    id: 297,
    TrueOrFalse: false,
    text: "La fondamentale ritmicità del respiro, per la quale inspirazione ed espirazione si alternano regolarmente è generata da un centro situato nel midollo spinale",
  },
  {
    id: 298,
    TrueOrFalse: true,
    text: "La fondamentale ritmicità del respiro, per la quale inspirazione ed espirazione si alternano regolarmente è generata principalmente dall'attività di centri situati nel bulbo ma è modulata da altri centri troncoencefalici e da varie afferenze",
  },
  {
    id: 299,
    TrueOrFalse: false,
    text: "La fondamentale ritmicità del respiro, per la quale inspirazione ed espirazione si alternano regolarmente è generata a livello di centri corticali",
  },
  {
    id: 300,
    TrueOrFalse: true,
    text: "La fondamentale ritmicità del respiro, per la quale inspirazione ed espirazione si alternano regolarmente può essere alterata da stimoli emozionali",
  },
  {
    id: 301,
    TrueOrFalse: false,
    text: "Un aumento della pressione arteriosa sistemica stimola la produzione di renina da parte del rene",
  },
  {
    id: 302,
    TrueOrFalse: true,
    text: "un aumento di concentrazione di renina nel sangue porta ad un aumento della concentrazione di Angiotensina II",
  },
  {
    id: 303,
    TrueOrFalse: false,
    text: "L'angiotensina II è un potente vasodilatatore ",
  },
  {
    id: 304,
    TrueOrFalse: true,
    text: "l'aldosterone controlla a livello renale il riassorbimento di Na e acqua, per questa ragione ha l'effetto di aumentare la volemia",
  },
  {
    id: 305,
    TrueOrFalse: true,
    text: "in risposta ad una condizione ipotensiva le concentrazioni di aldosterone e di ormone antidiuretico tendono ad aumentare ",
  },
  {
    id: 306,
    TrueOrFalse: true,
    text: "La produzione di urina è rallentata dall'aldosterone",
  },
  {
    id: 307,
    TrueOrFalse: true,
    text: "L'ormone antidiuretico aumenta la permeabilità all'acqua in alcuni tratti del tubulo renale",
  },
  {
    id: 308,
    TrueOrFalse: true,
    text: "La concentrazione del liquido interstiziale nei reni non è omogenea",
  },
  {
    id: 309,
    TrueOrFalse: false,
    text: "Nel glomerulo renale avviene la maggior parte del riassorbimento del glucosio",
  },
  {
    id: 310,
    TrueOrFalse: false,
    text: "Nel glomerulo renale la costrizione dell'arteriola afferente ha l'effetto di limitare il flusso di sangue nei capillari ma promuove il processo di filtrazione",
  },
  {
    id: 311,
    TrueOrFalse: true,
    text: "Nel glomerulo renale la costrizione dell'arteriola afferente è controllata da segnali paracrini prodotti dalle cellule della macula densa",
  },
  {
    id: 312,
    TrueOrFalse: true,
    text: "Nel glomerulo renale le sostanze di piccola dimensione come Na e glucosio si trovano in pari concentrazione nell'ultrafiltrato e nel plasma all'interno dei capillari",
  },
  {
    id: 313,
    TrueOrFalse: false,
    text: "Velocità di filtrazione glomerulare Ha un valore di circa 120 ml/s",
  },
  {
    id: 314,
    TrueOrFalse: true,
    text: "Velocità di filtrazione glomerulare aumenta se aumenta la pressione all'interno dei capillari glomerulari",
  },
  {
    id: 315,
    TrueOrFalse: true,
    text: "Velocità di filtrazione glomerulare si mantiene approssimativamente costante anche se la pressione arteriosa sistemica media aumenta da 100 a 150 mmHg",
  },
  {
    id: 316,
    TrueOrFalse: true,
    text: "Velocità di filtrazione glomerulare può essere stimata misurando la clearance plasmatica renale dell'insulina",
  },
  {
    id: 317,
    TrueOrFalse: false,
    text: "Velocità di filtrazione glomerulare dipende dal contenuto proteico del filtrato",
  },
  {
    id: 318,
    TrueOrFalse: false,
    text: "il glucosio è una sostanza normalmente presente nelle urine in modesta quantità",
  },
  {
    id: 319,
    TrueOrFalse: true,
    text: "La maggior parte dell'acqua è riassorbita dall'ultrafiltrato a livello del tubulo contorto prossimale",
  },
  {
    id: 320,
    TrueOrFalse: true,
    text: "Il liquido interstiziale è caratterizzato da un'osmolarità più elevate nella zona corticale rispetto alla zona midollare",
  },
  {
    id: 321,
    TrueOrFalse: false,
    text: "Un abbassamento della pressione arteriosa sistemica produce a livello renale un aumento della ritenzione idrica",
  },
  {
    id: 322,
    TrueOrFalse: true,
    text: "La clearance plasmatica renale di una sostanza rappresenta la quantità di sangue che in un minuto viene completamente depurata da quella sostanza dai due reni ",
  },
  {
    id: 323,
    TrueOrFalse: true,
    text: "ORMONE ANTIDIURETICO: la sua secrezione è stimolata da un aumento dell'osmolarità del sangue",
  },
  {
    id: 324,
    TrueOrFalse: false,
    text: "ORMONE ANTIDIURETICO: La sua secrezione è inibita da un abbassamento della pressione arteriosa",
  },
  {
    id: 325,
    TrueOrFalse: true,
    text: "ORMONE ANTIDIURETICO: Un aumento della sua concentrazione ematica provoca un rallentamento della produzione di urina",
  },
  {
    id: 326,
    TrueOrFalse: false,
    text: "ORMONE ANTIDIURETICO: Opera un controllo della diuresi variando la velocità di filtrazione glomerulare",
  },
  {
    id: 327,
    TrueOrFalse: true,
    text: "Una condizione di ipercapnia (eccesso di CO2 nel sangue) provoca un’acidosi respiratoria",
  },
  {
    id: 328,
    TrueOrFalse: false,
    text: "Una condizione di ipercapnia (eccesso di CO2 nel sangue) stimola attraverso il riflesso barocettivo un aumento della ventilazione",
  },
  {
    id: 329,
    TrueOrFalse: true,
    text: "Una condizione di ipercapnia (eccesso di CO2 nel sangue) stimola a livello renale riassorbimento di HCO3- dall'ultrafiltrato",
  },
  {
    id: 330,
    TrueOrFalse: true,
    text: "Una condizione di ipercapnia (eccesso di CO2 nel sangue) attiva i chemocettori centralI e periferici",
  },
  {
    id: 331,
    TrueOrFalse: true,
    text: "L'insulina è un ormone peptidico che stimola l'ingresso del glucosio nelle cellule di quasi tutti i tessuti dell'organismo",
  },
  {
    id: 332,
    TrueOrFalse: true,
    text: "La secrezione di adrenalina da parte della midollare del surrene è controllata dal sistema simpatico",
  },
  {
    id: 333,
    TrueOrFalse: false,
    text: "L'ormone antidiuretico regola la diuresi attraverso un controllo della filtrazione glomerulare",
  },
  {
    id: 334,
    TrueOrFalse: false,
    text: "La digestione enzimatica delle proteine comincia nella cavità orale",
  },
  {
    id: 335,
    TrueOrFalse: true,
    text: "La secrezione acida nello stomaco crea un ambiente necessario per la attivazione di alcuni enzimi digestivi, come ad esempio pepsinogeno attivato in pepsina",
  },
  {
    id: 336,
    TrueOrFalse: false,
    text: "L'intestino tenue è costituito dalla sequenza di tre tratti: il digiuno, l'ileo e il crasso",
  },
  {
    id: 337,
    TrueOrFalse: false,
    text: "I movimenti peristaltici nell'apparato digerente sono obiettivati al rimescolamento delle sostanze contenute all'interno",
  },
  {
    id: 338,
    TrueOrFalse: true,
    text: "L'aldosterone è un ormone che stimola il riassorbimento renale di sodio",
  },
  {
    id: 339,
    TrueOrFalse: true,
    text: "Il succo pancreatico è fortemente basico",
  },
  {
    id: 340,
    TrueOrFalse: true,
    text: "L'insulina è un ormone ipoglicemizzante",
  },
  {
    id: 341,
    TrueOrFalse: true,
    text: "Gli ormoni pancreatici controllano la disponibilità di glucosio nel sangue",
  },
  {
    id: 342,
    TrueOrFalse: true,
    text: "La secrezione degli ormoni pancreatici è basata su un meccanismo a feedback negativo",
  },
  {
    id: 343,
    TrueOrFalse: false,
    text: "Il glucagone riduce il contenuto di glucosio nel sangue",
  },
  {
    id: 344,
    TrueOrFalse: false,
    text: "La produzione di insulina si mantiene mediamente costante per tutto l'arco della giornata",
  },
  {
    id: 345,
    TrueOrFalse: true,
    text: "IL SISTEMA SIMPATICO media la reazione di attacco o fuga",
  },
  {
    id: 346,
    TrueOrFalse: true,
    text: "IL SISTEMA SIMPATICO innerva anche l'apparato digerente",
  },
  {
    id: 347,
    TrueOrFalse: false,
    text: "IL SISTEMA SIMPATICO non innerva i vasi sanguigni",
  },
  {
    id: 348,
    TrueOrFalse: false,
    text: "IL SISTEMA SIMPATICO rilascia acetilcolina a livello degli effettori ",
  },
  {
    id: 349,
    TrueOrFalse: false,
    text: "IL SISTEMA SIMPATICO stimola la secrezione di adrenalina da parte dell'ipofisi",
  },
  {
    id: 350,
    TrueOrFalse: true,
    text: "nel sistema nervoso centrale ci sono sia neuroni che cellule gliali",
  },
  {
    id: 351,
    TrueOrFalse: false,
    text: "l'aldosterone è prodotto dalla midollare del surrene ",
  },
  {
    id: 352,
    TrueOrFalse: false,
    text: "l'angiotensina II è secreta dalla corticale surrenale",
  },
  {
    id: 353,
    TrueOrFalse: true,
    text: "la liberazione di adrenalina è stimolata dal sistema nervoso simpatico",
  },
  {
    id: 354,
    TrueOrFalse: false,
    text: "i processi digestivi sono stimolati dal sistema simpatico",
  },
  {
    id: 355,
    TrueOrFalse: true,
    text: "il pancreas ha funzione endocrina",
  },
  {
    id: 356,
    TrueOrFalse: false,
    text: "La pressione alveolare varia nella respirazione tranquilla tra +1 e -1 cmH2O",
  },
  {
    id: 357,
    TrueOrFalse: false,
    text: "Durante un'espirazione tranquilla la pressione pleurica è leggermente positiva",
  },
  {
    id: 358,
    TrueOrFalse: false,
    text: "Un normale atto espiratorio non richiede la contrazione dei muscoli espiratori",
  },
  {
    id: 359,
    TrueOrFalse: true,
    text: "Nel pneumotorace si verifica l'ingresso di aria nello spazio pleurico",
  },
  {
    id: 360,
    TrueOrFalse: false,
    text: "La presenza di surfattante nel film liquido alveolare ne abbassa la tensione superficiale con il risultato di diminuire la compliance polmonare",
  },
  {
    id: 361,
    TrueOrFalse: true,
    text: "Un maggior riempimento ventricolare (aumento del volume telediastolico) aumenta la forza di contrazione ventricolare",
  },
  {
    id: 362,
    TrueOrFalse: true,
    text: "un aumento delle resistenze periferiche aumenta la pressione arteriosa",
  },
  {
    id: 363,
    TrueOrFalse: true,
    text: "un aumento della pressione arteriosa può indurre in via riflessa un aumento della frequenza cardiaca",
  },
  {
    id: 364,
    TrueOrFalse: false,
    text: "Una riduzione della pressione arteriosa può indurre in via riflessa un aumento della diuresi",
  },
  {
    id: 365,
    TrueOrFalse: true,
    text: "Un aumento della concentrazione osmotica del sangue può indurre in via riflessa un aumento della concentrazione ematica di ormone antidiuretico",
  },
  {
    id: 366,
    TrueOrFalse: false,
    text: "un aumento della concentrazione ematica di renina è provocato da un aumento della concentrazione ematica di angiotensina II",
  },
  {
    id: 367,
    TrueOrFalse: false,
    text: "L'aumento delle resistenze vascolari da parte del sistema simpatico è ottenuto attraverso la costrizione del distretto venoso",
  },
  {
    id: 368,
    TrueOrFalse: false,
    text: "la tachicardia è un rallentamento fisiologico del battito cardiaco",
  },
  {
    id: 369,
    TrueOrFalse: false,
    text: "i barocettori attivano il sistema simpatico nel caso aumenti la concentrazione di CO2 nel sangue",
  },
  {
    id: 370,
    TrueOrFalse: false,
    text: "Il sistema simpatico controlla la costrizione dei vasi sanguigni attraverso il rilascio di acetilcolina",
  },
  {
    id: 371,
    TrueOrFalse: true,
    text: "Un blocco farmacologico dell'attività parasimpatica diretta al cuore ha l'effetto di aumentare la frequenza cardiaca",
  },
  {
    id: 372,
    TrueOrFalse: true,
    text: "Il cuore è in grado di eccitarsi ritmicamente anche se privato dell'innervazione autonomica",
  },
  {
    id: 373,
    TrueOrFalse: true,
    text: "Un abbassamento improvviso della pressione può evocare in via riflessa vasocostrizione arteriolare",
  },
  {
    id: 374,
    TrueOrFalse: false,
    text: "L'angiotensina II è un potente vasodilatatore e stimola la secrezione di ormone antidiuretico ",
  },
  {
    id: 375,
    TrueOrFalse: true,
    text: "La regolazione della pressione arteriosa avviene anche attraverso il controllo della volemia",
  },
  {
    id: 376,
    TrueOrFalse: false,
    text: "Un abbassamento improvviso della pressione arteriosa comporta un aumento riflesso dell'attività parasimpatica al cuore",
  },
  {
    id: 377,
    TrueOrFalse: false,
    text: "I muscoli addominali sono muscoli inspiratori",
  },
  {
    id: 378,
    TrueOrFalse: false,
    text: "la massima quantità di aria che può entrare nei polmoni di un individuo 'standard' è di circa 12L",
  },
  {
    id: 379,
    TrueOrFalse: false,
    text: "ad ogni atto respiratorio normale la miscela d'aria presente nei polmoni subisce un ricambio del 50% (50% dell'aria alveolare viene sostituita da 'aria fresca')",
  },
  {
    id: 380,
    TrueOrFalse: true,
    text: "La presenza di surfattante nel film liquido alveolare rende il polmone più facile da dilatare",
  },
  {
    id: 381,
    TrueOrFalse: true,
    text: "Alla fine di un'espirazione massimale la pressione intrapleurica è in valore assoluto minore (meno negativa) che alla fine di un'espirazione tranquilla",
  },
  {
    id: 382,
    TrueOrFalse: true,
    text: "Nella misura manuale della pressione arteriosa il bracciale deve prima essere portato ad una pressione superiore alla pressione sistolica del soggetto e poi sgonfiato lentamente",
  },
  {
    id: 383,
    TrueOrFalse: true,
    text: "La pressione parziale dell'ossigeno nel sangue arterioso vale circa quanto quella aria alveolare",
  },
  {
    id: 384,
    TrueOrFalse: false,
    text: "Il contenuto percentuale di ossigeno nel sangue venoso misto è di circa il 75%",
  },
  {
    id: 385,
    TrueOrFalse: false,
    text: "la saturazione dell'emoglobina nel sangue venoso misto è di circa il 20%",
  },
  {
    id: 386,
    TrueOrFalse: true,
    text: "il PH nel sangue venoso è minore che nel sangue arterioso ",
  },
  {
    id: 387,
    TrueOrFalse: true,
    text: "Durante un'inspirazione tranquilla l'attività dei muscoli inspiratori è coadiuvata all'attività dei muscoli espiratori",
  },
  {
    id: 388,
    TrueOrFalse: false,
    text: "L'attivazione del sistema simpatico abbassa la frequenza cardiaca",
  },
  {
    id: 389,
    TrueOrFalse: false,
    text: "L'attivazione del sistema simpatico aumenta la forza muscolare (muscoli scheletrici)",
  },
  {
    id: 390,
    TrueOrFalse: false,
    text: "L'attivazione del sistema simpatico aumenta la frequenza respiratoria ",
  },
  {
    id: 391,
    TrueOrFalse: true,
    text: "L'attivazione del sistema simpatico si verifica anche durante attività fisica intensa",
  },
  {
    id: 392,
    TrueOrFalse: true,
    text: "effettuare inspirazioni profonde agevola il ritorno venoso al cuore",
  },
  {
    id: 393,
    TrueOrFalse: true,
    text: "aumento del tono simpatico al distretto venoso agevola il ritorno venoso al cuore",
  },
  {
    id: 394,
    TrueOrFalse: false,
    text: "assunzione della posizione ortostatica rispetto a quella clinostatica agevola il ritorno venoso al cuore",
  },
  {
    id: 395,
    TrueOrFalse: false,
    text: "riduzione della pressione parziale di CO2 nel sangue arterioso agevola il ritorno venoso al cuore",
  },
  {
    id: 396,
    TrueOrFalse: false,
    text: "aumento della pressione addominale (es durante gravidanza) agevola il ritorno venoso al cuore",
  },
  {
    id: 397,
    TrueOrFalse: false,
    text: "Se ad un soggetto sano viene fatto respirare ossigeno puro la quantità di ossigeno nel sangue arterioso risulta più che raddoppiata",
  },
  {
    id: 398,
    TrueOrFalse: false,
    text: "Il volume di aria inspirato ed espirato in un atto respiratorio normale a riposo (volume corrente) vale circa 5 litri",
  },
  {
    id: 399,
    TrueOrFalse: false,
    text: "In condizioni normale la pressione parziale di ossigeno nel sangue vale circa 40mmHg",
  },
  {
    id: 400,
    TrueOrFalse: false,
    text: "il muscolo diaframma si contrae durante un'espirazione profonda",
  },
  {
    id: 401,
    TrueOrFalse: true,
    text: "in condizioni normali la saturazione dell'emoglobina nel sangue venoso è maggiore del 50%",
  },
  {
    id: 402,
    TrueOrFalse: true,
    text: "Può essere causa di edema una riduzione della pressione oncotica",
  },
  {
    id: 403,
    TrueOrFalse: false,
    text: "Può essere causa di edema un'insufficienza cardiaca che causa aumento della pressione venosa",
  },
  {
    id: 404,
    TrueOrFalse: true,
    text: "Può essere causa di edema L'abbassamento di pressione arteriosa conseguente ad una perdita di sangue",
  },
  {
    id: 405,
    TrueOrFalse: true,
    text: "Può essere causa di edema Una riduzione della concentrazione ematica di proteine causata da malnutrizione",
  },
  {
    id: 406,
    TrueOrFalse: true,
    text: "Può essere causa di edema Un'aumentata pressione addominale (ad esempio durante la gravidanza) ",
  },
  {
    id: 407,
    TrueOrFalse: true,
    text: "Può essere causa di edema aumento della permeabilità capillare che lasci sfuggire un po' di proteine negli spazi interstiziali",
  },
  {
    id: 408,
    TrueOrFalse: false,
    text: "Una condizioni di acidosi respiratoria stimola un aumento delle secrezioni di HCO3- nelle urine ",
  },
  {
    id: 409,
    TrueOrFalse: true,
    text: "Una condizioni di acidosi respiratoria può essere provocata da una patologia ostruttiva delle vie respiratorie",
  },
  {
    id: 410,
    TrueOrFalse: false,
    text: "Una condizioni di acidosi respiratoria è associata a ridotta concentrazione ematica di CO2",
  },
  {
    id: 411,
    TrueOrFalse: true,
    text: "Una condizioni di acidosi respiratoria attiva i chemocettori centrali e periferici",
  },
  {
    id: 412,
    TrueOrFalse: false,
    text: "Una condizioni di acidosi respiratoria Si verifica tipicamente in un individuo portato in alta quota",
  },
  {
    id: 413,
    TrueOrFalse: false,
    text: "i vasi venosi sono più complianti dei vasi arteriosi",
  },
  {
    id: 414,
    TrueOrFalse: false,
    text: "i vasi venosi, a differenza di quelli arteriosi non sono innervati dal sistema simpatico",
  },
  {
    id: 415,
    TrueOrFalse: true,
    text: "sia le cellule nervose che le cellule muscolari sono in grado di sviluppare potenziali d'azione",
  },
  {
    id: 416,
    TrueOrFalse: false,
    text: "L'interno della cellula è carico positivamente rispetto all'esterno",
  },
  {
    id: 417,
    TrueOrFalse: false,
    text: "Il sodio è più concentrato all'interno della cellula che nel liquido extracellulare",
  },
  {
    id: 418,
    TrueOrFalse: true,
    text: "La fase ascendente del potenziale d'azione è causata da un massiccio ingresso di ioni sodio all'interno della cellula",
  },
  {
    id: 419,
    TrueOrFalse: true,
    text: "il potenziale d'azione si propaga più velocemente sulle fibre di grosse dimensioni che sulle piccole",
  },
  {
    id: 420,
    TrueOrFalse: false,
    text: "L'insulina impedisce l'ingresso di glucosio nelle cellule",
  },
  {
    id: 421,
    TrueOrFalse: true,
    text: "L'insulina plasmatica è più alta nello stato assimilativo",
  },
  {
    id: 422,
    TrueOrFalse: false,
    text: "L'insulina plasmatica è più alta nello stato post assimilativo",
  },
  {
    id: 423,
    TrueOrFalse: true,
    text: "Il quoziente respiratorio è il rapporto tra la CO2 prodotta e l'O2 consumato",
  },
  {
    id: 424,
    TrueOrFalse: false,
    text: "Il quoziente respiratorio è il rapporto tra la ventilazione polmonare e lavoro meccanico svolto dall'organismo",
  },
  {
    id: 425,
    TrueOrFalse: false,
    text: "In condizioni normali la maggior parte del calore viene perso per conduzione",
  },
  {
    id: 426,
    TrueOrFalse: false,
    text: "il centro della termoregolazione si trova nel tronco dell'encefalo ",
  },
  {
    id: 427,
    TrueOrFalse: false,
    text: "I termocettori sono esclusivamente localizzati a livello cutaneo",
  },
  {
    id: 428,
    TrueOrFalse: false,
    text: "La termogenesi da brivido aumenta la termodispersione",
  },
  {
    id: 429,
    TrueOrFalse: true,
    text: "Nell'ipotalamo ci sono i termocettori detti centrali",
  },
  {
    id: 430,
    TrueOrFalse: false,
    text: "La sudorazione fa aumentare la termogenesi",
  },
  {
    id: 431,
    TrueOrFalse: true,
    text: "il cortisolo ha effetti anti-infiammatori",
  },
  {
    id: 432,
    TrueOrFalse: false,
    text: "il cortisolo ha effetti immunostimolanti",
  },
  {
    id: 433,
    TrueOrFalse: false,
    text: "la secrezione di cortisolo è stimolata da TSH",
  },
  {
    id: 434,
    TrueOrFalse: true,
    text: "gli ormoni tiroidei stimolano il metabolismo",
  },
  {
    id: 435,
    TrueOrFalse: false,
    text: "Gli ormoni tiroidei inibiscono il metabolismo",
  },
  {
    id: 436,
    TrueOrFalse: true,
    text: "Gli ormoni tiroidei sono importanti per lo sviluppo del sistema nervoso",
  },
  {
    id: 437,
    TrueOrFalse: true,
    text: "In una contrazione muscolare di debole intensità l'accorciamento del muscolo avviene grazie alla contrazione attiva di solo una parte delle fibre muscolari, le altri rimangono rilassate",
  },
  {
    id: 438,
    TrueOrFalse: false,
    text: "La contrazione della fibra muscolare scheletrica si sviluppa solo a seguito dell'insorgenza di un potenziale d'azione da parte della cellula stessa",
  },
  {
    id: 439,
    TrueOrFalse: false,
    text: "Le fibre muscolari sono innervate da motoneuroni localizzati nella corteccia motoria primaria ",
  },
  {
    id: 440,
    TrueOrFalse: false,
    text: "A livello della placca neuromuscolare viene rilasciato il neurotrasmettitore adrenalina",
  },
  {
    id: 441,
    TrueOrFalse: true,
    text: "Il curaro è una sostanza chimica che blocca la trasmissione sinaptica a livello della placca muscolare",
  },
  {
    id: 442,
    TrueOrFalse: true,
    text: "Lo ione calcio ha un ruolo importante nel meccanismo contrattile in quanto la sua presenza nel citoplasma permette l'accoppiamento tra i filamenti di actina e miosina",
  },
  {
    id: 443,
    TrueOrFalse: false,
    text: "durante la contrazione i singoli sarcomeri si accorciano grazie all'accorciamento dei filamenti di miosina (filamenti spessi)",
  },
  {
    id: 444,
    TrueOrFalse: true,
    text: "per afferrare un oggetto con la sinistra attivo la corteccia motoria di destra",
  },
  {
    id: 445,
    TrueOrFalse: true,
    text: "uno stimolo dolorifico alla mano provoca un riflesso di retrazione che comporta la flessione del gomito",
  },
  {
    id: 446,
    TrueOrFalse: false,
    text: "una risposta motoria riflessa è mediata da almeno tre neuroni in serie",
  },
  {
    id: 447,
    TrueOrFalse: true,
    text: "gli interneuroni inibitori sono neuroni spinali che se vengono eccitati provocano l'inibizione di altri neuroni",
  },
  {
    id: 448,
    TrueOrFalse: true,
    text: "nel sistema nervoso centrale ci sono sia cellule gliali che neuroni",
  },
  {
    id: 449,
    TrueOrFalse: false,
    text: "la contrazione del muscolo è dovuta all'accorciamento dei filamenti spessi e sottili",
  },
  {
    id: 450,
    TrueOrFalse: false,
    text: "Nel muscolo striato la contrazione è modulata dalla calmodulina",
  },
  {
    id: 451,
    TrueOrFalse: false,
    text: "La scossa muscolare dura meno del potenziale d'azione",
  },
  {
    id: 452,
    TrueOrFalse: false,
    text: "nel muscolo scheletrico la scossa muscolare ha la stessa durata del potenziale d'azione",
  },
  {
    id: 453,
    TrueOrFalse: false,
    text: "le fibre muscolare a contrazione lenta hanno un metabolismo anaerobico",
  },
  {
    id: 454,
    TrueOrFalse: false,
    text: "nel muscolo liscio non ci sono actina e miosina",
  },
  {
    id: 455,
    TrueOrFalse: true,
    text: "alcuni tipi di muscolo liscio si contraggono in risposta allo stiramento",
  },
  {
    id: 456,
    TrueOrFalse: false,
    text: "La leptina stimola l'assunzione di cibo",
  },
  {
    id: 457,
    TrueOrFalse: false,
    text: "il parasimpatico si attiva nelle situazioni di lotta o fuga",
  },
  {
    id: 458,
    TrueOrFalse: false,
    text: "La ghiandola midollare del surrene secerne acetilcolina",
  },
  {
    id: 459,
    TrueOrFalse: true,
    text: "Le fibre muscolari a contrazione rapida sono meno resistenti alla fatica",
  },
  {
    id: 460,
    TrueOrFalse: true,
    text: "nel muscolo liscio la contrazione è regolata dalla calmodulina",
  },
  {
    id: 461,
    TrueOrFalse: true,
    text: "la contrazione del muscolo è dovuta allo scorrimento reciproco dei filamenti spessi e sottili",
  },
  {
    id: 462,
    TrueOrFalse: true,
    text: "Un'unità motoria è costituita da un motoneurone e da tutte le fibre da esso innervate",
  },
  {
    id: 463,
    TrueOrFalse: false,
    text: "A seguito della depolarizzazione della membrana della fibra muscolare, il reticolo sarcoplasmatico rilascia ioni Na+ nel sarcoplasma",
  },
  {
    id: 464,
    TrueOrFalse: false,
    text: "L'acetilcolinesterasi è un enzima che produce acetilcolina a livello della placca neuromuscolare",
  },
  {
    id: 465,
    TrueOrFalse: false,
    text: "La pressione sanguigna nelle vene di un individuo in posizione clinostatica è solitamente compresa tra 50 e 70 mmHg",
  },
  {
    id: 466,
    TrueOrFalse: false,
    text: "La resistenza che un vaso sanguigno offre al passaggio del sangue aumenta all'aumentare del diametro del vaso",
  },
  {
    id: 467,
    TrueOrFalse: false,
    text: "La pressione sanguigna è maggiore nelle vene che nei capillari",
  },
  {
    id: 468,
    TrueOrFalse: false,
    text: "I carboidrati sono digeriti e assimilati a livello dello stomaco",
  },
  {
    id: 469,
    TrueOrFalse: true,
    text: "La secrezione gastrica è stimolata dall'attività sistema parasimpatico (nervo vago)",
  },
  {
    id: 470,
    TrueOrFalse: false,
    text: "I sali biliari partecipano alla digestione delle proteine, scindendole in polipeptidi di minore dimensione",
  },
  {
    id: 471,
    TrueOrFalse: true,
    text: "l'Omeostasi è la costanza dei parametri dell'ambiente interno dell'organismo",
  },
  {
    id: 472,
    TrueOrFalse: true,
    text: "Per ambiente interno si intende liquido extracellulare",
  },
  {
    id: 473,
    TrueOrFalse: true,
    text: "Una proprietà degli meccanismi omeostatici è il livello tonico di attività",
  },
  {
    id: 474,
    TrueOrFalse: true,
    text: "Il flusso per diffusione prosegue finchè le concentrazioni non sono uniformi",
  },
  {
    id: 475,
    TrueOrFalse: true,
    text: "Il flusso di volume viene generato da una differenza di concentrazione",
  },
  {
    id: 476,
    TrueOrFalse: true,
    text: "una proprietà dei meccanismi omeopatici è il controllo antagonista",
  },
  {
    id: 477,
    TrueOrFalse: true,
    text: "IL SISTEMA SIMPATICO gli interneuroni inibitori sono neuroni spinali che se vengono eccitati provocano l’inibizione di altri neuroni",
  },
  {
    id: 478,
    TrueOrFalse: false,
    text: "Un'importante perdita di sangue (esempio a causa di un prelievo o emorragia) provoca un aumento della pressione arteriosa",
  },
  {
    id: 479,
    TrueOrFalse: true,
    text: "Un'importante perdita di sangue (esempio a causa di un prelievo o emorragia) provoca un aumento riflesso della frequenza cardiaca",
  },
  {
    id: 480,
    TrueOrFalse: false,
    text: "Un'importante perdita di sangue (esempio a causa di un prelievo o emorragia) provoca aumento dell'attività parasimpatica e una riduzione dell'attività simpatica",
  },
  {
    id: 481,
    TrueOrFalse: true,
    text: "Un'importante perdita di sangue (esempio a causa di un prelievo o emorragia) provoca un aumento della secrezione di catecolamine da parte della midollare del surrene",
  },
  {
    id: 482,
    TrueOrFalse: true,
    text: "Una patologia ostruttiva delle vie respiratorie (che causa ipoventilazione) comporta aumento della pressione parziale di CO2",
  },
  {
    id: 483,
    TrueOrFalse: false,
    text: "Una patologia ostruttiva delle vie respiratorie (che causa ipoventilazione) comporta riduzione della pressione parziale di CO2 nel sangue arterioso",
  },
  {
    id: 484,
    TrueOrFalse: false,
    text: "Una patologia ostruttiva delle vie respiratorie (che causa ipoventilazione) comporta aumento del pH arterioso",
  },
  {
    id: 485,
    TrueOrFalse: true,
    text: "Una patologia ostruttiva delle vie respiratorie (che causa ipoventilazione) comporta una condizione di acidosi respiratoria",
  },
  {
    id: 486,
    TrueOrFalse: false,
    text: "La pressione parziale di ossigeno nell'aria secca a livello del mare è 100 mmHg ",
  },
  {
    id: 487,
    TrueOrFalse: false,
    text: "In un contenitore chiuso se aumenta il volume aumenta anche la pressione",
  },
  {
    id: 488,
    TrueOrFalse: false,
    text: "A riposo la pressione intrapleurica è zero ",
  },
  {
    id: 489,
    TrueOrFalse: true,
    text: "Il surfactante polmonare riduce la tensione superficiale negli alveoli e il lavoro ventilatorio",
  },
  {
    id: 490,
    TrueOrFalse: true,
    text: "Il volume morto anatomico è il volume dei gas che non partecipano agli scambi",
  },
  {
    id: 491,
    TrueOrFalse: true,
    text: "Lo spazio morto anatomico è il volume delle vie aeree di conduzione",
  },
  {
    id: 492,
    TrueOrFalse: false,
    text: "La ventilazione polmonare totale è il volume di gas che raggiunge gli alveoli nell'unità di tempo",
  },
  {
    id: 493,
    TrueOrFalse: true,
    text: "La ventilazione alveolare totale è il volume di gas che raggiunge gli alveoli nell'unità di tempo",
  },
  {
    id: 494,
    TrueOrFalse: false,
    text: "Quando aumenta la ventilazione (iperventilazione) la pressione parziale di O2 alveolare diminuisce",
  },
  {
    id: 495,
    TrueOrFalse: true,
    text: "Nell'iperventilazione, la pressione parziale di CO2 alveolare diminuisce",
  },
  {
    id: 496,
    TrueOrFalse: true,
    text: "La quantità di gas che si scioglie in una soluzione dipende dalla sua pressione parziale",
  },
  {
    id: 497,
    TrueOrFalse: true,
    text: "La quantità di gas che si scioglie in una soluzione dipende dalla sua solubilità",
  },
  {
    id: 498,
    TrueOrFalse: false,
    text: "I muscoli addominali sono inspiratori",
  },
  {
    id: 499,
    TrueOrFalse: true,
    text: "il surfactante polmonare è una sostanza che aumenta la compliance (la facilità ad aumentare il volume) polmonare",
  },
  {
    id: 500,
    TrueOrFalse: true,
    text: "La saturazione in ossigeno dell'emoglobina è vicina al 100% nel sangue arterioso",
  },
  {
    id: 501,
    TrueOrFalse: true,
    text: "Una condizione di ipercapnia (eccesso di anidride carbonica nel sangue) stimola un aumento della respirazione",
  },
  {
    id: 502,
    TrueOrFalse: false,
    text: "Un rallentamento volontario della respirazione (riduzione della ventilazione alveolare) provoca un aumento del pH ematico arterioso",
  },
  {
    id: 503,
    TrueOrFalse: false,
    text: "La pressione sanguigna è maggiore nelle vene che nei capillari",
  },
  {
    id: 504,
    TrueOrFalse: true,
    text: "In una condizione di alcalosi respiratoria il rene riduce l'escrezione di H+ nelle urine",
  },
  {
    id: 505,
    TrueOrFalse: true,
    text: "Una condizioni di acidosi metabolica stimola un aumento della ventilazione alveolare",
  },
  {
    id: 506,
    TrueOrFalse: false,
    text: "Una condizione di acidosi metabolica può essere causata dal vomito per espulsione del contenuto gastrico",
  },
  {
    id: 507,
    TrueOrFalse: false,
    text: "una condizioni di acidosi metabolica è caratterizzata da un aumento della concentrazione ematica di CO2",
  },
  {
    id: 508,
    TrueOrFalse: true,
    text: "una condizione di acidosi metabolica è caratterizzata da un aumento di concentrazione ematica di H+",
  },
  {
    id: 509,
    TrueOrFalse: false,
    text: "Una condizione di acidosi metabolica può essere causata dall'iperventilazione che accompagna uno stato di ansia",
  },
  {
    id: 510,
    TrueOrFalse: false,
    text: "Una condizione di acidosi metabolica può essere corretta da un'aumentata eliminazione renale di HCO3-",
  },
  {
    id: 511,
    TrueOrFalse: false,
    text: "Una riduzione della pressione arteriosa può indurre in via riflessa un aumento della diuresi",
  },
  {
    id: 512,
    TrueOrFalse: true,
    text: "Un aumento della concentrazione ematica del sangue può indurre in via riflessa un aumento della concentrazione ematica di ormone antidiuretico",
  },
  {
    id: 513,
    TrueOrFalse: false,
    text: "Un aumento della concentrazione ematica di renina è provocato da un aumento della concentrazione ematica di angiotensina II",
  },
  {
    id: 514,
    TrueOrFalse: false,
    text: "L'ormone della crescita è indispensabile nell'adulto per mantenere la statura",
  },
  {
    id: 515,
    TrueOrFalse: true,
    text: "L'osso contiene minerali formati da calcio e fosfato",
  },
  {
    id: 516,
    TrueOrFalse: false,
    text: "L'ormone paratiroideo stimola l'accumulo di calcio nelle ossa",
  },
  {
    id: 517,
    TrueOrFalse: false,
    text: "Il calcitriolo fa aumentare l'eliminazione di calcio",
  },
  {
    id: 518,
    TrueOrFalse: false,
    text: "l'osso contiene minerali formati da calcio e cloro",
  },
  {
    id: 519,
    TrueOrFalse: false,
    text: "l'ormone della crescita stimola l'anabolismo proteico",
  },
  {
    id: 520,
    TrueOrFalse: true,
    text: "L'ormone paratiroideo fa aumentare la calcemia",
  },
  {
    id: 521,
    TrueOrFalse: true,
    text: "il calcitriolo fa aumentare il riassorbimento intestinale di calcio",
  },
  {
    id: 522,
    TrueOrFalse: false,
    text: "I muscoli addominali e il diaframma sono muscoli espiratori",
  },
  {
    id: 523,
    TrueOrFalse: false,
    text: "La resistenza offerta dalle vie aeree al passaggio di aria è maggiore durante l'inspirazione che durante l'espirazione",
  },
  {
    id: 524,
    TrueOrFalse: false,
    text: "La pressione arteriosa del circolo polmonare è uguale a quella sistemica",
  },
  {
    id: 525,
    TrueOrFalse: true,
    text: "All'aumento della ventilazione alveolare corrisponde una diminuzione della pressione parziale di CO2",
  },
  {
    id: 526,
    TrueOrFalse: false,
    text: "La pressione intrapleurica diventa positiva durante l'inspirazione sotto sforzo",
  },
  {
    id: 527,
    TrueOrFalse: true,
    text: "L'attività simpatica del sistema nervoso autonomo fa aumentare la gittata cardiaca",
  },
  {
    id: 528,
    TrueOrFalse: false,
    text: "L'aumento delle catecolamine circolanti rallenta il battito cardiaco",
  },
  {
    id: 529,
    TrueOrFalse: false,
    text: "La gittata cardiaca è influenzata dalla frequenza cardiaca ma non dalla gittata sistolica ",
  },
  {
    id: 530,
    TrueOrFalse: true,
    text: "un aumento del ritorno venoso al cuore determina entro qualche battito un incremento della gittata sistolica",
  },
  {
    id: 531,
    TrueOrFalse: true,
    text: "Gli scambi a livello dei capillari sistemici avvengono per differenza pressoria",
  },
  {
    id: 532,
    TrueOrFalse: true,
    text: "Gli scambi a livello dei capillari sistemici avvengono per filtrazione",
  },
  {
    id: 533,
    TrueOrFalse: true,
    text: "Gli scambi a livello dei capillari sistemici avvengono per diffusione",
  },
  {
    id: 534,
    TrueOrFalse: true,
    text: "A riposo la PO2 negli alveoli è circa di 100 mmHg",
  },
  {
    id: 535,
    TrueOrFalse: true,
    text: "A riposo la pressione intrapleurica è negativa",
  },
  {
    id: 536,
    TrueOrFalse: false,
    text: "La resistenza delle vie aeree al flusso d'aria è maggiore durante l'inspirazione rispetto al'espirazione",
  },
  {
    id: 537,
    TrueOrFalse: true,
    text: "Il surfactante polmonare riduce il lavoro ventilatorio",
  },
  {
    id: 538,
    TrueOrFalse: false,
    text: "Durante l'esercizio fisico i parametri della ventilazione non cambiano",
  },
  {
    id: 539,
    TrueOrFalse: false,
    text: "Se aumenta la ventilazione (iperventilazione) la PCO2 alveolare aumenta",
  },
  {
    id: 540,
    TrueOrFalse: true,
    text: "La ventilazione alveolare è il volume di gas che raggiunge gli alveoli nell'unità di tempo",
  },
  {
    id: 541,
    TrueOrFalse: true,
    text: "La quantità di gas che si scioglie in una soluzione dipende dalla sua solubilità",
  },
  {
    id: 542,
    TrueOrFalse: true,
    text: "A riposo, nel sangue arterioso l'emoglobina ha una saturazione di O2 intorno o superiore al 90%",
  },
  {
    id: 543,
    TrueOrFalse: false,
    text: "I chemocettori centrali rispondono direttamente alla CO2",
  },
  {
    id: 544,
    TrueOrFalse: false,
    text: "Gli eventi ionici che determinano lo sviluppo del potenziale d'azione sono: un aumento della permeabilità al potassio che penetra nella cellula a cui fa seguito un aumento della permeabilità al sodio che fuoriesce",
  },
  {
    id: 545,
    TrueOrFalse: false,
    text: "Gli eventi ionici che determinano lo sviluppo del potenziale d'azione sono: un ingresso di ioni sodio e fuoriuscita di ioni potassio contro i propri gradienti di concentrazione grazie alla pompa sodio potassio",
  },
  {
    id: 546,
    TrueOrFalse: true,
    text: "Gli eventi ionici che determinano lo sviluppo del potenziale d'azione sono: un aumento selettivo della permeabilità della membrana al sodio che penetra nella cellula a cui fa seguito un aumento della permeabilità al potassio che fuoriesce",
  },
  {
    id: 547,
    TrueOrFalse: false,
    text: "Gli eventi ionici che determinano lo sviluppo del potenziale d'azione sono: ingresso di ioni potassio e la fuoriuscita di ioni cloro",
  },
  {
    id: 548,
    TrueOrFalse: true,
    text: "Il sistema parasimpatico si distingue da quello simpatico per il mediatore chimico rilasciato a livello dell'effettore",
  },
  {
    id: 549,
    TrueOrFalse: true,
    text: "Il sistema parasimpatico si distingue da quello simpatico per la lunghezza della fibra pregangliare",
  },
  {
    id: 550,
    TrueOrFalse: false,
    text: "Il sistema parasimpatico si distingue da quello simpatico per perché innerva organi diversi",
  },
  {
    id: 551,
    TrueOrFalse: true,
    text: "Il sistema parasimpatico si distingue da quello simpatico per aspetti funzionali quali il contesto di attivazione, l'attività parasimpatica è maggiormente legata a funzioni digestive, quella simpatica è maggiormente legata ad attività motorie",
  },
  {
    id: 552,
    TrueOrFalse: false,
    text: "Una fibra muscolare scheletrica a differenza della cellula muscolare liscia, produce energia con metabolismo anaerobico",
  },
  {
    id: 553,
    TrueOrFalse: true,
    text: "Una fibra muscolare scheletrica contiene depositi intracellulari di calcio",
  },
  {
    id: 554,
    TrueOrFalse: false,
    text: "Una fibra muscolare scheletrica è innervata normalmente da più di un motoneurone ",
  },
  {
    id: 555,
    TrueOrFalse: false,
    text: "Una fibra muscolare scheletrica presenta recettori per la noradrenalina a livello della placca neuromuscolare",
  },
  {
    id: 556,
    TrueOrFalse: true,
    text: "La forza sviluppata da un muscolo dipende dalla concentrazione di calcio raggiunta durante la contrazione delle fibre muscolari",
  },
  {
    id: 557,
    TrueOrFalse: true,
    text: "In una contrazione muscolare di debole intensità l'accorciamento del muscolo avviene grazie alla contrazione attiva di solo una parte delle fibre muscolari, le altre fibre rimangono rilassate",
  },
  {
    id: 558,
    TrueOrFalse: false,
    text: "A seguito della depolarizzazione della membrana della fibra muscolare, il reticolo sarcoplasmatico rilascia ioni Na+ nel sarcoplasma",
  },
  {
    id: 559,
    TrueOrFalse: false,
    text: "L'acetilcolinesterasi è un enzima che produce acetilcolina a livello della placca neuromuscolare",
  },
  {
    id: 560,
    TrueOrFalse: true,
    text: "Le fibre muscolari rosse (toniche) sono più ricche di mioglobina e sono meno affaticabili di quelle fasiche (pallide)",
  },
  {
    id: 561,
    TrueOrFalse: true,
    text: "la liberazione di calcio nel sarcoplasma è necessaria perché avvenga la contrazione muscolare",
  },
  {
    id: 562,
    TrueOrFalse: true,
    text: "in una contrazione di debole intensità una parte delle cellule muscolari non viene eccitata e quindi non si contrae",
  },
  {
    id: 563,
    TrueOrFalse: true,
    text: "Le fibre di un'unica unità motoria sono innervate tutte dallo stesso motoneurone",
  },
  {
    id: 564,
    TrueOrFalse: false,
    text: "la contrazione della fibra muscolare cardiaca si ha per accorciamento dei filamenti di miosina e actina",
  },
  {
    id: 565,
    TrueOrFalse: true,
    text: "la fibra muscolare cardiaca sfrutta dell'ingresso di calcio dal compartimento extracellulare per avviare la contrazione",
  },
  {
    id: 566,
    TrueOrFalse: false,
    text: "Il riflesso Miotatico (o da stiramento) comporta sempre le attivazioni di muscoli flessori e l'inibizione di muscoli estensori",
  },
  {
    id: 567,
    TrueOrFalse: false,
    text: "Il riflesso Miotatico (o da stiramento) può essere evocato da uno stimolo doloroso sul tendine rotuleo ",
  },
  {
    id: 568,
    TrueOrFalse: true,
    text: "Il riflesso Miotatico (o da stiramento) è il riflesso per cui un muscolo che subisce un allungamento risponde con una contrazione",
  },
  {
    id: 569,
    TrueOrFalse: true,
    text: "Il riflesso Miotatico (o da stiramento) è mediato dall'attivazione di recettori muscolari",
  },
  {
    id: 570,
    TrueOrFalse: true,
    text: "Il miocardio a differenza della muscolatura scheletrica, non può avere una contrazione tetanica perché il potenziale d'azione della singola fibra muscolare e quindi il periodo di refrattarietà dura assai più a lungo (circa 300ms) che nella fibra muscolare scheletrica",
  },
  {
    id: 571,
    TrueOrFalse: true,
    text: "Il miocardio a differenza della muscolatura scheletrica, non può avere una contrazione tetanica perché la contrazione del muscolo cardiaco (sistole) ha una durata che è dello stesso ordine di grandezza di quella del potenziale d'azione (nella fibra muscolare cardiaca)",
  },
  {
    id: 572,
    TrueOrFalse: false,
    text: "Il miocardio a differenza della muscolatura scheletrica, non può avere una contrazione tetanica perché il parasimpatico invia impulsi inibitori nella fase di diastole",
  },
  {
    id: 573,
    TrueOrFalse: true,
    text: "L'attivazione simpatica aumenta la frequenza cardiaca e potenzia la contrattilità",
  },
  {
    id: 574,
    TrueOrFalse: true,
    text: "Il sistema parasimpatico influenza essenzialmente la frequenza cardiaca diminuendola",
  },
  {
    id: 575,
    TrueOrFalse: true,
    text: "Frequenza e contrattilità cardiaca sono potenziate anche dalle catecolamine (adrenalina e noradrenalina) circolanti (veicolate dal sangue)",
  },
  {
    id: 576,
    TrueOrFalse: true,
    text: "La secrezione di aldosterone è stimolata, tramite molecole intermedie, dalla renina",
  },
  {
    id: 577,
    TrueOrFalse: true,
    text: "L'aldosterone favorisce la secrezione di ioni potassio",
  },
  {
    id: 578,
    TrueOrFalse: false,
    text: "L'aldosterone è secreto dalla midollare del surrene",
  },
  {
    id: 579,
    TrueOrFalse: false,
    text: "(fegato) L'angiotensina II è secreta dalla corticale del surrene",
  },
  {
    id: 580,
    TrueOrFalse: true,
    text: "La liberazione di adrenalina è stimolata dal sistema simpatico",
  },
  {
    id: 581,
    TrueOrFalse: false,
    text: "I processi digestivi sono stimolati dal sistema simpatico",
  },
  {
    id: 582,
    TrueOrFalse: true,
    text: "Il pancreas ha funzione endocrina",
  },
  {
    id: 583,
    TrueOrFalse: false,
    text: "L'aldosterone è secreto dalla ipofisi anteriore",
  },
  {
    id: 584,
    TrueOrFalse: true,
    text: "l'aldosterone è secreto dalla corticale del surrene",
  },
  {
    id: 585,
    TrueOrFalse: false,
    text: "l'aldosterone è secreto dalle cellule della macula densa",
  },
  {
    id: 586,
    TrueOrFalse: false,
    text: "L'aldosterone favorisce la secrezione di sodio",
  },
  {
    id: 587,
    TrueOrFalse: false,
    text: "L'aldosterone provoca nel rene un aumento di secrezione di sodio",
  },
  {
    id: 588,
    TrueOrFalse: false,
    text: "(acido carbonico/bicarbonato) Il principale sistema tampone fisiologico è quello dei fosfati",
  },
  {
    id: 589,
    TrueOrFalse: false,
    text: "La compensazione renale dell'alcalosi avviene mediante aumentato riassorbimento di bicarbonato ",
  },
  {
    id: 590,
    TrueOrFalse: false,
    text: "I brividi accompagnano l'eliminazione di calore in eccesso durante gli episodi febbrili",
  },
  {
    id: 591,
    TrueOrFalse: true,
    text: "Il sistema nervoso simpatico regola gli scambi di calore nella porzione più esterna della superficie corporea",
  },
  {
    id: 592,
    TrueOrFalse: false,
    text: "I valori dei set point della temperatura corporea in condizioni fisiologiche è assolutamente invariabile durante la vita di un individuo",
  },
  {
    id: 593,
    TrueOrFalse: true,
    text: "Il principale distributore di calore tra i vari distretti corporei è il sangue",
  },
  {
    id: 594,
    TrueOrFalse: false,
    text: "Le fibre simpatiche che innervano il cuore hanno il loro corpo cellulare (soma) nel midollo spinale  ",
  },
  {
    id: 595,
    TrueOrFalse: false,
    text: "I motoneuroni alfa che innervano i muscoli scheletrici hanno il loro corpo cellulare nei gangli annessi alle radici dorsali del midollo spinale  ",
  },
  {
    id: 596,
    TrueOrFalse: false,
    text: "I movimenti posturali, che garantiscono il mantenimento della postura e dell'equilibrio dell'organismo nelle diverse situazioni sono pianificati nel dettaglio dalla corteccia motoria ",
  },
  {
    id: 597,
    TrueOrFalse: false,
    text: "La resistenza idraulica di un vaso sanguigno è inversamente proporzionale al quadrato del suo diametro",
  },
  {
    id: 598,
    TrueOrFalse: false,
    text: "La pressione del sangue nelle vene è leggermente superiore che nei capillari",
  },
  {
    id: 599,
    TrueOrFalse: true,
    text: "La pressione del sangue in vene e arterie è influenzata dalla postura",
  },
  {
    id: 600,
    TrueOrFalse: false,
    text: "La differenza di pressione osmotica tra sangue e liquido interstiziale vale circa 100 mmHg",
  },
  {
    id: 601,
    TrueOrFalse: false,
    text: "La velocità del sangue nei capillari è maggiore che nell'aorta dato che la sezione di un capillare è molto minore di quella dell'aorta ",
  },
  {
    id: 602,
    TrueOrFalse: true,
    text: "Un aumento dell'attività del sistema simpatico comporta in generale un aumento della pressione arteriosa",
  },
  {
    id: 603,
    TrueOrFalse: false,
    text: "Un'improvvisa ipotensione (abbassamento della pressione arteriosa) ha come primo effetto un aumento della concentrazione ematica di angiotensina II",
  },
  {
    id: 604,
    TrueOrFalse: true,
    text: "L'angiotensina II ha il duplice effetto di aumentare le resistenze vascolari e ridurre la diuresi attraverso l'azione dell'aldosterone",
  },
  {
    id: 605,
    TrueOrFalse: true,
    text: "in un soggetto che abbia subito un'emorragia è possibile osservare aumentata frequenza cardiaca e pallore (vasocostrizione cutanea)",
  },
  {
    id: 606,
    TrueOrFalse: true,
    text: "La pressione intrapleurica si mantiene negativa durante l'intero ciclo respiratorio normale",
  },
  {
    id: 607,
    TrueOrFalse: true,
    text: "La pressione intrapleurica può diventare positiva durante un colpo di tosse",
  },
  {
    id: 608,
    TrueOrFalse: false,
    text: "La pressione intrapleurica diventa molto negativa quando soffiamo per gonfiare un palloncino d'aria ",
  },
  {
    id: 609,
    TrueOrFalse: false,
    text: "La pressione intrapleurica si misura solitamente in cmH20 essendo 1cm H20=76 mmHg",
  },
  {
    id: 610,
    TrueOrFalse: true,
    text: "La pressione intrapleurica si misura in cmH20 essendo 1000cmH20=760 mmHg",
  },
  {
    id: 611,
    TrueOrFalse: true,
    text: "La pressione intrapleurica diventa prossima a zero nel pneumotorace",
  },
  {
    id: 612,
    TrueOrFalse: true,
    text: "Nel pneumotorace si verifica l'ingresso di aria nello spazio pleurico",
  },
  {
    id: 613,
    TrueOrFalse: false,
    text: "La presenza di surfattante nel film liquido alveolare ne abbassa la tensione superficiale con il risultato di diminuire la compliance polmonare ",
  },
  {
    id: 614,
    TrueOrFalse: false,
    text: "Un normale atto respiratorio non richiede la contrazione dei muscoli espiratori",
  },
  {
    id: 615,
    TrueOrFalse: false,
    text: "Durante un'espirazione tranquilla la pressione pleurica è leggermente positiva",
  },
  {
    id: 616,
    TrueOrFalse: false,
    text: "La pressione alveolare varia nella respirazione tranquilla tra +1 e -1 cmH2O",
  },
  {
    id: 617,
    TrueOrFalse: true,
    text: "L'anidride carbonica è trasportata dal sangue in combinazione con l'emoglobina",
  },
  {
    id: 618,
    TrueOrFalse: true,
    text: "L'anidride carbonica è trasportata dal sangue come gas disciolto, nel plasma",
  },
  {
    id: 619,
    TrueOrFalse: false,
    text: "L'anidride carbonica è trasportata dal sangue da enzimi specifici come l'anidrasi carbonica",
  },
  {
    id: 620,
    TrueOrFalse: true,
    text: "L'anidride carbonica è trasportata dal sangue soprattutto come bicarbonato ",
  },
  {
    id: 621,
    TrueOrFalse: false,
    text: "La fondamentale ritmicità del respiro per la quale inspirazione ed espirazione si alternano regolarmente è generata da un centro situato nel midollo spinale",
  },
  {
    id: 622,
    TrueOrFalse: true,
    text: "La fondamentale ritmicità del respiro per la quale inspirazione ed espirazione si alternano regolarmente è generata principalmente all'attività di centri situati nel bulbo ma è modulata da altri centri troncoencefalici e da varie afferenze",
  },
  {
    id: 623,
    TrueOrFalse: false,
    text: "La fondamentale ritmicità del respiro per la quale inspirazione ed espirazione si alternano regolarmente è generata a livello dei centri corticali",
  },
  {
    id: 624,
    TrueOrFalse: true,
    text: "La fondamentale ritmicità del respiro per la quale inspirazione ed espirazione si alternano regolarmente può essere alterata da stimoli emozionali",
  },
  {
    id: 625,
    TrueOrFalse: false,
    text: "La filtrazione è un processo che avviene lungo tutto il tubulo renale",
  },
  {
    id: 626,
    TrueOrFalse: false,
    text: "la filtrazione è un processo che avviene tramite meccanismi di diffusione facilitata",
  },
  {
    id: 627,
    TrueOrFalse: true,
    text: "la filtrazione è un processo che avviene solo nel glomerulo",
  },
  {
    id: 628,
    TrueOrFalse: true,
    text: "La filtrazione è un processo totalmente passivo",
  },
  {
    id: 629,
    TrueOrFalse: true,
    text: "Nel meccanismo di scambio per controcorrente vi è scambio di acqua e soluti",
  },
  {
    id: 630,
    TrueOrFalse: false,
    text: "Nel meccanismo di scambio per controcorrente vi è solo scambio di acqua ",
  },
  {
    id: 631,
    TrueOrFalse: false,
    text: "Nel meccanismo di scambio per controcorrente vi è solo scambio di soluti",
  },
  {
    id: 632,
    TrueOrFalse: false,
    text: "Nel meccanismo di scambio per controcorrente vi è scambio di plasma tra i vasa recta",
  },
  {
    id: 633,
    TrueOrFalse: false,
    text: "il processo di secrezione coinvolge acqua e soluti",
  },
  {
    id: 634,
    TrueOrFalse: true,
    text: "il processo di secrezione coinvolge solo molecole di soluti",
  },
  {
    id: 635,
    TrueOrFalse: true,
    text: "il processo di secrezione avviene lungo tutto il tubulo",
  },
  {
    id: 636,
    TrueOrFalse: false,
    text: "il processo di secrezione avviene solo nel dotto collettore",
  },
  {
    id: 637,
    TrueOrFalse: true,
    text: "il riassorbimento di acqua lungo il tubulo avviene secondo un gradiente osmotico",
  },
  {
    id: 638,
    TrueOrFalse: true,
    text: "il riassorbimento di acqua lungo il tubulo può essere modulato da fattori ormonali",
  },
  {
    id: 639,
    TrueOrFalse: true,
    text: "il rene ha funzione endocrina",
  },
  {
    id: 640,
    TrueOrFalse: false,
    text: "La parete tubulare non è in grado di riassorbire filtrato",
  },
  {
    id: 641,
    TrueOrFalse: true,
    text: "il pancreas ha funzione endocrina",
  },
  {
    id: 642,
    TrueOrFalse: true,
    text: "la clearance di una certa sostanza è la velocità con cui quella sostanza viene eliminata con le urine",
  },
  {
    id: 643,
    TrueOrFalse: false,
    text: "Nel tubulo in caso di acidosi aumenta la secrezione di ioni bicarbonato",
  },
  {
    id: 644,
    TrueOrFalse: true,
    text: "Nel tubulo in caso di acidosi aumenta la secrezione di ioni H+",
  },
  {
    id: 645,
    TrueOrFalse: true,
    text: "Nel tubulo in caso di acidosi aumenta il riassorbimento di ioni bicarbonato",
  },
  {
    id: 646,
    TrueOrFalse: false,
    text: "Nel tubulo in caso di acidosi l'anidrasi carbonica funziona da tampone",
  },
  {
    id: 647,
    TrueOrFalse: false,
    text: "il contributo del rene nell'ambito della regolazione della pressione arteriosa si esplica con la regolazione di escrezione di potassio",
  },
  {
    id: 648,
    TrueOrFalse: true,
    text: "il contributo del rene nell'ambito della regolazione della pressione arteriosa si esplica con la regolazione di escrezione di acqua ",
  },
  {
    id: 649,
    TrueOrFalse: false,
    text: "il contributo del rene nell'ambito della regolazione della pressione arteriosa si esplica con la regolazione di escrezione di ione idrogeno",
  },
  {
    id: 650,
    TrueOrFalse: true,
    text: "il contributo del rene nell'ambito della regolazione della pressione arteriosa si esplica con la regolazione di escrezione di ioni sodio",
  },
  {
    id: 651,
    TrueOrFalse: true,
    text: "il contributo del rene nell'ambito della regolazione della pressione arteriosa si esplica con il meccanismo renina-angiotensina-aldosterone",
  },
  {
    id: 652,
    TrueOrFalse: false,
    text: "il glucosio è una sostanza normalmente presente nelle urine in modesta quantità ",
  },
  {
    id: 653,
    TrueOrFalse: true,
    text: "La maggior parte dell'acqua è riassorbita dall'ultrafiltrato a livello del tubulo contorto prossimale",
  },
  {
    id: 654,
    TrueOrFalse: false,
    text: "Il liquido interstiziale è caratterizzato da un'osmolarità più elevata nella zona corticale rispetto alla zona midollare",
  },
  {
    id: 655,
    TrueOrFalse: false,
    text: "un abbassamento della pressione arteriosa sistemica provoca a livello renale un aumento della ritenzione idrica",
  },
  {
    id: 656,
    TrueOrFalse: true,
    text: "La clearance plasmatica renale di una sostanza rappresenta la quantità di sangue che in un minuto viene completamente depurata da quella sostanza dai due reni",
  },
  {
    id: 657,
    TrueOrFalse: true,
    text: "nel tubulo contorto prossimale il sodio viene riassorbito per trasporto attivo",
  },
  {
    id: 658,
    TrueOrFalse: false,
    text: "La velocità di filtrazione glomerulare è di circa 125 l al giorno",
  },
  {
    id: 659,
    TrueOrFalse: true,
    text: "La velocità di filtrazione glomerulare è regolata dalla risposta miogena della muscolatura liscia sull'arteriola afferente",
  },
  {
    id: 660,
    TrueOrFalse: true,
    text: "La velocità di filtrazione glomerulare è mantenuta costante per valori fisiologici di pressione arteriosa",
  },
  {
    id: 661,
    TrueOrFalse: true,
    text: "La velocità di filtrazione glomerulare è di circa 180 l/gg",
  },
  {
    id: 662,
    TrueOrFalse: true,
    text: "La velocità di filtrazione glomerulare è determinata dai gradienti di pressione tra il glomerulo e la capsula di Bowman",
  },
  {
    id: 663,
    TrueOrFalse: true,
    text: "l'urea filtrata viene in parte riassorbita per diffusione",
  },
  {
    id: 664,
    TrueOrFalse: false,
    text: "Lo sfintere esterno della vescica è formato da muscolatura liscia",
  },
  {
    id: 665,
    TrueOrFalse: true,
    text: "la concentrazione massima delle urine è di 1200 mOsm",
  },
  {
    id: 666,
    TrueOrFalse: true,
    text: "Un aumento di osmolarità del plasma fa aumentare la secrezione di vasopressina (ADH)",
  },
  {
    id: 667,
    TrueOrFalse: true,
    text: "il sistema di scambio controcorrente è utile per l'omeostasi dei liquidi corporei",
  },
  {
    id: 668,
    TrueOrFalse: false,
    text: "La vasopressina (ADH) rende il dotto collettore impermeabile all'acqua",
  },
  {
    id: 669,
    TrueOrFalse: true,
    text: "Una condizione di ipercapnia provoca un'acidosi respiratoria",
  },
  {
    id: 670,
    TrueOrFalse: false,
    text: "Una condizione di ipercapnia stimola attraverso il riflesso barocettivo un aumento della ventilazione",
  },
  {
    id: 671,
    TrueOrFalse: true,
    text: "Una condizione di ipercapnia stimola a livello renale riassorbimento di HCO3- dall'ultrafiltrato",
  },
  {
    id: 672,
    TrueOrFalse: true,
    text: "Una condizione di ipercapnia attiva i chemocettori centrali e periferici",
  },
  {
    id: 673,
    TrueOrFalse: true,
    text: "In condizioni normali la pressione parziale di ossigeno nel sangue arterioso vale circa 100 mmHg",
  },
  {
    id: 674,
    TrueOrFalse: true,
    text: "Il muscolo diaframma si contrae durante l'inspirazione",
  },
  {
    id: 675,
    TrueOrFalse: true,
    text: "In condizioni normali la saturazione dell'emoglobina nel sangue venoso è maggiore del 50%",
  },
  {
    id: 676,
    TrueOrFalse: false,
    text: "Se ad un soggetto sano viene fatto respirare ossigeno puro la quantità di ossigeno nel sangue arterioso risulta più che raddoppiata rispetto a quando respira aria normale",
  },
  {
    id: 677,
    TrueOrFalse: true,
    text: "La pressione pleurica è normalmente leggermente negativa rispetto alla pressione esterna",
  },
  {
    id: 678,
    TrueOrFalse: false,
    text: "Un rallentamento volontario della ventilazione alveolare diminuisce la concentrazione di CO2 nel sangue",
  },
  {
    id: 679,
    TrueOrFalse: true,
    text: "In una condizione di alcalosi metabolica la concentrazione di HCO3- è maggiore del normale",
  },
  {
    id: 680,
    TrueOrFalse: true,
    text: "In una condizione di alcalosi metabolica la compensazione respiratoria produce un aumento della concentrazione ematica di CO2",
  },
  {
    id: 681,
    TrueOrFalse: false,
    text: "Lo pneumotorace può essere causato dall'ostruzione di una via bronchiale",
  },
  {
    id: 682,
    TrueOrFalse: false,
    text: "L'intestino tenue è costituito dalla sequenza di tre tratti: il digiuno, l'ileo e il crasso",
  },
  {
    id: 683,
    TrueOrFalse: false,
    text: "i movimenti peristaltici nell'apparato digerente sono obiettivati al rimescolamento delle sostanze contenute all'interno",
  },
  {
    id: 684,
    TrueOrFalse: true,
    text: "il succo pancreatico è fortemente basico",
  },
  {
    id: 685,
    TrueOrFalse: true,
    text: "Gli ormoni pancreatici controllano la disponibilità di glucosio nel sangue",
  },
  {
    id: 686,
    TrueOrFalse: true,
    text: "La secrezione degli ormoni pancreatici è basata su un meccanismo a feedback negativo",
  },
  {
    id: 686,
    TrueOrFalse: false,
    text: "Il glucagone riduce il contenuto di glucosio nel sangue",
  },
  {
    id: 687,
    TrueOrFalse: false,
    text: "La produzione di insulina si mantiene mediamente costante durante l'arco della giornata",
  },
  {
    id: 688,
    TrueOrFalse: true,
    text: "La secrezione dell’ormone antidiuretico è mediata da un aumento dell'osmolarità del sangue",
  },
  {
    id: 689,
    TrueOrFalse: false,
    text: "La secrezione dell’ormone antidiuretico è inibita da un abbassamento della pressione arteriosa",
  },
  {
    id: 690,
    TrueOrFalse: false,
    text: "L’ormone antidiuretico agisce sulle cellule dell'epitelio del tubulo",
  },
  {
    id: 691,
    TrueOrFalse: true,
    text: "L’ormone antidiuretico agisce sulle cellule dell'epitelio del dotto collettore",
  },
  {
    id: 692,
    TrueOrFalse: true,
    text: "L’ormone antidiuretico favorisce il riassorbimento di acqua",
  },
  {
    id: 693,
    TrueOrFalse: false,
    text: "L’ormone antidiuretico favorisce la secrezione di acqua",
  },
  {
    id: 694,
    TrueOrFalse: true,
    text: "L’ormone antidiuretico è secreto dalla neuroipofisi",
  },
  {
    id: 695,
    TrueOrFalse: true,
    text: "Un aumento della concentrazione ematica dell’ormone antidiuretico provoca un rallentamento della produzione di urina",
  },
  {
    id: 696,
    TrueOrFalse: false,
    text: "L’ormone antidiuretico opera un controllo della diuresi variando la velocità di filtrazione glomerulare",
  },
  {
    id: 697,
    TrueOrFalse: true,
    text: "Sia i linfociti B che i macrofagi e le cellule dendritiche sono in grado di presentare antigeni ai linfociti T-helper attraverso MHC di classe II",
  },
  {
    id: 698,
    TrueOrFalse: true,
    text: "il tRNA possiede una tripletta che è complementare ad una tripletta su di un mRNA",
  },
  {
    id: 699,
    TrueOrFalse: true,
    text: "Gli osteoblasti di una lamella ossea depongono fibre collagene parallele",
  },
  {
    id: 700,
    TrueOrFalse: false,
    text: "La resistenza idraulica di un vaso sanguigno è inversamente proporzionale al quadrato del suo diametro",
  },
  {
    id: 701,
    TrueOrFalse: true,
    text: "La resistenza che un vaso offre al passaggio del sangue è direttamente proporzionale alla lunghezza del vaso",
  },
  {
    id: 702,
    TrueOrFalse: false,
    text: "La resistenza che un vaso offre al passaggio del sangue raddoppia se il diametro si dimezza",
  },
  {
    id: 703,
    TrueOrFalse: true,
    text: "La resistenza che un vaso offre al passaggio del sangue aumenta all'aumentare dell'ematocrito",
  },
  {
    id: 704,
    TrueOrFalse: false,
    text: "La resistenza che un vaso offre al passaggio del sangue può essere calcolata dal rapporto F/P, essendo F il flusso del sangue nel vaso e P la differenza di pressione esistente tra gli estremi del vaso",
  },
  {
    id: 705,
    TrueOrFalse: false,
    text: "In posizione eretta, negli arti inferiori la pressione del sangue nelle vene è leggermente superiore che nei capillari",
  },
  {
    id: 706,
    TrueOrFalse: false,
    text: "La differenza di pressione osmotica tra sangue e liquido interstiziale vale circa 100 mmHg",
  },
  {
    id: 707,
    TrueOrFalse: false,
    text: "La velocità del sangue nei capillari è maggiore che nell'aorta dato che la sezione di un capillare è molto minore di quella dell'aorta",
  },
  {
    id: 708,
    TrueOrFalse: true,
    text: "Desmosomi sono giunzioni tenaci",
  },
  {
    id: 709,
    TrueOrFalse: false,
    text: "Desmosomi: Si occupano della giunzione tra la cellula e la matrice extracellulare",
  },
  {
    id: 710,
    TrueOrFalse: true,
    text: "Desmosomi: In corrispondenza del desmosoma vi è uno spazio di circa 20 nm tra due membrane cellulari di cellule affrontate",
  },
  {
    id: 711,
    TrueOrFalse: false,
    text: "Una sezione del corpo realizzata secondo un piano sagittale può servire per mostrare la corteccia somatosensoriale nei due emisferi cerebrali",
  },
  {
    id: 712,
    TrueOrFalse: false,
    text: "Tra i meccanismi di trasporto attivo a livello della membrana cellulare rientra quello della pompa sodio-potassio, una proteina di membrana che trasporta sodio dall'esterno all'interno della cellula e potassio in direzione opposta",
  },
  {
    id: 713,
    TrueOrFalse: false,
    text: "Nel duodeno sono secreti succhi digestivi",
  },
  {
    id: 714,
    TrueOrFalse: true,
    text: "il sistema simpatico media la reazione attacco o fuga",
  },
  {
    id: 715,
    TrueOrFalse: false,
    text: "il sistema simpatico non innerva i vasi sanguigni",
  },
  {
    id: 716,
    TrueOrFalse: false,
    text: "il sistema simpatico stimola il rilascio di adrenalina da parte dell'ipofisi",
  },
  {
    id: 717,
    TrueOrFalse: true,
    text: "Il sistema simpatico innerva anche l'apparato digerente",
  },
  {
    id: 718,
    TrueOrFalse: false,
    text: "Il sistema simpatico rilascia acetilcolina a livello degli effettori",
  },
  {
    id: 719,
    TrueOrFalse: false,
    text: "L'attivazione del sistema simpatico accelera le funzioni digestive",
  },
  {
    id: 720,
    TrueOrFalse: true,
    text: "La velocità di filtrazione glomerulare aumenta se aumenta la pressione ematica nei capillari glomerulari",
  },
  {
    id: 721,
    TrueOrFalse: true,
    text: "La digestione delle proteine inizia nello stomaco",
  },
  {
    id: 722,
    TrueOrFalse: false,
    text: "La secrezione di ormone antidiuretico è stimolata in condizioni di ipertensione ed ha come effetto una produzione di urina poco concentrata",
  },
  {
    id: 723,
    TrueOrFalse: false,
    text: "Il paratormone è prodotto dall'ipofisi anteriore",
  },
  {
    id: 724,
    TrueOrFalse: false,
    text: "L'omeostasi è mantenuta attraverso meccanismi a feedback positivi",
  },
  {
    id: 725,
    TrueOrFalse: true,
    text: "I meccanismi a feedback negativo servono per mantenere costante un parametro fisiologico (entro un ambito normale)",
  },
  {
    id: 726,
    TrueOrFalse: false,
    text: "un gas attraversa facilmente la membrana per trasporto attivo primario",
  },
  {
    id: 727,
    TrueOrFalse: false,
    text: "Il trasporto attivo primario non richiede energia",
  },
  {
    id: 728,
    TrueOrFalse: true,
    text: "il calcio modula la contrazione muscolare",
  },
  {
    id: 729,
    TrueOrFalse: true,
    text: "La contrazione delle fibre muscolari scheletriche segue il potenziale d'azione muscolare",
  },
  {
    id: 730,
    TrueOrFalse: false,
    text: "Una stimolazione dolorifica all'intestino non provoca sensazione di dolore",
  },
  {
    id: 731,
    TrueOrFalse: true,
    text: "Elevate concentrazioni di potassio extracellulare rendono le cellule più eccitabili",
  },
  {
    id: 732,
    TrueOrFalse: false,
    text: "Nel muscolo scheletrico la massima forza viene esercitata alla lunghezza massima delle fibre",
  },
  {
    id: 733,
    TrueOrFalse: true,
    text: "Il muscolo liscio unitario risponde allo stiramento con una contrazione",
  },
  {
    id: 734,
    TrueOrFalse: false,
    text: "Il muscolo liscio utilizza più energia rispetto a quello striato",
  },
  {
    id: 735,
    TrueOrFalse: true,
    text: "Il muscolo liscio riceve sinapsi diffuse",
  },
  {
    id: 736,
    TrueOrFalse: false,
    text: "La muscolatura liscia non risente di segnali molecolari infiammatori o secreti localmente",
  },
  {
    id: 737,
    TrueOrFalse: true,
    text: "Il flusso unidirezionale è garantito dalle valvole cardiache e dalle valvole venose",
  },
  {
    id: 738,
    TrueOrFalse: false,
    text: "La pressione esercitata dal liquido sulle pareti di un contenitore aperto aumenta con il movimento del liquido",
  },
  {
    id: 739,
    TrueOrFalse: true,
    text: "La principale componente delle resistenze vascolari è il diametro del vaso",
  },
  {
    id: 740,
    TrueOrFalse: true,
    text: "il flusso di volume è generato da una differenza di pressioni ",
  },
  {
    id: 741,
    TrueOrFalse: true,
    text: "I cardiomiociti generano spontaneamente potenziali d'azione",
  },
  {
    id: 742,
    TrueOrFalse: false,
    text: "Le cellule cardiache si contraggono solo in risposta alla stimolazione nervosa",
  },
  {
    id: 743,
    TrueOrFalse: true,
    text: "I cardiomiociti presentano giunzioni comunicanti",
  },
  {
    id: 744,
    TrueOrFalse: false,
    text: "I cardiomiociti sono sempre contratti",
  },
  {
    id: 745,
    TrueOrFalse: false,
    text: "Nel muscolo cardiaco il rilascio del calcio nel reticolo sarcoplasmatico è indotto da un potenziale d'azione al cloro",
  },
  {
    id: 746,
    TrueOrFalse: true,
    text: "La quantità di calcio rilasciato dal reticolo sarcoplasmatico influenza la forza di contrazione dei cardiomiociti",
  },
  {
    id: 747,
    TrueOrFalse: false,
    text: "I neuroni multipolari posseggono molti assoni che originano dal corpo cellulare",
  },
  {
    id: 748,
    TrueOrFalse: true,
    text: "L'ampiezza del potenziale d'azione non è modulabile",
  },
  {
    id: 749,
    TrueOrFalse: true,
    text: "le cellule di Schwann formano la guaina mielinica nel sistema nervoso periferico",
  },
  {
    id: 750,
    TrueOrFalse: false,
    text: "Nel sistema nervoso dell'uomo, le sinapsi elettriche sono più numerose di quelle chimiche",
  },
  {
    id: 751,
    TrueOrFalse: false,
    text: "La diffusione semplice avviene contro gradiente di concentrazione",
  },
  {
    id: 752,
    TrueOrFalse: false,
    text: "Durante il potenziale d'azione i canali voltaggio-dipendenti per il sodio si aprono insieme ai canali voltaggio-dipendenti per il potassio",
  },
  {
    id: 753,
    TrueOrFalse: true,
    text: "Il Gaba è un neurotrasmettitore potenziato dai barbiturici",
  },
  {
    id: 754,
    TrueOrFalse: false,
    text: "Il sistema parasimpatico viene attivato per fronteggiare situazioni di pericolo/stress",
  },
  {
    id: 755,
    TrueOrFalse: false,
    text: "Nel neurone il sodio è più concentrato all'interno della cellula",
  },
  {
    id: 756,
    TrueOrFalse: false,
    text: "I recettori cutanei del sistema tattile sono tutti a rapido adattamento",
  },
  {
    id: 757,
    TrueOrFalse: false,
    text: "La capacità di discriminazione (acuità) tattile è uguale su tutta la superficie del corpo",
  },
  {
    id: 758,
    TrueOrFalse: false,
    text: "I recettori dolorifici sono tutti termocettori",
  },
  {
    id: 759,
    TrueOrFalse: false,
    text: "Gli oppiacei endogeni (endorfine) potenziano i segnali dolorifici",
  },
  {
    id: 760,
    TrueOrFalse: true,
    text: "Un soggetto asmatico corre il rischio di cadere in acidosi respiratoria ",
  },
  {
    id: 761,
    TrueOrFalse: false,
    text: "Il più importante sistema tampone intracellulare è quello dei fosfati organici",
  },
  {
    id: 762,
    TrueOrFalse: true,
    text: "Gli ormoni raggiungono le cellule bersaglio attraverso il circolo sanguigno ",
  },
  {
    id: 763,
    TrueOrFalse: false,
    text: "La porzione midollare della ghiandola surrenale secerne acetilcolina",
  },
  {
    id: 764,
    TrueOrFalse: false,
    text: "La filtrazione netta dei capillari periferici è uguale dei capillari polmonari",
  },
  {
    id: 765,
    TrueOrFalse: false,
    text: "Il potenziale d'azione cardiaco delle cellule miocardiche contrattili si scatena solo quando ricevono l'impulso sinaptico dal sistema nervoso simpatico",
  },
  {
    id: 766,
    TrueOrFalse: false,
    text: "Le resistenze vascolari dipendono soprattutto dalla resistenza del distretto venoso ",
  },
  {
    id: 767,
    TrueOrFalse: true,
    text: "Le resistenze vascolari possono aumentare o diminuire a seconda anche del controllo nervoso del sistema simpatico (vasocostrizione)",
  },
  {
    id: 768,
    TrueOrFalse: true,
    text: "Le resistenze vascolari sono in parte controllate da fattori metabolici e ormonali",
  },
  {
    id: 769,
    TrueOrFalse: false,
    text: "Le resistenze vascolari possono essere modificate dal riflesso barocettivo ",
  },
  {
    id: 770,
    TrueOrFalse: true,
    text: "Le resistenze vascolari dipendono dalla viscosità del sangue",
  },
  {
    id: 771,
    TrueOrFalse: true,
    text: "Nel cuore l’eccitazione elettrica può essere trasmessa direttamente da cellula a cellula",
  },
  {
    id: 772,
    TrueOrFalse: false,
    text: "Un aumento del Ph sanguigno può essere compensato da un aumento della concentrazione ematica di HCO3 ",
  },
  {
    id: 773,
    TrueOrFalse: true,
    text: "L’inibizione parziale dei canali del potassio determina un aumento della durata del potenziale d’azione",
  },
  {
    id: 774,
    TrueOrFalse: false,
    text: "Una riduzione del ph sanguigno può essere causata da un aumento della ventilazione ",
  },
  {
    id: 775,
    TrueOrFalse: false,
    text: "A livello della placca neuro muscolare viene rilasciato il neurotrasmettitore adrenalina ",
  },
  {
    id: 776,
    TrueOrFalse: false,
    text: "La trascrizione genica avviene nei mitocondri ",
  },
  {
    id: 777,
    TrueOrFalse: false,
    text: "In condizioni fisiologiche, l’eccitazione elettrica del muscolo cardiaco si origina a livello del nodo atrio ventricolare ",
  },
  {
    id: 778,
    TrueOrFalse: false,
    text: "La costante di tempo tau delle membrane cellulari, inteso come il tempo necessario alla membrana per raggiungere il 63% del valore del potenziale di membrana a seguito dell’iniezione di una determinata intensità di corrente, è superiore ai 10ms ",
  },
  {
    id: 779,
    TrueOrFalse: true,
    text: "La DNA polimerasi è in grado di eseguire una replicazione del DNA di tipo semiconservativa ",
  },
  {
    id: 780,
    TrueOrFalse: true,
    text: "Il riflesso barocettivo: il suo arco efferente comprende vie nervose simpatiche e parasimpatiche ",
  },
  {
    id: 781,
    TrueOrFalse: false,
    text: "Muscolo scheletrico: una fibra muscolare può essere innervata da due tre motoneuroni ",
  },
  {
    id: 782,
    TrueOrFalse: false,
    text: "La saturazione dell’emoglobina nel sangue venoso è in media pari al 15% ",
  },
  {
    id: 783,
    TrueOrFalse: true,
    text: "Lo ione calcio tende ad entrare nella cellula perché ha un potenziale di equilibrio elettrochimico positivo ",
  },
  {
    id: 784,
    TrueOrFalse: false,
    text: "Il riflesso barocettivo: risponde con una tachicardia ad un aumento della pressione arteriosa ",
  },
  {
    id: 785,
    TrueOrFalse: true,
    text: "Le fibre pregangliari del sistema nervoso autonomo rilasciano acetilcolina ",
  },
  {
    id: 786,
    TrueOrFalse: true,
    text: "Il riflesso patellare o da stiramento prevede il coinvolgimento dei fusi neuromuscolari ",
  },
  {
    id: 787,
    TrueOrFalse: false,
    text: "Un ormone agisce sempre nei pressi del sito di rilascio",
  },
  {
    id: 788,
    TrueOrFalse: true,
    text: "In un neurone la concentrazione intracellulare del k+ è superiore a quella del sodio ",
  },
  {
    id: 789,
    TrueOrFalse: false,
    text: "La valvola atrioventricolare si apre alla fine dell’onda s dell’elettrocardiogramma ",
  },
  {
    id: 790,
    TrueOrFalse: false,
    text: "Un aumento del pH sanguigno può causare un aumento della ventilazione ",
  },
  {
    id: 791,
    TrueOrFalse: false,
    text: "Una costrizione del distretto venoso provoca un forte aumento della resistenza vascolare complessiva (resistenza periferiche totali) ",
  },
  {
    id: 792,
    TrueOrFalse: true,
    text: "Al potenziale di equilibrio elettrochimico il flusso netto dello ione è nullo ",
  },
  {
    id: 793,
    TrueOrFalse: true,
    text: "Il riflesso barocettivo è mediato dai centri nervosi localizzati nel tronco encefalico ",
  },
  {
    id: 794,
    TrueOrFalse: true,
    text: "Nel midollo spinale le informazioni sensoriali afferiscono attraverso le corna dorsali ",
  },
  {
    id: 795,
    TrueOrFalse: true,
    text: "Un aumento del ph sanguigno può portare all’escrezione delle urine bianche ",
  },
  {
    id: 796,
    TrueOrFalse: true,
    text: "Muscolo scheletrico: a seguito dell’eccitazione elettrica della fibra muscolare vengono rilasciati ioni calcio nel citoplasma",
  },
  {
    id: 797,
    TrueOrFalse: true,
    text: "La membrana plasmatica è permeabile a soluti non polari ",
  },
  {
    id: 798,
    TrueOrFalse: true,
    text: "Nel rene il riassorbimento di acqua è soprattutto un fenomeno passivo che si realizza grazie alla presenza di gradienti osmotici tra tubulo e interstizio ",
  },
  {
    id: 799,
    TrueOrFalse: false,
    text: "La velocità di propagazione del potenziale di azione dipende dalla lunghezza dell’assone ",
  },
  {
    id: 800,
    TrueOrFalse: true,
    text: "l’aumento di metabolismo in un tessuto si accompagna solitamente ad un aumento della perfusione ( la quantità di sangue che il tessuto riceve) ",
  },
  {
    id: 801,
    TrueOrFalse: true,
    text: "un aumento di viscosità del sangue aumenta la resistenza che il sangue incontra nello scorrere lungo i vasi  ",
  },
  {
    id: 802,
    TrueOrFalse: true,
    text: "il grado di saturazione dell’emoglobina dipende dalla pressione parziale dell’ossigeno disciolto nel sangue ",
  },
  {
    id: 803,
    TrueOrFalse: true,
    text: "una forte perdita di sangue provoca in via riflessa un aumento della frequenza cardiaca e della secrezione di ormone antidiuretica (vasopressina) ",
  },
  {
    id: 804,
    TrueOrFalse: true,
    text: "il valore della gittata sistolica può diminuire se diminuisce il riempimento ventricolare alla fine della diastole (volume telediastolico) ",
  },
  {
    id: 805,
    TrueOrFalse: true,
    text: "Stimoli sensoriali raggiungono sempre la porzione controlaterale della corteccia ",
  },
  {
    id: 806,
    TrueOrFalse: true,
    text: "Alla fine di una inspirazione massimale la pressione intrapleurica è più negativa che alla fine di un’ispirazione tranquilla ",
  },
  {
    id: 807,
    TrueOrFalse: false,
    text: "Un aumento dell'attività del sistema parasimpatico diretta dal cuore accelera il battito cardiaco ",
  },
  {
    id: 808,
    TrueOrFalse: false,
    text: "Se l’azione costruttiva del sistema simpatico dimezza il raggio di un vaso sanguigno, la sua resistenza raddoppia ",
  },
  {
    id: 809,
    TrueOrFalse: true,
    text: "I due reni insieme ricevono un flusso di sangue pari al 20-25% della gittata cardiaca ",
  },
  {
    id: 810,
    TrueOrFalse: true,
    text: "La pressione parziale dell’anidride carbonica nell’aria alveolare è circa pari a quella del sangue arterioso ",
  },
  {
    id: 811,
    TrueOrFalse: true,
    text: "Il piano sagittale e il piano frontale sono tra loro perpendicolari ",
  },
  {
    id: 812,
    TrueOrFalse: false,
    text: "La quantità di aria scambiata con l’esterno ad ogni atto respiratorio (volume corrente) vale circa 6L ",
  },
  {
    id: 813,
    TrueOrFalse: true,
    text: "Muscolo scheletrico: le fibre muscolari possono essere lunghe anche più di 1 cm ",
  },
  {
    id: 814,
    TrueOrFalse: true,
    text: "Il reticolo endoplasmatico liscio è coinvolto nella sintesi lipidica ",
  },
  {
    id: 815,
    TrueOrFalse: true,
    text: "le sinapsi chimiche consentono il trasferimento dell’informazione in maniera unidirezionale ",
  },
  {
    id: 816,
    TrueOrFalse: false,
    text: "l’ulcera gastrica può essere curata mediante somministrazione di antinfiammatori ",
  },
  {
    id: 817,
    TrueOrFalse: true,
    text: "il ritorno di sangue al cuore è facilitato da inspirazioni profonde ",
  },
  {
    id: 818,
    TrueOrFalse: true,
    text: "nel rene il liquido interstiziale è osmoticamente più concentrato nella zona midollare che in quella corticale ",
  },
  {
    id: 819,
    TrueOrFalse: false,
    text: "i linfociti T producono immunoglobulina ",
  },
  {
    id: 820,
    TrueOrFalse: true,
    text: "il sistema nervoso simpatico è caratterizzato dal rilascio di catecolamine da parte delle fibre post gangliari ",
  },
  {
    id: 821,
    TrueOrFalse: false,
    text: "in condizioni normali la clearance plasmatica renale del glucosio vale circa 125 ml/min ",
  },
  {
    id: 822,
    TrueOrFalse: true,
    text: "la massima pressione del sangue raggiunta all’interno del ventricolo sinistro durante un ciclo cardiaco normale in un giovane è di circa 120 mm di mercurio ",
  },
  {
    id: 823,
    TrueOrFalse: true,
    text: "I due emisferi cerebrali nell'uomo sono in connessione anatomica tra loro",
  },
  {
    id: 824,
    TrueOrFalse: true,
    text: "Nel muscolo scheletrico la contrazione della fibra muscolare può avvenire solo a seguito di una sua eccitazione elettrica ",
  },
  {
    id: 825,
    TrueOrFalse: true,
    text: "Nel muscolo scheletrico i tubuli T hanno la funzione di condurre l'impulso elettrico nella parte più interna della cellula ",
  },
  {
    id: 826,
    TrueOrFalse: false,
    text: "Nel muscolo scheletrico la contrazione cessa quando l'acetilcolinesterasi ha degradato l'acetilcolina a livello della placca neuromuscolare",
  },
  {
    id: 827,
    TrueOrFalse: false,
    text: "Le fibre muscolari di tipo 2 quelle pallide hanno metabolismo prevalentemente aerobico come le fibre del muscolo cardiaco ",
  },
  {
    id: 828,
    TrueOrFalse: false,
    text: "Il rilassamento muscolare si ottiene grazie all'azione di interneuroni inibitori direttamente sulle fibre del muscolo scheletrico ",
  },
  {
    id: 829,
    TrueOrFalse: true,
    text: "Maggiore è la saturazione dell'emoglobina maggiore è il contenuto totale di ossigeno nel sangue ",
  },
  {
    id: 830,
    TrueOrFalse: false,
    text: "Il contenuto totale di ossigeno nel sangue è direttamente proporzionale alla pressione parziale di ossigeno nel sangue",
  },
  {
    id: 831,
    TrueOrFalse: false,
    text: "La saturazione dell'emoglobina nel sangue venoso misto è prossima a zero ",
  },
  {
    id: 832,
    TrueOrFalse: false,
    text: "Grazie alla presenza dell'emoglobina la pressione parziale dell'ossigeno nel sangue arterioso è maggiore che nell'aria all’esterno ",
  },
  {
    id: 833,
    TrueOrFalse: false,
    text: "Il trasporto di ossigeno dall'ambiente extracellulare a quello intracellulare è mediato da specifiche proteine di membrana ",
  },
  {
    id: 834,
    TrueOrFalse: false,
    text: "Il sistema parasimpatico riduce la forza di contrazione del cuore, la frequenza respiratoria e la dimensione pupillare ",
  },
  {
    id: 835,
    TrueOrFalse: true,
    text: "La forza di contrazione del cuore dipende anche dal grado di riempimento delle camere cardiache ",
  },
  {
    id: 836,
    TrueOrFalse: false,
    text: "Nel cuore la velocità di trasmissione dell'eccitazione elettrica è massima a livello del nodo atrioventricolare ",
  },
  {
    id: 837,
    TrueOrFalse: true,
    text: "Una delle azioni della noradrenalina sul muscolo cardiaco è quella di aumentare la frequenza di potenziale d'azione delle cellule pacemaker ",
  },
  {
    id: 838,
    TrueOrFalse: false,
    text: "La pressione sistolica di un soggetto normopeso con pressione arteriosa normale è di circa 80 mmHg ",
  },
  {
    id: 839,
    TrueOrFalse: false,
    text: "La valvola atrioventricolare si apre durante la sistole atriale ",
  },
  {
    id: 840,
    TrueOrFalse: true,
    text: "L'onda T dell'elettrocardiogramma è generata dalla ripolarizzazione dei ventricoli ",
  },
  {
    id: 841,
    TrueOrFalse: false,
    text: "La massima pressione ventricolare si raggiunge tra l'onda P e l'onda Q dell'elettrocardiogramma",
  },
  {
    id: 842,
    TrueOrFalse: true,
    text: "La prima derivazione dell'elettrocardiogramma standard corrisponde alla differenza di potenziale tra i due polsi ",
  },
  {
    id: 843,
    TrueOrFalse: false,
    text: "La distanza tra due onde R di un elettrocardiogramma normale non supera solitamente 200 millisecondi ",
  },
  {
    id: 844,
    TrueOrFalse: false,
    text: "I recettori di pressione che mediano il riflesso barocettivo sono situati a livello della vena cava superiore inferiore",
  },
  {
    id: 845,
    TrueOrFalse: true,
    text: "Un aumento di pressione che si mantenga per diverse ore può causare un aumento della diuresi ",
  },
  {
    id: 846,
    TrueOrFalse: false,
    text: "A seguito di una forte emorragia la concentrazione ematica di renina diminuisce ",
  },
  {
    id: 847,
    TrueOrFalse: false,
    text: "Un aumento della pressione arteriosa può essere causato da un aumento del sistema nervoso parasimpatico ",
  },
  {
    id: 848,
    TrueOrFalse: false,
    text: "Un aumento della pressione arteriosa può causare un aumento dell'attività simpatica ",
  },
  {
    id: 849,
    TrueOrFalse: true,
    text: "La velocità di filtrazione glomerulare ha un valore di circa 125 ml/min ",
  },
  {
    id: 850,
    TrueOrFalse: true,
    text: "La velocità di filtrazione glomerulare aumenta se aumenta la pressione del sangue all'interno dei capillari glomerulari  ",
  },
  {
    id: 851,
    TrueOrFalse: true,
    text: "La velocità di filtrazione glomerulare aumenta se si costringe la arteriola efferente  ",
  },
  {
    id: 852,
    TrueOrFalse: true,
    text: "La velocità di filtrazione glomerulare si mantiene approssimativamente costante anche se la pressione arteriosa media aumenta da 100 a 150 mmHg ",
  },
  {
    id: 853,
    TrueOrFalse: false,
    text: "La velocità di filtrazione glomerulare può essere stimata misurando la clearance plasmatica renale del glucosio ",
  },
  {
    id: 854,
    TrueOrFalse: false,
    text: "La contrazione del muscolo diaframma espande la cavità addominale e comprime la cavità toracica ",
  },
  {
    id: 855,
    TrueOrFalse: true,
    text: "Sull'equilibrio acido-base uno stato di alcalosi metabolica, può essere causato da una perdita di acidi gastrici a causa di vomito ",
  },
  {
    id: 856,
    TrueOrFalse: true,
    text: "Uno stato di alcalosi metabolica è caratterizzato da una concentrazione di ioni idrogeno nel sangue più bassa del normale ",
  },
  {
    id: 857,
    TrueOrFalse: false,
    text: "Uno stato di alcalosi metabolica presenta una concentrazione di CO2 più bassa del normale ",
  },
  {
    id: 858,
    TrueOrFalse: true,
    text: "Uno stato di alcalosi metabolica può essere compensata da una aumentata eliminazione renale di HCO3- ",
  },
  {
    id: 859,
    TrueOrFalse: true,
    text: "I nodi di Ranvier non sono mielinizzati ",
  },
  {
    id: 860,
    TrueOrFalse: false,
    text: "Il flusso ionico attraverso la membrana è tanto più intenso quanto più ci si avvicina al potenziale di equilibrio elettrochimico dello ione in esame ",
  },
  {
    id: 861,
    TrueOrFalse: true,
    text: "Il potenziale d'azione neuronale consiste in una rapida depolarizzazione e ripolarizzazione del potenziale di membrana ",
  },
  {
    id: 862,
    TrueOrFalse: false,
    text: "Il reticolo endoplasmatico rugoso contiene frammenti di RNA ",
  },
  {
    id: 863,
    TrueOrFalse: true,
    text: "Il riflesso di retrazione non prevede il coinvolgimento dei fusi neuromuscolari ",
  },
  {
    id: 864,
    TrueOrFalse: false,
    text: "Il sistema del complemento è considerato un meccanismo di difesa immunitario aspecifico cellulare ",
  },
  {
    id: 865,
    TrueOrFalse: true,
    text: "In un neurone la concentrazione intracellulare del potassio è superiore a quella del calcio ",
  },
  {
    id: 866,
    TrueOrFalse: true,
    text: "L'inattivazione dei canali del sodio contribuisce a definire il picco massimo del potenziale d'azione ",
  },
  {
    id: 867,
    TrueOrFalse: false,
    text: "L'insulina si lega a recettori ionotropi ",
  },
  {
    id: 868,
    TrueOrFalse: false,
    text: "L'ulcera gastrica può essere curata mediante somministrazione di antinfiammatori",
  },
  {
    id: 869,
    TrueOrFalse: false,
    text: "La costante di tempo di membrana in un neurone è pari a 20 secondi ",
  },
  {
    id: 870,
    TrueOrFalse: true,
    text: "La DNA polimerasi è in grado di eseguire una replicazione del DNA di tipo semiconservativa ",
  },
  {
    id: 871,
    TrueOrFalse: true,
    text: "Una DNA polimerasi sintetizza in direzione 5' 3' ",
  },
  {
    id: 872,
    TrueOrFalse: false,
    text: "La dopamina è il principale neurotrasmettitore presente a livello ippocampale ",
  },
  {
    id: 873,
    TrueOrFalse: true,
    text: "La funzionalità della tiroide è controllata dalla adenoipofisi mediante produzione dell'ormone TSH ",
  },
  {
    id: 874,
    TrueOrFalse: true,
    text: "La gastrina è un ormone prodotto dalle cellule endocrine dello stomaco ",
  },
  {
    id: 875,
    TrueOrFalse: false,
    text: "La legge di Nernst esprime il valore del potenziale di membrana in funzione delle concentrazioni ioniche intra ed extracellulari di diversi ioni ",
  },
  {
    id: 876,
    TrueOrFalse: false,
    text: "La trascrizione genica è un processo che avviene a livello dei ribosomi ",
  },
  {
    id: 877,
    TrueOrFalse: false,
    text: "La trascrizione genica consente di ottenere un filamento di DNA a partire da un filamento stampo di RNA ",
  },
  {
    id: 878,
    TrueOrFalse: false,
    text: "Sempre la trascrizione genica necessità dei degli RNA di tipo transfer (tRNA) ",
  },
  {
    id: 879,
    TrueOrFalse: false,
    text: "Le proteine G sono associate recettori ad attività tirosina chinasi ",
  },
  {
    id: 880,
    TrueOrFalse: false,
    text: "Le sinapsi chimiche consentono il trasferimento delle informazioni in maniera bidirezionale ",
  },
  {
    id: 881,
    TrueOrFalse: false,
    text: "Nel midollo spinale le vie motorie decorrono attraverso le corna dorsali ",
  },
  {
    id: 882,
    TrueOrFalse: false,
    text: "Nella percezione degli stimoli sensoriali la capacità di discriminare tra stimoli di intensità diversa (soglia differenziale) dipende dall'intensità dello stimolo secondo una relazione di tipo lineare ",
  },
  {
    id: 883,
    TrueOrFalse: true,
    text: "Un flusso in ingresso di ioni cloro attraverso la membrana causa iperpolarizzazione",
  },
  {
    id: 884,
    TrueOrFalse: true,
    text: "Le resistenze vascolari sono in parte controllate da fattori metabolici dei tessuti",
  },
  {
    id: 885,
    TrueOrFalse: true,
    text: "Il codone è la sequenza di 3 basi azotate presente sull’mRNA a cui si appaia l’anticodone del tRNA ",
  },
  {
    id: 886,
    TrueOrFalse: true,
    text: "La sintesi del DNA è un processo semiconservativo",
  },
  {
    id: 887,
    TrueOrFalse: false,
    text: "Un ingresso di ioni cloro Cl- crea depolarizzazione ",
  },
  {
    id: 888,
    TrueOrFalse: false,
    text: "Il glutammato è un neurotrasmettitore inibitorio ",
  },
  {
    id: 889,
    TrueOrFalse: true,
    text: "L’ampiezza del potenziale d’azione in un neurone è costante ",
  },
  {
    id: 890,
    TrueOrFalse: true,
    text: "Meccanocettori e nocicettori afferiscono alla corteccia somatosensoriale seguendo vie ascendenti diverse ",
  },
  {
    id: 891,
    TrueOrFalse: false,
    text: "Nel controllo a cancello del dolore stimoli termici contribuiscono a inibire stimoli dolorifici ",
  },
  {
    id: 892,
    TrueOrFalse: false,
    text: "Le resistenze vascolari dipendono soprattutto dalla resistenza del sistema venoso ",
  },
  {
    id: 893,
    TrueOrFalse: true,
    text: "Le resistenze vascolari possono essere modificate dal sistema nervoso simpatico ",
  },
  {
    id: 894,
    TrueOrFalse: true,
    text: "Le resistenze vascolari aumentano all’aumentare della viscosità del sangue",
  },
  {
    id: 895,
    TrueOrFalse: true,
    text: "La compliance polmonare è calcolabile come rapporto delta V/delta P essendo V il volume polmonare e p la pressione transparietale ",
  },
  {
    id: 896,
    TrueOrFalse: false,
    text: "La compliance polmonare diminuisce se aumenta la concentrazione del surfattante nel film liquido alveolare ",
  },
  {
    id: 897,
    TrueOrFalse: true,
    text: "La resistenza del polmone ad espandersi è in parte dovuta al fatto che gli alveoli sono bagnati al loro interno ",
  },
  {
    id: 898,
    TrueOrFalse: false,
    text: "La variazione di pressione pleurica in un atto respiratorio normale è di circa 20 cmH2O",
  },
  {
    id: 899,
    TrueOrFalse: false,
    text: "Una condizione di acidosi metabolica stimola un aumento della escrezione di HCO3- nelle urine ",
  },
  {
    id: 900,
    TrueOrFalse: false,
    text: "Una condizione di acidosi metabolica può essere provocata da una patologia ostruttiva delle vie respiratorie ",
  },
  {
    id: 901,
    TrueOrFalse: false,
    text: "Una condizione di acidosi metabolica è caratterizzata da un eccesso di CO2 nel sangue ",
  },
  {
    id: 902,
    TrueOrFalse: false,
    text: "Una condizione di acidosi metabolica può verificarsi in seguito alla perdita di succhi gastrici con il vomito",
  },
  {
    id: 903,
    TrueOrFalse: false,
    text: "ECG il nodo atrioventricolare introduce un ritardo nella conduzione dell’onda di depolarizzazione di circa 1s ",
  },
  {
    id: 904,
    TrueOrFalse: true,
    text: "Esiste una fase della sistole ventricolare in cui entrambe le valvole atrioventricolari e aortica sono chiuse",
  },
  {
    id: 905,
    TrueOrFalse: false,
    text: "Nell’intervallo tra l’onda S e l’onda T dell’elettrocardiogramma è localizzata la sistole atriale",
  },
  {
    id: 906,
    TrueOrFalse: false,
    text: "La pressione intrapleurica diventa più negativa quando soffiamo per gonfiare un palloncino d’aria ",
  },
  {
    id: 907,
    TrueOrFalse: false,
    text: "L’angiotensina II ha il duplice effetto di aumentare le resistenze vascolari e aumentare la diuresi attraverso l’azione dell’aldosterone ",
  },
  {
    id: 908,
    TrueOrFalse: false,
    text: "I neuroni multipolari posseggono molti assoni che originano dal corpo cellulare",
  },
  {
    id: 909,
    TrueOrFalse: true,
    text: "L’ampiezza del potenziale d’azione non è modulabile",
  },
  {
    id: 910,
    TrueOrFalse: true,
    text: "Le cellule di Schwann formano la guaina mielinica nel sistema nervoso periferico",
  },
  {
    id: 911,
    TrueOrFalse: false,
    text: "Nel sistema nervoso dell’uomo, le sinapsi elettriche sono più numerose di quelle chimiche",
  },
  {
    id: 912,
    TrueOrFalse: false,
    text: "La diffusione semplice avviene contro il gradiente di concentrazione",
  },
  {
    id: 913,
    TrueOrFalse: false,
    text: "I nodi di Ranvier sono i punti in cui gli assoni si ramificano",
  },
  {
    id: 914,
    TrueOrFalse: false,
    text: "Durante il potenziale d’azione i canali voltaggio-dipendenti per il sodio si aprono insieme ai canali voltaggio-dipendenti per il potassio",
  },
  {
    id: 915,
    TrueOrFalse: true,
    text: "Il GABA è un neurotrasmettitore potenziato dai barbiturici",
  },
  {
    id: 916,
    TrueOrFalse: false,
    text: "Il sistema parasimpatico viene attivato per fronteggiare situazioni di pericolo/stress",
  },
  {
    id: 917,
    TrueOrFalse: false,
    text: "Nel neurone il sodio è più concentrato all’interno della cellula",
  },
  {
    id: 918,
    TrueOrFalse: false,
    text: "I recettori cutanei del sistema tattile sono tutti a rapido adattamento",
  },
  {
    id: 919,
    TrueOrFalse: false,
    text: "La capacità di discriminazione (acuità) tattile è uguale su tutte le superfici del corpo",
  },
  {
    id: 920,
    TrueOrFalse: false,
    text: "I recettori dolorifici sono tutti termorecettori",
  },
  {
    id: 921,
    TrueOrFalse: false,
    text: "Gli oppiacei endogeni (endorfine) potenziano i segnali dolorifici",
  },
  {
    id: 922,
    TrueOrFalse: true,
    text: "Un soggetto asmatico corre il rischio di cadere in acidosi respiratoria",
  },
  {
    id: 923,
    TrueOrFalse: false,
    text: "Il più importante sistema tampone intracellulare è quello dei fosfati organici",
  },
  {
    id: 924,
    TrueOrFalse: true,
    text: "Gli ormoni raggiungono le cellule bersaglio attraverso il circolo sanguigno ",
  },
  {
    id: 925,
    TrueOrFalse: false,
    text: "La porzione midollare della ghiandola surrenale secerne acetilcolina",
  },
  {
    id: 926,
    TrueOrFalse: false,
    text: "Il potenziale d’azione cardiaco delle cellule miocardiche contrattili si scatena solo quando riceve l’impulso simpatico del sistema nervoso simpatico",
  },
  {
    id: 927,
    TrueOrFalse: false,
    text: "Il riflesso barocettivo è deputato a mantenere costante la pressione intrapleurica",
  },
  {
    id: 928,
    TrueOrFalse: true,
    text: "Il riflesso barocettivo È un meccanismo di regolazione relativamente rapido: tempo di intervallo dell’ordine di qualche secondo",
  },
  {
    id: 929,
    TrueOrFalse: false,
    text: "Il riflesso barocettivo È tale per cui un aumento di pressione arteriosa sistemica provoca un aumento di frequenza cardiaca",
  },
  {
    id: 930,
    TrueOrFalse: true,
    text: "Il riflesso barocettivo Influenza l’attività del sistema nervoso autonomo simpatico e parasimpatico",
  },
  {
    id: 931,
    TrueOrFalse: false,
    text: "Velocità di filtrazione glomerulare Ha un valore di circa 120 ml/s",
  },
  {
    id: 932,
    TrueOrFalse: true,
    text: "Velocità di filtrazione glomerulare Si mantiene approssimativamente costante anche se la pressione arteriosa sistemica media aumenta a 150 mmHg",
  },
  {
    id: 933,
    TrueOrFalse: true,
    text: "Velocità di filtrazione glomerulare Può essere stimata misurando la clearance plasmatica renale dell’insulina",
  },
  {
    id: 934,
    TrueOrFalse: false,
    text: "Velocità di filtrazione glomerulare Dipende dal contenuto proteico del filtrato",
  },
  {
    id: 935,
    TrueOrFalse: true,
    text: "L’unità motoria è definita come l’insieme di un motoneurone e di tutte le fibre muscolari da esso innervate",
  },
  {
    id: 936,
    TrueOrFalse: true,
    text: "Una fibra muscolare può essere innervata da un solo motoneurone",
  },
  {
    id: 937,
    TrueOrFalse: false,
    text: "L’accoppiamento di actina e miosina è innescato dall’ingresso di ioni cloro nella cellula muscolare",
  },
  {
    id: 938,
    TrueOrFalse: false,
    text: "I tubuli T contengono citoplasma e ioni calcio in concentrazione elevata",
  },
  {
    id: 939,
    TrueOrFalse: false,
    text: "Un singolo impulso elettrico evoca una contrazione muscolare della durata di circa 1s",
  },
  {
    id: 940,
    TrueOrFalse: false,
    text: "L’aumento delle resistenze vascolari da parte del sistema simpatico è ottenuto attraverso la costrizione del distretto venoso",
  },
  {
    id: 941,
    TrueOrFalse: false,
    text: "La tachicardia è un rallentamento fisiologico del battito cardiaco",
  },
  {
    id: 942,
    TrueOrFalse: false,
    text: "I barocettori attivano il sistema simpatico nel caso aumenti la concentrazione di anidride carbonica nel sangue",
  },
  {
    id: 943,
    TrueOrFalse: false,
    text: "Il sistema simpatico controlla la costrizione dei vasi sanguigni attraverso il rilascio di acetilcolina",
  },
  {
    id: 944,
    TrueOrFalse: true,
    text: "Un blocco farmacologico dell’attività parasimpatica diretta al cuore ha l’effetto di aumentare la frequenza cardiaca",
  },
  {
    id: 945,
    TrueOrFalse: true,
    text: "Il cuore è in grado di eccitarsi ritmicamente anche se privo dell’innervazione autonoma",
  },
  {
    id: 946,
    TrueOrFalse: true,
    text: "Un abbassamento improvviso della pressione può evocare in via riflessa vasocostrizione arteriolare",
  },
  {
    id: 947,
    TrueOrFalse: false,
    text: "L’angiotensina II è un potente vasodilatatore e stimola la secrezione di ormone antidiuretico",
  },
  {
    id: 948,
    TrueOrFalse: true,
    text: "La regolazione della pressione arteriosa avviene anche attraverso il controllo della volemia",
  },
  {
    id: 949,
    TrueOrFalse: true,
    text: "La somministrazione di diuretici può influenzare la pressione arteriosa",
  },
  {
    id: 950,
    TrueOrFalse: false,
    text: "un abbassamento improvviso della pressione arteriosa comporta un aumento riflesso dell’attività parasimpatica al cuore",
  },
  {
    id: 951,
    TrueOrFalse: true,
    text: "Fattori che agevolano il ritorno venoso di sangue al cuore Effettuare inspirazioni profonde",
  },
  {
    id: 952,
    TrueOrFalse: true,
    text: "Fattori che agevolano il ritorno venoso di sangue al cuore Aumento del tono simpatico del distratti venoso",
  },
  {
    id: 953,
    TrueOrFalse: false,
    text: "Fattori che agevolano il ritorno venoso di sangue al cuore Assunzione della posizione ortostatica rispetto a quella clinostatica",
  },
  {
    id: 954,
    TrueOrFalse: false,
    text: "Fattori che agevolano il ritorno venoso di sangue al cuore Riduzione della pressione parziale dell’anidride carbonica nel sangue arterioso",
  },
  {
    id: 955,
    TrueOrFalse: false,
    text: "Fattori che agevolano il ritorno venoso di sangue al cuore Aumento della pressione addominale (es. durante gravidanza)",
  },
  {
    id: 956,
    TrueOrFalse: true,
    text: " Nel distretto venoso si concentra la maggior parte della resistenza idraulica del circolo sistemico",
  },
  {
    id: 957,
    TrueOrFalse: false,
    text: "Il circolo polmonare è caratterizzato da basse pressioni ed elevata resistenza idraulica",
  },
  {
    id: 958,
    TrueOrFalse: true,
    text: "In ortostatismo (corpo in posizione verticale) il ritorno di sangue venoso al cuore è messo in difficoltà dalla forza di gravità ma può essere aiutato da un aumento del tono simpatico delle vene",
  },
  {
    id: 959,
    TrueOrFalse: false,
    text: "La resistenza idraulica di un vaso sanguigno dipende solo dalle sue dimensioni e non dalle caratteristiche del sangue",
  },
  {
    id: 960,
    TrueOrFalse: true,
    text: "Una riduzione della concentrazione di ossigeno nei tessuti provoca in generale una riduzione della resistenza vascolare",
  },
  {
    id: 961,
    TrueOrFalse: true,
    text: "La misura non-invasiva della pressione arteriosa tramite sfigmomanometro di Riva-Rocci è influenzata dalla velocità di sgonfiaggio del manicotto",
  },
  {
    id: 962,
    TrueOrFalse: false,
    text: "La dilatazione dei vasi sanguigni si ottiene principalmente attraverso un'attivazione dell'efferenza parasimatica",
  },
  {
    id: 963,
    TrueOrFalse: true,
    text: "I capillari hanno la possibilità di essere aperti e chiusi e quindi di essere reclutati",
  },
  {
    id: 964,
    TrueOrFalse: true,
    text: "I capillari linfatici sono dotati di valvole",
  },
  {
    id: 965,
    TrueOrFalse: true,
    text: "L'edema è un accumulo di liquido negli spazi interstiziali",
  },
  {
    id: 966,
    TrueOrFalse: false,
    text: "La vasocostrizione arteriolare favorisce lo sviluppo di edema ",
  },
  {
    id: 967,
    TrueOrFalse: false,
    text: "Nel potenziale di azione delle cellule del miocardio contrattile, la fase di plateau è regolata dalle correnti di sodio ",
  },
  {
    id: 968,
    TrueOrFalse: true,
    text: "Durante la ripolarizzazione dei ventricoli nell'elettrocardiogramma si manifesta l'onda T",
  },
  {
    id: 969,
    TrueOrFalse: true,
    text: "Durante la sistole atriale la valvola semilunare aortica è chiusa",
  },
  {
    id: 970,
    TrueOrFalse: false,
    text: "La valvola atrio-ventricolare si chiude al termine della contrazione iso-volumetrica dei ventricoli",
  },
  {
    id: 971,
    TrueOrFalse: true,
    text: "La pressione parziale di un gas disciolto in un liquido è proporzionale alla sua concentrazione",
  },
  {
    id: 972,
    TrueOrFalse: false,
    text: "Alla fine di un atto espiratorio normale (a riposo) rimangono a riposo circa 0.5 litri di aria ",
  },
  {
    id: 973,
    TrueOrFalse: false,
    text: "Il ritmo respiratorio è generato da cellule autoritmiche localizzate nell'ipotalamo",
  },
  {
    id: 974,
    TrueOrFalse: true,
    text: "In condizioni iperbariche (elevata pressione ambientale) aumenta la concentrazione dei gas disciolti nel sangue",
  },
  {
    id: 975,
    TrueOrFalse: true,
    text: "La pressione parziale di CO2 intracellulare è generalmente maggiore di quella dell'ambiente intersteziale circostante",
  },
  {
    id: 976,
    TrueOrFalse: true,
    text: "Il surfactante è una sostanza che ha l'effetto di ridurre la tensione superficiale del liquido in cui è disciolto",
  },
  {
    id: 977,
    TrueOrFalse: false,
    text: "A parità di pressione parziale di ossigeno nel sangue arterioso la saturazione dell'emoglobina in un soggetto anemico (bassa concentrazione di emoglobina nel sangue) è minore che in un soggetto normale",
  },
  {
    id: 978,
    TrueOrFalse: false,
    text: "Una riduzione della CO2 nel sangue stimola attraverso il riflesso chemocettivo un aumento della ventilazione",
  },
  {
    id: 979,
    TrueOrFalse: false,
    text: "Tutti i soluti del sangue di 'piccole' dimensioni vengono filtrati liberamente a livello dei capillari glomerulari e sono tutti completamente riassorbiti nei vari tratti del tubulo renale ",
  },
  {
    id: 980,
    TrueOrFalse: false,
    text: "La velocità di filtrazione glomerulare varia proporzionalmente alla pressione arteriosa sistemica",
  },
  {
    id: 981,
    TrueOrFalse: true,
    text: "L'ormone antidiuretico ha l'azione di aumentare la permeabilità dell'acqua della parete del tubulo renale",
  },
  {
    id: 982,
    TrueOrFalse: true,
    text: "La parete tubulare nella parte ascendente dell'ansa di Henle è impermeabile all'acqua",
  },
  {
    id: 983,
    TrueOrFalse: true,
    text: "In condizioni normali la clearance plasmatica renale di HCO3- è prossima a zero ma può aumentare in condizioni di alcalosi",
  },
  {
    id: 984,
    TrueOrFalse: false,
    text: "In una situazione di alcalosi metabolica la compensazione respiratoria del pH sanguigno si realizza attraverso una iperventilazione",
  },
  {
    id: 985,
    TrueOrFalse: true,
    text: "In condizioni fisiologiche la contrazione del muscolo scheletrico si sviluppa solo a seguito di un'eccitazione elettrica delle fibre muscolari",
  },
  {
    id: 986,
    TrueOrFalse: false,
    text: "In condizioni fisiologiche la contrazione del muscolo scheletrico si sviluppa solo a seguito di un comando motorio trasmesso da fibre simpatiche e parasimpatiche",
  },
  {
    id: 987,
    TrueOrFalse: false,
    text: "Nel muscolo scheletrico i tubuli T sono serbatoi intracellulari che contengono ioni calcio ",
  },
  {
    id: 988,
    TrueOrFalse: false,
    text: "Nel muscolo scheletrico la cellula muscolare rimane contratta fintanto che è deporalizzata e si rilassa al termine del potenziale d'azione",
  },
  {
    id: 989,
    TrueOrFalse: false,
    text: "I canali del sodio inattivati conducono corrente ",
  },
  {
    id: 990,
    TrueOrFalse: false,
    text: "I condrociti sono cellule del tessuto osseo",
  },
  {
    id: 991,
    TrueOrFalse: false,
    text: "La costante di tempo TAU delle membrane cellulari, inteso come il tempo necessario alla membrana per raggiungere il 63% del valore di membrana a seguito dell'iniezione di una quantità di corrente pari a 10ms",
  },
  {
    id: 992,
    TrueOrFalse: false,
    text: "I due emisferi cerebrali nell'uomo non presentano alcuna connessione anatomica e svolgono funzioni indipendenti tra loro",
  },
  {
    id: 993,
    TrueOrFalse: false,
    text: "Le fibre simpatiche stimolano la motilità intestinale",
  },
  {
    id: 994,
    TrueOrFalse: false,
    text: "Gli oligodendrociti sono neuroni eccitatori",
  },
  {
    id: 995,
    TrueOrFalse: true,
    text: "I nodi di Ranvier non sono mielinizzati",
  },
  {
    id: 996,
    TrueOrFalse: false,
    text: "Il reeticolo endoplasmatico liscio è coinvolto nella sintesi proteica",
  },
  {
    id: 997,
    TrueOrFalse: true,
    text: "Il riflesso patellare o da stiramento prevede il coinvolgimento dei fusi neuromuscolari ",
  },
  {
    id: 998,
    TrueOrFalse: false,
    text: "L'insulina si lega a recettori ionotropi",
  },
  {
    id: 999,
    TrueOrFalse: false,
    text: "Il valore della costante di spazio lambda in un neurone tende a essere il più piccolo possibile",
  },
  {
    id: 1000,
    TrueOrFalse: true,
    text: "La legge di Nerst esprime il valore del potenziale di membrana in funzione delle concentrazioni ioniche intra e extra cellulari dei diversi ioni ",
  },
  {
    id: 1001,
    TrueOrFalse: false,
    text: "Trascrizione genica necessita dei ribosomi",
  },
  {
    id: 1002,
    TrueOrFalse: true,
    text: "Le sinapsi chimiche consentono il trasferimento dell'informazione in maniera unidirezionale",
  },
  {
    id: 1003,
    TrueOrFalse: true,
    text: "Nel midollo spinale le informazioni sensoriali afferiscono attraverso le corna dorsali",
  },
  {
    id: 1004,
    TrueOrFalse: true,
    text: "La fosforilazione ossidativa avviene nei mitocondri",
  },
  {
    id: 1005,
    TrueOrFalse: false,
    text: "Le molecole organiche hanno uno scheletro formato da atomi di carbonio uniti tra loro da legami idrogeno",
  },
  {
    id: 1006,
    TrueOrFalse: false,
    text: "Un neurotrasmettitore inibitorio depolarizza la membrana postsinaptica",
  },
  {
    id: 1007,
    TrueOrFalse: false,
    text: "Un ormone agisce sempre nei pressi del sito di rilascio",
  },
  {
    id: 1008,
    TrueOrFalse: true,
    text: "Al potenziale di equilibrio elettrochimico il flusso netto dello ione è nullo",
  },
  {
    id: 1009,
    TrueOrFalse: true,
    text: "Un potenziale graduato può essere iperpolarizzante",
  },
  {
    id: 1010,
    TrueOrFalse: true,
    text: "Il recettore nicotinico colinergico è di tipo ionotropo",
  },
  {
    id: 1011,
    TrueOrFalse: true,
    text: "La DNA polimerasi è in grado di eseguire una replicazione del DNA di tipo semiconservativa",
  },
  {
    id: 1012,
    TrueOrFalse: false,
    text: "Lo splicing è un processo di maturazione del t-RNA (RNA transfer)",
  },
  {
    id: 1013,
    TrueOrFalse: false,
    text: "Nel processo di sintesi proteica ciascuna base azotata codifica per un amminoacido diverso",
  },
  {
    id: 1014,
    TrueOrFalse: true,
    text: "Il sistema nervoso simpatico è caratterizzato dal rilascio di catecolamine da parte delle fibre postgangliari",
  },
  {
    id: 1015,
    TrueOrFalse: false,
    text: "Le cellule ossintiche dello stomaco producono secretina",
  },
  {
    id: 1016,
    TrueOrFalse: false,
    text: "I tessuti sono composti esclusivamente da cellule",
  },
  {
    id: 1017,
    TrueOrFalse: true,
    text: "La pompa Sodio/Potassio è elettrogenica",
  },
  {
    id: 1018,
    TrueOrFalse: false,
    text: "La diffusione facilitata avviene senza l'ausilio di proteine di membrana  ",
  },
];

export { Questions };
